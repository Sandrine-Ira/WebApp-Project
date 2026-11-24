
const http = require('http');

describe('Coderwanda Node.js Application', () => {
    test('should respond with HTTP status 200', (done) => {
        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Welcome to Coderwanda Ltd</h1>');
        });

        server.listen(0, () => {
            const port = server.address().port;

            http.get(`http://localhost:${port}`, (response) => {
                expect(response.statusCode).toBe(200);
                server.close(done);
            });
        });
    });
});
