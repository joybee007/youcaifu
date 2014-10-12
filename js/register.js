$(function(){
	//个人、机构注册标签切换效果。
	$('.reg_nav li').each(function(i,a){
		$(a).click(function(){
			$('.reg_nav li').removeClass('active').eq(i).addClass('active');
			$('.reg_main').hide().eq(i).show();
		});
	});
	//发送验证码倒计时效果，其他页面可复用
	$('#getcheckcode').one('click',getCode);
	function getCode(){
		var $this=$(this);
 		$.ajax({
			url:'',
			type:'get',
			data:{},
			dataType:'json',
			success:function(json){
				if(true){
					$this.addClass('getcheckcode_disabled');
					var i=60,
						sId=-1;
					function limitGetCode(){
						sId=setTimeout(function(){
							if(i>0){
								$this.next('.valid_info').text(i+'秒之后再次获取验证码');
								limitGetCode();
								i--;
							}else{
								clearTimeout(sId);
								$this.removeClass('getcheckcode_disabled');
								$this.one('click',getCode);
								$this.next('.valid_info').text('');
							}
						},1000);
					}
					limitGetCode();
				}else{
					alert('获取验证码失败。');
					$this.one('click',getCode);
				}
			}
		});
	}

});
