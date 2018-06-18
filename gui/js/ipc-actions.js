const { ipcRenderer } = require('electron'),
	dICO_coin = 'MNZ';

var CheckMM_Interval = null,
	CheckDefaultLogin_Interval = null;

// In renderer process (web page).
ShepherdIPC = function (data) {
	// USING SYNCHRONOUS METHOD TO SEND AND RECIVE IPC COMMANDS/REPLIES
	//console.log(ipcRenderer.sendSync('shepherd-commandSync', 'ping')) // prints "pong"
	let shepherdreply = ipcRenderer.sendSync('shepherd-command', data);
	return shepherdreply;
}


$(document).ready(function () {
	BarterDEXInitLang();
	BarterDEX_Init_CoinsDB();

	///// Get App Version from Shpepherd IPC and update App Title //////
	var barterDEX_app_info = ShepherdIPC({ "command": "app_info" });
	document.title = 'BarterDEX - ' + barterDEX_app_info.app_version;
	
	setTimeout(function () {
		var mypubkey = sessionStorage.getItem('mm_mypubkey');
		if (mypubkey !== '739860d6114f01f8bae9e1132945c4d4523a423d97c3573b84d4caf9cb8f0c78') {
			var loginstate = sessionStorage.getItem('mm_loginstate');
			if (loginstate == null || loginstate == 'default') {
				var shepherdresult = ShepherdIPC({ "command": "login", "passphrase": "default" });
				//Add default login pubkey to sessionStorage
				sessionStorage.setItem('mm_mypubkey', "739860d6114f01f8bae9e1132945c4d4523a423d97c3573b84d4caf9cb8f0c78");
				$('.mainbody').hide();
				$('.loginbody').hide();
				CheckMM_Interval = setInterval(CheckMMStatus, 1000);
				$('.loadingbody').fadeIn();
			} else if (loginstate == 'loggedout') {
				$('.mainbody').hide();
				$('.loginbody').fadeIn();
				$('.loadingbody').fadeOut();
			}
		} else {
			$('.mainbody').hide();
			$('.loginbody').fadeIn();
			$('.loadingbody').fadeOut();
		}
	}, 1000);
});


$('.dextradeshistory-btn').click(function (e) {

	$('.screen-portfolio').hide();
	$('.screen-coindashboard').hide();
	$('.screen-exchange').hide();
	$('.screen-inventory').hide();
	$('.dexdebug').hide();
	$('.screen-managecoins').hide();

	$('.dextradeshistory').show();
	$('.navbar-right').children().removeClass('active');
	$('.dextradeshistory-btn').parent().addClass("active");
	constructTradesHistory();

	CheckPortfolioFn(false);
	CheckOrderBookFn(false);
	check_swap_status(false);
	check_bot_list(false);
	check_my_prices(false);
	bot_screen_coin_balance(false);
	bot_screen_sellcoin_balance(false);

	check_coin_balance(false);
	Refresh_active_StockChart(false);

	/*if ($('.dextradeshistory').is(":visible")) {
		$('body').css('overflow', 'inherit');
		$('.dextradeshistory').hide();
		$('.dextradeshistory-btn').html('Trades history');
		$('.navbar-right').children().removeClass('active');
	} else {
		$('body').css('overflow', 'hidden');
		//$('.dextradeshistory-btn').html('Dashboard');
		$('.dextradeshistory').show();
		$('.navbar-right').children().removeClass('active');
		$('.dextradeshistory-btn').parent().addClass( "active" );
		constructTradesHistory();
	}*/
});

$('.dexlogout-btn').click(function (e) {
	e.preventDefault();
	//var shepherdresult = ShepherdIPC({"command":"logout"});
	$('.mainbody').fadeOut();
	$('.loadingbody').fadeIn();
	$('.screen-managecoins').hide();

	var login_data = {};
	login_data.passphrase = 'default';
	login_data.netid = 0;
	login_data.seednode = '';

	LoginWithPassphrase(login_data, 'logout');

	CheckPortfolioFn(false);
	CheckOrderBookFn(false);
	check_swap_status(false);
	check_bot_list(false);
	check_my_prices(false);
	bot_screen_coin_balance(false);
	bot_screen_sellcoin_balance(false);

	check_coin_balance(false);
	Refresh_active_StockChart(false);
	//sessionStorage.clear();
});

