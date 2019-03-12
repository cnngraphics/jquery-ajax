
$(document).ready(function() {
	$('#example').on('click', 'button', function(){ 	//get the list and delegate the click to the btuuton
		var selected = $('#place option:selected'); // find selected item by list having option that is selected
		var value = selected.val();
		var price = selected.data('price')
		console.log(value);
		console.log(selected.data('price')) //find the value that is selected by it's JQ dat('price')
		selected.attr('data-price'); // standard js aquivalent to the aobe JQ method
		// console.log(selected);
		if(price){
			$('#result').html(value+' '+price)
		}
		
	});

});