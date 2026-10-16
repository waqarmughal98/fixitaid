<?php
/**
 * Lead form handler for fixitaid.com.
 * Accepts JSON from the Next.js forms and emails the lead via Google SMTP.
 *
 * Expected JSON: name, phone, zip, service, details?, urgent?, page, company?
 * (company is a honeypot — real people leave it empty.)
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Allow: POST, OPTIONS');
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$configPath = __DIR__ . '/quote.config.php';
if (!is_readable($configPath)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'not_configured']);
    exit;
}

/** @var array{smtp_host:string,smtp_port:int,smtp_user:string,smtp_pass:string,mail_from:string,mail_from_name:string,mail_to:string} $config */
$config = require $configPath;

$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_json']);
    exit;
}

// Honeypot: pretend success and drop the message.
if (trim((string) ($data['company'] ?? '')) !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

$name = trim((string) ($data['name'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$zip = trim((string) ($data['zip'] ?? ''));
$service = trim((string) ($data['service'] ?? ''));
$details = trim((string) ($data['details'] ?? ''));
$urgent = trim((string) ($data['urgent'] ?? ''));
$page = trim((string) ($data['page'] ?? ''));

$phoneDigits = preg_replace('/\D+/', '', $phone) ?? '';
if (strlen($phoneDigits) === 11 && str_starts_with($phoneDigits, '1')) {
    $phoneDigits = substr($phoneDigits, 1);
}

$errors = [];
if (strlen($name) < 2 || strlen($name) > 80) {
    $errors[] = 'name';
}
if (strlen($phoneDigits) !== 10) {
    $errors[] = 'phone';
}
if (!preg_match('/^\d{5}$/', $zip)) {
    $errors[] = 'zip';
}
if ($service === '' || strlen($service) > 120) {
    $errors[] = 'service';
}
if (strlen($details) > 1500) {
    $errors[] = 'details';
}
if ($urgent !== '' && !in_array($urgent, ['yes', 'no'], true)) {
    $errors[] = 'urgent';
}
if (strlen($page) > 200) {
    $errors[] = 'page';
}

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'validation', 'fields' => $errors]);
    exit;
}

if (!rateLimitOk(__DIR__ . '/.quote-rate', 8, 600)) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'rate_limited']);
    exit;
}

$subject = sprintf('New lead: %s — %s (%s)', $service, $name, $zip);
$lines = [
    'New website lead',
    '',
    'Name: ' . $name,
    'Phone: ' . $phone,
    'ZIP: ' . $zip,
    'Service: ' . $service,
];
if ($urgent !== '') {
    $lines[] = 'Urgent: ' . $urgent;
}
if ($details !== '') {
    $lines[] = '';
    $lines[] = 'Details:';
    $lines[] = $details;
}
$lines[] = '';
$lines[] = 'Page: ' . ($page !== '' ? $page : '(unknown)');
$lines[] = 'Time: ' . gmdate('Y-m-d H:i:s') . ' UTC';
$lines[] = 'IP: ' . clientIp();
$body = implode("\n", $lines);

try {
    sendSmtpMail($config, $config['mail_to'], $subject, $body);
    echo json_encode(['ok' => true]);
} catch (Throwable $e) {
    error_log('quote.php mail failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send_failed']);
}

// ---------------------------------------------------------------------------

function clientIp(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
    return is_string($ip) ? $ip : '0.0.0.0';
}

/** Simple file-based rate limit: max $max hits per IP in $windowSeconds. */
function rateLimitOk(string $dir, int $max, int $windowSeconds): bool
{
    if (!is_dir($dir) && !@mkdir($dir, 0700, true) && !is_dir($dir)) {
        return true; // fail open if we cannot store state
    }

    $file = $dir . '/' . hash('sha256', clientIp()) . '.json';
    $now = time();
    $hits = [];

    if (is_readable($file)) {
        $decoded = json_decode((string) file_get_contents($file), true);
        if (is_array($decoded)) {
            foreach ($decoded as $ts) {
                if (is_int($ts) && $ts > $now - $windowSeconds) {
                    $hits[] = $ts;
                }
            }
        }
    }

    if (count($hits) >= $max) {
        return false;
    }

    $hits[] = $now;
    file_put_contents($file, json_encode($hits), LOCK_EX);
    return true;
}

