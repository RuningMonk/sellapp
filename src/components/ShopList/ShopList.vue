<template>
	<div id="ShopList">
		<div class="list_header">
			<span>附近商家</span>
		</div>
		<div class="list_inf" v-if="Stores.length">
			<ul>
				<li class="Store" v-for="item in this.Stores" :key="item.ID" @click="updateinfo(item)">
					<div class="Store_img clearfix">
						<!-- <img v-lazy="'../../../static/img/store/'+item.Store_src" /> -->
						<img v-lazy="item.Store_src" />
					</div>
					<div class="Store_inf">
						<div class="inf_title">
							<a class="inf_name">{{item.Store_name}}</a>
							<div class="inf_more"></div>
						</div>
						<div class="star-lv">
							<Stars :point='item.Store_point'></Stars>
							<a class="star_points">{{item.Store_point}}</a>
							<a class="sells">月售{{item.Store_sell}}</a>
							<a class="distance">46分钟|3.2km</a>
						</div>
						<div class="much_inf">起送 ¥0 |配送 ¥1.5 |人均 ¥18</div>
						<div class="tag">
							<div class="tag_top">
								<!-- <a class="tag_img"></a> -->
								<img src="./img/little_store.png" class="tag_img">
								<label class="tag_words">{{item.Store_classify}}</label>
							</div>
							<div class="tag_btm">
								<span class="tag_box red get">已领28元券</span>
								<span class="tag_box red">10减10</span>
								<span class="tag_box">支持自取</span>
								<span class="tag_box">极速退款</span>
								<a class="tag_more"></a>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="svg" style="text-align: center" v-else>
			<svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
				<circle fill="#bdb1b1" stroke="none" cx="6" cy="50" r="6">
					<animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite"
					 begin="0.1" />
				</circle>
				<circle fill="#bdb1b1" stroke="none" cx="30" cy="50" r="6">
					<animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite"
					 begin="0.2" />
				</circle>
				<circle fill="#bdb1b1" stroke="none" cx="54" cy="50" r="6">
					<animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite"
					 begin="0.3" />
				</circle>
			</svg>
		</div>
		<div class="bottom"></div>
	</div>
</template>

<script>
	import Stars from '../Stars/Stars.vue'
	import {
		mapActions,
		mapState
	} from 'vuex'

	export default {
		computed: {
			...mapState(['Stores']),

		},
		methods: {
			...mapActions([
				'recordShopinfo',

			]),
			updateinfo(item) {
				//更新当前访问位置
				this.$store.dispatch('recordShopinfo', item)
				//高度滚回0
				window.scrollTo(0, 0)
				//跳转进店铺
				this.$router.push('/shop')
			}
		},
		components: {
			Stars
		}
	}
</script>

<style scoped="scoped">
	
	.clearfix::after{
		content: "";
		display: table;
		clear: both;
	}
	
	#ShopList {
		width: 100%;
		height: auto;
	}
	
	.list_header{
		width: 100%;
	}

	.list_header span {
		font-size: 17px;
		font-weight: bold;
		padding-left: 10px;
		width: 100%;
	}

	.sort {
		width: 100%;
		height: 30px;
		float: left;

	}

	.Store {
		padding-left: 10px;
		height: 130px;
	}

	.Store_img {
		width: 25%;
		height: 100%;
		float: left;
		text-align: center;
	}

	.Store_img img {
		width: 100%;
		height: 25vw;
		max-width: 90px;
		max-height: 70px;
		margin-top: 8px;
		border-radius: 5px;
		
	}

	.Store_inf {
		width: 75%;
		height: 100%;
		float: left;
	}

	.Store_inf>div {
		float: left;
		width: 100%;
	}

	.bottom {
		display: block;
		width: 100%;
		height: 60px;
	}

	.list_header,
	.list_inf,
	.bottom {
		float: left;
	}

	.list_inf {
		width: 100%;
		height: 519px;
		overflow: hidden;
	}

	.inf_name {
		width: auto;
		font-size: 16px;
		font-weight: bold;
		margin-left: 5px;
		float: left;
		color: black;
		text-decoration: none;
	}

	.inf_more {
		background-image: url(./img/more.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 15px;
		height: 15px;
		float: right;
		margin-top: 5px;
		margin-right: 5%;
	}

	.star-lv {
		padding-left: 5px;
		margin-top: 5px;
		width: 100%;
	}
	
	#Stars{
		float: left;
	}

	.star_points {
		text-align: center;
		margin-top: -3.5px;
		font-size: 13px;
		display: block;
		width: 10%;
		float: left;
	}

	.sells {
		font-size: 12px;
		width: 25%;
		float: left;
		margin-top: -2px;
		display: block;
		text-align: center;
	}

	.distance {
		font-size: 12px;
		width: auto;
		float: right;
		margin-top: -2px;
		margin-right: 5%;
	}

	.much_inf {
		font-size: 12px;
		float: left;
		width: 100%;
		padding-left: 8px;
		margin-top: 5px;
	}

	.tag {
		font-size: 12px;
		margin-top: 5px;
		padding-left: 8px;
		width: 100%;
		height: 45px;
	}
	
	.tag_top{
		width: 100%;
		height: 50%;
		position: relative;
	}
	
	.tag_btm{
		width: 100%;
		height: 50%;
	}

	.tag_img {
		width: 12px;
		height: 12px;
		position: absolute;
		top: 3px;
	}

	.tag_words {
		width: 80%;
		position: absolute;
		left: 18px;
	}

	.tag_box {
		border-style: solid;
		border-width: 1px;
		border-color: #52c1b3;
		border-radius: 3px;
		width: auto;
		margin-left: 5px;
		color: #52c1b3;
		float: left;
	}

	.tag_more {
		background-image: url(./img/down.png);
		background-repeat: no-repeat;
		background-size: cover;
		margin-left: 15px;
		margin-top: 5px;
		width: 15px;
		height: 15px;
		float: left;
	}

	.red {
		border-color: #fb756c;
		color: #FB756C;
	}

	.get {
		background-color: #fef6f5;
	}

	/* svg */

	*,
	html {
		margin: 0;
		padding: 0;
	}

	svg {
		width: 100px;
		height: 100px;
		margin-top: 50px;
		margin-right: 30px;
		display: inline-block;
	}
</style>
