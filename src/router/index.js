import Vue from 'vue'
import VueRouter from 'vue-router'

//一般在顶级路由组件中设置缓存懒加载就够了,小组件不需要
const Home = () => import('../pages/Home/Home.vue')
const Order = () => import('../pages/Order/Order.vue')
const Person = () => import('../pages/Person/Person.vue')
const Lightning = () => import('../pages/Lightning/Lightning.vue')
// const Pay = () => import('../pages/Pay/Pay.vue')

import Login from '../pages/Login/Login.vue'
import Userinf from '../pages/Userinf/Userinf.vue'
import Shop from '../pages/Shop/Shop.vue'
import Pay from '../pages/Pay/Pay.vue'
import ShopGoods from '../components/Shop_Goods/Shop_Goods.vue'
import ShopComment from '../components/Shop_Comment/Shop_Comment.vue'
import ShopStore from '../components/Shop_Store/Shop_Store.vue'
import Search from '../components/Search/Search.vue'
import Pay_delivery from '../components/Pay_delivery/Pay_delivery.vue'


Vue.use(VueRouter)

export default new VueRouter({
	routes:[
		{
			path:'/',
			component:Home,		//返回路由组件的函数,只有执行此函数时才会加载路由组件,这个函数在第一次请求对应的路由路径的时候才会执行
			meta:{
				GuideShow:true
			}
		},
		{
			path:'/home',
			component:Home,
			meta:{
				GuideShow:true
			}
		},
		{
			path:'/order',
			component:Order,
			meta:{
				GuideShow:true
			}
		},
		{
			path:'/person',
			component:Person,
			meta:{
				GuideShow:true
			}
		},
		{
			path:'/lightning',
			component:Lightning,
			meta:{
				GuideShow:true
			}
		},
		{
			path:'/login',
			component:Login
		},
		{
			path:'/userinf',
			component:Userinf
		},
		{
			path:'/pay',
			component:Pay,
			children:[
				{
					path:'/pay/delivery',
					component:Pay_delivery
				},
				{
					path:'/pay/self',
					// component:Pay_delivery
				}
			]
		},
		{
			path:'/shop',
			component:Shop,
			children:[
				{
					path:'/shop/goods',
					component:ShopGoods
				},
				{
					path:'/shop/comment',
					component:ShopComment
				},
				{
					path:'/shop/store',
					component:ShopStore
				},
				{
					path:'',
					component:ShopGoods
				}
			]
		}
	]
})
