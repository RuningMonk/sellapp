<template>
	<div id="actions">
		<ul class="action">
			<img class="action_img" src="./img/collection.png" />
			<a class="action_name">我的收藏</a>
		</ul>
		<ul class="action">
			<img class="action_img" src="./img/footprint.png" />
			<a class="action_name">我的足迹</a>
		</ul>
		<ul class="action">
			<img class="action_img" src="./img/evaluation.png" />
			<a class="action_name">我的评价</a>
		</ul>
		<ul class="action">
			<img class="action_img" src="./img/thanks.png" />
			<a class="action_name">答谢记录</a>
		</ul>
		<ul class="action">
			<img class="action_img" src="./img/address.png" />
			<a class="action_name">我的地址</a>
		</ul>
	</div>
</template>

<script>
	
	export default{
		
	}
</script>

<style scoped="scoped">
	
	#actions{
		width: 100%;
		height: 156px;
		border-bottom: solid 2px #999999;
	}
	
	.action{
		float: left;
		width: 25%;
		height: 30%;
		text-align: center;
	}
	
	.action_img{
		width: 25px;
		height: 25px;
		float: left;
		margin-left: 35px;
		margin-top: 15px;
		margin-bottom: 7px;
	}
	
	.action_name{
		font-size: 15px;
		text-align: center;
		width: 100%;
		float: left;
	}
	
</style>
