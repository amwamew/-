var myhtmlarr=[
				'<style>',
				'	#common_foot_v2{margin: auto;overflow: hidden;background: #f6f6f6;border-top: 1px solid #e2e2e2;text-align: center;}',
				'	#common_foot_v2 a{  text-decoration:none;}',
				'	#common_foot_v2 .i{',
				'		line-height:25px;padding:26px 0 41px 0px;',
				'		color:#ccc; width: 1000px;margin: 0 auto;',
				'	}',
				'	#common_foot_v2 .f12{font-size: 12px;}',
				'	#common_foot_v2 .i a{margin:0 12px; color: #333}',
				'	#common_foot_v2 .i a:hover{ color: #d11c23}',
				'	#common_foot_v2 span,#common_foot_v2 .fb{margin-left:6px}',
				'	#common_foot_v2 span{',
				'		width: 1000px;display: block; padding: 18px 0 0 0 ;margin-top: 18px;',
				'		background: url(img/span-line.gif?esc) center top repeat-x; color: #666;',
				'	}',
				'	#common_foot_v2 span a{ color: #666}',
				'	#common_foot_v2 .fb{padding:5px 0}',
				'</style>',
				'<div id="common_foot_v2">',
				'	<div class="i f12">',
				'		<div class="fb">',
				'		<a href="http://www.ptbus.com/aboutus.html" target="_blank">关于我们</a>|<a href="http://www.ptbus.com/contactus.html" target="_blank">联系我们</a>',
				'		|<a href="http://www.ptbus.com/recruit.html" target="_blank">诚聘英才</a>|<a href="http://www.ptbus.com/negotiation.html" target="_blank">商务洽谈</a>',
				'		|<a href="http://www.ptbus.com/mobile.html" target="_blank">客户端</a>|<a href="http://www.ptbus.com/sitemap.html" target="_blank">网站地图</a>',
				'		|<a href="http://m.ptbus.com/" target="_blank">手机版</a>|<a href="http://youxi.ptbus.com/" target="_blank">最新游戏</a>|<a href="http://www.ptbus.com/hot/map/" target="_blank">最新更新</a><br>', 
				'		<span>京ICP备13039367号-1 京公网安备 11010502026386&nbsp; 京ICP证140355号 京网文【2014】0459-109号 <a href="http://www.ptbus.com/view/225055/" target="_blank">未成年人家长监护</a> &nbsp;&nbsp;北京手游达趣科技有限公司 版权所有</span>',
				'		</div>',
				'	</div>',
				];
var mytopstr=myhtmlarr.join("");
//console.log(mytopstr)
document.writeln(mytopstr);


var arr_video = ["qq.com","leshi.com","bilibili.com","tudou.com","youku.com","plures.net","dwstatic.com","acg.tv","aipai.com"];
var key_value = [["iframe", "src"], ["embed", "src"], ["param", "value"], ["object", "data"], ["script", "src"]];
for (var kv_i = 0; kv_i < key_value.length; kv_i++) {
    $(key_value[kv_i][0]).each(function(i, n) {
        var flash_src = $(this).attr(key_value[kv_i][1]);
        if (flash_src != null && flash_src != undefined) {
            for (var v_i = 0; v_i < arr_video.length; v_i++) {
                if (flash_src.indexOf(arr_video[v_i]) != -1) {
                    $(this).remove();
                    continue;
                }
            }
        }

    })
}
