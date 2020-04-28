const SysUserModel = require('../models/SysUserModel')
const SysUserRoleModel = require('../models/SysUserRoleModel')
class UserServer {
  async findAll () {
    let data = await SysUserModel.findAll({
      include: [{
        model: SysUserRoleModel,
        where: {
          user_id: 1
        }
      }]
    })
    return data
  }
  async findOne (id) {
    let data = await SysUserModel.findOne({where: {user_id: id}}) 
    return data
  }
}

module.exports =  new UserServer()          