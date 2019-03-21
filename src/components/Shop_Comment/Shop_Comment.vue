<template>
	<div id="Comment">
		<div class="grade">
			<div class="grade_text">
				<span class="point_text">{{this.Info.Store_point}}</span>
				<span class="text_title">商家评分</span>
			</div>
			<div class="grade_stars">
				<div class="stars_line" style="margin-top: 25px;">
					<span class="stars_line_title">口味</span>
					<Stars :point="4.3" class="stars_pic"></Stars>
					<span class="stars_line_point">4.3</span>
				</div>
				<div class="stars_line">
					<span class="stars_line_title">包装</span>
					<Stars :point="4.4" class="stars_pic"></Stars>
					<span class="stars_line_point">4.4</span>
				</div>
			</div>
			<div class="grade_percent">
				<div class="percent_box">
					<span class="percent_text">93%</span>
					<span class="percent_title">配送满意度</span>
				</div>
			</div>
		</div>
		<div class="comments_list">
			<ul style="margin-bottom: 0">
				<li v-for="item in this.Comments" :key="item.ID" class="comment">
					<div class="owner">
						<!-- 这里如果写路径会被识别出普通的字符串,用require去请求服务器中的图片路径,才能够正常显示出来 -->
						<img class="owner_img" :src="item.src?item.src:require('./img/default_pic.png')" />
						<div class="name_point">
							<span class="owner_name">{{item.name?item.name:'匿名用户'}}</span>
							<span class="text_grey">评分</span><Stars :point="item.point" class="owner_point"/>
						</div>
						<div class="owner_time">
							{{item.time}}
						</div>
					</div>
					<div class="content">
						<div class="owner_text" v-if="item.content">{{item.content}}</div>
						<div class="food" v-if="item.food">
							<img src="./img/foods_like.png" class="foods_like" />
							<span class="foods_text">{{item.food}}</span>
						</div>
						<div class="reply_text" v-if="item.reply">店家回复:{{item.reply}}</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Stars from '../Stars/Stars.vue'
	import {
		mapActions,
		mapState
	} from 'vuex'
	import BScroll from 'better-scroll'

	export default {
		components: {
			Stars,

		},
		methods: {
			...mapActions([
				'getCommentsList'
			]),
			_initScroll() {
				if (!this.comment_scroll) {
					this.comment_scroll = new BScroll('.comments_list', {
						click: true
					})
				} else {
					this.comment_scroll.refresh()
				}
			}
		},
		computed: {
			...mapState([
				'Comments',
				'Info'
			])
		},
		async mounted() {
			this.$store.dispatch('getCommentsList', this.Info.ID)
		},
		watch: {
			Comments(value) {
				this.$nextTick(() => {
					this._initScroll()
				})
			}
		}
	}
</script>

<style scoped="scoped">
	#Comment {
		width: 100%;
		height: 100%;
		background-color: #F4F4F4;
	}

	.grade {
		width: 100%;
		height: 90px;
		background-color: #FFFFFF;
		float: left;
		margin-top: 10px;
	}

	.grade_text {
		height: 100%;
		width: 25%;
		float: left;
		padding-left: 10px;
	}

	.point_text {
		color: #ffb000;
		font-size: 35px;
		font-weight: bold;
		text-align: center;
		line-height: 70px;
		width: 100%;
		height: 60%;
		float: left;
	}

	.text_title {
		color: #787878;
		font-size: 15px;
		text-align: center;
		width: 100%;
		padding-left: 5px;
		height: 40%;
		float: left;
	}

	.grade_stars {
		height: 100%;
		width: 45%;
		float: left;
	}

	.stars_line {
		width: 100%;
		height: 25px;
		float: left;
	}

	.stars_line_title {
		color: #787878;
		font-size: 13px;
		float: left;
		margin-left: 13px;
	}

	.stars_pic {
		width: auto;
		display: inline-block;
		margin-top: 4px;
		float: left;
		margin-left: 13px;
	}

	.stars_line_point {
		color: #FFB000;
		font-size: 14px;
		float: left;
		margin-left: 13px;
	}


	.grade_percent {
		height: 100%;
		width: 30%;
		float: left;
	}

	.percent_box {
		height: 55%;
		width: 80%;
		margin-left: 10%;
		margin-top: 22px;
		border-left: solid 1px #f4f4f4;
	}

	.percent_text {
		font-size: 20px;
		color: #999999;
		width: 100%;
		text-align: center;
		height: 60%;
		float: left;
		padding-left: 10px;
	}

	.percent_title {
		font-size: 15px;
		color: #999999;
		width: 100%;
		text-align: center;
		height: 40%;
		float: left;
		padding-left: 10px;
	}
	
	.comments_list{
		width: 100%;
		height: 85%;
		float: left;
		/* margin-top: 10px; */
		overflow: hidden;
	}
	
	.comment{
		width: 100%;
		height: auto;
		background-color: #ffffff;
		border-bottom: solid 1px #c4c4c4;
	}
	
	.owner{
		width: 100%;
		height: 45px;
		margin-bottom: 5px;
	}
	
	.owner_img{
		width: 35px;
		height: 35px;
		border-radius: 20px;
		margin-left: 10px;
		margin-top: 7.5px;
		float: left;
	}
	
	.name_point{
		width: auto;
		height: 45px;
		margin-left: 5px;
		float: left;
	}
	
	.owner_name{
		font-size: 15px;
		font-weight: 500;
		width: auto;
		height: 20px;
		margin-top: 5px;
		display: block;
	}
	
	.text_grey{
		font-size: 12px;
		float: left;
		display: block;
		color: #B6B6B6;
	}
	
	.owner_point{
		margin-left: 3px;
		margin-top: 2px;
		float: left;
	}
	
	.owner_time{
		width: auto;
		height: 45px;
		display: block;
		float: right;
		font-size: 15px;
		color: #B6B6B6;
		line-height: 45px;
		margin-right: 10px;
	}
	
	.food{
		width: 100%;
		height: 15px;
		margin-bottom: 10px;
	}
	
	.foods_like{
		width: 15px;
		height: 15px;
		float: left;
		margin-left: 50px;
	}
	
	.foods_text{
		font-size: 14px;
		color: #8a8a8a;
		border: solid 1px #e8e8e8;
		width: 50%;
		height: 18px;
		padding-left: 2px;
		float: left;
		line-height: 17px;
		margin-left: 5px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.owner_text{
		width: auto;
		height: auto;
		margin-top: 5px;
		margin-left: 50px;
		margin-right: 20px;
		margin-bottom: 5px;
		display: block;
		font-size: 14px;
	}
	
	.reply_text{
		width: auto;
		height: auto;
		display: block;
		margin-bottom: 10px;
		margin-left: 50px;
		margin-right: 20px;
		padding: 6px;
		background-color: #f8f8f8;
		color: #999999;
		font-size: 14px;
		word-break: break-all;
	}
	
</style>
