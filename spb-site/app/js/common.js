$(document).ready(function () {

    // $('.time-stats li:nth-child(3)').addClass('active')
  // $('.top100').addClass('in-view');
  // $('.popular').addClass('hide');
  // $('.recent').addClass('hide');
  // $('#top-people').css({
  //   "font-family": "Mweather-b"
  // })
  var $select = $('#select2-id'), $message = $('#message');
  $select.select2();
  
  $select.on('change', function () {
    $message.html('I heard a global change event');
  });
  
  $('#change-trigger').on('click', function () {
    // Reset Message
    $message.html('&nbsp;');
    $select.val('two').trigger('change');
  });
  
  $('#change-select2-trigger').on('click', function () {
    // Reset Message
    $message.html('&nbsp;');
    $select.val('three').trigger('change.select2');
  });

  $('.general-nav li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.profiles > ul').removeClass('in-view').eq($(this).index()).addClass('in-view');
  });

  $('#top-people').click(function() {
    // $('#recent').css({
    //   "font-family": "Mweather"
    // })
    // $('#top-people').css({
    //   "font-family": "Mweather-b"
    // })
    // $('#popular').css({
    //   "font-family": "Mweather"
    // })

    // $('.top100').addClass('in-view');
    // $('.top100').removeClass('hide');
    // $('.popular').removeClass('in-view');
    // $('.popular').addClass('hide');
    // $('.recent').removeClass('in-view');
    // $('.recent').addClass('hide');
  });


  $('#popular').click(function() {
    // $('#top-people').css({
    //   "font-family": "Mweather"
    // })
    // $('#popular').css({
    //   "font-family": "Mweather-b"
    // })
    // $('#recent').css({
    //   "font-family": "Mweather"
    // })
    // $('.top100').removeClass('in-view');
    // $('.popular').removeClass('hide');
    // $('.top100').addClass('hide');
    // $('.popular').addClass('in-view');
    // $('.recent').removeClass('in-view');
    // $('.recent').addClass('hide');
  });


  $('#recent').click(function() {
    // $('#popular').css({
    //   "font-family": "Mweather"
    // })
    // $('#top-people').css({
    //   "font-family": "Mweather"
    // })
    // $('#recent').css({
    //   "font-family": "Mweather-b"
    // })

    // $('.top100').removeClass('in-view');
    // $('.top100').addClass('hide');
    // $('.popular').removeClass('in-view');
    // $('.popular').addClass('hide');
    // $('.recent').removeClass('hide');
    // $('.recent').addClass('in-view');
  });

  $('.general-nav li').click(function() {
    var index = $(this).attr('data-index');

    $('.general-nav .rectangle_gradient').css({
      "transform": "translate3d(" + index + "00%, 0, 0)"
    })
    $('.general-nav .rectangle_gradient').css({
      "transition": ".5s"
    })
  })

});

