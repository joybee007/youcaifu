//public js
(function($){
	 $.fn.placeholder = function (options) {
        var defaults = {
            pColor: "#333",
            pActive: "#999",
            pFont: "14px",
            activeBorder: "#080",
            posL: 8,
            zIndex: "99"
        },
        opts = $.extend(defaults, options);
        //
        return this.each(function () {
            if ("placeholder" in document.createElement("input")) return;
            $(this).parent().css("position", "relative");
            var isIE = $.browser.msie,
            version = $.browser.version;
  
            //不支持placeholder的浏览器
            var $this = $(this),
                msg = $this.attr("placeholder"),
                iH = $this.outerHeight(),
                iW = $this.outerWidth(),
                iX = $this.position().left,
                iY = $this.position().top,
                oInput = $("<label>", {
                "class": "test",
                "text": msg,
                "css": {
                    "position": "absolute",
                    "left": iX + "px",
                    "top": iY + "px",
                    "width": iW - opts.posL + "px",
                    "padding-left": opts.posL + "px",
                    "height": iH + "px",
                    "line-height": iH + "px",
                    "color": opts.pColor,
                    "font-size": opts.pFont,
                    "z-index": opts.zIndex,
                    "cursor": "text"
                }
                }).insertBefore($this);
            //初始状态就有内容
            var value = $this.val();
            if (value.length > 0) {
            oInput.hide();
            };
  
            //
            $this.on("focus", function () {
                var value = $(this).val();
                if (value.length > 0) {
                    oInput.hide();
                }
                oInput.css("color", opts.pActive);
                //
  
                if(isIE && version < 9){
                    var myEvent = "propertychange";
                }else{
                    var myEvent = "input";
                }
  
                $(this).on(myEvent, function () {
                    var value = $(this).val();
                    if (value.length == 0) {
                        oInput.show();
                    } else {
                        oInput.hide();
                    }
                });
  
            }).on("blur", function () {
                var value = $(this).val();
                if (value.length == 0) {
                    oInput.css("color", opts.pColor).show();
                }
            });
            //
            oInput.on("click", function () {
                $this.trigger("focus");
                $(this).css("color", opts.pActive)
            });
            $this.filter(":focus").trigger("focus");
        });
    }
})(jQuery);

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
		$('#login_submit').click(function(){
			$(this).text('登录中...').css('background-color','gray');
		});
		
		
		
		
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
	function initSelect(ele){
		var ul=$(ele).parent().find('ul.ui_div_select_options');
		ul.empty();
		$(ele).find('option').each(function(j,b){
			var li=$('<li />');
			li.data('val',$(b).val()).text($(b).text()).attr('title',$(b).text());
			if($(b).prop('selected')){
				$(ele).parents('.ui_div_select').find('.ui_div_select_value').text($(b).text());
			}
			ul.append(li);
		});
	}
	window.initSelect=initSelect;
	if($('.ui_div_select').length){
		$('.ui_div_select select').each(function(i,a){
			$(a).parent().css('z-index',10-i);
			initSelect(a);
		});
		$('ul.ui_div_select_options').on('click','li',function(){
			$(this).parent().hide().next('select').val($(this).data('val')).trigger('change').end().prev('.ui_div_select_value').text($(this).text());
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
			var list=$(this).next();
			list.css('height',Math.min(list.height(),174)).toggle();
			evt.stopPropagation();
			evt.preventDefault();
		});
		$(document).click(function(){
			$('.ui_div_select_options').hide();
		});
	}
	$('select').change(function(){
		alert($(this).val());
	});
	$('#mainTip .tipClose').click(function(){
		$('#mainTip').fadeOut();
	});
	if($('.user_menu').length){
		$('.user_menu li.title').click(function(){
			$(this).nextUntil('.title').slideToggle('fast');
			$(this).toggleClass('slideDown');
		});
	}
	//显示+1
	function followProduct(evt){	//请传入evt对象
		var followTip;
		if(!$('#followTip').length){
			followTip=$('<div id="followTip"></div>');
			followTip.text('+1').appendTo(document.body);
		}else{
			followTip=$('#followTip');
		}
		followTip.stop(true,true).show().css({
			top:evt.pageY-12,
			left:evt.pageX-15
		}).animate({
			top:parseInt(followTip.css('top'))-10,
			opacity:0
		},700,function(){
			followTip.hide().css('opacity',1);
		});
	}
});