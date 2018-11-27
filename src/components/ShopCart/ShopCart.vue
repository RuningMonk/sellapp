<template>
	<div id="ShopCart">
		<div id="bg" v-if="isShow && totalCount" @click="toggleShow()"></div>
		<transition name="Cartlist">
			<div class="list" @click.stop="" v-show="isShow && totalCount" @click="toggleShow()">
				<div class="list_top">
					<span class="cart_title">购物车</span>
					<a class="cart_clear" @click.stop="alertbox()"></a>
				</div>
				<div class="items">
					<ul>
						<li class="Cart_item" v-for="item in CartFoods" :key="item.ID" @click.stop>
							<span class="item_name">{{item.name}}</span>
							<CartControl :food="item" class="control"/>
							<span class="item_price">¥{{item.price*item.count}}</span>
						</li>
						<li class="Cart_item" style="background-color: #F4F4F4;border-bottom: none"></li>
					</ul>
				</div>
				<div class="list_bottom"></div>
			</div>
		</transition>
		
		<div class="show">
			<div class="show_img" @click="toggleShow()">
				<img src="./img/send.png" class="img" :class="{have:totalCount}" />
				<div class="totalcount" v-if="totalCount">
					<span class="count">{{totalCount}}</span>
				</div>
			</div>
			<div class="price" @click="toggleShow()">
				<span class="show_price" :style="{color:totalPrice}">¥{{totalPrice || 0}}</span>
				<span class="fee">{{Info.fee==0?'免配送费':'配送费¥'+Info.fee}}</span>
			</div>
			<div class="pay" :class="{pay_have:totalPrice}" @click="this.goPay">
				<span class="to_pay" :class="{pay_have:totalPrice}">{{this.pay}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	import CartControl from '../CartControl/CartControl.vue'
	import BScroll from 'better-scroll'
	import {MessageBox} from 'mint-ui'
	
	export default{
		data(){
			return{
				isShow: false
			}
		},
		components:{
			CartControl
		},
		computed:{
			...mapState([
				'CartFoods',
				'Stores',
				'Shopid',
				'Info',
				'Pay'
			]),
			...mapGetters([
				'totalCount',
				'totalPrice'
			]),
			pay(){
				var msg = ''
				if(this.totalPrice===0){
					msg = this.Info.min_price + ' ¥起送'
				}else if(this.totalPrice>0 && this.totalPrice<this.Info.min_price){
					msg = '还差'+(this.Info.min_price - this.totalPrice)+'¥'
				}else if(this.totalPrice >= this.Info.min_price){
					msg = '去结算'
				}
				return msg
			}
		},
		methods:{
			...mapActions([
				'initcart',
				'getPayState'
			]),
			toggleShow(){
				if(this.totalCount){
					this.isShow = !this.isShow
				}
				if(this.isShow){
					this.$nextTick(()=>{
						//防止多次创建BScroll对象,这个过程中BScroll需为单例
						if(!this.scroll){
							this.scroll = new BScroll('.items',{
								click:true			//开放点击
							})
						}else{
							this.scroll.refresh()	//让滚动条刷新,重新统计内容的高度
						}
					})
				}
			},
			alertbox(){
				MessageBox.confirm('确定要清空购物车吗?').then(
					action => {
						//返回为true时,清空CartFoods
						this.$store.dispatch('initcart')
					},
					action => {
						//返回为false时
					}
				);
			},
			goPay(){
				if(this.pay=='去结算'){
// 					let price = this.totalPrice
// 					let id = Math.ceil(Math.random()*1000000000000000000).toString()
// 					let name = '测试商品'
// 					let descript = '测试商品描述'
// 					this.$store.dispatch('getPayState',{price,id,name,descript})
					
					this.$router.replace('/pay/delivery')
				}
			}
		},
		watch:{
			Pay(value){
				window.location.href=this.Pay
			}
		}
	}
</script>

<style scoped="scoped">
	
	#ShopCart{
		width: 100%;
		height: 65px;
		position: fixed;
		bottom: 0;
	}
	
	#bg{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.4);
	}
	
	.Cartlist-enter-active,.Cartlist-leave-active{
		transition: all 0.3s;
	}
	.Cartlist-enter,.Cartlist-leave-to{
		transform: translateY(100%);
	}
	
	.list{
		height: 40%;
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: #F4F4F4;
	}
	
	.list_top{
		background-color: #F4F4F4;
		height: 30px;
		width: 100%;
		float: left;
		border: solid 1px #e7e7e7;
	}
	
	.cart_title{
		font-size: 15px;
		float: left;
		margin-left: 10px;
		margin-top: 3px;
	}
	
	.cart_clear{
		background-image: url(./img/clear.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 25px;
		height: 25px;
		float: right;
		margin-right: 10px;
		margin-top: 2px;
	}
	
	.items{
		width: 100%;
		height: 70%;
		overflow: hidden;
	}
	
	.Cart_item{
		height: 45px;
		width: 100%;
		background-color: #FFFFFF;
		border: solid 1px #e7e7e7;
	}
	
	.item_name{
		font-size: 15px;
		margin: 10px;
		float: left;
	}
	
	.item_price{
		font-size: 15px;
		margin: 10px;
		float: right;
		font-weight: bold;
	}
	
	.control{
		float: right !important;
		width: 25% !important;
		margin-top: 10px !important;
	}
	
	.list_bottom{
		background-color: #F4F4F4;
		height: 80px;
		width: 100%;
		position: absolute;
		bottom: 0;
	}
	
	.show{
		width: 95%;
		height: 50px;
		margin: 0px 2.5% 15px 2.5%;
		background-color: #30212a;
		border-radius: 30px;
		position: fixed;
		bottom: 0;
	}
	
	.show_img{
		width: 60px;
		height: 60px;
		background-color: #30212a;
		border-radius: 10px;
		margin-top: -15px;
		margin-left: 6%;
		float: left;
	}
	
	.totalcount{
		background-color: #ff3c00;
		width: 20px;
		height: 15px;
		border-radius: 15px;
		position: absolute;
		margin-top: -55px;
		margin-left: 50px;
		text-align: center;
	}
	
	.count{
		font-size: 10px;
		color: #FFFFFF;
		margin-top: -2px;
		display: block;
	}
	
	.img{
		width: 50px;
		height: 50px;
		margin-left: 5px;
		margin-top: 5px;
		
		/* 浏览器兼容 */
		-webkit-filter: grayscale(100%);
		-moz-filter: grayscale(100%);
		-ms-filter: grayscale(100%);
		-o-filter: grayscale(100%);
		filter: grayscale(100%);
		
		/* 设置投影,改变icon的颜色 */
		/* filter: drop-shadow(55px 0px 0rem rgb(255,193,50)); */
	}
	
	.have{
		/* 使filter无效,显示出原本的颜色 */
		-webkit-filter: none;
	}
	
	.price{
		width: auto;
		height: 50px;
		float: left;
	}
	
	.show_price{
		color: #c4c4c4;
		margin-left: 10px;
	}
	
	.fee{
		color: #c4c4c4;
		font-size: 12px;
		display: block;
		margin-left: 10px;
		margin-top: -5px;
	}
	
	.pay{
		height: 50px;
		width: 90px;
		margin-right: -1px;
		background-color: #30212A;
		color: #C4C4C4;
		border-bottom-right-radius: 30px;
		border-top-right-radius: 30px;
		float: right;
	}
	
	.to_pay{
		color: #C4C4C4;
		font-size: 18px;
		line-height: 20px;
		font-weight: 500;
		margin-top: 15px;
		margin-left: 10px;
		display: block;
	}
	
	.pay_have{
		background-color: #ffc132;
		color: #000000;
	}
	
</style>
