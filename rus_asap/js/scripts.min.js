$(document).ready(function() {
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


    var scrolled;
    $(window).scroll(function(){
      scrolled = $(this).scrollTop();
      console.log(scrolled)
  		if ($(window).scrollTop() > 860) {
  			$('.header-fixed, .header-fixed_mob').addClass('active')
  		}
  		if ($(window).scrollTop() < 860) {
  			$('.header-fixed, .header-fixed_mob').removeClass('active')
  		}
      if ($('.body-wrap').length) {
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
      }
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
    $('.blur').removeClass('active');
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
// $('.header_button_click').on('click', function(){
//     $('.pop_feedback').addClass('active');
//     $('.blur').addClass('active');
// });

    $('select').select2();
    if ($(window).width() < 769 ) {
      $('.header-fixed, .media-part, .first, .teacher .title-info, .signature, .second, .first-p, .second-p, .map .title-info, .map .smaller, .map a, .university .smaller, .university .title-info, .university .bottom, .one, .two, .paper, .paper .smaller, .paper .bottom, .paper .title-info, .paper h3, .statistic h3, .statistic .title-info, .statistic span, .button1, .button2, .statistic, .study h3, .study .title-info, .study .smaller').addClass('active');
      $('.active').css({"transition": "none"});
    }
    $('.header_button_click').on('click', function(){
        // $('.pop_feedback').addClass('active');

        Swal.fire({
          // title: '<strong>HTML <u>example</u></strong>',
          html:
            '<div class="pop_feedback active"><img src="img/krest.png" class="close" alt=""><div class="yandex_wrapper_map"><iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A27870f22ed87819bc1a98037e91a118c4e8669eff89aeae7d22b822a8d857e22&amp;source=constructor"  frameborder="0"></iframe></div><form class="header_wrapper_form"><input class="input" type="text" placeholder="Ваше имя"><input class="input child" type="text" placeholder="Имя ребенка"><input class="input" type="email" placeholder="Email"><input class="input" type="tel" placeholder="Телефон"><textarea name="Сообщение" cols="40" rows="5" placeholder="Сообщение"></textarea><div class="select select-del"><select name="" id="" required="" class="web-select"><option value="Москва">Москва</option><option value="Санкт-петербург">Санкт-петербург</option><option value="Ростов-на-Дону">Ростов-на-Дону</option><option value="Нижний Новгород">Нижний Новгород</option></select></div><div class="select select-del"><select name="" id="" class="web-select><option value="Белинского 32, «Pro-город»">Белинского 32, «Pro-город»</option><option value="ст. м. Двигатей Революции">ст. м. Двигатей Революции</option><option value="ст. м. Горьковская">ст. м. Горьковская</option><option value="ст. м. Чкаловская">ст. м. Чкаловская</option><option value="ст. м. Пролетарская">ст. м. Пролетарская</option></select></div><input type="checkbox" id="checkbox" class="check" checked=""><label for="checkbox">Я принимаю условия <a href="#">cоглашения об обработке </a>персональных данных</label><a class="header_form_button">Записаться на занятие</a></form><div class="pop_wrapper_mob"><div class="wrap"><h4>Спасибо!</h4><span class="mob_span">Мы перезвоним вам, чтобы уточнить удобное время и интересующий вас предмет, и ответим на все вопросы</span><span class="desktop_span">Мы свяжемся с вами в ближайшее время</span></div></div></div>',
          showCloseButton: false,
          showCancelButton: false,
          focusConfirm: false,
          onOpen: function(){
            $('.pop_feedback select').select2();
          }
        })

    }); 
    $('body').on('click', '.header_form_button', function() {
       Swal.fire({
         html:
           '<div class="wrap"><img src="img/krest.png" class="close" alt=""><h4>Спасибо!</h4><span class="mob_span">Мы перезвоним вам, чтобы уточнить удобное время и интересующий вас предмет, и ответим на все вопросы</span>',
         showCloseButton: false,
         showCancelButton: false,
         focusConfirm: false,
         onOpen: function(){
           // $('.pop_feedback select').select2();
         }
       })
    });

    $('#write_form').on('click', function(e){
      e.preventDefault();
        Swal.fire({
          // title: '<strong>HTML <u>example</u></strong>',
          html:
            '<div class="pop_feedback message"><img src="img/krest.png" class="close" alt=""><form class="header_wrapper_form"><input class="input" type="text" placeholder="Ваше имя"><input class="input child" type="text" placeholder="Имя ребенка"><input class="input" type="email" placeholder="Email"><input class="input" type="tel" placeholder="Телефон"><textarea name="Сообщение" cols="40" rows="5" placeholder="Сообщение"></textarea><div class="select select-del"><select name="" id="" required="" class="web-select"><option value="Москва">Москва</option><option value="Санкт-петербург">Санкт-петербург</option><option value="Ростов-на-Дону">Ростов-на-Дону</option><option value="Нижний Новгород">Нижний Новгород</option></select></div><div class="select select-del"><select name="" id="" class="web-select><option value="Белинского 32, «Pro-город»">Белинского 32, «Pro-город»</option><option value="ст. м. Двигатей Революции">ст. м. Двигатей Революции</option><option value="ст. м. Горьковская">ст. м. Горьковская</option><option value="ст. м. Чкаловская">ст. м. Чкаловская</option><option value="ст. м. Пролетарская">ст. м. Пролетарская</option></select></div><input type="checkbox" id="checkbox" class="check" id="checkbox" checked=""><label for="checkbox">Я принимаю условия <a href="#">cоглашения об обработке </a>персональных данных</label><a class="header_form_button">Записаться на занятие</a></form><div class="pop_wrapper_mob"></div></div>',
          showCloseButton: false,
          showCancelButton: false,
          focusConfirm: false,
          onOpen: function(){
            $('.pop_feedback select').select2();
            $('.swal2-content').css({'width': 'auto'})
          }
        })
    })
    $('body').on('click', '.pop_feedback.message .header_form_button', function(e) {
       e.preventDefault();
        Swal.fire({
          html:
            '<div class="wrap"><h4>Спасибо!</h4><img src="img/krest.png" class="close" alt=""><span class="desktop_span">Мы свяжемся с вами в ближайшее время</span></div>',
          showCloseButton: false,
          showCancelButton: false,
          focusConfirm: false,
        })
      });

    $('body').on('click', '.close', function(){
      console.log('hh')
     Swal.close()
    });
});


