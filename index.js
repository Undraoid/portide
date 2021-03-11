$(document).ready(function() {
	$('#countryInfo').click(function() {

		$.ajax({
			url: "./index.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {


					$('#result').html(result['data'][0]['population']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				
			}
		});
	});

	$('#postalCodeSearch').click(function() {

		console.log($('#text').val());
		let x = $('#text').val().split(' ').join('');
		$.ajax({

			url: "./postalCode.php",
			type: 'POST',
			dataType: 'json',
			data: {
				postalCode: x,
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {


					$('#result2').html(result.data[0].placeName);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
			}
		});
	});

	$('#wikipediaSearch').click(function() {
		console.log($('#text2').val());
		let y = $('#text2').val().split(' ').join('');
		$.ajax({

			url: "./wikipediaSearch.php",
			type: 'POST',
			dataType: 'json',
			data: {
				wikipedia: y,
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {


					$('#result3').html(result.data[0].summary);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
			}
		});
	});
});