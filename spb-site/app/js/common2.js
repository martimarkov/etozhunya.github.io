$(document).ready(function () {

	$('.time-stats li').click(function() {
	  $(this).addClass('active').siblings().removeClass('active');
	});

});