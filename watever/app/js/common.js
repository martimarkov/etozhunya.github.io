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
  
  $('.up').on('click', function() {
  	$('html, body').animate({ scrollTop:0}, 400, 'linear');
 })

  $('.down').on('click', function() {
  	$('html, body').animate({ scrollTop:$(document).height() - $(window).height()}, 400, 'linear');
  })

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
		if ($(window).scrollTop() > 950) {
			$('.links, .hover').addClass('color');
		} else {
			$('.links, .hover').removeClass('color');
		}
		if ($(window).scrollTop() > 2920) {
			$('.links, .hover').removeClass('color');
		}
		console.log($(document).height() - $(window).height())
		console.log($(window).scrollTop())
	});
});
