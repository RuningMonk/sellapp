<template>
	<div id="help">
		<div id="help_title">
			<a>我的服务</a>
			<hr style="margin-top: 5px;width: 100%;float: left;" />
		</div>
		<div id="help_inf">
			<ul class="inf_part">
				<img class="help_img" src="./img/help.png" />
				<a class="help_name">帮助与反馈</a>
			</ul>
			<ul class="inf_part">
				<img class="help_img" src="./img/service.png" />
				<a class="help_name">客服中心</a>
			</ul>
		</div>
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
		width: 100%;
	}
	
	#help_title a{
		font-size: 15px;
		font-weight: 200;
		padding-left: 18px;
		margin-top: 10px;
		width: 100%;
	}
	
	#help_inf{
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
	
	.help_img{
		width: 35px;
		height: 35px;
		float: left;
		margin-left: 28px;
		margin-top: 10px;
	}
	
	.help_name{
		float: left;
		width: 100%;
	}
</style>
