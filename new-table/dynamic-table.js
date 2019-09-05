$(window).resize(function() {
	$('.table-mod').each(function(){
		scaleTable(this)
	})
})
$(window).trigger('resize')
function scaleTable(table) {
	var $table = $(table),
		$schedule = $table.find('#schedule');

	var w = window.innerWidth,
		wTable = $schedule[0].scrollWidth,
		hTable = $schedule[0].clientHeight,
		percentage = (w - 33) / wTable,
		hContainer = hTable * percentage;
		

	if ($(window).width() < 768) {
		$schedule.css({
			"transform": "scale(" + percentage + ")"
		})
		$table.css({
			"height": hContainer + "px"
		})
	} else {
		$schedule.css({
			"transform": "scale(1)"
		})
		$table.css({
			"height": "auto"
		})
	}
}
