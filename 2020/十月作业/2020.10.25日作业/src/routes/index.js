//引入
import { createRouter, createWebHashHistory } from "vue-router";

//导入
import User from "../components/User";
import Login from "../components/Login";
import userlogin from "../components/userlogin";
import erweima from "../components/erweima";
//定义
const routes = [
  { path: "/", redirect: "/user" },
  { path: "/login", redirect: "/userlogin" },
  { path: "/user", component: User },
  {
    path: "/login",
    component: Login,
    children: [
      {
        path: "/userlogin",
        component: userlogin
      },
      {
        path: "/erweima",
        component: erweima
      }
    ]
  }
];
//创建
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
//导出
export default router;
