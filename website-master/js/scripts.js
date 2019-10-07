jQuery(document).ready(function() {
    
    /*Recognize, Recover, & Retain Guests Block*/
    var index;
    jQuery('#tab1 .tap-block-control').on('click', function(){
        jQuery('#tab1 .tap-block-control').removeClass('active');
        jQuery('#tab1 .tab-block-content').removeClass('active');
        
        index = jQuery('#tab1 .tap-block-control').index(this);
        
        jQuery('#tab1 .tap-block-control').eq(index).addClass('active');
        jQuery('#tab1 .tab-block-content').eq(index).addClass('active');
    });
    
    /*Industry Leading Res Block*/
    var index2;
    jQuery('#tab2 .tap-block-control').on('click', function(){
        jQuery('#tab2 .tap-block-control').removeClass('active');
        jQuery('#tab2 .tab-block-content').removeClass('active');
        
        index2 = jQuery('#tab2 .tap-block-control').index(this);
        
        jQuery('#tab2 .tap-block-control').eq(index2).addClass('active');
        jQuery('#tab2 .tab-block-content').eq(index2).addClass('active');
    });
    
    /*Mobile Menu*/
    jQuery('.mobile-menu').on('click', function(){
       if (jQuery('.navigation-menu').hasClass('active')) {
           jQuery('.navigation-menu').removeClass('active');
           jQuery(this).removeClass('active');
       } else {
           jQuery('.navigation-menu').addClass('active');
           jQuery(this).addClass('active');
       }
    });
    
    /*Smooth*/
    jQuery('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = jQuery(target);
		jQuery('html, body').stop().animate({
            'scrollTop': $target.offset().top - 0}, 700);
	});
    
    /*Navigation fixed*/
    var reqHeight = jQuery('.navigation').outerHeight();
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        if(scroll > 0) {
            jQuery('body').addClass('fixed');
            jQuery('body').css({"padding-top": reqHeight});
        } else {
            jQuery('body').removeClass('fixed');
            jQuery('body').css({"padding-top": 0});
        }
    });
    
});