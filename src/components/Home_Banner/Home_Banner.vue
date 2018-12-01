<template>
	<div id="banner">
		<div id="banner_up" class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in this.Banner" :key="item.ID">
					<!-- <img src="../../../static/img/banner/banner_food3.jpg" class="food_img" /> -->
					<img :src="'../../../static/img/banner/'+item.banner_src" class="food_img" />
				</div>
			</div>
		</div>
		<div id="banner_down" class="swiper-container container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<div class="classify">
						<img src="./img/foods.png" @click="Classify_Click()" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
				</div>
				<div class="swiper-slide">
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
					<div class="classify">
						<img src="./img/foods.png" />
						<a>美食</a>
					</div>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import {
		mapState
	} from 'vuex'

	export default {
		mounted() {
			//创建一个Swiper对象,来实现轮播

		},
		methods: {
			Classify_Click() {
				$("#banner").css('background-color', 'red');
			}
		},
		computed: {
			...mapState([
				'Banner'
			])
		},
		watch: {
			Banner(value) { //等到Banner数组中的数据更新后,再进行异步更新界面显示
				//界面更新后就立即创建swiper对象,这样可以避免swiper对象在数据更新/导入之前创建好导致轮播失效的情况
				this.$nextTick(() => {
					let Swiper_up = new Swiper('#banner_up', {
						//设置可以循环轮播
						loop: true,
						//防止字体模糊
						roundLengths: true,
						autoplay: true,
						disableOnInteraction: false,
					});
					let Swiper_down = new Swiper('#banner_down', {
						//设置可以循环轮播
						loop: false,
						//防止字体模糊
						roundLengths: true,
						//如果需要分页器
						pagination: {
							el: '.swiper-pagination',
							type: 'custom',
							renderCustom: function(swiper, current, total) {
								let customPaginationHtml = "";
								for (let i = 0; i < total; i++) {
									//判断哪个分页器此刻应该被激活
									if (i == (current - 1)) {
										customPaginationHtml +=
											'<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
									} else {
										customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
									}
								}
								return customPaginationHtml;
							}
						}
					})
				})
			}

		}
	}
</script>

<style scoped="scoped">
	#banner {
		width: 100%;
		height: 295px;
		border-bottom: solid 1px #999999;
		text-align: center;
	}

	#banner_up {
		width: 100%;
		height: 120px;
		float: left;
	}

	#banner_down {
		width: 100%;
		height: 175px;
		float: left;
	}

	.food_img {
		width: 100%;
		height: 100%;
	}

	.classify {
		font-size: 5px;
		width: 20%;
		float: left;
		margin-top: 6px;
	}

	.classify>img{
		width: 56px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.classify>a{
		width: 100%;
		text-align: center;
		float: left;
	}
	
	.swiper-slide{
		width: 100vw !important;
	}

	.swiper-pagination-custom {
		width: 100%;
		height: 20px;
		bottom: 0;
		text-align: center;
	}
	
</style>

<style>
	.swiper-pagination-customs {
		width: 18px;
		height: 4px;
		display: inline-block;
		border-radius: 10px;
		background-color: #F8F8F8;
		margin-bottom: 10px;
		/* margin-left: 1%; */
		/* margin-right: 1%; */
	}

	.swiper-pagination-customs-active {
		background-color: #FFD750;
	}
</style>
