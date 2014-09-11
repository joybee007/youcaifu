(function(){
	$.fn.extend({
		y_marquee:function(options){
			var list=this.children(),
				navbox=$(options.nav),
				index=1,
				length=list.length,
				zIndex=4;
			list.each(function(i,a){
				$('<li></li>').click(i,show).appendTo(navbox);
			});
			setTimeout(function(){
				show({},index);
			},3000);
			function show(e){
				var i=e.data||index;
				list.eq(i).css({zIndex:zIndex}).hide().fadeIn('fast');
				navbox.children().removeClass('active').eq(i).addClass('active');
				zIndex++;
				if(i+1==length){
					index=0;
				}else{
					index=i+1;
				}
				setTimeout(function(){
					show({},index);
				},3000);
			}
			list.eq(0).css({zIndex:zIndex}).show();
			navbox.children().removeClass('active').eq(0).addClass('active');
			return this;
		}
	});
	
})();