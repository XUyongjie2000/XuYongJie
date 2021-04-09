export default {
	namespaced: true,
	state: {
		// 购物车
		cart: JSON.parse(uni.getStorageSync('cart') || '[]')
	},
	mutations: {
		// 创建addToCart方法
		// 把商品添加到购物车
		/**
		 * @param { Array } state 就是state中存的购物车信息
		 * @param {Object} payload 某一个商品
		 */
		addToCart(state, payload) {
			// console.log(state);
			// console.log('+++++++++++++++')
			// console.log(payload);
			// 1.判断payload中的商品id是否存在于state中的cart中
			const resultFlag = state.cart.find(item => item.goods_id === payload.goods_id);
			// console.log("*****************")
			// console.log(resultFlag);
			// 2.判断如果不存在 那么就把商品对象添加到cart数组中g
			if (!resultFlag) {
				state.cart.push(payload);
			} else {
				// 3.如果存在，那么就把某一个对象中的商品数量++
				resultFlag.goods_count++;
				// console.log(state.cart);
			}

			this.commit("storeCart/saveToStorage");
		},
		saveToStorage(state) {
			// 把数据存储到本地 chrome引擎
			uni.setStorageSync("cart", JSON.stringify(state.cart) || '[]');
		},
		updateGoodsState(state, goods) {
			// 查找到购物车中 id为 点击的那个商品
			const findResult = state.cart.find(item => item.goods_id === goods.goods_id);
			// 如果这个商品存在
			if (findResult) {
				// 把传过来的商品的goods_checked 赋值给cart中找到的那个商品
				findResult.goods_checked = goods.goods_checked;
				// 调用本地存储方法，把已经改变的数据存起来
				this.commit("storeCart/saveToStorage");
			}
		},
		updateGoodsCount(state, goods) {
			// 查找到购物车中 id为 点击的那个商品
			const findResult = state.cart.find(item => item.goods_id === goods.goods_id);
			// 如果这个商品存在
			if (findResult) {
				// 把传过来的商品的goods_checked 赋值给cart中找到的那个商品
				findResult.goods_count = goods.goods_count;
				// 调用本地存储方法，把已经改变的数据存起来
				this.commit("storeCart/saveToStorage");
			}
		},
		removeGoodsById(state, goods) {
			// console.log("******************************");
			// filter中的回调函数是一个条件
			// 如果我们所遍历的数据满足这个条件 ，那么filter会返回一个满足条件的新数组
			state.cart = state.cart.filter(item => item.goods_id !== goods.goods_id);
			this.commit("storeCart/saveToStorage");
		},
		updateAllGoodsState(state, newState) {
			// 遍历每个商品 把每个商品的state都改成newState
			state.cart.forEach((item) => {
				item.goods_checked = newState;
			})

			this.commit("storeCart/saveToStorage");
		}
	},
	actions: {

	},
	getters: {
		// 1.声明一个计算属性total
		total(state) {
			// 1.1 声明一个变量c 用来计数
			let c = 0;
			// 1.2 对c这个值进行累加
			state.cart.forEach(item => {
				c += item.goods_count;
			})
			// 1.3 return c
			return c;
		},
		// 2.计算已勾选商品的总数量
		checkedCount(state) {
			// 1.先找出已经勾上的
			const filterResult = state.cart.filter(f => f.goods_checked);
			console.log(filterResult);

			return filterResult.reduce(function(accumulator, currentValue) {
				return accumulator + currentValue.goods_count;
			}, 0);
		},
		checkedGoodsAmount(state){
			// 1.先找出已经勾上的
			const filterAmount = state.cart.filter(f => f.goods_checked).reduce(function(accumulator, currentValue) {
				return accumulator + currentValue.goods_price *currentValue.goods_count;
			}, 0);
			return filterAmount
		}
	}
}
