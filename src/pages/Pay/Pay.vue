<template>
	<div id="Pay">
		<div class="head">
			<router-link id="back" to="/shop"></router-link>
			<a class="head_title">提交订单</a>
		</div>
		<div class="tabs container">
			<router-link tag="div" to="/pay/delivery" @click.native="settab(0)" :class="{tab_left_on:tabindex==0,tab_left:tabindex==1}">外卖配送</router-link>
			<router-link tag="div" to="/pay/self" @click.native="settab(1)" :class="{tab_right:tabindex==0,tab_right_on:tabindex==1}">到店自取</router-link>
		</div>
		<keep-alive>
			<router-view/>
		</keep-alive>
		<div class="list container">
			<div class="store">
				<span class="store_name">{{this.Info.Store_name}}</span>
				<div class="tag">商家自配</div>
			</div>
			<div class="goods">
				<ul>
					<li v-for="item in this.CartFoods" :key="item.ID" class="goods_item">
						<img v-lazy="item.src" class="item_img">
						<div class="item_text">
							<div class="name_price">
								<div class="item_name">{{item.name}}</div>
								<div class="item_price">¥ <span>{{item.price*item.count}}</span></div>
							</div>
							<div class="count">
								<span>x{{item.count}}</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="other">
				<div>
					<div class="other_name">包装费</div>
					<div class="other_price">¥ <span>0</span></div>
				</div>
				<div>
					<div class="other_name">配送费</div>
					<div class="other_price">¥ <span>{{this.Info.fee}}</span></div>
				</div>
			</div>
		</div>
		<div class="protect container">
			<div class="protect_text">
				<div class="protect_name">
					<img src="../../../static/img/lock.png" class="protect_img">
					号码保护
					<img src="../../../static/img/question.png" class="protect_img">
				</div>
				<div class="protect_switch">
					<div class="switch_container">
						<div class="bg_con">
							<input id="switch" type="checkbox" class="switch"/>
							<label for="switch"></label>
						</div>
					</div>
				</div>
			</div>
			<div class="protect_descript">对商家、骑手隐藏您的真实手机号，保护您的隐私</div>
		</div>
		<div class="remark container">
			<div>
				<div class="remark_name">备注</div>
				<a class="inf_set"></a>
				<div class="set">口味、偏好等要求</div>
			</div>
			<div>
				<div class="remark_name">餐具数量</div>
				<a class="inf_set"></a>
				<div class="set">未选择</div>
			</div>
			<div>
				<div class="remark_name">发票</div>
				<div class="set">该商家不支持开发票</div>
			</div>
			<div>
				<div class="remark_name">支付方式</div>
				<div class="set seted">在线支付</div>
			</div>
		</div>
		<div class="bottom">
			<div class="price">合计 ¥<span>{{this.totalPrice+this.Info.fee}}</span></div>
			<div class="pay" @click="goPay()">提交订单</div>
		</div>
	</div>
</template>

<script>
	import {
		mapActions,
		mapState,
		mapGetters
	} from 'vuex'

	export default {
		data() {
			return {
				tabindex: 0
			}
		},
		methods: {
			...mapActions([
				'getPayState'
			]),
			settab(index) {
				this.tabindex = index
			},
			goPay(){
				let price = this.totalPrice + this.Info.fee;
				let trade_no = Math.ceil(Math.random()*1000000000000000000).toString();
				let name = this.name;
				let shop_id = this.Info.ID.toString();
				this.$store.dispatch('getPayState',{price,trade_no,name,shop_id})
			}
		},
		computed: {
			...mapState([
				'Info',
				'CartFoods',
				'Pay',
			]),
			...mapGetters([
				'totalPrice'
			]),
			name(){
				let str = '';
				for(let i = 0;i < this.CartFoods.length;i++){
					str += this.CartFoods[i].name + ',';
				};
				str = str.substr(0,str.length - 1);
				console.log(str);
				return str;
			}
		},
		watch:{
			Pay(value){
				window.location.href=this.Pay
			}
		}
	}
