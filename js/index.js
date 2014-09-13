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
});