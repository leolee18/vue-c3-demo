<template>
	<div class="video-all">
		<video 
			x5-video-player-type="h5" 
			x5-video-player-fullscreen="true" 
			x5-video-orientation="landscape"
			class="mvideo" 
			:poster="bgImg"
			:src="videoUrl"
			ref="palvideo"
		>
		</video>
		<div @click="conButn" class="con-all">
			<img v-if="mVcon !== 2" src="@/assets/pla_qp.png" @click="fullButn" class="full-img-play"/>
			<img v-if="ranDis" src="@/assets/pla_su.png" @click="playButn" class="plas-img-play"/>
			<img v-else-if="!ranDis && mVcon === 0 && !mousedown" :src="playImg" @click="playButn" class="plas-img-play"/>
			<div v-if="mousedown" class="con-all-times"><span class="con-all-times-c">{{ranTimeC}}</span>{{' / '+ranTimeD}}</div>
			<div v-if="mVcon !== 2" class="con-all-c">
				<div class="con-all-ta con-all-tl">{{ranTimeC}}</div>
				<div class="con-all-ta con-all-tr">{{ranTimeD}}</div>
				<div class="plas-line evno"><div :style="widthData"></div></div>
				<input type="range" :disabled="ranDis" @change="plachange" @input="plainput" @mousedown="mMousedown" @mouseup="mMouseup" @touchstart="mMousedown" @touchend="mMouseup" min=0 :max=ranMax step=1 name="slider" :value="ranVal"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			'videoUrl':{
				type:String,
				default:'',
			},
			'bgImg':{
				type:String,
				default:'',
			},
			'videoEnd':{
				type:Function,
				require:true
			},
		},
		data () {
			return {
				mVcon:0,
				mVideo:null,
				mousedown:false,
				playImg:require('@/assets/pla_play.png'),
				plaAni:false,
				ranDis:true,
				ranMax:100,
				ranVal:0,
				ranTimeC:'00:00',
				ranTimeD:'00:00',
				widthData:'width:0%',
			}
		},
		watch: {
			videoUrl(val){
				if(val && val != ''){
					this.ranDis = false;
				}
			}
		},
		mounted(){
			let self = this;
			self.mVideo = self.$refs.palvideo;
			self.mVideo.ontimeupdate = self.mVideoTimeUpdate;
			self.mVideo.onprogress = self.mVideoProgress;
			self.mVideo.onplay = self.mVideoPlay;
			self.mVideo.onpause = self.mVideoPause;
			
			self.mVideo.addEventListener("webkitfullscreenchange", function(e) {
				let isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
　　　　 if(isFull === undefined) isFull = false;
				if (!isFull) {
	　　　　　　console.log("退出全屏");
	　　　 }
			})
			if(self.videoEnd){
				self.mVideo.onended = self.videoEnd;
			}
			if(self.videoUrl && self.videoUrl != ''){
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
				this.audioTimeStr(e.target.value,this.ranMax);
			},
			plachange(e){
				this.progressRate(e.target.value,this.ranMax);
				this.audioTimeStr(e.target.value,this.ranMax);
				
				this.mVideo.currentTime=e.target.value;
			},
			mVideoTimeUpdate(e){
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
				this.ranTimeC = mCT+':'+sCT
				this.ranTimeD = mDT+':'+sDT;
			},
			progressRate(curTim,durat){
				let mMax = 100;
				if(durat > 0){
					mMax = durat;
				}
				let mBFB = Math.floor(Math.floor(curTim)/Math.floor(mMax)*100);
				this.widthData = 'width:'+mBFB+'%';
				this.ranVal = curTim;
			},
			mVideoProgress(e){
				this.ranMax = Math.floor(e.target.duration);
			},
			playButn(){
				let self = this;
				if(self.videoUrl == '')return;
				if(self.mVideo.paused){
					self.mVideo.play();
				}else{
					self.mVideo.pause();
				}	
			},
			mVideoPlay(){
				this.playImg = require('@/assets/pla_pause.png');
			},
			mVideoPause(){
				this.playImg = require('@/assets/pla_play.png');
			},
			fullButn(){
				this.FullScreen();
			},
			FullScreen() {
					let self = this;
					if (self.mVideo.requestFullscreen) {
							self.mVideo.requestFullscreen();
					} else if (self.mVideo.mozRequestFullScreen) {
							self.mVideo.mozRequestFullScreen();
					} else if (self.mVideo.webkitRequestFullScreen) {
							self.mVideo.webkitRequestFullScreen();
					}
			},
			exitFullscreen() {
					let self = this;
					if (self.mVideo.exitFullscreen) {
							self.mVideo.exitFullscreen();
					} else if (self.mVideo.mozCancelFullScreen) {
							self.mVideo.mozCancelFullScreen();
					} else if (self.mVideo.webkitCancelFullScreen) {
							self.mVideo.webkitCancelFullScreen();
					}
			},
			conButn(e){
				if(this.ranDis){
					return;
				}
				if(e.target.className === 'con-all'){
					this.mVcon = (this.mVcon + 1)%3;
				}
			}
		}
	}
</script>

<style scoped>
	.video-all{
		position:relative;
		display: block;
		width: 100%;
		height: 420px;
		z-index: 0;
		background-color: #000;
	}
	.mvideo{
		position:absolute;
		height:100%;
		width:100%;
		top:0;
		left:0;
		display:block;
		background-color:#000;
		z-index:0;
	}
	.mvideo::-webkit-media-controls-start-playback-button {
		opacity: 0;
		pointer-events: none;
		width: 5px;
	}
	
	.con-all{
		position:absolute;
		height:100%;
		width:100%;
		top:0;
		left:0;
		z-index: 1;
		background-color:rgba(0,0,0,0.5);
		/* pointer-events: none; */
	}
	.con-all-c{
		position:absolute;
		height:70px;
		width:90%;
		bottom:10px;
		left:5%;
	}
	.plas-img-play{
		position: absolute;
		display: block;
		width: 80px;
		height: 80px;
		top:150px;
		left: 335px;
	}
	.full-img-play{
		position: absolute;
		display: block;
		width: 62px;
		height: 60px;
		top:10px;
		right: 10px;
	}
	.con-all-times{
		position: absolute;
		width: 100%;
		height: 100px;
		top: 200px;
		font-size: 60px;
		color: #fff;
		line-height: 100px;
		overflow: hidden;
	}
	.con-all-times-c{
		color: #0079FF;
	}
	
	.con-all-ta{
		position: absolute;
		width: 100px;
		height: 30px;
		bottom: 40px;
		font-size: 20px;
		color: #fff;
		line-height: 30px;
		overflow: hidden;
	}
	.con-all-tl{
		left: 0;
		text-align: left;
	}
	.con-all-tr{
		right: 0;
		text-align: right;
	}
	.plas-line{
		position: absolute;
		width: 100%;
		height: 4px;
		bottom: 22px;
		left: 0;
		border-radius: 4px;
		background-color: #d7d7d7;
		overflow: hidden;
	}
	.plas-line div{
		position: absolute;
		width: 0%;
		height: 100%;
		padding-left: 5px;
		background-color: #0079FF;
	}
	input[type=range] {
		position: absolute;
		-webkit-appearance: none;
		width: 100%;
		height: 4px;
		bottom: 20px;
		left: 0;
		border-radius: 4px;
		background-color: rgba(0,0,0,0);
	}
	input[type=range]::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 30px; 
		height: 30px; 
		margin-top: -14px;
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
</style>
