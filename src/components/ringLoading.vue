<template>
  <div class="ring-wrap">
  	<div class="ring-wrap-l">
  		<div class="ring-wrap-ll" :style="{transform: 'rotate('+rlol+'deg)'}"></div>
  	</div>
  	<div class="ring-wrap-r">
  		<div class="ring-wrap-rr" :style="{transform: 'rotate('+rlor+'deg)'}"></div>
  	</div>
  </div>
</template>

<script>
	export default {
		props: {
			rotnum: String
		},
		data () {
			return {
				rlor:0,
				rlol:0
			}
		},
		watch: {
			rotnum(val){
				if(val && val != ''){
					let mrNum = parseInt(val);
					if(mrNum > 360)mrNum = 360;
					if(mrNum < 0)mrNum = 0;
					if(mrNum < 180){
						this.rlor = mrNum;
						this.rlol = 0;
					}else{
						this.rlor = 180;
						this.rlol = mrNum-180;
					}
				}else{
					this.rlol = 0;
					this.rlor = 0;
				}
			}
		},
		mounted(){
			if(this.rotnum && this.rotnum != ''){
				let mrNum = parseInt(this.rotnum);
				if(mrNum > 360)mrNum = 360;
				if(mrNum < 0)mrNum = 0;
				if(mrNum < 180){
					this.rlor = mrNum;
					this.rlol = 0;
				}else{
					this.rlor = 180;
					this.rlol = mrNum-180;
				}
			}else{
				this.rlol = 0;
				this.rlor = 0;
			}
			console.log(this.rotnum)
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.ring-wrap{
		position: relative;
		width:110px;
		height:110px;
		margin: 200px;
		border-radius:50%;
		overflow: hidden;
	}
	.ring-wrap-l{
		position:absolute;
		width:55px;
		height:110px;
		left:0;
		top:0;
		z-index: 2;
		overflow: hidden;
	}
	.ring-wrap-r{
		position:absolute;
		width:55px;
		height:110px;
		right:0;
		top:0;
		z-index: 2;
		overflow:hidden;
	}
	.ring-wrap-ll{
		position: absolute;
		width:55px;
		height:110px;
		left: 55px;
		border-radius:0 55px 55px 0;
		background:red;
		transform-origin:left center;
		transform: rotate(45deg);
	}
	.ring-wrap-rr{
		position: absolute;
		width:55px;
		height:110px;
		left: -55px;
		border-radius:55px 0 0 55px;
		transform-origin:right center;
		background-color: red;
	}
</style>
