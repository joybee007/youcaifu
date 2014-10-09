//我的订单 js
$(function(){
	var currentOrder,
		editOffset;
	$('.order_list').on('click','.edit',function(evt){
		evt.stopPropagation();
		editOffset=$(this).offset();
		$('#edit_links').css({
			top:editOffset.top+30,
			left:editOffset.left-145
		}).show();
		
		//currentOrder=xxx 请在此处将点击的订单id赋给这个变量
	});
	$('#edit_links,.yellow_tip').click(function(evt){
		evt.stopPropagation();
	});
	function hideAll(){
		$('#edit_links,.yellow_tip').hide();
	}
	$(document).click(hideAll);
	//取消订单
	$('#cancle_order').click(function(evt){
		$('.yellow_tip').hide();
		$('#confirm_cancle').css({
			top:editOffset.top+99,
			left:editOffset.left-144
		}).show();
	});
	$('#confirm_cancle_btn').click(function(){
		$.ajax({
			url:'xx',
			type:'post',
			data:{},
			dataType:'json',
			success:function(json){
				if(1){
					$(this).parents('.yellow_tip').hide();
				}else{
					
				}
			}
		});
	});
	$('#cancle_cancle_btn').click(hideAll);
	//客户账户录入
	$('#customer_account_edit').click(function(){
		$('.yellow_tip').hide();
		$('#customerForm').css({
			top:editOffset.top+99,
			left:editOffset.left-236
		}).show();
	});
	$('#customer_account_submit').click(function(){
		$.ajax({
			url:'xx',
			type:'post',
			data:{},
			dataType:'json',
			success:function(json){
				if(1){
					$(this).parents('.yellow_tip').hide();
					$('#submitSuccess').css({
						top:editOffset.top+99,
						left:editOffset.left-124
					}).show();
					$('customerForm input:text').val('');
				}else{
					
				}
			}
		});
	});
	$('.order_list tr:even td').css('color','#828282');
	$('.order_list tr:last').css('border','none');
	
});