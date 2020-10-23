//1.导入包
//1.1导入express框架
const express = require('express');
//1.2导入path模块
const path = require('path');
//1.3导入用户系统首页路由
const heroindex = require('./routes/indexRouter');
//1.4导入用户系统登录页路由
const herologin = require('./routes/loginRouter');
//1.5
const heroadd = require('./routes/addRouter');
//1.6
const heroedit = require('./routes/editRouter');
//1.7导入ejs包
const ejs = require('ejs');
//1.8 引入session包
const session = require('express-session');
//2.设置包
//2.1创建服务器
const app = express();
//2.2配置静态资源
app.use(express.static(path.join(__dirname, 'public')));
//2.3把views设置为模板文件的根目录
app.set('views', path.join(__dirname, 'views'));
//2.4设置模板引擎为ejs
app.set('view engine', 'ejs');
//2.5html扩展名注册ejs
// app.engine('html',ejs.renderFile);
//2.6配置urlencoded
app.use(express.urlencoded({ extended: false }));
//2.7配置session包
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 * 10
    } 
}))
//2.8路由拦截(登陆页面让访问 req.session也让访问)
app.use(function (req, res, next) {
    //获取url
    let url = req.originalUrl;
    //判断是不是登录页和是否没有req.session.user 就让页面跳转到登录页
    if (url != '/login' && !req.session.user) {
        //重定向到登录页
        return res.redirect('/login');
    }
    next();
})
//3 挂载路由
//3.1挂载首页路由
app.use(heroindex);
//3.2挂载登录页路由
app.use(herologin);
//3.3
app.use(heroadd);
//3.4
app.use(heroedit);
//4指定端口 启动服务
app.listen(80, () => {
    console.log('请打开:http://localhost');
})