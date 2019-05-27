<template>
  <div class="about">
    <h1>This is an about page</h1>
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