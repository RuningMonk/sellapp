<template>
	<div id="money">
		<div id="money_title">我的资产</div>
		<ul id="money_inf">
			<li class="inf_part">
				<img class="money_img" src="./img/package.png" />
				<a class="money_name">红包</a>
				<a class="money_detail">0个未使用</a>
			</li>
			<li class="inf_part">
				<img class="money_img" src="./img/ticket.png" />
				<a class="money_name">代金券</a>
				<a class="money_detail">15张未使用</a>
			</li>
			<li class="inf_part">
				<img class="money_img" src="./img/wallet.png" />
				<a class="money_name">我的钱包</a>
				<a class="money_detail">签到赢现金</a>
			</li>
			<li class="inf_part">
				<img class="money_img" src="./img/quickpay.png" />
				<a class="money_name">闪付</a>
				<a class="money_detail">支付返外卖券</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	#money {
		width: 100%;
		height: 140px;
		border-bottom: solid 2px #999999;
		position: relative;
	}

	#money_title {
		width: auto;
		font-size: 15px;
		font-weight: 200;
		padding-left: 20px;
		padding-top: 5px;
		padding-bottom: 5px;
	}

	#money_title::after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		background-color: #E5E5E5;
		position: absolute;
		left: 0;
		margin-top: 5px;
	}

	#money_inf {
		width: 100%;
		height: 70%;
		margin-bottom: 0;
	}

	.inf_part {
		width: 25%;
		height: auto;
		text-align: center;
		font-size: 15px;
		float: left;
	}

	.money_img {
		width: 35px;
		height: 35px;
		margin-top: 15px;
	}

	.money_name {
		float: left;
		width: 100%;
	}

	.money_detail {
		float: left;
		font-size: 10px;
		font-weight: 200;
		width: 100%;
	}
</style>
