/* 
References
*/



$(function(){



  // Check to see if the window is top if not then display button
	// https://paulund.co.uk/how-to-create-an-animated-scroll-to-top-with-jquery
	// opacity: 0%; (opacity should be set, do not use display: none)
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});



});

