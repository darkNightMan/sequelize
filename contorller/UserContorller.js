const UserServer = require('../server/userServer.js')

class UserController {
   async list (req, res) {
      let _data = await UserServer.findAll()
      res.json({
        data: _data
      })
   }
   async findone (req, res) {
     let { id } = req.query
     let _data = await UserServer.findOne(id)
     res.json({
      data: _data
    })
   }
   async getUserInfo () {
     let user_id = 1
     
   }
}

module.exports =  new UserController()