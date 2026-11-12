const http = require('http');

const patients = [
  { id: 1, name: 'Test Patient A', condition: 'Hypertension' },
  { id: 2, name: 'Test Patient B', condition: 'Diabetes' }
];

http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok' }));
  }
  if (req.url === '/patients') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(patients));
  }
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'not found' }));
}).listen(3000);
