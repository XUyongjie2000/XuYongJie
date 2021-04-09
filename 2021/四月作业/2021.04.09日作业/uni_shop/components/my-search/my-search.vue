<template>
	<view>
		<view class="my-search-container" :style="{'background-color': bgc}" @click="handleClick">
			<view class="my-search-box" :style="{'border-radius': radius*2+'rpx'}">
				<uni-icons type="search" :size="17"></uni-icons>
				<text class="placeholder">搜索</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "my-search",
		data() {
			return {

			};
		},
		props:{
			bgc: {
				// 数据类型
				type: String,
				// 默认值
				default: "#c00000"
			},
			radius: {
				// 数据类型
				type: Number,
				// 默认值
				default: 15
			}
		},
		methods: {
			handleClick(){
				// 触发 自定义事件的事件名
				this.$emit("click");
				
				
			}
		}
	}
</script>

<style lang="scss">
	.my-search-container {
		// 背景颜色
		// background-color: #c00000;
		height: 50px;
		padding: 0 10px;
		display: flex;
		align-items: center;
		
		
	}

	.my-search-box {
		
		
		
		height: 36px;
		background-color: #ffffff;
		// 圆角
		// border-radius: 15px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		.placeholder {
			font-size: 15px;
			margin-left: 5px;
		}
	}
</style>
