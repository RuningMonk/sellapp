<template>
	<div id="Evaluate" :class="{'show':this.EvaluateFlag,'hide':!this.EvaluateFlag}">
		<div class="top">
			<div class="exit" @click="toggle()"></div>
			<div class="title font">评价</div>
		</div>
		<div class="body">
			<div class="delivery body_part">
				<div class="delivery_top">
					<div class="pic">
						<img src="../../../static/img/default_img.jpg" class="head-pic">
					</div>
					<div class="info">
						<div class="info-top">
							<div class="name font">{{this.EvaluateInfo?this.EvaluateInfo.delivery:''}}</div>
							<div class="tip font">评价对骑手匿名</div>
						</div>
						<div class="info-bottom">
							<div class="time font">3月7日 18:20 左右送达</div>
							<div class="qa font">时间不准?</div>
						</div>
					</div>
				</div>
				<div class="delivery_middle">
					<div class="btns">
						<input type="radio" name="feel" id="feel-1" class="choose">
						<label for="feel-1" class="font" @click="FeelChoose(false)" :class="{'checked':!this.feel}">不满意</label>
						<input type="radio" name="feel" id="feel-2" class="choose" :checked="this.feel">
						<label for="feel-2" class="font" @click="FeelChoose(true)" :class="{'checked':this.feel}">满意</label>
					</div>
				</div>
				<div class="delivery_bottom" v-show="feel">
					<div class="bottom-cell" v-for="(item,index) in this.Advantage" :key="item.ID">
						<span class="cell-text font" @click="CellChecked(index)" ref="AdvantageCell">{{item}}</span>
					</div>
				</div>
				<div class="delivery_bottom" v-show="!feel">
					<div class="bottom-cell" v-for="(item,index) in this.Disadvantage" :key="item.ID">
						<span class="cell-text font" @click="CellChecked(index)" ref="DisadvantageCell">{{item}}</span>
					</div>
				</div>
			</div>
			<div class="comment body_part">
				<div class="store">
					<div class="pic">
						<img :src="this.EvaluateInfo.Store_src?this.EvaluateInfo.Store_src:''" class="head-pic">
					</div>
					<div class="name">
						<div class="name-text font">{{this.EvaluateInfo.Store_name?this.EvaluateInfo.Store_name:''}}</div>
					</div>
					<div class="anonymous">
						<div class="anonymous-text font">匿名评价</div>
					</div>
				</div>
				<div class="content">
					<div class="point">
						<div class="stars">
							<div class="star" v-for="(item,index) in 5" :key="item.ID" @click="setPoint(index)" :class="{'star-on':index<point}"></div>
						</div>
					</div>
					<div class="text">
						<textarea class="text-area" v-model="content" placeholder="亲，菜品口味如何，对包装服务等还满意吗？" />
					</div>
				</div>
				<div class="like">
					<div class="food_name">
						<div class="name_text font">{{this.FoodName}}</div>
					</div>
					<div class="like_check">
						<div class="CheckBox" @click="setLike(true)" :class="{'ILike':like}">
							<input type="radio" id="like1" :checked="like">
							<label for="like1" class="like-btn font"></label>
						</div>
						<div class="CheckBox" @click="setLike(false)" :class="{'ILike':!like}">
							<input type="radio" id="like2">
							<label for="like2" class="dislike-btn font"></label>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom" :class="{'bottom-active':point!=0}" @click="submit()">
			<div class="bottom-text font">提交</div>
		</div>
		
		
	</div>
</template>

<script>
	import {mapState,mapActions} from 'vuex'
	
	export default{
		data() {
			return {
				feel: true,
				like: true,
				Advantage:['风雨无阻','快速准时','仪表整洁','礼貌热情','货品完好'],
				Disadvantage:['仪表不整','骚扰威胁','未到指定地点','态度差','送达不通知'],
				AdvantageCells:[false,false,false,false,false],
				DisadvantageCells:[false,false,false,false,false],
				point: 0,
				content: ''
			}
		},
		mounted(){
			const that = this;
			
		},
		computed: {
			...mapState([
				'EvaluateFlag',
				'EvaluateInfo'
			]),
			FoodName(){
				let name = '';
				if(this.EvaluateInfo.food){
					for(let i = 0;i < this.EvaluateInfo.food.length;i++){
						name += this.EvaluateInfo.food[i] + ','
					}
				}
				return name
			}
		},
		methods: {
			...mapActions([
				'EvaluateToggle',
				'EvaluateUpdate',
				'UpdateComment'
			]),
			toggle() {
				this.EvaluateToggle(false)
				this.Init();
				setTimeout(function(){
					document.getElementById('Evaluate').style.display = 'none'
				},500)
			},
			Init(){
				const that = this;
				//Init类名
				let cells = document.getElementsByClassName('cell-text');
				for(let i=0;i<cells.length;i++){
					cells[i].className = 'cell-text font'
				}
				//Init数据
				that.like = true;
				that.feel = true;
				that.AdvantageCells = [false,false,false,false,false];
				that.DisadvantageCells = [false,false,false,false,false];
				that.point = 0;
				that.content = '';
			},
			FeelChoose(flag){
				this.feel = flag;
			},
			CellChecked(index){
				if(this.feel){
					this.AdvantageCells[index] = !this.AdvantageCells[index];
					if(this.AdvantageCells[index]){
						this.$refs.AdvantageCell[index].className = 'cell-text cell-checked font'
					}else{
						this.$refs.AdvantageCell[index].className = 'cell-text font'
					}
				}else{
					this.DisadvantageCells[index] = !this.DisadvantageCells[index];
					if(this.DisadvantageCells[index]){
						this.$refs.DisadvantageCell[index].className = 'cell-text cell-checked font'
					}else{
						this.$refs.DisadvantageCell[index].className = 'cell-text font'
					}
				}
			},
			setPoint(index){
				this.point = index + 1
			},
			setLike(flag){
				this.like = flag
			},
			submit(){
				let sql = '';
				if(this.content){
					sql = "UPDATE comment_table SET point='" + this.point + "',content='" + this.content + "' WHERE trade_no='" + this.EvaluateInfo.trade_no + "'";
				}else{
					sql = "UPDATE comment_table SET point='" + this.point + "' WHERE trade_no='" + this.EvaluateInfo.trade_no + "'";
				}
				
				this.UpdateComment(sql);
			}
		}
	}
	
