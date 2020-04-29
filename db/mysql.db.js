let Sequelize = require('sequelize')
// 数据库配置文件
let sqlConfig = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "test"
}
let db = new Sequelize(sqlConfig.database, sqlConfig.user, sqlConfig.password, {
    host: sqlConfig.host,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});
db.authenticate().then((p) => {
  console.log('created. ' + JSON.stringify(p));
}).catch(err => {
  console.error('mysql connection error:', err);
});

module.exports = db;