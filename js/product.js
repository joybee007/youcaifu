//product js


$(function(){
	var nav=$('#nav_bar ul li'),
		h2s=$('#main h2');
	nav.each(function(i,a){
		$(this).click(function(){
			var top=h2s.eq(i).offset().top;
			nav.removeClass('active');
			$(this).addClass('active');
			pageScroll(top);
		});
	});




	function pageScroll(top){
		var scrollTop=document.documentElement.scrollTop===0?document.documentElement.scrollTop:document.body.scrollTop,
			target=top-10,
			distance;
		if(scrollTop>target){
			distance=-50;
		}else{
			distance=-50;
		}
		//window.scrollBy(0,-50);
		//var scrolldelay=setTimeout(arguments.callee,10);
		//top==scrollTop&&clearTimeout(scrolldelay);
		$('html,body').animate({scrollTop:target},300);
	}
});


