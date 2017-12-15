$(function($){
	var $lis = $(".menu-first-list").children();
	var $lia = $(".menu-first-list li:eq(0) a:eq(0)");
	var $secendUl = $(".menu-first-list .second-list");
	//console.log($secendUl.length);
	/*$(".menu-first-list li:eq(0) a").hover(function(){
		$(this).css({"backgroundColor":"#12181b","color":"#FFF"});
		$(this).addClass("change");
	},function(){
		$(this).css({"backgroundColor":"#1c2229","color":"#ABB1B7"});
		$(this).removeClass("change");
	});*/

	//on绑定多个事件同一个函数
	/*$(".menu-first-list li:eq(0) a").on("mouseenter mouseleave",function(){
		$(this).toggleClass("change");
	});*/

	//on绑定多个事件不同函数
	$lis.on(
		{
			mouseenter : function(){
				$(this).css({"backgroundColor":"#12181b","color":"#FFF"});
				$(this).addClass("change");
			},
			mouseleave : function(){
				$(this).css({"backgroundColor":"#1c2229","color":"#ABB1B7"});
				$(this).removeClass("change");
			}
	});
	$lis.on("click",function(){
			$(this).css("backgroundColor","#12181b");
			$(this).off("mouseenter");
			$(this).off("mouseleave");
			$(this).removeClass("change");
			$(this).children("a").find(".r-arrow").css("display","none");
			console.log($(this).children("a").find(".r-arrow").length);
			$(this).children("a").find(".b-arrow").css("display","block");
			$(this).siblings().css({"backgroundColor":"#1c2229","color":"#ABB1B7"});
			$(this).siblings().find(".r-arrow").css("display","block");
			$(this).siblings().find(".b-arrow").css("display","none");
			$(this).siblings().on(
			{
				mouseenter : function(){
					$(this).css({"backgroundColor":"#12181b","color":"#FFF"});
					$(this).addClass("change");
				},
				mouseleave : function(){
					$(this).css({"backgroundColor":"#1c2229","color":"#ABB1B7"});
					$(this).removeClass("change");
				}
			});
			if($(this).index() == 0){
				var h = $secendUl.outerHeight();
				//console.log(h);
				$(this).animate({
					marginBottom : h + "px"
				},600);
				$secendUl.slideDown(600);
			}
	});
});