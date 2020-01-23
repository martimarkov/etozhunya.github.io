//Your JQuery Code Here

 $(document).ready(function(){

    // VALIDATES AND SUBMITS THE CONTACT FORM FOR RENTALS
    $('form#contactform-rental').validate({
        submitHandler: function(form,event){
            $.ajax({
                type: "POST",
                url: "/submit.cfm",
                data: $('form#contactform-rental').serialize(),
                dataType: "text",
                success: function (response) {
                    response = $.trim(response);

                    if(response === "success") {
                        // some sites re-direct to a thank you page
                        window.location.href = '/thanks-you-rentals';
                    } else {
                        $("div.g-recaptcha-error").html("<font color='red'>You must complete the reCAPTCHA</font>");
                    }
                }
            });

            return false;
        }


    });

    // VALIDATES AND SUBMITS THE CONTACT FORM FOR RENTALS
    $('form#contactform-pm').validate({
        submitHandler: function(form,event){
            $.ajax({
                type: "POST",
                url: "/submit.cfm",
                data: $('form#contactform-pm').serialize(),
                dataType: "text",
                success: function (response) {
                    response = $.trim(response);

                    if(response === "success") {
                        // some sites re-direct to a thank you page
                        window.location.href = '/thanks-property-management';
                        // alert('probably need a redirect right here');
                    } else {
                        $("div.g-recaptcha-error").html("<font color='red'>You must complete the reCAPTCHA</font>");
                    }
                }
            });

            return false;
        }
    });

    // VALIDATES AND SUBMITS THE CONTACT FORM FOR SALES
    $('form#contactform-sales').validate({
        submitHandler: function(form,event){
            $.ajax({
                type: "POST",
                url: "/submit.cfm",
                data: $('form#contactform-sales').serialize(),
                dataType: "text",
                success: function (response) {
                    response = $.trim(response);

                    if(response === "success") {
                        // some sites re-direct to a thank you page
                        window.location.href = '/thank-you-sales';
                    } else {
                        $("div.g-recaptcha-error").html("<font color='red'>You must complete the reCAPTCHA</font>");
                    }
                }
            });

            return false;
        }
    });

    // VALIDATES AND SUBMITS THE 'SEND TO A FRIEND' FORM ON THE PROPERTY DETAIL PAGE
    $('form#requestMoreInfoForm').validate({
        submitHandler: function(form){
            $.ajax({
                type: "POST",
                url: "/booking/_submit.cfm",
                data: $('form#requestMoreInfoForm').serialize(),
                dataType: "text",
                 success: function (response) {
                    response = $.trim(response);

                    if(response === "success") {
                        $('form#requestMoreInfoForm').hide();
                        $('#propertyContactFormMSG').html('Thanks! Your request has been submitted.');
                    } else {
                        $("div.g-recaptcha-error").html("<font color='red'>You must complete the reCAPTCHA</font>");
                    }
                }
            });

            return false;
        }
    });

	 $('#contactform-sales').validate();
	 $('#contactform-rental').validate();
	 $('#newsletterform').validate();


	 // if($('#arrival').length){$('#arrival').datepicker();}
	 //Your JQuery Code Here

	  //  if ($('#start-date').length) {
    // $( "#start-date" ).datepicker({
    //     minDate: '+1d',
    //     onSelect: function( selectedDate ) {

    //         var newDate = $(this).datepicker('getDate');
    //         newDate.setDate(newDate.getDate()+7);

    //         $('#end-date').datepicker('setDate',newDate);
    //         $('#end-date').datepicker('option','minDate',selectedDate);

    //         setTimeout(function(){
    //         $( "#end-date" ).datepicker('show');
    //         }, 16);
    //     }
    // });

    // $( "#end-date" ).datepicker({
    //     minDate: '+1d'
    // });
//}

//  NAVIGATION
// ------------------------------

    if( $(window).width() <= 992) {
        $('#mobileToggle').click(function(e){
            $('body').toggleClass('active');
            e.preventDefault();
        });
        $('.closeNav').click(function(){
            $('body').removeClass('active');
        });
        //Toggle Mobile Sub Nav
        $('ul.nav-main li a + i').click(function(){
            $(this).toggleClass('fa-chevron-down').toggleClass('fa-chevron-up').next('ul').slideToggle(200);
        });
    }
    $('ul.nav-main li:has(ul)').addClass('sub');
    $('ul.nav-main li.sub a').click(function(){
        $(this).parent().toggleClass('open');
    });

    //Touch Devices Hover and then Tap
    $('a.taphover').on("touchstart", function (e) {
      var link = $(this); //preselect the link
      if (link.hasClass('hover')) {
        return true;
      } else {
        link.addClass("hover");
        $('a.taphover').not(this).removeClass("hover");
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
      }
    });
    $(window).on('resize',function(){
	    if ($(window).width() <= 992) {
	      $('.banner.int > .quick-search').insertAfter('.banner.int');
	    } else {

	    }
	  }).resize();


  // OWL CAROUSEL
  if ($('.owl-carousel').length) {
    // HP BANNER SLIDER
    if ($('.owl-carousel.reviews-carousel').length) {
      $('.owl-carousel.reviews-carousel').owlCarousel({
        items: 1, autoplay: true, autoplayTimeout: 5000, autoplayHoverPause: true,
        smartSpeed: 1000, lazyLoad: true, loop: true,
        margin: 10, nav: true, dots: false, autoHeight: true
      });
    }
  }

	// SCROLL TO TOP RESULT ON PAGE LOAD (MOBILE)
	//This is here for Booking Engine and for MLS
	/////////////////////////////////////////////
	if ( $('#list-all-results').length ) {
  	enquire.register("screen and (max-width:47.938em)", {
  		deferSetup : true,
  		match : function() {
  			$('#list-all-results').ScrollTo();
  		}
  	});
  }

// Allows the read more feature for page body and bottombody
$(".readmore").on( "click", function() {

if($(this).html() == 'Read More'){
  $(this).html("Read Less");
  $(this).removeClass("btn-primary");
  $(this).addClass("btn-info");
} else {
  $(this).html("Read More");
  $(this).removeClass("btn-info");
  $(this).addClass("btn-primary");
}

  $(this).parents().next(".startReadMore").toggle();
console.log('working');
});

});// END DOCUMENT READY


