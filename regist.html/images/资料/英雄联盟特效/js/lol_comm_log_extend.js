//------------------------------------客户端LCU START-----------------------------------
/*
LCU客户端视频中心轮播视频
pos : 位置ID
id : 视频广告位ID
contentId : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Client_Lcu_Video_Promo'] = function(pos,id,contentId,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Client_Lcu_Video_Promo',
		'adId': 'clientlcu.videopromo.'+pos+'.a'+id,
		'contentId': contentId,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'clientlcu.videopromo.'+pos,
        'VType': 'click'
	});
};
/*
客户端资讯无图
pos : 位置ID
id : 资讯iMediaID
vid : 目标url
*/
LOL_Comm_Log['Client_Lcu_News_nPic'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'wordlink',
		'adName': 'Client_Lcu_News_nPic',
		'adId': 'clientlcu.medianews.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'news',
		'clickUrl': url
	});
};
/*
客户端资讯小图
pos : 位置ID
id : 资讯iMediaID
vid : 目标url
*/
LOL_Comm_Log['Client_Lcu_News_sPic'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Client_Lcu_News_sPic',
		'adId': 'clientlcu.mediapic.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'news',
		'clickUrl': url
	});
};



//------------------------------------客户端LCU END-------------------------------------

//------------------------------------客户端START-----------------------------------
/*
客户端视频中心轮播视频
pos : 位置ID
id : 视频广告位ID
contentId : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Client_Video_Promo'] = function(pos,id,contentId,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Client_Video_Promo',
		'adId': 'client.videopromo.'+pos+'.a'+id,
		'contentId': contentId,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'client.videopromo.'+pos,
        'VType': 'click'
	});
};
/*
客户端视频中心轮播曝光
pos : 位置ID
id : 视频广告位ID
contentId : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Client_Video_Promo_Pop'] = function(pos,id,contentId,url){ //客户端轮播
	var self = LOL_Comm_Log;
	self.POP({
		'actionType': 'pop',
		'adName': 'Client_Video_Promo_Pop',
		'adId': 'client.videopromopop.'+pos+'.a'+id,
		'contentId': contentId,
		'contentType': 'video',
		'clickUrl': url
	});
};
/*
客户端视频中心列表
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Client_Video_MainLink'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Client_Video_MainLink',
		'adId': 'client.video.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'client.video.'+pos,
        'VType': 'click'
	});
};
/*
客户端视频中心排行
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Client_Video_Rank'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'wordlink',
		'adName': 'Client_Video_Rank',
		'adId': 'client.video.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'client.video.'+pos,
        'VType': 'click'
	});
};
/*
客户端资讯无图
pos : 位置ID
id : 资讯iMediaID
vid : 目标url
*/
LOL_Comm_Log['Client_News_nPic'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'wordlink',
		'adName': 'Client_News_nPic',
		'adId': 'client.medianews.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'news',
		'clickUrl': url
	});
};
/*
客户端资讯小图
pos : 位置ID
id : 资讯iMediaID
vid : 目标url
*/
LOL_Comm_Log['Client_News_sPic'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Client_News_sPic',
		'adId': 'client.mediapic.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'news',
		'clickUrl': url
	});
};
/*
客户端资讯大图
pos : 位置ID
id : 资讯iMediaID
vid : 目标url
*/
LOL_Comm_Log['Client_News_bPic'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Client_News_bPic',
		'adId': 'client.mediapic.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'news',
		'clickUrl': url
	});
};
//------------------------------------客户端END-----------------------------------

