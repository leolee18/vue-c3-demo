<template>
  <div class="about">
    <h1>This is an about page</h1>
		<div class="abo-ccsl">枯士大夫士大夫士大夫士大夫士大夫士大夫士大夫士大夫士大夫</div>
		<div class="abo-lddq">枯士大</div>
		<div class="container">
				<div class="wave"></div>
				<div class="wave-mask"></div>
		</div>
		<div class="abo-dd">200</div>
		<ring-loading rotnum="380"></ring-loading>
  </div>
</template>

<script>
	//测试新接口封装
	import { get, post } from '@/server/maxios.js'
	import ringLoading from '@/components/ringLoading.vue'
	export default {
		mounted() {
			post('http://51coach.com/wwlyweb/interface/all.php',{type: 1}).then(data=>{
				console.log(data)
			})
		},
		components:{
			ringLoading
		},
		methods: {
			
		}
		
	}
</script>


<style scoped>
	.abo-ccsl{
		position:relative;
		width:200px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		background-color: #42B983;
	}
	.abo-lddq{
		position:relative;
		width:200px;
		border: 1px solid red;
    text-align: justify;
    text-align-last:justify
	}
	
	
	.container {
			width: 116px;
			height: 116px;
			border-radius: 50%;
			border: 3px solid #67c23a;
			background: #ffffff;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 5px;
			overflow: hidden;
	}
	.wave {
			position: relative;
			width: 100px;
			height: 100px;
			background-image: linear-gradient(-180deg, #aaff80 13%, #67c23a 91%);
			border-radius: 50%;
	}
	.wave-mask {
			position: absolute;
			width: 200px;
			height: 200px;
			top: 0;
			left: 50%;
			border-radius: 40%;
			background-color: rgba(255, 255, 255, 0.9);
			transform: translate(-50%, -60%) rotate(0);
			animation: toRotate 10s linear -5s infinite;
			z-index: 20;
	}
	@keyframes toRotate {
		50% {
			transform: translate(-50%, -60%) rotate(180deg);
		}
		100% {
			transform: translate(-50%, -60%) rotate(360deg);
		}
	}
	
	.abo-dd{
		position: absolute;
		height: 100px;
		padding: 0 30px;
		left: 0;
		display: inline-block;
		border-radius: 50px;
		font-size: 30px;
		line-height: 100px;
		color: #fff;
		overflow: hidden;
		background-color: #f00;
	}
	.abo-dd:empty{
		display: none;
		background-color: #eee;
	}
	
</style>