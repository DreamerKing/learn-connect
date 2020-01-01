静态服务器库
glance

基于Grunt的静态服务器
grunt-cli
grunt-contrib-connect

在Node中使用DOM
1. jsdom
2. cheerio

插件
+ compression 
+ cookie-session
+ body-parser
+ connect-timeout
+ cookie-parser
+ csurf
+ errorhandler
+ method-override
+ morgan
+ response-time
+ serve-favicon
+ serve-index
+ serve-static
+ vhost



API
+ app = connect()
+ app(req, res [, next])
+ app.handle(req, res [, out])
+ app.use(fn)
+ app.use(route, fn)
+ app.listen([...])

中间件的加载顺序很重要