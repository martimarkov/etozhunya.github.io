var hamburger = document.getElementById('hamburger'),
menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
	hamburger.classList.toggle('active');
	menu.classList.toggle('hidden');
})
if ($(window).width() < 768) {	
	$('.menu').addClass('hidden');	
}
$(function() {

  $('.what').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');

	});
});
// $('.links').onClick() {
// 	$('.menu').addClass('hidden');
// }
