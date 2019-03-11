$(document).ready(function() {
	$('#example').on('click', 'button.switch', function() {
		console.log($(this)); // show the child selected

		$(this).parent().toggleClass('highlighted');
	})


	//even delegation 
	// grab the parent object
	// then delegate the event to what is contains
	// to do this, we add a second and third arguement to the to event listener


	$('#example').on('dblclick', 'button.my-switch', function(){
		
		$(this).parent().toggleClass('highlight');
		// alert( $(this).parent().className);
		console.log($(this).parent());
	});

	$('body').on('click', 'div#example', function(){
		console.log($(this.parent).next());
		$(this).parent().toggleClass('highlight');
	});

});
