<template>
	<view>
		<view class="goods-item" @click="handleGoto">
			<!-- 商品左侧图片区域 -->
			<view class="goods-item-left">
				<radio :checked="goods.goods_checked" color="#C00000" v-if="showRadio" @click="handleRadioChange">
				</radio>
				<image :src="goods.goods_small_logo || defaultPic" class="goods-pic"></image>
			</view>
			<!-- 商品右侧信息区域 -->
			<view class="goods-item-right">
				<!-- 商品标题 -->
				<view class="goods-name">{{goods.goods_name}}</view>
				<view class="goods-info-box">
					<!-- 商品价格 34.5678 => 34.58 -->
					<view class="goods-price">￥{{fixedPrice(goods.goods_price)}} &yen;</view>
					<!-- 商品数量 -->
					  <uni-number-box :min="1"  v-if="showNum" :value="goods.goods_count" @change="numChangeHandler"></uni-number-box>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: "my-goods",
		props: {
			"goods": {
				type: Object,
				default: {}
			},
			showRadio: {
				type: Boolean,
				default: false
			},
			showNum: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				// 如果有的商品 没有封面小图片 那么就应用这个图片地址的图片
				defaultPic: "https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png",
				fixedList: []
			};
		},
		methods: {
			fixedPrice(price) {
				// console.log(price);
				// Number(23.45678).toFixed(2)
				// 保留两位小数 ==》 23.45
				return Number(price).toFixed(2)
			},
			handleGoto() {
				this.$emit("click");
			},
			handleRadioChange() {
				this.$emit("radio-change", {
					// 商品的 Id
					goods_id: this.goods.goods_id,
					// 商品最新的勾选状态
					goods_checked: !this.goods.goods_checked
				});
			},
			numChangeHandler(val){
	
				this.$emit("num-change",{
					// 商品的 Id
					goods_id: this.goods.goods_id,
					// 商品最新的勾选状态
					// +val
					goods_count: parseInt(val)
				} )
			}
		},

		computed: {

		}
	}
</script>

<style lang="scss">
	.goods-item {
		  // 让 goods-item 项占满整个屏幕的宽度
		  width: 750rpx;
		  // 设置盒模型为 border-box
		  box-sizing: border-box;
		  display: flex;
		  padding: 10px 5px;
		  border-bottom: 1px solid #f0f0f0;

		.goods-item-left {
			margin-right: 5px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.goods-pic {
				width: 100px;
				height: 100px;
				display: block;
			}
		}

		.goods-item-right {
		  display: flex;
		  flex: 1;
		  flex-direction: column;
		  justify-content: space-between;
		
		  .goods-name {
		    font-size: 13px;
		  }
		
		  .goods-info-box {
		    display: flex;
		    align-items: center;
		    justify-content: space-between;
		  }
		
		  .goods-price {
		    font-size: 16px;
		    color: #c00000;
		  }
		}
	}
</style>
