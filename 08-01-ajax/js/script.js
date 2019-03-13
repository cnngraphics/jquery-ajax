$(document).ready(function(){
	//selection and event delegation
	$('#example').on('click', 'button.switch', function(){
		$.ajax('page.html') //takes one or 2 args, 2nd arg is object taking methods
		.done(function( response ){ //catch the result of the call into response
			//select target to update
			$('#result').html(response);
		});
	});
});