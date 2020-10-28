import { createApp } from "vue";
import App from "./App.vue";
//导入路由
import routes from "./routes";
const app = createApp(App);

//挂载
app.use(routes);
app.mount("#app");
