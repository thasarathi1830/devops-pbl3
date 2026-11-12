const http = require('http');
const COLOR = process.env.COLOR || 'unknown';
const VERSION = process.env.VERSION || 'v0';

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<html><body style="background:${COLOR};color:white;font-family:sans-serif;text-align:center;padding-top:100px">
<h1>${COLOR.toUpperCase()} environment</h1>
<h2>Version: ${VERSION}</h2>
</body></html>`);
}).listen(3000);
