<template>
	<div id="all">
		<ul style="height: 101%;">
			<li style="padding-top: 7px;">
				<OrderPart v-for="item in this.History" :key="item.ID" :obj="item" :first="item.ID=='1'?true:false" />
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
			])
		},
		components:{
			OrderPart
		},
		watch: {
			History(value) {
				this.$nextTick(() => {
					if(!this.history_scroll){
						this.history_scroll = new BScroll('#all',{
							click:true
						})
					}else{
						this.history_scroll.refresh()
					}
				})
			}
		}
	}
	
</script>

<style scoped="scoped">
	
	#all{
		width: 100%;
		height: 100%;
		margin-top: -50px;
		overflow: hidden;
	}
	
</style>