$(function(){
	//个人、机构注册标签切换效果。
	$('.reg_nav li').each(function(i,a){
		$(a).click(function(){
			$('.reg_nav li').removeClass('active').eq(i).addClass('active');
			$('.reg_main').hide().eq(i).show();
		});
	});
});
