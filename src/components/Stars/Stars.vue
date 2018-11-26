<template>
	<div id="Stars">		
		<span class="stars-bg">
			<i class="star-on" :style="'width: '+point/0.05+'%'" ></i>
		</span>
	</div>
</template>

<script>
	
	export default{
		props:{
			point:Number
		}
	}
</script>

<style scoped="scoped">
	#Stars{
		width: auto;
	}
	
	.stars-bg{
		position: relative;
		display: inline-block;
		height: 12px;
		width: 80px;
		background-image: url(./img/stars_bg.png);
		background-repeat: no-repeat;
		background-size: cover;
		float: left;
	}
	
	.star-on{
		position: absolute;
		display: block;
		height: 100%;
		background-image: url(./img/stars_on.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
