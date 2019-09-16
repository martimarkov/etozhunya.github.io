var value;
$('.select-custom .input').click(function() {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active').next('.select-list').slideUp(350);
  } else {
    $(this).addClass('active').next('.select-list').slideDown(350);
  }
  

  $('.select-list li').click(function() {
    value = $(this).attr('data-option');
    $(this).parents('.select-custom').find('.input').removeClass('active').next('.select-list').slideUp(350);
    $('form select').find('option[value="' + value + '"]').attr('selected', '').siblings().removeAttr('selected');
    $(this).parents('.select-custom').find('.input').html(value);
  })
})

$(function() {
  $('.ERP').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
  });
});
$(document).ready(function() {

    var scrolled;
    $(window).scroll(function(){
      scrolled = $(this).scrollTop();
		if ($(window).scrollTop() > 860) {
			$('.header-fixed, .header-fixed_mob').addClass('active')
		}
		if ($(window).scrollTop() < 860) {
			$('.header-fixed, .header-fixed_mob').removeClass('active')
		}
      if (scrolled + $(this).height() / 2 > 
          $('.teacher').offset().top) {

        $('.media-part, .first, .teacher .title-info, .signature, .second').addClass('active')
      }
      if (scrolled + $(this).height() / 2 > 
          $('.map').offset().top) {

        $('.first-p, .second-p, .map .title-info, .map .smaller, .map a').addClass('active')
      }
      if (scrolled + $(this).height() / 2 > 
          $('.university').offset().top) {

        $('.university .smaller, .university .title-info, .university .bottom, .one, .two').addClass('active')
      }
      if (scrolled + $(this).height() / 2 > 
          $('.paper').offset().top) {

        $('.paper, .paper .smaller, .paper .bottom, .paper .title-info, .paper h3').addClass('active')
      }
      if (scrolled + $(this).height() / 2 > 
          $('.statistic').offset().top) {

        $('.statistic h3, .statistic .title-info, .statistic span, .button1, .button2, .statistic').addClass('active')
      }
      if (scrolled + $(this).height() / 2 > 
          $('.study').offset().top) {

        $('.study h3, .study .title-info, .study .smaller').addClass('active')
      }
    })
})
var selector = '.form_button';
if ($(window).width() < 1025) {
  $('.header_form_button').on('click', function(){
    $('.pop_wrapper_mob').removeClass('hide')
      $('.pop_wrapper_mob').addClass('ipad_active');
  });

}
$(selector).on('click', function(){
    $('.pop_wrapper').addClass('active');
    $('.form_button').addClass('deleted');
});
$('.button_click').on('click', function(){
    $('.pop_wrapper_mob').addClass('active');
});
$('.close').on('click', function(){
	$('.pop_wrapper_mob').removeClass('active');
	$('.pop_feedback').removeClass('active');
    $('.pop_feedback').addClass('hide');
    $('.pop_wrapper_mob').addClass('hide');

});

$('.header_form_button, #write').on('click', function(){
	$('.pop_wrapper_mob').removeClass('hide')
    $('.pop_wrapper_mob').addClass('active');
});
$('.form_button, .header_form_button, .header_button_click, #write, #write_form').click(function(e) {
	e.preventDefault();
})
$('.header_button_click, #write_form').on('click', function(){
    $('.pop_feedback').addClass('active');
});









// $(window).scroll(function() {
// 	if ($(window).width() > 1025) {
// 		if ($(window).scrollTop() > 860) {
// 			$('.header-fixed').addClass('active')
// 		}
// 		if ($(window).scrollTop() < 860) {
// 			$('.header-fixed').removeClass('active')
// 		}
// 		if ($(window).scrollTop() > 1300) {
// 			$('.media-part, .first, .teacher .title-info, .signature, .second').addClass('active')
// 		}
// 		if ($(window).scrollTop() > 1990) {
// 			$('.first-p, .second-p, .map .title-info, .map .smaller').addClass('active');
// 		}
// 		if ($(window).scrollTop() > 2700 ) {
// 			$('.university .smaller, .university .title-info, .university .bottom, .one, .two').addClass('active');
// 		}
// 		if ($(window).scrollTop() > 4800 ) {
// 			$('.paper, .paper .smaller, .paper .bottom, .paper .title-info, .paper h3').addClass('active');
// 		}
// 		if ($(window).scrollTop() > 5600 ) {
// 			$('.statistic h3, .statistic .title-info, .statistic p, .button1, .button2, .statistic').addClass('active');
// 		}
// 		if ($(window).scrollTop() > 6400 ) {
// 			$('.study h3, .study .title-info, .study .smaller').addClass('active')	
// 		}
// 	}
// })
// $(document).scroll(function() {
//     console.log($(document).scrollTop());
// })
