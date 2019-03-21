import Vue from 'vue'
import Mint from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import loading from './common/imgs/loading.gif'		//引入图片懒加载所需的gif
import error from './common/imgs/error.png'			//引入懒加载失败时的图片
import $ from 'jquery'

//项目全局引入mint-ui
Vue.use(Mint)

//项目全局引入lazyload
Vue.use(VueLazyLoad,{
	loading,
	error,
	attempt: 3
})

new Vue({
	el:'#app',
	render: h=> h(App),
	router,
	store,
	
})
