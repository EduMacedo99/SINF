const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './' });

module.exports = (server, db) => {
    server.post('/api/import', multipartMiddleware, (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json({
            'message': 'File uploaded succesfully.'
        });
    })
}