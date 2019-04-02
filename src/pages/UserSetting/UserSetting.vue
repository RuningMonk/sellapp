<template>
	<div id="UserSetting">
		<div class="head">
			<router-link id="back" to="/userinf"></router-link>
			<a class="head_title">{{this.els}}</a>
			<!-- <div class="config">确认</div> -->
		</div>
		<div class="body-bg">
			<div class="name body-part" v-if="els=='用户名'">
				<input type="text" class="name-input" v-model="Name">
				<div class="name-tips">以英文字母或汉字开头,限4-16个字符,一个汉字为2个字符</div>
				<input type="button" class="name-btn" :class="{'btn-active':NameCheck}" :disabled="!NameCheck" value="确认提交" @click="NameSubmit()">
			</div>
			<div class="password body-part" v-if="els=='密码'">
				<input type="password" class="password-input" v-model="NewPassword" placeholder="新密码">
				<input type="password" class="password-input" v-model="Config" placeholder="确认新密码">
				<div class="password-tips">密码长度8~32位,须包含数字、字母、符号至少2种或以上元素</div>
				<input type="button" class="password-btn" :class="{'btn-active':PasswordCheck}" :disabled="!PasswordCheck" value="确认提交" @click="PasswordSubmit()">
			</div>
			<div class="phone body-part" v-if="els=='手机号'">
				<div class="phone-alert">抱歉，暂时不提供手机号绑定修改</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	
	export default{
		data(){
			return{
				els:'',
				Name:'',
				NewPassword:'',
				Config:''
			}
		},
		computed: {
			...mapState([
				'Userinfo',
				'SetUpState'
			]),
			NameCheck(){
				if(this.Name){
					return true
				}else{
					return false
				}
			},
			PasswordCheck(){
				if(this.NewPassword){
					if(this.NewPassword === this.Config){
						return true
					}else{
						return false
					}
				}else{
					return false
				}
			}
		},
		methods: {
			...mapActions([
				'SetUpdate',
				'SetupStateUpdate'
			]),
			NameSubmit(){
				let sql = "UPDATE user_table SET username='" + this.Name + "' WHERE phone='" + this.Userinfo.phone + "'";
				
				this.SetUpdate(sql)
			},
			PasswordSubmit(){
				let sql = "UPDATE user_table SET password='" + this.NewPassword + "' WHERE phone='" + this.Userinfo.phone + "'";
				
				this.SetUpdate(sql)
			}
		},
		async mounted(){
			this.els = this.$route.query.els;
			this.Name = this.Userinfo.username
		},
		watch: {
			SetUpState(newValue, oldValue) {
				if(newValue){
					this.SetupStateUpdate(false);
					this.$router.push('/userinf');
				}
			}
		},
	}
	
</script>

<style scoped="scoped">
	
	#UserSetting{
		width: 100vw;
		height: 100vh;
		background-color: #f4f4f4;
	}
	
	.head{
		background-color: #fafafa;
		height: 60px;
		width: 100%;
		border-bottom: solid #999999 1px;
		z-index: 100;
		display: flex;
		position: relative;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	.head #back{
		background-image: url(../../../static/img/back.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 25px;
		height: 25px;
		margin: 17.5px;
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		
	}
	
	.head .head_title{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		font-weight: bold;
		height: 100%;
	}
	
	.body-bg{
		width: 100%;
		height: calc(100% - 60px);
		display: flex;
		flex-direction: column;
	}
	
	.body-bg .body-part{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	
	.body-bg .name{
		height: 30%;
		position: relative;
	}
	
	.body-bg .name::before{
		content: '用户名:';
		width: 20%;
		text-align: center;
		position: absolute;
		left: 5%;
		top: calc(50% - 61px);
		font-size: 16px;
		font-weight: 500;
	}
	
	.body-bg .name .name-input{
		width: 90%;
		height: 50px;
		padding-left: 20%;
		font-size: 16px;
		font-weight: 500;
		line-height: 50px;
	}
	
	.body-bg .name .name-tips{
		width: 90%;
		font-size: 12px;
		margin: 15px;
		padding-left: 15px;
	}
	
	.body-bg .name .name-btn{
		width: 90%;
		height: 50px;
		border: none;
		border-radius: 5px;
		background-color: #FFD880;
		font-size: 16px;
		color: #FFFFFF;
		outline: none;
	}
	
	.body-bg .name .btn-active{
		color: #000000;
		background-color: #FFD705;
		font-weight: 600;
	}
	
	.body-bg .password{
		height: 30%;
	}
	
	.body-bg .password .password-input{
		width: 90%;
		height: 50px;
		font-size: 16px;
		font-weight: 500;
		line-height: 50px;
		margin-top: 10px;
		padding-left: 5%;
	}
	
	.body-bg .password .password-tips{
		width: 90%;
		font-size: 12px;
		margin-top: 10px;
		color: #B7B7B7;
	}
	
	.body-bg .password .password-btn{
		width: 90%;
		height: 50px;
		margin-top: 10px;
		border: none;
		border-radius: 5px;
		background-color: #FFD880;
		font-size: 16px;
		color: #FFFFFF;
		outline: none;
	}
	
	.body-bg .password .btn-active{
		color: #000000;
		background-color: #FFD705;
		font-weight: 600;
	}
	
	.body-bg .phone{
		height: 25%;
	}
	
	.body-bg .phone .phone-alert{
		font-size: 16px;
		color: #B7B7B7;
	}
	
</style>
