const http = require('http');

const PORT = 3000;
const VERSION = 'v2';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <html>
            <head><title>DevOps PBL3</title></head>
            <body>
                <h1>DevOps CI/CD Pipeline</h1>
                <h2>Application Version: ${VERSION}</h2>
                <p>Deployed successfully using Jenkins, Docker and Kubernetes!</p>
            </body>
        </html>
    `);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Application running on port ${PORT}`);
});
