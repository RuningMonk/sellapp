<template>
	<div id="Order">
		<div class="order_head">订单</div>
		<div class="order_detail">
			<div class="tabs">
				<router-link tag="div" to="/order/all" class="tab" :class="{on:tabindex==0}" @click.native="settab(0)">全部订单</router-link>
				<router-link tag="div" to="/order/evaluation" class="tab new" :class="{on:tabindex==1}" @click.native="settab(1)">待评价</router-link>
				<router-link tag="div" to="/order/refund" class="tab" :class="{on:tabindex==2}" @click.native="settab(2)">退款</router-link>
			</div>
			<keep-alive>
				<router-view />
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import {
		mapActions,
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				tabindex: 0
			}
		},
		methods: {
			...mapActions([
				'getHistory',
				'getStores'
			]),
			settab(index){
				this.tabindex = index
			}
		},
		computed: {
			...mapState([
				'Userinfo',
				'Stores'
			])
		},
		async mounted() {		
			//判断是否登录
			if (Object.keys(this.Userinfo).length > 0) {
				//获取当前用户的历史记录
				let userphone = this.Userinfo.phone
				this.$store.dispatch('getHistory', {
					userphone
				})
				
				//判断一个Stores中是否有内容,如果没有,重新获取一次Stores
				if(Object.keys(this.Stores).length == 0){
					this.getStores()
				}
			} else {
				console.log("请登录")
			}
		}
	}
</script>

<style scoped="scoped">
	#Order {
		width: 100%;
		height: 100%;
		padding-top: 50px;
		background-color: #F8F8F8;
	}

	.order_head {
		width: 100%;
		height: 50px;
		background-color: #FFFFFF;
		text-align: center;
		line-height: 50px;
		font-size: 16px;
		font-weight: bold;
		font-family: arial;
		margin-top: -50px;
	}

	.order_detail{
		width: 100%;
		height: 100%;
		padding-top: 50px;
	}
	
	.tabs {
		width: 100%;
		height: 50px;
		background-color: #FFFFFF;
		margin-top: -50px;
	}

	.tab {
		width: 33vw;
		height: 50px;
		text-align: center;
		font-size: 16px;
		line-height: 50px;
		float: left;
	}

	.on {
		width: 34vw;
		font-weight: bold;
	}

	.on::after {
		content: "";
		width: 33%;
		height: 2px;
		background-color: #FFD161;
		display: block;
		margin-left: 33%;
		margin-top: -1px;
	}
	
	.new::before{
		content: "";
		display: block;
		background-color: #FF3600;
		border-radius: 20px;
		width: 8px;
		height: 8px;
		position: absolute;
		margin-left: 23%;
		margin-top: 10px;
	}
	
</style>
