<template>
	<div class="container">
		<div class="longl-one">count:{{count}}</div>
		<button @click="setCount(count+1)">+1</button>
    <button @click="setCount(count-1)">-1</button>
	</div>
</template>

<script>
	import { store, mutations } from "@/server/store";
	export default {
		computed: {
			count() {
				return store.count;
			}
		},
		methods: {
			setCount: mutations.setCount
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