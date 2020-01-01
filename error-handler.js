
function errorHandler(err, req, res, next) {
    const env = process.env.NODE_ENV || 'development';
    res.statusCode = 500;
    switch(env) {
        case "development":
            console.error(err);
            res.setHeader('Content-Type', 'application/json');
            res.end(err.message);
            break;
        default: 
            res.end('Server error');
    }
}

module.exports = errorHandler