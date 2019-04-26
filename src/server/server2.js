const axios = require('axios');
let mServer = {};
mServer.install = function (Vue, options) {
	function serAdd(addres){
		let serUrl = 'http://'+window.location.host+'/';
		let serInter = 'http://51coach.com/wwlyweb/';
		
		let kc = 'interface/';
		let returnStr = serUrl;
		switch (addres){
			case 'all.php'://页面数据集
				returnStr = serInter+kc+addres;
				break;
			case 'local':
				returnStr = serUrl;
				break;	
			default:
				returnStr = serInter;
				break;
		}
		return returnStr;
	}
	function serUrl(url){
		let myUrl = "";
		if(url != null && url != undefined){
			myUrl = url;
		}
		if(myUrl.length > 5){
			let myType = url.substr(0,5);
	    if (myType != "http:" && myType != "wxfil" && myType != "https"){
				myUrl = 'http://v.51coach.com/wwlyweb/' + myUrl;
			}
		}
		return myUrl;
	}
	function loadData(urlStr,mObj,sucFun,errFun){
		let form_data = new FormData();
		for ( let key in mObj) {
		    form_data.append(key, mObj[key]);
		}
		axios.post(serAdd(urlStr), form_data,{headers: {
	        'Content-Type': 'application/x-www-form-urlencoded'
	  	}})
	  	.then(function (response) {
	    	//console.log(response.data);
	    	if(typeof sucFun == 'function')sucFun(response.data);
	  	})
	  	.catch(function (response) {
	    	//console.log(response);
	    	if(typeof errFun == 'function'){
				errFun(response.data);
			}else{
				alert("网络出现故障，请重试");
			}
	  	});
	}
	
	
	Vue.prototype.$serAdd = serAdd;
	Vue.prototype.$serUrl = serUrl;
	Vue.prototype.$loadData = loadData;
}
export default mServer;