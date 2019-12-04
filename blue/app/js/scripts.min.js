
setInterval(function() {

	for ( i = 0; i < $('.wrapper li').length; i++) {	
		if ($($('.wrapper li')[i]).hasClass('white')) {
			$($('.wrapper li')[i]).removeClass('white')
		} else {
			$($('.wrapper li')[i]).addClass('white');
		}
		if (i = $('.wrapper li').length; i++) {
			setTimeout(function() {
				i = 0
			}, 2000)
		}
	}
},1500)

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




