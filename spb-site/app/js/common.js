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
});