// HELP MAKE FEATURED RESPONSIVE
// CACHE THE WINDOW WIDTH
var cachedWidth = $(window).width();
var resizeId;
// IF WINDOW WIDTH CHANGES, CACHE IT, DONT RESIZE (fix for mobile devices for scroll)
$(window).resize(function() {
	var newWidth = $(window).width();
	if(newWidth !== cachedWidth){
		cachedWidth = newWidth;
		clearTimeout(resizeId);
		resizeId = setTimeout(doneResizing, 500);
	}
});
// WIDTH OF 977 TAKES INTO ACCOUNT FOR SCROLL BAR
if( $(window).width() <= 1200) {
	$(document).ready(doneResizing);
}
// IF WITHIN SIZE, REINITIALIZE CYCLE AND ADJUST HEIGHT
function doneResizing(){
	if( $(window).width() <= 589) {
		$('.home .featured-carousel').attr('data-cycle-carousel-visible', '1').cycle('reinit').css('max-height', 500);
		$('.real-estate #featuredCarousel').attr('data-cycle-carousel-visible', '1').cycle('reinit').css('max-height', 500);
	} else if( $(window).width() <= 1200) {
		$('.home .featured-carousel').attr('data-cycle-carousel-visible', '2').cycle('reinit').css('max-height', 500);
		$('.real-estate #featuredCarousel').attr('data-cycle-carousel-visible', '2').cycle('reinit').css('max-height', 500);
	} else if ( $(window).width() >= 1200) {
		$('.home .featured-carousel').attr('data-cycle-carousel-visible', '2').cycle('reinit').css('max-height', 500);
		$('.real-estate #featuredCarousel').attr('data-cycle-carousel-visible', '2').cycle('reinit').css('max-height', 500);
	}
}

