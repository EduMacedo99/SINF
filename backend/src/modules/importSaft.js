module.exports = (server, db) => {
    server.post('/api/import', (req, res) => {
        console.log("aaaaaaaaaaa");
        console.log(req);
        console.log(req.body);
        console.log(req.file);
        res.header("Access-Control-Allow-Origin", "*");
        res.json("receieved file");
    })
}