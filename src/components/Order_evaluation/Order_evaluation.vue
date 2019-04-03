<template>
	<div id="evaluation">
		<ul :style="{'height':ulHeight}" v-if="ulNull">
			<li style="padding-top: 7px;">
				<OrderPart v-for="item in this.History" :key="item.ID" v-if="item.point==0" :obj="item" :first="item.ID=='1'?true:false" />
			</li>
		</ul>
		<div class="null" v-if="!ulNull">
			<div class="alert">暂无待评价订单</div>
		</div>
	</div>
</template>

<script>
	import OrderPart from '../Order_part/Order_part.vue'
	import {mapState} from 'vuex'
	import BScroll from 'better-scroll'
	
	export default{
		computed: {
			...mapState([
				'History'
			]),
			ulHeight(){
				let length = 0;
				for(let i = 0;i < this.History.length;i++){
					if(this.History[i].point==0){
						length++
					}
				};
				let height = 'calc(' + length*28 + '% + 90px)';
				return height
			},
			ulNull(){
				for(let i = 0;i < this.History.length;i++){
					if(this.History[i].point==0){
						return true
					}
				};
				return false
			}
		},
		components:{
			OrderPart
		},
		mounted(){
			if(!this.evaluation_scroll){
				this.evaluation_scroll = new BScroll('#evaluation',{
					click:true
				})
			}else{
				this.evaluation_scroll.refresh()
			}
		}
	}
	
</script>

<style scoped="scoped">
	
	#evaluation{
		width: 100%;
		height: 100%;
		margin-top: -50px;
		overflow: hidden;
	}
	
	#evaluation .null{
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	#evaluation .null .alert{
		font-size: 16px;
		color: #B7B7B7;
		transform: translate(-50%,-50%);
		position: absolute;
		top: 10%;
		left: 50%;
	}
	
</style>