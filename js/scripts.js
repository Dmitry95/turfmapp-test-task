/*$(window).resize(function(){
	$('.center-block').css({
		position:'absolute',
		left: ($('.center-block').parent().width() - $('.center-block').outerWidth())/2,
		top: ($('.center-block').parent().height() - $('.center-block').outerHeight())/2
	});
});*/

$(window).resize(function(){
	$('.center-block').each(function() {
		$(this).css({
			position:'relative',
			left: ($(this).parent().width() - $(this).outerWidth())/2,
			top: ($(this).parent().height() - $(this).outerHeight())/2
		});
	});

	$('.center-block-horizontal').each(function() {
		$(this).css({
			position:'relative',
			left: ($(this).parent().width() - $(this).outerWidth())/2
		});
	});
});


$(document).ready(function() {
	$(window).resize();

});
