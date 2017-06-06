$(document).ready(function() {

	 $('.gallery').slick();
	 	

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

		// $('h5,.intro').css({
		// 	'background-position' : 'center ' + (-scrollTop/6)+"px"
		// });

		$('.intro').css({
			'opacity': 1 - scrollTop / 600 ,
			'margin-top' : scrollTop/ 2 + 'px'
		});
	 

	    // if (scrollTop > 49) {
	    //     $('body').addClass('header-fixed');
	    // } else {
	    //     $('body').removeClass('header-fixed');
	    // }


	  	// if ($(window).scrollTop() > 100) {
    //     $('.main-nav').addClass('sticky');
    // } else {
    //     $('.main-nav').removeClass('sticky');
    // }

	});
});
