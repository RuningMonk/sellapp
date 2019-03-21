/*
通过mutation间接更新state的多个方法的对象
*/

import {
	RECEIVE_STORES,
	RECEIVE_SEARCH,
	RECEIVE_BANNERS,
	RECEIVE_USER_INFO,
	RECEIVE_GOODS,
	RECEIVE_COMMENTS,
	RECEIVE_HISTORY,
	RESET_USER_INFO,
	SET_SHOP_INFO,
	ADD_FOOD_COUNT,
	REDUCE_FOOD_COUNT,
	CLEAR_CART,
	PAY_STATE,
	EVA_FLAG,
	EVA_INFO,
	EVA_STATE
	
} from './mutation-types'

import {
	reqStoreList,
	reqBanners,
	reqLoginState,
	reqQuitLogin,
	reqGoodsList,
	reqCommentsList,
	reqHistory,
	reqStoreSearch,
	reqPay,
	reqEvaluate
	
} from '../api'

export default{
	//异步获取店铺列表信息
	async getStores({commit}){
		//发送异步ajax请求
		const result = await reqStoreList()
		//根据结果提交一个mutation
		if(result.OK===true){
			const stores = result.data
			commit(RECEIVE_STORES,{stores})
		}
	},
	//异步获取轮播图列表信息
	async getBannerList({commit}){
		//发送异步ajax请求
		const result = await reqBanners()
		//根据结果提交一个mutation
		if(result.OK===true){
			const banners = result.data
			commit(RECEIVE_BANNERS,{banners})
		}
	},
	//异步获取登录状态和用户信息
	async getLoginState({commit}){
		//发送异步ajax请求
		const result = await reqLoginState()
		//根据结果提交一个mutation
		if(result.login===true){
			const userinfo = result.data
			commit(RECEIVE_USER_INFO,{userinfo})
		}
	},
	//异步获取商品列表信息
	async getGoodsList({commit},shop_id){
		//发送异步ajax请求
		const result = await reqGoodsList({shop_id})
		//根据结果提交一个mutation
		if(result.OK===true){
			const goods = result.data
			commit(RECEIVE_GOODS,{goods})
		}
	},
	//异步获取商品评价信息
	async getCommentsList({commit},shop_id){
		//发送异步ajax请求
		const result = await reqCommentsList({shop_id})
		//根据结果提交一个mutation
		if(result.OK===true){
			const comments = result.data
			commit(RECEIVE_COMMENTS,{comments})
		}
	},
	//异步请求登出
	async quit_login({commit}){
		//发送异步ajax请求
		const result = await reqQuitLogin()
		//根据结果提交一个mutation
		if(result.login===false){
			commit(RESET_USER_INFO)
		}
	},
	//异步更新评价信息
	async UpdateComment({commit},sql){
		//发送异步ajax请求
		const result = await reqEvaluate({sql})
		//根据结果提交一个mutation
		if(result.OK===true){
			let flag = true;
			commit(EVA_STATE,{flag})
		}
	},
	//同步记录用户信息
	recordUser ({commit},userinfo){
		commit(RECEIVE_USER_INFO,{userinfo})
	},
	//同步用户访问的店铺信息
	recordShopinfo ({commit},shop_info){
		commit(SET_SHOP_INFO,{shop_info})
	},
	//同步更新商品的选中数量
	updatefoodcount({commit},{add,food}){
		if(add){
			commit(ADD_FOOD_COUNT,{food})
		}else{
			commit(REDUCE_FOOD_COUNT,{food})
		}
	},
	//初始化购物车
	initcart({commit}){
		commit(CLEAR_CART)
	},
	//异步搜索请求
	async getSearchRes({commit},search){
		//发送异步ajax请求
		const result = await reqStoreSearch({search})
		//根据结果提交一个mutation
		if(result.OK===true){
			const search = result.data
			commit(RECEIVE_SEARCH,{search})
		}
	},
	//异步获取支付反馈
	async getPayState({commit},{price,trade_no,name,shop_id}){
		const result = await reqPay({price,trade_no,name,shop_id})
		
		if(result.OK===true){
			const pay = result.data
			commit(PAY_STATE,{pay})
		}
	},
	//异步获取订单历史
	async getHistory({commit},{userphone}){
		const result = await reqHistory({userphone})
		
		if(result.OK===true){
			const history = result.data
			commit(RECEIVE_HISTORY,{history})
		}
	},
	//更改评价页面显示的flag
	EvaluateToggle({commit},flag){
		commit(EVA_FLAG,{flag})
	},
	//更新评价页面的基础信息
	EvaluateUpdate({commit},info){
		commit(EVA_INFO,{info})
	},
	//更新评价完成监控的状态
	EvaluateFinish({commit},flag){
		commit(EVA_STATE,{flag})
	}
}