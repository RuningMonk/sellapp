<template>
	<div class="guide">
		<div id="home" href="javascript:;" class="guide_items" :class="{on: '/home'===$route.path || '/'===$route.path}" @click="goto('/home','home')">
			<span class="item_icon">
				<img class="icon_font" src="./img/home_none.png" />
			</span>
			<span>首页</span>
		</div>
		<div id="lightning" href="javascript:;" class="guide_items" :class="{on: '/lightning'===$route.path}" @click="goto('/lightning')">
			<span class="item_icon">
				<img class="icon_font" src="./img/lightning_none.png" />
			</span>
			<span>闪购</span>
		</div>
		<div id="order" href="javascript:;" class="guide_items" :class="{on: '/order'===$route.path}" @click="goto('/order')">
			<span class="item_icon">
				<img class="icon_font" src="./img/order-none.png" />
			</span>
			<span>订单</span>
		</div>
		<div id="person" href="javascript:;" class="guide_items" :class="{on: '/person'===$route.path}" @click="goto('/person')">
			<span class="item_icon">
				<img class="icon_font" src="./img/mine.png" />
			</span>
			<span>我的</span>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			goto(path,id){
				this.$router.replace(path);
				
			}
		}
	}
</script>

<style scoped="scoped">
	.guide{
		border-top: 1px;
		position: fixed;
		z-index: 100;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		width: 100%;
		height: 50px;
		display: flex;
	}
	.guide_items{
		display: flex;
		flex: 1;
		text-align: center;
		flex-direction: column;
		align-items: center;
		margin: -5px;
		color: #999999;
		text-decoration: none;
		height: 55px;
	}
	.item_icon{
		margin-top: 6px;
	}
	.on{
		color: #ffd705;
	}
	.icon_font{
		font-size: 22px;
		width: 27px;
	}
	span{
		font-size: 12px;
		margin-top: 2px;
		margin-bottom: 2px;
		
	}
	
		
</style>