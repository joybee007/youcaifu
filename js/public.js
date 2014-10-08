//public js
$(function(){
	//底部合作机构滚动
	$('#pm_marquee').kxbdSuperMarquee({
		distance:390,
		time:5,
		direction:'left',
		isEqual:true,
		btnGo:{left:'#pm_prev',right:'#pm_next'}
	});
	// 右侧客服
	function pageScroll(){
		window.scrollBy(0,-50);
		var scrolldelay=setTimeout(arguments.callee,10);
		0==document.documentElement.scrollTop&&0==document.body.scrollTop&&clearTimeout(scrolldelay);
	}
	$('#go_top').click(pageScroll);
	// 头部导航效果
	$('#header .nav li').hover(function(){
		$(this).toggleClass('hover');
	});
	// 头部登录框效果
	if($('#loginPop').length){
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
		$('#loginForm .form_div .checkcode_lab img').click(function(e){
			e.stopPropagation();
			this.src='xxx.sc?_t='+new Date().getTime();//刷新验证码
		}).click();
		
	}
	if(navigator.userAgent.indexOf('MSIE')){
		$('a').attr('hidefocus',true);
	}
	$('#userBox').hover(function(){
		$(this).find('.userInfoBox').toggle();
	});
	
	
	
});