</script>

<style scoped="scoped">
	
	#Evaluate{
		width: 100vw;
		height: 100vh;
		background-color: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		z-index: 101;
		transition: all 0.5s;
		display: none;
	}
	
	.show{
		top: 0px;
		opacity: 1;
	}
	
	.hide{
		top: 100vh;
		opacity: 0;
		/* height: 0 !important; */
	}
	
	.top{
		width: 100%;
		height: 8%;
		position: relative;
		display: flex;
	}
	
	.top .exit{
		background-image: url(../../../static/img/exit.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 40px;
		height: 40px;
		position: absolute;
		transform: translate(-50%,-50%);
		top: 50%;
		left: 30px;
	}
	
	.top .title{
		position: absolute;
		transform: translate(-50%,-50%);
		top: 50%;
		left: 50%;
		font-size: 20px;
	}
	
	.body{
		width: 100%;
		height: 84%;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	
	.body .body_part{
		width: 95%;
		margin: 2.5%;
		margin-top: 0;
		background-color: #FFFFFF;
		padding: 15px;
		padding-bottom: 0px;
		border-radius: 3px;
	}
	
	.body .delivery{
		height: 40%;
	}
	
	.body .delivery .delivery_top{
		height: 30%;
		width: 100%;
		border-bottom: solid 1px #EFEFEF;
		flex-direction: row;
		display: flex;
	}
	
	.delivery .delivery_top .pic{
		display: flex;
		position: relative;
		height: 100%;
		width: 20%;
	}
	
	.delivery_top .pic .head-pic{
		width: 70%;
		height: 70%;
		position: absolute;
		transform: translate(-50%,-50%);
		top: 40%;
		left: 50%;
		border-radius: 50%;
		border: solid 1px #F4F4F4;
	}
	
	.delivery .delivery_top .info{
		display: flex;
		flex-direction: column;
		position: relative;
		height: 100%;
		width: 80%;
	}
	
	.delivery_top .info .info-top,.delivery_top .info .info-bottom{
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 50%;
	}
	
	.info .info-top .name{
		width: 50%;
		height: 100%;
		display: flex;
		font-size: 16px;
		align-items: center;
	}
	
	.info .info-top .tip{
		width: 50%;
		height: 100%;
		display: flex;
		font-size: 12px;
		justify-content: flex-end;
		line-height: 30px;
		color: #9F9F9F;
	}
	
	.info .info-bottom .time{
		width: 70%;
		height: 100%;
		display: flex;
		font-size: 14px;
	}
	
	.info .info-bottom .qa{
		width: 30%;
		height: 100%;
		display: flex;
		font-size: 14px;
		justify-content: center;
		color: #348BED;
	}
	
	.body .delivery .delivery_middle{
		height: 27%;
		width: 100%;
	}
	
	.delivery .delivery_middle .btns{
		width: 90%;
		height: 100%;
		margin: auto;
		display: flex;
		flex-direction: row;
	}
	
	.delivery_middle .btns .choose{
		display: none;
	}
	
	.delivery_middle .btns .checked{
		background-color: #FFD161;
	}
	
	.delivery_middle .btns label{
		display: block;
		width: 40%;
		height: 60%;
		margin: auto;
		text-align: center;
		border: solid 1px #EFEFEF;
		border-radius: 15px;
		font-size: 15px;
		font-weight: bold;
		line-height: 33px;
	}
	
	.body .delivery .delivery_bottom{
		height: 43%;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.delivery .delivery_bottom .bottom-cell{
		width: 33%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.delivery_bottom .bottom-cell .cell-text{
		width: 80%;
		height: 60%;
		margin: auto;
		font-size: 12px;
		line-height: 29px;
		border: solid 1px #F4F4F4;
	}
	
	.delivery_bottom .bottom-cell .cell-checked{
		color: #FFBB26;
		border-color: #FFBB26;
		background-color: #FFF8E6;
	}
	
	.body .comment{
		height: 60%;
		display: flex;
		flex-direction: column;
	}
	
	.body .comment .store{
		height: 20%;
		width: 100%;
		display: flex;
		flex-direction: row;
		border-bottom: solid 1px #EFEFEF;
	}
	
	.comment .store .pic{
		display: flex;
		position: relative;
		height: 100%;
		width: 20%;
	}
	
	.store .pic .head-pic{
		width: 70%;
		height: 70%;
		position: absolute;
		transform: translate(-50%,-50%);
		top: 40%;
		left: 50%;
		border-radius: 50%;
		border: solid 1px #F4F4F4;
	}
	
	.comment .store .name{
		display: flex;
		width: 60%;
		height: 100%;
		position: relative;
	}
	
	.store .name .name-text{
		width: 100%;
		text-align: left;
		font-weight: bold;
		font-size: 16px;
		transform: translate(-50%,-50%);
		position: absolute;
		top: 40%;
		left: 50%;
	}
	
	.comment .store .anonymous{
		display: flex;
		width: 20%;
		height: 100%;
		position: relative;
	}
	
	.store .anonymous .anonymous-text{
		font-size: 12px;
		width: 80%;
		height: 20px;
		position: absolute;
		transform: translate(-50%,-50%);
		left: 50%;
		top: 40%;
	}
	
	.body .comment .content{
		height: 65%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.comment .content .point{
		display: flex;
		width: 100%;
		height: 30%;
		position: relative;
		justify-content: center;
	}
	
	.content .point .stars{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.point .stars .star{
		display: flex;
		background-image: url(../../../static/img/star_grey.png);
		background-size: cover;
		background-repeat: no-repeat;
		width: 30px;
		height: 30px;
		margin: 5px;
	}
	
	.point .stars .star-on{
		background-image: url(../../../static/img/star.png);
	}
	
	.comment .content .text{
		display: flex;
		width: 100%;
		height: 70%;
		position: relative;
		justify-content: center;
		align-items: flex-start;
	}
	
	.content .text .text-area{
		width: 100%;
		height: 90%;
		padding: 10px;
		font-size: 16px;
		background-color: #FAFAFA;
		border-color: #D2D2D2;
		outline: none;
	}
	
	.body .comment .like{
		height: 15%;
		width: 100%;
		display: flex;
		flex-direction: row;
		/* background-color: #5A6268; */
	}
	
	.comment .like .food_name{
		width: 60%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.like .food_name .name_text{
		width: 100%;
		font-size: 16px;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.comment .like .like_check{
		width: 40%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}
	
	.like .like_check input{
		display: none;
	}
	
	.like .like_check .CheckBox{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: 40px;
		height: 20px;
		margin: 5px;
		border: solid 1px #DEDEDE;
		border-radius: 15px;
		position: relative;
	}
	
	.like .like_check .ILike{
		border-color: #FFBB26;
		background-color: #FFF8E6;
		color: #FFBB26;
	}
	
	.like_check .CheckBox .like-btn{
		width: 12px;
		height: 12px;
		display: flex;
		margin: 5px;
		background-image: url(../../../static/img/like-2.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
	
	.like_check .CheckBox .like-btn::after{
		content: '赞';
		position: absolute;
		font-size: 12px;
		right: 5px;
		top: -1px;
		
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		text-align: center;
		font-weight: 400;
	}
	
	.like_check .CheckBox .dislike-btn{
		width: 12px;
		height: 12px;
		display: flex;
		margin: 5px;
		background-image: url(../../../static/img/like-2.png);
		background-repeat: no-repeat;
		background-size: cover;
		transform: rotate(180deg);
	}
	
	.like_check .CheckBox .dislike-btn::after{
		content: '踩';
		position: absolute;
		font-size: 12px;
		right: 15px;
		top: -2px;
		transform: rotate(180deg);
		
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		text-align: center;
		font-weight: 400;
	}
	
	.like_check .ILike .like-btn,.like_check .ILike .dislike-btn{
		background-image: url(../../../static/img/Like-2-on.png);
	}
	
	.bottom{
		width: 100%;
		height: 8%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #CCCCCC;
	}
	
	.bottom-active{
		width: 100%;
		height: 8%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFD161;
	}
	
	.bottom .bottom-text{
		display: flex;
		font-size: 18px;
		font-weight: bold;
		letter-spacing: 5px;
		color: #FFFFFF;
	}
	
	.bottom-active .bottom-text{
		color: #333333;
	}
	
	.font{
		font-family: PingFangSC-Semibold,Microsoft Yahei,Arial,Helvetica,sans-serif;
		text-align: center;
		font-weight: 400;
	}
	
</style>
