// const UserServer = require('../server/userServer.js')
const SysUserModel = require('../models/SysUserModel')
const SysUserRoleModel = require('../models/SysUserRoleModel')
const SysRoleModel = require('../models/SysRoleModel')
const SysRolePermmisionModel = require('../models/SysRolePermmisionModel')
const SysResourceModel = require('../models/SysResourceModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op; //通过Op调用对应操作符


// 一对一多 用户表对关联表 
SysUserModel.hasMany(SysUserRoleModel, {
  foreignKey: 'user_id',
  as: 'roleLits'
}) //  外键约束
// 一对一多 角色对关联表
SysRoleModel.hasMany(SysUserRoleModel, {
  foreignKey: 'role_id',
  as: 'roleLits'
}) //  外键约束


// 一对一多  角色对关联表
SysRoleModel.hasMany(SysRolePermmisionModel, {
  foreignKey: 'role_id'
}) //  外键约束
// 一对一多  权限对关联表
SysResourceModel.hasMany(SysRolePermmisionModel, {
  foreignKey: 'res_id'
}) //  外键约束

// 用户-角色 多对多
SysUserModel.belongsToMany(SysRoleModel, {
  through: {
    model: SysUserRoleModel,
    unique: false // 取消联合主键的约定
  },
  foreignKey: 'user_id', //通过外键user_id
  constraints: false
})
SysRoleModel.belongsToMany(SysUserModel, {
  through: {
    model: SysUserRoleModel,
    unique: false, // 取消联合主键的约定
  },
  foreignKey: 'role_id', //通过外键role_id
  constraints: false
})
// 角色-权限 多对多
SysRoleModel.belongsToMany(SysResourceModel, {
  through: {
    model: SysRolePermmisionModel,
    unique: false
  },
  foreignKey: 'role_id', //通过外键user_id
  constraints: false
})
SysResourceModel.belongsToMany(SysRoleModel, {
  through: {
    model: SysRolePermmisionModel,
    unique: false,
  },
  foreignKey: 'res_id', //通过外键role_id
  constraints: false
})

class UserController {
  async test(req, res) {
    // 给用户设置角色
    //  let user = await SysUserModel.create({nick_name: 'joke', password: 123})  //返回创建的user对象
    //  let roles = await SysRoleModel.findAll({ 
    //     where: { role_id: [1]}
    //   })  //  找到对应的角色
    //  let row = await user.addSys_roles(roles)

    // let roleArr = await SysUserModel.findAll({
    //   attributes: ['user_id'],
    //   where: {
    //     user_id: 33
    //   },
    //   include: [
    //     {
    //       model: SysRoleModel,   
    //       attributes: ['role_id'],
    //       // as: 'roleList' 取别名
    //     }
    //   ]
    // })

    // let resArr = await SysRoleModel.findAndCountAll({
    //   // attributes: ['user_id'],
    //   where: {
    //     role_id: [1,2]
    //   },
    //   include: [
    //     {
    //       model: SysResourceModel,   
    //       // attributes: ['role_id', 'role_name'],
    //       // where: { role_id: 1}
    //     }
    //   ]
    // })
    let role = await SysUserModel.findOne({
      attributes: ['user_id'],
      where: {
        user_id: 33
      },
      include: {
        model: SysUserRoleModel,
        attributes: ['role_id'],
        as: 'roleLits'
      }
    })

    res.json({
      data: role
    })
    // res.json({
    //   data: resArr.rows[0].sys_resources
    // })
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

  }
  async findone(req, res) {
    let {
      id
    } = req.query
    let _data = await UserServer.findOne(id)
    res.json({
      data: _data
    })
  }
}
module.exports = new UserController()