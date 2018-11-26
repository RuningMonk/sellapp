<template>
	<div id="login">
		<router-link id="back" to="/person"></router-link>
		<div class="title">
			<span class="login_title">XX外卖</span>
		</div>
		<div class="login_content">
			<div class="login_ways">
				<span class="ways" @click="show=true" :class="{on: show==true}">短信登录</span>
				<span class="ways" @click="show=false" :class="{on: show==false}">密码登录</span>
			</div>
			<div class="login_form">
				<div class="phone_login show" v-show="show">
					<section>
						<input type="tel" class="input" placeholder="手机号" v-model="phone" />
						<input type="button" :disabled="!PhoneCheck" class="get_verification" v-model="TimeShow" @click="verification()" />
					</section>
					<section>
						<input type="text" class="input" placeholder="短信验证码" v-model="Phone_code"/>
					</section>
					<a class="tip">温馨提示:未注册XX外卖账号的手机号,登录时将自动注册,且代表同意<span style="color: #42B983;">《用户服务协议》</span></a>
				</div>
				<div class="pwd_login" v-show="!show">
					<section>
						<input type="text" class="input" placeholder="用户名/手机号" v-model="name" />
					</section>
					<section>
						<input id="pwd" type="password" class="input" placeholder="密码" v-model="pwd"/>
						<div class="switch_container">
							<div class="bg_con">
								<input id="pwd_switch" type="checkbox" class="switch" :checked="this.switch" @click="switch_action()" />
								<label for="pwd_switch"></label>
							</div>
						</div>
					</section>
					<section>
						<input id="captcha" type="text" class="input" placeholder="验证码" v-model="captcha"/>
						<img src="http://localhost:2400/captcha" class="captcha" @click="getCaptcha()">
					</section>
					<a class="tip">温馨提示:未注册XX外卖账号的手机号,登录时将自动注册,且代表同意<span style="color: #42B983;">《用户服务协议》</span></a>
				</div>
				<input type="button" class="login_btn" value="登录" @click="login()"/>
				<a class="about">关于我们</a>
			</div>
		</div>
		<Alert dialog_height="27%" :dialog_msg="this.msg"></Alert>
	</div>
</template>

<script>
	import {reqLogin,reqLoginState,reqQuitLogin} from '../../api/index.js'
	import Alert from '../../components/Alert/Alert.vue'
	
	export default{
		data:function(){
			return{
				show:true,
				phone:'',
				time:0,
				switch:true,
				name:'',
				pwd:'',
				Phone_code:'',
				captcha:'',
				msg:'',
				
			}
		},
		components:{
			Alert,
			
		},
		methods:{
			async login(){
				if(this.show==true){//首次登陆(注册)
					const {PhoneCheck,phone,Phone_code}=this
					if(!PhoneCheck){
						//电话号码格式不正确
						this.msg='电话号码格式有误'
						$("#dialog_btn").click()//触发dialog
					}else if(!/^\d{6}$/.test(Phone_code)){
						//验证码格式不正确
						this.msg='验证码格式有误'
						$("#dialog_btn").click()
					}else{
						
					}
				}else{//登录
					const {PhoneCheck,name,pwd,captcha}=this
					if(!name){
						//必须要有用户名
						this.msg='请填写用户名'
						$("#dialog_btn").click()
					}else if(!pwd){
						//必须要有密码
						this.msg='请填写密码'
						$("#dialog_btn").click()
					}else if(!captcha){
						//必须要有验证码
						this.msg='请填写验证码'
						$("#dialog_btn").click()
					}else{
						const result = await reqLogin({name,pwd,captcha});
						if(result.OK!=true){
							this.msg=result.msg
							$("#dialog_btn").click()
							$("#captcha").val('')
							this.getCaptcha()
						}else{
							//将个人数据保存在vuex中
							this.$store.dispatch('recordUser',result.data)
							//跳转至个人中心界面
							this.$router.replace('/person')
						}
					}
				}
			},
			verification(){
				$(".get_verification").attr('disabled',true)
				this.time=15
				const interval = setInterval(()=>{
					this.time--
					if(this.time<=0){
						this.time=0
						$(".get_verification").attr('disabled',false)
						clearInterval(interval)
					}
				},1000)
			},
			switch_action(){
				this.switch=!this.switch
				if(this.switch==true){
					$("#pwd").attr('type','password')
				}else{
					$("#pwd").attr('type','text')
				}
			},
			getCaptcha(){
				//两次请求的url不能一样,否则判定为无效请求,所以加入时间变量,达到每次请求都能返回新的svg的效果
				//因为没有用ajax请求,所以不需要考虑跨域
				$(".captcha").attr('src','http://localhost:2400/captcha?time='+Date.now())
			}
		},
		computed:{
			PhoneCheck(){
				return /^1\d{10}$/.test(this.phone)
			},
			TimeShow(){
				return this.time>0 ? "已发送("+this.time+')':'获取验证码'
			}
		}
	}
