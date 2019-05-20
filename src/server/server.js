const axios = require('axios');

function serAdd(addres){
	var serUrl = 'http://'+window.location.host+'/';
	var serInter = 'http://51coach.com/wwlyweb/';
	
	var kc = 'interface/';
	var returnStr = serUrl;
	switch (addres){
		case 'all.php'://页面数据集
		case 'wxLogin.php'://登录
			returnStr = serInter+kc+addres;
			break;
		case 'sample.php'://分享参数
			returnStr = 'http://51coach.com/msdweb/server/'+addres;
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
function loadDataFun(urlStr,mObj,sucFun,errFun){
	var form_data = new FormData();
	for ( var key in mObj) {
	    form_data.append(key, mObj[key]);
	}
	axios.post(serAdd(urlStr), form_data,{headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
  }}).then(function (response) {
    	if(typeof sucFun == 'function')sucFun(response.data);
  }).catch(function (response) {
    	if(typeof errFun == 'function'){
				errFun(response.data);
			}else{
				alert("网络出现故障，请重试");
			}
  });
}
function mPost(urlStr,mObj){
	var form_data = new FormData();
	for ( var key in mObj) {
	  form_data.append(key, mObj[key]);
	}
	return axios.post(
		serAdd(urlStr),
		form_data,
		{headers:{'Content-Type':'application/x-www-form-urlencoded'}},
	).then((response)=>{return response.data});
}

function serUrl(url){
	var myUrl = "";
	if(url != null && url != undefined){
		myUrl = url;
	}
	if(myUrl.length > 5){
		var myType = url.substr(0,5);
    if (myType != "http:" && myType != "wxfil" && myType != "https"){
			myUrl = 'http://v.51coach.com/wwlyweb/' + myUrl;
		}
	}
	return myUrl;
}


module.exports = {
	serAdd:serAdd,
	mPost:mPost,
	loadDataFun:loadDataFun,
	serUrl:serUrl
}