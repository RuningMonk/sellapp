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

<style lang="stylus" rel="stylesheet/stylus">
	#app
		width 100%
		height 100%
</style>