$('.dexdebug-btn').click(function (e) {
	$('.navbar-right').children().removeClass('active');
	$('.dexdebug').show();
	//$('.dexlogout-btn').hide();
	//$('.dexdebug-close-btn').show();
	//$('.dexdebug-btn').hide();
	//$('.dextradeshistory-btn').hide();
	//$('.dexdashboard-btn').hide();
	//$('.dexsettings-btn').hide();

	$('.screen-portfolio').hide();
	$('.screen-coindashboard').hide();
	$('.screen-exchange').hide();
	$('.screen-inventory').hide();
	$('.screen-managecoins').hide();

	$('.navbar-right').children().removeClass('active');
	$('.dexdebug-btn').parent().addClass("active");


	CheckPortfolioFn(false);
	CheckOrderBookFn(false);
	check_swap_status(false);
	check_bot_list(false);
	check_my_prices(false);
	bot_screen_coin_balance(false);
	bot_screen_sellcoin_balance(false);

	check_coin_balance(false);
	Refresh_active_StockChart(false);
});

$('.dexdebug-close-btn').click(function (e) {
	$('.dexdebug').hide();
	$('.dexdebug-btn').show();
	$('.dexlogout-btn').show();
	$('.dexdebug-close-btn').hide();
	$('.dextradeshistory-btn').show();
	$('.dexdashboard-btn').show();
	$('.dexsettings-btn').show();
	$('.navbar-right').children().removeClass('active');
});

$('.login-genpass-btn').click(function (e) {
	e.preventDefault();

	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	var login_gen_pass = bootbox.dialog({
		backdrop: true,
		onEscape: true,
		message: `
<form>
  <div class="form-group">
    <label>${default_lang.login.login_genpass_new_pass_label}</label>
    <div class="input-group">
      <input type="text" class="form-control btn_gen_pass_input1">
    <span class="input-group-btn">
	    <button class="btn btn-info btn_gen_pass_regenpass" type="button"><span class="glyphicon glyphicon-refresh" aria-hidden="true"></span> ${default_lang.login.login_genpass_regen}</button>
	</span>
    </div>
  </div>
  <div class="form-group">
    <label>${default_lang.login.login_genpass_verify_passphrase}</label>
    <input type="text" class="form-control btn_gen_pass_input2" placeholder="${default_lang.login.login_genpass_repeat_the_pass_here_placeholder}">
  </div>
  <div class="form-group">
  	<div class="col-sm-12 input-group"><p>${default_lang.login.login_genpass_click_on_regen_button}</p>
	<p>${default_lang.login.login_genpass_make_sure_to_save_new_pass}</p></div></div>
  </div>
</form>`,
		closeButton: false,
		size: 'large',

		buttons: {
			cancel: {
				label: `${default_lang.Common.btn_close_smallcaps}`,
				className: 'btn-default',
				callback: function () {

				}
			},
			ok: {
				label: `${default_lang.login.login_genpass_login_with_new_pass}`,
				className: 'btn-primary btn_gen_pass_regenpass_login',
				callback: function () {
					var pass_input1 = $('.btn_gen_pass_input1').val();
					var pass_input2 = $('.btn_gen_pass_input2').val();
					console.log(pass_input1);
					//console.log(pass_input2);

					$('.loginPassphrase').val(pass_input2);
					$('.login-btn').trigger('click');
				}
			}
		}
	});
	login_gen_pass.init(function () {
		console.log('dialog opened.')
		$('.btn_gen_pass_regenpass_login').attr("disabled", "disabled");
		$('.btn_gen_pass_input1').val(bip39.generateMnemonic());

		$('.btn_gen_pass_regenpass').click(function (e) {
			e.preventDefault();
			console.log('btn_gen_pass_regenpass clicked');
			$('.btn_gen_pass_input1').val(bip39.generateMnemonic());
		})

		$('.btn_gen_pass_input1').keyup(function () {

			var pass_input1 = $('.btn_gen_pass_input1').val();
			var pass_input2 = $('.btn_gen_pass_input2').val();
			//console.log(pass_input1);
			//console.log(pass_input2);

			if (pass_input1 !== pass_input2) {
				$('.btn_gen_pass_regenpass_login').attr("disabled", "disabled");
			} else {
				$('.btn_gen_pass_regenpass_login').removeAttr("disabled");
			}

		});

		$('.btn_gen_pass_input2').keyup(function () {

			var pass_input1 = $('.btn_gen_pass_input1').val();
			var pass_input2 = $('.btn_gen_pass_input2').val();
			//console.log(pass_input1);
			//console.log(pass_input2);

			if (pass_input1 !== pass_input2) {
				$('.btn_gen_pass_regenpass_login').attr("disabled", "disabled");
			} else {
				$('.btn_gen_pass_regenpass_login').removeAttr("disabled");
			}

		});


	});


});

