$(document).ready(function(){

   

   $('h1, .bold, .airplane-h1, .plane_header').addClass('active')

    var scrolled;
    $(window).scroll(function(){
      scrolled = $(this).scrollTop();
      

      if (scrolled + $(this).height() - 200 > 
          $('.media-content').offset().top) {

        $('.media-content li').addClass('active')
      }

        if (scrolled + $(this).height() - 200 > 
            $('.aavio-works .text-content').offset().top) {

          $('.aavio-works .text-content').addClass('active')
        }

        if (scrolled + $(this).height() - 200 > 
            $('.text-content2 h3').offset().top) {

          $('.text-content2 h3').addClass('active')
        }
    })


    
    $(window).trigger('scroll');


  if ($(window).width() < 768) {

  	$('.advisors-team').slick({
  	  	// infinite: true,
 		centerMode: true,
    	slidesToShow: 1,
    	centerPadding: "80px"
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


	$('a[href^="#"]').click(function() {
      // e.preventDefault();
      var id = $(this).attr('href');

      $('html, body').animate({
        scrollTop: $(id).offset().top - 50
      }, 1500);

      $('.top-header_nav').removeClass('visible');
  });

});
