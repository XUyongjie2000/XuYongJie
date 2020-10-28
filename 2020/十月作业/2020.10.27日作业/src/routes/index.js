//引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";
//导入组件
import Users from "../components/Users";
//定义路由
const routes = [
  //重定向
  {
    //路由规则
    path: "/",
    //要重定向到那个路由
    redirect: "/users"
  },
  {
    //路由规则
    path: "/users",
    //要展示得组件
    component: Users
  },
  {
    path: "/userinfo/:id",
    //当path中的路由被触发得时候 动态的懒加载该组件 而不是当应用启动的时候就去加载
    component: () => import("../components/Userinfo.vue"),
    props: true
  },
  {
    path: "/rights",
    //当path中的路由被触发得时候 动态的懒加载该组件 而不是当应用启动的时候就去加载
    component: () => import("../components/Rights.vue")
  },
  {
    path: "/goods",
    //当path中的路由被触发得时候 动态的懒加载该组件 而不是当应用启动的时候就去加载
    component: () => import("../components/Goods.vue")
  },
  {
    path: "/orders",
    //当path中的路由被触发得时候 动态的懒加载该组件 而不是当应用启动的时候就去加载
    component: () => import("../components/Orders.vue")
  },
  {
    path: "/settings",
    //当path中的路由被触发得时候 动态的懒加载该组件 而不是当应用启动的时候就去加载
    component: () => import("../components/Settings.vue")
  }
];

//创建路由
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
});
//导出路由
export default router;
