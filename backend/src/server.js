const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const router2 = jsonServer.router('accounts.json')
const middlewares = jsonServer.defaults()

const db = router.db.__wrapped__;
const accounts = router2.db.__wrapped__;

const sales = require('./modules/sales');
const token = require("./modules/token");
//const login = require("./modules/accounts");

/**
 * add routes
 */

// route that echoes query parameters
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

sales(server, db);
token(server, db, accounts);
//login(server, accounts);

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