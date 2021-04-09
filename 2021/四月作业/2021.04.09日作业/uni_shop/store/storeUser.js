export default {
	namespaced: true,
	state: {
		address: JSON.parse(uni.getStorageSync('address') || '{}'),
		token: uni.getStorageSync('token') || '',
		userinfo: JSON.parse(uni.getStorageSync('userinfo') || '{}'),
		// from openType
		redirectInfo: null
	},
	mutations: {
		updateAddress(state, address) {
			state.address = address;
			this.commit("storeUser/saveAddressToStorage");
		},
		saveAddressToStorage(state) {
			// 把数据存储到本地 chrome引擎
			uni.setStorageSync('address', JSON.stringify(state.address || {}));
		},
		updateUserInfo(state, userinfo) {
			state.userinfo = userinfo;
			this.commit("storeUser/saveUserInfoToStorage");
		},
		saveUserInfoToStorage(state) {
			// 把数据存储到本地 chrome引擎
			uni.setStorageSync('userinfo', JSON.stringify(state.userinfo || {}));
		},
		updateToken(state, token) {
			state.token = token;
			this.commit("storeUser/saveTokenToStorage");
		},
		saveTokenToStorage(state) {
			// 把数据存储到本地 chrome引擎
			uni.setStorageSync('token', state.token || "");
		},
		updateRedirectInfo(state,redirectInfo) {
			state.redirectInfo = redirectInfo;
			console.log(state.redirectInfo)
		},

	},
	actions: {},
	getters: {
		addstr(state) {
			// 判断
			if (state.address.provinceName === '') return '';
			// 拼接字符串 广东省
			return `${state.address.provinceName} ${state.address.cityName} ${state.address.countyName} ${state.address.detailInfo}`
		}
	}
}
