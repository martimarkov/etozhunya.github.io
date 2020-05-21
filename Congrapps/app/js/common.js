  var hamburger = document.getElementById('hamburger'),
	menu = document.querySelector('.header');
	
	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('active');
		menu.classList.toggle('visible');
	})	

		var scrolled;
			$(window).scroll(function(){
			  scrolled = $(this).scrollTop();	
		  		if (scrolled > 100) {
			  		$('.header').addClass('fixed');
		 		} else {
		 			$('.header').removeClass('fixed');
		 		}
		 	});
