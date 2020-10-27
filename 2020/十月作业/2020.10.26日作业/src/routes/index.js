//引入vue-router
import { createRouter, createWebHashHistory } from "vue-router";
//导入组件
import Home from "../components/Home";
import About from "../components/About";
//定义路由
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];

//创建路由
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
});
//导出路由
export default router;
