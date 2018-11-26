<template>
	<div id="userinf">
		<div class="head">
			<router-link id="back" to="/person"></router-link>
			<a class="head_title">我的账号</a>
		</div>
		<div class="body-bg">
			<div class="body">
				<div class="body_els">
					<a class="body_els_title">头像</a>
					<a class="inf_set"></a>
					<span class="body_els_inf" :class="{'default_pic':this.Userinfo.src==null ? true:false}" ></span>
				</div>
				<div class="body_els">
					<a class="body_els_title">用户名</a>
					<a class="inf_set"></a>
					<span class="body_els_inf">{{this.Userinfo.username? this.Userinfo.username:'未设置'}}</span>
				</div>
				<div class="body_els">
					<a class="body_els_title">账号密码</a>
					<a class="inf_set"></a>
					<span class="body_els_inf">{{this.Userinfo.password? '点击更改':'未设置'}}</span>
				</div>
				<div class="body_els">
					<a class="body_els_title">手机号</a>
					<a class="inf_set"></a>
					<span class="body_els_inf">{{this.encryptphone}}</span>
				</div>
				<div class="body_els">
					<a class="body_els_title">注销账号</a>
					<a class="inf_set"></a>
					<span class="body_els_inf">注销后无法恢复,请谨慎操作</span>
				</div>
			</div>
			<mt-button class="quit" @click="alertbox()">退出当前账号</mt-button>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import {MessageBox,Toast} from 'mint-ui'
	
	export default{
		computed:{
			...mapState(['Userinfo']),
			encryptphone(){
				return this.Userinfo.phone.substr(0, 3) + '****' + this.Userinfo.phone.substr(7)
			}
		},
		methods:{
			alertbox(){
				MessageBox.confirm('确定要退出登录吗?').then(
					action => {
						//请求退出登录
						this.$store.dispatch('quit_login')
						//显示提示信息
						Toast({
						  message: '登出成功',
						  position: 'bottom',
						  duration: 3000	//提示持续时间
						});
						//跳转回个人中心页面
						this.$router.replace('/person')
					},
					action => {
						
					}
				);
			}
		}
	}
</script>

<style scoped="scoped">
	
	.head{
		background-color: #fafafa;
		height: 60px;
		width: 100%;
		border-bottom: solid #999999 1px;
		z-index: 100;
	}
	
	#back{
		background-image: url(../../../static/img/back.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 25px;
		height: 25px;
		display: block;
		position: absolute;    
		margin-top: 15px;
		margin-left: 4%;
	}
	
	.head_title{
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		width: 100%;
		float: left;
		margin-top: 15px;
	}
	
	.body-bg{
		background-color: #f4f4f4;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		top: 0;
	}
	
	.body{
		padding-top: 70px;
	}
	
	.body_els{
		height: 60px;
		width: 100%;
		background-color: #ffffff;
		border-bottom: solid 1px #f4f4f4;
	}
	
	.body_els_title{
		vertical-align: middle;
		line-height: 60px;
		font-size: 18px;
		height: 100%;
		width: auto;
		float: left;
		margin-left: 5%;
	}
	
	.body_els_inf{
		vertical-align: middle;
		line-height: 60px;
		font-size: 18px;
		height: auto;
		width: auto;
		float: right;
		font-size: 15px;
		color: #b1a9a9;
		font-weight: 100;
		margin-right: 1%;
	}
	
	.default_pic{
		background-image: url(../../../static/img/default_pic.png);
		background-size: cover;
		background-repeat: no-repeat;
		height: 35px;
		width: 35px;
		margin-top: 15px;
		border-radius: 15px;
	}
	
	.inf_set{
		background-image: url(../../../static/img/right.png);
		background-repeat: no-repeat;
		background-size: cover;
		float: right;
		opacity: 0.4;
		width: 20px;
		height: 20px;    
		margin-top: 21px;
		margin-right: 5px;
		display: block;
	}
	
	.quit{
		position: absolute;
		bottom: 0;
		height: 50px;
		width: 100%;
		background-color: #ffffff;
		text-align: center;
		line-height: 48px;
		color: #fe4f40;
		font-size: 15px;
		outline: none;
	}
	
	
</style>
