var finalhandler = require('finalhandler')
var http         = require('http')
var Router       = require('router')
var router       = Router()
var api          = require('./api')

router.route('/api/')
.all(function (req, res, next) {
    var action = req._parsedUrl.query.split('&')[0].split('=')[1]
    console.log(api[action])
    if (!api[action]) {
        res.writeHead(404, {"content-Type": "text/html"})
        res.end('request not found')
    }
    res.setHeader('Access-Control-Allow-Origin', 'http://laiqujing.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization,Content-Type,Host,x-wk-date');
    res.setHeader("content-Type", "application/json");
    res.setHeader('Access-Control-Expose-Headers','Etag,Authorization,x-wk-date,token');
    res.statusCode = 200;
    res.statusMessage = 'success';
    api[action](req, res)
})
var server = http.createServer(function(req, res) {
    router(req, res, finalhandler(req, res))
})

server.listen(2334,'api.qujing.com')
console.log(' qujing.com LISTEN AT PORT 2334')

