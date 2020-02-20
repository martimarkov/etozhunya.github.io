$( window ).resize(function() {
		var hcut = $('.links').height() - 80;
		console.log(hcut);
	    if ($(window).height() < 620) {
	    	 return $('.cut').shave(150);
	    } else if ($(window).height() < 650) {
	    	return $('.cut').shave(165);
	    } else if ($(window).height() < 680) {
	    	return $('.cut').shave(170);
	    } else if ($(window).height() < 710) {
	    	return $('.cut').shave(180);
	    } else if ($(window).width() < 1490 && $(window).height() > 720) {
	    	return $('.cut').shave(180);
	    } else if ($(window).width() >= 1490 && $(window).height() >= 720) {
	    	return $('.cut').shave(220);
	    } 

	});
$(window).trigger('resize');