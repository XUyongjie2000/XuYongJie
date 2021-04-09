<template>
	<view>
		<!-- 搜索组件 -->
		<view class="search-box">
				<my-search :bgc="'#c00000'" @click="handleSearch" ></my-search>
		</view>
	
		<!-- 1.轮播图区域 -->
		    <swiper class="swiper"  :indicator-dots="true" :autoplay="true" :interval="3000"
			      :duration="1000"  :circular="true">
			      <swiper-item v-for="(item,index) in swiperList" :key="item.goods_id">
				        <navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id='+item.goods_id">
									<image :src="item.image_src" ></image>
								</navigator>
				      </swiper-item>
			    </swiper>

		<!-- 2.导航区域 -->
		<!-- 分类导航区域 -->
		<view class="nav-list">
		   <view class="nav-item" v-for="(item, index) in navList" :key="i" @click="linkNavPage" :data-item="item"  >
		     <image :src="item.image_src"  class="nav-img"></image>
		   </view>
		</view>
		<!-- 3.楼层 -->
		<view class="floor-list">
		  <!-- 楼层 item 项 -->
		  <view class="floor-item" v-for="(item, i) in floorList" :key="i">
		    <!-- 楼层标题 -->
		    <image :src="item.floor_title.image_src" class="floor-title"></image>
				<!-- 楼层项 -->
				<view class="floor-img-box">
					<!-- 左边 -->
					<navigator class="left-img-box" :url="item.product_list[0].navigator_url">
						<image :src="item.product_list[0].image_src" :style="{width: item.product_list[0].image_width+'rpx'}"  mode="widthFix" ></image>
					</navigator>
					<!-- 右边 -->
					<view class="right-img-box">
						<navigator v-for="(item2,index2) in item.product_list" :key="index2" v-if="index2!==0" :url="item2.navigator_url">
							<image :src="item2.image_src"  mode="widthFix" :style="{width: item2.image_width+'rpx'}" ></image>
						</navigator>
					</view>
				</view>
		  </view>
		</view>
	</view>
</template>

<script>
	import badge from "../../mixins/tabbar-badge.js"
	export default {
		mixins: [badge],
		data() {
			return {
			// 1.1 定义轮播图数组
			swiperList: [],
			// 2.1 定义导航数组
			navList: [],
			// 3.1 定义楼层数组
			floorList: []
			};
		},
		methods: {
			// 1.2 在methods中定义获取轮播图数据的方法
		  async	getSwiperList(){
				const  {data: res} =await uni.$http.get("/api/public/v1/home/swiperdata");
				if (res.meta.status !== 200 ) return uni.$toast();
				this.swiperList = res.message
			},
			// 2.2 定义获取导航数据的方法
			async getNavList(){
				const  {data: res} =await uni.$http.get("/api/public/v1/home/catitems");
				if (res.meta.status !== 200 ) return uni.$toast();
				this.navList = res.message
			},
			// 点击按钮跳转到分类页面
			linkNavPage(options){
				const name = options.currentTarget.dataset.item.name;
				if (name == '分类') {
					uni.switchTab({
						url: "/pages/cate/cate"
					})
				}
			},
			// 3.2 定义获取楼层数据的方法
			// getFloorList:async  function(){}
			async getFloorList(){
				const  {data: res} =await uni.$http.get("/api/public/v1/home/floordata");
				if (res.meta.status !== 200 ) return uni.$toast();
				// console.log(res);
				res.message.forEach((item,index)=>{
					// console.log(item);
					item.product_list.forEach((item2,index2)=>{
						// console.log(item2);
						// console.log(item2.navigator_url.split("?")[1]);
						item2.navigator_url = '/subpkg/goods_list/goods_list?'+ item2.navigator_url.split("?")[1]
					})
				})
				this.floorList = res.message;
			},
			// 点击搜索组件 跳转到历史搜索页面
			handleSearch(){
				// console.log(1111);
				uni.navigateTo({
					url:"/subpkg/search/search"
				})
			}
		},
		// computed: {
		// 	num(){
		// 		// console.log(store);
		// 		return store.state.storeCart.count
		// 	}
		// },
		// 小程序页面的生命周期函数(当小程序的首页刚加载的时候 调用onload)
		onLoad() {
			// 1.3 调用轮播图数据方法
			this.getSwiperList();
			// 2.3 调用获取导航数据的方法
			this.getNavList();
			// 3.3 调用获取楼层数据的方法
			this.getFloorList();
		}
	}
</script>

<style lang="scss">
	.swiper {
		height: 330rpx;
		.swiper-item,
		image{
			width: 100%;
			height: 100%;
		}
	}
	
	// 导航区域
	.nav-list {
	  display: flex;
	  justify-content: space-around;
	  margin: 15px 0;
	
	  .nav-img {
	    width: 128rpx;
	    height: 140rpx;
	  }
	}
	// 楼层
	.floor-title {
	  height: 60rpx;
	  width: 100%;
	  display: flex;
	}
	
	.right-img-box {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-around;
	}
	
	.floor-img-box {
	  display: flex;
	  padding-left: 10rpx;
	}
	
</style>
