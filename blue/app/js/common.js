$(function() {
	var hamburger = document.getElementById('menu_click'),
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
		    $('#menu_click').removeClass('active');
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

	$(window).trigger('resize');
});

Modernizr.on('webp', function (result) {
  // `result == Modernizr.webp`
  console.log(result);  // either `true` or `false`
  if (result) {
    document.getElementById('blue').src = document.getElementById('blue').getAttribute('data-webp');
  }
  else {
  	 alert('jeka tops');
    document.getElementById('blue').src = document.getElementById('blue').getAttribute('data-jpg');
  }
});

// Modernizr.on('webp', function (result) {
//   // `result == Modernizr.webp`
//   console.log(result);  // either `true` or `false`
//   if (result) {
//    alert('jeka top');
//   }
//   else {
//    alert('jeka top4ik!');
//   }
// });

// var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
// var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
// var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
// var is_safari = navigator.userAgent.indexOf("Safari") > -1;
// var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
// if ((is_chrome)&&(is_safari)) { is_safari = false; }
// if ((is_chrome)&&(is_opera)) { is_chrome = false; }
// if (is_safari) { alert('Safari'); }
// var imageUrl = document.getElementById("blue").getAttribute("data-src");

// $(document).ready(function() {
//   var ua = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),
//       browser;
//   var imageUrl = document.getElementById("picture").getAttribute("data-src");    
//   if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
    
//   }
//   else {
//    $('.menu').addClass('lol2');
//   }
// });