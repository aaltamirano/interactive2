$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});

	$('#button-4').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginRight: '0.8in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});

	$('button-5').ready(function(){
    $('#button-5').click(function(){
        alert("Great, you pressed it ._.");
	    });
	});


});