const state={
	helList:[{
		tit:'1、如何注册唱酱账号？',
		cont:[
			'a、通过手机号码进行免费注册。',
			'b、通过第三方账号（新浪微博、QQ、人人网、豆瓣网等）直接登录。',
		]
	},
	{
		tit:'2、如何在唱酱录制MV？',
		cont:[
			'A 唱酱支持安卓系统和ios系统的mv录制。',
			'B 点击主页面中央红色“小话筒“',
			'C 选择歌曲→下载→演唱→摆好pose→点击红色按钮→开始。',
			'Ps:点击K歌或MV可以在视频录制和音频录制模式间切换.'
		]
	},
	{
		tit:'3、如何领取金币？',
		cont:[
			'•输入好友的邀请码，您将获得1000金币，每人只能领取一次。',
			'•邀请您的好友加入唱酱，对方登陆后输入您的专属邀请码，您也可以获得一次金币奖励，您的邀请码可无限次使用，邀请的好友越多赚得越多！',
		]
	},
	{
		tit:'4、如何推荐到全国榜？',
		cont:[
			'•上传的作品根据收听数、收到的礼物、转发数、评论数，被喜欢数等排榜，排名靠前的推荐到全国榜。'
		]
	},
	{
		tit:'5、“鲜花”怎么送？',
		cont:[
			'•如果你喜欢某首作品，就作品页面左下角点击“送礼”，点击“鲜花”即可送出。',
			'•“鲜花”是免费获得的，每天将会获得5个“鲜花”。',
		]
	},
	{
		tit:'6、关于伴奏？',
		cont:[
			'•如果没有您想要的歌曲， 您可以把歌曲反馈给我们，或您也可以使用本地伴奏。'
		]
	},
	{
		tit:'7、如何删除歌曲？',
		cont:[
			'•进入到个人主页，找到“作品”点击进入“作品列表”，安卓手机长按要删除的歌曲，点击删除；IOS向左滑动想要删除的歌曲，点击删除。'
		]
	},
	{
		tit:'8、如何上传头像和设置信息？',
		cont:[
			'•点击“我的”进入“个人主页”中的“设置”，选择带有ID的字样的第一栏进入“信息设置”中，即可设置头像、昵称、性别、生日、个人简介等信息。'
		]
	},
	{
		tit:'9、唱酱有哪些充值方式？',
		cont:[
			'IOS：支付宝支付、微信支付',
			'安卓：支付宝支付、微信支付',
		]
	},
	{
		tit:'10、如何调节音效？',
		cont:[
			'•在录制的时，在录制界面的右下角有“音效”的选项，点击进入有麦克回放、升降掉、人声、伴奏等选项可以进行调节。'
		]
	},
	{
		tit:'11、违规行为处罚规则？',
		cont:[
			'A 在唱酱的作品和个人简介中带有与音乐无关的广告：首次警告，再次发现将被封号7天。第三次发现永久封号。',
			'B 垃圾广告(兼职、卖东西等等）：首次警告，第二次永久封号。',
			'C 在唱酱中辱骂、攻击、诋毁其他玩家：首次警告，再次发现将被封号7天。第三次发现连同登录设备一起永久封禁。'
		]
	},
	{
		tit:'12、如何联系我们？',
		cont:[
			'• 直接搜索“唱酱小秘书”，私信提出问题'
		]
	}]
}

const getters={
	helList(state){
		return state.helList;
	}
}

const actions={

}
const mutations={

}

export default {
	state,
	getters,
	actions,
	mutations
}


