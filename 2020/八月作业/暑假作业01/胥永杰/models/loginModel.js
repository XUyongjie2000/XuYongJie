//1.安装mysql包
//2.引入MySQL包，创建数据库连接池
const pool = require('../config/dbconfig');
//从数据库连接池中通过连接去查询数据库
//error错误信息
//results操作结果
//fields字段信息(一般不需要)
//3.通过数据库连接池去查询数据库
module.exports.findUser = (username, callback) => {
    //sql语句
    pool.query(`select * from users where username='${username}'`, function (error, results) {
        if (error) throw error;
        callback(results);
    })
}
