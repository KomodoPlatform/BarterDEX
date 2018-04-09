/*** AJAX calls to marketmaker ***/

$('#debug-exec').click(function(e) {
	var ajax_data = $('#debug-payload').val();
	var url = "http://127.0.0.1:7783";

	console.warn(ajax_data.indexOf('\\"'));

	$.ajax({
		async: true,
		data: ajax_data.indexOf('\\"') > -1 ? JSON.parse(ajax_data) : JSON.parse(JSON.stringify(ajax_data)),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function(data) {
		console.warn('debug exec', data);
		$('#debug-payload-response').html(JSON.stringify(data, null, '\t'));
	});
});
