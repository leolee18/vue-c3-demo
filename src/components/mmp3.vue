<template>
	<div class="plaa-all" >
		<audio :src="auUrl" autoplay ref="palaudio"></audio>
		<div class="plas-img">
			<div class="plas-img-v pla-ani evno" :class="{'pla-pause':!plaAni}">
				<img :src="bgImg" class="plas-img-bg"/>
			</div>
			<img :src="playImg" @click="playButn" class="plas-img-play"/>
		</div>
		<div class="plas-time evno">
			<div class="plas-time-text" :style="leftData">{{ranTime}}<div class="plas-time-sjx"></div></div>
		</div>
		<div class="plas-line evno"><div :style="widthData"></div></div>
		<input type="range" :disabled="ranDis" @change="plachange" @input="plainput" @mousedown="mMousedown" @mouseup="mMouseup" @touchstart="mMousedown" @touchend="mMouseup" min=0 :max=ranMax step=1 name="slider" :value="ranVal"/>
	</div>
</template>

<script>
	export default {
		props:{
			'auUrl':{
				type:String,
				default:'',
			},
			'bgImg':{
				type:String,
				default:require('@/assets/log_lo.png'),
			},
			'mp3End':{
				type:Function,
				require:true
			},
		},
		data () {
			return {
				mAudio:null,
				mousedown:false,
				playImg:require('@/assets/pla_play.png'),
				plaAni:false,
				ranDis:true,
				ranMax:100,
				ranVal:0,
				ranTime:'00:00 / 00:00',
				widthData:'width:0%',
				leftData:'left:0%',
			}
		},
		watch: {
			auUrl(val){
				if(val && val != ''){
					this.ranDis = false;
				}
			}
		},
		mounted(){
			var self = this;
			self.mAudio = self.$refs.palaudio;
			self.mAudio.ontimeupdate = self.mAudioTimeUpdate;
			self.mAudio.onprogress = self.mAudioProgress;
			self.mAudio.onplay = self.mAudioPlay;
			self.mAudio.onpause = self.mAudioPause;
			
			if(self.mp3End){
				self.mAudio.onended = self.mp3End;
			}
			if(self.auUrl && self.auUrl != ''){
				self.ranDis = false;
			}
		},
		methods: {
			mMousedown(){
				this.mousedown = true;
			},
			mMouseup(){
				this.mousedown = false;
			},
			plainput(e){
				this.progressRate(e.target.value,this.ranMax);
			},
			plachange(e){
				this.progressRate(e.target.value,this.ranMax);
				
				this.mAudio.currentTime=e.target.value;
			},
			mAudioTimeUpdate(e){
				if(this.mousedown)return;
				
				this.ranMax = Math.floor(e.target.duration);
				this.progressRate(e.target.currentTime,e.target.duration);
				this.audioTimeStr(e.target.currentTime,e.target.duration);
			},
			audioTimeStr(curTim,durat){
				if(isNaN(durat))durat=0;
				if(isNaN(curTim))curTim=0;
				let mCurT = Math.floor(curTim);
				let mDurT = Math.floor(durat);
				let mCT = parseInt(mCurT/60);
				let mDT = parseInt(mDurT/60);
				let sCT = mCurT%60;
				let sDT = mDurT%60;
				if(mCT < 10)mCT = '0'+mCT;
				if(mDT < 10)mDT = '0'+mDT;
				if(sCT < 10)sCT = '0'+sCT;
				if(sDT < 10)sDT = '0'+sDT;
				this.ranTime = mCT+':'+sCT+' / '+mDT+':'+sDT;
			},
			progressRate(curTim,durat){
				let mMax = 100;
				if(durat > 0){
					mMax = durat;
				}
				let mBFB = Math.floor(Math.floor(curTim)/Math.floor(mMax)*100)+1;
				this.widthData = 'width:'+mBFB+'%';
				this.leftData = 'left:'+(mBFB)+'%';
				this.ranVal = curTim;
			},
			mAudioProgress(e){
				this.ranMax = Math.floor(e.target.duration);
			},
			playButn(){
				var self = this;
				if(self.auUrl == '')return;
				if(self.mAudio.paused){
					self.mAudio.play();
				}else{
					self.mAudio.pause();
				}	
			},
			mAudioPlay(){
				this.playImg = require('@/assets/pla_pause.png');
				this.plaAni = true;
			},
			mAudioPause(){
				this.playImg = require('@/assets/pla_play.png');
				this.plaAni = false;
			}
		}
	}
</script>

<style scoped>
	.plaa-all{
		position: relative;
		width: 750px;
		height: 470px;
		background-color: #fff;
	}
	.plas-img{
		position: absolute;
		width: 280px;
		height: 280px;
		top:50px;
		left: 235px;
		border-radius: 50%;
		background-color: #000000;
		overflow:hidden;
	}
	.plas-img-v{
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		overflow:hidden;
	}
	.plas-img-bg{
		position: relative;
		display: block;
		width: auto;
		height: 100%;
		opacity: 0.8;
		margin: 0 auto;
	}
	.plas-img-play{
		position: absolute;
		display: block;
		width: 80px;
		height: 80px;
		top:100px;
		left: 100px;
	}
	
	.plas-line{
		position: absolute;
		width: 650px;
		height: 4px;
		bottom: 50px;
		left: 48px;
		border-radius: 4px;
		background-color: #d7d7d7;
	}
	.plas-line div{
		position: absolute;
		width: 0%;
		height: 100%;
		background-color: #0079FF;
	}
	
	.plas-time{
		position: absolute;
		width: 595px;
		height: 45px;
		bottom: 86px;
		left: 17px;
	}
	.plas-time-text{
		position: absolute;
		width: 120px;
		height: 30px;
		left:0%;
		border-radius: 20px;
		font-size: 14px;
		color: #fff;
		text-align: center;
		line-height: 30px;
		background-color: #3e3a39;
	}
	.plas-time-sjx{
		position: absolute;
		width:0;
		height:0;
		left:55px;
		bottom: -6px;
		border-left:5px solid transparent;
		border-right:5px solid transparent;
		border-top:6px solid #3e3a39;
	}
	
	input[type=range] {
		position: absolute;
		-webkit-appearance: none;
		width: 660px;
		height: 4px;
		bottom: 50px;
		left: 45px;
		border-radius: 4px;
		background-color: rgba(0,0,0,0);
	}
	input[type=range]::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 60px; 
		height: 60px; 
		margin-top: -28px;
		border-radius: 50%;  
		background-color: #fff;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.21); 
		-webkit-transition: border-color 0.15s, background-color 0.15s;  transition: border-color 0.15s, background-color 0.15s; 
		cursor: pointer; 
		background-clip: padding-box;  
		box-sizing: border-box;
	} 
	input[type=range]::-webkit-slider-thumb:active {
		background-color: #eee;
	}
	input[type=range]::-webkit-slider-runnable-track {
	  height: 5px;
	  border-radius: 5px;
		/* background: linear-gradient(#377aec, #377aec) no-repeat;
		background-size: 10% 100%; */
	}
	input[type=range]:focus {
	  outline: none;
	}
	
	.pla-ani{
		animation: 6s rainbow infinite linear;
	}
	.pla-restart{
    animation: mymove1 5s infinite ease;
  }
  .pla-pause{
    animation-play-state: paused;
  }
	@keyframes rainbow {
		0%{transform:rotate(0deg)}
		100%{transform:rotate(360deg)}
	}
</style>