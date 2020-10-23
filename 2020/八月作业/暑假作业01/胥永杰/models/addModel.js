//引入数据库连接池
const pool = require('../config/dbconfig');
//添加英雄到数据库
module.exports.insertUser = (heroObj, callback) => {
    let { hname, nickname, skill } = heroObj;
    //占位符写法
    let sql = 'INSERT INTO `hero`(`hname`,`nickname`,`skill`) VALUES (?,?,?)';
    pool.query(sql, [hname, nickname, skill], function (error, results) {
        if (error) throw error;
        // console.log(results);
        callback(results);
    })
}