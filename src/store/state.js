/*
状态对象
*/

export default {
	Banner: [], 		//轮播数组
	Stores: [], 		//商家数组
	Userinfo: [], 		//用户信息
	Goods: [], 			//店铺商品
	History: [], 		//订单历史
	Comments: [], 		//商品评价

	Info: {}, 			//当前访问的店铺信息
	CartFoods: [], 		//购物车中选中的食品
	SearchStores: [],	//搜索店铺的结果
	Pay: [], 			//支付状态

	Classify: [			//首页分类列表
		{
			src: '1.png',
			name: '美食'
		},
		{
			src: '2.png',
			name: '超市便利'
		},
		{
			src: '3.png',
			name: '蔬菜水果'
		},
		{
			src: '4.png',
			name: '鸡脖卤味'
		},
		{
			src: '5.png',
			name: '下午茶'
		},
		{
			src: '6.png',
			name: '校园优选'
		},
		{
			src: '7.png',
			name: '减免配送费'
		},
		{
			src: '8.png',
			name: '炸鸡零食'
		},
		{
			src: '9.png',
			name: '麻辣烫冒菜'
		},
		{
			src: '10.png',
			name: '香锅烤鱼'
		},
		{
			src: '11.png',
			name: '浪漫鲜花'
		},
		{
			src: '12.png',
			name: '甜蜜蛋糕'
		},
		{
			src: '13.png',
			name: '到店自取'
		},
		{
			src: '5.png',
			name: '跑腿代购'
		},
		{
			src: '8.png',
			name: '美团专送'
		},
		{
			src: '2.png',
			name: '送药上门'
		},
		{
			src: '7.png',
			name: '包子粥铺'
		},
		{
			src: '6.png',
			name: '快食简餐'
		},
		{
			src: '3.png',
			name: '无辣不欢'
		},
		{
			src: '11.png',
			name: '全部分类'
		}
	],
	
	EvaluateFlag: false,		//控制评价页面的显示
	EvaluateInfo: [],			//当前评价页面的数据
	EvaluateState: false,	//监控评价是否成功
}
