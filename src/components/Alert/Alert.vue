<template>
	<div id="dialog">
		<input type="button" id="dialog_btn" style="display: none" @click="alert_show()" />
		<div class="alert_bg" @click="alert_hide()">
			<div class="alert_on" style="height: this.dialog_height">
				<img class="img" src="./img/dialog_img.png" />
				<a class="alert_title">{{this.dialog_msg}}</a>
				<input type="button" class="alert_btn" value="知道了" />
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		props:[
			'dialog_height',
			'dialog_msg'
		],
		methods:{
			alert_hide(){
				$(".alert_on").animate({height:"0%"});
				$(".alert_on").hide()
				$(".alert_bg").fadeOut()
			},
			alert_show(){
				$(".alert_on").animate({height:this.dialog_height});
				$(".alert_on").show()
				$(".alert_bg").fadeIn()
			}
		}
	}
</script>

<style scoped="scoped">
	.alert_bg{
		background: rgba(0,0,0,0.4);
		display: none;
		width: 100%;
		left: 0;
		top: 0;
		margin: 0 auto;
		height: 100%;
		position: absolute;
	}
	
	.alert_on{
		width: 65%;
		background-color: #f8f9fa;
		margin-left: 18%;
		margin-top: 260px;
		text-align: center;
		position: relative;
		border-radius: 17px;
	}
	
	.img{
		width: 95px;
		height: 95px;
		margin: 10px;
	}
	
	.alert_title{
		font-size: 18px;
		display: block;
		width: 100%;
		position: absolute;
		bottom: 50px;
	}
	
	.alert_btn{
		width: 100%;
		height: 20%;
		border: none;
		background-color: #FFD705;
		outline: none;
		position: absolute;
		bottom: 0;
		left: 0;
		font-weight: bold;
		border-bottom-left-radius: 17px;
		border-bottom-right-radius: 17px;
	}
</style>
