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
	window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    console.log(scroll)
	});

	$('#how-aavio').click(function(){
        $('html, body').animate({scrollTop:1450}, 'slow');
        $('.top-header_nav').removeClass('visible');
    });
	$('#who-aavio').click(function(){
        $('html, body').animate({scrollTop:2716}, 'slow');
        $('.top-header_nav').removeClass('visible');
    });
	$('#our-legacy').click(function(){
        $('html, body').animate({scrollTop:3190}, 'slow');
        $('.top-header_nav').removeClass('visible');
    });	
	$('#aavio-team').click(function(){
        $('html, body').animate({scrollTop:3725}, 'slow');
        $('.top-header_nav').removeClass('visible');
    });	
	$('#contact').click(function(){
        $('html, body').animate({scrollTop:5335}, 'slow');
        $('.top-header_nav').removeClass('visible');
    });	
});
