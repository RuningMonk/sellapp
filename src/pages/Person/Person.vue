<template>
	<div>
		<div id="head">
			<div>
				<a class="other_img" style="background-image: url(../../../static/img/message.png)"></a>
				<a class="other_img" style="background-image: url(../../../static/img/weather.png)"></a>
			</div>
			<router-link :to="this.userlink" class="user">
				<a class="text_icon"></a>
				<a class="user_name">{{this.username || "登录/注册"}}</a>
				<a class="user_inf" >个人信息></a>
			</router-link>
		</div>
		<My_action></My_action>
		<My_money></My_money>
		<My_help></My_help>
	</div>
</template>

<script>
	import My_action from '../../components/My_acion/My_action.vue'
	import My_money from '../../components/My_money/My_money.vue'
	import My_help from '../../components/My_help/My_help.vue'
	import {mapState} from 'vuex'
	
	export default{
		components:{
			My_action,
			My_money,
			My_help,
		},
		computed:{
			...mapState(['Userinfo']),
			userlink(){
				return this.Userinfo.phone ? '/userinf':'/login'
			},
			username(){
				return this.Userinfo.username ? this.Userinfo.username:this.Userinfo.phone
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
	#head {
		background-color: #FFD705;
		height: 120px;
		box-shadow: #666 0px 0px 10px;
	}
	
	.other_img {
		background: no-repeat center;
		background-size: cover;
		display: block;
		height: 22px;
		width: 22px;
		margin-right: 10px;
		margin-top: 10px;
		float: right;
	}
	
	.user{
		width: 100%;
		padding-left: 30px;
		padding-top: 10px;
		float: left;
		color: #000000;
	}
	
	.text_icon{
		background-image: url(../../../static/img/head.png);
		background-repeat: no-repeat;
		background-size: cover;
		display: block;
		height: 50px;
		width: 50px;
		border-radius: 35px;
		float: left;
	}
	
	.user_name{
		font-size: 15px;
		margin-left: 10px;
		margin-top: 5px;
		width: 70%;
		float: left;
	}
	
	.user_inf{
		font-size: 10px;
		margin-left: 10px;
		margin-top: 3px;
		width: 70%;
		float: left;
	}
	
</style>