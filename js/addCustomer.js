
$(function(){
	$('.slideBtn').click(function(){
		$('.customer_more_info').slideToggle();
		$(this).toggleClass('slideBtn_slideDown');
		toggleText(this);
	});
	function toggleText(node){
		if(node.innerHTML=='收起'){
			node.innerHTML='展开'
		}else{
			node.innerHTML='收起'
		}
	}
});
