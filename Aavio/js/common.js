var hamburger = document.getElementById('hamburger'),
	menu = document.querySelector('.top-header_nav');

// hamburger.onclick = function(){
// 	hamburger.classList.toggle('visible')
// }

hamburger.addEventListener('click', function() {
	hamburger.classList.toggle('active');
	menu.classList.toggle('visible');
})

