//index js
$(function(){

	$('#banner_marquee').y_marquee({
		nav:'#marqueeNav'
	});
	$('#main .main_nav li dl dt').hover(function(e){
		$(this).find('img').stop(true,true).fadeToggle('fast');
	});
	
	
});