$('.login-btn').click(function (e) {
	e.preventDefault();
	var login_data = {};
	login_data.passphrase = $('.loginPassphrase').val();
	login_data.netid = $('.loginNetid').val();
	login_data.seednode = $('.loginSeednode').val();

	if (login_data.netid > 14420) {
		bootbox.alert({
			message: `<b>Net ID:</b> ${login_data.netid} <br>Net ID can not be bigger than 14420.`
		});
	} else {
		LoginWithPassphrase(login_data, 'login');
		//var shepherdresult = ShepherdIPC({"command":"login","passphrase":passphrase});
		$('.loginPassphrase').val('');
		$('.mainbody').hide();
		$('.loginbody').hide();
		$('.screen-managecoins').hide();
		//CheckMM_Interval = setInterval(CheckMMStatus,1000);
		$('.loadingbody').fadeIn();

		var dexmode = $('.login_mode_options').selectpicker('val');
		if (dexmode == 'BarterDEX') {
			loginBarterdEX();
		}
		if (dexmode == 'dICO') {
			logindICO(dICO_coin);
		}

		BarterDEXSettingsFn();
	}
});


$('.dexsettings-btn').click(function (e) {
	e.preventDefault();

	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	var barterDEX_settings = ShepherdIPC({ "command": "read_settings" });

	var dex_settings_bootbox = bootbox.dialog({
		backdrop: true,
		onEscape: true,
		message: `
			<div class="form-group">
				<span style="float: left; font-size: 18px;">${default_lang.Settings.settings_enable_experimental_features}</span>
			</div>
			<div class="btn-group btn-group-justified colors" data-toggle="buttons">
				<label class="btn btn-info label_experimental_features_enable">
				<input type="radio" name="experimental_features" id="experimental_features_enable" value="enable" autocomplete="off">${default_lang.Common.yes_caps}</label>
				<label class="btn btn-info label_trading_pair_options_disable active">
				<input type="radio" name="experimental_features" id="trading_pair_options_disable" value="disable" autocomplete="off" checked>${default_lang.Common.no_caps}</label>
			</div>

			<div class="form-group col-sm-3" style="margin-top: 10px; padding: 0;">
				<span style="float: left; font-size: 18px;">${default_lang.Settings.settings_default_theme}:</span>
			</div>
			<div class="input-group col-sm-2" style="margin: 10px 0;">
				<select class="selectpicker settings_theme_select" data-hide-disabled="true" data-width="30%">
					<option data-content="${default_lang.Settings.settings_dark_theme}" data-tokens="${default_lang.Settings.settings_dark_theme}">dark</option>
					<option data-content="${default_lang.Settings.settings_light_theme}" data-tokens="${default_lang.Settings.settings_light_theme}">light</option>
				</select>
			</div>
			<div class="form-group col-sm-3" style="padding: 0;">
				<span style="float: left; font-size: 18px;">${default_lang.Settings.settings_default_language}:</span>
			</div>
			<div class="input-group col-sm-2" style="margin: 10px 0;">
				<select class="selectpicker settings_deflang_select" data-hide-disabled="true" data-width="30%">
					<option data-content="English (US)" data-tokens="English US">en_US</option>
				</select>
			</div>
			<div class="form-group col-sm-3" style="padding: 0;">
				<span style="float: left; font-size: 18px;">${default_lang.Settings.settings_charts}:</span>
			</div>
			<div class="input-group col-sm-2" style="margin: 10px 0;">
				<select class="selectpicker settings_charts_status_select" data-hide-disabled="true" data-width="30%">
					<option data-content="${default_lang.Settings.settings_charts_show}" data-tokens="${default_lang.Settings.settings_charts_show}">show</option>
					<option data-content="${default_lang.Settings.settings_charts_hide}" data-tokens="${default_lang.Settings.settings_charts_hide}">hide</option>
				</select>
			</div>
			<span>${default_lang.Settings.settings_charts_desc}<span>`,
		closeButton: false,
		size: 'large',

		buttons: {
			cancel: {
				label: `${default_lang.Common.btn_close_smallcaps}`,
				className: 'btn-default',
				callback: function () {
				}
			},
			reset: {
				label: `${default_lang.Settings.settings_reset_settings}`,
				className: 'btn-warning btn_dex_reset_settings',
				callback: function () {
					ShepherdIPC({ "command": "reset_settings" });
					sessionStorage.setItem('mm_tradingchart', 'show');
					$('#trading_mode_options_trademanual').trigger('click');
					setTimeout(function () { BarterDEXSettingsFn(); }, 1000);
					setTimeout(function () { BarterDEXDefaultLangFn('en_US') }, 1000);
				}
			},
			ok: {
				label: `${default_lang.Settings.settings_save_settings}`,
				className: 'btn-primary btn_dex_save_settings',
				callback: function () {
					var experimental_features = $('input[name=experimental_features]:checked').val();
					var selected_theme = $('.settings_theme_select').selectpicker('val');
					var selected_deflang = $('.settings_deflang_select').selectpicker('val');
					barterDEX_settings.theme = selected_theme;
					barterDEX_settings.deflang = selected_deflang;
					barterDEX_settings.charts = $('.settings_charts_status_select').selectpicker('val');

					if (barterDEX_settings.charts == 'show') {
						sessionStorage.setItem('mm_tradingchart', 'show');
					}
					if (barterDEX_settings.charts == 'hide') {
						sessionStorage.setItem('mm_tradingchart', 'hide');
					}

					console.log(experimental_features);
					if (experimental_features == 'enable') {
						barterDEX_settings.experimentalFeatures = true;
					}
					if (experimental_features == 'disable') {
						barterDEX_settings.experimentalFeatures = false;
						$('#trading_mode_options_trademanual').trigger('click');
					}

					console.log(barterDEX_settings);
					ShepherdIPC({ "command": "update_settings", "data": barterDEX_settings });
					BarterDEXSettingsFn();
					RefreshStockChartTheme(selected_theme);
					if (barterDEX_settings.deflang == 'tlh_UNI') {
						$('body').css('font-family', "'piqad', 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif");
						BarterDEXDefaultLangFn(selected_deflang);
					} else {
						$('body').css('font-family', "'Open Sans', 'Helvetica Neue', Helvetica, sans-serif");
						BarterDEXDefaultLangFn(selected_deflang);
					}
					toastr.info(`${default_lang.Settings.settings_toastr_settings_update_processed}`, `${default_lang.Settings.settings_toastr_title}`);
				}
			}
		}
	});
	dex_settings_bootbox.init(function () {
		$('.settings_theme_select').selectpicker('render');
		$('.settings_deflang_select').html(GetListofAvailableLocalization());
		$('.settings_deflang_select').selectpicker('render');
		$('.settings_charts_status_select').selectpicker('render');


		console.log('settings dialog opened.');
		//var barterDEX_settings = ShepherdIPC({"command":"read_settings"});
		console.log(barterDEX_settings);
		if (barterDEX_settings.experimentalFeatures == false) {
			$('.label_experimental_features_enable').removeClass('active');
			$('.label_trading_pair_options_disable').addClass(' active');
			$('#experimental_features_enable').removeAttr('checked');
			$('#trading_pair_options_disable').attr('checked', 'checked');
		} else {
			$('.label_experimental_features_enable').addClass(' active');
			$('.label_trading_pair_options_disable').removeClass('active');
			$('#experimental_features_enable').attr('checked', 'checked');
			$('#trading_pair_options_disable').removeAttr('checked');
		}
		if (barterDEX_settings.theme == 'dark') {
			$('.settings_theme_select').selectpicker('val', 'dark');
		}
		if (barterDEX_settings.theme == 'light') {
			$('.settings_theme_select').selectpicker('val', 'light');
		}

		if (barterDEX_settings.charts == 'show') {
			$('.settings_charts_status_select').selectpicker('val', 'show');
		}
		if (barterDEX_settings.charts == 'hide') {
			$('.settings_charts_status_select').selectpicker('val', 'hide');
		}

		$('.settings_deflang_select').selectpicker('val', barterDEX_settings.deflang);
	});
});

