/**
 * Created by Lenovo on 2016/12/1.
 */

window.onload = function () {




    //开机和点击移动
    var db_1 = document.getElementById("db_1");
    var db_2 = document.getElementById("db_2");
    var name1 = document.getElementById("name1");
    var name2 = document.getElementById("name2");
    var name3 = document.getElementById("name3");
    var sl = document.getElementById("sl");

    db_1.onmouseover = function () {
        fn1(db_1,75);
    }
    db_2.onmouseover = function () {
        fn1( db_2,77);
    }

    db_1.onmouseout = function () {
        fn1(db_1,80);
    }
    db_2.onmouseout = function () {
        fn1( db_2,80);
    }


    name1.onmouseover = function () {
        fn1(name1,130);
    }
    name2.onmouseover = function () {
        fn1(name2,315);
    }
    name3.onmouseover = function () {
        fn1(name3,170);
    }
    name1.onmouseout = function () {
        fn1(name1,145);
    }
    name2.onmouseout = function () {
        fn1(name2,330);
    }
    name3.onmouseout = function () {
        fn1(name3,185);
    }

    var timer1 = setInterval(function () {
        var step = 100 > sl.offsetTop ? 1 : -1;
        var leader = sl.offsetTop;
        sl.style.top = sl.offsetTop + step + "px";
        if(Math.abs(100-leader)<Math.abs(step)){
            sl.style.top = 100 + "px";
            clearInterval(sl.timer);
        }
    },10)

    function fn1(ele,target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = target > ele.offsetTop ? 1 : -1;
            var leader = ele.offsetTop;
            ele.style.top = ele.offsetTop + step + "px";
            if (Math.abs(target - leader) < Math.abs(step)) {
                ele.style.top = target + "px";
                clearInterval(ele.timer);
            }
        }, 20);
    }

    //开机动画

       $(function () {
        $("#name1").fadeIn(2000);
        $("#name2").fadeIn(2000);
        $("#name3").fadeIn(2000);
        $("#db_1").slideDown(2500);
        $("#db_2").slideDown(2500);
         $("#qr").slideDown(5000);
         $("#qr1").slideDown(5000);
         $("#qr2").slideDown(5000);
    })



    //轮播图
    var fs = document.getElementById("fs");
    var ul = fs.children[0];
    var ulLiArr = ul.children;
    var ol = fs.children[1];
    var arr = fs.children[2];
    var left = arr.children[0];
    var right = arr.children[1];
    var imgWidth = fs.offsetWidth;
    var ulNewLi = ulLiArr[0].cloneNode(true);
    ul.appendChild(ulNewLi);
    for(var i=0;i<ulLiArr.length-1;i++){
        var olNewLi = document.createElement("li");
        olNewLi.innerHTML = i+1;
        ol.appendChild(olNewLi);
    }
    var olLiArr = ol.children;
    olLiArr[0].className = "current";
    for(var i=0;i<olLiArr.length;i++){
        olLiArr[i].onmouseover = function () {
            //4.点亮盒子(排他思想)，移动ul。
            for(var j=0;j<olLiArr.length;j++){
                olLiArr[j].className = "";
            }
            this.className = "current";
            key = square = this.innerHTML - 1;
            animate(ul,-(this.innerHTML-1)*imgWidth);
        }
    }
    var square = 0;
    var key = 0;
    right.onclick = autoPlay;
    left.onclick = autoPlay2;
    var timer = setInterval(autoPlay,1650);

    fs.onmouseover = function () {
        clearInterval(timer);
        arr.style.display = "block";
    }
    fs.onmouseout = function () {
        timer = setInterval(autoPlay,1650);
        arr.style.display = "none";
    }

    function autoPlay() {
        square++;
        if(square == olLiArr.length){
            square = 0;
        }
        key++;
        if(key == ulLiArr.length){
            key = 1;
            ul.style.left = 0;
        }
        for(var i=0;i<olLiArr.length;i++){
            olLiArr[i].className = "";
        }
        olLiArr[square].className = "current";
        animate(ul,-key*imgWidth);
    }
    function autoPlay2() {
        square--;
        if(square == -1){
            square = olLiArr.length-1;
        }
        key--;
        if(key == -1){
            key = ulLiArr.length-2;
            ul.style.left = -(ulLiArr.length-1)*imgWidth+"px";
        }
        for(var i=0;i<olLiArr.length;i++){
            olLiArr[i].className = "";
        }
        olLiArr[square].className = "current";
        animate(ul,-key*imgWidth);
    }
    function animate(ele,target){  //匀速封装
        clearInterval(ele.timer);
        ele.timer = setInterval(function () {
            var step = target>ele.offsetLeft?10:-10;
            var leader = ele.offsetLeft;
            ele.style.left = ele.offsetLeft + step + "px";
            if(Math.abs(target-leader)<Math.abs(step)){
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        },10);
    }


    //点击透明变色

    $("#qr1").mouseover(function () {
        $(this).animate({"opacity": "1"});
    });
    $("#qr1").mouseout(function () {
        $(this).animate({"opacity": "0.5"});
    });
    $("#qr2").mouseover(function () {
        $(this).animate({"opacity": "1"});
    });
    $("#qr2").mouseout(function () {
        $(this).animate({"opacity": "0.5"});
    });

}















