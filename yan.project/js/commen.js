/**
 * Created by Administrator on 2016/12/9.
 */

//ͷ������

$(function () {
    $(".jiazaiquan").fadeIn(600);

    $(".bg").fadeIn(1000, function () {
        $(function () {
            $(".door-left").animate({"left":"-285px","opacity":"1"},1100,"linear");
        });
        $(function () {
            $(".door-right").animate({"right":"-285px","opacity":"1"},1100,"linear", function () {
                $(".img-people").fadeIn(600, function () {
                    $(".img-title").fadeIn(1000);
                    $(".img-head").fadeIn(1000, function () {
                        $(".flower1").fadeIn(1500);
                        $(".flower2").fadeIn(1000);
                    });

                });
            });
        });
    });

});


$(function () {
    $(window).scroll(function () {

        if($(document).scrollTop()>700){
            $("#yincang2").show(function(){

                $("body").mouseenter(function(){
                    $(".main-video-2").slideDown(1000);
                    //$(".").slideDown(1000);
                    $(".main2-title").animate({"opacity":"1"},900,"linear");
                    $("main-sideimg").fadeIn(1000);

                });

            });



        }else{
            $("#yincang2").hide();
        }
    });
});


window.onload =function() {
//�������
    document.onmousemove = function () {
        //��ȡԪ��
        var fone = document.getElementById("flower1");
        var ftwo = document.getElementById("flower2");
        var event = event || window.event;
        var Y = event.clientY;
        var X = event.clientY;
        //��������Ŀ��  �ƶ�����
        //��������ĸ߶�
        fone.style.top = Y / 50 - 50 + "px";
        fone.style.left = X / 50 - 100 + "px";
        ftwo.style.right == X / 20 + "px";
        ftwo.style.bottom = Y / 20 + 100 + "px";
    }

// ��ά����ʾ
//     ��ȡ���Ԫ��
      window.onscroll = function (){
          var  erweima =document.getElementsByClassName("erweima")[0];
          if(scroll().top>500){
              //s��������
              erweima.style.display = "block";
          }
          else{
              erweima.style.display = "none";
          }


          //if(scroll().top>700){
          //    //s��������
          //    var  main2title =document.getElementsByClassName("main2-title")[0];
          //    main2title.style.display = "block";
          //
          //
          //}
          //else{
          //    erweima.style.display = "none";
          //}



      }









    function scroll() {
        return {
            "top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
            "left": window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
        };
    }



// �ڶ�ģ��
// ����л�  �����
//       var anniu1 =docuemnt.getElementById("voidA");
//       var anniu2 =docuemnt.getElementById("voidB");
//       var anniu2 =document.getElementById("voidC");









}

















