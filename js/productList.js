
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
	
	
	
	
});