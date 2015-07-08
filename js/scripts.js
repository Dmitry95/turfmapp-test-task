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

	$('.carousel-block-horizontal').each(function() {
		$(this).css({
			position:'relative',
			left: ($(this).parent().width() - $(this).outerWidth())/2
		});

	});
});

$('#next-game-carousel').on('slid.bs.carousel', function () {
  $('.carousel-block-horizontal').each(function() {
		$(this).css({
			position:'relative',
			left: ($(this).parent().width() - $(this).outerWidth())/2
		});
	});
});

$('#accordion').on('shown.bs.collapse', function () {
  $('.center-block-horizontal').each(function() {
		$(this).css({
			position:'relative',
			left: ($(this).parent().width() - $(this).outerWidth())/2
		});
	});
})


$(document).ready(function() {
	$(window).resize();
	$('#next-game-carousel').carousel({
      interval: 10000
    })
});
