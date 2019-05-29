$(document).ready(function(){

  if ($(window).width() < 768) {

  	$('.advisors-team').slick({
  	  	// infinite: true,
 		centerMode: true,
    	slidesToShow: 1,
    	centerPadding: "70px"
  	});

  	  	$('.team').slick({
  	  	// infinite: true,
 		centerMode: true,
    	slidesToShow: 1,
    	centerPadding: "80px"
  	});

  	  	$('.ul-legacy').slick({
  	  	// infinite: true,
 		centerMode: true,
    	slidesToShow: 1,
    	centerPadding: "0px"
  	});
  }


  var hamburger = document.getElementById('hamburger'),
	menu = document.querySelector('.top-header_nav');

	// hamburger.onclick = function(){
	// 	hamburger.classList.toggle('visible')
	// }
	
	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('active');
		menu.classList.toggle('visible');
	})
 
	$('.bot-header_text li').click(function(){
		var imgSrc = $(this).attr('data-image');

		$('header').css({
			"background": "url('" + imgSrc + "') center bottom / cover"
		})
		$('.blur-bg').css({
			"background": "url('" + imgSrc + "') center bottom/cover"
		})	
	})

});
