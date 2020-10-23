//1.引入express框架
const express = require('express');
//2.使用express方法提供的router方法来创建路由
const indexRouter = express.Router();
//3.引入控制器方法
const { indexPage,deleteHero,findHero,editPage } = require('../controllers/indexCtrl');
//4.创建具体路由 
//1.显示首页管理
indexRouter.get('/', indexPage);
//2.删除英雄
indexRouter.delete('/delete',deleteHero);
//3.查找英雄
indexRouter.get('/find',findHero);
//4.显示英雄编辑页
indexRouter.get('/edit',editPage);
//导出路由
module.exports = indexRouter;