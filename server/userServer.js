const User = require('../models/SysUserModel')
const UserRole = require('../models/SysUserRoleModel')
class UserServer {
  async findAll () {
    let data = await User.findAll({
      include: [{
        model: UserRole,
        where: {
          user_id: 1
        }
      }]
    })
    return data
  }
  async findOne (id) {
    let data = await User.findOne({where: {user_id: id}}) 
    return data
  }
}

module.exports =  new UserServer()          