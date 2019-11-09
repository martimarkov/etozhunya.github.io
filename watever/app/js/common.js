$(document).ready(function() {
	  $("body").children().each(function() {
	    $(this).html($(this).html().replace(/&#8232;/g," ")); 
	  });

	$(function() {
		var hamburger = document.getElementById('hamburger'),
		menu = document.querySelector('.menu');

		hamburger.addEventListener('click', function() {
			hamburger.classList.toggle('active');
			menu.classList.toggle('hidden');
		})
		if ($(window).width() < 768) {	
			$('.menu').addClass('hidden');
			$('.links').on('click', function() {
				$('.menu').addClass('hidden');
			})
		}


	  $('.what').on('click', function(e) {
	    e.preventDefault();
	    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	});

	  $('.how').on('click', function(e) {
	    e.preventDefault();
	    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	});

	    $('.who').on('click', function(e) {
	      e.preventDefault();
	      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	  });

	    $('.care').on('click', function(e) {
	      e.preventDefault();
	      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
	  });

		$(window).scroll(function(){
			if ($(window).scrollTop() == 0) {
				$('.up').addClass('hide')
			}
			if ($(window).width() > 768) {
				if ($(window).scrollTop() == 0) {
					$('.menu').addClass('toTop');
				}	
			}
			if ($(window).scrollTop() > 5) {
				$('.up').removeClass('hide')
				$('.menu').removeClass('toTop')
			}
			if ($(window).scrollTop() == $(document).height() - $(window).height()) {
				$('.down').addClass('hide');
			} else {
				$('.down').removeClass('hide');
			}
			if ($(window).scrollTop() > 950 && $(window).scrollTop() < 1250)  {
				$('.links').addClass('color');
			} else {
				$('.links').removeClass('color');
			}
			if ($(window).scrollTop() > 2050) {
				$('.links').addClass('color');
			}
			if ($(window).scrollTop() > 2920) {
				$('.links').removeClass('color');
			}
			if ($(window).scrollTop() > 1250 && $(window).scrollTop() < 1550 || $(window).scrollTop() > 2600 && $(window).scrollTop() < 3400)  {
				$('.hoverone').addClass('color');
			} else {
				$('.hoverone').removeClass('color');
			}
			if ($(window).scrollTop() > 600 && $(window).scrollTop() < 950 || $(window).scrollTop() > 2000 && $(window).scrollTop() < 2800)  {
				$('.hovertwo').addClass('color');
			} else {
				$('.hovertwo').removeClass('color');
			}
		});

		var $section = $('section').first();

		$('#scrollWindowDown').click(function(e){
		    e.preventDefault();

		    if ($section.is('section:last')) {
		        return;
		    }

		    $section = $section.next();

		    scroll();
		});

		$('#scrollWindowUp').click(function(e){
		    e.preventDefault();

		    if ($section.is('section:first')) {
		        return;
		    }

		    $section = $section.prev();

		    scroll();
		});

		function scroll() {
		    $('html, body').animate({ scrollTop: ($section.offset().top)},500);    
		}
	});
});
