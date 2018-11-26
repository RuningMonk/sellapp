<template>
	<div id="shop">
		<div class="shop_head">
			<div class="bg1">
				<div class="bg2">
					<div class="shop_top">
						<a id="back" @click="back()"></a>
						<a class="head_icon" style="background-image: url(../../../static/img/more.png)"></a>
						<a class="head_icon" style="background-image: url(../../../static/img/like.png)"></a>
						<a class="head_icon" style="background-image: url(../../../static/img/search_white.png)"></a>
					</div>
					<div class="head_detail">
						<span class="head_name">{{this.Info.Store_name}}</span>
						<img class="head_img" :src="'../../../static/img/store/'+this.Info.Store_src"></img>
						<div class="head_inf">
							<img class="icon" src="../../../static/img/time.png" />
							<span class="icon_text">配送约42分钟</span>
							<img class="icon" src="../../../static/img/quick.png" />
							<span class="icon_text">极速退款</span>
							<span class="announcement">公告:{{this.Info.announcement}}</span>
						</div>
						<div class="off">
							<div class="tickets">
								<div class="ticket">
									<span class="ticket_left">¥2</span>
									<span class="ticket_right">领</span>
								</div>
							</div>
							<div class="tags">
								<span class="tag_box red">10减2</span>
								<span class="tag_box red">25减4</span>
								<span class="tag_box red">50减7</span>
								<span class="tag_box red">5折起</span>
								<span class="tag_box red">有机会领券</span>
								<span class="tag_box red">返2元券</span>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="shop_detail">
			<div class="shop_tab">
				<div class="tab" :class="{on:tabindex==0}" @click="settab(0)">
					<router-link class="tab_text" tag="span" to='/shop/goods' id="goods" replace>点菜</router-link>
				</div>
				<div class="tab" :class="{on:tabindex==1}" @click="settab(1)">
					<router-link class="tab_text" tag="span" to='/shop/comment' id="comment" replace>评价<span class="comment">9999+</span></router-link>
				</div>
				<div class="tab" :class="{on:tabindex==2}" @click="settab(2)">
					<router-link class="tab_text" tag="span" to='/shop/store' id="store" replace>商家</router-link>
				</div>
			</div>
			<keep-alive>
				<router-view/>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import Shop_Goods from '../../components/Shop_Goods/Shop_Goods.vue'
	import Shop_Comment from '../../components/Shop_Comment/Shop_Comment.vue'
	import Shop_Store from '../../components/Shop_Store/Shop_Store.vue'
	import {mapActions,mapState} from 'vuex'
	
	export default{
		data(){
			return{
				tabindex:0,
				
			}
		},
		components:{
			Shop_Goods,
			Shop_Comment,
			Shop_Store
		},
		computed:{
			...mapState([
				'Info',
			]),
			
		},
		methods:{
			settab(n){
				this.tabindex=n
			},
			back(){
				this.$store.dispatch('initcart')
				this.$router.push('/home')
			},
			...mapActions([
				'recordShopinfo',
				'getGoodsList',
				'initcart'
			])
		},
		async mounted(){
			this.recordShopinfo(JSON.parse(sessionStorage.getItem('shop_info')) || this.Info)
			this.$store.dispatch('getGoodsList',this.Info.ID)
			
			$("#goods").click()
		}
	}
</script>

<style scoped="scoped">
	
	#shop{
		width: 100%;
		height: 100%;
		position: absolute;
	}
	
	.shop_head{
		width: 100%;
		height: 250px;
		
	}
	
	.bg1{
		width: 100%;
		height: 140px;
		background-image: url(./img/shop_default_bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}
	
	.bg2{
		height: 100%;
		width: 100%;
		background-color: rgba(33,37,41,0.5);
	}
	
	.shop_top{
		width: 100%;
		height: 50px;
		position: absolute;
		/* z-index: 99; */
		/* background-color: #FFD705; */
		background-color: rgba(255, 215, 5, 0);
	}
	
	#back{
		background-image: url(../../../static/img/back_white.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 25px;
		height: 25px;
		margin: 15px 0 0 15px;
		display: block;
		float: left;
	}
	
	.head_icon{
		float: right;
		background-repeat: no-repeat;
		background-size: cover;
		height: 25px;
		width: 25px;
		margin-top: 15px;
		margin-right: 15px;
	}
	
	.head_detail{
		background-color: #FFFFFF;
		width: 92%;
		height: 155px;
		margin-left: 4%;
		margin-top: 85px;
		position: absolute;
		border-radius: 5px;
		
		/* 阴影 */
		-webkit-box-shadow: #666 0px 0px 10px;		/* 针对chrome */
		-moz-box-shadow: #666 0px 0px 10px;			/* 针对firefox*/
		box-shadow: #666 0px 0px 10px;				/* 普通浏览器*/
	}
	
	.shop_detail{
		width: 100%;
		height: 99%;
		padding-top: 40px;
	}
	
	.head_name{
		font-size: 21px;
		font-weight: 700;
		margin-left: 15px;
		margin-top: 10px;
		width: auto;
		height: 30px;
		display: inline-block;
	}
	
	.head_img{
		width: 60px;
		height: 55px;
		margin-top: -25px;
		float: right;
		margin-right: 5%;
		border-radius: 5px;
		
		/* 阴影 */
		-webkit-box-shadow: #666 0px 0px 10px;		/* 针对chrome */
		-moz-box-shadow: #666 0px 0px 10px;			/* 针对firefox*/
		box-shadow: #666 0px 0px 10px;				/* 普通浏览器*/
	}

	.head_inf{
		width: 100%;
		height: 40px;
	}
	
	.icon{
		width: 15px;
		height: 15px;
		margin-left: 10px;
		float: left;
	}
	
	.icon_text{
		width: auto;
		height: 14px;
		display: inline-block;
		float: left;
		font-size: 12px;
		line-height: 16px;
		margin-left: 2px;
	}
	
	.announcement{
		float: left;
		font-size: 12px;
		color: #c4c4c4;
		width: 100%;
		padding-left: 12px;
		padding-right: 12px;
		margin-top: 3px;
		
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.tickets{
		width: 100%;
		height: 35px;
	}
	
	.ticket{
		width: auto;
		height: 25px;
		display: inline-block;
		margin-top: 5px;
		margin-left: 14px;
	}
	
	.ticket_left,.ticket_right{
		border: solid 1px #ff625a;
		border-radius: 3px;
		display: inline-block;
		height: 25px;
		font-size: 15px;
		background-color: #FF716A;
		text-align: center;
		float: left;
	}
	
	.ticket_left{
		border-right: dashed 1px #ffffff;
		width: 45px;
	}
	
	.ticket_right{
		border-left-style: dashed 1px #ffffff;
		width: 30px;
	}
	
	.tags{
		width: 100%;
		height: 20px;
		margin-left: 10px;
		margin-top: 10px;
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
		font-size: 12px;
		padding-left: 2px;
		padding-right: 2px;
	}
	
	.red{
		border-color: #fb756c;
		color: #FB756C;
	}
	
	.shop_tab{
		height: 40px;
		width: 100%;
		margin-top: -40px;
	}
	
	.tab{
		float: left;
		width: 21%;
		height: 100%;
		text-align: center;
		line-height: 35px;
		color: #787878 !important;
		
	}
	
	.tab_text{
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.on{
		margin-right: 30px;
		border-bottom: solid 2px;
		border-bottom-color: #ffd161;
		font-weight: 600;
		color: #5a5a5a !important;
	}
	
	.comment{
		font-size: 12px;
		color: #C4C4C4;
	}
	
</style>
