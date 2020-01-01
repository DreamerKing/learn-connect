function setup(formate) {
    const pattern = /:(\w+)/g;

    return function(req, res, next) {
        const str = formate.replace(pattern, (match, property) => {
            return req[property];
        });
        console.log(str);
        next();
    }
}

module.exports = setup;