  var hamburger = document.getElementById('hamburger'),
	menu = document.querySelector('.header');
	
	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('active');
		menu.classList.toggle('visible');
	})	

