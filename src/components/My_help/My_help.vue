<template>
	<div id="help">
		<div id="help_title">我的服务</div>
		<ul id="help_inf">
			<li class="inf_part">
				<img class="help_img" src="./img/help.png" />
				<a class="help_name">帮助与反馈</a>
			</li>
			<li class="inf_part">
				<img class="help_img" src="./img/service.png" />
				<a class="help_name">客服中心</a>
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default{
		
	}
</script>

<style scoped="scoped">
	
	#help{
		width: 100%;
		height: 150px;
	}
	
	#help_title{
		width: auto;
		font-size: 15px;
		font-weight: 200;
		padding-left: 20px;
		padding-top: 5px;
		padding-bottom: 5px;
	}
	
	#help_title::after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		background-color: #E5E5E5;
		position: absolute;
		left: 0;
		margin-top: 5px;
	}
	
	#help_inf{
		width: 100%;
		height: 70%;
		margin-bottom: 0;
	}
	
	.inf_part{
		width: 25%;
		height: 80%;
		text-align: center;
		font-size: 15px;
		float: left;
	}
	
	.help_img{
		width: 35px;
		height: 35px;
		margin-top: 15px;
	}
	
	.help_name{
		float: left;
		width: 100%;
	}
</style>
