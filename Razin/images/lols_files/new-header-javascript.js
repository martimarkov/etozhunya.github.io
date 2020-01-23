$(document).ready(function(){

  //Top and Main Navigation
  $(window).on('resize',function(){
    if ($(window).outerWidth() <= 992) {
      var navTopHeight = $('.navigation-top-wrap').height();
      $('body').css('padding-top',navTopHeight+'px');
      //Hack Fix for Top Navigation on mobile - drop down z-index on tap
      $(document).on('click', function(e) {
        $('.navigation-top ul.mobileDropOpen').removeClass('mobileDropOpen');
        $('.logoContainer').removeClass('mobileDropOpen');
        $('.navigation-top-wrap').removeClass('mobileDropOpen');
      });
      $('.navigation-top li:has(ul)').on('click',function(){
        event.stopPropagation();
        $(this).find('ul:first').addClass('mobileDropOpen');
        $('.logoContainer').addClass('mobileDropOpen');
        $('.navigation-top-wrap').addClass('mobileDropOpen');
      });
      // Needed for desktop browsers that are small in viewport width
      $('.navigation-top li:has(ul)').hover(function(){
        event.stopPropagation();
        $(this).find('ul:first').addClass('mobileDropOpen');
        $('.logoContainer').addClass('mobileDropOpen');
        $('.navigation-top-wrap').addClass('mobileDropOpen');
        }, function() {
          $('.navigation-top ul.mobileDropOpen').removeClass('mobileDropOpen');
          $('.logoContainer').removeClass('mobileDropOpen');
          $('.navigation-top-wrap').removeClass('mobileDropOpen');
        }
      );
    } else {
      $('body').removeAttr('style');
      $('.refine-mobile .refine-form').removeAttr('style');
    }
    // Results Page Mobile Refine Bar Position
    if ( $('.refine-mobile-controls').length ) {
      if ( $(window).outerWidth() >= 590 && $(window).outerWidth() <= 991 ) {
        var navTopHeight = $('.navigation-top-wrap').height();
        var refineControlsHeight = $('.refine-mobile-controls').outerHeight();
        var heightTotal = navTopHeight + refineControlsHeight;
        $('.refine-mobile .refine-form').css('top',heightTotal+'px');
      } else {
        $('.refine-mobile .refine-form').removeAttr('style');
      }
      if ( $(window).outerWidth() <= 992 ) {
        var navTopHeight = $('.navigation-top-wrap').height();
        $('.refine-mobile-controls').css('top',navTopHeight+'px');
      } else {
        $('.refine-mobile .refine-form').removeAttr('style');
      }
      if ( $(window).outerWidth() <= 589 ) {
        var navTopHeight = $('.navigation-top-wrap').height();
        $('.refine-mobile .refine-form, .results-body .map-wrap').css('top',navTopHeight+'px');
        var topPadding = navTopHeight + 15;
        $('.results-body .results-list-wrap').css('padding-top',topPadding+'px');
      } else {
        $('.refine-mobile .refine-form, .results-body .map-wrap').removeAttr('style');
        $('.results-body .results-list-wrap').removeAttr('style');
      }
    }
  }).resize();

  // NAVIGATION
  // Copied from /javascripts/global.js - Needed for all pages with header
  // ------------------------------
  if ( !$('script[src^="/javascripts/global.js"]').length > 0 ) {
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
    $('ul.nav-main li:has(ul)').addClass('sub');
    $('ul.nav-main li.sub a').click(function(){
      $(this).parent().toggleClass('open');
    });
  }

});

