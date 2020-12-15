const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('databases/db.json')
const routerJasmin = jsonServer.router('databases/dbJasmin.json')
const router2 = jsonServer.router('databases/accounts.json')
const middlewares = jsonServer.defaults()

const db = router.db.__wrapped__;
const dbJasmin = routerJasmin.db.__wrapped__;
const accounts = router2.db.__wrapped__;

const sales = require('./modules/sales');
const token = require("./modules/token");
const saft = require("./modules/importSaft");
const inventory = require("./modules/inventory");
const bodyParser = require("body-parser");
server.use(jsonServer.bodyParser);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
    extended: true
}));
const account = require("./modules/accounts");
const purchases = require('./modules/purchases')
const url = "https://my.jasminsoftware.com/api/242845/242845-0001"

/**
 * add routes
 */

// route that echoes query parameters
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

sales(server, dbJasmin, url);
purchases(server, db, url);
token(server, db, accounts);
saft(server, db);
inventory(server, db);
account(server, db);

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