module.exports = (server, db) => {
    server.post('/api/import', (req, res) => {
        console.log("aaaaaaaaaaa");
        console.log(req);
        res.header("Access-Control-Allow-Origin", "*");
        res.json("receieved file");
    })
}