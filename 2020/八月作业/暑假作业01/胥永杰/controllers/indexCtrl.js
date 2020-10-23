//1.引入模型
const { findUser, deleteHero, findHero } = require('../models/indexModels');

//#region 显示管理首页
module.exports.indexPage = (req, res) => {
    findUser(function (results) {
        // console.log(results);
        res.render('index', {
            data: results
        });
    })
}
//#endregion
//#region 删除英雄
module.exports.deleteHero = (req, res) => {
    // console.log(req.body.id);
    let { id } = req.body;
    deleteHero(id, function (results) {
        console.log(results);
        if (results.affectedRows == 1) {
        res.send({
            code: 200,
            message: '数据查询成功'
        })
        }
    })
}

//#endregion
module.exports.findHero = (req, res) => {
    //向后台查数据
    // console.log(req.query);
    let { search } = req.query;
    findHero(search, function (results) {
        console.log(results);
        // if (results.affectedRows == 1) {
            res.send({
                code: 200,
                data:results,
                message: '数据查询成功'
            })
        // }
    })
}
//#region 显示英雄编辑页
module.exports.editPage=(req,res)=> {
    console.log(req.params);
}
//#endregion