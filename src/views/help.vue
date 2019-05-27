<template>
	<div @click="helpLC" class="container">
		<div class="hel-one" v-for="(slide, index) in helList" :key="index"  v-bind:data-mind="index">{{slide.tit}}<div class="hel-jt"></div></div>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex';
	export default {
		mounted() {
			document.title = '帮助文档';
		},
		computed:{
			...mapGetters([
				'helList'
			])
		},
		methods: {
			helpLC(e){
				let mTar = e.target;
				if(mTar.className === 'hel-one'){
					this.$router.push({path:'/helpc/'+mTar.dataset.mind});
				}
			}
		}
	}
</script>
<style scoped>
	.container{
		position:relative;
		width:690px;
		margin: 0 auto;
		text-align: left;
	}
	.hel-one{
		position: relative;
		height: 80px;
		font-size:26px;
		line-height:80px; 
		color: #333;
		border-bottom: 1px solid #eee;
	}
	.hel-jt{
		position: absolute;
		width: 50px;
		height: 50px;
		top: 15px;
		right: 0;
		overflow: hidden;
		pointer-events: none;
	}
	.hel-jt::after{
		content:"";
		position: absolute;
		width: 30%;
		height: 30%;
		top: 35%;
		left: 35%;
		transform: rotate(-45deg);
		border-right: 2px solid #999;
		border-bottom: 2px solid #999;
	}
</style>