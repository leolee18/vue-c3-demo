<template>
  <div class="about">
    <h1>This is an about page</h1>
		<div class="abo-ccsl">枯士大夫士大夫士大夫士大夫士大夫士大夫士大夫士大夫士大夫</div>
		<div class="abo-lddq">枯士大</div>
  </div>
</template>

<script>
	//测试新接口封装
	import { get, post } from '@/server/maxios.js'
	export default {
		mounted() {
			post('http://51coach.com/wwlyweb/interface/all.php',{type: 1}).then(data=>{
				console.log(data)
			})
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
</style>