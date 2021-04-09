<template>
	<view>
		<!-- 判断有没有token,没有token，那么展示登录 -->
		<my-login v-if="!token"></my-login>
		<!-- 判断有没有token,有token，那么展示信息 -->
		<my-userinfo v-else></my-userinfo>
	</view>
</template>

<script>
	import badge from "../../mixins/tabbar-badge.js"
	import {
		mapState
	} from "vuex"
	export default {
		mixins: [badge],
		data() {
			return {

			};
		},
		computed: {
			...mapState('storeUser', ['token'])
		}
	}
</script>

<style lang="scss">

</style>
