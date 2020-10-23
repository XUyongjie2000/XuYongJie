//1.引入express框架
const express = require('express');
//2.使用express方法提供的router方法来创建路由
const addRouter = express.Router();
//3.引入控制器方法
const { addPage, addUser } = require('../controllers/addCtrl');
//4.创建具体路由
//4.1显示英雄添加页面
addRouter.get('/add', addPage);
//4.2添加英雄
addRouter.post('/addHero', addUser);
//导出路由
module.exports = addRouter;