</script>

<style scoped="scoped">
	#Pay {
		width: 100%;
		height: auto;
		position: absolute;
		background: linear-gradient(to bottom, #ffd266, #f4f4f4 35%);
	}

	.head {
		height: 50px;
		width: 100%;
	}

	#back {
		background-image: url(../../../static/img/back.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 25px;
		height: 25px;
		display: block;
		position: absolute;
		margin-top: 13px;
		margin-left: 4%;
	}

	.head_title {
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		width: 100%;
		float: left;
		line-height: 50px;
	}

	.tabs {
		width: 95vw;
		height: 40px;
		margin-left: auto;
		margin-right: auto;
		padding: 0;
		overflow: hidden;
	}

	.tab_left {
		width: 50%;
		height: 45px;
		line-height: 35px;
		background-color: #FBF2DE;
		text-align: center;
		font-size: 17px;
		float: left;
		border-top-left-radius: 5px;
		margin-top: 5px;
		margin-left: 5px;
	}

	.tab_left_on {
		width: 50%;
		height: 40px;
		line-height: 40px;
		background-color: #FFFFFF;
		text-align: center;
		font-size: 17px;
		font-weight: bold;
		float: left;
		border-top-left-radius: 5px;
	}

	.tab_left_on::after {
		content: '';
		background-color: #FFFFFF;
		width: 10%;
		height: 40px;
		position: absolute;
		top: 50px;
		left: 44%;
		transform: skewX(30deg);
	}

	.tab_right {
		width: 50%;
		height: 40px;
		line-height: 35px;
		background-color: #FBF2DE;
		text-align: center;
		font-size: 17px;
		float: left;
		border-top-right-radius: 5px;
		margin-top: 5px;
		margin-left: -5px;
	}

	.tab_right_on {
		width: 50%;
		height: 40px;
		line-height: 40px;
		background-color: #FFFFFF;
		text-align: center;
		font-size: 17px;
		font-weight: bold;
		float: left;
		border-top-right-radius: 5px;
		margin-left: -5px;
	}

	.tab_right_on::before {
		content: '';
		background-color: #FFFFFF;
		width: 10%;
		height: 40px;
		position: absolute;
		top: 50px;
		left: 47%;
		transform: skewX(-30deg);
	}

	.list {
		margin-top: 5px;
		width: 95vw;
		height: auto;
		background-color: #FFFFFF;
		margin-left: auto;
		margin-right: auto;
		border-radius: 5px;
	}

	.store {
		width: 100%;
		height: 50px;
		border-bottom: solid 1px #F8F8F8;
	}

	.store_name {
		font-size: 14px;
		line-height: 50px;
		font-weight: 400;
		color: #898989;
	}

	.tag {
		float: right;
		margin-top: 15px;
		padding-left: 3px;
		padding-right: 3px;
		width: auto;
		height: 20px;
		font-size: 12px;
		border: solid 1px #5BCBAD;
		color: #5BCBAD;
	}

	.goods {
		width: 100%;
		height: auto;
		border-bottom: solid 1px #F8F8F8;
	}

	.goods>ul {
		margin-bottom: 15px;
	}

	.goods_item {
		width: 100%;
		height: 50px;
		margin-top: 15px;
		padding-left: 50px;
	}

	.item_img {
		width: 50px;
		height: 50px;
		margin-left: -50px;
		float: left;
	}

	.item_text {
		width: 100%;
		height: 50px;
		float: left;
	}

	.name_price {
		width: 100%;
		height: 30px;
	}

	.item_name {
		font-size: 15px;
		font-weight: bold;
		padding-left: 10px;
		line-height: 15px;
		display: block;
		width: 70%;
		height: 30px;
		float: left;
	}

	.item_price {
		text-align: right;
		font-size: 15px;
		font-weight: bold;
		line-height: 15px;
		display: block;
		width: 30%;
		height: 30px;
		float: right;
	}

	.item_price>span {
		font-size: 18px;
	}

	.count {
		font-size: 14px;
		color: #999999;
		padding-left: 10px;
		line-height: 23px;
		display: block;
		width: 100%;
		height: 20px;
	}

	.other {
		width: 100%;
		height: 65px;
		margin-top: 5px;
	}

	.other>div {
		width: 100%;
		height: 30px;
		float: left;
		line-height: 30px;
	}

	.other_name {
		float: left;
		font-size: 16px;
	}

	.other_price {
		float: right;
		font-size: 15px;
		font-weight: bold;
	}

	.other_price>span {
		font-size: 18px;
	}

	.remark {
		margin-top: 5px;
		width: 95vw;
		height: auto;
		background-color: #FFFFFF;
		margin-left: auto;
		margin-right: auto;
		border-radius: 5px;
		margin-bottom: 65px;
	}

	.remark>div {
		width: 100%;
		height: 40px;
	}

	.remark_name {
		float: left;
		font-size: 16px;
		font-weight: bold;
		line-height: 40px;
	}

	.set {
		float: right;
		font-size: 16px;
		line-height: 40px;
		color: #999999;
	}

	.seted {
		color: #000000;
	}

	.inf_set {
		background-image: url(../../../static/img/right.png);
		background-repeat: no-repeat;
		background-size: cover;
		float: right;
		opacity: 0.4;
		width: 20px;
		height: 20px;
		margin-top: 11px;
		margin-left: 5px;
		margin-right: -5px;
		display: block;
	}

	.bottom {
		width: 100%;
		height: 60px;
		background-color: #333333;
		position: fixed;
		bottom: 0;
	}

	.price {
		float: left;
		width: 70%;
		height: 100%;
		text-align: right;
		padding-right: 5%;
		font-size: 15px;
		line-height: 60px;
		color: #FFFFFF;
	}

	.price>span {
		font-size: 30px;
	}

	.pay {
		float: left;
		width: 30%;
		height: 100%;
		background-color: #FFD161;
		text-align: center;
		font-size: 18px;
		font-weight: bold;
		line-height: 60px;
	}

	.protect {
		margin-top: 5px;
		width: 95vw;
		height: 65px;
		background-color: #FFFFFF;
		margin-left: auto;
		margin-right: auto;
		border-radius: 5px;
	}

	.protect_text {
		width: 100%;
		height: 40px;
		float: left;
	}

	.protect_name {
		width: 80%;
		height: 100%;
		float: left;
		font-size: 16px;
		font-weight: bold;
		line-height: 40px;
	}
	
	.protect_img{
		width: 15px;
		height: 15px;
		margin-top: -4px;
	}

	.protect_switch {
		width: 20%;
		height: 100%;
		float: left;
		text-align: right;
	}

	.protect_descript {
		width: 100%;
		float: left;
		font-size: 12px;
		color: #999999;
		margin-top: -5px;
	}

	/* 切换的开关 */

	.switch_container {
		margin-top: 10px;
	}

	.switch {
		display: none;
	}

	.switch_container label {
		position: relative;
		display: block;
		padding: 1px;
		border-radius: 24px;
		height: 22px;
		width: 40px;
		margin-bottom: 0px;
		background-color: #eee;
		cursor: pointer;
		vertical-align: top;
		-webkit-user-select: none;
		float: right;
	}

	.switch_container label:before {
		content: '';
		display: block;
		border-radius: 24px;
		height: 22px;
		background-color: white;
		-webkit-transform: scale(1, 1);
		-webkit-transition: all 0.3s ease;
	}

	.switch_container label:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -10px;
		margin-left: -11px;
		width: 22px;
		height: 22px;
		border-radius: 22px;
		background-color: white;
		box-shadow: -1px 1px 1px 1px rgba(0, 0, 0, 0.28);
		-webkit-transform: translateX(-9px);
		-webkit-transition: all 0.3s ease;
	}

	.switch:checked~label:after {
		-webkit-transform: translateX(9px);
	}

	.switch:checked~label:before {
		background-color: #ffd705;
	}
</style>
