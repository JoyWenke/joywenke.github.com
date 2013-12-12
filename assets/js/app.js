$(document).ready(function(){
  
  var allPanels = $('.accordion > dd').hide();
    
  $('.accordion > dt > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

  $('.slider').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 5000,              //  The delay between slide animations (in milliseconds)
		// complete: function() {},  //  A function that gets called after every slide animation
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: true              //  Support responsive design. May break non-responsive designs
	});

  $('header nav ul').mobileMenu({
  	switchWidth: 560,
  	prependTo: 'header[role="banner"]'
  });

});