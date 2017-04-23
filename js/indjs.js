// tab切换插件
$(function(){
	$('.jyTable').Tabs();
	$('.Raiders').Tabs();
	$('.RaidersNews1').Tabs();
	$('.RaidersNews2').Tabs();
	$('.RaidersNews3').Tabs();
	$('.RaidersNews4').Tabs();
	$('.Timetable').Tabs();
	$('.shiki').Tabs();
	$('.works').Tabs();
	$('.fouse').Tabs({
		auto:5000
	});
});
//遮罩层
$(document).ready(function(){
	if (Modernizr.touch) {
		$(".Mask").click(function(e){
			if (!$(this).hasClass("hover")) {
				$(this).addClass("hover");
			}
		});
	} else {
		$(".Mask").mouseenter(function(){
			$(this).addClass("hover");
		})
		.mouseleave(function(){
			$(this).removeClass("hover");
		});
	}
});
//浮动提示框
$(document).ready(function(){
	$("ul.sidenav li").hover(function() {
		$(this).css("z-index","3");
		$(this).find("div").stop().animate({left: "36", opacity:1}, "fast").css("display","block");
		$(this).find(">a").addClass("current");
	},function(){
		$(this).find("div").stop().animate({left: "0", opacity: 0,display:'none'}, "fast");
		$(this).find(">a").removeClass("current");
		$(this).css("z-index","1");
	});

});
//单排滚动图，点击放大
$(document).ready(function(){
	var picBox = $('.picbox').width();
	$('.pic_next').click(function(){

		if($('.piclist').is(':animated')){
			$('.piclist').stop(true,true);
		}

		ml = parseInt($('.piclist').css('left'));
		r = liw - (picBox - ml);
		if(r<208){
			s = r - 32;
		}else{
			s = 208;
		}
		$('.piclist').animate({left: ml - s + 'px'},'slow');
	})

	$('.pic_prev').click(function(){

		if($('.piclist').is(':animated')){
			$('.piclist').stop(true,true);
		}

		ml = parseInt($('.piclist').css('left'));
		if(ml>-208){
			s = ml;
		}else{
			s = -208;
		}
		$('.piclist').animate({left: ml - s + 'px'},'slow');
	})

})
//info pic
$(window).load(function(){
	liw = 0;
	$('.piclist li').each(function(){
		liw += $(this).width()+32;
		$(this).css('width',$(this).width()+'px');
	})
	$('.piclist').width( liw + 'px');
})
//侧导航
$(function() {
	$(window).scroll(function() {
		t = $(document).scrollTop();
		if(t > 500){
		  $('.sideNav').show();

		}else{
			  $('.sideNav').hide();
		}
	});
});
//侧导航
$(function() {
	$('.signBtn').click(function(event){
        var sign=$('.sign');
        var signBox=sign.find('.signBox');
        signBox.hide()
		sign.fadeIn();
        signBox.eq( parseInt( Math.random()*signBox.size() ) ).show()
	});
	$('.signClose').click(function(event){
		$('.sign').fadeOut();
	});
});