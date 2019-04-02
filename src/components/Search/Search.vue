<template>
	<div>
		<transition name="under">
			<div id="Search" v-if="isShow">
				<div class="top">
					<img src="../../../static/img/back.png" class="quit" @click="toggleShow()" />
					<div class="top_div">
						<i class="search_icon"></i>
						<input type="text" placeholder="米线" class="search_input" v-model="search_text" @keyup.enter="search()" />
						<div class="search_btn" @click="search()">搜索</div>
					</div>
				</div>
				<div class="info">
					<ul style="height: 101%;">
						<li class="default_show" v-if="default_show">
							<div class="title">热门搜索</div>
							<div class="tags">
								<div class="tag" v-for="item in hot" :key="item.ID" @click="click_tag(item)">{{item}}</div>
							</div>
						</li>
						<li class="empty_show" v-if="empty">抱歉,未找到类似店铺...</li>
						<li class="Store" v-if="!empty && !default_show" v-for="item in SearchStores" :key="item.ID" @click="updateinfo(item)">
							<div class="Store_img">
								<img :src="item.Store_src" />
							</div>
							<div class="Store_inf">
								<div class="inf_title">
									<a class="inf_name">{{item.Store_name}}</a>
									<a class="inf_more"></a>
								</div>
								<div class="star-lv">
									<Stars :point='item.Store_point'></Stars>
									<a class="star_points">{{item.Store_point}}</a>
									<a class="sells">月售{{item.Store_sell}}</a>
									<a class="distance">46分钟|3.2km</a>
								</div>
								<a class="much_inf">起送 ¥0 |配送 ¥1.5 |人均 ¥18</a>
								<div class="store_tag">
									<a class="tag_img"></a>
									<label class="tag_words">{{item.Store_classify}}</label>
									<span class="tag_box red get">已领28元券</span>
									<span class="tag_box red">10减10</span>
									<span class="tag_box">支持自取</span>
									<span class="tag_box">极速退款</span>
									<a class="tag_more"></a>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import Stars from '../Stars/Stars.vue'
	import BScroll from 'better-scroll'
	import {mapState,mapActions} from 'vuex'
	
	export default{
		data(){
			return{
				isShow:false,
				hot:[],
				search_text:'',
				default_show:true
			}
		},
		components:{
			Stars
		},
		computed:{
			...mapState([
				'SearchStores',
			]),
			empty(){
				if(this.SearchStores.length===0){
					if(this.default_show==false){
						return true
					}else{
						return false
					}
				}else{
					return false
				}
			}
		},
		methods:{
			...mapActions([
				'getSearchRes'
			]),
			toggleShow(){
				this.isShow = !this.isShow
				if(this.isShow){
					//窗口滑动+锁定
					$('body,html').animate({ scrollTop: 0 }, 200)
					$(document.body).css({'overflow-y': 'hidden'})
					
					//better-scroll
					this.$nextTick(()=>{
						this.scroll = new BScroll('.info',{
							click:true
						})
					})
				}else{
					$(document.body).css({'overflow-y': 'auto'})
					this.search_text = ''
					this.default_show = true
				}
			},
			search(){
				var text = this.search_text.trim()
				if(text){
					this.default_show = false
					this.$store.dispatch('getSearchRes',this.search_text)
				}else{
					this.default_show = true
				}
			},
			click_tag(item){
				this.search_text = item
				this.search()
			},
			updateinfo(item){
				this.$store.dispatch('recordShopinfo',item)
				this.$router.push('/shop')
				$(document.body).css({'overflow-y': 'auto'})
			}
		},
		mounted(){
			this.hot=['披萨','米线','卤肉饭','土豆丝','鸡肉卷','鸡腿堡','手枪腿','烂肉豇豆','烤翅','回锅肉']
		}
	}
</script>

