<template>
	<div class="container">
		<fun-temp class="longl-one" v-for="(slide, index) in listdata" :key="index" :item="slide"></fun-temp>
	</div>
</template>

<script>
	import funTemp from '@/components/funTemp.vue';
	export default {
		data () {
			return {
				listdata:[]
			}
		},
		components:{
			funTemp
		},
		mounted() {
			const users = ['1','2','3','4','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',
			'1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'];
			this.listdata = Object.freeze(users);
		},
		methods: {
			
		}
		
	}
</script>

<style scoped>
	.container{
		position:relative;
		width:750px;
		margin: 0 auto;
		background-color:#fff;
	}
	.longl-one{
		position: relative;
		width: 80%;
		height: 80px;
		margin: 5px auto;
		background-color: #42B983;
	}

</style>