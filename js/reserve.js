$(function(){

	$('.old_list table tr').hover(function(){
		$(this).toggleClass('bg-yellow').find('.edit_btn').toggle();
	});
	$('.old_list table :radio').click(function(){
		if($(this).is('.add_new_radio')){
			$(this).parents('.old_list').next('.add_new').show();
		}else{
			$(this).parents('.old_list').next('.add_new').hide();
		}
	});
	$('.submit').click(function(){
		$(this).addClass('submit_disabled').prev('.saved_info').show().prev('.add_new').hide().prev('.old_list').hide();
	});
	
});