<style scoped="scoped">
	
	#Search{
		background-color: #FFFFFF;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 101;
		display: block;
	}
	
	.under-enter-active,.under-leave-active{
		transition: opacity .3s;
	}
	.under-enter,.under-leave-to{
		opacity: 0;
	}
	
	.top{
		width: 100%;
		height: 50px;
		position: absolute;
		top: 0;
		background-color: #FAFAFA;
		padding-left: 50px;
	}
	
	.top_div{
		width: 100%;
		height: 50px;
	}
	
	.quit{
		width: 20px;
		height: 20px;
		margin: 15px;
		float: left;
		margin-left: -35px;
	}
	
	.search_icon {
		position: absolute;
		background-image: url(../../../static/img/search.png);
		background-repeat: no-repeat;
		background-size: contain;
		width: 14px;
		height: 14px;
		margin-top: 18px;
		margin-left: 8px;
	}
	
	.search_input{
		float: left;
		width: 80%;
		height: 30px;
		margin-top: 10px;
		border: none;
		outline: none;
		background-color: #E7E7E7;
		padding-left: 30px;
		font-size: 14px;
	}
	
	.search_btn{
		width: 20%;
		height: 50px;
		float: right;
		text-align: center;
		line-height: 50px;
		font-size: 15px;
		color: #ffb000;
	}
	
	.info{
		width: 100%;
		height: 100%;
		margin-top: 50px;
		overflow: hidden;
	}
	
	.default_show{
		width: 100%;
		height: auto;
	}
	
	.empty_show{
		width: 100%;
		height: 120px;
		text-align: center;
		font-size: 15px;
		line-height: 120px;
	}
	
	.title{
		width: 100%;
		height: 30px;
		font-size: 15px;
		float: left;
		margin-top: 10px;
		padding-left: 10px;
		line-height: 30px;
	}
	
	.tags{
		width: 100%;
		height: 200px;
		float: left;
	}
	
	.tag{
		width: auto;
		height: 30px;
		float: left;
		padding-left: 10px;
		padding-right: 10px;
		text-align: center;
		background-color: #F4F4F4;
		line-height: 30px;
		font-size: 14px;
		margin-left: 10px;
		margin-top: 10px;
	}
	
	/* 商铺 */
	
	.Store{
		margin-left: 10px;
		height: 130px;
	}
	
	.Store_img{
		width: 25%;
		height: 100%;
		float: left;
	}
	
	.Store_img img{
		width: 100%;
		height: 55%;
		margin-top: 8px;
		border-radius: 5px;
	}
	
	.Store_inf{
		width: 75%;
		height: 100%;
		float: left;
	}
	
	.Store_inf div{
		float: left;
		width: 100%;
	}
	
	.inf_name{
		width: 80%;
		height: 20%;
		font-size: 16px;
		font-weight: bold;
		margin-left: 5px;
		color: black;
		text-decoration: none;
	}
	
	.inf_more{
		background-image: url(./img/more.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 15px;
		height: 15px;
		margin-top: 3px;
		margin-left: 26px;
	}
	
	.star-lv{
		padding-left: 5px;
		margin-top: 5px;
		width: 100%;
	}
	
	.star_points{
		text-align: center;
		margin-top: -3.5px;
		font-size: 13px;
		display: block;
		width: 10%;
		float: left;
	}
	
	.sells{
		font-size: 12px;
		width: 25%;
		float: left;
		margin-top: -2px;
		display: block;
		text-align: center;
	}
	
	.distance{
		font-size: 12px;
		width: 30%;
		float: right;
		margin-top: -2px;
	}
	
	.much_inf{
		font-size: 12px;
		float: left;
		width: 100%;
		padding-left: 8px;
		margin-top: 5px;
	}
	
	.store_tag{
		font-size: 12px;
		margin-top: 5px;
		padding-left: 8px;
		width: 100%;
	}
	
	.tag_img{
		background-image: url('./img/little_store.png');
		background-repeat: no-repeat;
		background-size: cover;
		width: 12px;
		height: 12px;
		margin-top: 3px;
		float: left;
	}
	
	.tag_words{
		margin-left: 5px;
		margin-bottom: 3px;
		float: left;
		width: 80%;
	}
	
	.tag_box{
		border-style: solid;
		border-width: 1px;
		border-color: #52c1b3;
		border-radius: 3px;
		width: auto;
		margin-left: 5px;
		color: #52c1b3;
		float: left;
	}
	
	.tag_more{
		background-image: url(./img/down.png);
		background-repeat: no-repeat;
		background-size: cover;
		margin-left: 15px;
		margin-top: 5px;
		width: 15px;
		height: 15px;
		float: left;
	}
	
	.red{
		border-color: #fb756c;
		color: #FB756C;
	}
	
	.get{
		background-color: #fef6f5;
	}
	
</style>
