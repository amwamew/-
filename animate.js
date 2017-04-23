/**
 * 功能：通过id获取元素节点。
 * @param str{string:elementId}
 * @returns {Element}
 */
function $(str){
    //判断：首字母为哪个，然后使用对应的方法获取。
    if(str.charAt(0) === "#"){
        return document.getElementById(str.slice(1));//忽略第一个字符，从第二个开始获取
    }else if(str.charAt(0) === "."){
        return document.getElementsByClassName(str.slice(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

/**
 * 显示盒子
 * @param ele
 */
function show(ele){
    ele.style.display = "block";
}

/**
 * 隐藏盒子
 * @param ele
 */
function hide(ele){
    ele.style.display = "none";
}


/**
 * 功能：通过元素获取他的前一个兄弟节点(兼容IE678)
 * @param ele
 * @returns {Element|*|Node}
 */
function prevSib(ele){
    var bbb = ele.previousElementSibling || ele.previousSibling;
    return bbb;
}

/**
 * 功能：通过元素获取他的后一个兄弟节点(兼容IE678)
 * @param ele
 * @returns {Element|*|Node}
 */
function nextSib(ele){
    return ele.nextElementSibling || ele.nextSibling;
}



/**
 * 功能：通过元素获取他的第一个子节点(兼容IE678)
 * @param ele
 * @returns {Element|*|Node}
 */
function first(ele){
    return ele.firstElementChild || ele.firstChild;
}


/**
 * 功能：通过元素获取他的最后一个子节点(兼容IE678)
 * @param ele
 * @returns {Element|*|Node}
 */
function last(ele){
    return ele.lastElementChild || ele.lastChild;
}


/**
 * 功能：通过传递某一元素和指定的索引值，获取他的任意兄弟节点。
 * @param ele
 * @param index
 * @returns {*|HTMLElement}
 */
function getSiblingForIndex(ele,index){
    return ele.parentNode.children[index];
}


/**
 * 功能：通过传递过来的元素，获取他的所有兄弟节点，不包括自己。
 * @param ele
 * @returns {Array}
 */
function getSiblings(ele){
    var newArr = [];
    var allChildren = ele.parentNode.children;
    //遍历所有的元素
    for(var i=0;i<allChildren.length;i++){
        //判断：只要不是ele元素本身，就添加进新数组
        if(allChildren[i] != ele){
            newArr.push(allChildren[i]);
        }
    }
    //所有循环执行完毕，把新数组返回。
    return newArr;
}



//作业：某个元素之前的所有兄弟元素。之后的所有兄弟元素。




//缓动框架
function animate(ele,json,fn){
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for(var k in json){
            if("z-index" === k){
                ele.style.zIndex = json[k];
            }else if("opacity" === k){
                //var leader = parseInt(getStyle(ele,k)*100) || 100;
                if(parseInt(getStyle(ele,k)*100) === 0){
                    var leader = 0;
                }else{
                    var leader = parseInt(getStyle(ele,k)*100) || 100;
                }
                var step = (parseInt(json[k]*100)-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style.opacity = leader/100;
                ele.style.filter = "alpha(opacity="+leader+")";
                console.log(1);
                if(parseInt(json[k]*100)!=leader){
                    bool = false;
                }
            }else{
                var leader = parseInt(getStyle(ele,k)) || 0;//带有单位，需要去掉px
                var step = (json[k]-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                ele.style[k] = leader +"px";
                console.log(1);
                if(json[k]!=leader){
                    bool = false;
                }
            }
        }
        if(bool){
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    },50);
}

//封装一个兼容写法：
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}



function scroll(){
    return {
        "top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
        "left": window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
    };
}
