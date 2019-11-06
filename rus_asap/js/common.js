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