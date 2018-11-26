<template>
	<div class="CartControl">
		<div class="Add_img" @click.stop="updatefoodcount(true)"></div>
		<span class="Control_text" v-show="food.count>0">{{food.count}}</span>
		<transition name="move">
			<div class="Reduce_img" v-show="food.count>0" @click.stop="updatefoodcount(false)"></div>
		</transition>
	</div>
</template>

<script>
	import Vue from 'vue'
	
	export default{
		props:{
			food: Object
		},
		methods:{
			updatefoodcount(add){
				this.$store.dispatch('updatefoodcount',{add,food:this.food})
			}
		},
		
	}
	
</script>

<style scoped="scoped">
	
	.CartControl {
		height: 30px;
		width: 50%;
		float: left;
	}
	
	.Reduce_img{
		float: right;
		width: 23px;
		height: 23px;
		margin: 0 5px 0 5px;
		background-image: url(./img/reduce.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
		
/*  
	xx-enter:  			进入过渡
	xx-leave:  			离开过渡
	xx-enter-active:	整个进入的过渡过程
	xx-leave-active:	整个离开的过渡过程
*/	
	.move-enter-active,.move-leave-active{
		transition: all 0.3s;
	}
	
	.move-enter,.move-leave-to{		/* 这里加了-to是因为包含了物体的移动(translateX) */
		opacity: 0;
		transform: translateX(50px) rotate(180deg);		/* rotate控制物体的旋转度数 */
	}
	
	.Add_img{
		float: right;
		width: 23px;
		height: 23px;
		margin: 0 10px 0 5px;
		background-image: url(./img/add.png);
		background-size: cover;
		background-repeat: no-repeat;
	}
	
	.Control_text{
		font-size: 15px;
		font-weight: 500;
		float: right;
	}
	
</style>
