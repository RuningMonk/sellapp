<template>
	<div id="app">
		<router-view ></router-view>
		<Guide v-show="$route.meta.GuideShow"></Guide>
	</div>
</template>

<script>
	import Guide from './components/Guide/Guide.vue'
	import {mapActions} from 'vuex'
	
	export default {
		components:{
			Guide
		},
		mounted(){
			this.getLoginState()
		},
		methods:{
			...mapActions([
				'getLoginState'
			])
		}
	}
</script>

<style scoped="scoped">
	#app{
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		/* 抗锯齿 */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		
		width: 100vw;
		height: 100vh;
	}
</style>