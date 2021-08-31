const http = require('http');

const dateMod = require('./moduleDate');
const exportMod = require('./exportMod');

const person = new exportMod('Juan', 'Dela Cruz', 30);
console.log(person.info());

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`The date and time are currently: ${dateMod.myDateTime()}`);
    res.end();
  } else if (req.url === '/view') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <body>
          <h1>This is view page</h1>
        </body>
      </html>
    `);
    res.end();
  } else if (req.url === '/admin') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <body>
          <h1>This is admin page</h1>
        </body>
      </html>
    `);
    res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <body>
          <h1>Invalid page</h1>
        </body>
      </html>
    `);
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
