<template>
	<view class="my-settle-container">
		<!-- 全选区域 -->
		<label class="radio" @click="changeAllStates">
			<radio color="#C00000" :checked="isFullChecked" /><text>全选</text>
		</label>

		<!-- 合计区域 -->
		<view class="amount-box">
			合计:<text class="amount">￥{{ Number(checkedGoodsAmount).toFixed(2)}}</text>
		</view>

		<!-- 结算按钮 -->
		<view class="btn-settle" @click="settlement">结算({{checkedCount}})</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters
	} from "vuex";
	export default {
		name: "my-settle",
		data() {
			return {
				second: 3,
				timer: null
			};
		},
		methods: {
			...mapMutations('storeCart', ['updateAllGoodsState']),
			...mapMutations('storeUser', ['updateRedirectInfo']),
			changeAllStates() {
				this.updateAllGoodsState(!this.isFullChecked);
			},
			settlement() {
				// 判断 用户是否已经勾选了商品
				// console.log(this.checkedCount)
				if (!this.checkedCount) return uni.$toast("您还没有选择商品!!!");
				// 判断用户是否选择了收货地址
				// console.log(this.address)
				if (JSON.stringify(this.address) === '{}') return uni.$toast("您还没有选择地址!!!!");
				// 判断用户是否登录
				if (!this.token) return this.dalayNavigator();

				// 进行支付
				this.payOrder()
			},
			showTips(n) {
				uni.showToast({
					icon: 'none',
					title: '请登录后再结算！' + n + ' 秒后自动跳转到登录页',
					duration: 2000,
					mask: true,
				});
			},
			dalayNavigator() {
				this.showTips(this.second);
				const _this = this;
				clearInterval(this.timer);
				this.timer = setInterval(() => {
					// 每隔1秒 让我们的秒数 --
					this.second--;
					if (this.second <= 0) {
						clearInterval(this.timer);
						uni.switchTab({
							url: "/pages/my/my",
							// success: function(){} 对象中方法的简写
							// success: ()=>{} 对象中函数的另外一个写法 普通函数 和箭头函数
							success() {
								_this.updateRedirectInfo({
									openType: "switchTab",
									from: "/pages/cart/cart"
								})
							}
						})

						this.second = 3;
						return;
					}

					// 每次自减，调用showTips
					this.showTips(this.second);

				}, 1000)
			},
			async payOrder(){
				// 发起订单
				const orderInfo = {
					order_price: 0.01,
					// 字符串
					consignee_addr: this.addstr,
					goods: this.cart.filter(x=> x.goods_checked).map(item=> ({ goods_id: item.goods_id, goods_number: item.goods_count, goods_price: item.goods_price}))
				}
				// console.log(orderInfo)
				const {data: res} = await uni.$http.post("/api/public/v1/my/orders/create", orderInfo);
				console.log(res);
				if (res.meta.status !== 200) return uni.$toast("创建订单失败!!!");
				// console.log(res.message.order_number);
				const orderNumber = res.message.order_number;
				// 预支付
				 // 2. 订单预支付
				  // 2.1 发起请求获取订单的支付信息
				  const { data: res2 } = await uni.$http.post('/api/public/v1/my/orders/req_unifiedorder', { order_number: orderNumber })
				  // 2.2 预付订单生成失败
				  if (res2.meta.status !== 200) return uni.$toast('预付订单生成失败！')
				  // 2.3 得到订单支付相关的必要参数
				  const payInfo = res2.message.pay;
					// console.log(res2);
					
				// 支付
				  const [err, succ] = await uni.requestPayment(payInfo)
				   // 3.2 未完成支付
				   if (err) return uni.$toast('订单未支付！');
					 
					 const { data: res3 } = await uni.$http.post('/api/public/v1/my/orders/chkOrder', { order_number: orderNumber })
					 
					// 3.4 检测到订单未支付
					   if (res3.meta.status !== 200) return uni.$showMsg('订单未支付！')
					   // 3.5 检测到订单支付完成
					   uni.showToast({
					     title: '支付完成！',
					     icon: 'success'
					   })
			}
		},
		computed: {
			...mapGetters('storeCart', ['checkedCount', 'total', 'checkedGoodsAmount']),
			...mapGetters('storeUser', ['addstr']),
			...mapState('storeUser', ['address', 'token']),
			...mapState('storeCart', ['cart']),
			isFullChecked() {
				return this.total == this.checkedCount
			}
		}
	}
</script>

<style lang="scss">
	.my-settle-container {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		// 将背景色从 cyan 改为 white
		background-color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 5px;
		font-size: 14px;

		.radio {
			display: flex;
			align-items: center;
		}

		.amount {
			color: #c00000;
		}

		.btn-settle {
			height: 50px;
			min-width: 100px;
			background-color: #c00000;
			color: white;
			line-height: 50px;
			text-align: center;
			padding: 0 10px;
		}
	}
</style>
