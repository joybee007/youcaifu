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
	
	
	
	layer.alert('提示信息', 8);
	$.layer({
		shade: [0],
		area: ['auto','auto'],
		dialog: {
			msg: '您确定要继续？',
			btns: 2,                    
			type: 4,
			btn: ['确认','取消'],
			yes: function(){
				layer.msg('确认', 1, 1);
			},
			no: function(){
				layer.msg('取消', 1, 13);
			}
		}
	});
	/* $.layer({
        type: 1,
        title: false, //不显示默认标题栏
        shade: [0], //不显示遮罩
        area: ['600px', '360px'],
        page: {html: '<img src="http://static.oschina.net/uploads/space/2014/0516/012728_nAh8_1168184.jpg" alt="layer">'}
    }); */
	
	
	
	
});