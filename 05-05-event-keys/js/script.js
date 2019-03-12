$(document).ready(function() {
	
	//working with keyboard event
	$('#example').on('keyup', 'input', function(){
		$('#result').html('Your Name is:'+ $(this).val());
	});
});