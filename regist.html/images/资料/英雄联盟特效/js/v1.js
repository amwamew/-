var hidDialogs = function() {
        need("biz.dialog", function(Dialog) {
            Dialog.hide();
        });
        $('#VideoContent').html('');
        pgvSendClick({
            hottag: 'main.popup.close'
        })
    },
    //新闻模块 news
    JNews = function() {
        $("#J_newsTab  > li").each(function(index) {
            $(this).mouseover(function() {
                var _this = this;
                $(_this).addClass("current").siblings().removeClass("current");
                $("#J_newsContent .news-content").eq(index).show().siblings().hide();
            })
        });
        var voteLINK = $("#setNum").data('link');
        $('#J_voteTips').attr("href", voteLINK);
    }(),
    //视频中心模块 videoCenter
    JShowVideo = function(thisContID) {
        var thiscnt = g(thisContID).innerHTML,
            s = g(thisContID).getAttribute("data-id"),
            tcss = {
                '2': 'new',
                '3': 'star',
                '4': 'event',
                '5': 'free',
                '6': 'funny',
                '7': 'official'
            },
            data = videoObj.msg["data" + s].newlist,
            auth = '',
            strHtml = '';
        if (thiscnt.indexOf("加载中") != -1) {
            for (var i = 0; i < data.length; i++) {
                s == 3 ? auth = '<span class="v-author">' + data[i].author.author + '</span>' : "";
                var url = data[i].url + '&e_code=main.videototal.' + tcss[s];
                strHtml += '<li><a class="v-link" onclick="LOL_Comm_Log.Web_Video_Main(\'' + tcss[s] + '\',' + data[i].id + ',\'' + url + '\');" href="' + url + '" target="_blank"><img src="' + data[i].thumb + '" alt=""><span class="shadow1"></span><span class="v-meta">' + auth + '<span class="v-time">' + data[i].time + '</span></span><span class="shadow2"></span><i class="icon-v"></i></a><h5 class="v-name"><a href="' + url + '" onclick="LOL_Comm_Log.Web_Video_Main(\'' + tcss[s] + '\',' + data[i].id + ',\'' + url + '\');" target="_blank">' + decodeURIComponent(data[i].title) + '</a></h5></li>';
            }
            g(thisContID).innerHTML = strHtml;
        }
        $('#J_videoMore').on('click', function() {
            $('#J_videoMore').hide();
            $('#J_videoInner').show();
            $('.v-star-list').css('height', 'auto');
            pgvSendClick({
                hottag: 'main.video.btn.more8'
            });
        })
    },
    JvideoCenter = function() {
        loadScript("http://lol.qq.com/web201310/js/videodata/LOL_VIDEOLIST_MAINPAGE_NEW.js?v=" + gets.ran, function() {
            JShowVideo("Jvideo_n1");
            JSwrap("Jvideo", "li", JShowVideo, false, "mouseover");
        });
    }(),
    //活动中心模块 ActiveCenter
    JActiveShow = function(thisContID) {
        var s = g(thisContID).innerHTML;
        if (s.indexOf("加载中") != -1) {
            var num = g(thisContID).getAttribute("data-num").split(','),
                iHtml = '',
                iUrl = '',
                data = null,
                self = action;
            for (var i = num[0] - 1; i < num[1]; i++) {
                data = self[i];
                if (thisContID.indexOf("ActiconlistMain") != -1) {
                    iUrl = data.sSmallImgUrl;
                } else {
                    iUrl = data.sBigImgUrl;
                }
                if (data.sTopImgUrl != '') {
                    iHtml += '<li><div class="act-img"><img src="' + data.sTopImgUrl + '" alt="' + decodeURIComponent(data.sName) + '"></div><p class="act-name">' + decodeURIComponent(data.sName) + '</p><i class="act-sbg"></i><a href="' + data.sActDetailUrl + '" class="act-info" onclick="pgvSendClick({hottag:\'main.activity.' + data.iActId + '\'})" target="_blank"><h5 class="act-tit2">活动简介</h5><p class="act-tx">' + decodeURIComponent(data.sDescripion) + '</p><span class="act-lnk">查看活动详情</span><i class="act-sbg"></i><i class="act-sbg2"></i></a></li>';
                } else {
                    iHtml += '<li><div class="act-img"><img src="' + iUrl + '" alt="' + decodeURIComponent(data.sName) + '"></div><p class="act-name">' + decodeURIComponent(data.sName) + '</p><i class="act-sbg"></i><a href="' + data.sActDetailUrl + '" class="act-info" onclick="pgvSendClick({hottag:\'main.activity.' + data.iActId + '\'})" target="_blank"><h5 class="act-tit2">活动简介</h5><p class="act-tx">' + decodeURIComponent(data.sDescripion) + '</p><span class="act-lnk">查看活动详情</span><i class="act-sbg"></i><i class="act-sbg2"></i></a></li>';
                }


            }
            g(thisContID).innerHTML = iHtml;
            var sw = gets.tag(thisContID, "li");
            for (var k = sw.length; k--;) {
                sw[k].onmouseover = function() {
                    this.className = "actcurrent";
                }
                sw[k].onmouseout = function() {
                    this.className = "actnormal";
                }
            }
        }
    },
    JActiveMain = function(thisContID, num) {
        var s = g(thisContID).innerHTML;
        if (s.indexOf("加载中") != -1) {
            var iHtml = '',
                iTime = '',
                cls = '',
                data = null,
                self = action;
            for (var i = 1; i <= num; i++) {
                data = self[i];
                if (data.iStatus == -1) {
                    iTime = '<span class="tip">已结束</span>';
                    cls = '';
                } else if (data.iStatus == 1 || data.iStatus == 999) {
                    iTime = '<span class="tip">进行中</span>';
                    cls = ' txtlist-now';
                }
                iHtml += '<li class="txtlist-nape' + cls + '"><i class="mainspr ico-arr"></i><a href="' + data.sActDetailUrl + '" title="' + decodeURIComponent(data.sName) + '" class="lnk-tit" target="_blank"><em>' + decodeURIComponent(data.sName) + '</em>' + iTime + '</a></li>';
            }
            g(thisContID).innerHTML = iHtml;
        }
    },
    JActiveCenter = function() {
        loadScript("http://ossweb-img.qq.com/images/clientpop/act/lol/lol_act_1_index.js?v=" + gets.ran, function() {
            JActiveShow("ActiconlistMain_n1");
            JActiveMain("ActiconlistMain_n2", 7);
        });
    }(),
    //赛事中心模块 match
    JMatchgg = function(vid) {
        var s = g(vid + "_gg").innerHTML;
        if (s.indexOf("加载中") != -1) {
            var gID = g(vid + "_gg").getAttribute("rel"),
                self = oDaTaNew246["pos" + gID],
                ggs = '<a target="_blank" href="' + self[1] + '" onclick="pgvSendClick({hottag:\'main.match.' + gID + '\'});"><img width="180" height="225" alt="" src="http://ossweb-img.qq.com/images/lol/v1/match/' + vid + '.jpg"></a><a class="mainspr btn-long" target="_blank" href="' + self[1] + '">进入赛事页面</a>';
            g(vid + "_gg").innerHTML = ggs;
        }
    },
    JMatchAct = function(thisContID) {
        var s = g(thisContID + "_act").innerHTML;
        if (s.indexOf("加载中") != -1) {
            var gID = g(thisContID + "_act").getAttribute("data-act"),
                self = match;
            for (var x in self) {
                if (gID == self[x].iActId) {
                    var peopleNum = parseInt(self[x].iJoin / 10000);
                    g(thisContID + "_act").innerHTML = '<a target="_blank" class="event-tit" href="' + self[x].sActDetailUrl + '" onclick="pgvSendClick({hottag:\'main.activity.' + gID + '\'})">' + decodeURIComponent(self[x].sName) + '</a><p class="meta">时间：' + self[x].dtBegin + '-' + self[x].dtEnd + '</p><p class="meta">地点：' + decodeURIComponent(self[x].sExtCharOne) + '</p><p class="mainspr event-num"><em class="fbig">' + peopleNum + '</em>万人关注</p>';
                    break;
                }
            }
        }
    },
    JShowMatch = function() {
        $("#J_matchTab  > li").each(function(index) {
            $(this).mouseover(function() {
                var _this = this;
                $(_this).addClass("current").siblings().removeClass("current");
                $(".home-match-content").eq(index).show().siblings('.home-match-content').hide();
            })
        });
        loadScript("http://game.qq.com/time/qqadv/Info_new_246.js?v=" + gets.ran, function() {
            loadScript("http://lol.qq.com/web201310/active/lol_act_3_index.js", function() {
                for (var i = 0; i < 7; i++) {
                    if (i != 4) {
                        JMatchgg('Jevent_n' + (i + 1));
                        JMatchAct('Jevent_n' + (i + 1));
                    }
                }
            });
        });
    }(),
    //英雄皮肤模块 heroSkin
    JHeroSkin = function() {
        $("#J_heroTab  > li").each(function(index) {
            $(this).mouseover(function() {
                var _this = this;
                $(_this).addClass("current").siblings().removeClass("current");
                $(".hero-content").eq(index).show().siblings('.hero-content').hide();
            })
        });

        function loadFreeData(data, time) {
            var f = "http://ossweb-img.qq.com/images/lol/img/champion2/",
                d = [];
            for (var j in data) {
                d.push('<a title="' + data[j].name + " " + data[j].title + '" href="/web201310/info-defail.shtml?id=' + data[j].id + '" target="_blank" onclick="pgvSendClick({hottag:\'main.hero.freeHero.' + data[j].id + '\'})"><img width="86" height="86" alt="' + data[j].name + ' ' + data[j].title + '" src="' + f + data[j].key + '_Web_0.jpg"><span class="sbg">' + '<span class="first-name">' + data[j].name + '</span></span></a>');
            }
            g("J_freeList").innerHTML = d.join('');
            g("J_freeDate").innerHTML = '免费时间：' + time[0] + ' 至 ' + time[1];
        }
        var s = g("J_freeList").innerHTML;
        if (s.indexOf("加载中") != -1) {
            if ("undefined" == typeof(LOLherojs)) {
                loadScript("http://lol.qq.com/biz/hero/free.js?v=" + gets.ran, function() {
                    var data = LOLherojs.free.data,
                        time = LOLherojs.free.date;
                    loadFreeData(data, time);
                });
            } else {
                loadFreeData(LOLherojs.free.data, LOLherojs.free.date);
            }

        }
        loadScript("http://lol.qq.com/biz/api/heroSkinAct.js?v=" + gets.ran, function() {
            var heroData = heroActData,
                skinData = skinActData;
            var htmlHero = '',
                htmlSkin = '';
            for (var i = 0; i < 5; i++) {
                var h = heroData[i];
                htmlHero += '<a href="http://lol.qq.com/act/' + h.url + '/" target="_blank" onclick="pgvSendClick({hottag:\'main.hero.newHero.' + h.url + '\'})"' + '><img src="http://ossweb-img.qq.com/images/lol/v1/hero/' + h.url + '.jpg" width="76" height="165" alt=""><span class="sbg"><span class="first-name">' + h.name + '</span><span class="last-name">' + h.title + '</span></span></a>';
            }
            for (var j = 0; j < 5; j++) {
                var s = skinData[j],
                    ssHtml = '';
                for (var ss = 0; ss < s.hero.length; ss++) {
                    ssHtml += '<span class="last-name">' + s.hero[ss] + '</span>';
                }
                htmlSkin += '<a href="http://lol.qq.com/act/' + s.url + '/" target="_blank" onclick="pgvSendClick({hottag:\'main.hero.newSkin.' + s.url + '\'})"' + '><img src="http://ossweb-img.qq.com/images/lol/v1/skin/' + s.url + '.jpg" width="76" height="165" alt=""><span class="sbg"><span class="first-name">' + s.name + '</span>' + ssHtml + '</span></a>';
            }
            $("#J_heroNew").html(htmlHero);
            $("#J_skinNew").html(htmlSkin);
        });
    }(),
    //轮播 promo
    t = 0,
    JGetPromo = function() {
        loadScript("http://game.qq.com/time/qqadv/Info_new_15282.js?v=" + gets.ran, function() {
            var promoArray = '',
                promoTriggerArray = '',
                ShowAdList = new Array(); //用于EAS统计 1
            var count = 0;
            for (var item in oDaTaNew15282) {
                var d = oDaTaNew15282[item];
                if (d && d[5] == 20) {
                    count++;
                    var e_code = EAS.GetECode(d[1]),/*增加上e_code渠道码*/
                        ShowAdInfo = '15282' + "." + item + "." + d[8] + "." + e_code;
                    ShowAdList.push(ShowAdInfo);

                    promoArray += '<li class="promo-item"><a onclick="EAS.SendClick({\'e_c\':\'' + ShowAdInfo + '\',\'c_t\':2,\'c_d\':this});EAS.ADClick(\'' + d[1] + '\');pgvSendClick({hottag:\'main.promo.r' + count + '.' + d[8] + '\'});" href="' + d[1] + '" target="_blank"><img src="http://ossweb-img.qq.com/upload/adw/' + d[2] + '" width="780" height="330" alt="' + decodeURI(d[0]) + '"></a></li>';
                    promoTriggerArray += '<span class="trigger-item">' + decodeURI(d[0]) + '</span>';
                    //用于EAS统计 3
                    if (count == 5) {
                        var ShowAdStr = ShowAdList.join("|");
                        if (typeof(EAS.SendClick) == 'function') {
                            EAS.SendClick({
                                'e_c': ShowAdStr,
                                'c_t': 1
                            });
                        }
                    }
                }
            }
            g('promoInner').innerHTML = promoArray;
            g('promoTrigger').innerHTML = promoTriggerArray;
            var amount = 5,
                ts = amount - 1,
                p = 0;
            $('#promoTrigger span').eq(0).addClass('on');
            var timeout;
            timeout = setTimeout(function() {
                promoMove();
            }, 5000);
            $('#promoTrigger span').each(function(index) {
                //var timeNavHover;
                $(this).mouseover(function() {
                    //clearTimeout(timeNavHover);
                    //timeNavHover = setTimeout(function(){
                    clearInterval(timeout);
                    t = index;
                    $("#promoInner").animate({
                        'marginLeft': -t * 780 + 'px'
                    }, {
                        queue: false,
                        duration: 200
                    });
                    $('#promoTrigger span').eq(t).addClass('on').siblings().removeClass('on');
                    timeout = setInterval(function() {
                        promoMove();
                    }, 5000);
                    //},100);
                });
            });
            //动画效果
            function promoMove() {
                t = parseInt(t + 1);
                if (t > ts) {
                    t = 0;
                }
                if (t < 0) {
                    t = ts;
                }
                p = t;
                $("#promoInner").animate({
                    'marginLeft': -p * 780 + 'px'
                }, {
                    queue: false,
                    duration: 200
                });
                $('#promoTrigger span').eq(p).addClass('on').siblings().removeClass('on');
            }
        });
    }(),
    //在线客服 online
    Jonline = function() {
        $("#J_onlineTab  > li").each(function(index) {
            $(this).mouseover(function() {
                var _this = this;
                $(_this).addClass("current").siblings().removeClass("current");
                $("#J_onlineContent > li").eq(index).show().siblings().hide();
            })
        });
    }();
//milo.ready(function(){
//    need(["biz.delayLoad"]);
//});

if ($(window).width() < 1460) {
    $(".side-tips").hide();
}


$(window).resize(function() {
    if ($(window).width() >= 1460) {
        $(".side-tips").show();
    } else {
        $(".side-tips").hide();
    }
});


function LOL_VIDEO_LOG(p1, p2, p3, p4, p5) {
    var p1 = p1.toLowerCase();
    var p2 = p2.toLowerCase();
    var p3 = p3.toLowerCase();
    var p4 = +p4;
    pgvSendClick({
        hottag: '' + p1 + '.' + p2 + '.' + p3 + '.' + p4 + ''
    });
    EAS.VShow({
        'VUrl': p5,
        'Vid': p4,
        'e_code': p1 + '.' + p2 + '.' + p3,
        'VType': 'click'
    });
} 
LOL_Comm_Log.init(1);

/*  |xGv00|b32f2c36c340e3d8b6498d550fc25d59 */