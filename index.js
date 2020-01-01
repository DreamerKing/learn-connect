const http = require('http');
const connect = require('connect');
const serveStatic = require('serve-static');
const logger = require('./con-logger');
const errorHandler = require('./error-handler');
const server = serveStatic(
    `${__dirname}/public`, 
    { "index": ["index.html"]}
    )

const app = connect();
app
.use(logger(':method :url'))
.use((req, res, next) => server(req, res, next))
.use("/home", hello)
.use(errorHandler)
http.createServer(app).listen(8080)

// function logger(req, res, next) {
//     console.log('%s %s', req.method, req.url);
//     next();
// }

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    throw new Error("Boom!")
    res.end('Hello Connect!');
}
