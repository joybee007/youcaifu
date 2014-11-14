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
	$('#submit').click(function(){
		showValidInfo('验证消息');
	});
	//显示验证消息
	function showValidInfo(text){
		$('.form_valid_info').find('p').html(text).end().stop(true,true).fadeIn('fast').delay(1000).fadeOut('slow');
	}
	
	//客户名称联想
	$('#customer').focus(function(){
		var list=$('.customerList');
		list.show().css('height',Math.min(list.height(),174));
	}).blur(function(){
		$('.customerList').hide();
	});
	$('ul.customerList').on('mousedown','li',function(){
		$('#customer').val($(this).text());
	}).on('mouseover','li',function(){
		$(this).css('background','#e4f1f2');
	}).on('mouseout','li',function(){
		$(this).css('background','none');
	});
	
});
