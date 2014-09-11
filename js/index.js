//index js
$(function(){
	$('#login_btn').click(function(e){
		e.stopPropagation();
		$('#loginPop').toggle();
	});
	$(document).click(function(){
		$('#loginPop').hide();
	});
	$('#loginPop').click(function(e){
		e.stopPropagation();
	});
	$('#pm_marquee').kxbdSuperMarquee({
		distance:390,
		time:5,
		direction:'left',
		isEqual:true,
		btnGo:{left:'#pm_prev',right:'#pm_next'}
	});
	$('#banner_marquee').y_marquee({
		nav:'#marqueeNav'
	});
	function pageScroll(){
		window.scrollBy(0,-50);
		var scrolldelay=setTimeout(arguments.callee,10);
		0==document.documentElement.scrollTop&&0==document.body.scrollTop&&clearTimeout(scrolldelay);
	}
	$('#go_top').click(pageScroll);
	
	
	
});