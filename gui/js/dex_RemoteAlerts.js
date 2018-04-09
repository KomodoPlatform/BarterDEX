check_dex_remote_alerts = function(sig) {
	if (sig == false) {
		clearInterval(check_dex_remote_alerts_Interval);
	} else {
		console.log("Checking barterdex remote alerts");
	}

	var current_app_version = ShepherdIPC({"command":"app_info"});


	var url = "http://docs.supernet.org/BarterDEX/assets/app_remote_alerts_info.json";

	$.ajax({
		async: true,
	    dataType: 'json',
	    type: 'GET',
	    cache: false,
	    url: url
	}).done(function(data) {
		// If successful
		//console.log(data);

		if (data.for_app_version.slice(2,16) <= current_app_version.slice(2,16).substring(0, current_app_version.length-7) == true) {
			if (data.alert_level == 'marquee') {
				$('.app_top_alert_div').attr('style',data.style);
				$('.app_top_alert_div').html(data.message);
				$('.app_top_alert_div').marquee({duration: 10000,pauseOnHover: true});
			}
			if (data.alert_level == 'alert') {
				bootbox.alert({
					message: `<div class="remote_alert_bootbox">${data.message}</div>`,
					size: 'large'
				});
				$('.remote_alert_bootbox').parent().parent().parent().prop('style',data.style);
			}
		}

	}).fail(function(jqXHR, textStatus, errorThrown) {
	    // If fail
	    console.log(textStatus + ': ' + errorThrown);
	});
}

function alert_open_external_link(link) {
	shell.openExternal(link);
}


/** Remote Alert settings **/
var check_dex_remote_alerts_Interval = null;
//check_dex_remote_alerts();
//check_dex_remote_alerts_Interval = setInterval(check_dex_remote_alerts, 120000);
/** Remote Alert settings END **/