const UserContorller = require('../contorller/UserContorller')


let router = (app) => {
  app.get('/api/list', UserContorller.list)
  app.get('/api/find', UserContorller.findone)
}

module.exports = router