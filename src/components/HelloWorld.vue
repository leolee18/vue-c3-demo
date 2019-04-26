<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import storage from '../server/storage';
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
		computed:{
			...mapGetters([
				'mObjDemo'
			])
		},
		mounted(){
			var self = this;
			self.$store.dispatch('loginDemo');
			setTimeout(()=>{
				console.log(self.mObjDemo);
			},2000)
			
			var mToken = storage.get('msdWebToken');
			console.log(mToken);
		},
		methods: {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
