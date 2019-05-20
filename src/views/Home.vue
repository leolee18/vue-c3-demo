<template>
  <div class="home">
    <img @click="mClick" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<div class="small">
        <canvas ref="myChart2" width="500px" height="500px"></canvas>
    </div>
		<img ref="myImg" src="" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Chart from 'chart.js';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
	mounted() {
		var ctx = this.$refs.myChart2.getContext('2d');
		var myRadarChart = new Chart(ctx, {
		    "type": "radar",
		    "data": {
		        "labels": [
		            "综合", 
		            "KDA", 
		            "生存", 
		            "团战",
		            "发育",
		            "输出"
		        ],
						color: '#fff',
		        "datasets": [{
		            "label": "盖亚",
		            "data": [65, 59, 90, 81, 56, 55],
		            "fill": true,
		            "backgroundColor": "rgba(255, 99, 132, 0.2)",
		            "borderColor": "rgb(255, 99, 132)",
		            "pointBackgroundColor": "rgb(255, 99, 132)",
		            "pointBorderColor": "#fff",
		            "pointHoverBackgroundColor": "#fff",
		            "pointHoverBorderColor": "rgb(255, 99, 132)",
		            "lineTension": 0.1
		        }, {
		            "label": "李白",
		            "data": [28, 48, 40, 19, 96, 27],
		            "fill": true,
		            "backgroundColor": "rgba(54, 162, 235, 0.2)",
		            "borderColor": "rgb(54, 162, 235)",
		            "pointBackgroundColor": "rgb(54, 162, 235)",
		            "pointBorderColor": "#fff",
		            "pointHoverBackgroundColor": "#fff",
		            "pointHoverBorderColor": "rgb(54, 162, 235)",
		            "fill": true
		        }]
		    },
		    options: {
						fontColor:'#fff',
            custom: {
                fontColor: "#fff",
                color: "#fff"
            },
            legend: {
                display: false,
                position: 'left',
            },
            title: {
                display: true,
                text: 'demo',
                fontColor: '#666',
                fontSize: 24
            },
		        scale: {
		            ticks: {
									display: false,
		                suggestedMin: 0,
		                suggestedMax: 100,
		                stepSize: 10
		            },
								gridLines: {
                    color: '#ccc',
										fontColor: "#000",
                },
								angleLines:{
                 display:true,//雷达辐射轴     
								 color: '#ccc',
								},
								pointLabels:{
									fontColor:"#f00",
                 fontSize:20//x轴文字
								},
						},
						tooltips: {
							enabled:false,
                callbacks: {
                    label: function (tooltipItem, data) {
                        var i = tooltipItem.index;
                        var label = data.datasets[0].data[i];
                        return label;
                    }
                }
            }
		    }
		});
  },
	methods: {
		mClick(e){
			let myImg = this.$refs.myImg;
      myImg.src = this.$refs.myChart2.toDataURL('image/png');
		}
	}
	
}
</script>
<style>
.small {
    width: 500px;
    height: 500px;
		background-color: aliceblue;
}
</style>