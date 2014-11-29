(function(){
	$.fn.extend({
		y_marquee:function(options){
			var list=this.children(),
				navbox=$(options.nav),
				index=0,
				length=list.length,
				zIndex=4,
				marqueeId=-1;
			list.each(function(i,a){
				$('<li></li>').appendTo(navbox).click(function(){
					show(i);
				});
			});
			marqueeId=setTimeout(function(){
				show(1);
			},6000);
			function show(i){
				if(i==index-1||(index==0&&i+1==length)) return;
				clearTimeout(marqueeId);
				list.eq(i).css({zIndex:zIndex}).hide().fadeIn(800);
				navbox.children().removeClass('active').eq(i).addClass('active');
				zIndex++;
				if(i+1==length){
					index=0;
				}else{
					index=i+1;
				}
				marqueeId=setTimeout(function(){
					show(index);
				},6000);
			}
			list.eq(0).css({zIndex:zIndex}).show();
			navbox.children().removeClass('active').eq(0).addClass('active');
			return this;
		}
	});
	
})();