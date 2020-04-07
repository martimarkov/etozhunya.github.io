window.onload = function(){
  crear_select();
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

 
var li = new Array();

function crear_select() {
    var div_cont_select = document.querySelectorAll("[data-mate-select='active']");
    var select_ = '';
    for (var e = 0; e < div_cont_select.length; e++) {
        div_cont_select[e].setAttribute('data-indx-select', e);
        div_cont_select[e].setAttribute('data-selec-open', 'false');
        var ul_cont = document.querySelectorAll("[data-indx-select='" + e + "'] > .cont_list_select_mate > ul");
        select_ = document.querySelectorAll("[data-indx-select='" + e + "'] >select")[0];
        if (isMobileDevice()) {
            // select_.addEventListener('change', function() {
                // _select_option(select_.selectedIndex, e);
            // });
        }
        var select_optiones = select_.options;
        document.querySelectorAll("[data-indx-select='" + e + "']  > .selecionado_opcion ")[0].setAttribute('data-n-select', e);
        document.querySelectorAll("[data-indx-select='" + e + "']  > .icon_select_mate ")[0].setAttribute('data-n-select', e);
        for (var i = 0; i < select_optiones.length; i++) {
            li[i] = document.createElement('li');
            if (select_optiones[i].selected == true || select_.value == select_optiones[i].innerHTML) {
                li[i].className = 'active';
                document.querySelector("[data-indx-select='" + e + "']  > .selecionado_opcion ").innerHTML = select_optiones[i].innerHTML;
            };
            li[i].setAttribute('data-index', i);
            li[i].setAttribute('data-selec-index', e);
            // funcion click al selecionar 
            li[i].addEventListener('click', function() {
                _select_option(this.getAttribute('data-index'), this.getAttribute('data-selec-index'));
            });

            li[i].innerHTML = select_optiones[i].innerHTML;
            ul_cont[0].appendChild(li[i]);

        }; // Fin For select_optiones
    }; // fin for divs_cont_select
} // Fin Function 



var cont_slc = 0;

function open_select(idx) {
    var idx1 = idx.getAttribute('data-n-select');
    var ul_cont_li = document.querySelectorAll("[data-indx-select='" + idx1 + "'] .cont_select_int > li");
    var hg = 0;
    var slect_open = document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].getAttribute('data-selec-open');
    var slect_element_open = document.querySelectorAll("[data-indx-select='" + idx1 + "'] select")[0];
        for (var i = 0; i < ul_cont_li.length; i++) {
            hg += ul_cont_li[i].offsetHeight;
        };
        if (slect_open == 'false') {
            document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'true');
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = hg + "px";
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(180deg)';
        } else {
            document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'false');
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
            document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
        }
    // }

} // fin function open_select

function salir_select(indx) {
    var select_ = document.querySelectorAll("[data-indx-select='" + indx + "'] > select")[0];
    document.querySelectorAll("[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
    document.querySelector("[data-indx-select='" + indx + "'] > .icon_select_mate").style.transform = 'rotate(0deg)';
    document.querySelectorAll("[data-indx-select='" + indx + "']")[0].setAttribute('data-selec-open', 'false');
}


function _select_option(indx, selc) {
    if (isMobileDevice()) {
        // selc = selc - 1;
    }
    var select_ = document.querySelectorAll("[data-indx-select='" + selc + "'] > select")[0];

    var li_s = document.querySelectorAll("[data-indx-select='" + selc + "'] .cont_select_int > li");
    var p_act = document.querySelectorAll("[data-indx-select='" + selc + "'] > .selecionado_opcion")[0].innerHTML = li_s[indx].innerHTML;
    var select_optiones = document.querySelectorAll("[data-indx-select='" + selc + "'] > select > option");
    for (var i = 0; i < li_s.length; i++) {
        if (li_s[i].className == 'active') {
            li_s[i].className = '';
        };
        li_s[indx].className = 'active';

    };
    select_optiones[indx].selected = true;
    select_.selectedIndex = indx;
    select_.onchange();
    salir_select(selc);
}

$('.google_form').submit(function(e) {
    e.preventDefault();
    formSubmit($(this));
    $('.submit_bottom').addClass('active');
    $(this).children('input').val('')
    alert("Thank you for joining Tablet's mailing list! We will be in touch.");
});
$(function() {
	var hamburger = document.getElementById('hamburger'),
	menu = document.querySelector('.menu');

	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('active');
		menu.classList.toggle('hidden');
	})
	if ($(window).width() < 768) {	
		$('.menu').addClass('hidden');
		$('.links').on('click', function() {
			$('.menu').addClass('hidden');
		})
	}
  $('.home').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
});

  $('.about').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100}, 800, 'linear');
});

  $('.order').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100}, 800, 'linear');
  });

    $('.FAQ').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 800, 'linear');
  });
  $('.FAQ .title').click(function(){
    $(this).find('.rotate').toggleClass('active');
    if (!($(this).next('.FAQ .animated').hasClass('active'))) {
      $(this).next('.FAQ .animated').slideDown(300).addClass('active')
    } else {
      $(this).next('.FAQ .animated').slideUp(300).removeClass('active')
    }
    
  })
    $('.href').click( function() {
         $(this).parent().siblings().children().removeClass('clicked');
         $(this).addClass('clicked');
     });
  if ($(window).width() < 768) {  
    $('.href').on('click', function() {
      $('.menu').addClass('hidden');
      $('#hamburger').removeClass('active');
    })
  }
});
$('#postal-code').on('keypress change blur', function () {
    $(this).val(function (index, value) {
        return value.replace(/[^a-z0-9]+/gi, '').replace(/(.{3})/g, '$1 ').trim();
    });
});

