$(document).ready(function() {
	// using change event listener to update dom from selection
	$('#example').on('change', 'select', function(){
		// console.log(this);

		var sel = $(this).find('option:selected'); // using .find() on select dropdown
		// notice the JQ $(this) syntax
		console.log(sel);

		var value = sel.val();
		var price = sel.data('price'); // accessing the data-price html5 attribute

		$('#result').html( value+' '+ price );
	});
});