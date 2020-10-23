//1.引入express
const express = require("express");
//2.使用express方法创建路由
const userRouter = express.Router();
//3.创建路由
userRouter.get("/", (req, res) => {
  res.send("用户列表");
});

userRouter.get("/edit", (req, res) => {
  res.send("用户编辑");
});
//4.导出
module.exports = userRouter;
