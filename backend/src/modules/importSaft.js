module.exports = (server, db) => {
    server.put('/api/import', (req, res) => {
        let file = 'filename' in req.query ? req.query['filename'] : null;
        console.log(file);
    })
}