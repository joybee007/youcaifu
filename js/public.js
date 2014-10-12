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
	//隐藏a标签虚线框
	if(navigator.userAgent.indexOf('MSIE')){
		$('a').attr('hidefocus',true);
	}
	//登陆后用户中心鼠标划过
	$('#userBox').hover(function(){
		$(this).find('.userInfoBox').toggle();
	});
	//回到顶部
	$(window).scroll(function(){
		toggleGoTop();
	});
	toggleGoTop();
	function toggleGoTop(){
		if($(window).scrollTop()==0){
			$('#sidebar').height(152);
		}else{
			$('#sidebar').height(203);
		}
	}
	$('#go_top').click(function(){
		$(window).scrollTop(0);
	});
	//模拟select
	if($('.ui_div_select').length){
		$('.ui_div_select select').each(function(i,a){
			$(a).parent().css('z-index',10-i).end().find('option').each(function(j,b){
				var li=$('<li />');
				li.data('val',$(b).val());
				li.text($(b).text());
				$(a).parent().find('ul.ui_div_select_options').append(li);
			});
		});
		$('ul.ui_div_select_options').on('click','li',function(){
			$(this).parent().hide().next('select').val($(this).data('val')).end().prev('.ui_div_select_value').text($(this).text());
		}).on('mouseover','li',function(){
			$(this).css('background','#e4f1f2');
		}).on('mouseout','li',function(){
			$(this).css('background','none');
		});
		$('.ui_div_select_value').hover(function(){
			$(this).css('border-color','#40b1e6');
		},function(){
			$(this).css('border-color','#b1b1b1');
		}).click(function(evt){
			$(this).next().toggle();
			evt.stopPropagation();
			evt.preventDefault();
		});
		$(document).click(function(){
			$('.ui_div_select_options').hide();
		});
	}
	
	$('#mainTip .tipClose').click(function(){
		$('#mainTip').fadeOut();
	});
	if($('.user_menu').length){
		$('.user_menu li.title').click(function(){
			$(this).nextUntil('.title').slideToggle('fast');
			$(this).toggleClass('slideDown');
		});
	}
	
	
});