/**
 * Send one plain-text message through Google SMTP (STARTTLS + AUTH LOGIN).
 *
 * @param array{smtp_host:string,smtp_port:int,smtp_user:string,smtp_pass:string,mail_from:string,mail_from_name:string,mail_to:string} $config
 */
function sendSmtpMail(array $config, string $to, string $subject, string $body): void
{
    $host = $config['smtp_host'];
    $port = (int) $config['smtp_port'];
    $user = $config['smtp_user'];
    $pass = str_replace(' ', '', $config['smtp_pass']);
    $from = $config['mail_from'];
    $fromName = $config['mail_from_name'];

    $remote = ($port === 465 ? 'ssl://' : '') . $host . ':' . $port;
    $fp = @stream_socket_client($remote, $errno, $errstr, 20, STREAM_CLIENT_CONNECT);
    if (!$fp) {
        throw new RuntimeException("SMTP connect failed: $errstr ($errno)");
    }
    stream_set_timeout($fp, 20);

    try {
        expectSmtp($fp, 220);
        smtpCmd($fp, 'EHLO fixitaid.com', 250);

        if ($port === 587) {
            smtpCmd($fp, 'STARTTLS', 220);
            if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new RuntimeException('STARTTLS failed');
            }
            smtpCmd($fp, 'EHLO fixitaid.com', 250);
        }

        smtpCmd($fp, 'AUTH LOGIN', 334);
        smtpCmd($fp, base64_encode($user), 334);
        smtpCmd($fp, base64_encode($pass), 235);

        smtpCmd($fp, 'MAIL FROM:<' . $from . '>', 250);
        smtpCmd($fp, 'RCPT TO:<' . $to . '>', 250);
        smtpCmd($fp, 'DATA', 354);

        $headers = [
            'Date: ' . date('r'),
            'From: ' . encodeAddress($fromName, $from),
            'To: ' . $to,
            'Subject: ' . encodeHeader($subject),
            'MIME-Version: 1.0',
            'Content-Type: text/plain; charset=UTF-8',
            'Content-Transfer-Encoding: 8bit',
            'Message-ID: <' . bin2hex(random_bytes(12)) . '@fixitaid.com>',
            'X-Mailer: FixItAid-quote.php',
        ];

        $message = implode("\r\n", $headers) . "\r\n\r\n" . normalizeBody($body) . "\r\n.";
        smtpCmd($fp, $message, 250);
        smtpCmd($fp, 'QUIT', 221);
    } finally {
        fclose($fp);
    }
}

function normalizeBody(string $body): string
{
    $body = str_replace(["\r\n", "\r"], "\n", $body);
    $body = str_replace("\n", "\r\n", $body);
    // Prevent SMTP terminator injection.
    return preg_replace('/^\./m', '..', $body) ?? $body;
}

function encodeAddress(string $name, string $email): string
{
    $name = trim($name);
    if ($name === '') {
        return $email;
    }
    return encodeHeader($name) . ' <' . $email . '>';
}

function encodeHeader(string $value): string
{
    if (preg_match('/^[\x20-\x7E]*$/', $value)) {
        return $value;
    }
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

/** @param resource $fp */
function smtpCmd($fp, string $cmd, int $expect): void
{
    fwrite($fp, $cmd . "\r\n");
    expectSmtp($fp, $expect);
}

/** @param resource $fp */
function expectSmtp($fp, int $expect): void
{
    $response = '';
    while (($line = fgets($fp, 515)) !== false) {
        $response .= $line;
        if (isset($line[3]) && $line[3] === ' ') {
            break;
        }
    }
    $code = (int) substr($response, 0, 3);
    if ($code !== $expect) {
        throw new RuntimeException("SMTP expected $expect, got: " . trim($response));
    }
}
