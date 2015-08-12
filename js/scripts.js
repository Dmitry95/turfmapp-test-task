$(window).resize(function() {
	$('.center-block').each(function() {
		$(this).css({
				position: 'relative'
			})
			.animate({
				left: ($(this).parent().width() - $(this).outerWidth()) / 2,
				top: ($(this).parent().height() - $(this).outerHeight()) / 2,
				opacity: 1
			}, {
				duration: 300,
				easing: 'swing'
			});
	});

	$('.center-block-horizontal').each(function() {
		$(this).css({
				position: 'relative'
			})
			.animate({
				left: ($(this).parent().width() - $(this).outerWidth()) / 2,
				opacity: 1
			}, {
				duration: 300,
				easing: 'swing'
			});
	});

	$('.carousel-block-horizontal').each(function() {
		$(this).css({
				position: 'relative'
			})
			.animate({
				left: ($(this).parent().width() - $(this).outerWidth()) / 2,
				opacity: 1
			}, {
				duration: 300,
				easing: 'swing'
			});

	});

	console.log($('.left-block').outerHeight());
	console.log($(window).height());

	if ($('.left-block').outerHeight() + $('header').outerHeight() > $(window).height()) {
		$('.left-block').css({
			position: 'absolute'
		});
	} else {
		$('.left-block').css({
			position: 'fixed'
		});
	}
});

$('#next-game-carousel').on('slid.bs.carousel', function() {
	$('.carousel-block-horizontal').each(function() {
		$(this).css({
				position: 'relative'
			})
			.animate({
				left: ($(this).parent().width() - $(this).outerWidth()) / 2,
				opacity: 1
			}, {
				duration: 300,
				easing: 'swing'
			});
	});
});

$('#accordion').on('shown.bs.collapse', function() {
	$('.center-block-horizontal').each(function() {
		$(this).css({
				position: 'relative'
			})
			.animate({
				left: ($(this).parent().width() - $(this).outerWidth()) / 2
			}, {
				duration: 300,
				easing: 'swing'
			});
	});
})


$(document).ready(function() {
	$(window).resize();
	$('#next-game-carousel').carousel({
		interval: 10000
	})
});