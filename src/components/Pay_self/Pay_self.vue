<template>
	<div id="Pay_self" class="container">
		<div class="map">
			<div id="Map"></div>
		</div>
		<div class="detail">
			<div class="detail-top">
				<div class="time">
					<div class="text">自取时间</div>
					<div class="info">14:29</div>
				</div>
				<div class="phone">
					<div class="text">预留电话</div>
					<div class="info">{{this.Userinfo.phone}}</div>
				</div>
			</div>
			<div class="detail-bottom">
				<div class="agreement" :class="{'checked':checked}" @click="check()">同意<span>《到店自取服务协议》</span></div>
			</div>
		</div>
	</div>
</template>

<script>
	import BMap from 'BMap'
	import {mapState} from 'vuex'

	export default {
		data() {
			return {
				checked: true,
				coordinate: [116.403981,39.915544]
			}
		},
		methods: {
			MapInit() {
				let name = this.Info.Store_name;
				
				let map = new BMap.Map('Map');
				let point = new BMap.Point(this.coordinate[0],this.coordinate[1]);
				let mark = new BMap.Marker(point);
				let label = new BMap.Label(name,{'offset':new BMap.Size(20,-10)});
				
				mark.setLabel(label);
				map.centerAndZoom(point, 15);
				map.addOverlay(mark);
				
				
			},
			check() {
				this.checked = !this.checked
			}
		},
		computed: {
			...mapState([
				'Userinfo',
				'Info'
			])
		},
		async mounted() {
			if(this.Info.coordinate){
				this.coordinate = this.Info.coordinate.split(',');
			}
			
			this.MapInit()
		}
	}
</script>

<style scoped="scoped">
	#Pay_self {
		width: 95vw;
		height: 250px;
		background-color: #FFFFFF;
		margin-left: auto;
		margin-right: auto;
		padding: 0;
		border-radius: 5px;
		border-top-right-radius: 0px;

		display: flex;
		flex-direction: column;
	}
	
	#Pay_self .map{
		height: 65%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}
	
	#Pay_self .map #Map{
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
	
	#Pay_self .detail{
		height: 35%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-left: 12px;
		padding-right: 12px;
	}
	
	#Pay_self .detail .detail-top{
		display: flex;
		height: 50%;
		width: 100%;
		flex-direction: row;
	}
	
	.detail .detail-top .time,.detail .detail-top .phone{
		height: 100%;
		width: 50%;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		position: relative;
	}
	
	.detail .detail-top .time::after{
		content: '';
		position: absolute;
		width: 1px;
		height: 50%;
		left: 90%;
		top: 50%;
		background-color: #9F9F9F;
		transform: translate(-50%,-50%);
	}
	
	.detail .detail-top .text{
		width: 100%;
		height: 50%;
		display: flex;
		font-size: 13px;
		color: #9F9F9F;
		position: relative;
		align-items: center;
	}
	
	.detail .detail-top .info{
		
		height: 50%;
		display: flex;
		font-size: 13px;
		color: #000000;
		position: relative;
		align-items: center;
	}
	
	.detail .detail-top .info::after{
		content: '';
		background-image: url(../Shop_Store/img/right.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 15px;
		height: 15px;
		transform: translate(-50%,-50%);
		position: absolute;
		top: 50%;
		left: calc(100% + 20px);
	}
	
	#Pay_self .detail .detail-bottom{
		display: flex;
		height: 50%;
		width: 100%;
		justify-content: flex-start;
		align-items: center;
	}
	
	.detail .detail-bottom .agreement{
		font-size: 12px;
		color: #9F9F9F;
		position: relative;
		padding-left: 17px;
	}
	
	.detail .detail-bottom .agreement::before{
		content: '';
		width: 15px;
		height: 15px;
		border: solid 1px #FFD161;
		border-radius: 3px;
		position: absolute;
		transform: translate(-50%,-50%);
		left: 7.5px;
		top: 50%;
	}
	
	.detail .detail-bottom .checked::after{
		content: '';
		width: 10px;
		height: 10px;
		background-image: url(../../../static/img/check.png);
		background-size: cover;
		background-repeat: no-repeat;
		position: absolute;
		left: 7.5px;
		top: 50%;
		transform: translate(-50%,-50%);
		
	}
	
	.detail-bottom .agreement span{
		color: #7283A6;
	}
	
</style>
