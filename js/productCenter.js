$(function(){
	$('#pm_marquee').kxbdSuperMarquee({
		distance:390,
		time:5,
		direction:'left',
		isEqual:true,
		btnGo:{left:'#pm_prev',right:'#pm_next'}
	});
	function pageScroll(){
		window.scrollBy(0,-50);
		var scrolldelay=setTimeout(arguments.callee,10);
		0==document.documentElement.scrollTop&&0==document.body.scrollTop&&clearTimeout(scrolldelay);
	}
	$('#go_top').click(pageScroll);
	
	$('.pb_intro:first').show();
	$('.pb_info').mouseenter(function(){
		$(this).siblings().find('.pb_intro').slideUp('fast');
		$(this).find('.pb_intro').slideDown('fast');
	});
	
	
	
	
	
	
	
	
	
	
	
});