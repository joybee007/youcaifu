
$(function(){
	//条件下拉收起
	(function(){
		var searchbox=$('#searchbox'),
			_height=searchbox.innerHeight(),
			height,
			more_search=$('#more_search');
		more_search.click(function(){
			if(more_search.is('.ms_back')){
				searchbox.animate({height:_height});
				more_search.removeClass('ms_back').text('更多选项');
			}else{
				searchbox.css('height','auto');
				height=searchbox.innerHeight();
				searchbox.css('height',_height);
				searchbox.animate({height:height-1});
				more_search.addClass('ms_back').text('收起');
			}
		});
	})();
	
	/* 二级条件显示 */
	$('#searchbox .search_div .search_links .search_link a').click(function(){
		var secondary_search_link;
		if($(this).parent().next().is('.secondary_search_link')){
			$(this).parent().addClass('active').siblings().removeClass('active');
			secondary_search_link=$(this).parent().next().css({
				top:$(this).position().top+24
			}).toggle();
		}
	});
	/* 修复二级条件被下面的条件遮挡的BUG */
	$('#searchbox .search_div .search_links').each(function(i,a){
		$(a).css('z-index',30-i);
	});
	
	
	
});