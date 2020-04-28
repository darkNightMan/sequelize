// const UserServer = require('../server/userServer.js')
// const SysUserModel = require('../models/SysUserModel')
// const SysUserRoleModel = require('../models/SysUserRoleModel')
// const SysRolePermmisionModel = require('../models/SysRolePermmisionModel')
const SysResourceModel = require('../models/SysResourceModel')
const  Sequelize = require('sequelize')
const Op = Sequelize.Op;//通过Op调用对应操作符
class UserController {
   async test (req, res) {
      //  查询
      // let _data = await SysUserModel.findAll({
      //   attributes: ['nick_name'] // 过滤
      // })
    
      // let _data = await SysResourceModel.findAll({  // 查询菜单or
      //   where: {
      //     [Op.or]: [
      //       {parent_id:  2},
      //       {res_id: 2},
      //     ]
      //   }
      // })
      // let _data = await SysResourceModel.findAll({  // 排序
      //   where: {
      //     [Op.or]: [
      //       {parent_id:  2},
      //       {res_id: 2},
      //     ]
      //   },
      //   order: [[ 'sort', 'ASC']]
      // })
      // let _data = await SysResourceModel.findAll({  // 分页
      //   where: {
      //     [Op.or]: [
      //       {parent_id:  2},
      //       {res_id: 2},
      //     ]
      //   },
      //   order: [[ 'sort', 'DESC']],
      //   limit: 2, //  pageSize；
      //   offset: 0 // pageSize * (pageIndex - 1)
      // })

      // let _data = await SysResourceModel.findAndCountAll({  // 查询并获取数量
      //   where: {
      //     [Op.or]: [
      //       {parent_id:  2},
      //       {res_id: 2},
      //     ]
      //   },
      //   order: [[ 'sort', 'DESC']],
      //   limit: 2, //  pageSize；
      //   offset: 0 // pageSize * (pageIndex - 1)
      // })

      // ======================================
      //  插入模拟批量插入
      // let row = await SysResourceModel.bulkCreate( 
      //   [
      //     { 
      //       parent_id:2,
      //       res_name: '测试咯1',
      //       res_icon: 'asdasdasd',
      //       state: 1,
      //       type: 2,
      //       component: 'asdasdasdad'
      //     },
      //     { 
      //       parent_id:2,
      //       res_name: '测试咯2',
      //       res_icon: 'asdasdasd',
      //       state: 1,
      //       type: 2,
      //       component: 'asdasdasdad'
      //     },
      //     { 
      //       parent_id:2,
      //       res_name: '测试咯3',
      //       res_icon: 'asdasdasd',
      //       state: 1,
      //       type: 2,
      //       component: 'asdasdasdad'
      //     },
      //   ]);
      // 批量更新
      // let update = await SysResourceModel.update(
      //   {
      //     res_code: 'update'},
      //     { where: { parent_id: [1,2]}
      //   }
      // )

        // 批量更新
      // let deletes = await SysResourceModel.destroy({ 
      //   where: {
      //      parent_id: [1,2] 
      //   }
      // })
         
       
     
      res.json({
        data: update
      })
   }
   async findone (req, res) {
     let { id } = req.query
     let _data = await UserServer.findOne(id)
     res.json({
      data: _data
    })
   }
}
module.exports =  new UserController()
