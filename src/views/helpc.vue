<template>
	<div class="container">
		<div class="helc-tit">{{helpObj && helpObj.tit}}</div>
		<div class="helc-cont">
			<p v-for="(slide, index) in helpObj && helpObj.cont" :key="index">{{slide}}</p>
		</div>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex';
	export default {
		data () {
			return {
				helpObj:null
			}
		},
		computed:{
			...mapGetters([
				'helList'
			])
		},
		mounted() {
			let self = this;
			let mId = self.$route.params.id;
			
			document.title = '帮助文档2';
			if(mId && mId != ''){
				self.helpObj = self.helList[mId];
			}else{
				self.helpObj = self.helList[0];
			}
		}
		
	}
</script>
<style scoped>
	.container{
		position:relative;
		width:750px;
		margin: 0 auto;
		text-align: left;
	}
	.helc-tit{
		position: relative;
		height: 40px;
		padding-left:10px ;
		left: 0;
		font-size:30px;
		line-height:40px; 
		color: #333;
		border-left: 8px solid #ff5a3c;
	}
	.helc-cont{
		position:relative;
		width:690px;
		margin: 30px auto;
	}
	.helc-cont p{
		font-size:22px;
		line-height:28px; 
		color: #999;
	}
</style>