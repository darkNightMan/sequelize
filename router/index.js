const UserContorller = require('../contorller/UserContorller')


let router = (app) => {
  app.get('/api/test', UserContorller.test)
  app.get('/api/find', UserContorller.findone)
}

module.exports = router