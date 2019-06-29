$(document).ready(function () {
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

  $('#top-people').click(function() {
    $('.top100').addClass('in-view');
    $('.top100').removeClass('hide');
  });
  $('#popular').click(function() {
    $('.top100').removeClass('in-view');
    $('.top100').addClass('hide');
  });
});