// $('#postal-code').on('copy cut paste', function () {
//     setTimeout(function () {
//         $('#postal-code').trigger("change");
//     });
// });
$('.google_form').submit(function(e) {
    e.preventDefault();
    formSubmit($(this));
   });



function formSubmit(form) {
    var $form = form,
       url = 'https://script.google.com/macros/s/AKfycbzeaYhRQDvUTDuqMT4fPss9Y8lGbwOp5fS75Pbtphr02x0H25Wl/exec';
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serialize(),
        success: function(response) {

        }
    }) 
}

$('#form').submit(function(e){
    e.preventDefault();

    var order = {
        "first_name": $('#first_name').val(),
        "last_name": $('#last_name').val(),
        "street_address": $('#address').val(),
        "city": $('#city').val(),
        "province": $('#province').val(),
        "postal_code": $('#postal-code').val().toUpperCase(),
        "phone_number":$('#tel-code').val(),
        "email": $('#emailcode').val(),
        "notes": $('#textarea').val(),
        "s3_url": "http://34.229.240.68:8001/orders",
        "status": "awaiting"
    }

    $.ajax({
        url: 'http://34.229.240.68:8001/orders',
        method: "POST",
        dataType: "json",
        data: JSON.stringify(order),
        success: function(response) {
            $('#form').addClass('active');
            $('.labels label .input').val('');

            alert('Your form was successfully submitted!')
        }
    }) 
})

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("INPUT");

    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Please fill in this field");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
        document.getElementById('emailcode').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Please enter a valid email address");
            }
        };
        document.getElementById('emailcode').oninput = function(e) {
            e.target.setCustomValidity("");
        };

        document.getElementById('tel-code').oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Please enter a valid phone number");
            }
        };
        document.getElementById('tel-code').oninput = function(e) {
            e.target.setCustomValidity("");
        };

        var letters;


       $('.phone').mask('(000) 000-0000');
        document.getElementById('postal-code').oninvalid = function(e) {
            e.target.setCustomValidity("");

            letters = $(this).val().slice(0,3).toUpperCase();
            if (!e.target.validity.valid) {
              e.target.setCustomValidity("");
              e.target.setCustomValidity("Please enter a valid postal code");
              console.log('polnaya huynya');
            } else if (!(letters == 'M6A' || letters == 'M6B' || letters == 'M6E')) {
              e.target.setCustomValidity("We currently do not deliver in that area. For a list of serviceable areas, please see our Help Center");
              console.log('mi ne dostavlyaem');
            } else {
              e.target.validity.valid
            }
        };
        document.getElementById('postal-code').oninput = function(e) {
          e.target.setCustomValidity("");

          letters = $(this).val().slice(0,3).toUpperCase();
          if (!e.target.validity.valid) {
            e.target.setCustomValidity("");
            e.target.setCustomValidity("Please enter a valid postal code");
            console.log('polnaya huynya');
          } else if (!(letters == 'M6A' || letters == 'M6B' || letters == 'M6E')) {
            e.target.setCustomValidity("We currently do not deliver in that area. For a list of serviceable areas, please see our Help Center");
            console.log('mi ne dostavlyaem');
          } else if (e.target.validity.valid) {
            console.log('uspex');
          }
        };
})
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
            $('#blah').addClass('visible');
            alert('Upload has been successful.');
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});

