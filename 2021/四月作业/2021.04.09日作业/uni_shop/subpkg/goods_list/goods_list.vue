<template>
	<view>
		<view class="goods-list">
			<!-- <my-goods :list="goodsList"></my-goods> -->
			<block v-for="(item,index) in goodsList" :key="index">
				<my-goods :goods="item" @click="gotoDetail(item)"></my-goods>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 1.1 定义请求参数对象
				queryObj: {
					/* 搜索关键字 */
					query: "",
					/* 商品分类id */
					cid: "",
					// 页码
					pagenum: 1,
					// 每页显示多少条数据
					pagesize: 10
				},
				// 2.1 定义商品列表字段,商品列表所有数据量
				goodsList: [],
				goodsTotal: "",
				// 3.1 定义isLoading字段，用来表示数据请求完成
				isLoading: true
			};
		},
		onLoad(options) {
			// 1.2 把从分类页面跳转过来时携带的参数存下来（query cid）
			this.queryObj.query = options.query || "";
			this.queryObj.cid = options.cid || "";

			// 2.2 调用获取商品列表数据的方法
			this.getGoodsList();
		},
		onReachBottom() {
			// 页码*每页显示多少条数据 >=总数据量 如果成立 不请求了

			if (this.queryObj.pagenum * this.queryObj.pagesize >= this.goodsTotal) return uni.$toast("我也是有底线的")

			// 判断请求是否完成，如果没有完成 不让请求
			if (!this.isLoading) return;
			this.queryObj.pagenum += 1;
			this.getGoodsList();
		},
		onPullDownRefresh() {
			// 重置关键数据
			this.queryObj.pagenum = 1;
			this.goodsList = [];
			this.goodsTotal = 0;
			this.isLoading = true;
			// 停止下拉刷新效果
			this.getGoodsList(() => {
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			// 2.3 声明获取商品列表数据的方法
			async getGoodsList(cb) {
				// 3.2 数据请求开始
				this.isLoading = false;
				const {
					data: res
				} = await uni.$http.get("/api/public/v1/goods/search", this.queryObj);
				// 3.3 数据请求结束
				this.isLoading = true;
				if (res.meta.status !== 200) return uni.$toast();
				cb && cb();
				// console.log(res);
				this.goodsList = [...this.goodsList, ...res.message.goods];
				this.goodsTotal = res.message.total;
			},
			gotoDetail(item) {
				uni.navigateTo({
					url: '/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
