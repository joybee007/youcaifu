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
	
	//模拟下拉框
	$('.searchBox_select select').each(function(i,a){
		$(a).parent().css('z-index',10-i).end().find('option').each(function(j,b){
			var li=$('<li />');
			li.data('val',$(b).val());
			li.text($(b).text());
			$(a).parent().find('ul.searchBox_select_options').append(li);
		});
	});
	$('ul.searchBox_select_options').on('click','li',function(){
		$(this).parent().hide().next('select').val($(this).data('val')).end().prev('.searchBox_select_value').text($(this).text());
	}).on('mouseover','li',function(){
		$(this).css('background','#e4f1f2');
	}).on('mouseout','li',function(){
		$(this).css('background','none');
	});
	$('.searchBox_select_value').hover(function(){
		$(this).css('border-color','#40b1e6');
	},function(){
		$(this).css('border-color','#b1b1b1');
	}).click(function(){
		$(this).next().show();
	});
	
	
	
	
	
	
});