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
});
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

// В нем 
// for(i=0; i<$(ul).length; i++) {
// if $(li[i]) has class
//   $(li[i]).removeclass
// else
//  addclass 

// if i = $(ul).length 
//   setTimeout(f(){
//     i = 0
//   }, 2000)
// }






// // var itemsArray = $('.wrapper li')


// // // setTimeout(function iter(i) {
// //   itemsArray[i].classList.add('white');
// //   if(++i < itemsArray.length) {
// //   	setTimeout(iter, 1 * 1000, i);	
// //   } 
// // // }, 0, 0);




