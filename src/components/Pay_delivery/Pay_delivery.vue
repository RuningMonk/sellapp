<template>
	<div id="Pay_delivery" class="container">
		<div class="position">
			<div class="positon_text">
				<div class="title">
					<span class="title_text">西华大学德馨苑1栋 2楼248</span>
					<a class="inf_set"></a>
				</div>
				<span class="info">王毅(先生)&nbsp;&nbsp;13558739332</span>
			</div>
		</div>
		<div class="send container">
			<span class="send_text">立即送出</span>
			<a class="inf_set"></a>
			<span class="time_text">大约15:15送达</span>
		</div>
	</div>
</template>

<script>


</script>

<style scoped="scoped">
	
	#Pay_delivery {
		width: 95vw;
		height: 150px;
		background-color: #FFFFFF;
		margin-left: auto;
		margin-right: auto;
		border-radius: 5px;
		border-top-left-radius: 0px;
	}
	
	.position{
		width: 100%;
		height: 90px;
		float: left;
	}
	
	.positon_text{
		width: 100%;
		height: 100%;
		border-bottom: 1px solid #F8F8F8;
	}
	
	.title{
		padding-top: 20px;
	}
	
	.title_text{
		font-size: 20px;
		font-weight: bold;
	}
	
	.info{
		font-size: 14px;
		display: block;
	}
	
	.send{
		width: 100%;
		height: 60px;
		float: left;
		padding: 0;
	}
	
	.send_text{
		font-size: 16px;
		font-weight: 500;
		line-height: 60px;
		float: left;
	}
	
	.time_text{
		font-size: 15px;
		font-weight: 500;
		color: #348BED;
		line-height: 60px;
		float: right;
	}
	
	.inf_set {
		background-image: url(../../../static/img/right.png);
		background-repeat: no-repeat;
		background-size: cover;
		float: right;
		opacity: 0.4;
		width: 20px;
		height: 20px;
		margin-top: 21px;
		margin-left: 5px;
		margin-right: -5px;
		display: block;
	}
	
</style>
