//引入表单校验
// const Joi = require('@hapi/joi');
const Joi = require('joi');
//引入模型
const { findUser } = require('../models/loginModel');
//#region 1.显示登录页面
module.exports.loginPage = (req, res) => {
    res.render('login');
}
//#endregion
//#region 2.处理登录业务
module.exports.loginUser = (req, res) => {
    // console.log(req.body);
    //1.获取前端传来的数据
    let { username, password } = req.body;
    //2.后端数据检验
    // const schema = Joi.object({
    //     username: Joi.string()
    //         .min(5)
    //         .max(30)
    //         .required(),
    //     password: Joi.string()
    //         .pattern(new RegExp('^[a-zA-Z0-9]{5,30}$'))
    // })
    // console.log(username, password);
    // try {
    //     const result = schema.validateAsync({ username: req.body.username, password: req.body.password },schema);
    //     console.log(result);
    // }
    // catch (err) {
    //     console.log(err);
    // }
    // let result = Joi.validateAsync({ username: username, password: password }, schema);
    const schema = Joi.object().keys({
        username: Joi.string().min(5).max(100).required().error(new Error('用户名或密码不正确')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{5,30}$/).required().error(new Error('用户名或密码不正确'))
    })
    let result = Joi.validate({ username: username, password: password }, schema);
    // console.log(result.error);
    if (result.error) {
        res.send({
            code: 500,
            message: result.error.message
        })
        //抛出错误
        throw result.error;
    }
    //3.数据库的数据对比
    findUser(username, function (results) {
        //1.判断用户名书写是否正确(只要results的长度为0则说明用户名写的不对)
        if (results.length !== 0) {//用户名存在
            //接着比对密码
            if (results[0].password == password) {//密码匹配
                // console.log(req.session);
                //把用户信息保存在session中，为了进行权限管理
                req.session.user = results[0];
                // console.log(req.session);
                res.send({
                    code: 200,
                    message: '登录成功'
                })
            } else {//密码不匹配
                res.send({
                    code: 500,
                    message: '用户名或密码错误'
                })
            }
        } else {//用户名不存在
            res.send({
                code: 500,
                message: '用户名或密码错误'
            })
        }
    })
}
//#endregion

