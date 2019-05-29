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

});