function loginBarterdEX() {
	$('.navbar-brandname').html('BarterDEX');
	$('.screen-portfolio').show();
	$('.screen-coindashboard').hide();
	$('.screen-exchange').hide();
	$('.btn-exchangeclose').show();
	$('.trading_method_options').show();
	$('.trading_buysell_options').show();
	$('.dexdashboard-btn').show();

	$('#trading_mode_options_trademanual').trigger('click');
	$('#trading_mode_options_tradebot').removeAttr("checked");
	$('#trading_mode_options_trademanual').attr('checked', 'checked');
	//ManageDEXCoins();
}

function logindICO(coin) {
	console.log('LOGIN TO dICO OPTION SEELCTED.')
	console.log('COIN SELECTED: ' + coin)

	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	$('.mainbody').hide();
	$('.loginbody').hide();
	$('.btn-exchangeclose').hide();
	$('.trading_method_options').hide();
	$('.trading_buysell_options').hide();
	$('.dexdashboard-btn').hide();

	$('.navbar-brandname').html(return_coin_name(coin) + ' dICO');
	sessionStorage.setItem('mm_dexmode', 'dICO');
	sessionStorage.setItem('mm_selected_dICO_coin', coin);

	selected_coin = {}
	selected_coin.coin = coin;
	selected_coin.coin_name = return_coin_name(coin);;
	console.log(selected_coin);
	sessionStorage.setItem('mm_selectedcoin', JSON.stringify(selected_coin));

	$('.screen-portfolio').hide();
	$('.screen-coindashboard').hide()
	$('.screen-exchange').show();
	$('.coin_ticker').html(coin);
	$.each($('.coinexchange[data-coin]'), function (index, value) {
		$('.coinexchange[data-coin]').data('coin', coin);
	});

	CheckPortfolioFn(false);
	CheckOrderBookFn();
	CheckOrderbook_Interval = setInterval(CheckOrderBookFn, 30000);
	check_swap_status_Interval = setInterval(check_swap_status, 20000);
	check_swap_status();
	check_bot_list_Interval = setInterval(check_bot_list, 10000);
	check_bot_list();
	check_my_prices_Interval = setInterval(check_my_prices, 60000);
	check_my_prices();
	bot_screen_coin_balance_Interval = setInterval(bot_screen_coin_balance, 30000);
	bot_screen_coin_balance();
	bot_screen_sellcoin_balance_Interval = setInterval(bot_screen_sellcoin_balance, 30000);
	bot_screen_sellcoin_balance();
	Refresh_active_StockChart_Interval = setInterval(Refresh_active_StockChart, 60000);
	Refresh_active_StockChart();

	$('#trading_mode_options_trademanual').trigger('click');
	$('#trading_mode_options_tradebot').removeAttr("checked");
	$('#trading_mode_options_trademanual').attr('checked', 'checked');
	$('.trading_method_options').hide();
	$('.trading_buysell_options').hide();
	$('.trading_pair_coin_autoprice_mode_span').hide();
	$('#trading_pair_coin_autoprice_mode').bootstrapToggle('on')
	$('#trading_pair_coin_price_max_min').html(`${default_lang.Exchange.exchange_lbl_one_max}`);

	var charts_instruments_data = {}
	charts_instruments_data.symbol = coin + '/KMD'
	charts_instruments_data.company = 'Komodo Platform';
	ChartsInstruments(charts_instruments_data)
	UpdateDexChart(coin, 'KMD');
}

