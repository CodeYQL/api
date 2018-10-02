function register(req, res) {
  res.json({});
}

function login(req, res) {
  res.json({});
}

function logout(req, res) {
  res.json({});
}

function events(req, res) {
  res.json({});
}

function event(req, res) {
  res.json({});
}

module.exports = {
  routes(router) {
    router.post('/register', register);
    router.post('/login', login);
    router.post('/logout', logout);
    router.get('/events', events);
    router.get('/events/:event_id', event);
  
    return router;
  }
};