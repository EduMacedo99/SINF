const fs = require('fs');

module.exports = (server, db, multer) => {
    server.post('/api/import', [multer({ dest: "./uploads/" }).single('laig_aula5.pdf'), (req, res) => {
        // let file = 'filename' in req.query ? req.query['filename'] : null;
        console.log(req.body);
        console.log("ola")
        console.log(req.file);
        res.header("Access-Control-Allow-Origin", "*");
        res.json("recebi")
    }]);

    server.get('/file', (req, res) => {
        fs.open('test.xml', 'w', function (error, file) {
            if (error) throw error;
            console.log("fs aqui");
        });

        fs.writeFile("test.xml", "test", function () {
            console.log("test");
        });

        res.header("Access-Control-Allow-Origin", "*");
        res.json("recebi")
    });
}