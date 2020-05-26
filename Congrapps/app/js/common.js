  var hamburger = document.getElementById('hamburger'),
	menu = document.querySelector('.header');
	
	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('active');
		// hamburger.classList.removeClass('');
		menu.classList.toggle('visible');
	})	

	if ($('body').hasClass('check')) {
		var scrolled;
			$(window).scroll(function(){
			  scrolled = $(this).scrollTop();	
		  		if (scrolled > 100) {
			  		$('.header').addClass('fixed');
		 		} else {
		 			$('.header').removeClass('fixed');
		 		}
		 		if (scrolled > 10) {
		 			$('.mob-only').addClass('visible');	
		 		} else {
		 			$('.mob-only').removeClass('visible');	
		 		}
		 		if (scrolled < 10) {
		 			$('.hamburger_button').addClass('color')
		 			$('.hamburger').addClass('close')
		 		} else {
		 			$('.hamburger').removeClass('close')
		 			$('.hamburger_button').removeClass('color')
		 		}
		 		if (scrolled === 0) {
		 			$('.hamburger').addClass('close'),
		 			$('.hamburger_button').addClass('color'),
		 			$('.mob-only').removeClass('visible');	
		 		}
		 		if ($(window).scrollTop() > 250) {
		 			console.log('ssa')
		 			var lastScrollTop = 0;
		 			$(window).scroll(function(event){
		 			   var st = $(this).scrollTop();
		 			   if (st > lastScrollTop){
		 			   		// $('.hamburger').addClass('hide');
		 			   		
		 			   } else {
		 			    	$('.hamburger').removeClass('hide');
		 			   }
		 			   lastScrollTop = st;
		 			});
		 		} 
		 	
		 	});
	}	

	
		 	

		

