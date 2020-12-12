module.exports = (server, db) => {
    server.put('/api/import', (req, res) => {
        console.log("ola");
        console.log(req.body);
    })
}