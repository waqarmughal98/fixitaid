/**
 * cPanel "Setup Node.js App" entry file.
 * In the app settings, set the startup file to server.js.
 * cPanel sets PORT; Passenger connects to that port.
 */
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const hostname = "0.0.0.0";
const app = next({ dev: false, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res, parse(req.url, true)).catch((error) => {
      console.error(error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    });
  }).listen(port, hostname, () => {
    console.log(`Ready on port ${port}`);
  });
});
