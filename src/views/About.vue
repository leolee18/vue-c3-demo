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
	import BinarySearchTree from '@/server/BinarySearchTree.js'
	import BinarySearch from '@/server/BinarySearch.js'
	import SingleLinkedList from '@/server/SingleLinkedList.js'
	import DoubleLinkedList from '@/server/DoubleLinkedList.js'
	export default {
		mounted() {
			post('interface/all.php',{type: 1}).then(data=>{
				console.log(data)
			})
			//
			const tree = new BinarySearchTree();
			tree.insert(11);
			tree.insert(7);
			tree.insert(5);
			tree.insert(3);
			tree.insert(9);
			tree.insert(8);
			tree.insert(10);
			tree.insert(13);
			tree.insert(12);
			tree.insert(14);
			tree.insert(20);
			tree.insert(18);
			tree.insert(25);
			console.log(tree);

			console.log(tree.root);
			//中序遍历BST
			console.log(tree.inOrder());
			//前序遍历BST
			console.log(tree.preOrder());
			//后序遍历BST
			console.log(tree.postOrder());
			//搜索最小值
			console.log(tree.getMin());
			//搜索最大值
			console.log(tree.getMax());
			
			//查找特定值
			console.log(tree.find(2));
			console.log(tree.find(3));
			console.log(tree.find(20));
			
			let arr = [0, 1, 2, 4, 5, 6, 7, 8];
			let arr2 = [88, 77, 66, 55, 44, 33, 22, 11];
			BinarySearch(arr2, 77);
			BinarySearch(arr, 2);
			
			var l = new SingleLinkedList();
			l.insert("a","head");
			l.insert("b","a");
			l.insert("c","b");
			l.remove("b");
			l.show();
			
			var li = new DoubleLinkedList();
			li.insert("1","head");
			li.insert("2","1");
			li.insert("3","2");
			li.insert("4","3");
			li.show();
			
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