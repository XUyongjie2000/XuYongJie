//引入
import { createStore } from "vuex";

//导出配置
//createStore创建仓库（store就是数据仓库）
export default createStore({
  //存数据的 state状态
  state() {
    return {
      name: "小红1",
      age: 20
    };
  },
  //存方法的（存同步方法的 存异步方法的）

  //用于修改store中的数据
  mutations: {},
  //actions用于处理异步任务
  actions: {},
  //存computed  getters 用于对store中的数据进行加工处理形成新的数据
  getters: {}
});
