const http = require('http');
const connect = require('connect');
const serveStatic = require('serve-static');
const server = serveStatic(`${__dirname}/public`, { "index": ["index.html"]})

const app = connect();

app.use((req, res, next) => server(req, res, next));
http.createServer(app).listen(8080)
