<template>
	<div id="Goods">
		<Food :food="food" ref="food_info"/>
		<div class="left_list">
			<ul>
				<!-- 标准列表 -->
				<li class="left_item" :class="{on:this.list_index==-3}" @click="list_check(-3)">
					<div class="item_icon">
						<svg t="1538638629124" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9713"
						xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
							<path d="M512 515.8944m-480 0a480 480 0 1 0 960 0 480 480 0 1 0-960 0Z" fill="#37a2e7" p-id="9714"></path>
							<path d="M393.776 315.2512h236.2336v52.2304h-236.2336V315.2512z m390.1504 133.2384h-43.2576l-25.7728-84.6048a45.824 45.824 0 0 0-43.0848-35.5008h-28.7136v25.9616h28.7136a20.608 20.608 0 0 1 18.3296 15.1712l24.8512 78.9728H308.7488l24.8352-78.9728a20.6528 20.6528 0 0 1 18.3264-15.1712h28.5536v-25.9616h-28.5536a45.6736 45.6736 0 0 0-42.9088 35.5008l-26.1824 84.6048H240.064a26.208 26.208 0 0 0 0 52.3904h7.2736l0.4224 2.0352 44.7712 214.2464a45.6896 45.6896 0 0 0 42.7552 35.9648h350.928a45.9232 45.9232 0 0 0 43.0816-35.5008l47.0432-214.5568 0.4352-2.192h7.1776a26.2016 26.2016 0 0 0 25.2864-26.2048 26.2016 26.2016 0 0 0-25.312-26.1824z m-375.6224 244.5856a19.0112 19.0112 0 0 1-28.6752 16.9216 19.0112 19.0112 0 0 1-9.344-16.9216v-182.5024a19.0144 19.0144 0 1 1 38.0192 0v182.5024z m118.8512 0a19.4976 19.4976 0 0 1-17.6256 20.9536 19.2832 19.2832 0 0 1-20.1408-18.2976 24.5728 24.5728 0 0 1 0-2.6592v-182.5024a18.9344 18.9344 0 0 1 28.6144-17.04 18.944 18.944 0 0 1 9.232 17.04v182.5024h-0.08z m118.8512 0a18.8896 18.8896 0 1 1-37.7504 0v-182.5024a18.9024 18.9024 0 0 1 9.2096-17.0016 18.8864 18.8864 0 1 1 28.5408 17.0016v182.5024z m0 0"
							fill="#FFFFFF" p-id="9715"></path>
						</svg>
					</div>
					<span class="left_title">买过</span>
				</li>
				<li class="left_item" :class="{on:this.list_index==-2}" @click="list_check(-2)">
					<div class="item_icon">
						<svg t="1538705402525" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1959"
						xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
							<path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m95.573333 814.762667a290.474667 290.474667 0 0 0-90.794666-355.328 224.256 224.256 0 0 1-48.810667 168.277333 116.053333 116.053333 0 0 0-16.042667-89.088A282.965333 282.965333 0 0 1 409.6 637.269333a154.282667 154.282667 0 0 0-12.288 177.152C268.629333 742.4 234.837333 673.792 254.293333 580.266667c14.336-68.266667 68.266667-125.269333 71.338667-194.218667a204.8 204.8 0 0 1 24.576 100.352c63.488-77.824 129.365333-181.930667 115.029333-277.162667 0 0 120.490667 37.888 170.666667 222.549334a102.4 102.4 0 0 0 11.946667-109.568c40.96 31.402667 286.378667 307.882667-40.277334 492.544z"
							fill="#ffc33f" p-id="1960"></path>
							<path d="M646.144 322.218667a102.4 102.4 0 0 1-11.946667 109.568c-48.810667-184.661333-170.666667-222.549333-170.666666-222.549334 14.336 95.232-51.541333 199.338667-115.029334 277.162667a204.8 204.8 0 0 0-24.576-100.352C321.194667 454.997333 268.629333 512 254.293333 580.266667c-19.456 93.525333 14.336 162.133333 143.018667 234.496a154.282667 154.282667 0 0 1 12.288-177.493334 282.965333 282.965333 0 0 0 42.666667-98.645333 116.053333 116.053333 0 0 1 16.042666 89.088 224.256 224.256 0 0 0 48.810667-168.277333 290.474667 290.474667 0 0 1 90.453333 355.328c326.656-184.661333 81.237333-461.141333 38.570667-492.544zM397.312 814.762667h-0.341333 0.341333z"
							fill="#FFFFFF" p-id="1961"></path>
						</svg>
					</div>
					<span class="left_title">热卖</span>
				</li>
				<li class="left_item" :class="{on:this.list_index==-1}" @click="list_check(-1)">
					<div class="item_icon">
						<svg t="1538705946142" viewBox="140 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8542"
						xmlns:xlink="http://www.w3.org/1999/xlink" width="27" height="27">
							<path d="M512 512m-375.2 0a375.2 375.2 0 1 0 750.4 0 375.2 375.2 0 1 0-750.4 0Z" fill="#ff7740" p-id="8543"></path>
							<path d="M246.2 526.7L225 547.8c-6.3 6.2-9.8 14.6-9.8 23.4 0 8.9 3.5 17.2 9.7 23.4l200 199c6.3 6.3 14.6 9.7 23.5 9.7s17.3-3.4 23.5-9.7l14.8-14.7-240.5-252.2z m0 0"
							fill="#FFFFFF" p-id="8544"></path>
							<path d="M744.6 490.6V316.5c0-22.1-18.1-40.1-40.3-40.1H525.8c-11.2 0-28.2 0-39.2 11L263 510l240.6 252.2 230-229c11.1-11.1 11.1-27.1 11-42.6zM610 455c-24.8 0-44.9-20-44.9-44.7 0-24.7 20.1-44.6 44.9-44.6 24.8 0 44.9 20 44.9 44.6 0 24.7-20.1 44.7-44.9 44.7z m0 0"
							fill="#FFFFFF" p-id="8545"></path>
						</svg>
					</div>
					<span class="left_title">折扣</span>
				</li>
				
				<!-- 自定义列表 -->
				<li v-for="(item,index) in this.Goods" :key="index" class="left_item" :class="{current: index==currentIndex}" @click="OnleftitemClick(index)">
					<span class="left_title">{{item.class_name}}</span>
				</li>
				
			</ul>
		</div>
		<div class="right_list">
			<ul>
				<li v-for="item in this.Goods" :key="item.ID" class="right_item_class">
					<span class="class_name">{{item.class_name}}</span>
					<ul>
						<li v-for="(good,index) in item.foods" :key="index" class="right_item">
							<div class="item_left">
								<!-- <img class="item_img" v-lazy="'../../../static/img/goods/'+good.src" @click="FoodShow(good)"/> -->
								<img class="item_img" v-lazy="good.src" @click="FoodShow(good)"/>
							</div>
							<div class="item_right">
								<a class="item_name">{{good.name}}</a>
								<div class="tags">
									<div v-for="tags in good.tags" :key="tags.ID" class="tag">{{tags}}</div>
								</div>
								<a class="sell_and_like">月售{{good.sell}}&nbsp;&nbsp;&nbsp;&nbsp;赞{{good.like}}</a>
								<a class="item_price" style="color: #fb4e44;">¥{{good.price}}</a>
								<CartControl :food="good"/>								
							</div>
						</li>
					</ul>
				</li>
				<li class="right_item" style="height: 70px;"></li>
			</ul>
		</div>
		<ShopCart/>
	</div>
