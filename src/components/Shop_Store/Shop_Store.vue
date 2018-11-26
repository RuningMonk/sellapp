<template>
	<div id="Shop_Store">
		<ul style="height: 101%;">
			<li>
				<div class="inf_box">
					<div class="inf_line">
						<img class="line_icon" src="./img/position.png"></img>
						<span class="line_text">{{Info.position}}</span>
						<img class="line_icon_next" src="./img/phone.png"></img>
					</div>
					<div class="inf_line">
						<img class="line_icon" src="./img/safe.png"></img>
						<span class="line_text">查看食品安全档案</span>
						<img class="line_icon_next" src="./img/right.png"></img>
					</div>
				</div>
				<div class="inf_box">
					<div class="inf_line">
						<img class="line_icon" src="./img/list.png"></img>
						<span class="line_text">配送服务:由 {{Info.delivery}} 提供送餐服务</span>
					</div>
					<div class="inf_line">
						<img class="line_icon" src="./img/time.png"></img>
						<span class="line_text">配送时间: {{Info.serve_time}}</span>
					</div>
				</div>
				<div class="inf_box">
					<div class="inf_line">
						<img class="line_icon" src="./img/broadcast.png"></img>
						<span class="line_text">{{Info.announcement}}</span>
						<img class="line_icon_next" src="./img/right.png"></img>
					</div>
					<div class="inf_line">
						<img class="line_icon" src="./img/serve.png"></img>
						<span class="line_text">商家服务</span>
					</div>
					<div class="inf_off"></div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import BScroll from 'better-scroll'
	
	export default{
		computed:{
			...mapState([
				'Info'
			])
		},
		mounted(){
			if(!this.scroll){
				this.scroll = new BScroll('#Shop_Store',{
					click:true
				})
			}else{
				this.scroll.refresh()
			}
		}
	}
</script>

<style scoped="scoped">
	
	#Shop_Store{
		width: 100%;
		height: 100%;
		background-color: #F4F4F4;
		overflow: hidden;
	}
	
	.inf_box{
		float: left;
		width: 100%;
		height: auto;
		margin-top: 10px;
	}
	
	.inf_line{
		width: 100%;
		height: 50px;
		background-color: #FFFFFF;
		border-bottom: solid 1px #f4f4f4;
	}
	
	.line_icon{
		width: 20px;
		height: 20px;
		margin:	15px;
		float: left;
	}
	
	.line_text{
		font-size: 14px;
		width: 73%;
		height: 50px;
		line-height: 50px;
		display: block;
		float: left;
		
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.line_icon_next{
		width: 20px;
		height: 20px;
		margin:	15px;
		float: right;;
	}
	
</style>
