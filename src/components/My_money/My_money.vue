<template>
	<div id="money">
		<div id="money_title">
			<a>我的资产</a>
			<hr style="margin-top: 5px;width: 100%;float: left;" />
		</div>
		<div id="money_inf">
			<ul class="inf_part">
				<img class="money_img" src="./img/package.png" />
				<a class="money_name">红包</a>
				<a class="money_detail">0个未使用</a>
			</ul>
			<ul class="inf_part">
				<img class="money_img" src="./img/ticket.png" />
				<a class="money_name">代金券</a>
				<a class="money_detail">15张未使用</a>
			</ul>
			<ul class="inf_part">
				<img class="money_img" src="./img/wallet.png" />
				<a class="money_name">我的钱包</a>
				<a class="money_detail">签到赢现金</a>
			</ul>
			<ul class="inf_part">
				<img class="money_img" src="./img/quickpay.png" />
				<a class="money_name">闪付</a>
				<a class="money_detail">支付返外卖券</a>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	
	#money{
		width: 100%;
		height: 150px;
		border-bottom: solid 2px #999999;
	}
	
	#money_title{
		width: 100%;
	}
	
	#money_title a{
		font-size: 15px;
		font-weight: 200;
		padding-left: 18px;
		margin-top: 10px;
		width: 100%;
	}
	
	#money_inf{
		width: 100%;
		height: 70%;
	}
	
	.inf_part{
		width: 24%;
		height: 80%;
		text-align: center;
		font-size: 15px;
		margin-top: -10px;
		margin-left: 1px;
		float: left;
	}
	
	.money_img{
		width: 35px;
		height: 35px;
		float: left;
		margin-left: 28px;
		margin-top: 10px;
	}
	
	.money_name{
		float: left;
		width: 100%;
	}
	
	.money_detail{
		float: left;
		font-size: 10px;
		font-weight: 200;
		width: 100%;
	}
	
</style>
