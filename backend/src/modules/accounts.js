module.exports = (server, accounts) => {
  server.get(`/authentication`, (req, res) => {
    let username = 'username' in req.query ? req.query['username'] : null;
    let password = 'password' in req.query ? req.query['password'] : null;
    res.json(JSON.stringify(accounts.User.username) == username && JSON.stringify(accounts.User.password) == password);
  });
};