</script>

<style scoped="scoped">
	
	#back{
		background-image: url(../../../static/img/back.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 25px;
		height: 25px;
		margin: 15px 0 0 15px;
		display: block;
	}
	
	.title{
		text-align: center;
		padding-top: 70px;
	}
	
	.login_title{
		width: 100%;
		font-size: 45px;
		font-weight: 700;
		color: #FFD705;
	}
	
	.login_content{
		width: 100%;
	}
	
	.login_ways{
		width: 100%;
		height: 60px;
		text-align: center;
		padding-top: 30px;
	}
	
	.ways{
		font-size: 20px;
		font-weight: bold;
		width: 32%;
		text-align: center;
	}
	
	.on{
		color: #FFD705;
		border-bottom: solid 2px #FFD705;
	}
	
	.login_form,.phone_login,.pwd_login{
		width: 100%;
		height: auto;
		text-align: center;
	}
	
	.captcha{
		width: 25%;
		position: absolute;
		left: 62.5%;
		margin-top: 20px;
	}
	
	.show{
		display: block;
	}
	
	.phone_login{
		text-align: center;
	}
	
	.input{
		width: 75%;
		margin-top: 18px;
		padding-left: 8px;
	}
	
	.get_verification{
		width: 20%;
		font-size: 10px;
		border: none;
		background: none;
		margin-left: -80px;
		padding-top: 26px;
		position: absolute;
		outline: none;
	}
	
	.tip{
		font-size: 12px;
		width: 90%;
		padding-left: 42px;
		display: block;
		margin-top: 13px;
	}
	
	.login_btn{
		width: 75%;
		height: 24%;
		background-color: #FFD705;
		border: none;
		font-size: 20px;
		font-weight: 600;
		margin-top: 20px;
		border-radius: 10px;
		outline: none;
	}
	
	.about{
		text-align: center;
		width: 100%;
		display: block;
		font-size: 10px;
		color: rgba(52,58,64,.5);
		margin-top: 5px;
	}
	
	/* 切换的开关 */
	
	.switch_container{
		position: absolute;
		width: 12%;
		left: 75%;
		margin-top: -30px;
	}
	
	.switch{
        display:none;
    }
    
	.switch_container label{
        position:relative;
        display: block;
        padding: 1px;
        border-radius: 24px;
        height: 22px;
		width: 40px;
        margin-bottom: 0px;
        background-color: #eee;
        cursor: pointer;
        vertical-align: top;
        -webkit-user-select: none;
    }
    
	.switch_container label:before{
        content: '';
        display: block;
        border-radius: 24px;
        height: 22px;
        background-color: white;
        -webkit-transform: scale(1, 1);
        -webkit-transition: all 0.3s ease;
    }
   
	.switch_container label:after{
        content: '';
        position: absolute;
        top: 50%;  
        left: 50%;  
        margin-top: -10px;  
        margin-left: -11px;
        width: 22px;
        height: 22px;
        border-radius: 22px;
        background-color: white;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.08);
        -webkit-transform: translateX(-9px);
        -webkit-transition: all 0.3s ease;
    }
   
   .switch:checked~label:after{
        -webkit-transform: translateX(9px);
    }
    
    .switch:checked~label:before{
        background-color:#ffd705;
    }  
	
</style>
