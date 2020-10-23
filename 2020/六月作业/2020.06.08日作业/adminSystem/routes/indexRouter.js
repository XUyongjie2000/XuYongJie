//1.引入express
const express = require("express");
//2.使用express方法创建路由
const indexRouter = express.Router();
//3.创建路由
indexRouter.get("/", (req, res) => {
  res.send("后台管理系统首页");
});
//4.导出
module.exports = indexRouter;
