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
	$('#banner_marquee').y_marquee({
		nav:'#marqueeNav'
	});
	$('#main .main_nav li dl dt').hover(function(e){
		$(this).find('img').stop(true,true).fadeToggle('fast');
	});
	
	
});