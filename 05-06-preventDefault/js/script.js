$(document).ready(function() {
	//precent default
	$('#example').on('click', 'a', function(someEventVar){
		
		someEventVar.preventDefault();
		someEventVar.stopPropagation();
		console.log('Hello');
	});

	// comment for Emily
});