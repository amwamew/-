/**
 * Created by Administrator on 2016/12/10.
 */

//花边移动

//document.onmousemove=function (e) {
//    my$("flower1").style.right=e.clientX/50-100+"px";
//    my$("flower1").style.top=e.clientY/50-50+"px";
//    my$("flower2").style.left=e.clientX/30+"px";
//    my$("flower2").style.bottom=e.clientY/30+300+"px";
//};

// 花瓣移动
// 获取相关事件


////获取参数e
//getEvent: function (e) {
//    return e || window.event;
//},
//getPageX: function (e) {
//    if (e.pageX) {
//        return e.pageX;
//    } else {
//        //有的浏览器把高度设计在了文档的第一个元素中了
//        //有的浏览器把高度设计在了body中了
//        //document.documentElement.scrollTop;//文档的第一个元素
//        //document.body.scrollTop;
//        var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
//        return e.clientX + scrollLeft;
//    }
//},
//getPageY: function (e) {
//    if (e.pageY) {
//        return e.pageY;
//    } else {
//        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//        return e.clientY + scrollTop;
//    }
//}