//index js
$(function(){

	$('#banner_marquee').y_marquee({
		nav:'#marqueeNav'
	});
	$('.fadeImg li').hover(function(e){
		$(this).find('img').stop(true,true).fadeToggle('fast');
	});
	var xinshou_marquee=null;
	//新手引导
	function showXinshou(){
		$('#mask,#xinshou').show();
		if(!xinshou_marquee){
			xinshou_marquee=$('#xinshou_marquee').kxbdSuperMarquee({
				distance:440,
				duration:40,
				direction:'left',
				isEqual:true,
				btnGo:{left:'#xinshou .next_btn',right:'#xinshou .prev_btn'},
				isMarquee:false,
				navId:'#xinshou_marquee_nav'
			});
		}
	}
	//显示引导
	//showXinshou();
	function hideXinshou(){
		$('#mask,#xinshou').hide();
	}
	
	//placeholder
	$('#username').placeholder({
		pColor: "#999",
		pActive: "#999",
		posL: 48
	});
	$('#password').placeholder({
		pColor: "#999",
		pActive: "#999",
		posL: 48
	});
	
	
});