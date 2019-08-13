
$(window).resize(function() {
	var w = window.innerWidth,
		wTable = document.getElementById("schedule").scrollWidth,
		hTable = document.getElementById("schedule").clientHeight,
		percentage = (w - 33) / wTable,
		hContainer = hTable * percentage;


	if ($(window).width() < 768) {
		$('#schedule').css({
			"transform": "scale(" + percentage + ")"
		})
		$('.table-responsive').css({
			"height": hContainer + "px"
		})
	} else {
		$('#schedule').css({
			"transform": "scale(1)"
		})
		$('.table-responsive').css({
			"height": "auto"
		})
	}
}) 

$(window).trigger('resize')

// #schedule - table.

