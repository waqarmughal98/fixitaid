<?php
// Copy to quote.config.php on the server and fill in the App Password.
// Never commit quote.config.php. Blocked from web access in .htaccess.

return [
    // Google Workspace / Gmail SMTP
    'smtp_host' => 'smtp.gmail.com',
    'smtp_port' => 587,
    'smtp_user' => 'info@fixitaid.com',
    'smtp_pass' => 'fbfc bwic uyyo kujm',

    'mail_from' => 'info@fixitaid.com',
    'mail_from_name' => 'Fix It Aid Form Submission',
    'mail_to' => 'info@fixitaid.com',
];
