/**
 * Created by Administrator on 2016/12/10.
 */

//�����ƶ�

//document.onmousemove=function (e) {
//    my$("flower1").style.right=e.clientX/50-100+"px";
//    my$("flower1").style.top=e.clientY/50-50+"px";
//    my$("flower2").style.left=e.clientX/30+"px";
//    my$("flower2").style.bottom=e.clientY/30+300+"px";
//};

// �����ƶ�
// ��ȡ����¼�


////��ȡ����e
//getEvent: function (e) {
//    return e || window.event;
//},
//getPageX: function (e) {
//    if (e.pageX) {
//        return e.pageX;
//    } else {
//        //�е�������Ѹ߶���������ĵ��ĵ�һ��Ԫ������
//        //�е�������Ѹ߶��������body����
//        //document.documentElement.scrollTop;//�ĵ��ĵ�һ��Ԫ��
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