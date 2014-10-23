
$(function(){
	$('.contract_status').hover(function(e){
		$(this).find('.c_status_pop').toggle();
	}).each(function(i,a){
		$(a).css('z-index',50-i);
	});
	
	
	
	
	
});

