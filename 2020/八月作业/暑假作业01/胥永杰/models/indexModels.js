//引入数据库连接池
const pool = require('../config/dbconfig');
const { search } = require('../routes/indexRouter');

//#region 查询所有英雄信息
module.exports.findUser = (callback) => {
   pool.query(`SELECT * FROM hero`, function (error, results) {
      if (error) throw error;
      //    console.log(results);
      callback(results);
   });
}
//#endregion
//#region 删除英雄
module.exports.deleteHero = (id, callback) => {
   let sql = `delete from hero where id = ${id}`;
   pool.query(sql, function (error, results) {
      if (error) throw error,
         console.log(results); 
      callback(results);
   })
}
//#endregion
//#region 查找英雄
module.exports.findHero = (search, callback) => {
   let sql = `select * from hero where hname like '%${search}%';`;
   pool.query(sql, function (error, results) {
      if (error) throw error,
         console.log(results); 
      callback(results);
   })
}
//#endregion
