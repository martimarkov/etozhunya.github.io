var hamburger = document.getElementById('hamburger'),
menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
	hamburger.classList.toggle('active');
	menu.classList.toggle('hidden');
})
if ($(window).width() < 768) {	
	$('.menu').addClass('hidden');	
}
