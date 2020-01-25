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
	 	$('.visible-phone').on('click', function(e) {
		    e.preventDefault();
		    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top},800, 'linear');
		});
		if ($(window).width() < 768) {  
		  $('.href').on('click', function() {
		    $('.menu').addClass('hidden');
		    $('#hamburger').removeClass('active');
		  })
		}
	var i = 0;
	setInterval(function() {
		if ($($('.wrapper li')[i]).hasClass('white')) {
			$($('.wrapper li')[i]).removeClass('white')
		} else {
			$($('.wrapper li')[i]).addClass('white');
		}

		if (i == 2) {
			// setTimeout(function(){
				i = 0;

			// },1000)
			
		} else {
			i++;
		}
	},2000)

	$('.cut').shave(180);
	if ($(window).width() < 768) {	
		$('.cut').shave(190);
	}
});





