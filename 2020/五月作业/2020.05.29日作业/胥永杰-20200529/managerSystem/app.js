//1导入包
const express = require("express");
const path = require("path");
const DB = require("./data");
//2设置包
//2.1使用express方法创建web服务
const app = express();
//2.2设置静态资源目录
app.use(express.static(path.join(__dirname, "public")));

//2.3设置post请求参数的中间件
app.use(express.urlencoded({ extended: false }));

//3.接收前端请求并处理返回响应

// 3.1 查找数据
// /api/list 称为路由
// req代表请求 request
// res代表响应 response
app.get("/api/list", (req, res) => {
  DB.findAll(function (data) {
    res.status(200).send({
      code: 200,
      msg: "数据查询成功",
      data: data,
    });
  });
});

//3.2添加数据
app.post("/api/add", (req, res) => {
  // console.log(req.body);

  let newUser = {
    username: req.body.username,
    password: req.body.password,
    age: req.body.age,
    email: req.body.email,
    hobbies: req.body.hobbies,
  };

  DB.addOne(newUser, function (data) {
    // console.log(data);
    if (data) {
      res.status(200).send({
        code: 200,
        msg: "用户添加成功",
        data: data,
      });
    }
  });
});
//4.指定端口并且启动服务
app.listen(80, () => {
  console.log("服务已经启动，请打开: http://localhost");
});
