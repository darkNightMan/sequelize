const  Sequelize = require('sequelize')
const db = require('../db/mysql.db')

let User = db.define('user', 
  {
    user_id: {
      type: Sequelize.INTEGER, //字段类型
      primaryKey: true,
      allowNull: false, // 不为空
      autoIncrement: true
    },
    nick_name: Sequelize.CHAR(255), //如果只有类型，可以直接这么设置
    password: Sequelize.CHAR(255),
    email: Sequelize.CHAR(255),
    phone: {
      type: Sequelize.CHAR(32),
      unique: true // 字段是否是 unique 唯一不重复
    },
    state: Sequelize.TINYINT,
    avatar: Sequelize.CHAR(255),
    update_id: Sequelize.INTEGER

  },
  {
    tableName: 'sys_user',
    timestamps: true,// 是否需要增加createdAt、updatedAt字段
    createdAt: 'create_time', // 不需要createdAt字段
    updatedAt: false,//修改updatedAt字段名称为endtime
    freezeTableName: true,// 禁用修改表名; 默认情况下,sequelize将自动将所有传递的模型名称(define的第一个参数)转换为复数. 如果你不想这样,请设置为true
  }
)
//如果是第一次运行的话,需要用sync 方法创建表
// User.sync({force: true}).then(d=> { //建议在表模型设计完成后，打开此段代码，待数据库中表建立完成后，注释掉此段，防止每次都删除并重新建表
//   for (let n=1;n<10;n++) {
//     User.create({
//       username: `wangxiping${n}`,
//       gender: 1
//     })
//   }
// });

module.exports = User