CheckMMStatus = function (sig) {
	if (sig == false) {
		clearInterval(CheckMM_Interval);
	} else {
		console.log('Checking MarketMaker Status');
	}

	var mmstatus = ShepherdIPC({ "command": "mmstatus" });

	if (mmstatus !== 'closed') {
		console.log(mmstatus);
		clearInterval(CheckMM_Interval);
		CheckDefaultLogin_Interval = setInterval(CheckDefaultLogin, 1000);
	} else {
		$('.mainbody').hide();
		$('.loginbody').hide();
		$('.loadingbody').fadeIn();
	}

	/*if (mmstatus !== 'closed') {
		var userpass = sessionStorage.getItem('mm_userpass');
		var mypubkey = sessionStorage.getItem('mm_mypubkey');
		console.log('mypubkey: '+mypubkey);
		console.log('userpass: '+userpass);
		if (mypubkey == '739860d6114f01f8bae9e1132945c4d4523a423d97c3573b84d4caf9cb8f0c78') {
			$('.mainbody').hide();
			$('.loadingbody').fadeOut();
			$('.loginbody').fadeIn();
			clearInterval(CheckPortfolio_Interval);
		} else {
			$('.mainbody').fadeIn();
			$('.loginbody').fadeOut();
			$('.loadingbody').hide();
			console.log(mypubkey);
			
		}
		CheckPortfolio_Interval = setInterval(CheckPortfolioFn,60000);
		CheckPortfolioFn();
		clearInterval(CheckMM_Interval);
	} else {
		$('.mainbody').hide();
		$('.loginbody').hide();
		$('.loadingbody').fadeIn();
	}*/
}


