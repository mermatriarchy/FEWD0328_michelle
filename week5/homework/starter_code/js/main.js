$(document).ready(function(){

	//prevent default
	$('p a').click(function(event){
		event.preventDefault();
	});

	//read more
	$('.readmore').click(function(){
		$('#show-this-on-click').slideToggle('fast');
		$('.readmore').hide();
		$('.readless').show();
	});

	//read less
	$('.readless').click(function(){
		$('#show-this-on-click').slideToggle("fast");
		$('.readless').hide();
		$('.readmore').show();
	});

	//learn more
	$('.learnmore').click(function(){
		$('#learnmoretext').toggle();

	});
	

});
