<template>
	<div id="Pay">
		<div class="head">
			<router-link id="back" to="/shop"></router-link>
			<a class="head_title">提交订单</a>
		</div>
		<div class="tabs">
			<router-link tag="div" to="/pay/delivery" @click.native="settab(0)" :class="{tab_left_on:tabindex==0,tab_left:tabindex==1}">外卖配送</router-link>
			<router-link tag="div" to="/pay/self" @click.native="settab(1)" :class="{tab_right:tabindex==0,tab_right_on:tabindex==1}">到店自取</router-link>
		</div>
		<router-view></router-view>
		<div class="bottom">
			<div class="price">合计 ¥<span>20.9</span></div>
			<div class="pay">提交订单</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				tabindex:0
			}
		},
		methods:{
			settab(index){
				this.tabindex = index
			}
		}
	}
</script>

<style scoped="scoped">
	#Pay {
		width: 100%;
		height: 100%;
		position: absolute;
		background: linear-gradient(to bottom, #ffd266, #f4f4f4 35%);
	}

	.head {
		height: 50px;
		width: 100%;
	}

	#back {
		background-image: url(../../../static/img/back.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 25px;
		height: 25px;
		display: block;
		position: absolute;
		margin-top: 13px;
		margin-left: 4%;
	}

	.head_title {
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		width: 100%;
		float: left;
		line-height: 50px;
	}

	.tabs {
		width: 95vw;
		height: 40px;
		margin-left: auto;
		margin-right: auto;
		overflow: hidden;
	}
	
	.tab_left{
		width: 50%;
		height: 45px;
		line-height: 35px;
		background-color: #FBF2DE;
		text-align: center;
		font-size: 17px;
		float: left;
		border-top-left-radius: 5px;
		margin-top: 5px;
		margin-left: 5px;
	}

	.tab_left_on {
		width: 50%;
		height: 45px;
		line-height: 40px;
		background-color: #FFFFFF;
		text-align: center;
		font-size: 17px;
		font-weight: bold;
		float: left;
		border-top-left-radius: 5px;
	}
	
	.tab_left_on::after{
		content: '';
		background-color: #FFFFFF;
		width: 10%;
		height: 40px;
		position: absolute;
		top: 50px;
		left: 44%;
		transform: skewX(30deg);
	}
	
	.tab_right{
		width: 50%;
		height: 45px;
		line-height: 35px;
		background-color: #FBF2DE;
		text-align: center;
		font-size: 17px;
		float: left;
		border-top-right-radius: 5px;
		margin-top: 5px;
		margin-left: -5px;
	}
	
	.tab_right_on{
		width: 50%;
		height: 45px;
		line-height: 40px;
		background-color: #FFFFFF;
		text-align: center;
		font-size: 17px;
		font-weight: bold;
		float: left;
		border-top-right-radius: 5px;
		margin-left: -5px;
	}
	
	.tab_right_on::before{
		content: '';
		background-color: #FFFFFF;
		width: 10%;
		height: 40px;
		position: absolute;
		top: 50px;
		left: 47%;
		transform: skewX(-30deg);
	}

	.bottom {
		width: 100%;
		height: 60px;
		background-color: #333333;
		position: fixed;
		bottom: 0;
	}

	.price {
		float: left;
		width: 70%;
		height: 100%;
		text-align: right;
		padding-right: 5%;
		font-size: 15px;
		line-height: 60px;
		color: #FFFFFF;
	}

	.price>span {
		font-size: 30px;
	}

	.pay {
		float: left;
		width: 30%;
		height: 100%;
		background-color: #FFD161;
		text-align: center;
		font-size: 18px;
		font-weight: bold;
		line-height: 60px;
	}
</style>
