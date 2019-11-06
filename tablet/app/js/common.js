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
});
