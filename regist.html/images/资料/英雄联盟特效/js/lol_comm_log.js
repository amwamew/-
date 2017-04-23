var LOL_Comm_Log = {
	oServiceType : {
		1 : 'lol'
	},
	oChannel : { //上报渠道
		1 : 'web', //官网
		2 : 'client',//客户端
		3 : 'app',//掌盟
		4 : 'tgp',//TGP
		5 : 'wx',//微信
		6 : 'client_lcu'//新版客户端
	},
	oWebName : {
		0 : 'default',//默认
		1 : 'video', //视频
		2 : 'news', //资讯
		3 : 'match', //赛事,
	},
	init : function(p1,p2,p3){
		var self = LOL_Comm_Log;
		p1 = +p1;
		p2 = +p2 ? +p2 : 0;
		p3 = +p3 ? +p3 : 0;
		EAS.need('web', function() {
		    EAS.web.init({
		        'userId': self.GetUin(),
		        'openId': '',
		        'channel': self.oChannel[p1],
		        'serviceType': self.oServiceType[1],
		        'webName': self.oServiceType[1] +"_"+ self.oChannel[p1] +"_"+ self.oWebName[p2]
		    },function(){
	    		EAS.web.click({
				    'actionType': 'timeline'
				});
				EAS.web.click({
					'actionType': 'pv',
					'contenProperty': 'page',
					'adName': self.UrlRegEx(location.href),
					'adId': EAS.e_code,
					'contentId': p3,
					'contentType': self.oWebName[p2],
				});
		    })
		})
		pgvSendClick({hottag:'pv.'+ self.oChannel[p1]+'.'+self.oWebName[p2]+'.'+self.UrlRegEx(location.href)+''});
	},
	Click : function(Obj){
		EAS.need('web', function() {
			EAS.web.click({
				'actionType': 'click',
				'contenProperty': Obj.contenProperty,
				'adName': Obj.adName,
				'adId': Obj.adId,
				'contentId': Obj.contentId,
				'contentType': Obj.contentType,
				'clickUrl': Obj.clickUrl,
			});
		})
		pgvSendClick({hottag:''+Obj.adId+''});
	},
	POP : function(Obj){
		EAS.need('web', function() {
			EAS.web.click({
				'actionType': 'pop',
				'adName': Obj.adName,
				'adId': Obj.adId,
				'contentId': Obj.contentId,
				'contentType': Obj.contentType,
				'clickUrl': Obj.clickUrl,
			});
		})
		var adIdList = Obj.adId.split('|');
		if(adIdList.length > 1){
			for(var x in adIdList){
				pgvSendClick({hottag:''+adIdList[x]+''});
			}
		}else{
			pgvSendClick({hottag:''+Obj.adId+''});
		}
	},
	VShow : function(Obj){
		EAS.VShow({
			'VUrl':Obj.VUrl,
	        'Vid': Obj.Vid,
	        'Vvid': Obj.Vvid,
	        'e_code': Obj.e_code,
	        'VType': Obj.VType
		});
	},
	GetUin : function(){
	    var uin = '';
	    need("biz.login",function(LoginManager){
	        LoginManager.checkLogin(function(){
	            uin = LoginManager.getUserUin();//         
	        });
	    }); 
	    if(uin == ''){
	        if(milo.cookie.get('pt2gguin')){
	            uin = milo.cookie.get('pt2gguin').match(/[1-9]*[1-9][0-9]*/)[0];
	        }            
	    }
	    return uin; 
	},
	GetQueryString : function(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substring(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
	},
	UrlRegEx : function(url){
		var re = /(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i;   
        //re.exec(url);
        var arr = url.split('?')[0].match(re);   
        var a = arr[4],b=arr[5] ? arr[5] : 'index.htm';          
        var c = a.replace(/\//g,'_')+b.split('.')[0];
        return c.substring(1);
	}
}/*  |xGv00|eeac653cc5bb737505619d7889498869 */