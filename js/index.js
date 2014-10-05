//index js
$(function(){

	$('#banner_marquee').y_marquee({
		nav:'#marqueeNav'
	});
	$('.fadeImg li').hover(function(e){
		$(this).find('img').stop(true,true).fadeToggle('fast');
	});
	
	
});