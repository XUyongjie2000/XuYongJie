<template>
	<view>
		<!-- 1.搜素框 -->
		<view class="search-box">
			<uni-search-bar type="search" :radius="100" @input="handleInput" cancelButton="none"></uni-search-bar>
		</view>
		<!-- 搜索建议列表 -->
		<view class="sugg-list" v-if="resultsList.length !==0">
		  <view class="sugg-item" v-for="(item, i) in resultsList" :key="i"  @click="gotoGoodsDetail(item)">
		    <view class="goods-name">{{item.goods_name}}</view>
		    <uni-icons type="arrowright" size="16"></uni-icons>
		  </view>
		</view>
		<!-- 搜索历史 -->
		<view class="history-box" v-else>
		  <!-- 标题区域 -->
		  <view class="history-title">
		    <text>搜索历史</text>
		    <uni-icons type="trash" size="17" @click="clearHistory"></uni-icons>
		  </view>
		  <!-- 列表区域 -->
		  <view class="history-list">
		    <uni-tag :text="item" v-for="(item, i) in historyLists" :key="i"  @click="gotoGoodsList(item)"></uni-tag>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 1.1 声明搜索关键字
				kw: "",
				// 1.4 声明定时器
				timer: null,
				// 2.1 声明搜索结果字段
				resultsList: [],
				// 3.1 声明搜索关键字
				historyList: []
			};
		},
		onLoad() {
			// 从本地获取历史关键词
			this.historyList = JSON.parse(uni.getStorageSync("kw") || '[]');
		},
		methods:{
			handleInput(e){
				// 1.2只要输入内容,清除定时器
				clearTimeout(this.timer);
				// 1.3 声明一个定时器
				this.timer = setTimeout(()=>{
					// 1.3.1 等500ms之后 把e.value给this.kw
					this.kw = e.value;
					// console.log(e.value)// a  b c dd
					this.getSearchList();
				}, 500);
			
			},
			// 2.2 声明获取搜索结果方法
			async getSearchList(){
				// 2.2.1 判断关键字是否为空
				if (this.kw == "") {
					this.resultsList = [];
					return;
				}
				// 2.2.2 发请求
				const {data: res} =await uni.$http.get("/api/public/v1/goods/qsearch", {query: this.kw});
				if (res.meta.status !== 200 ) return uni.$toast();
				// console.log(res);
				 this.resultsList = res.message
				 // 3.3 只要通过这个关键字发起过请求，那么就把该关键词添加到historyList
				 this.saveHistoryList()
			},
			// 3.2 声明 添加关键字到historyList的方法
			saveHistoryList(){
				
				const set  = new Set(this.historyList);
				// 删除里面的所有的该关键字(不管重复还是没有重复)
				set.delete(this.kw);
				// 添加当前搜索过的关键词
				set.add(this.kw);
				// 把set集合转换为数组
				this.historyList = Array.from(set);
				// 把历史搜索关键词存到本地
				uni.setStorageSync('kw',JSON.stringify(this.historyList));
				
				// this.historyList.push(this.kw);
			},
			clearHistory(){
				this.historyList = [];
				uni.setStorageSync('kw', '[]');
				// uni.clearStorageSync('kw');
			},
			// 跳转到商品列表页面
			gotoGoodsList(item){
				uni.navigateTo({
					url: "/subpkg/goods_list/goods_list?query="+item
				})
			},
			// 点击搜索结果 跳转到商品详情
			gotoGoodsDetail(item) {
				// console.log(item.goods_id);
				uni.navigateTo({
					url: "/subpkg/goods_detail/goods_detail?id="+item.goods_id
				})
			}
		},
		computed: {
			historyLists(){
				// let historyList =["Nike", "adidos","李宁"]
				// let new Arr = ["Nike", "adidos","李宁"]
				// Arr.revers();
				return [...this.historyList].reverse()
			}
		}
	}
</script>

<style lang="scss">
.sugg-list {
  padding: 0 5px;

  .sugg-item {
    font-size: 12px;
    padding: 13px 0;
    border-bottom: 1px solid #efefef;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .goods-name {
      // 文字不允许换行（单行文本）
      white-space: nowrap;
      // 溢出部分隐藏
      overflow: hidden;
      // 文本溢出后，使用 ... 代替
      text-overflow: ellipsis;
      margin-right: 3px;
    }
  }
}

.history-box {
  padding: 0 5px;
	

  .history-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    font-size: 13px;
    border-bottom: 1px solid #efefef;
  }

  .history-list {
    display: flex;
    flex-wrap: wrap;

    .uni-tag {
      margin-top: 5px;
      margin-right: 5px;
    }
  }
}
</style>