//------------------------------------官网START-----------------------------------
/*
官网视频中心首页大图轮播视频
pos : 位置ID
id : 视频广告位ID
contentId : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_bPromo'] = function(pos,id,contentId,url){ //官网视频轮播
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Web_Video_bPromo',
		'adId': 'lolweb.videobpromo.'+pos+'.a'+id,
		'contentId': contentId,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videobpromo.'+pos,
        'VType': 'click'
	});
};
/*
官网视频中心首页大图轮播曝光
pos : 位置ID
id : 视频广告位ID
contentId : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_bPromo_Pop'] = function(pos,id,contentId,url){ //客户端轮播
	var self = LOL_Comm_Log;
	self.POP({
		'actionType': 'pop',
		'adName': 'Web_Video_bPromo_Pop',
		'adId': 'lolweb.videobpromopop.'+pos+'.a'+id,
		'contentId': contentId,
		'contentType': 'video',
		'clickUrl': url
	});
};
/*
官网视频中心首页小图视频
pos : 位置ID
id : 视频广告位ID
contentId : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_sPromo'] = function(pos,id,contentId,url){ //官网视频小图
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Web_Video_sPromo',
		'adId': 'lolweb.videospromo.'+pos+'.a'+id,
		'contentId': contentId,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videospromo.'+pos,
        'VType': 'click'
	});
};
/*
官网视频中心首页最新视频
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_New'] = function(pos,id,url){ //官网视频最新
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Web_Video_New',
		'adId': 'lolweb.videonewslist.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videonewslist.'+pos,
        'VType': 'click'
	});
};
/*
官网视频中心首页日排行视频
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_Rank_TPV'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'wordlink',
		'adName': 'Web_Video_Rank_TPV',
		'adId': 'lolweb.videotpvlist.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videotpvlist.'+pos,
        'VType': 'click'
	});
};
/*
官网视频中心首页周排行视频
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_Rank_WPV'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'wordlink',
		'adName': 'Web_Video_Rank_WPV',
		'adId': 'lolweb.videowpvlist.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videowpvlist.'+pos,
        'VType': 'click'
	});
};
/*
官网视频中心首页月排行视频
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_Rank_MPV'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'wordlink',
		'adName': 'Web_Video_Rank_MPV',
		'adId': 'lolweb.videompvlist.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videompvlist.'+pos,
        'VType': 'click'
	});
};
/*
官网视频中心首页解说视频
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_Author'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Web_Video_Author',
		'adId': 'lolweb.videoauthorindex.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videoauthorindex.'+pos,
        'VType': 'click'
	});
};
/*
官网视频中心首页赛事视频
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_Match'] = function(pos,id,url){ //客户端视频排行
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Web_Video_Match',
		'adId': 'lolweb.videomatchindex.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videomatchindex.'+pos,
        'VType': 'click'
	});
};
/*
官网视频中心首页周免英雄视频
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_FreeHero'] = function(pos,id,url){ //客户端视频排行
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Web_Video_FreeHero',
		'adId': 'lolweb.videoheroindex.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videoheroindex.'+pos,
        'VType': 'click'
	});
};
/*
官网视频中心首页趣味集锦视频
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_Combo'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Web_Video_Combo',
		'adId': 'lolweb.videocomboindex.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videocomboindex.'+pos,
        'VType': 'click'
	});
};
/*
官网视频中心首页官方视频
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_Official'] = function(pos,id,url){ //客户端视频排行
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Web_Video_Combo',
		'adId': 'lolweb.videoofficialindex.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videoofficialindex.'+pos,
        'VType': 'click'
	});
};
/*
官网视频中心列表页
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_Search'] = function(pos,id,url){ //客户端视频排行
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Web_Video_Search',
		'adId': 'lolweb.videosearch.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolweb.videosearch.'+pos,
        'VType': 'click'
	});
};
/*
官网首页视频图推
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['Web_Video_Main'] = function(pos,id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'Web_Video_Main',
		'adId': 'main.videototal.'+pos+'.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'main.videototal.'+pos,
        'VType': 'click'
	});
};
/*
视频播放上报
id : 视频iVideoID
vid : 视频VID
pos : 来源e_code
*/
LOL_Comm_Log['Web_Video_Play'] = function(id,vid,pos){
	var self = LOL_Comm_Log;
	self.VShow({
		'VUrl':location.href,
        'Vid': id,
        'Vvid': vid,
        'e_code': pos,
        'VType': 'play'
	});
};

//------------------------------------官网END-----------------------------------

//------------------------------------掌盟START-----------------------------------
/*
掌盟首页视频图推
pos : 位置ID
id : 视频iVideoID
vid : 目标url
*/
LOL_Comm_Log['App_Video_Main'] = function(id,url){
	var self = LOL_Comm_Log;
	self.Click({
		'actionType': 'click',
		'contenProperty': 'image',
		'adName': 'App_Video_Main',
		'adId': 'lolapp.v.videoList.a'+id,
		'contentId': id,
		'contentType': 'video',
		'clickUrl': url
	});
	self.VShow({
		'VUrl':url,
        'Vid': id,
        'Vvid': '',
        'e_code': 'lolapp.v.videoList',
        'VType': 'click'
	});
};/*  |xGv00|8ffc4c806b0a3f47337b2481e7769465 */