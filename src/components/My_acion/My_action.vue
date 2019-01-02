<template>
	<div id="actions">
		<ul class="actions_inf">
			<li class="action">
				<img class="action_img" src="./img/collection.png" />
				<a class="action_name">我的收藏</a>
			</li>
			<li class="action">
				<img class="action_img" src="./img/footprint.png" />
				<a class="action_name">我的足迹</a>
			</li>
			<li class="action">
				<img class="action_img" src="./img/evaluation.png" />
				<a class="action_name">我的评价</a>
			</li>
			<li class="action">
				<img class="action_img" src="./img/thanks.png" />
				<a class="action_name">答谢记录</a>
			</li>
			<li class="action">
				<img class="action_img" src="./img/address.png" />
				<a class="action_name">我的地址</a>
			</li>
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
	
	.actions_inf{
		margin-bottom: 0;
	}
	
	.action{
		float: left;
		width: 25%;
		height: auto;
		text-align: center;
		margin-bottom: 0;
	}
	
	.action_img{
		width: 35px;
		height: 35px;
		margin-top: 15px;
	}
	
	.action_name{
		font-size: 15px;
		text-align: center;
		width: 100%;
		display: block;
	}
	
</style>
