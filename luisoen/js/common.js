$(document).ready(function(){
  $('.slideshow-container').slick({
    slidesToShow: 1,
	arrows: true,
	dots: false,
	fade: true
  });

  $('a[href^="#"]').click(function(e) {
  	e.preventDefault();
  	var id = $(this).attr('href');
  	$('body,html').animate(function() {
  		scrollTop: $(id).offset().top
  	}, 600)

  	if ($(this).hasClass('mob-link')) {
  		$('.header_mob-nav').removeClass('active');
  	}
  })

  $('.hamburger').click(function () {
  	if ($('.header_mob-nav').hasClass('active')) {
  		$('.header_mob-nav, .hamburger').removeClass('active');
  	} else {
  		$('.header_mob-nav, .hamburger').addClass('active');
  	}
  	
  })
});
 