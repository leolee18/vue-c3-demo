import types from '../types.js'
import ser from '../../server/server';
import storage from '../../server/storage';

const state={
	mObjDemo:null
}

const getters={
	mObjDemo(state){
		return state.mObjDemo;
	}
}

const actions={
	loginDemo({commit,state}, param){
		ser.mPost('all.php',{}).then((msg)=>{
			//console.log(JSON.stringify(msg.cont))
			if(msg.status == 'success'){
				commit(types.ALL_PAGE_DATA,msg.cont);
				storage.set("msdWebToken",'测试DEMO');
			}
		})
	}
}
const mutations={
	[types.ALL_PAGE_DATA](state,data){
		state.mObjDemo=data;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}