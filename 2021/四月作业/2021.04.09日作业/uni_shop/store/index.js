// 1. 导入 Vue 和 Vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 将 Vuex 安装为 Vue 的插件
Vue.use(Vuex)

import storeCart from "./storeCart.js";
import storeUser from "./storeUser.js"
// 创建 Store 的实例对象
const store = new Vuex.Store({
	modules:{
		storeCart,
		storeUser
	}
})
// 向外共享 Store 的实例对象
export default store;