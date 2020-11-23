import { createRouter, createWebHashHistory } from "vue-router";

// 导入登录页面组件
import Login from "@/views/Login";

// 声明路由规则
const routes = [
  // 如果地址为根路径，直接跳转到登录页面
  { path: "/", redirect: "/login" },
  // 登录页面
  { name: "Login", path: "/login", component: Login },
  // 首页
  {
    name: "Home",
    path: "/home",
    component: () => import("../views/Home"),
    children: [
      { path: "/home", redirect: "/welcome" },
      // welcome组件
      { path: "/welcome", component: () => import("../components/Welcome") },
      // UserList组件
      { path: "/users", component: () => import("../components/Users") },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//定义路由导航守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = window.sessionStorage.getItem("token");
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next();
});
export default router;
