$(document).ready(function() {

	var src;
	$('.play-block').click(function() {
		src = $(this).attr('data-src');

		$('.popup').addClass('visible')
		$('.popup iframe').attr('src', src);
	})

	$('.close').click(function() {
		$('.popup iframe').attr('src', '');
		$('.popup').removeClass('visible');
	})

	 	$('.slick-slider').slick({
	 	  	slidesToShow:1,
	 	  	infinite: true,
	  	 	autoplay:true,
			autoplaySpeed:2000,
			arrows:false,
			fade:true
	 	});
})


