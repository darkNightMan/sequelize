const User = require('../models/User')

class UserServer {
  async findAll () {
    let data = await User.findAll()
    return data
  }
  async findOne (id) {
    let data = await User.findOne({where: {id: id}}) 
    return data
  }
}

module.exports =  new UserServer()          