</template>



<script>
	import {mapState,mapActions} from 'vuex'
	import BScroll from 'better-scroll'
	import CartControl from '../CartControl/CartControl.vue'
	import Food from '../Food/Food.vue'
	import ShopCart from '../ShopCart/ShopCart.vue'
	
	export default {
		data() {
			return {
				list_index: -3,
				scrollY: 0,				//右侧滑动的Y轴坐标
				tops: [],				//所有右侧分类列表的top(基于页面的Y轴位置)组成的数组
				food: {},				//用于存放选中的食物信息,传值给<Food/>组件
			}
		},
		components:{
			CartControl,
			Food,
			ShopCart,
			
		},
		computed: {
			...mapState([
				'Goods',
				'Info'
			]),
			currentIndex(){
				//得到条件数据
				const {scrollY,tops} = this	//从this获取数据
				//根据条件数据得出当前应该对应的左侧列表
				const index = tops.findIndex((top,index)=>{		//依次遍历数组,当判定为true时返回对应的index
					//当scrollY>=当前top && scrollY<下一个top时,返回true-----既在某个区间范围时就返回true
					return scrollY>=tops[index] && scrollY<tops[index+1]
				})
				//返回结果
				return index
			}
		},
		methods: {
			...mapActions([
				'getGoodsList'
			]),
			FoodShow(food_info){
				this.food = food_info
				
				//调用Food.vue中的显示/隐藏函数
				this.$refs.food_info.toggleShow()
			},
			list_check(n) {
				this.list_index = n
			},
			OnleftitemClick(index){
				const y = this.tops[index]
				this.ScrollY = y
				this.foods_scroll.scrollTo(0,-y,700)
				//scrollTo(x,y,time,[easy*])
				
			},
			//初始化滑动效果
			_initScroll(){
				//创建列表滚动效果
				if(!this.class_scroll){
					this.class_scroll = new BScroll('.left_list',{
						click:true			//开放点击
					})
				}else{
					this.class_scroll.refresh()		//预防创建事件在页面标签生成之前就执行导致列表不能滑动,所以刷新一下重新获取列表高度
				}
				
				if(!this.foods_scroll){
					this.foods_scroll = new BScroll('.right_list',{
						click:true,			//开放点击
						probeType: 3		//滑动事件的派发程度,0为无,1-3分别具有一定程度
					})
				}else{
					this.foods_scroll.refresh()
				}
				
				
				//给右侧列表绑定滚动scroll监听
				this.foods_scroll.on('scroll',({x,y})=>{
					this.scrollY=Math.abs(y)
				})
				
			},
			//初始化tops
			_initTops(){
				//初始化数组tops
				const tops = []
				var top = 0
				tops.push(top)
				
				//找到所有分类的<li>
				const class_list = $(".right_item_class")
				
				for(var i=0;i<class_list.length-1;i++){
					top += class_list[i].clientHeight
					tops.push(top)
				}
				
				//更新数据
				this.tops = tops
			},
		},
		async mounted(){
			this.getGoodsList(this.Info.ID)
		},
		watch:{
			//当Goods中的数据有变动(读取/加载完成后)进行的过程,避免scroll在列表加载完以前就声明,使滚动效果无效
			Goods(value){
				this.$nextTick(()=>{
					//初始化滚动条
					this._initScroll()
					
					//初始化tops[]
					this._initTops()
				})
			}
		}
	}
