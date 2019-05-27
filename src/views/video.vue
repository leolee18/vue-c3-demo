<template>
	<div class="container">
		<mvideo :videoUrl="playerOptions.src" :bgImg="playerOptions.poster"></mvideo>
	</div>
</template>

<script>
	import mvideo from '@/components/mvideo.vue';
	export default {
		data () {
			return {
				playerOptions:{
					poster:'http://51coach.com/xcxcl/images/courseimg/20181203111536685.png',
					src:'http://51coach.com/xcxcl/videos/course/20170327152721620.mp4'
				}
			}
		},
		components:{
			mvideo
		},
		mounted() {
		},
		methods: {
			
		}
		
	}
</script>

<style scoped>
	.container{
		position:relative;
		width:750px;
		background-color:#fff;
	}


</style>