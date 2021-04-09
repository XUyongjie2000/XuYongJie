import { mapGetters } from "vuex";

export default {
  data () {
    return {
   
    }
  },
	methods: {
		setBadge(){
			uni.setTabBarBadge({
				index: 2,
				text: this.total+''
			})
		}
	},
	onShow() {
		this.setBadge();
	},
	// watch: {
	// 	total(){
	// 		this.setBadge();
	// 	}
	// },
	computed: {
		...mapGetters('storeCart', ['total'])
	}
}