</script>

<style scoped="scoped">
	#Goods {
		width: 100%;
		height: 100%;
		float: left;
		background-color: #F4F4F4;
	}

	.left_list {
		height: 100%;
		width: 25%;
		float: left;
		overflow: hidden;
	}

	.left_item {
		width: 100%;
		height: 40px;
		margin-bottom: 0;

	}

	.item_icon {
		width: auto;
		height: 40px;
		float: left;
		padding-left: 8px;
		padding-top: 2px;
		position: absolute;
	}

	.left_title {
		text-align: center;
		line-height: 40px;
		width: 100%;
		height: 100%;
		float: left;
		padding-left: 8px;
		font-size: 16px;
	}

	.current {
		background-color: #ffffff;
		font-weight: bold;
	}

	.right_list {
		height: 100%;
		width: 75%;
		float: left;
		overflow: hidden;
		background-color: #FFFFFF;
	}

	.class_name {
		width: 100%;
		height: 24px;
		display: block;
		background-color: #f4f4f4;
		font-size: 16px;
		font-weight: 400;
		padding-left: 12px;
	}

	.right_item {
		width: 100%;
		height: 100px;
		padding-left: 90px;
	}

	.item_left {
		width: 90px;
		height: 100%;
		margin-left: -90px;
		float: left;
	}

	.item_right {
		width: 100%;
		height: 100%;
		float: left;
	}

	.item_img {
		width: 70px;
		height: 70px;
		float: left;
		margin: 10px;
		border-radius: 7px;
	}

	.item_name {
		width: 100%;
		height: 20px;
		float: left;
		display: block;
		font-size: 15px;
		font-weight: bold;
		margin-top: 10px;
		/* 超出部分用省略号代替 */
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.tags {
		width: auto;
		height: 15px;
		float: left;
		margin-top: 5px;
	}

	.tag {
		height: 15px;
		width: auto;
		float: left;
		background-color: #f5f5f5;
		margin-right: 8px;
		font-size: 12px;
		text-align: center;
		line-height: 13px;
		padding-left: 3px;
		padding-right: 3px;
	}

	.sell_and_like {
		display: block;
		width: 100%;
		height: 18px;
		float: left;
		font-size: 12px;
		margin-top: 3px;
	}

	.item_price {
		width: 50%;
		height: 30px;
		float: left;
		display: block;
	}
	
</style>
