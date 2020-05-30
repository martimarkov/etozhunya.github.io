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
		  		if (scrolled > 10) {
			  		$('.header').addClass('fixed');
		 		} else {
		 			$('.header').removeClass('fixed');
		 		}
		 		if (scrolled > 1) {
		 			$('.mob-only').addClass('visible');	
		 		} else {
		 			$('.mob-only').removeClass('visible');	
		 		}
		 		if (scrolled < 1) {
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

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	    anchor.addEventListener('click', function (e) {
	        e.preventDefault();

	        document.querySelector(this.getAttribute('href')).scrollIntoView({
	            behavior: 'smooth'
	        });
	    });
	});	

	$('.links2 li').click(function() {
	  $(this).addClass('active').siblings().removeClass('active');
	  // $('.profiles > ul').removeClass('in-view').eq($(this).index()).addClass('in-view');
	});

	$('.sa').click(function() {
		$('.title-1').addClass('visible');
		$('.title-2').removeClass('visible');
		$('.title-3').removeClass('visible');
		$('.title-4').removeClass('visible');
	});
	$('.qf').click(function() {
		$('.title-2').addClass('visible');
		$('.title-1').removeClass('visible');
		$('.title-3').removeClass('visible');
		$('.title-4').removeClass('visible');
	});
	$('.cp').click(function() {
		$('.title-3').addClass('visible');
		$('.title-2').removeClass('visible');
		$('.title-1').removeClass('visible');
		$('.title-4').removeClass('visible');
	});
	$('.disc').click(function() {
		$('.title-4').addClass('visible');
		$('.title-2').removeClass('visible');
		$('.title-3').removeClass('visible');
		$('.title-1').removeClass('visible');
	});

	if ($('.sa').hasClass('active')) {
		console.log('s')
	}

		
	

     
		

