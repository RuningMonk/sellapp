/*
直接更新state的多个方法的对象
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
	EVA_INFO
	
} from './mutation-types'

import Vue from 'vue'

export default {
	[RECEIVE_STORES](state, {stores}) {
		state.Stores = stores
	},
	[RECEIVE_SEARCH](state, {search}) {
		state.SearchStores = search
	},
	[RECEIVE_BANNERS](state, {banners}) {
		state.Banner = banners
	},
	[RECEIVE_USER_INFO](state, {userinfo}) {
		state.Userinfo = userinfo
	},
	[RECEIVE_GOODS](state, {goods}) {
		state.Goods = goods
	},
	[RECEIVE_COMMENTS](state, {comments}) {
		state.Comments = comments
	},
	[RECEIVE_HISTORY](state, {history}) {
		state.History = history
	},
	[RESET_USER_INFO](state) {
		state.Userinfo = {}
	},
	[SET_SHOP_INFO](state,{shop_info}) {
		state.Info = shop_info
		sessionStorage.setItem("shop_info",JSON.stringify(shop_info))
	},
	[ADD_FOOD_COUNT](state,{food}) {
		if(!food.count){
			Vue.set(food,'count',1)		//让新添加的数据也有数据绑定的效果
			state.CartFoods.push(food)	//将food添加入CartFoods中
		}else{
			food.count++
		}
	},
	[REDUCE_FOOD_COUNT](state,{food}) {
		if(food.count)
			food.count--
		if(food.count===0){
			state.CartFoods.splice(state.CartFoods.indexOf(food),1)		//将food从CartFoods中移除,其中splice的参数为下标,所以用indexof去查找出当前food的下标,并删除
		}
	},
	[CLEAR_CART](state){
		//清除购物车中记录的food中的count
		state.CartFoods.forEach(food => food.count = 0)
		//清除购物车中记录的food
		state.CartFoods = []
	},
	[PAY_STATE](state,{pay}){
		state.Pay = pay
	},
	[EVA_FLAG](state,{flag}){
		state.EvaluateFlag = flag
	},
	[EVA_INFO](state,{info}){
		state.EvaluateInfo = info
	}
}
