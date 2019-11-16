$('#credit-card').on('keypress change blur', function () {
    $(this).val(function (index, value) {
        return value.replace(/[^a-z0-9]+/gi, '').replace(/(.{3})/g, '$1-');
    });
});

$('#credit-card').on('copy cut paste', function () {
    setTimeout(function () {
        $('#credit-card').trigger("change");
    });
});

// var cc = myform.cardcode;
// for (var i in ['input', 'change', 'blur', 'keyup']) {
//     cc.addEventListener('input', formatCardCode, false);
// }
// function formatCardCode() {
//     var cardCode = this.value.replace(/[^\d]/g, '').substring(0,16);
//     cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
//     this.value = cardCode;
// }
// // var value;
// // $('.select-custom .input').click(function() {
// //   if ($(this).hasClass('active')) {
// //     $(this).removeClass('active').next('.select-list').slideUp(350);
// //   } else {
// //     $(this).addClass('active').next('.select-list').slideDown(350);
// //   }
  

// //   $('.select-list li').click(function() {
// //     value = $(this).attr('data-option');
// //     $(this).parents('.select-custom').find('.input').removeClass('active').next('.select-list').slideUp(350);
// //     $('form select').find('option[value="' + value + '"]').attr('selected', '').siblings().removeAttr('selected');
// //     $(this).parents('.select-custom').find('.input').html(value);
// //   })
// // })