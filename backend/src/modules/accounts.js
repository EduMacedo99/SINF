module.exports = (server, accounts) => {
  server.get(`/authentication`, (req, res) => {
    let username = 'username' in req.query ? req.query['username'] : null;
    let password = 'password' in req.query ? req.query['password'] : null;
    console.log(username);
    console.log(JSON.stringify(accounts.User.username));
    console.log(password);
    console.log(JSON.stringify(accounts.User.password));
    if (JSON.stringify(accounts.User.username) == username && JSON.stringify(accounts.User.password) == password) {
        res;
    }
  });
};