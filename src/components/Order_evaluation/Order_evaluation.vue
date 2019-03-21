<template>
	<div id="evaluation">
		<ul :style="{'height':ulHeight}">
			<li style="padding-top: 7px;">
				<OrderPart v-for="item in this.History" :key="item.ID" v-if="item.point==0" :obj="item" :first="item.ID=='1'?true:false" />
			</li>
		</ul>
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
	
</style>