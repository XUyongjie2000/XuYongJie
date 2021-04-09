<template>
	<view>
		<!-- 搜索组件 -->
		<view class="search-box">
			<my-search></my-search>
		</view>
		
		<view class="scroll-view-container">
			<!-- 左侧的滚动视图区域 -->
			<scroll-view class="left-scroll-view" scroll-y :style="{height: wh + 'px'}">
				<!-- 左侧的滚动视图区域 -->
				<block v-for="(item,index) in cateList" :key="index">
					<view :class="['left-scroll-view-item', index==active?'active':'' ]" @click="handleActive(index)">
						{{item.cat_name}}</view>
				</block>
			</scroll-view>
			<!-- 右侧的滚动视图区域 -->
			<!-- 3.2 动态绑定scrollTop -->
			<scroll-view class="right-scroll-view" scroll-y :style="{height: wh + 'px'}" :scroll-top="scrollTop">
				<view class="cate-lv2" v-for="(item2, index2) in cateChildList" :key="index2">
					<view class="cate-lv2-title">/ {{item2.cat_name}} /</view>
					 <!-- 三级分类 Item 项 -->
					 <view class="cate-lv3-list">
					 	<navigator class="cate-lv3-item" v-for="(item3,index3) in item2.children" :key="index3" @click="handleGoodList(item3.cat_id)">
					 	  <!-- 图片 -->
					 	  <image :src="item3.cat_icon"></image>
					 	  <!-- 文本 -->
					 	  <text>{{item3.cat_name}}</text>
					 	</navigator>
					 </view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
		import badge from "../../mixins/tabbar-badge.js"
	export default {
		mixins: [badge],
		data() {
			return {
				// 设置scroll-view的高度
				wh: 0,
				// 1.1 定义分类数据数组
				cateList: [],
				// 被选中的left-scroll-view-item的索引
				active: 0,
				// 2.1 定义二三级分类数据
				cateChildList: [],
				
				// 3.1 定义一个scrollTop 默认为0
				scrollTop: 0
			};
		},
		async onLoad() {
			// 获取页面的高度
			const window = await uni.getSystemInfo()
			this.wh = window[1].windowHeight-50
			// 1.2 调用获取分类的方法
			this.getCateList();
		},
		methods: {
			// 1.3 声明获取分类的方法
			async getCateList() {
				const {
					data: res
				} = await uni.$http.get("/api/public/v1/categories");
				
				if (res.meta.status !== 200) return uni.$toast();
				// 把响应内容赋值给cateList
				this.cateList = res.message;
				// 刚载入页面 加载第一个一级分类的二级分类
				this.cateChildList = res.message[0].children;
			},
			// 点击给active赋值
			handleActive(index) {
				// console.log(index);
				this.active = index;
				// 点击切换一级分类的时候,同时切换二级分类
				this.cateChildList = this.cateList[index].children;
				// 3.3 点击的时候,判断一下是否在0的位置,如果不在0的位置 赋值为0
				this.scrollTop = this.scrollTop == 0? 1: 0;
				// this.scrollTop = 0;
			},
			// 点击三级分类跳转到商品列表
			handleGoodList(cat_id){
				// console.log(cat_id);
				uni.navigateTo({
					url:"/subpkg/goods_list/goods_list?cid="+cat_id
				})
			}
		}
	}
</script>

<style lang="scss">
	.scroll-view-container {
		display: flex;

		.left-scroll-view {
			width: 120px;

			.left-scroll-view-item {
				line-height: 60px;
				background-color: #f7f7f7;
				text-align: center;
				font-size: 12px;

				// 激活项的样式
				&.active {
					background-color: #ffffff;
					position: relative;

					// 渲染激活项左侧的红色指示边线
					&::before {
						content: ' ';
						display: block;
						width: 3px;
						height: 30px;
						background-color: #c00000;
						position: absolute;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
					}
				}
			}
		}
	}

	.cate-lv2-title {
		font-size: 12px;
		font-weight: bold;
		text-align: center;
		padding: 15px 0;
	}
	
	.cate-lv3-list {
	  display: flex;
	  flex-wrap: wrap;
	
	  .cate-lv3-item {
	    width: 33.33%;
	    margin-bottom: 10px;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	
	    image {
	      width: 60px;
	      height: 60px;
	    }
	
	    text {
	      font-size: 12px;
	    }
	  }
	}
</style>
