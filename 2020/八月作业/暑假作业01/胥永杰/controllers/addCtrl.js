//引入模型中的方法
const { insertUser } = require("../models/addModel");
//#region 1.显示英雄添加页面
module.exports.addPage = (req, res) => {
    res.render('add');
}
//#endregion
//2.管理添加英雄页面
module.exports.addUser = (req, res) => {
    // console.log(req.body);
    let userData = {
        hname: req.body.hname,
        nickname: req.body.nickname,
        skill: req.body.skill
    }
    insertUser(userData, function (results) {
        // console.log(results);
        res.send({
            code: 200,
            message: '英雄添加成功'
        })
    })
}