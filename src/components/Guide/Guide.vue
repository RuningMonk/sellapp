<template>
	<div class="guide">
		<router-link tag="div" to="/home" class="guide_items" :class="{on: Guideindex==0}" @click.native="setindex(0)">
			<span class="item_icon">
				<img class="icon_font" src="./img/home_none.png" />
			</span>
			<span>首页</span>
		</router-link>
		<router-link tag="div" to="/order/all" class="guide_items" :class="{on: Guideindex==2}" @click.native="setindex(2)">
			<span class="item_icon">
				<img class="icon_font" src="./img/order-none.png" />
			</span>
			<span>订单</span>
		</router-link>
		<router-link tag="div" to="/person" class="guide_items" :class="{on: Guideindex==3}" @click.native="setindex(3)">
			<span class="item_icon">
				<img class="icon_font" src="./img/mine.png" />
			</span>
			<span>我的</span>
		</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				Guideindex: 0
			}
		},
		methods:{
			setindex(index){
				this.Guideindex = index
			},
			checktab(){
				let url = window.location.href.substring(24)
				switch(url){
					case 'home':
						this.setindex(0);
						break;
					case 'lightning':
						this.setindex(1);
						break;
					case 'order':
						this.setindex(2);
						break;
					case 'person':
						this.setindex(3);
						break;
					default:
						this.setindex(0);
						break;
				}
			}
		},
		mounted(){
			this.checktab()
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
		background-color: #F8F8F8;
		width: 100%;
		height: 60px;
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
		margin-top: 12px;
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