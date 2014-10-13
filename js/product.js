//product js


$(function(){
	//导航条点击切换
	var nav=$('.nav_bar'),
		h2s=$('#main h2'),
		isTab=true;
	nav.each(function(x,y){
		var $a=$(y).find('ul li');
		$a.each(function(i,a){
			$(this).click(function(){
				var top=h2s.eq(i).offset().top;
				$a.removeClass('active');
				$(this).addClass('active');
				pageScroll(top);
			});
		});
	});
	var offset=$('#nav_bar').offset();
	fixNavBar();
	$(window).scroll(fixNavBar).scroll(function(){
		if(!isTab) return;
		var top=$(this).scrollTop(),
			currentH,i;
		h2s.each(function(i,a){
			if($(a).offset().top-50>top){
				currentH=a;
				return false;
			}
		});
		if(!currentH){
			i=h2s.length;
		}else{
			i=h2s.index(currentH);
		}
		$('.nav_bar_top ul li').removeClass('active').eq(i-1).addClass('active');
		
	});
	function fixNavBar(){
		if($(window).scrollTop()>offset.top){
			$('.nav_bar_top').show();
		}else{
			$('.nav_bar_top').hide();
			$('#nav_bar ul li').removeClass('active').eq(0).addClass('active');
		}
	}
	function pageScroll(top){
		var target=top-50
		isTab=false;
		$('html,body').animate({scrollTop:target},300,function(){isTab=true;});
	}
	
	var pd_time_links=$('.pd_time .pd_time_link');
	pd_time_links.click(function(){
		pd_time_links.removeClass('active');
		$(this).addClass('active');
	});
	
	//显示，隐藏视频浮层。
	function showVideo(){
		$('#mask,#videoPop').show();
	}
	function hideVideo(){
		$('#mask,#videoPop').hide();
	}
	
	
});