CheckDefaultLogin = function (sig) {
	if (sig == false) {
		clearInterval(CheckDefaultLogin_Interval);
	} else {
		console.log("Checking if it's default login");
	}

	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	if (mypubkey == '739860d6114f01f8bae9e1132945c4d4523a423d97c3573b84d4caf9cb8f0c78') {
		$('.mainbody').hide();
		$('.loadingbody').fadeOut();
		$('.loginbody').fadeIn();
		clearInterval(CheckDefaultLogin_Interval);
	}

	/*
	var userpass = '1d8b27b21efabcd96571cd56f91a40fb9aa4cc623d273c63bf9223dc6f8cd81f';
	//var ajax_data = {"userpass":userpass,"method":"enable","coin":""};
	//var ajax_data = {"userpass":userpass,"method":"passphrase","passphrase":"default","gui":"simplegui"};
	//console.log(ajax_data)
	var url = "http://127.0.0.1:7783";

	$.ajax({
		async: true,
	    data: JSON.stringify(ajax_data),
	    dataType: 'json',
	    type: 'POST',
	    url: url
	}).done(function(data) {
		// If successful
		//console.log(data);

		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);
			sessionStorage.setItem('mm_loginstate', 'default');
			sessionStorage.removeItem('mm_usercoins');
			sessionStorage.removeItem('mm_selectedcoin');

			if (data.mypubkey == '739860d6114f01f8bae9e1132945c4d4523a423d97c3573b84d4caf9cb8f0c78') {
				$('.mainbody').hide();
				$('.loadingbody').fadeOut();
				$('.loginbody').fadeIn();
				clearInterval(CheckDefaultLogin_Interval);
			}
			//return
		}
	}).fail(function(jqXHR, textStatus, errorThrown) {
	    // If fail
	    console.log(textStatus + ': ' + errorThrown);
	});
	*/
}


LoginWithPassphrase = function (login_passphrase_data, action_mode) {
	console.log('Login using passphrase from Login form input');
	//console.log(login_passphrase_data);

	var userpass = '';
	if (sessionStorage.getItem('mm_loginstate') == 'loggedin') {
		var userpass = sessionStorage.getItem('mm_userpass');
	} else {
		var userpass = '1d8b27b21efabcd96571cd56f91a40fb9aa4cc623d273c63bf9223dc6f8cd81f';
	}

	var ajax_data = { "userpass": userpass, "method": "passphrase", "passphrase": login_passphrase_data.passphrase, "gui": "simplegui" };

	if (login_passphrase_data.netid == 0) {
		console.log(login_passphrase_data.netid);
		delete ajax_data.netid;
		delete ajax_data.seednode;
	} else {
		console.log('Net ID: ' + login_passphrase_data.netid);
		console.log('Seed Node IP: ' + login_passphrase_data.seednode);
		ajax_data.netid = login_passphrase_data.netid;
		ajax_data.seednode = login_passphrase_data.seednode;
	}
	//console.log(ajax_data)
	var url = "http://127.0.0.1:7783";

	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);

		sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
		sessionStorage.setItem('mm_userpass', data.userpass);
		sessionStorage.setItem('mm_mypubkey', data.mypubkey);

		if (action_mode == 'login') {
			sessionStorage.setItem('mm_loginstate', 'loggedin');
			$('.mainbody').fadeIn();
			$('.loginbody').fadeOut();
			$('.loadingbody').hide();

			CheckPortfolio_Interval = setInterval(CheckPortfolioFn, 60000);
			ManageDEXCoins('enable', null);
			CheckPortfolioFn();
		}

		if (action_mode == 'logout') {
			sessionStorage.setItem('mm_loginstate', 'loggedout');
			sessionStorage.removeItem('mm_usercoins');
			sessionStorage.removeItem('mm_selectedcoin');
			$('.mainbody').fadeOut();
			$('.loginbody').fadeIn();
			$('.loadingbody').hide();
		}


	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}



