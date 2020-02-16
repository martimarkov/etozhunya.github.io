$( window ).resize(function() {
		var hcut = $('.links').height() - 80;
		console.log(hcut);
	  $('.cut').shave(hcut);
	  if ($(window).width() < 768) {	
	  	$('.cut').shave(120);
	  }
	});
$(window).trigger('resize');