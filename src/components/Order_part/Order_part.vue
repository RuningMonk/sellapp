<template>
	<div class="part" :class="{first:this.first == true}">
		<div class="left">
			<img :src="this.imgsrc" class="pic">
			<!-- <img v-lazy="this.imgsrc" class="pic"> -->
			<!-- 这里加:key是因为切换页面/路由时vue-lazyload不会自动update,需要加上:key重新指定图片地址才行... -->
		</div>
		<div class="right">
			<div class="Rtop">
				<div class="Rtop_left">
					<div class="text_name">
						<span>{{this.Store.Store_name}}</span>
					</div>
					<div class="tags">
						<span class="tag_box red" v-for="(item,index) in this.Store.Store_tags" :key="item.ID" v-if="index<=2">{{item}}</span>
						<span class="point red">...</span>
					</div>
				</div>
				<div class="Rtop_right">订单已完成</div>
			</div>
			<div class="Rbottom">
				<div class="things_price container">
					<span class="things" :class="{only:this.obj.food.length==1}">{{this.obj.food[0]}}</span>
					<span class="count" v-if="this.obj.food.length>=2">等&nbsp;{{this.obj.food.length}}&nbsp;件商品</span>
					<span class="price">¥&nbsp;{{this.obj.price}}</span>
				</div>
				<div class="btns container">
					<input type="button" class="btn-default comment" v-if="this.obj.point==0" value="评价" @click="evaluateBtn()">
					<input type="button" class="btn-default" value="再来一单">
					<input type="button" class="btn-default" value="相似商家">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'

	export default {
		props: {
			obj: Object,
			first: Boolean
		},
		data() {
			return {
				Store: {}
			}
		},
		computed: {
			...mapState([
				'Stores',
				'EvaluateFlag'
			]),
			imgsrc(){
				let src = this.Store.Store_src;
				return src;
			}
		},
		methods: {
			...mapActions([
				'EvaluateToggle',
				'EvaluateUpdate'
			]),
			findStore() {
				let get = {}
				const Stores = this.Stores
				for (let i = 0; i < Object.keys(Stores).length; i++) {
					if (this.obj.shop_id == Stores[i].ID) {
						get = Stores[i]
						break
					}
				}
				this.Store = get
			},
			evaluateBtn(){
				const that = this;
				//上传当前评价目标相关信息
				let Info = {};
				Info.food = that.obj.food;
				Info.trade_no = that.obj.trade_no;
				Info.time = that.obj.time;
				Info.Store_name = that.Store.Store_name;
				Info.Store_src = that.Store.Store_src;
				Info.delivery = that.Store.delivery;
				this.EvaluateUpdate(Info);
				//让评价页面显示
				document.getElementById('Evaluate').style.display = 'flex';
				this.EvaluateToggle(true)
			}
		},
		mounted() {
			this.findStore()
		},
		watch: {
			Stores(value) {
				this.findStore()
			}
		},
	}
</script>

<style scoped="scoped">
	.part {
		width: 97vw;
		height: 170px;
		margin-top: 7px;
		margin-left: auto;
		margin-right: auto;
		background-color: #FFFFFF;
		box-shadow: 0px 0px 6px #C5C5C5;
	}
	
	.first{
		margin-top: 0px;
	}

	.left {
		width: 20%;
		height: 100%;
		float: left;
		text-align: center;
	}

	.right {
		width: 80%;
		height: 100%;
		float: left;
	}

	.pic {
		width: 45px;
		height: 45px;
		border-radius: 5px;
		border: solid 1px black;
		margin-top: 15px;
	}

	.Rtop {
		width: 100%;
		height: 70px;
		float: left;
	}
	
	.Rtop::after{
		content: "";
		display: block;
		width: 95%;
		height: 2px;
		background-color: #EEEEEE;
		float: left;
	}
	
	.Rtop_left{
		width: 60%;
		height: 100%;
		float: left;
	}
	
	.Rtop_right{
		width: 40%;
		height: 100%;
		float: left;
		text-align: center;
		font-size: 15px;
		padding-top: 25px;
		color: #6a6a6a;
	}
	
	.text_name{
		width: 100%;
		height: 50%;
		float: left;
		font-size: 15px;
		font-weight: bold;
		line-height: 44px;
	}
	
	.text_name>span{
		float: left;
	}
	
	.text_name>span::after{
		content: '';
		position: absolute;
		
		background-image: url(../../../static/img/right.png);
		background-repeat: no-repeat;
		background-size: cover;
		margin-top: 13px;
		margin-left: 10px;
		opacity: 0.4;
		width: 20px;
		height: 20px;
	}
	
	.tags{
		width: 100%;
		height: 50%;
		float: left;
		padding-top: 5px;
	}
	
	.tag_box{
		border-style: solid;
		border-width: 1px;
		border-color: #52c1b3;
		width: auto;
		margin-right: 5px;
		color: #52c1b3;
		float: left;
		font-size: 8px;
		padding-left: 2px;
		padding-right: 2px;
		font-family: monospace;
	}
	
	.red{
		border-color: #fb756c;
		color: #FB756C;
	}
	
	.point{
		display: block;
		width: auto;
		height: 20px;
		float: left;
		line-height: 8px;
	}
	
	.Rbottom{
		width: 100%;
		height: 100px;
		float: left;
	}
	
	.things_price{
		width: 100%;
		height: 25px;
		font-size: 15px;
		font-weight: 400;
		color: #7F7F7F;
		padding-left: 0px;
		margin-top: 15px;
	}
	
	.things{
		width: 130px;
		height: 20px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		float: left;
	}
	
	.only{
		width: 80%;
	}
	
	.count{
		float: left;
		margin-left: 5%;
	}
	
	.price{
		font-size: 15px;
		font-weight: bold;
		color: #333333;
		float: right;
	}
	
	.btns{
		width: 100%;
		height: auto;
		float: left;
		margin-top: 15px;
	}
	
	.btn-default{
		width: 75px;
		height: 30px;
		border: solid 1px #C4C4C4;
		background-color: #FFFFFF;
		font-size: 15px;
		font-weight: 500;
		border-radius: 3px;
		margin-left: 3%;
		outline: none;
		float: right;
	}
	
	.comment{
		background-color: #FFD161;
		border: none;
	}
	
</style>
