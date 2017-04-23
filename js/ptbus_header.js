var i_user_status,iUserTimer;
window.onload = function(){
    if(!window.jQuery){
        var scriptJq = document.createElement("script");
        scriptJq.type = 'text/javascript';
        scriptJq.src = 'http://static.ptbus.com/ucenter/js/jquery-1.7.2.min.js';
        document.head.appendChild(scriptJq);
        iUserTimer = setInterval(function(){
            console.log(1);
            if(window.jQuery){
                runComHeader();
                clearInterval(iUserTimer);
            }
        }, 100)
    }else{
        console.log(2);
        runComHeader();
    }
}
function runComHeader(){
    //document.domain = "ptbus.com";
    //获取设置
    var thisjslist = document.getElementsByTagName('script');
    var thisjs;
    for(var i = 0; i < thisjslist.length; i++){
        if(thisjslist[i].src.indexOf('ptbus_header.js') >= 0){
            thisjs = thisjslist[i].src;
        }
    }
    var setStyle = "black";
    var wrapwidth = 1000;
    if(thisjs.indexOf("?")>=0){
        var t_arr = thisjs.substr(thisjs.indexOf("?")+1).split("&");
        for(var a = 0; a < t_arr.length; a++){
            if(t_arr[a].split("=")[0] == "style"){
                setStyle = t_arr[a].split("=")[1];
            }
            if(t_arr[a].split("=")[0] == "width"){
                wrapwidth = parseInt(t_arr[a].split("=")[1]);
            }
        }
    }
    //加载样式表
    setStyle == "white" ? $("head").append("<link rel=\"stylesheet\" href=\"http://static.ptbus.com/newhome/head/ptbusHeaderVmay_white.css\">") : $("head").append("<link rel=\"stylesheet\" href=\"http://static.ptbus.com/newhome/head/ptbusHeaderVmay.css\">");
    //加载html
    // $.ajax({
    //     url: 'http://10.243.6.112:1997/',
    //     type: 'GET',
    //     async : false,
    //     success : function(data){
    //         $("body").prepend(data);
    //     }
    // });

    /*!
     * jQuery Cookie Plugin v1.4.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    (function (factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['jquery'], factory);
        } else if (typeof exports === 'object') {
            // CommonJS
            factory(require('jquery'));
        } else {
            // Browser globals
            factory(jQuery);
        }
    }(function ($) {
        var pluses = /\+/g;
        function encode(s) {
            return config.raw ? s : encodeURIComponent(s);
        }
        function decode(s) {
            return config.raw ? s : decodeURIComponent(s);
        }
        function stringifyCookieValue(value) {
            return encode(config.json ? JSON.stringify(value) : String(value));
        }
        function parseCookieValue(s) {
            if (s.indexOf('"') === 0) {
                // This is a quoted cookie as according to RFC2068, unescape...
                s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
            }
            try {
                // Replace server-side written pluses with spaces.
                // If we can't decode the cookie, ignore it, it's unusable.
                // If we can't parse the cookie, ignore it, it's unusable.
                s = decodeURIComponent(s.replace(pluses, ' '));
                return config.json ? JSON.parse(s) : s;
            } catch(e) {}
        }
        function read(s, converter) {
            var value = config.raw ? s : parseCookieValue(s);
            return $.isFunction(converter) ? converter(value) : value;
        }
        var config = $.cookie = function (key, value, options) {
            // Write
            if (value !== undefined && !$.isFunction(value)) {
                options = $.extend({}, config.defaults, options);
                if (typeof options.expires === 'number') {
                    var days = options.expires, t = options.expires = new Date();
                    t.setTime(+t + days * 864e+5);
                }
                return (document.cookie = [
                    encode(key), '=', stringifyCookieValue(value),
                    options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                    options.path    ? '; path=' + options.path : '',
                    options.domain  ? '; domain=' + options.domain : '',
                    options.secure  ? '; secure' : ''
                ].join(''));
            }
            // Read
            var result = key ? undefined : {};
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling $.cookie().
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            for (var i = 0, l = cookies.length; i < l; i++) {
                var parts = cookies[i].split('=');
                var name = decode(parts.shift());
                var cookie = parts.join('=');
                if (key && key === name) {
                    // If second argument (value) is a function it's a converter...
                    result = read(cookie, value);
                    break;
                }
                // Prevent storing a cookie that we couldn't decode.
                if (!key && (cookie = read(cookie)) !== undefined) {
                    result[name] = cookie;
                }
            }
            return result;
        };
        config.defaults = {};
        $.removeCookie = function (key, options) {
            if ($.cookie(key) === undefined) {
                return false;
            }
            // Must not alter options, thus extending a fresh object...
            $.cookie(key, '', $.extend({}, options, { expires: -1 }));
            return !$.cookie(key);
        };
    }));
    //登录功能区域
    i_user_status = (function(){
        var loginStatus = false;
        //加载页面模板
        function htmlTemplate(vwidth){
            var tempPtHeader = [];
            tempPtHeader[tempPtHeader.length] = '<!-- 口袋头部导航 -->';
            tempPtHeader[tempPtHeader.length] = '<div class="ptbus_header_vmay">';
            if(vwidth == 1000){
                tempPtHeader[tempPtHeader.length] = '    <div class="header_vmay_box">';
            }else{
                tempPtHeader[tempPtHeader.length] = '    <div class="header_vmay_box" style="width: '+ vwidth +'px">';
            }
            tempPtHeader[tempPtHeader.length] = '        <!-- 导航左侧 -->';
            tempPtHeader[tempPtHeader.length] = '        <ul class="vmayleft">';
            tempPtHeader[tempPtHeader.length] = '            <li class="header_home"><a href="http://www.ptbus.com/" target="_blank" >口袋首页</a></li>';
            tempPtHeader[tempPtHeader.length] = '            <li class="header_menulist">全站精选</li>';
            tempPtHeader[tempPtHeader.length] = '            <li class="header_clientdown"><a href="http://jn.ptbus.com/" title="下载客户端" target="_blank" class="n n2">下载客户端</a></li>';
            tempPtHeader[tempPtHeader.length] = '            <li class="header_wchatfocus">关注微信</li>';
            tempPtHeader[tempPtHeader.length] = '            <li class="header_phoneweb">手机版</li>';
            tempPtHeader[tempPtHeader.length] = '        </ul>';
            tempPtHeader[tempPtHeader.length] = '        <!-- 导航右侧 -->';
            tempPtHeader[tempPtHeader.length] = '        <div class="vmayright">';
            tempPtHeader[tempPtHeader.length] = '            <div id="header_nologin" class="header_nologin">';
            tempPtHeader[tempPtHeader.length] = '                <span class="btn_login">登录</span>';
            tempPtHeader[tempPtHeader.length] = '                <a href="http://i.ptbus.com/register" title="注册" target="_blank" class="btn_reg">注册</a>';
            tempPtHeader[tempPtHeader.length] = '            </div>';
            tempPtHeader[tempPtHeader.length] = '            <div class="logoutbox" id="header_login">';
            tempPtHeader[tempPtHeader.length] = '                您好,<a id="header_username" href="http://i.ptbus.com/person_info">12123123123123</a><span id="header_logout">退出</span>';
            tempPtHeader[tempPtHeader.length] = '            </div>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '        <!-- 全站精选浮层 -->';
            tempPtHeader[tempPtHeader.length] = '        <div class="site_menu_list">';
            tempPtHeader[tempPtHeader.length] = '            <span class="site_menu_arrow"></span>';
            tempPtHeader[tempPtHeader.length] = '            <div class="menu_conts">';
            tempPtHeader[tempPtHeader.length] = '                <div class="menu_a">';
            tempPtHeader[tempPtHeader.length] = '                    <h2>近期热点</h2>';
            tempPtHeader[tempPtHeader.length] = '                    <p><a href="http://xin.ptbus.com/news/" target="_blank" title="">新游资讯</a></p>';
            tempPtHeader[tempPtHeader.length] = '                    <p><a href="http://chanye.ptbus.com/cyzx/" target="_blank" title="">产业动态</a></p>';
            tempPtHeader[tempPtHeader.length] = '                    <p><a href="http://www.ptbus.com/catalog/948/" target="_blank" title="">硬件资讯</a></p>';
            tempPtHeader[tempPtHeader.length] = '                    <p><a href="http://www.ptbus.com/catalog/937/" target="_blank" title="">游戏资讯</a></p>';
            tempPtHeader[tempPtHeader.length] = '                    <p><a href="http://gonglue.ptbus.com/" target="_blank" title="">攻略站</a></p>';
            tempPtHeader[tempPtHeader.length] = '                </div>';
            tempPtHeader[tempPtHeader.length] = '                <div class="menu_b">';
            tempPtHeader[tempPtHeader.length] = '                    <h2>游戏福利</h2>';
            tempPtHeader[tempPtHeader.length] = '                    <p><a href="http://ka.ptbus.com/" target="_blank" title="">游戏礼包</a></p>';
            tempPtHeader[tempPtHeader.length] = '                    <p><a href="http://bbs.ptbus.com/forum-283-1.html" target="_blank" title="">积分商城</a></p>';
            tempPtHeader[tempPtHeader.length] = '                    <p><a href="http://kdhd.ptbus.com/" target="_blank" title="">热门活动</a></p>';
            tempPtHeader[tempPtHeader.length] = '                    <p><a href="http://bbs.ptbus.com/forum-285-1.html" target="_blank" title="">综合讨论</a></p>';
            tempPtHeader[tempPtHeader.length] = '                    <p><a href="http://bbs.ptbus.com/forum-3165-1.html" target="_blank" title="">锦囊福利</a></p>';
            tempPtHeader[tempPtHeader.length] = '                </div>';
            tempPtHeader[tempPtHeader.length] = '                <div class="menu_c">';
            tempPtHeader[tempPtHeader.length] = '                    <h2>热门专区</h2>';
            tempPtHeader[tempPtHeader.length] = '                    <div class="menu_cL">';
            tempPtHeader[tempPtHeader.length] = '                        <p><a href="http://cr.ptbus.com/" target="_blank" title="">皇室战争</a></p>';
            tempPtHeader[tempPtHeader.length] = '                        <p><a href="http://www.ptbus.com/qnyhsy/" target="_blank" title="">倩女幽魂</a></p>';
            tempPtHeader[tempPtHeader.length] = '                        <p><a href="http://www.ptbus.com/yttlj/" target="_blank" title="">倚天屠龙记</a></p>';
            tempPtHeader[tempPtHeader.length] = '                        <p><a href="http://www.ptbus.com/zhuxsy/" target="_blank" title="">诛仙手游</a></p>';
            tempPtHeader[tempPtHeader.length] = '                        <p><a href="http://www.ptbus.com/boombeach/" target="_blank" title="">海岛奇兵</a></p>';
            tempPtHeader[tempPtHeader.length] = '                    </div>';
            tempPtHeader[tempPtHeader.length] = '                    <div class="menu_cR">';
            tempPtHeader[tempPtHeader.length] = '                        <p><a href="http://www.ptbus.com/gtsn/" target="_blank" title="">钢铁少女</a></p>';
            tempPtHeader[tempPtHeader.length] = '                        <p><a href="http://www.ptbus.com/wdsj/" target="_blank" title="">我的世界</a></p>';
            tempPtHeader[tempPtHeader.length] = '                        <p><a href="http://www.ptbus.com/jxqysy/" target="_blank" title="">剑侠情缘</a></p>';
            tempPtHeader[tempPtHeader.length] = '                        <p><a href="http://www.ptbus.com/ztsjb/" target="_blank" title="">征途手游</a></p>';
            tempPtHeader[tempPtHeader.length] = '                        <p><a href="http://www.ptbus.com/rxcq/" target="_blank" title="">热血传奇</a></p>';
            tempPtHeader[tempPtHeader.length] = '                    </div>';
            tempPtHeader[tempPtHeader.length] = '                </div>';
            tempPtHeader[tempPtHeader.length] = '                <div class="menu_d">';
            tempPtHeader[tempPtHeader.length] = '                    <h2><a href="#" target="_blank" title="">火爆专栏</a></h2>';
            tempPtHeader[tempPtHeader.length] = '                    <div class="menu_img">';
            tempPtHeader[tempPtHeader.length] = '                        <a href="http://www.ptbus.com/syjzy/index/" target="_blank" title=""><img src="http://www.ptbus.com/uploads/allimg/1605/12/3991-1605121614430-L.jpg" alt="" /></a>';
            tempPtHeader[tempPtHeader.length] = '                    </div>';
            tempPtHeader[tempPtHeader.length] = '                    <div class="menu_img">';
            tempPtHeader[tempPtHeader.length] = '                        <a href="http://xin.ptbus.com/topics/prospect/" target="_blank" title=""><img src="http://www.ptbus.com/uploads/allimg/1605/12/3991-1605121642220-L.jpg" alt="" /></a>';
            tempPtHeader[tempPtHeader.length] = '                    </div>';
            tempPtHeader[tempPtHeader.length] = '                </div>';
            tempPtHeader[tempPtHeader.length] = '                <div class="menu_e">';
            tempPtHeader[tempPtHeader.length] = '                    <h2><a href="#" target="_blank" title="">游戏库</a></h2>';
            tempPtHeader[tempPtHeader.length] = '                    <div class="menu_table">';
            tempPtHeader[tempPtHeader.length] = '                        <table>';
            tempPtHeader[tempPtHeader.length] = '                            <tr>';
            tempPtHeader[tempPtHeader.length] = '                                <td width="73"><a href="http://www.ptbus.com/kdsj/zytx/" target="_blank" title=""><span class="mt1"></span>腾讯</a></td>';
            tempPtHeader[tempPtHeader.length] = '                                <td width="73"><a href="http://www.ptbus.com/diannaoban/" target="_blank" title=""><span class="mt2"></span>电脑版</a></td>';
            tempPtHeader[tempPtHeader.length] = '                                <td rowspan="2" width="73"><a href="http://hh.ptbus.com/" target="_blank" title=""><span class="mt5"></span>口袋汉化</a></td>';
            tempPtHeader[tempPtHeader.length] = '                            </tr>';
            tempPtHeader[tempPtHeader.length] = '                            <tr>';
            tempPtHeader[tempPtHeader.length] = '                                <td width="73"><a href="http://youxi.ptbus.com/iphone_0_0_0_0_0_0_0/" target="_blank" title=""><span class="mt3"></span>苹果</a></td>';
            tempPtHeader[tempPtHeader.length] = '                                <td width="73"><a href="http://youxi.ptbus.com/android_0_0_0_0_0_0_0/" target="_blank" title=""><span class="mt4"></span>安卓</a></td>';
            tempPtHeader[tempPtHeader.length] = '                            </tr>';
            tempPtHeader[tempPtHeader.length] = '                        </table>';
            tempPtHeader[tempPtHeader.length] = '                    </div>';
            tempPtHeader[tempPtHeader.length] = '                </div>';
            tempPtHeader[tempPtHeader.length] = '            </div>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '        <!-- 关注微信浮层 -->';
            tempPtHeader[tempPtHeader.length] = '        <div class="phone_code phone_code1">';
            tempPtHeader[tempPtHeader.length] = '            <span class="phone_code_arrow"></span>';
            tempPtHeader[tempPtHeader.length] = '            <img src="http://www.ptbus.com/uploads/allimg/1605/12/3991-1605121536160-L.jpg" alt="" />';
            tempPtHeader[tempPtHeader.length] = '            <p>扫码关注微信</p>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '        <!-- 手机版浮层 -->';
            tempPtHeader[tempPtHeader.length] = '        <div class="phone_code phone_code2">';
            tempPtHeader[tempPtHeader.length] = '            <span class="phone_code_arrow"></span>';
            tempPtHeader[tempPtHeader.length] = '            <img src="http://www.ptbus.com/uploads/allimg/1605/12/3991-160512155621526.jpg" alt="" />';
            tempPtHeader[tempPtHeader.length] = '            <p>扫码浏览手机版</p>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '    </div>';
            tempPtHeader[tempPtHeader.length] = '</div>';
            tempPtHeader[tempPtHeader.length] = '<!-- 口袋头部导航 结束 -->';
            tempPtHeader[tempPtHeader.length] = '<!-- 登录弹窗及绑定 -->';
            tempPtHeader[tempPtHeader.length] = '<div class="i_body_container">';
            tempPtHeader[tempPtHeader.length] = '    <div class="borBox cen z-box unbind-sg-box" style="display:none;">';
            tempPtHeader[tempPtHeader.length] = '        <div class="fail">';
            tempPtHeader[tempPtHeader.length] = '            <p>确认解除与StarGame的绑定吗？</p>';
            tempPtHeader[tempPtHeader.length] = '            <div class="zbox-but">';
            tempPtHeader[tempPtHeader.length] = '                <button class="true" id="unbind_sg">确定</button>';
            tempPtHeader[tempPtHeader.length] = '                <button class="true canl">取消</button>';
            tempPtHeader[tempPtHeader.length] = '            </div>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '    </div>';
            tempPtHeader[tempPtHeader.length] = '    <div class="borBox cen z-box upgrade-success-tip-box" style="display:none;">';
            tempPtHeader[tempPtHeader.length] = '        <div class="fail">';
            tempPtHeader[tempPtHeader.length] = '            <p style="padding-left: 110px;">升级成功！</p>';
            tempPtHeader[tempPtHeader.length] = '            <div class="zbox-but">';
            tempPtHeader[tempPtHeader.length] = '                <button class="true" id="upgrade_success_tip" style="margin-left:120px">确定</button>';
            tempPtHeader[tempPtHeader.length] = '            </div>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '    </div>';
            tempPtHeader[tempPtHeader.length] = '    <div class="borBox cen z-box upgrade-fail-tip-box" style="display:none;">';
            tempPtHeader[tempPtHeader.length] = '        <div class="fail">';
            tempPtHeader[tempPtHeader.length] = '            <p style="padding-left: 110px;">升级失败！</p>';
            tempPtHeader[tempPtHeader.length] = '            <div class="zbox-but">';
            tempPtHeader[tempPtHeader.length] = '                <button class="true" id="upgrade_fail_tip" style="margin-left:120px">确定</button>';
            tempPtHeader[tempPtHeader.length] = '            </div>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '    </div>';
            tempPtHeader[tempPtHeader.length] = '    <div class="borBox cen z-box unbind-success-tip-box" style="display:none;">';
            tempPtHeader[tempPtHeader.length] = '        <div class="fail">';
            tempPtHeader[tempPtHeader.length] = '            <p class="unbind-success-tip-p" style="padding-left: 100px;">解除绑定成功！</p>';
            tempPtHeader[tempPtHeader.length] = '            <div class="zbox-but">';
            tempPtHeader[tempPtHeader.length] = '                <button class="true" id="unbind_success_tip" style="margin-left:120px">确定</button>';
            tempPtHeader[tempPtHeader.length] = '            </div>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '    </div>';
            tempPtHeader[tempPtHeader.length] = '    <div class="borBox cen z-box unbind-qq-box" style="display:none;">';
            tempPtHeader[tempPtHeader.length] = '        <div class="fail">';
            tempPtHeader[tempPtHeader.length] = '            <p>确认解除与QQ的绑定吗？</p>';
            tempPtHeader[tempPtHeader.length] = '            <div class="zbox-but">';
            tempPtHeader[tempPtHeader.length] = '                <button class="true" id="unbind_qq">确定</button>';
            tempPtHeader[tempPtHeader.length] = '                <button class="true canl">取消</button>';
            tempPtHeader[tempPtHeader.length] = '            </div>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '    </div>';
            tempPtHeader[tempPtHeader.length] = '    <div class="borBox cen z-box unbind-sina-box" style="display:none;">';
            tempPtHeader[tempPtHeader.length] = '        <div class="fail">';
            tempPtHeader[tempPtHeader.length] = '            <p>确认解除与新浪微博的绑定吗？</p>';
            tempPtHeader[tempPtHeader.length] = '            <div class="zbox-but">';
            tempPtHeader[tempPtHeader.length] = '                <button class="true" id="unbind_sina">确定</button>';
            tempPtHeader[tempPtHeader.length] = '                <button class="true canl">取消</button>';
            tempPtHeader[tempPtHeader.length] = '            </div>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '    </div>';
            tempPtHeader[tempPtHeader.length] = '    <div class="i_login_mask"></div>';
            tempPtHeader[tempPtHeader.length] = '    <div class="login i_login_dialog" style="display:none;">';
            tempPtHeader[tempPtHeader.length] = '        <div class="loginTit">';
            tempPtHeader[tempPtHeader.length] = '            <p>账户登录</p>';
            tempPtHeader[tempPtHeader.length] = '            <a href="javascript:void(0);" id="i_pop_close"></a>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '        <div class="logincon">';
            tempPtHeader[tempPtHeader.length] = '            <div style="display:none;" id="err_logTip" class="logTip logTip2">';
            tempPtHeader[tempPtHeader.length] = '                <p id="err_info">您输入的用户名或密码有误，</p>';
            tempPtHeader[tempPtHeader.length] = '                <a href="http://i.ptbus.com/findpassword" title="忘记密码？" target="_blank">忘记密码？</a>';
            tempPtHeader[tempPtHeader.length] = '            </div>';
            tempPtHeader[tempPtHeader.length] = '            <form action="/login" method="post">';
            tempPtHeader[tempPtHeader.length] = '                <div class="i_headercommon_user">';
            tempPtHeader[tempPtHeader.length] = '                    <a class="star-gam" href="http://i.ptbus.com/third_conn/stargame_authorize">StarGame登录</a>';
            tempPtHeader[tempPtHeader.length] = '                    <b class="z-span">口袋账户登录</b>';
            tempPtHeader[tempPtHeader.length] = '                    <b class="z-rb" style="display:none">您输入的用户名或密码有误</b>';
            tempPtHeader[tempPtHeader.length] = '                </div>';
            tempPtHeader[tempPtHeader.length] = '                <div class="i_headercommon_user">';
            tempPtHeader[tempPtHeader.length] = '                    <span></span>';
            tempPtHeader[tempPtHeader.length] = '                    <input type="text" name="username" value="昵称/手机号/邮箱" id="useName" attr-title="昵称/手机号/邮箱" />';
            tempPtHeader[tempPtHeader.length] = '                    <div class="input_fork_close"></div>';
            tempPtHeader[tempPtHeader.length] = '                </div>';
            tempPtHeader[tempPtHeader.length] = '                <div class="i_headercommon_user">';
            tempPtHeader[tempPtHeader.length] = '                    <span class="lock"></span>';
            tempPtHeader[tempPtHeader.length] = '                    <input type="password" name="password" id="passWord" class="col3" attr-title="密码" />';
            tempPtHeader[tempPtHeader.length] = '                    <div class="input_fork_close"></div>';
            tempPtHeader[tempPtHeader.length] = '                </div>';
            tempPtHeader[tempPtHeader.length] = '                <div class="i_headercommon_user">';
            tempPtHeader[tempPtHeader.length] = '                    <div class="common_user_find">';
            tempPtHeader[tempPtHeader.length] = '                        <a href="http://i.ptbus.com/findpassword" title="忘记密码？" target="_blank">忘记密码？</a> | <a href="http://i.ptbus.com/register" title="注册新用户" target="_blank">注册新用户</a>';
            tempPtHeader[tempPtHeader.length] = '                    </div>';
            tempPtHeader[tempPtHeader.length] = '                    <div class="common_user_check">';
            tempPtHeader[tempPtHeader.length] = '                        <input name="auto" type="checkbox" checked="checked" />';
            tempPtHeader[tempPtHeader.length] = '                        <p>下次自动登录</p>';
            tempPtHeader[tempPtHeader.length] = '                    </div>';
            tempPtHeader[tempPtHeader.length] = '                </div>';
            tempPtHeader[tempPtHeader.length] = '                <div class="i_headercommon_user">';
            tempPtHeader[tempPtHeader.length] = '                    <span class="user_login_sign" id="sublogin" title="登录">登录</span>';
            tempPtHeader[tempPtHeader.length] = '                </div>';
            tempPtHeader[tempPtHeader.length] = '            </form>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '        <div class="linkWeb">';
            tempPtHeader[tempPtHeader.length] = '            <p>合作网站账户登录:</p>';
            tempPtHeader[tempPtHeader.length] = '            <a href="javascript:void(0)" id="qqlogin"></a>';
            tempPtHeader[tempPtHeader.length] = '            <a href="https://api.weibo.com/oauth2/authorize?client_id=1510287138&redirect_uri=http%3A%2F%2Fi.ptbus.com%2Fthird_conn%2Fweibo_callback&response_type=code" class="sina"></a>';
            tempPtHeader[tempPtHeader.length] = '        </div>';
            tempPtHeader[tempPtHeader.length] = '    </div>';
            tempPtHeader[tempPtHeader.length] = '</div>';
            tempPtHeader[tempPtHeader.length] = '<!-- 登录弹窗及绑定 结束 -->';
            $("body").prepend(tempPtHeader.join(""));
            //事件执行
            userstatusbar();
            attachEvent();
        }
        function serializeNav(opt){
            var tempwidth = parseInt(opt.width) ? parseInt(opt.width) : 1000;
            htmlTemplate(tempwidth);
        }
        // is mobile
        function isMobile(){
            if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) || /BlackBerry/i.test(navigator.userAgent) || /IEMobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
                return true;
            } else {
                return false;
            }
        }
        //登录浮层
        function poplogin() {
            if (isMobile()) {
                location.href = 'http://i.ptbus.com/login';
                return false;
            }
            $('.i_login_mask').css({
                display: 'block',
                height: '100%',
                position: 'fixed'
            }); //lw change
            $('.login').css({
                display: 'block',
                top: '-30px'
            });
        }
        //用户是否登录
        function isUserLogin(){
            return loginStatus;
        }
        //登录浮层关闭
        // function closelogin(thisBtn) {
        //     $('.i_login_mask').css('display', 'none');
        //     $('.login').css('display', 'none');
        // }
        //登录错误提示浮层
        // function closeTip(thisBtn) {
        //     $('#err_logTip').css('display', 'none');
        // }
        //导航用户状态
        function userstatusbar(){
            var getuser_url = 'http://i.ptbus.com/uc_api/get_user?key=' + $.cookie('uck') + '&uid=' + $.cookie('ptbus_uid') + '&callback=?';
            $.getJSON(getuser_url, function(data) {
                if (data.status == 'ok') {
                    loginStatus = true;
                    $('#header_login').show();
                    $('#header_nologin').hide();
                    $('#header_username').html(data.val.username);
                    if ($.cookie('synlogin')) {
                        var synlogin = $.cookie('synlogin');
                        $.removeCookie('synlogin');
                        $('head').append(synlogin);
                    }
                } else if (data.status == 'fail') {
                    $('#header_login').hide();
                    $('#header_nologin').show();
                    if ($.cookie('synlogout')) {
                        var synlogout = $.cookie('synlogout');
                        $.removeCookie('synlogout');
                        $('head').append(synlogout);
                    }
                }
            });
        }
        //默认绑定事件
        function attachEvent(){
            //qq登录
            $("#qqlogin").on("click",function(){
                document.cookie = "i_qq_redirect=" + window.location.href.replace('http://','') + "; domain=ptbus.com; path=/";
                location.href = 'http://bbs.ptbus.com/connect.php?mod=login&op=init&referer=index.php&statfrom=login_simple';
            });
            //退出登录
            $('#header_logout').click(function() {
                var logout_api = 'http://i.ptbus.com/uc_api/logout?callback=?';
                $.getJSON(logout_api, function(data) {
                    if (data.status == 'ok') {
                        location.reload();
                    } else if (data.status == 'fail') {}
                });
            });
            //登录弹层
            $("#header_nologin .btn_login").on("click",function(){
                i_user_status.poplogin();
            });
            //登录表单提交
            $('#sublogin').click(function() {
                var username = $("#useName").val();
                var password = $("#passWord").val();
                var login_api = 'http://i.ptbus.com/uc_api/login?username=' + username + '&password=' + password + '&callback=?';
                $.getJSON(login_api, function(data) {
                    if (data.status == 'ok') {
                        location.reload();
                    } else if (data.status == 'fail') {
                        $('#err_logTip').css('display', 'block');
                        $("#err_info").html(data.err_msg + '，');
                        setTimeout(function() {
                            $('#err_logTip').hide(300);
                        }, 3000);
                    }
                });
            });
            //用户名输入框获取及失去焦点
            $("input[name='username']").focus(function() {
                $(".input_fork_close").hide();
                $(this).addClass('col3');
                $(this).siblings().show();
                if ($(this).val() == this.defaultValue) {
                    $(this).val('');
                }
            });
            $("input[name='username']").blur(function() {
                var index = $("input[type='text']").index(this);
                var inputindex = $("input:eq(" + index + ")").attr('attr-title');
                if ($(this).val() == '') {
                    $("input:eq(" + index + ")").val(inputindex);
                }
                $(".input_fork_close").hide();
                $(this).siblings().show();
                //$(this).removeClass('col3');
            });
            //输入框后面的x
            $('.input_fork_close').click(function() {
                var index = $('.input_fork_close').index(this);
                var inputindex = $("input:eq(" + index + ")").attr('attr-title');
                $("input:eq(" + index + ")").val(inputindex);
            });
            //登录错误提示浮层
            $('#err_logTip').on("click",function(){
                $(this).css('display', 'none');
            });
            //登录浮层关闭
            $("#i_pop_close").on("click",function(){
                $('.i_login_mask').css('display', 'none');
                $('.login').css('display', 'none');
            });
            //用户绑定部分关闭弹层
            $(".z-box .canl").click(function() {
                $(".i_login_mask").hide();
                $(".z-box").hide();
            });
            $("#unbind_success_tip").click(function() {
                $(".i_login_mask").hide();
                $(".z-box").hide();
            });
            $("#upgrade_fail_tip").click(function() {
                $(".i_login_mask").hide();
                $(".z-box").hide();
            });
            $("#upgrade_success_tip").click(function() {
                $(".i_login_mask").hide();
                $(".z-box").hide();
            });
            //导航划过
            $(".header_vmay_box .vmayleft .header_menulist,.header_vmay_box .site_menu_list").hover(function() {
                $(".header_vmay_box .site_menu_list").show();
            }, function() {
                $(".header_vmay_box .site_menu_list").hide();
            });
            $(".header_vmay_box .vmayleft .header_wchatfocus").hover(function() {
                $(".header_vmay_box .phone_code1").show();
            }, function() {
                $(".header_vmay_box .phone_code1").hide();
            });
            $(".header_vmay_box .vmayleft .header_phoneweb").hover(function() {
                $(".header_vmay_box .phone_code2").show();
            }, function() {
                $(".header_vmay_box .phone_code2").hide();
            });
        }
        return {
            "poplogin" : poplogin,
            "serializeNav" : serializeNav,
            "isUserLogin" : isUserLogin
        }
    })();
    //外调登录弹窗方法
    //i_user_status.poplogin();
    //i_user_status.isUserLogin();
    i_user_status.serializeNav({
        "width": wrapwidth
    });
}