const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const db = router.db.__wrapped__;

const sales = require('./modules/sales');
const accounts = require('./modules/accounts');
const token = require("./modules/token");

/**
 * add routes
 */

// route that echoes query parameters
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

sales(server, db);
accounts(server, db);
token(server, db);

// set a timestamp on every resource created, probably not needed
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
})

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running at localhost:3000')
})