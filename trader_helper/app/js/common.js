$(window).scroll(function() {
	if ($(window).scrollTop() > 860) {
		$('.header-fixed').addClass('active')
	}
	if ($(window).scrollTop() < 860) {
		$('.header-fixed').removeClass('active')
	}
})
