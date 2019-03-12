$(document).ready(function() {
	
	$('#example').on('change', 'select', function(){
		// console.log(this);

		var sel = $(this).find('option:selected');
		console.log(sel);
		var selected = $('#place');
		// console.log(selected);

		var value = sel.val();
		var price = sel.data('price');

		$('#result').html( value+' '+ price );
	});
});