function BarterDEXSettingsFn() {
	var barterDEX_settings = ShepherdIPC({ "command": "read_settings" });
	console.log(barterDEX_settings);
	if (barterDEX_settings.experimentalFeatures == false) {
		$('.btn-autogoalall').hide();
		$('.trading_method_options').hide();
		$('#portfolio_chart_current').addClass(' col-sm-offset-3');
		$('#portfolio_chart_target').hide();
		$('.btn_portfolio_coingoal').hide();
		$("a[href='#exchange_botlist']").parent().hide();
		$('input[name=trading_manual_buy_sell_options]:nth(0)').trigger('click');
	} else {
		$('.btn-autogoalall').show();
		$('.trading_method_options').show();
		$('#portfolio_chart_current').removeClass('col-sm-offset-3');
		$('#portfolio_chart_target').show();
		$('.btn_portfolio_coingoal').show();
		$("a[href='#exchange_botlist']").parent().show();
	}

	if (barterDEX_settings.theme == 'dark') {
		$('#dark_css_style').prop('disabled', false);
	}
	if (barterDEX_settings.theme == 'light') {
		$('#dark_css_style').prop('disabled', true);
	}
};



function ManageDEXCoins(mng_coin_action, mng_coins_data) {
	console.log('DEX Coins Management function called.');
	console.log(mng_coin_action);
	//console.log(mng_coins_data);

	var default_coins_list_array = [{ coin: "KMD", electrum: false, method: "enable" }]

	switch (mng_coin_action) {
		case 'enable':
			if (JSON.parse(localStorage.getItem('mm_default_coins_list')) == null) {
				localStorage.setItem('mm_default_coins_list', JSON.stringify(default_coins_list_array));
				enable_disable_coin(default_coins_list_array[0])
			} else {
				var lstore_default_coins_list_array = JSON.parse(localStorage.getItem('mm_default_coins_list'));

				$.each(lstore_default_coins_list_array, function (index, val) {
					console.log(index);
					console.log(val);
					enable_disable_coin(val);
				})
			}
			break;
		case 'add':
			console.log(mng_coins_data);
			var lstore_default_coins_list_array = JSON.parse(localStorage.getItem('mm_default_coins_list'));
			console.log(lstore_default_coins_list_array);
			lstore_default_coins_list_array.push(mng_coins_data);
			localStorage.setItem('mm_default_coins_list', JSON.stringify(lstore_default_coins_list_array));
			break;
		case 'remove':
			console.log(mng_coins_data);
			var lstore_default_coins_list_array = JSON.parse(localStorage.getItem('mm_default_coins_list'));
			lstore_default_coins_list_array = _.without(lstore_default_coins_list_array, _.findWhere(lstore_default_coins_list_array, { coin: mng_coins_data.coin }));
			console.log(lstore_default_coins_list_array);
			localStorage.setItem('mm_default_coins_list', JSON.stringify(lstore_default_coins_list_array));
			break;
		default:
			if (JSON.parse(localStorage.getItem('mm_default_coins_list')) == null) {
				localStorage.setItem('mm_default_coins_list', JSON.stringify(default_coins_list_array));
				enable_disable_coin(default_coins_list_array[0])
			} else {
				var lstore_default_coins_list_array = JSON.parse(localStorage.getItem('mm_default_coins_list'));

				$.each(lstore_default_coins_list_array, function (index, val) {
					console.log(index);
					console.log(val);
					enable_disable_coin(val);
				})
			}
	}
}



