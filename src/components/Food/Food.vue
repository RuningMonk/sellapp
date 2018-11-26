<template>
	<div>
		<transition name="fade">
			<div id="Food" v-if="isShow" @click="toggleShow()">
				<div class="Food_info" @click.stop="">
					<img class="info_img" v-lazy="'../../../static/img/goods/'+this.food.src" />
					<div class="info_detail">
						<div class="tags" v-if="food.tags">
							<div v-for="tag in food.tags" :key="tag.ID" class="tag">{{tag}}</div>
						</div>
						<div class="name_sell_like">
							<span class="name">{{food.name}}</span>
							<div class="sell_like">
								<span class="sell">月售{{food.sell}}</span>
								<span class="sell">好评{{food.like}}</span>
							</div>
						</div>
						<div class="price_add">
							<span class="price">¥{{food.price}}</span>
							<CartControl :food="this.food" class="add" />
						</div>
					</div>
					<img />
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import CartControl from '../CartControl/CartControl.vue'
	
	export default{
		props:{
			food: Object,
			
		},
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			toggleShow(){
				this.isShow = !this.isShow
				if(this.isShow){
					$(document.body).css({"overflow-y": "hidden"})
				}else{
					$(document.body).css({"overflow-y": "auto"})
				}
					
			}
		},
		components:{
			CartControl
		}
	}
	
</script>

<style scoped="scoped">
	
	.fade-enter-active,.fade-leave-active{
		transition: opacity 0.5s;
	}
	.fade-enter,.fade-leave-to{
		opacity: 0;
	}
	
	#Food{
		background: rgba(0,0,0,0.4);
		/* display: none; */
		display: block;
		width: 100%;
		left: 0;
		top: 0;
		margin: 0 auto;
		height: 135%;
		position: absolute;
		z-index: 100;
	}
	
	.Food_info{
		width: 80%;
		height: 60%;
		position: fixed;
		margin-left: 10%;
		margin-right: 10%;
		margin-top: 110px;
		background-color: #FFFFFF;
		border-radius: 15px;
	}
	
	.info_img{
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		width: 100%;
		height: 70%;
	}
	
	.info_detail{
		width: 100%;
		height: 30%;
	}
	
	.tags{
		width: 100%;
		height: 23px;
		background-color: rgba(255, 0, 0, 0.1);
		margin-top: -23px;
		position: absolute;
	}
	
	.tag{
		float: left;
		margin-left: 10px;
		font-size: 15px;
		color: #FFFFFF;
	}
	
	.name_sell_like{
		width: 100%;
		height: 60%;
		/* background-color: #FFFFFF; */
	}
	
	.name{
		font-size: 15px;
		font-weight: bold;
		width: 100%;
		height: 40%;
		display: block;
		padding: 10px 0px 0px 20px;
	}
	
	.sell_like{
		width: 100%;
		height: 22%;
		display: block;
		font-size: 12px;
		padding-left: 20px;
		margin-top: 5px;
	}
	
	.sell{
		color: #C4C4C4;
		margin-right: 8px;
	}
	
	.price_add{
		width: 100%;
		height: 40%;
		/* background-color: #F4F4F4; */
	}
	
	.price{
		color: red;
		font-size: 25px;
		float: left;
		margin-left: 20px;
	}
	
	.add{
		width: auto !important;
		float: right !important;
		height: 25px !important;
		margin-top: 10px !important;
	}
	
</style>
