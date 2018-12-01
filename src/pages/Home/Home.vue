<template>
	<div>
		<Search ref="search" />
		<div id="head">
			<div class="head_top">
				<a class="little_img" style="background-image: url(../../../static/img/address.png)"></a>
				<label class="title">西华大学德馨园1栋</label>
				<a class="other_img" style="background-image: url(../../../static/img/message.png)"></a>
				<a class="other_img" style="background-image: url(../../../static/img/weather.png)"></a>
			</div>
			<div class="head_bottom" @click="Search()">
				<i class="text_icon"></i>
				<input type="text" placeholder="盖浇饭" value="" class="search_input " />
			</div>
		</div>
		<Home_Banner></Home_Banner>
		<ShopList></ShopList>
	</div>
</template>

<script>
	import Home_Banner from '../../components/Home_Banner/Home_Banner.vue'
	import ShopList from '../../components/ShopList/ShopList.vue'
	import Search from '../../components/Search/Search.vue'

	import {
		reqStoreList,
		reqBanners
	} from '../../api/index.js'
	import {
		mapActions,
		mapState
	} from 'vuex'
	import BScroll from 'better-scroll'


	export default {
		data() {
			return {
				Search_Show: false
			}
		},
		components: {
			Home_Banner,
			ShopList,
			Search
		},
		async mounted() {
			this.getStores(),
				this.getBannerList()
		},
		methods: {
			...mapActions([
				'getStores',
				'getBannerList'
			]),
			Search() {
				this.$refs.search.toggleShow()
			}
		},
		computed: {
			...mapState([
				'Stores'
			])
		},
		watch: {
			Stores(value) {
				this.$nextTick(() => {
					if (!this.scroll) {
						this.scroll = new BScroll('.list_inf', {
							click: true
						})
					} else {
						this.scroll.refresh()
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	#head {
		background-color: #FFD705;
		width: 100%;
		height: 85px;
	}

	.head_top {
		width: 100%;
		height: 40px;
	}

	.head_bottom {
		width: 100%;
		height: 36px;
	}

	.little_img {
		background: no-repeat center;
		background-size: cover;
		display: block;
		height: 22px;
		width: 22px;
		margin-top: 10px;
		margin-left: 2.5%;
		float: left;
	}

	.other_img {
		background: no-repeat center;
		background-size: cover;
		display: block;
		height: 22px;
		width: 22px;
		margin-right: 2.5%;
		margin-top: 10px;
		float: right;
	}

	.title {
		font-size: 17px;
		margin-top: 10px;
		margin-bottom: 5px;
		margin-left: 2.5%;
		float: left;
	}

	.text_icon {
		position: absolute;
		background-image: url(../../../static/img/search.png);
		background-repeat: no-repeat;
		background-size: contain;
		width: 18px;
		height: 18px;
		margin-top: 10px;
		margin-left: 5%;
	}

	.search_input {
		margin-left: 2.5%;
		width: 95%;
		padding-left: 8%;
	}
</style>
