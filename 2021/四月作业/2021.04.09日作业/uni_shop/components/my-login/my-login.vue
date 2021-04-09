<template>
	<view class="login-container">
		<!-- 提示登录的图标 -->
		<uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
		<image :src="avatar" mode=""></image>
		<!-- 登录按钮 -->
		<button type="primary" class="btn-login" @click="getUserInfo" @tap="getUserInfo">一键登录</button>
		<!-- <button type="primary" class="btn-login" open-type="getUserInfo" @getuserinfo="getUserInfo">一键登录</button> -->
		<!-- 登录提示 -->
		<view class="tips-text">登录后尽享更多权益</view>
	</view>
</template>

<script>
	import {
		mapMutations,
		mapState
	} from "vuex"
	export default {
		name: "my-login",
		data() {
			return {
				avatar: ''
			};
		},
		computed:{
			...mapState('storeUser', ['redirectInfo'])
		},
		methods: {
			...mapMutations("storeUser", ['updateUserInfo','updateToken','updateRedirectInfo']),
			getUserInfo(e) {
				const _this = this;
				// console.log(e);
				// if (e.detail.errMsg == 'getUserInfo:fail auth deny') return uni.$toast("您取消了用户登录");
				// _this.updateUserInfo(e.detail)
				// _this.getToken(e.detail);
				wx.getUserProfile({
					desc: '用于完善会员资料', 
					success: (res) => {
						console.log(res);
						// this.avatar = res.userInfo.avatarUrl;
						_this.updateUserInfo(res)

						// 获取token
						_this.getToken(res);
					},
					fail: (err)=>{
						if (err.errMsg == 'getUserProfile:fail auth deny') return uni.$toast("您取消了用户登录");
					}
				})
			},
			async getToken(info) {
				// 获取code
				const [err, succ] = await uni.login().catch(err => err);
				if (err !== null && succ.errMsg !== 'login:ok') return uni.$toast("登录失败");
				// 处理数据
				const query = {
					code: succ.code,
					encryptedData: info.encryptedData,
					iv: info.iv,
					rawData: info.rawData,
					signature: info.signature
				}
				// 发请求换token
				const {
					data: res
				} = await uni.$http.post("/api/public/v1/users/wxlogin", query);
				// console.log(res);
				if (res.meta.status !== 200) return uni.$toast('登录失败！')
				// uni.$toast('登录成功')
				
				this.updateToken(res.message.token);
				
				this.navigateBack()
			},
			navigateBack(){
				if (this.redirectInfo && this.redirectInfo.openType =='switchTab') {
					uni.switchTab({
						url: this.redirectInfo.from,
						complete: () => {
							this.updateRedirectInfo(null)
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.login-container {
		// 登录盒子的样式
		height: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f8f8f8;
		position: relative;
		overflow: hidden;

		// 登录按钮的样式
		.btn-login {
			width: 90%;
			border-radius: 100px;
			margin: 15px 0;
			background-color: #c00000;
		}

		// 按钮下方提示消息的样式
		.tips-text {
			font-size: 12px;
			color: gray;
		}
	}
</style>
