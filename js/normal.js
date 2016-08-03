$("#accordion > li > div").click(function(){

	if(false == $(this).next().is(':visible')) {
		$('#accordion > li > p').slideUp(300);
	}
	$(this).next().slideToggle(300);
});