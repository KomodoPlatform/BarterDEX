/*** Simple GUI JS ***/

var CheckOrderbook_Interval = null;
var CheckPortfolio_Interval = null;
var check_coin_balance_Interval = null;
var check_swap_status_Interval = null;
var check_my_prices_Interval = null;
var check_bot_list_Interval = null;
var bot_screen_coin_balance_Interval = null;
var bot_screen_sellcoin_balance_Interval = null;
var shell = require('electron').shell;

$(window).resize(function () {
	$('.loginbody').css('height', $(window).height());
	$('#exchange_coin_asks_togl').css('max-height', $('.col1').height() + $('.col2').height() + $('.col3').height() - 470);
	$('#exchange_coin_bids_togl').css('max-height', $('.col1').height() + $('.col2').height() + $('.col3').height() - 470);
	$('#exchange_coin_asks').css('max-height', $('.col1').height() + $('.col2').height() + $('.col3').height() - 470);
	$('#exchange_coin_bids').css('max-height', $('.col1').height() + $('.col2').height() + $('.col3').height() - 470);
	$('.exchange_trade_status_body').css('height', $(window).height() - ($('.col1').height() + $('.col2').height() + 135))
	console.log($(window).height());
})

$('.btn_coindashboard_exchange').click(function (e) {
	e.preventDefault();
	console.log('btn_coindashboard_exchange clicked');
	console.log($(this).data());

	var selected_coin = JSON.parse(sessionStorage.getItem('mm_selectedcoin'));
	console.log(selected_coin);
	var coin = selected_coin.coin;

	$('.screen-coindashboard').hide()
	$('.screen-exchange').show();
	$('.coin_ticker').html(coin);

	$.each($('.coinexchange[data-coin]'), function (index, value) {
		//$('.coinexchange[data-coin]').attr('data-coin', coin);
		$('.coinexchange[data-coin]').data('coin', coin);
	});

	/*$('.btn-exchangeclose').attr('data-coin', coin);
	$('.btn-exchangerefresh').attr('data-coin', coin);
	$('.btn-myordersrefresh').attr('data-coin', coin);
	$('.btn-botlistrefresh').attr('data-coin', coin);
	$('.btn-refreshtrading_pair').attr('data-coin', coin);*/
	check_coin_balance(false);
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

	var trading_chart_status = sessionStorage.getItem('mm_tradingchart');
	if (trading_chart_status == 'show') {
		$('.trading_chart_div').show();
		Refresh_active_StockChart_Interval = setInterval(Refresh_active_StockChart, 60000);
		Refresh_active_StockChart();
	} else {
		$('.trading_chart_div').hide();
	}
});

$('.btn-exchangeclose').click(function (e) {
	e.preventDefault();
	console.log('btn-exchangeclose clicked');
	console.log($(this).data());

	//$('.screen-coindashboard').show()
	$('.screen-exchange').hide();
	$('.screen-portfolio').show();
	CheckOrderBookFn(false);
	check_swap_status(false);
	check_bot_list(false);
	check_my_prices(false);
	bot_screen_coin_balance(false);
	bot_screen_sellcoin_balance(false);
	Refresh_active_StockChart(false);
	//check_coin_balance_Interval = setInterval(check_coin_balance(),3000);
	//check_coin_balance();

	$('.porfolio_coins_list tbody').empty();
	var actiavte_portfolio_coins_list_spinner = ''
	actiavte_portfolio_coins_list_spinner += '<th colspan="7">';
	actiavte_portfolio_coins_list_spinner += '<div style="text-align: center; height: 100px;">';
	actiavte_portfolio_coins_list_spinner += '<svg id="portfolio-coins-spinner">';
	actiavte_portfolio_coins_list_spinner += '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path2" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path3" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path4" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '</svg>';
	actiavte_portfolio_coins_list_spinner += '</div>';
	actiavte_portfolio_coins_list_spinner += '</th>';
	$('.porfolio_coins_list tbody').append(actiavte_portfolio_coins_list_spinner);
	CheckPortfolioFn();
	CheckPortfolio_Interval = setInterval(CheckPortfolioFn, 300000);
});


$('.btn-exchangerefresh').click(function (e) {
	e.preventDefault();
	console.log('btn-exchangerefresh clicked');
	console.log($(this).data());

	CheckOrderBookFn();
	toastr.info('Updating Orderbooks')
});


$('.btn-myordersrefresh').click(function (e) {
	e.preventDefault();
	console.log('btn-myordersrefresh clicked');
	console.log($(this).data());

	check_my_prices();
	toastr.info('Updating My Offers/Prices');
});

$('.btn-botlistrefresh').click(function (e) {
	e.preventDefault();
	console.log('btn-botlistrefresh clicked');
	console.log($(this).data());

	check_bot_list();
	toastr.info('Updating Trade Status')
});


$('.btn-bot_action').click(function (e) {
	e.preventDefault();
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	console.log('btn-botlistrefresh clicked');
	console.log($(this).data());
	console.log($(this).data('action'));
	console.log($('.btn-bot_action').attr('data-action'))
	console.log($(this).attr('data-action'))

	var bot_or_manual = $('input[name=trading_mode_options]:checked').val();
	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();

	if (bot_or_manual == 'tradebot') {

		pair_price = $('.trading_pair_coin_price').val();

		base_volume = $('.trading_pair_coin_volume').val();

		pair_volume = pair_price * base_volume;

		$('.relvol_basevol').html(pair_volume.toFixed(8));

		bot_data = {}
		bot_data.price = pair_price;
		if (buying_or_selling == 'buying') {
			bot_data.volume = pair_volume;
		}
		if (buying_or_selling == 'selling') {
			bot_data.volume = $('.trading_pair_coin_volume').val();
		}
		//bot_data.action = $(this).data('action');
		//bot_data.action = $('.btn-bot_action').attr('data-action');
		bot_data.action = $(this).attr('data-action');

		console.log(bot_data);

		//if (pair_volume <= 0.01 || pair_price <= 0.01) {
		if (bot_data.volume <= 0.01) {
			console.log(bot_data.volume)
			console.log('Order is too small. Please try again.');
			toastr.warning(`${default_lang.Exchange.exchange_toastr_order_is_too_small}`, `${default_lang.Exchange.exchange_toastr_order_title}`)
		} else {
			//bot_buy_sell(bot_data);
			buy_sell_precheck(bot_data);
		}

	} else if (bot_or_manual == 'trademanual') {

		pair_price = $('.trading_pair_coin_price').val();

		base_volume = $('.trading_pair_coin_volume').val();

		pair_volume = pair_price * base_volume;

		$('.relvol_basevol').html(pair_volume.toFixed(8));

		trader_only = $('.trading_pair_destpubkey_yesno').is(":checked");
		trader_pubkey = $('.trading_pair_destpubkey').val();

		//autorepeat_trade = $('.trading_auto_repeat_trade_yesno').is(":checked");
		trading_options = $('input[name=trading_manual_buy_sell_options]:checked').val();

		trade_data = {}
		trade_data.price = pair_price;
		if (buying_or_selling == 'buying') {
			trade_data.volume = pair_volume;
		}
		if (buying_or_selling == 'selling') {
			trade_data.volume = $('.trading_pair_coin_volume').val();
		}
		trade_data.trader_only = trader_only;
		trade_data.destpubkey = trader_pubkey;
		//trade_data.autorepeat = autorepeat_trade;
		trade_data.trading_options = trading_options;
		//trade_data.action = $(this).data('action');
		//trade_data.action = $('.btn-bot_action').attr('data-action');
		trade_data.action = $(this).attr('data-action');

		console.log(trade_data);

		if (trading_options == 'disabled') {
			if (trade_data.volume <= 0.01) {
				console.log('Order is too small. Please try again.');
				toastr.warning(`${default_lang.Exchange.exchange_toastr_order_is_too_small}`, `${default_lang.Exchange.exchange_toastr_order_title}`)
			} else {
				//manual_buy_sell(trade_data)
				buy_sell_precheck(trade_data);
				$('.trading_auto_repeat_trade_yesno').attr('checked', false);
			}
		} else {
			//manual_buy_sell(trade_data)
			buy_sell_precheck(trade_data);
			$('.trading_auto_repeat_trade_yesno').attr('checked', false);
		}

	} else if (bot_or_manual == 'tradeportfolio') {

		var margin_or_fixed = $('#trading_pair_coin_autoprice_mode').prop('checked');

		var trade_data = {}
		if (margin_or_fixed == true) {
			trade_data.mode = 'margin';
			trade_data.modeval = $('.trading_pair_coin_price').val() / 100;
			//trade_data.action = $(this).data('action');
			//trade_data.action = $('.btn-bot_action').attr('data-action');
			trade_data.action = $(this).attr('data-action');
		} else {
			trade_data.mode = 'fixed';
			trade_data.modeval = $('.trading_pair_coin_price').val();
			//trade_data.action = $(this).data('action');
			//trade_data.action = $('.btn-bot_action').attr('data-action');
			trade_data.action = $(this).attr('data-action');
		}

		console.log(trade_data);
		autoprice_buy_sell(trade_data);
	}
});

$('input[name=trading_manual_buy_sell_options]').change(function () {
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	var trading_options = $('input[name=trading_manual_buy_sell_options]:checked').val();

	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();
	//console.log(buying_or_selling);

	var bot_or_manual = $('input[name=trading_mode_options]:checked').val();
	//console.log(bot_or_manual);

	var margin_or_fixed = $('#trading_pair_coin_autoprice_mode').prop('checked');

	if (trading_options == 'coinmarketcap') {
		$('.trading_pair_lable_text_one').html(`${default_lang.Exchange.exchange_portfolio_auto_price}`);
		$('.trading_selected_trader_label').hide();
		$('.trading_selected_trader').hide();
		$('.trading_pair_coin_autoprice_mode_span').show();
		$('#trading_pair_coin_autoprice_mode').bootstrapToggle('on');
		$('#trading_pair_coin_autoprice_mode').parent().addClass(' disabled');
		$('#trading_pair_coin_autoprice_mode').attr('disabled', 'disabled');
		$('#trading_pair_coin_price_max_min').html('%');
		if (buying_or_selling == 'buying') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			if (margin_or_fixed == true) {
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_buy_margin_percent);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_buy_margin_will_make);
			} else {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_buy_price);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_buy_on_fixed_price_will_make);
			}
		}
		if (buying_or_selling == 'selling') {
			if (margin_or_fixed == true) {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_sell_margin_percent);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_sell_margin_will_make);
			} else {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_sell_price);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_sell_on_fixed_price_will_make);
			}
		}
		$('.buy_sell_amount_to').hide();
		$('#trading_pair_coin_ticker').hide();
		$('.trading_pair_coin2').hide();
		$('.trading_pair_coin_volume').hide();
		$('.btn-bot_action').addClass(' btn-block');
		$('.btn-bot_action').css('border-top-left-radius', '4px');
		$('.btn-bot_action').css('border-bottom-left-radius', '4px');
		$('.buy_sell_button_div').css('margin-top', '20px');
		$('.relvol_basevol_amount').hide();
		$('.relvol_basevol_label').hide();
		$('.portfolio_info_text').show();
	} else {
		$('#trading_pair_coin_autoprice_mode').parent().removeClass(' disabled');
		$('#trading_pair_coin_autoprice_mode').removeAttr('disabled');
		//$('#trading_pair_coin_price_max_min').html(`${default_lang.Exchange.exchange_lbl_one_min}`);
		$('.trading_pair_lable_text_one').html('');
		//$('.trading_pair_lable_text_two').html('Sell');
		if (buying_or_selling == 'buying') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			$('.btn-bot_action').html(default_lang.Exchange.exchange_btn_buy_caps);
			$('.relvol_basevol_label').html(default_lang.Exchange.exchange_itll_cost_you)
			$('.btn-bot_action').attr('data-action', 'buy');
		}
		if (buying_or_selling == 'selling') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			$('.btn-bot_action').html(default_lang.Exchange.exchange_btn_sell_caps);
			$('.relvol_basevol_label').html(default_lang.Exchange.exchange_youll_get);
			$('.btn-bot_action').attr('data-action', 'sell');
		}
		//$('.btn-bot_action').attr('data-action', 'sell');
		//$('.trading_selected_trader_label').show();
		//$('.trading_selected_trader').show();
		$('.trading_pair_coin_autoprice_mode_span').hide();
		$('#trading_pair_coin_price_max_min').html(`${default_lang.Exchange.exchange_lbl_one_max}`);
		$('#trading_pair_coin_price_max_min').show();
		$('.buy_sell_amount_to').show();
		$('#trading_pair_coin_ticker').show();
		$('.trading_pair_coin2').show();
		$('.trading_pair_coin_volume').show();
		$('.btn-bot_action').removeAttr('btn-block');
		$('.btn-bot_action').css('border-top-left-radius', '0');
		$('.btn-bot_action').css('border-bottom-left-radius', '0');
		$('.buy_sell_button_div').css('margin-top', '0');
		$('.relvol_basevol_amount').show();
		$('.relvol_basevol_label').show();
		$('.portfolio_info_text').hide();
		$('.coingoal_label_div').hide();
		$('.coingoal_div').hide();
	}
})

$('.trading_pair_coin_price').keyup(function () {
	pair_price = $('.trading_pair_coin_price').val();

	base_volume = $('.trading_pair_coin_volume').val();

	pair_volume = pair_price * base_volume;

	$('.relvol_basevol').html(pair_volume.toFixed(8));
});

$('.trading_pair_coin_volume').keyup(function () {
	pair_price = $('.trading_pair_coin_price').val();

	base_volume = $('.trading_pair_coin_volume').val();

	pair_volume = pair_price * base_volume;

	$('.relvol_basevol').html(pair_volume.toFixed(8));
});


$('.exchange_bot_list_tbl tbody').on('click', '.btn_bot_status', function () {
	console.log('bot status button clicked')
	console.log($(this).data());

	bot_status($(this).data());
});

$('.exchange_bot_list_tbl tbody').on('click', '.btn_bot_resume', function () {
	console.log('bot resume button clicked')
	console.log($(this).data());

	bot_stop_pause_resume($(this).data());
});

$('.exchange_bot_list_tbl tbody').on('click', '.btn_bot_pause', function () {
	console.log('bot pause button clicked')
	console.log($(this).data());

	bot_stop_pause_resume($(this).data());
});

$('.exchange_bot_list_tbl tbody').on('click', '.btn_bot_stop', function () {
	console.log('bot stop button clicked')
	console.log($(this).data());

	bot_stop_pause_resume($(this).data());
});

$('.btn-trading_coin_balance_refresh').click(function (e) {
	e.preventDefault();
	console.log('btn-trading_coin_balance_refresh clicked');
	console.log($(this).data());

	bot_screen_sellcoin_balance();
	bot_screen_coin_balance();
	toastr.info('Updating balance info')
})


$('.btn_switch_trading_coin_pairs').click(function (e) {
	e.preventDefault();
	console.log('btn_switch_trading_coin_pairs clicked');

	var coin_pair1 = $('.trading_pair_coin').selectpicker('val');
	var coin_pair2 = $('.trading_pair_coin2').selectpicker('val');

	console.log(coin_pair1);
	console.log(coin_pair2);

	$('.trading_pair_coin').selectpicker('val', coin_pair2);
	$('.trading_pair_coin2').selectpicker('val', coin_pair1);


	$('.relvol_basevol_coin').html(coin_pair2);

	coin = $('.trading_pair_coin2').selectpicker('val');
	$('.coin_ticker').html(coin);
	$.each($('.coinexchange[data-coin]'), function (index, value) {
		$('.coinexchange[data-coin]').data('coin', coin);
	});

	bot_screen_sellcoin_balance();
	bot_screen_coin_balance();

	CheckOrderBookFn();

	var charts_instruments_data = {}
	charts_instruments_data.symbol = $('.trading_pair_coin2').selectpicker('val') + '/' + $('.trading_pair_coin').selectpicker('val');
	charts_instruments_data.company = 'Komodo Platform';
	ChartsInstruments(charts_instruments_data)
	UpdateDexChart($('.trading_pair_coin2').selectpicker('val'), $('.trading_pair_coin').selectpicker('val'));

});

function check_coin_balance(chk_coin_data) {
	console.log(chk_coin_data);
	if (chk_coin_data == false) {
		clearInterval(check_coin_balance_Interval);
		console.log('checking coin balance stopped.')
		return
	} else {
		console.log('checking coin balance');
	}

	var selected_coin = JSON.parse(sessionStorage.getItem('mm_selectedcoin'));
	console.log(selected_coin);
	var coin = selected_coin.coin;
	console.log(coin);



	//if (((chk_coin_data == null) ? coin : chk_coin_data.coin) == 'BTC') {
	if (coin == 'BTC') {
		$('#coindashboard-toggle').bootstrapToggle('enable');
	} else {
		$('#coindashboard-toggle').bootstrapToggle('disable');
	}

	$('.coindashboard-title').empty();
	$('.coindashboard-coin').empty();
	$('.coindashboard-balance').empty();
	$('.coindashboard-address[data-coin="' + coin + '"]').empty();
	$(".coindashboard-coinicon").attr("src", "img/cryptologo/" + coin.toLowerCase() + ".png");

	var coin_name = return_coin_details(coin).name;

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "getcoin", "coin": coin };
	var url = "http://127.0.0.1:7783";

	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (chk_coin_output_data) {
		// If successful
		//console.log(data);
		if (!chk_coin_output_data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(chk_coin_output_data.coins));
			sessionStorage.setItem('mm_userpass', chk_coin_output_data.userpass);
			sessionStorage.setItem('mm_mypubkey', chk_coin_output_data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
		}

		if (!chk_coin_output_data.error === false && chk_coin_output_data.error == 'coin is disabled') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			console.log(chk_coin_output_data.coin);
			console.log('coin ' + chk_coin_output_data.coin.coin + ' is disabled');
			$('.btn_coindashboard_send[data-coin="' + chk_coin_output_data.coin.coin + '"]').hide();
			$('.btn_coindashboard_receive[data-coin="' + chk_coin_output_data.coin.coin + '"]').hide();
			$('.btn_coindashboard_exchange[data-coin="' + chk_coin_output_data.coin.coin + '"]').hide();
			$('.btn_coindashboard_inventory[data-coin="' + chk_coin_output_data.coin.coin + '"]').hide();
			$('.btn_coindashboard_enable[data-coin="' + chk_coin_output_data.coin.coin + '"]').show();
			$('.btn_coindashboard_disable[data-coin="' + chk_coin_output_data.coin.coin + '"]').hide();

			$('.coindashboard-balance').html(default_lang.Exchange.exchange_coin_is_disabled_enable_before_trading)
			$('.coindashboard-balance').css("font-size", "35px");

		} else {
			//console.log(data);
			console.log(chk_coin_output_data.coin);
			//console.log(chk_coin_output_data.coin.smartaddress);
			//console.log(val);

			$('.btn_coindashboard_send[data-coin="' + chk_coin_output_data.coin.coin + '"]').show();
			$('.btn_coindashboard_receive[data-coin="' + chk_coin_output_data.coin.coin + '"]').show();
			$('.btn_coindashboard_exchange[data-coin="' + chk_coin_output_data.coin.coin + '"]').show();
			$('.btn_coindashboard_inventory[data-coin="' + chk_coin_output_data.coin.coin + '"]').show();
			$('.btn_coindashboard_enable[data-coin="' + chk_coin_output_data.coin.coin + '"]').hide();
			$('.btn_coindashboard_disable[data-coin="' + chk_coin_output_data.coin.coin + '"]').show();
			$('.coindashboard-address[data-coin="' + chk_coin_output_data.coin.coin + '"]').html(chk_coin_output_data.coin.smartaddress);
			$('.coindashboard-title').html(coin_name + ' (' + chk_coin_output_data.coin.coin + ')');
			$('.coindashboard-coin').html(chk_coin_output_data.coin.coin);


			$('.coindashboard-balance').css("font-size", "55px");
			$('.coindashboard-balance').html(chk_coin_output_data.coin.balance);
			$('.coindashboard-height').html(chk_coin_output_data.coin.height);
			$('.coindashboard-kmdvalue').html(chk_coin_output_data.coin.KMDvalue);
			$('.btn_coindashboard_inventory[data-addr]').attr('data-addr', chk_coin_output_data.coin.smartaddress);
		}

		//if (chk_coin_output_data.error == 'coin is disabled') {
		//console.log('coin '+ val + ' is disabled');
		//}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

}


function get_coin_info(coin) {

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "getcoin", "coin": coin };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (get_coin_info_output_data) {
		// If successful
		console.log(get_coin_info_output_data);
		if (!get_coin_info_output_data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(get_coin_info_output_data.coins));
			sessionStorage.setItem('mm_userpass', get_coin_info_output_data.userpass);
			sessionStorage.setItem('mm_mypubkey', get_coin_info_output_data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
		}

		if (!get_coin_info_output_data.error == true) {
			selected_coin = {}
			selected_coin.coin = coin;
			selected_coin.coin_name = return_coin_details(coin).name;
			selected_coin.addr = get_coin_info_output_data.coin.smartaddress;
			selected_coin.balance = get_coin_info_output_data.coin.balance;
			console.log(selected_coin);
			sessionStorage.setItem('mm_selectedcoin', JSON.stringify(selected_coin));
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}

function get_coin_info_spv_inv(coin_data) {

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "balance", "coin": coin_data.coin, "address": coin_data.addr };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		timeout: 5000, // sets timeout to 5 seconds
		url: url
	}).done(function (coin_balance_output_data) {
		// If successful
		console.log(coin_balance_output_data);

		$('.inventory-title').html('Manage Inventory (' + coin_balance_output_data.balance + ' ' + coin_data.coin + ')');
		$('.inventory-title').data('coin', coin_data.coin);
		$('.inventory-title').data('balance', coin_balance_output_data.balance);
		$('.btn-makeinventory').data('coin', coin_data.coin);
		$('.coininventory[data-coin]').attr('data-coin', coin_data.coin);
		$('.coininventory[data-coin]').attr('data-addr', coin_data.addr);
		$('.inventory-sliderTotalCoin').html(' ' + coin_data.coin);

		calc_data = { "coin": coin_data.coin, "balance": coin_balance_output_data.balance };
		clac_coin_inventory(calc_data);

		if (!coin_balance_output_data.error == true) {
			selected_coin = {}
			selected_coin.coin = coin_data.coin;
			selected_coin.coin_name = return_coin_details(coin_data.coin).name;
			selected_coin.addr = coin_data.addr;
			selected_coin.balance = coin_balance_output_data.balance;
			console.log(selected_coin);
			sessionStorage.setItem('mm_selectedcoin', JSON.stringify(selected_coin));
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}

function get_coins() {
	//console.log(data);

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "getcoins" };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);

		$.each(data, function (index, val) {
			//console.log(index);
			//console.log(val);
			if (val.status == 'active') {
				console.log(index);
				console.log(val);
			}
		});
		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
		}
		//toastr.success('Auto goal setup executed!', 'Portfolio Info')
		//$('.initcoinswap-output').html(JSON.stringify(data, null, 2));
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}

let electrumCoinsKeepAlive = {};

function enable_disable_coin(enable_disable_coin_data) {
	if (!enable_disable_coin_data.electrum) {
		if (electrumCoinsKeepAlive[enable_disable_coin_data.coin] &&
			enable_disable_coin_data.method === 'disable') {
			clearInterval(electrumCoinsKeepAlive[enable_disable_coin_data.coin]);
			delete electrumCoinsKeepAlive[enable_disable_coin_data.coin];
		} else {
			const _int = setInterval(() => {
				enable_disable_coin({
					method: 'enable',
					coin: enable_disable_coin_data.coin,
					electrum: false,
				});
			}, 3600 * 1000);

			electrumCoinsKeepAlive[enable_disable_coin_data.coin] = _int;
		}
	}

	console.warn('enable disable', enable_disable_coin_data);

	var electrum_option = enable_disable_coin_data.electrum //If 'false', electrum option selected
	var userpass = sessionStorage.getItem('mm_userpass');
	var url = "http://127.0.0.1:7783";

	if (enable_disable_coin_data.method === 'disable') {
		console.warn('disable coin called');
		var ajax_data = { "userpass": userpass, "method": "electrum", "coin": enable_disable_coin_data.coin };
		var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
		console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
		$.ajax({
			async: true,
			data: JSON.stringify(ajax_data),
			dataType: 'json',
			type: 'POST',
			url: url
		}).done(function (disable_coin_output_data) {
			console.log('enable_disable_coin', 'electrum removed');
		});
	}

	if (electrum_option == false) {
		console.log(electrum_option);
		console.log("electrum selected for " + enable_disable_coin_data.coin);
		//var rand_electrum_srv = get_random_electrum_server(data.coin);

		if (electrum_servers_list[enable_disable_coin_data.coin] == undefined) {
			console.log('no electrum servers found for: ' + enable_disable_coin_data.coin);
			toastr.warning('No Electrum Servers found for ' + enable_disable_coin_data.coin + '<br> Please use Native Mode for ' + enable_disable_coin_data.coin, 'Coin Status');
		}

		$.each(electrum_servers_list[enable_disable_coin_data.coin], function (index, val) {
			var ipaddr = _.keys(val);
			var return_data_ipaddr = ipaddr[0];
			var return_data_port = val[ipaddr[0]];
			console.log(return_data_ipaddr);
			console.log(return_data_port);

			var ajax_data = { "userpass": userpass, "method": "electrum", "coin": enable_disable_coin_data.coin, "ipaddr": return_data_ipaddr, "port": return_data_port };

			console.warn(new Date().toLocaleTimeString() + " MM_CALL: enable " + enable_disable_coin_data.coin);;
			$.ajax({
				async: true,
				data: JSON.stringify(ajax_data),
				dataType: 'json',
				type: 'POST',
				url: url
			}).done(function (enable_electrum_coin_output_data) {
				// If successful
				console.log(enable_electrum_coin_output_data);
				if (!enable_electrum_coin_output_data.userpass === false) {
					console.log('first marketmaker api call execution after marketmaker started.')
					sessionStorage.setItem('mm_usercoins', JSON.stringify(enable_electrum_coin_output_data.coins));
					sessionStorage.setItem('mm_userpass', enable_electrum_coin_output_data.userpass);
					sessionStorage.setItem('mm_mypubkey', enable_electrum_coin_output_data.mypubkey);

					var dexmode = sessionStorage.getItem('mm_dexmode');
					var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
					if (dexmode == 'dICO') {
						get_coin_info(selected_dICO_coin);
					}

					if (ajax_data.status === 'enable') {
						var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
						toastr.success(ajax_data.coin + default_lang.CoinControl.coincontrol_enabled, default_lang.CoinControl.coincontrol_toastr_title_coin_status);
					}
					if (ajax_data.status === 'disable') {
						var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
						toastr.success(ajax_data.coin + default_lang.CoinControl.coincontrol_disabled, default_lang.CoinControl.coincontrol_toastr_title_coin_status);
					}
					//get_coins_list(data.coins);
				} else {
					//get_coins_list(data);
					if (electrum_option == false) {
						//get_coins_list('');
						//$('.refresh_dex_balances').trigger('click');
					} else {
						//get_coins_list(data);
					}
				}

				if (!enable_electrum_coin_output_data.error === false) {
					//console.log(data.error);
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					toastr.info(enable_electrum_coin_output_data.error, default_lang.CoinControl.coincontrol_toastr_title_coin_status);
					if (enable_electrum_coin_output_data.error == 'couldnt find coin locally installed') { //{error: "couldnt find coin locally installed", coin: "BTC"}
						var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
						bootbox.alert({
							onEscape: true,
							backdrop: true,
							title: default_lang.CoinControl.coincontrol_couldnt_find_coin_locally_installed,
							message: `<p>` + enable_disable_coin_data.coin + `: ${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_p1}</p>
							<ol>
								<li>${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_check_points_li_01}</li>
								<li>${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_check_points_li_02}</li>
								<li>${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_check_points_li_03}</li>
								<li>${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_check_points_li_04}</li>
							</ol>
							<p>${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_p2}</p>
							<ul>
								<li><a href="https://support.komodoplatform.com/" target="_blank">https://support.komodoplatform.com</a></li>
							</ul>`,
							size: 'large'
						});
					}
				}
			}).fail(function (jqXHR, textStatus, errorThrown) {
				// If fail
				console.log(textStatus + ': ' + errorThrown);
			});
		});
	} else {
		console.log(electrum_option);
		console.log("native selected for " + enable_disable_coin_data.coin);
		var ajax_data = { "userpass": userpass, "method": enable_disable_coin_data.method, "coin": enable_disable_coin_data.coin };

		console.log(ajax_data);
		var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
		console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
		$.ajax({
			async: true,
			data: JSON.stringify(ajax_data),
			dataType: 'json',
			type: 'POST',
			url: url
		}).done(function (enable_native_coin_output_data) {
			// If successful
			console.log(enable_native_coin_output_data);
			if (!enable_native_coin_output_data.userpass === false) {
				console.log('first marketmaker api call execution after marketmaker started.')
				sessionStorage.setItem('mm_usercoins', JSON.stringify(enable_native_coin_output_data.coins));
				sessionStorage.setItem('mm_userpass', enable_native_coin_output_data.userpass);
				sessionStorage.setItem('mm_mypubkey', enable_native_coin_output_data.mypubkey);

				var dexmode = sessionStorage.getItem('mm_dexmode');
				var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
				if (dexmode == 'dICO') {
					get_coin_info(selected_dICO_coin);
				}

				if (ajax_data.status === 'enable') {
					toastr.success(ajax_data.coin + ' Enabled', 'Coin Status');
				}
				if (ajax_data.status === 'disable') {
					toastr.success(ajax_data.coin + ' Disabled', 'Coin Status');
				}
				//get_coins_list(enable_native_coin_output_data.coins);
			} else {
				//get_coins_list(enable_native_coin_output_data);
				if (electrum_option == false) {
					//get_coins_list('');
					//$('.refresh_dex_balances').trigger('click');
				} else {
					//get_coins_list(enable_native_coin_output_data);
				}
			}

			if (!enable_native_coin_output_data.error === false) {
				//console.log(enable_native_coin_output_data.error);
				toastr.info(enable_native_coin_output_data.error, 'Coin Status');
				if (enable_native_coin_output_data.error == 'couldnt find coin locally installed') { //{error: "couldnt find coin locally installed", coin: "BTC"}
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					bootbox.alert({
						onEscape: true,
						backdrop: true,
						title: ` ${return_coin_details(enable_disable_coin_data.coin).name} (${enable_disable_coin_data.coin}) : ` + default_lang.CoinControl.coincontrol_couldnt_find_coin_locally_installed,
						message: `<p>${return_coin_details(enable_disable_coin_data.coin).name} (${enable_disable_coin_data.coin}) : ${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_p1}</p>
						<ol>
							<li>${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_check_points_li_01}</li>
							<li>${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_check_points_li_02}</li>
							<li>${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_check_points_li_03}</li>
							<li>${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_check_points_li_04}</li>
						</ol>
						<p>${default_lang.CoinControl.coincontrol_it_seems_you_dont_have_p2}</p>
						<ul>
							<li><a href="https://support.komodoplatform.com/" target="_blank">https://support.komodoplatform.com</a></li>
						</ul>`,
						size: 'large'
					});
				}
			}
		}).fail(function (jqXHR, textStatus, errorThrown) {
			// If fail
			console.log(textStatus + ': ' + errorThrown);
		});
	}

	return
}




function check_coin_inventory(coin) {
	console.log(coin);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "inventory", "coin": coin };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);
		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
			//get_coins_list(data.coins);
			//$( ".inv_btn[data-coin='"+ coin +"']" ).trigger( "click" );
		} else {
			sessionStorage.setItem('mm_coininventory', JSON.stringify(data));
			$('.RawJSONInventory-output').html(JSON.stringify(data, null, 2));
			$('.dex_showinv_alice_tbl tbody').empty();

			// Disabled since v0.6.8-beta
			/*var inv_alice_table_tr = '';
			inv_alice_table_tr += '<tr>';
				inv_alice_table_tr += '<th>Index</th>';
				inv_alice_table_tr += '<th>Coin</th>';
				inv_alice_table_tr += '<th>Vout1</th>';
				inv_alice_table_tr += '<th>Value1</th>';
				inv_alice_table_tr += '<th>Vout2</th>';
				inv_alice_table_tr += '<th>Value2</th>';
				inv_alice_table_tr += '<th></th>';
			inv_alice_table_tr += '</tr>';
			$('.dex_showinv_alice_tbl tbody').append(inv_alice_table_tr);

			$.each(data.alice, function(index, val) {
				//console.log(index);
				//console.log(val);
					inv_alice_table_tr = '';
					inv_alice_table_tr += '<tr>';
					inv_alice_table_tr += '<td>' + index + '</td>';
					inv_alice_table_tr += '<td>' + val.coin + '</td>';
					inv_alice_table_tr += '<td>' + val.vout + '</td>';
					inv_alice_table_tr += '<td>' + (parseFloat(val.value)/100000000).toFixed(8) + ' ' + val.coin + '</td>';
					inv_alice_table_tr += '<td>' + val.vout2 + '</td>';
					inv_alice_table_tr += '<td>' + (parseFloat(val.value2)/100000000).toFixed(8) + ' ' + val.coin + '</td>';
					inv_alice_table_tr += '<td><button class="btn btn-default btn_coiniventory_detail" data-invof="alice" data-index="' + index + '">Detail</button></td>';
				inv_alice_table_tr += '</tr>';

				$('.dex_showinv_alice_tbl tbody').append(inv_alice_table_tr);
			})*/

		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}


function check_coin_listunspent(coin_listunspent_data) {
	console.log(coin_listunspent_data);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "listunspent", "coin": coin_listunspent_data.coin, "address": coin_listunspent_data.addr };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (coin_listunspent_output_data) {
		// If successful
		console.log(coin_listunspent_output_data);
		console.log(coin_listunspent_output_data[0].hasOwnProperty('account'));

		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		$('.dex_showlist_unspents_tbl tbody').empty();
		var show_list_unspents_tbl_tr = '';
		show_list_unspents_tbl_tr += '<tr>';
		show_list_unspents_tbl_tr += `<th style="width: 30px;">${default_lang.Inventory.inventory_th_index}</th>`;
		if (coin_listunspent_output_data[0].hasOwnProperty('account') == true) {
			show_list_unspents_tbl_tr += `<th>${default_lang.Inventory.inventory_th_coin_info}</th>`;
			show_list_unspents_tbl_tr += `<th>${default_lang.Inventory.inventory_th_value_info}</th>`;
			show_list_unspents_tbl_tr += `<th>${default_lang.Inventory.inventory_th_transaction_info}</th>`;
		} else {
			show_list_unspents_tbl_tr += `<th>${default_lang.Inventory.inventory_th_height}</th>`;
			show_list_unspents_tbl_tr += `<th>${default_lang.Inventory.inventory_th_tx_hash}</th>`;
			show_list_unspents_tbl_tr += `<th>${default_lang.Inventory.inventory_th_tx_pos}</th>`;
			show_list_unspents_tbl_tr += `<th>${default_lang.Inventory.inventory_th_value}</th>`;
		}
		show_list_unspents_tbl_tr += '</tr>';
		$('.dex_showlist_unspents_tbl tbody').append(show_list_unspents_tbl_tr);
		$.each(coin_listunspent_output_data, function (index, val) {
			//console.log(index);
			//console.log(val);

			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));

			if (val.hasOwnProperty('interest') == true) {
				var utxo_interest = val.interest;
			} else {
				var utxo_interest = 'N/A';
			}

			show_list_unspents_tbl_tr = '';
			show_list_unspents_tbl_tr += '<tr>';
			show_list_unspents_tbl_tr += '<td>' + index + '</td>';
			if (coin_listunspent_output_data[0].hasOwnProperty('account') == true) {
				show_list_unspents_tbl_tr += `<td>
													<b>${default_lang.Inventory.inventory_td_coin}:</b> ` + coin_listunspent_data.coin + `<br>
													<b>${default_lang.Inventory.inventory_td_account}:</b> ` + val.account + `<br>
													<b>${default_lang.Inventory.inventory_td_address}:</b> ` + val.address + `<br>
													</td>`;
				show_list_unspents_tbl_tr += `<td>
													<b>${default_lang.Inventory.inventory_td_amount}:</b> ` + (parseFloat(val.amount)).toFixed(8) + ' ' + coin_listunspent_data.coin + `<br>
													<b>${default_lang.Inventory.inventory_td_confirmations}:</b> ` + val.confirmations + `<br>
													<b>${default_lang.Inventory.inventory_td_interest}:</b> ` + utxo_interest + `<br>
													</td>`;
				show_list_unspents_tbl_tr += `<td>
													<b>${default_lang.Inventory.inventory_td_scriptpubkey}:</b> ` + val.scriptPubKey + `<br>
													<b>${default_lang.Inventory.inventory_td_txid}:</b> ` + val.txid + `<br>
													</td>`;
			} else {
				show_list_unspents_tbl_tr += `<td>` + val.height + `</td>`;
				show_list_unspents_tbl_tr += `<td>` + val.tx_hash + `</td>`;
				show_list_unspents_tbl_tr += `<td>` + val.tx_pos + `</td>`;
				show_list_unspents_tbl_tr += `<td>` + (parseFloat(val.value) / 100000000).toFixed(8) + ' ' + coin_listunspent_data.coin + `</td>`;
			}

			show_list_unspents_tbl_tr += '</tr>';

			$('.dex_showlist_unspents_tbl tbody').append(show_list_unspents_tbl_tr);
		})

	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}




$("#inventory_slider_input1").keyup(function () {
	var utxo_input = $("#inventory_slider_input1").val();
	var slider1_value = $("#inventory-slider1").val();
	$("#inventory-slider1Total").text((slider1_value * utxo_input).toFixed(8));

	var slider1_total = parseFloat($('#inventory-slider1Total').text());
	var slider2_total = parseFloat($('#inventory-slider2Total').text());
	var slider3_total = parseFloat($('#inventory-slider3Total').text());
	var slider_total = slider1_total + slider2_total + slider3_total;
	$('.inventory-sliderTotal').text(slider_total.toFixed(8));

	//var selected_coin = JSON.parse(sessionStorage.getItem('mm_selectedcoin'));
	var coin_balance = $('.inventory-title').data('balance');
	console.log(coin_balance);


	if (slider_total >= coin_balance || slider_total < 0) {
		$('.inventory-sliderTotal').css('color', 'red');
		$('.inventory-sliderTotalCoin').css('color', 'red');
		$('.btn-makeinventory').attr("disabled", "disabled");
	} else if (slider_total < coin_balance) {
		$('.inventory-sliderTotal').css('color', '');
		$('.inventory-sliderTotalCoin').css('color', '');
		$('.btn-makeinventory').removeAttr("disabled");
	}
});

$("#inventory_slider_input2").keyup(function () {
	utxo_input = $("#inventory_slider_input2").val();
	var slider2_value = $("#inventory-slider2").val();
	$("#inventory-slider2Total").text((slider2_value * utxo_input).toFixed(8));

	var slider1_total = parseFloat($('#inventory-slider1Total').text());
	var slider2_total = parseFloat($('#inventory-slider2Total').text());
	var slider3_total = parseFloat($('#inventory-slider3Total').text());
	var slider_total = slider1_total + slider2_total + slider3_total;
	$('.inventory-sliderTotal').text(slider_total.toFixed(8));

	//var selected_coin = JSON.parse(sessionStorage.getItem('mm_selectedcoin'));
	var coin_balance = $('.inventory-title').data('balance');
	console.log(coin_balance);

	if (slider_total >= coin_balance || slider_total < 0) {
		$('.inventory-sliderTotal').css('color', 'red');
		$('.inventory-sliderTotalCoin').css('color', 'red');
		$('.btn-makeinventory').attr("disabled", "disabled");
	} else if (slider_total < coin_balance) {
		$('.inventory-sliderTotal').css('color', '');
		$('.inventory-sliderTotalCoin').css('color', '');
		$('.btn-makeinventory').removeAttr("disabled");
	}
});

$("#inventory_slider_input3").keyup(function () {
	utxo_input = $("#inventory_slider_input3").val();
	var slider3_value = $("#inventory-slider3").val();
	$("#inventory-slider3Total").text((slider3_value * utxo_input).toFixed(8));

	var slider1_total = parseFloat($('#inventory-slider1Total').text());
	var slider2_total = parseFloat($('#inventory-slider2Total').text());
	var slider3_total = parseFloat($('#inventory-slider3Total').text());
	var slider_total = slider1_total + slider2_total + slider3_total;
	$('.inventory-sliderTotal').text(slider_total.toFixed(8));

	//var selected_coin = JSON.parse(sessionStorage.getItem('mm_selectedcoin'));
	var coin_balance = $('.inventory-title').data('balance');
	console.log(coin_balance);

	if (slider_total >= coin_balance || slider_total < 0) {
		$('.inventory-sliderTotal').css('color', 'red');
		$('.inventory-sliderTotalCoin').css('color', 'red');
		$('.btn-makeinventory').attr("disabled", "disabled");
	} else if (slider_total < coin_balance) {
		$('.inventory-sliderTotal').css('color', '');
		$('.inventory-sliderTotalCoin').css('color', '');
		$('.btn-makeinventory').removeAttr("disabled");
	}
});



$("#inventory-slider1").slider();
$("#inventory-slider1").on("slide", function (slideEvt) {
	$("#inventory-slider1Val").text(slideEvt.value);

	utxo_input = $("#inventory_slider_input1").val();
	$("#inventory-slider1Total").text((slideEvt.value * utxo_input).toFixed(8));

	var slider1_total = parseFloat($('#inventory-slider1Total').text());
	var slider2_total = parseFloat($('#inventory-slider2Total').text());
	var slider3_total = parseFloat($('#inventory-slider3Total').text());
	var slider_total = slider1_total + slider2_total + slider3_total;
	$('.inventory-sliderTotal').text(slider_total.toFixed(8));

	//var selected_coin = JSON.parse(sessionStorage.getItem('mm_selectedcoin'));
	var coin_balance = $('.inventory-title').data('balance');
	console.log(coin_balance);

	if (slider_total >= coin_balance || slider_total < 0) {
		$('.inventory-sliderTotal').css('color', 'red');
		$('.inventory-sliderTotalCoin').css('color', 'red');
		$('.btn-makeinventory').attr("disabled", "disabled");
	} else if (slider_total < coin_balance) {
		$('.inventory-sliderTotal').css('color', '');
		$('.inventory-sliderTotalCoin').css('color', '');
		$('.btn-makeinventory').removeAttr("disabled");
	}
});

$("#inventory-slider2").slider();
$("#inventory-slider2").on("slide", function (slideEvt) {
	$("#inventory-slider2Val").text(slideEvt.value);

	utxo_input = $("#inventory_slider_input2").val();
	$("#inventory-slider2Total").text((slideEvt.value * utxo_input).toFixed(8));

	var slider1_total = parseFloat($('#inventory-slider1Total').text());
	var slider2_total = parseFloat($('#inventory-slider2Total').text());
	var slider3_total = parseFloat($('#inventory-slider3Total').text());
	var slider_total = slider1_total + slider2_total + slider3_total;
	$('.inventory-sliderTotal').text(slider_total.toFixed(8));

	//var selected_coin = JSON.parse(sessionStorage.getItem('mm_selectedcoin'));
	var coin_balance = $('.inventory-title').data('balance');
	console.log(coin_balance);

	if (slider_total >= coin_balance || slider_total < 0) {
		$('.inventory-sliderTotal').css('color', 'red');
		$('.inventory-sliderTotalCoin').css('color', 'red');
		$('.btn-makeinventory').attr("disabled", "disabled");
	} else if (slider_total < coin_balance) {
		$('.inventory-sliderTotal').css('color', '');
		$('.inventory-sliderTotalCoin').css('color', '');
		$('.btn-makeinventory').removeAttr("disabled");
	}
});

$("#inventory-slider3").slider();
$("#inventory-slider3").on("slide", function (slideEvt) {
	$("#inventory-slider3Val").text(slideEvt.value);

	utxo_input = $("#inventory_slider_input3").val();
	$("#inventory-slider3Total").text((slideEvt.value * utxo_input).toFixed(8));

	var slider1_total = parseFloat($('#inventory-slider1Total').text());
	var slider2_total = parseFloat($('#inventory-slider2Total').text());
	var slider3_total = parseFloat($('#inventory-slider3Total').text());
	var slider_total = slider1_total + slider2_total + slider3_total;
	$('.inventory-sliderTotal').text(slider_total.toFixed(8));

	//var selected_coin = JSON.parse(sessionStorage.getItem('mm_selectedcoin'));
	var coin_balance = $('.inventory-title').data('balance');
	console.log(coin_balance);

	if (slider_total >= coin_balance || slider_total < 0) {
		$('.inventory-sliderTotal').css('color', 'red');
		$('.inventory-sliderTotalCoin').css('color', 'red');
		$('.btn-makeinventory').attr("disabled", "disabled");
	} else if (slider_total < coin_balance) {
		$('.inventory-sliderTotal').css('color', '');
		$('.inventory-sliderTotalCoin').css('color', '');
		$('.btn-makeinventory').removeAttr("disabled");
	}
});



function clac_coin_inventory(data) {
	console.log(data);

	utxo_input1 = (parseFloat(data.balance) * 0.12).toFixed(8);
	utxo_input2 = (parseFloat(data.balance) * 0.01).toFixed(8);
	utxo_input3 = (parseFloat(data.balance) * 0.1).toFixed(8);
	///console.log(utxo_input1);
	//console.log(utxo_input2);
	//console.log(utxo_input3);
	$("#inventory_slider_input1").val(utxo_input1);
	$("#inventory_slider_input2").val(utxo_input2);
	$("#inventory_slider_input3").val(utxo_input3);


	var slider_input1 = $('#inventory-slider1').val();
	var slider_input2 = $('#inventory-slider2').val();
	var slider_input3 = $('#inventory-slider3').val();
	$("#inventory-slider1Total").text(parseFloat(slider_input1 * utxo_input1).toFixed(8));
	$("#inventory-slider2Total").text(parseFloat(slider_input2 * utxo_input2).toFixed(8));
	$("#inventory-slider3Total").text(parseFloat(slider_input3 * utxo_input3).toFixed(8));

	var slider_total = parseFloat(slider_input1 * utxo_input1) + parseFloat(slider_input2 * utxo_input2) + parseFloat(slider_input3 * utxo_input3);
	console.log(slider_total);

	$('.inventory-sliderTotal').text(slider_total.toFixed(8));
}


function make_inventory_withdraw(mk_inv_data) {
	//console.log(data);
	coin = mk_inv_data.coin;

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "withdraw", "coin": mk_inv_data.coin, "outputs": mk_inv_data.outputs };
	var url = "http://127.0.0.1:7783";

	console.log(ajax_data);
	console.log(JSON.stringify(ajax_data));
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;

	$.ajax({
		data: JSON.stringify(ajax_data),
		//dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (mk_inv_withdraw_data) {
		console.log(mk_inv_withdraw_data);
		var paprsed_mk_inv_withdraw_data = JSON.parse(mk_inv_withdraw_data);

		if (paprsed_mk_inv_withdraw_data.complete == false) {
			toastr.error('Unsuccessful Transaction. Please try again.', 'Tansaction info');
		}
		if (paprsed_mk_inv_withdraw_data.complete == true) {
			var mk_inv_confirm_bootbox = bootbox.dialog({
				backdrop: true,
				onEscape: true,
				message: `<p>Sending a transaction to make small deposit change in your address for coin: <b>` + mk_inv_data.coin + `</b></p>
				<p>Please confirm if you wish to proceed sending this transaction. Regular Transaction fee applies to make this deposit change.<p><br>` + JSON.stringify(mk_inv_data.outputs, null, 2),
				closeButton: true,
				size: 'medium',

				buttons: {
					cancel: {
						label: "Cancel",
						className: 'btn-default',
						callback: function () {
						}
					},
					ok: {
						label: "Confirm",
						className: 'btn-primary btn_mk_inv_confirm_bootbox',
						callback: function () {
							mk_inv_sendrawtx(paprsed_mk_inv_withdraw_data, mk_inv_data.coin);
						}
					}
				}
			});
			mk_inv_confirm_bootbox.init(function () {
				console.log('mk_inv_confirm_bootbox dialog opened.')
			});
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}


function mk_inv_sendrawtx(mk_inv_rawtx_data, mk_inv_rawtx_coin) {
	console.log(mk_inv_rawtx_data);
	console.log(mk_inv_rawtx_coin);



	if (mk_inv_rawtx_data.hasOwnProperty('withdraw')) { console.log(mk_inv_rawtx_data.withdraw.hex); }

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "sendrawtransaction", "coin": mk_inv_rawtx_coin, "signedtx": (mk_inv_rawtx_data.hasOwnProperty('withdraw') ? mk_inv_rawtx_data.withdraw.hex : mk_inv_rawtx_data.hex) };
	var url = "http://127.0.0.1:7783";

	console.log(ajax_data);
	console.log(JSON.stringify(ajax_data));
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		//dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (mk_inv_sendrawtx_output_data) {
		// If successful
		console.log(mk_inv_sendrawtx_output_data);
		var parsed_mk_inv_sendrawtx_output_data = '';
		try {
			parsed_mk_inv_sendrawtx_output_data = JSON.parse(mk_inv_sendrawtx_output_data);
			console.log(parsed_mk_inv_sendrawtx_output_data);

			if (!parsed_mk_inv_sendrawtx_output_data.hasOwnProperty('error') === false && parsed_mk_inv_sendrawtx_output_data.error === false) {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				toastr.error(parsed_mk_inv_sendrawtx_output_data.error.message, default_lang.Portfolio.portfolio_toastr_title_tx_info);
			} else if (parsed_mk_inv_sendrawtx_output_data.result == null) {
				bootbox.alert('<p>Error making withdraw transaction: </p><br>' + JSON.stringify(parsed_mk_inv_sendrawtx_output_data.error, null, 2));
			} else if (parsed_mk_inv_sendrawtx_output_data.result == 'success') {
				toastr.info('Low no. of UTXOs<br>Please try again in 1 Minute.', 'Transaction Status');
			}
		} catch (e) {
			console.log(e);

			bootbox.alert(`Transaction Sent Successfully. Here's the Transaction ID:<br>
				<a href="#" onclick="shell.openExternal('`+ return_coin_details(mk_inv_rawtx_coin).explorer + mk_inv_sendrawtx_output_data + `'); return false;">` + mk_inv_sendrawtx_output_data + `</a>`);
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}


function addcoin_enable_disable_coin(data) {
	//console.log(data.coin);
	//console.log(data.status);
	var electrum_option = $('.toggle_checkbox[data-coin="' + data.coin + '"]').prop('checked'); //If 'false', electrum option selected
	var userpass = sessionStorage.getItem('mm_userpass');


	if (data.coin !== ' ') {
		console.log('coin value is not empty');
	} else {
		console.log('coin value is empty');
	}
	if (data.coin !== ' ' && data.status == 'enable') {
		if (electrum_option == false) {
			console.log(electrum_option);
			console.log("electrum selected for " + data.coin);
			var ajax_data = { "userpass": userpass, "method": "electrum", "coin": data.coin, "ipaddr": "46.4.125.2", "port": 50001 };
		} else {
			console.log(electrum_option);
			console.log("native selected for " + data.coin);
			var ajax_data = { "userpass": userpass, "method": data.status, "coin": data.coin };
		}
	} else if (data.coin !== ' ' && data.status == 'disable') {
		var ajax_data = { "userpass": userpass, "method": data.status, "coin": data.coin };
	} else if (data.coin == ' ') {
		var ajax_data = { "userpass": userpass, "method": "getcoins" };
	}
	var url = "http://127.0.0.1:7783";

	console.log(ajax_data);
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		//console.log(data);
		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
			if (ajax_data.status === 'enable') {
				toastr.success(ajax_data.coin + ' Enabled', 'Coin Status');
			}
			if (ajax_data.status === 'disable') {
				toastr.success(ajax_data.coin + ' Disabled', 'Coin Status');
			}
			get_coins_list(data.coins);
		} else {
			$('.initcoinswap-output').html(JSON.stringify(data, null, 2));
			//get_coins_list(data);
			if (electrum_option == false) {
				//get_coins_list('');
				$('.refresh_dex_balances').trigger('click');
				toastr.info('Coins List updating');
			} else {
				get_coins_list(data);
			}
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}

function get_coins_list() {

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');

	var ajax_data = { "userpass": userpass, "method": "getcoins" };
	console.log(ajax_data)
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);

		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
			get_coins_list();
			return
		} else {
			$('.addcoins_tbl tbody').empty();

			$.each(data, function (index, val) {
				console.log(index);
				console.log(val);

				var coin_name = return_coin_details(val.coin).name

				var addcoins_tbl_tr = '';

				addcoins_tbl_tr += '<tr>';
				addcoins_tbl_tr += '<td><img src="img/cryptologo/' + val.coin.toLowerCase() + '.png" width="30px;"/> ' + coin_name + ' (' + val.coin + ')</td>';
				addcoins_tbl_tr += '<td>' + val.balance + '</td>';
				addcoins_tbl_tr += '<td>' + val.smartaddress + '</td>';
				addcoins_tbl_tr += '<td><span class="label label-uppercase label-' + ((val.status == 'active') ? 'grey' : 'default') + '">' + val.status + '</span></td>';
				addcoins_tbl_tr += '<td>' + (parseFloat(val.txfee) / 100000000).toFixed(8) + '</td>';
				addcoins_tbl_tr += '<td><input class="toggle_checkbox" type="checkbox" checked data-toggle="toggle" data-on="Native" data-off="Electrum" data-onstyle="grey" data-offstyle="info" data-width="100px" data-coin="' + val.coin + '" disabled></td>';
				addcoins_tbl_tr += '<td style="width: 165px;"> <div class="btn-group" role="group">' + ((val.status == 'active') ? '<button class="btn btn-xs btn-warning addcoins_tbl_disable_btn" data-coin="' + val.coin + '">Disable</button>' : '<button class="btn btn-xs btn-success addcoins_tbl_enable_btn" data-coin="' + val.coin + '">Enable</button>') + '</div></td>';
				addcoins_tbl_tr += '</tr>';

				$('.addcoins_tbl tbody').append(addcoins_tbl_tr);

				/*if (val.status == 'active') {
					$('.selectpicker option').filter(function () { return $(this).html() == val.coin; }).removeAttr('disabled');
				}else {
					$('.selectpicker option').filter(function () { return $(this).html() == val.coin; }).attr("disabled","disabled");
				}

				$('.selectpicker').selectpicker('refresh');*/
				$('.toggle_checkbox[data-coin="BTC"]').removeAttr('disabled');
				$('.toggle_checkbox').bootstrapToggle();

				if (!val.electrum === false) {
					console.log(val);
					$('.toggle_checkbox[data-coin="' + val.coin + '"]').prop('checked', false).change()
				}
			})
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
};


function addcoins_dialog() {

	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	var bot_update_bootbox = bootbox.dialog({
		onEscape: true,
		backdrop: true,
		message: `
			<div class="row">
				<div class="col-sm-12">
					<div class="panel panel-default">
						<div class="panel-heading">
						<h3 class="panel-title"><strong>${default_lang.Portfolio.portfolio_add_coins}</strong></h3>
						</div>
						<div class="panel-body"> <!-- panel-body -->

							<div class="col-sm-6">
							<select class="selectpicker addcoin_enable_disable_selection" data-live-search="true" data-hide-disabled="true" data-width="100%"></select>
							</div>
							<div class="col-sm-6">
							<input class="toggle_checkbox toggle_font_lg" id="addcoin_toggle_native_electrum" type="checkbox" checked data-toggle="toggle" data-on="${default_lang.CoinControl.coincontrol_native_mode}" data-off="${default_lang.CoinControl.coincontrol_electrum_mode}" data-onstyle="primary" data-offstyle="info" data-width="100%" data-height="44px">
							</div>


						</div>
					</div>
				</div>
			</div>`,
		closeButton: false,
		size: 'medium',

		buttons: {
			cancel: {
				label: `${default_lang.Common.btn_cancel}`,
				className: 'btn-default',
				callback: function () {

				}
			},
			ok: {
				label: `${default_lang.CoinControl.coincontrol_enable}`,
				className: 'btn-success btn-addcoins_enable',
				callback: function () {
					var addcoin_data = {}
					addcoin_data.coin = $('.addcoin_enable_disable_selection').selectpicker('val');
					addcoin_data.electrum = $('#addcoin_toggle_native_electrum').prop('checked');
					addcoin_data.method = 'enable';
					console.log(addcoin_data);

					enable_disable_coin(addcoin_data);
					$('.porfolio_coins_list tbody').empty();
					var actiavte_portfolio_coins_list_spinner = ''
					actiavte_portfolio_coins_list_spinner += '<th colspan="7">';
					actiavte_portfolio_coins_list_spinner += '<div style="text-align: center; height: 100px;">';
					actiavte_portfolio_coins_list_spinner += '<svg id="portfolio-coins-spinner">';
					actiavte_portfolio_coins_list_spinner += '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
					actiavte_portfolio_coins_list_spinner += '<circle class="path2" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
					actiavte_portfolio_coins_list_spinner += '<circle class="path3" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
					actiavte_portfolio_coins_list_spinner += '<circle class="path4" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
					actiavte_portfolio_coins_list_spinner += '</svg>';
					actiavte_portfolio_coins_list_spinner += '</div>';
					actiavte_portfolio_coins_list_spinner += '</th>';
					$('.porfolio_coins_list tbody').append(actiavte_portfolio_coins_list_spinner);
					CheckPortfolioFn();

				}
			}
		}
	});
	bot_update_bootbox.init(function () {
		$('.addcoin_enable_disable_selection').html(coin_select_options);
		$('.addcoin_enable_disable_selection').selectpicker('render');

		$('.toggle_checkbox').bootstrapToggle('off');

		//console.log('bot_update_settings dialog opened.')
		//$('.btn-bot_settings_update').attr("disabled", "disabled");
		//$('.trading_pair_coin_newprice').inputNumber();
		//$('.trading_pair_coin_newvolume').inputNumber();

	});
}


/* Portfolio section functions START */


$('.porfolio_coins_list').on('click', '.btn_portfolio_disable', function () {
	console.log('btn_portfolio_disable clicked');
	console.log($(this).data());

	enable_disable_coin($(this).data());
	$('.porfolio_coins_list tbody').empty();
	var actiavte_portfolio_coins_list_spinner = ''
	actiavte_portfolio_coins_list_spinner += '<th colspan="7">';
	actiavte_portfolio_coins_list_spinner += '<div style="text-align: center; height: 100px;">';
	actiavte_portfolio_coins_list_spinner += '<svg id="portfolio-coins-spinner">';
	actiavte_portfolio_coins_list_spinner += '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path2" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path3" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path4" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '</svg>';
	actiavte_portfolio_coins_list_spinner += '</div>';
	actiavte_portfolio_coins_list_spinner += '</th>';
	$('.porfolio_coins_list tbody').append(actiavte_portfolio_coins_list_spinner);
	CheckPortfolioFn();
});

$('.porfolio_coins_list').on('click', '.btn_portfolio_receive', function () {
	console.log('btn_portfolio_receive clicked');
	console.log($(this).data());
	coinBalanceReceiveAddr($(this).data('coin'));
})

$('.porfolio_coins_list').on('click', '.btn_portfolio_send', function () {
	console.log('btn_portfolio_send clicked');
	console.log($(this).data());
	coinBalanceSendFn($(this).data('coin'));
});


function CheckPortfolioFn(sig) {
	if (sig == false) {
		clearInterval(CheckPortfolio_Interval);
		return 'Check portfolio calls stopped.';
	} else {
		console.log('checking portfolio');
	}

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');

	var ajax_data = { "userpass": userpass, "method": "portfolio" };
	console.log(ajax_data)
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		timeout: 61000, // sets timeout to 61 seconds
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);

		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);
			CheckPortfolioFn();

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
			return
		}

		PortfolioTblDataFn(data);
		PortfolioChartUpdate(data.portfolio);
		//$('.initcoinswap-output').html(JSON.stringify(data, null, 2));
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}


function PortfolioTblDataFn(portfolio_tbl_data) {
	console.log(portfolio_tbl_data.portfolio.length);
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	if (portfolio_tbl_data.portfolio &&
		portfolio_tbl_data.portfolio.length) {
		$('#portfolio-coins-spinner').hide();
	}

	$('.portfolio_kmd_equiv').html(portfolio_tbl_data.kmd_equiv);
	$('.portfolio_buycoin').html(portfolio_tbl_data.buycoin);
	$('.portfolio_buyforce').html(portfolio_tbl_data.buyforce);
	$('.portfolio_sellcoin').html(portfolio_tbl_data.sellcoin);
	$('.portfolio_sellforce').html(portfolio_tbl_data.sellforce);
	$('.portfolio_base').html(portfolio_tbl_data.base);
	$('.portfolio_rel').html(portfolio_tbl_data.rel);
	$('.portfolio_relvolume').html(portfolio_tbl_data.relvolume);

	var barterDEX_settings = ShepherdIPC({ "command": "read_settings" });
	//console.log(barterDEX_settings);
	if (barterDEX_settings.experimentalFeatures == false) {
		var coingoal_style_showhide = 'display: none;';
	} else {
		var coingoal_style_showhide = '';
	}

	if (barterDEX_settings.charts == 'show') {
		sessionStorage.setItem('mm_tradingchart', 'show');
	}
	if (barterDEX_settings.charts == 'hide') {
		sessionStorage.setItem('mm_tradingchart', 'hide');
	}

	$('.dex_portfolio_coins_tbl tbody').empty();

	$('.porfolio_coins_list tbody').empty();
	$.each(portfolio_tbl_data.portfolio, function (index, val) {
		//console.log(index);
		console.log(val);

		var coin_name = return_coin_details(val.coin).name

		var dex_portfolio_coins_tbl_tr = '';

		dex_portfolio_coins_tbl_tr += '<tr>';
		dex_portfolio_coins_tbl_tr += '<td><img src="img/cryptologo/' + val.coin.toLowerCase() + '.png" width="30px;"/> ' + coin_name + ' (' + val.coin + ')</td>';
		//dex_portfolio_coins_tbl_tr += '<td>' + val.address + '</td>';
		dex_portfolio_coins_tbl_tr += '<td class="porfolio_coins_list_td_amount" data-coin="' + val.coin + '" data-address="' + val.address + '">' + val.amount + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.price + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.goal + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.goalperc + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.kmd_equiv + '</td>';
		dex_portfolio_coins_tbl_tr += `<td style="white-space: nowrap">
											<button class="btn btn-sm btn-success btn_portfolio_send" data-coin="` + val.coin + `">${default_lang.Common.btn_send} <span class="fa fa-paper-plane-o" aria-hidden="true"></span></button>
											<button class="btn btn-sm btn-warning btn_portfolio_receive" data-coin="` + val.coin + `">${default_lang.Common.btn_receive} <span class="fa fa-inbox" aria-hidden="true"></span></button>
											<button class="btn btn-sm btn-info btn_portfolio_coingoal" data-coin="` + val.coin + `" data-auto=false style="${coingoal_style_showhide}">${default_lang.Common.btn_set_goal} <span class="glyphicon glyphicon-export" aria-hidden="true"></span></button>
											<button class="btn btn-sm btn-primary btn-portfoliogo" data-coin="` + val.coin + `" data-coinname="` + coin_name + `" data-addr="` + val.address + `" data-balance="` + val.amount + `">${default_lang.Common.btn_exchange} <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>
											<button class="btn btn-sm btn-danger btn_portfolio_disable" data-electrum=true data-method="disable" data-coin="` + val.coin + `">${default_lang.Common.btn_disable} <span class="fa fa-times" aria-hidden="true"></span></button>
											</td>`
		//dex_portfolio_coins_tbl_tr += '<td>' + val.perc + '</td>';
		/*dex_portfolio_coins_tbl_tr += '<td>' + val.relvolume + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.force + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.balanceA + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.valuesumA + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.aliceutil + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.balanceB + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.valuesumB + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.balance + '</td>';
		dex_portfolio_coins_tbl_tr += '<td>' + val.bobutil + '</td>';*/
		dex_portfolio_coins_tbl_tr += '</tr>';

		$('.porfolio_coins_list tbody').append(dex_portfolio_coins_tbl_tr);

		if (val.address.substring(0, 2) == '0x') {
			console.log(val.address);
			portfolio_get_eth_erc20_balance({"coin":val.coin, "address":val.address});
		}
	})
};


function portfolio_get_eth_erc20_balance(etherc20_balance_data) {
	console.log(etherc20_balance_data);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "balance", "coin": etherc20_balance_data.coin, "address": etherc20_balance_data.address };
	var url = "http://127.0.0.1:7783/";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		timeout: 5000, // sets timeout to 5 seconds
		url: url
	}).done(function (etherc20_balance_output_data) {
		// If successful
		console.log(etherc20_balance_output_data);
		$('.porfolio_coins_list_td_amount[data-coin="' + etherc20_balance_data.coin + '"]').html(etherc20_balance_output_data.balance);

	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}

function PortfolioChartUpdate(chart_data) {
	console.log(chart_data)
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	var chart = AmCharts.makeChart("portfolio_chart_current", {
		"type": "pie",
		"theme": "black",
		"addClassNames": true,
		"dataProvider": chart_data,
		"valueField": "perc",
		"titleField": "coin",
		"startDuration": 0,
		"innerRadius": 50,
		"pullOutRadius": 20,
		"marginTop": 30,
		"marginBottom": 15,
		"marginLeft": 0,
		"marginRight": 0,
		"pullOutRadius": 0,
		"allLabels": [
			{
				"y": "46%",
				"align": "center",
				"size": 25,
				"bold": true,
				"text": default_lang.Portfolio.portfolio_goal_now,
				"color": "#e2e2e2"
			},
			{
				"y": "40%",
				"align": "center",
				"size": 15,
				"text": default_lang.Portfolio.portfolio_goal,
				"color": "#e2e2e2"
			}
		],
		"export": {
			"enabled": false
		}
	});

	var chart2 = AmCharts.makeChart("portfolio_chart_target", {
		"type": "pie",
		"theme": "black",
		"addClassNames": true,
		"dataProvider": chart_data,
		"valueField": "goalperc",
		"titleField": "coin",
		"startDuration": 0,
		"innerRadius": 50,
		"pullOutRadius": 20,
		"marginTop": 30,
		"marginBottom": 15,
		"marginLeft": 0,
		"marginRight": 0,
		"pullOutRadius": 0,
		"allLabels": [
			{
				"y": "46%",
				"align": "center",
				"size": 25,
				"bold": true,
				"text": default_lang.Portfolio.portfolio_goal_target,
				"color": "#e2e2e2"
			},
			{
				"y": "40%",
				"align": "center",
				"size": 15,
				"text": default_lang.Portfolio.portfolio_goal,
				"color": "#e2e2e2"
			}
		],
		"export": {
			"enabled": false
		}
	});
}

$('.btn-refreshportfolio').click(function () {
	console.log('clicked refresh button at dex portfolio charts');
	$('.porfolio_coins_list tbody').empty();
	var actiavte_portfolio_coins_list_spinner = ''
	actiavte_portfolio_coins_list_spinner += '<th colspan="7">';
	actiavte_portfolio_coins_list_spinner += '<div style="text-align: center; height: 100px;">';
	actiavte_portfolio_coins_list_spinner += '<svg id="portfolio-coins-spinner">';
	actiavte_portfolio_coins_list_spinner += '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path2" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path3" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path4" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '</svg>';
	actiavte_portfolio_coins_list_spinner += '</div>';
	actiavte_portfolio_coins_list_spinner += '</th>';
	$('.porfolio_coins_list tbody').append(actiavte_portfolio_coins_list_spinner);
	CheckPortfolioFn();
	toastr.info('Updating Coins list');
});

$('.refresh_dex_potfolio').click(function () {
	console.log('clicked refresh button at dex portfolio charts');
	CheckPortfolioFn();
});

$('.refresh_dex_potfolio_coins').click(function () {
	console.log('clicked refresh button at dex portfolio charts');
	CheckPortfolioFn();
});


$('.portfolio_set_price_btn').click(function () {
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	var price = $('#portfolio_set_price').val();
	var base_coin = $('.buy_coin_p').selectpicker('val');
	var rel_coin = $('.sell_coin_p').selectpicker('val');

	console.log('price ' + price);
	console.log('base ' + base_coin);
	console.log('rel ' + rel_coin);

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "setprice", "base": base_coin, "rel": rel_coin, "price": price };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);
		toastr.success(`${default_lang.Exchange.exchange_portfolio_price_for_base}: ` + base_coin + `<br> ${default_lang.Exchange.exchange_th_my_orders_rel}: ` + rel_coin + `<br> ${default_lang.Exchange.exchange_portfolio_price_set_to}: ` + price + ' ' + rel_coin, exchange_portfolio_toastr_portfolio_info_title)
		$('.initcoinswap-output').html(JSON.stringify(data, null, 2));
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

})


$('.portfolio_set_autoprice_btn').click(function () {
	var margin = $('#portfolio_set_autoprice').val();
	var base_coin = $('.buy_coin_p').selectpicker('val');
	var rel_coin = $('.sell_coin_p').selectpicker('val');

	console.log('margin ' + margin);
	console.log('base ' + base_coin);
	console.log('rel ' + rel_coin);

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "autoprice", "base": base_coin, "rel": rel_coin, "margin": margin };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);
		toastr.success('Margin Price for Base: ' + base_coin + ' Rel: ' + rel_coin + ' set to: ' + margin + '% ' + rel_coin, 'Portfolio Info')
		$('.initcoinswap-output').html(JSON.stringify(data, null, 2));
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

})


function set_coin_goal(goal_data) {
	console.log(goal_data);

	//console.log('AUTO GOAL: ' + goal_data.auto);
	//console.log('GOAL PERCENTAGE: ' + goal_data.percent);
	//console.log('GOAL COIN: '+ goal_data.coin);

	var userpass = sessionStorage.getItem('mm_userpass');
	if (goal_data.auto == false) {
		var ajax_data = { "userpass": userpass, "method": "goal", "coin": goal_data.coin, "val": goal_data.percent };
	} else {
		var ajax_data = { "userpass": userpass, "method": "goal" };
	}
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);
		if (goal_data.auto == false) {
			toastr.success('Goal for ' + goal_data.coin + ' set to: ' + goal_data.percent + '%', 'Portfolio Info')
		} else {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			bootbox.alert({
				message: `${default_lang.Portfolio.portfolio_set_auto_goal_executed}`,
				buttons: {
					ok: {
						label: `${default_lang.Common.btn_ok_caps}`,
						className: 'btn-primary',
						callback: function () {
						}
					}
				}
			});
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

	$('.porfolio_coins_list tbody').empty();
	var actiavte_portfolio_coins_list_spinner = ''
	actiavte_portfolio_coins_list_spinner += '<th colspan="7">';
	actiavte_portfolio_coins_list_spinner += '<div style="text-align: center; height: 100px;">';
	actiavte_portfolio_coins_list_spinner += '<svg id="portfolio-coins-spinner">';
	actiavte_portfolio_coins_list_spinner += '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path2" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path3" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '<circle class="path4" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"/>';
	actiavte_portfolio_coins_list_spinner += '</svg>';
	actiavte_portfolio_coins_list_spinner += '</div>';
	actiavte_portfolio_coins_list_spinner += '</th>';
	$('.porfolio_coins_list tbody').append(actiavte_portfolio_coins_list_spinner);
	CheckPortfolioFn();
}



$('#trading_pair_coin_autoprice_mode').change(function () {
	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();
	var bot_or_manual = $('input[name=trading_mode_options]:checked').val();
	var margin_or_fixed = $('#trading_pair_coin_autoprice_mode').prop('checked');

	if (bot_or_manual == 'tradeportfolio') {
		if (margin_or_fixed == true) {
			$('#trading_pair_coin_price_max_min').show();
			$('.trading_pair_coin_price').css('border-radius', '0')
			//$('.trading_pair_coin_price').attr("placeholder", "Margin e.g. 0.01");
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			if (buying_or_selling == 'buying') {
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_buy_margin_percent);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_buy_margin_will_make);
			}
			if (buying_or_selling == 'selling') {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_sell_margin_percent);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_sell_margin_will_make);
			}
		} else {
			$('#trading_pair_coin_price_max_min').hide();
			$('.trading_pair_coin_price').css('border-radius', '4px')
			//$('.trading_pair_coin_price').attr("placeholder", "Price e.g. 0.01");
			if (buying_or_selling == 'buying') {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_buy_price);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_buy_on_fixed_price_will_make);
			}
			if (buying_or_selling == 'selling') {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_sell_price);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_sell_on_fixed_price_will_make);
			}
		}
	}
});

$('.btn_set_coin_goal').click(function (e) {
	e.preventDefault();
	console.log('btn_set_coin_goal clicked');
	console.log($(this).data());

	var coin = $('.trading_pair_coin2').selectpicker('val', coin);
	console.log(coin);

	var goal_data = {}
	goal_data.coin = coin;
	goal_data.auto = $(this).data('auto');
	goal_data.percent = $('.coingoal_percentage').val();

	//console.log(goal_data);
	set_coin_goal(goal_data);
});

$('.btn-autogoalall').click(function (e) {
	e.preventDefault();
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	console.log('btn-autogoalall clicked');
	console.log($(this).data());

	var goal_data = {}
	goal_data.auto = $(this).data('auto');

	bootbox.confirm({
		message: `${default_lang.Portfolio.portfolio_auto_goal_all_text}`,
		buttons: {
			confirm: {
				label: default_lang.Common.yes_small,
				className: 'btn-success'
			},
			cancel: {
				label: default_lang.Common.no_small,
				className: 'btn-danger'
			}
		},
		callback: function (result) {
			if (result == true) {
				//console.log(goal_data);
				set_coin_goal(goal_data);
			}
		}
	});
});


function autoprice_buy_sell(autoprice_data) {
	console.log(autoprice_data);
	var coin = $('.trading_pair_coin2').selectpicker('val', coin);
	//console.log(coin);

	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();
	var margin_or_fixed = $('#trading_pair_coin_autoprice_mode').prop('checked');

	if (buying_or_selling == 'buying') {
		var base_coin = coin;
		var rel_coin = $('.trading_pair_coin').selectpicker('val');
	}
	if (buying_or_selling == 'selling') {
		var base_coin = $('.trading_pair_coin').selectpicker('val');
		var rel_coin = coin;
	}

	//var base_coin = coin;
	//var rel_coin = $('.trading_pair_coin').selectpicker('val');

	console.log('BUYING or SELLING??: ' + buying_or_selling);
	console.log('BASE: ' + base_coin);
	console.log('REL: ' + rel_coin);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');

	if (autoprice_data.mode == 'margin') {
		var ajax_data = { "userpass": userpass, "method": "autoprice", "base": base_coin, "rel": rel_coin, "margin": autoprice_data.modeval };
	}
	if (autoprice_data.mode == 'fixed') {
		var ajax_data = { "userpass": userpass, "method": "autoprice", "base": base_coin, "rel": rel_coin, "fixed": autoprice_data.modeval };
	}

	console.log(ajax_data);

	console.log(JSON.stringify(ajax_data));

	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);

		$('.trading_pair_coin_price').val('');
		$('.trading_pair_coin_volume').val('');
		$('.trading_pair_destpubkey').val('');
		$('.relvol_basevol').html('');

		if (!data.error === false) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.error(data.error, default_lang.Exchange.exchange_tradingbot_toastr_trade_info_title);
		} else if (data.result == 'success') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.success('Order Executed', default_lang.Exchange.exchange_tradingbot_toastr_trade_info_title);

			var autoprice_mode = '';
			var percent_on_off = '';
			var autoprice_modeinfo = '';
			var autoprice_modeval = '';
			if (autoprice_data.mode == 'margin') {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				autoprice_mode = default_lang.Exchange.exchange_portfolio_margin;
				percent_on_off = '%';
				autoprice_modeinfo = default_lang.Exchange.exchange_portfolio_margin_percent;
				autoprice_modeval = autoprice_data.modeval * 100;
			}
			if (autoprice_data.mode == 'fixed') {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				autoprice_mode = default_lang.Exchange.exchange_portfolio_fixed;
				percent_on_off = '';
				autoprice_modeinfo = default_lang.Exchange.exchange_portfolio_fixed_price;
				autoprice_modeval = autoprice_data.modeval;

			}
			bootbox.alert(autoprice_mode + ` ${default_lang.Exchange.exchange_portfolio_auto_price_order_executed}:<br>
						<b>${default_lang.Exchange.exchange_portfolio_buying_currency_base}:</b>` + base_coin + ` <br>
						<b>${default_lang.Exchange.exchange_portfolio_selling_currency_rel}:</b>` + rel_coin + ` <br>
						<b>` + autoprice_modeinfo + `:</b> ` + autoprice_modeval + `` + percent_on_off);
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}

/* Portfolio section functions END */

/* Manual Tradeing */

function manual_buy_sell(mt_data) {
	console.log(mt_data);
	var coin = $('.trading_pair_coin2').selectpicker('val', coin);
	//console.log(coin);

	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();

	/*if(buying_or_selling == 'buying') {
		var base_coin = coin;
		var rel_coin = $('.trading_pair_coin').selectpicker('val');
	}
	if(buying_or_selling == 'selling') {
		var base_coin = $('.trading_pair_coin').selectpicker('val');
		var rel_coin = coin;
	}*/

	var base_coin = coin;
	var rel_coin = $('.trading_pair_coin').selectpicker('val');

	console.log('BUYING or SELLING??: ' + buying_or_selling);
	console.log('BASE: ' + base_coin);
	console.log('REL: ' + rel_coin);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');

	if (mt_data.action == 'buy') {
		if (mt_data.trading_options == 'autorepeat') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			//var base_coin = coin;
			//var rel_coin = $('.trading_pair_coin').selectpicker('val');
			var ajax_data = { "userpass": userpass, "method": "autoprice", "base": base_coin, "rel": rel_coin, "fixed": 1 / mt_data.price };
			toastr.success(`${default_lang.Exchange.exchange_manual_auto_repeat_buy_order_executed} ${mt_data.price}`, default_lang.Exchange.exchange_toastr_trade_notification_title);
		} else if (mt_data.trading_options == 'coinmarketcap') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			var buying_or_selling = $('input[name=trading_pair_options]:checked').val();
			if (buying_or_selling == 'buying') {
				var base_coin = $('.trading_pair_coin').selectpicker('val');
				var rel_coin = coin;
			}
			if (buying_or_selling == 'selling') {
				var base_coin = coin;
				var rel_coin = $('.trading_pair_coin').selectpicker('val');
			}
			var ajax_data = { "userpass": userpass, "method": "autoprice", "base": base_coin, "rel": rel_coin, "margin": mt_data.price / 100, "refbase": base_coin.toLowerCase(), "refrel": "coinmarketcap" }
			toastr.success(`${default_lang.Exchange.exchange_autorepat_buy_order_executed_at_margin_percent} ${mt_data.price}%`, default_lang.Exchange.exchange_toastr_trade_notification_title);
			toastr.success(`${default_lang.Exchange.exchange_autorepeat_auto_adjust_based_on_coinmarketcap_buy}`, default_lang.Exchange.exchange_toastr_trade_notification_title);
		} else {
			var ajax_data = { "userpass": userpass, "method": "buy", "base": base_coin, "rel": rel_coin, "price": mt_data.price, "relvolume": mt_data.volume };
		}
		if (mt_data.trader_only == true) {
			ajax_data.destpubkey = mt_data.destpubkey;
		}
	}
	if (mt_data.action == 'sell') {
		if (mt_data.trading_options == 'autorepeat') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			var base_coin = $('.trading_pair_coin').selectpicker('val');
			var rel_coin = coin;
			var ajax_data = { "userpass": userpass, "method": "autoprice", "base": base_coin, "rel": rel_coin, "fixed": mt_data.price };
			toastr.success(`${default_lang.Exchange.exchange_manual_auto_repeat_sell_order_executed} ${mt_data.price}`, default_lang.Exchange.exchange_toastr_trade_notification_title);
		} else if (mt_data.trading_options == 'coinmarketcap') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			var buying_or_selling = $('input[name=trading_pair_options]:checked').val();
			if (buying_or_selling == 'buying') {
				var base_coin = $('.trading_pair_coin').selectpicker('val');
				var rel_coin = coin;
			}
			if (buying_or_selling == 'selling') {
				var base_coin = coin;
				var rel_coin = $('.trading_pair_coin').selectpicker('val');
			}
			var ajax_data = { "userpass": userpass, "method": "autoprice", "base": base_coin, "rel": rel_coin, "margin": mt_data.price / 100, "refbase": base_coin.toLowerCase(), "refrel": "coinmarketcap" }
			toastr.success(`${default_lang.Exchange.exchange_autorepat_sell_order_executed_at_margin_percent} ${mt_data.price}%`, default_lang.Exchange.exchange_toastr_trade_notification_title);
			toastr.success(`${default_lang.Exchange.exchange_autorepeat_auto_adjust_based_on_coinmarketcap_sell}`, default_lang.Exchange.exchange_toastr_trade_notification_title);
		} else {
			var ajax_data = { "userpass": userpass, "method": "sell", "base": base_coin, "rel": rel_coin, "price": mt_data.price, "basevolume": mt_data.volume };
		}
		if (mt_data.trader_only == true) {
			ajax_data.destpubkey = mt_data.destpubkey;
		}
	}

	console.log(ajax_data);

	console.log(JSON.stringify(ajax_data));

	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (mt_output_data) {
		// If successful
		console.log(mt_output_data);

		//$('.trading_pair_coin_price').val('');
		//$('.trading_pair_coin_volume').val('');
		$('.trading_pair_destpubkey').val('');
		//$('.relvol_basevol').html('');

		if (!mt_output_data.error === false) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.error(mt_output_data.error, default_lang.Exchange.exchange_tradingbot_toastr_trade_info_title);
			if (mt_output_data.error == 'cant find a deposit that is close enough in size. make another deposit that is just a bit larger than what you want to trade') {
				if (mt_data.action == 'buy') {
					var deposit = {};
					deposit.amount = mt_data.volume.toFixed(8);
					deposit.coin = rel_coin;
				}
				if (mt_data.action == 'sell') {
					var deposit = {};
					deposit.amount = mt_data.volume;
					deposit.coin = base_coin;
				}
				DepositOnError(deposit);
			}
			if (mt_output_data.error == 'not enough funds') {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				//toastr.info(mt_output_data.error + '<br>Balance: ' + mt_output_data.balance + ' ' + mt_output_data.coin, `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
				bootbox.alert({
					backdrop: true,
					onEscape: true,
					title: `${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos}`,
					message: `<p>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_p1}</p>
					<p>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_p2}</p>
					<p>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_p3}<br>
					${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_p4}</p>
					<p>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_p5}</p>
					<ul>
					<li>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_li1}<br>
					${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_li2}</li>
					<li>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_li3}</li>
					<li>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_li4}</li>
					</ul>`});
				console.log(JSON.stringify(mt_output_data))

				/*if (mt_output_data.withdraw.complete === true) {
					//bot_sendrawtx(mt_output_data);
					toastr.success('Executed Auto Split Funds. Please try in approx. 30 seconds again.', `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
				} else {
					toastr.error('No withdraw info found. Please try again with lower buy amount.', `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
				}*/
			} else {
				if (mt_output_data.error == 'only one pending request at a time') {
					toastr.error("Please wait " + JSON.stringify(mt_output_data.wait) + " seconds before trying to place your next order", default_lang.Exchange.exchange_tradingbot_toastr_trade_info_title);
				} else {
					toastr.error(mt_output_data.error, default_lang.Exchange.exchange_tradingbot_toastr_trade_info_title);
				}
			}
		} else if (mt_output_data.result == 'success') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.success(default_lang.Exchange.exchange_order_executed, default_lang.Exchange.exchange_tradingbot_toastr_trade_info_title);
			if (!mt_output_data.pending === false) {
				toastr.info("Please wait " + JSON.stringify(mt_output_data.pending.timeleft) + " seconds before placing your next order", default_lang.Exchange.exchange_tradingbot_toastr_trade_info_title);
			}
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}



/* Manual Tradeing END */


function DepositOnError(deposit_data) {
	console.log(deposit_data);

	if (return_coin_details(deposit_data.coin).eth == true) {
		deposit_data.coin = 'ETOMIC';
		var coin_name = 'ETOMIC';
	} else {
		var coin_name = return_coin_details(deposit_data.coin).name;
	}

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "getcoin", "coin": deposit_data.coin };
	var url = "http://127.0.0.1:7783";

	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);

		if (deposit_data.amount > data.coin.balance) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			var blockquote_text = `${default_lang.Exchange.exchange_depositonerror_required_trade_is_over_your_total_balance}<br>
					<span style="font-size: 200%;">${deposit_data.amount} ${deposit_data.coin}</span>`;
			var show_table = ``;
			var make_deposit_btn_state = 'hidden';
		} else {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			var blockquote_text = `${default_lang.Exchange.exchange_depositonerror_want_to_make_a_relevant_despoit}`;
			var show_table = `<table class="table table-striped">
								<tr>
									<td style="text-align: right;">${default_lang.Common.tx_from}</td>
									<td style="text-align: left;">${data.coin.smartaddress}</td>
								</tr>
								<tr>
									<td style="text-align: right;">${default_lang.Common.tx_to}</td>
									<td style="text-align: left;">${data.coin.smartaddress}</td>
								</tr>
								<tr>
									<td  style="text-align: right;">${default_lang.Common.tx_amount}</td>
									<td  style="text-align: left;">${deposit_data.amount} ${deposit_data.coin}</td>
								</tr>
								<tr>
									<td  style="text-align: right;">${default_lang.Common.tx_fees}</td>
									<td  style="text-align: left;">${data.coin.txfee / 100000000} ${deposit_data.coin}</td>
								</tr>
								<tr>
									<td  style="text-align: right; font-size: 150%;">${default_lang.Common.tx_total}</td>
									<td  style="text-align: left; font-size: 150%;">${parseFloat(deposit_data.amount) + parseFloat(data.coin.txfee / 100000000)} ${deposit_data.coin}</td>
								</tr>
							</table>`;
			var make_deposit_btn_state = 'shown';
		}

		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		var deposit_size_error_bootbox = bootbox.dialog({
			onEscape: true,
			backdrop: true,
			message: `<div style="text-align: center; margin-top: -40px;">
							<img src="img/cryptologo/${deposit_data.coin.toLowerCase()}.png" class="coin_balance_receive_coin_logo"/>
						</div>
						<div style="text-align: center;">
							<div id="receive_addr_qrcode"></div>
							<pre style="font-size: 18px;">${data.coin.smartaddress}</pre class="receive_addr_qrcode_addr">
							<blockquote style="font-size: 15px; font-weight: 400; color: #ff3b00; background-color: #ffd9bf; border-left: 5px solid #f00;">${default_lang.Exchange.exchange_depositonerror_system_did_not_find_matching_deposit}<br>${blockquote_text}</blockquote>
							${show_table}
						</div>`,
			closeButton: false,
			size: 'medium',
			className: 'deposit_size_error_class_bootbox',

			buttons: {
				cancel: {
					label: default_lang.Common.btn_cancel,
					className: 'btn-default',
					callback: function () {

					}
				},
				ok: {
					label: default_lang.Exchange.exchange_depositonerror_make_deposit_btn,
					className: 'btn-primary deposit_size_error_send_action',
					callback: function () {
						var to_addr = data.coin.smartaddress;
						console.log(to_addr);

						var output_data = [];
						var output_data_obj = new Object();
						output_data_obj[to_addr] = parseFloat(deposit_data.amount) + parseFloat(data.coin.txfee / 100000000);
						output_data.push(output_data_obj);
						console.log(output_data);

						var output_data_2nd = new Object();
						var calc_2nd_amount = (deposit_data.amount - 0.0001 * 2) / 777
						output_data_2nd[to_addr] = calc_2nd_amount.toFixed(8);
						output_data.push(output_data_2nd);
						console.log(output_data);

						var output_data_feetx = new Object();
						output_data_feetx[to_addr] = 0.0001;
						output_data.push(output_data_feetx);
						console.log(output_data);

						console.log(deposit_data.coin);
						create_sendtx(deposit_data.coin, output_data);

					}
				}
			}
		});
		deposit_size_error_bootbox.init(function () {
			console.log('deposit_size_error_bootbox dialog opened.')
			var qrcode = new QRCode("receive_addr_qrcode", { width: 128, height: 128 });
			qrcode.makeCode(data.coin.smartaddress); // make another code.
			$('#receive_addr_qrcode > img').removeAttr('style');
			$('#receive_addr_qrcode > img').css('display', 'initial');
			$('#receive_addr_qrcode > img').css('border', '9px solid #f1f1f1', 'border-radius', '5px', 'margin', '5px');
			$('#receive_addr_qrcode > img').css('border-radius', '5px');
			$('#receive_addr_qrcode > img').css('margin', '5px');

			if (make_deposit_btn_state == 'hidden') {
				$('.deposit_size_error_send_action').hide();
			}
		});

	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}


/* Auto Trading Bot */

function setOrderPrice(trade_data) {
	console.log(trade_data);
	//trade_data = JSON.parse(trade_data);
	//console.log(trade_data);

	if (trade_data.type == 'asks') {
		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		trade_price_plus = trade_data.price * 1.001;
		toastr.info(`${default_lang.Exchange.exchange_tradingbot_auto_selected_price_as} ${trade_data.price} + 0.1% = ${trade_price_plus.toFixed(8)}`, default_lang.Exchange.exchange_tradingbot_toastr_trade_info_title);
		$('#trading_pair_options_buying').trigger('click');
	}
	if (trade_data.type == 'bids') {
		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		trade_price_plus = trade_data.price / 1.001;
		toastr.info(`${default_lang.Exchange.exchange_tradingbot_auto_selected_price_as} ${trade_data.price} - 0.1% = ${trade_price_plus.toFixed(8)}`, default_lang.Exchange.exchange_tradingbot_toastr_trade_info_title);
		$('#trading_pair_options_selling').trigger('click');
	}

	$('.trading_pair_coin_price').val(trade_price_plus.toFixed(8));

	var bot_or_manual = $('input[name=trading_mode_options]:checked').val();

	if (bot_or_manual == 'tradebot') {

	}
	if (bot_or_manual == 'trademanual') {

		pair_volume = trade_data.maxbuy;
		$('.trading_pair_coin_volume').val(pair_volume.toFixed(8));
		$('.relvol_basevol').html(trade_data.maxvolume);
		$('.trading_pair_destpubkey').val(trade_data.pubkey);
	}

}

function infoOrderPrice(trade_data) {
	console.log(trade_data);
	bootbox.dialog({
		//title: 'A custom dialog with init',
		onEscape: true,
		backdrop: true,
		message: `<table class="table table-striped orderbook_row_data" width="100%" style="margin-bottom: 0;">
						<tbody>
							<tr>
								<td>Address</td>
								<td>${trade_data.address}</td>
							</tr>
							<tr>
								<td>Age</td>
								<td>${trade_data.age}</td>
							</tr>
							<tr>
								<td>UTXOs</td>
								<td>${trade_data.numutxos}</td>
							</tr>
							<tr>
								<td>Average Volume</td>
								<td>${((trade_data.avevolume == 0) ? 'n/a' : trade_data.avevolume)}</td>
							</tr>
						</tbody>
					</table>`
	});
}


function CheckOrderBookFn(sig) {
	if (sig == false) {
		clearInterval(CheckOrderbook_Interval);
		return
	} else {
		console.log('checking orderbook');
	}

	var coin = $('.trading_pair_coin2').selectpicker('val', coin);
	console.log('trading_pair_coin2 is: ' + coin);

	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();

	if (buying_or_selling == 'buying') {
		var base_coin = coin;
		var rel_coin = $('.trading_pair_coin').selectpicker('val');
	}
	if (buying_or_selling == 'selling') {
		// Disabled selling option to show opposite pair orderbook result.
		//var base_coin = $('.trading_pair_coin').selectpicker('val');
		//var rel_coin = coin;
		var base_coin = coin;
		var rel_coin = $('.trading_pair_coin').selectpicker('val');
	}

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');

	$('.orderbook_rel_coin').html(rel_coin);
	$('.orderbook_base_coin').html(base_coin);

	var ajax_data = { "userpass": userpass, "method": "orderbook", "base": base_coin, "rel": rel_coin };
	//console.log(ajax_data)
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);
		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
			//CheckOrderBookFn();
		} else {
			//console.log(data.asks);

			$('.orderbook_numasks').html(data.numasks);
			$('.orderbook_numbids').html(data.numbids);

			$('.orderbook_bids tbody').empty();
			$.each(data.bids, function (index, val) {
				//console.log(index);
				//console.log(val);
				var colorpbk = coloredPubkey(val.pubkey);
				var coloraddr = coloredPubkey(val.address);

				var mytrade_true = '';
				if (val.pubkey === mypubkey) {
					var mytrade_true = 'class="warning"';
				}

				row_trade_data = {};
				row_trade_data.price = val.price;
				//row_trade_data.minvolume = val.minvolume;
				row_trade_data.maxvolume = val.maxvolume;
				row_trade_data.avevolume = val.avevolume;
				row_trade_data.numutxos = val.numutxos;
				row_trade_data.depth = val.depth;
				row_trade_data.maxbuy = val.maxvolume / val.price;
				row_trade_data.pubkey = val.pubkey;
				row_trade_data.address = val.address;
				row_trade_data.age = val.age;
				row_trade_data.type = 'bids';
				//row_trade_data.totalbuy = (val.avevolume / val.price) * val.numutxos;

				var orderbook_bids_tr = '';
				orderbook_bids_tr += '<tr ' + mytrade_true + '>';
				orderbook_bids_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + val.price + '</td>';
				//orderbook_bids_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + val.minvolume + '</td>';
				orderbook_bids_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + val.maxvolume + '</td>';
				//orderbook_bids_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + ((val.avevolume == 0) ? 'n/a' : val.avevolume) + '</td>';
				orderbook_bids_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + val.depth + '</td>';
				//orderbook_bids_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + coloraddr.firstpart + '<font style="color: #' + coloraddr.colorpart1 + '; background-color: #' + coloraddr.colorpart1 + ';">' + coloraddr.char1 + '</font><font style="color: #' + coloraddr.colorpart2 + '; background-color: #' + coloraddr.colorpart2 + ';">' + coloraddr.char2 + '</font><font style="color: #' + coloraddr.colorpart3 + '; background-color: #' + coloraddr.colorpart3 + ';">' + coloraddr.char3 + '</font>' + coloraddr.lastpart + '</td>';
				//orderbook_bids_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + val.age + '</td>';
				//orderbook_bids_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + ((val.numutxos == 0) ? 'n/a' : val.numutxos) + '</td>';
				orderbook_bids_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')><span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span> ' + val.zcredits.toFixed(2) + '</td>';
				orderbook_bids_tr += '<td><button class="btn btn-xs" onclick=infoOrderPrice(' + JSON.stringify(row_trade_data) + ')><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span></button></td>';
				orderbook_bids_tr += '</tr>';
				$('.orderbook_bids tbody').append(orderbook_bids_tr);
			})

			$('.orderbook_asks tbody').empty();
			if (data.asks &&
				data.asks.length) {
				$('.orderbook-asks-spinner').hide();
			}
			$.each(data.asks, function (index, val) {
				//console.log(index);
				//console.log(val);
				var colorpbk = coloredPubkey(val.pubkey);
				var coloraddr = coloredPubkey(val.address);

				var mytrade_true = '';
				if (val.pubkey === mypubkey) {
					var mytrade_true = 'class="warning"';
				}

				row_trade_data = {};
				row_trade_data.price = val.price;
				//row_trade_data.minvolume = val.minvolume;
				row_trade_data.maxvolume = val.maxvolume;
				row_trade_data.avevolume = val.avevolume;
				row_trade_data.numutxos = val.numutxos;
				row_trade_data.depth = val.depth;
				row_trade_data.maxbuy = val.maxvolume / val.price;
				row_trade_data.pubkey = val.pubkey;
				row_trade_data.address = val.address;
				row_trade_data.age = val.age;
				row_trade_data.type = 'asks';
				//row_trade_data.totalbuy = (val.avevolume / val.price) * val.numutxos;
				var orderbook_asks_tr = '';
				orderbook_asks_tr += '<tr ' + mytrade_true + '>';
				orderbook_asks_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + val.price + '</td>';
				//orderbook_asks_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + val.minvolume + ' - ' + val.maxvolume + '</td>';
				orderbook_asks_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + val.maxvolume + '</td>';
				//orderbook_asks_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + row_trade_data.totalbuy.toFixed(8) + '</td>';
				//orderbook_asks_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + ((val.avevolume == 0) ? 'n/a' : val.avevolume) + '</td>';
				orderbook_asks_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + val.depth + '</td>';
				//orderbook_asks_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + coloraddr.firstpart + '<font style="color: #' + coloraddr.colorpart1 + '; background-color: #' + coloraddr.colorpart1 + ';">' + coloraddr.char1 + '</font><font style="color: #' + coloraddr.colorpart2 + '; background-color: #' + coloraddr.colorpart2 + ';">' + coloraddr.char2 + '</font><font style="color: #' + coloraddr.colorpart3 + '; background-color: #' + coloraddr.colorpart3 + ';">' + coloraddr.char3 + '</font>' + coloraddr.lastpart + '</td>';
				//orderbook_asks_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + val.age + '</td>';
				//orderbook_asks_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')>' + ((val.numutxos == 0) ? 'n/a' : val.numutxos) + '</td>';
				orderbook_asks_tr += '<td onclick=setOrderPrice(' + JSON.stringify(row_trade_data) + ')><span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span> ' + val.zcredits.toFixed(2) + '</td>';
				orderbook_asks_tr += '<td><button class="btn btn-xs" onclick=infoOrderPrice(' + JSON.stringify(row_trade_data) + ')><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span></button></td>';
				orderbook_asks_tr += '</tr>';
				$('.orderbook_asks tbody').append(orderbook_asks_tr);
			})
		}

		//$('.initcoinswap-output').html(JSON.stringify(data, null, 2));
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

	return 'Check orderbook calls stopped.';
}


$('.exchange_my_orders_tbl tbody').on('click', '.btn_my_prices_cancel', function () {
	console.log('btn_my_prices_cancel clicked')
	console.log($(this).data());

	cancel_my_prices($(this).data());
});

function check_my_prices(sig) {
	if (sig == false) {
		clearInterval(check_my_prices_Interval);
		return
	} else {
		console.log('checking my prices');
	}

	var coin = $('.trading_pair_coin2').selectpicker('val', coin);
	console.log(coin);

	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();

	if (buying_or_selling == 'buying') {
		var base_coin = coin;
		var rel_coin = $('.trading_pair_coin').selectpicker('val');
	}
	if (buying_or_selling == 'selling') {
		var base_coin = $('.trading_pair_coin').selectpicker('val');
		var rel_coin = coin;
	}

	var userpass = sessionStorage.getItem('mm_userpass');
	//var ajax_data = {"userpass":userpass,"method":"myprice","base":base_coin,"rel":rel_coin};
	var ajax_data = { "userpass": userpass, "method": "myprices" };
	console.log(ajax_data)
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		timeout: 5000, // sets timeout to 5 seconds
		url: url
	}).done(function (data) {
		// If successful
		console.log('check_my_prices data: ' + JSON.stringify(data));
		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
		} else {
			//console.log(data);
			$('.exchange_my_orders_tbl tbody').empty();
			if (!data.error === false) {
				toastr.error(data.error, 'My price info')
				/*if (!data.error == 'authentication error you need to make sure userpass is set') {
					var exchange_my_orders_tr = '';
					exchange_my_orders_tr += '<tr>';
					exchange_my_orders_tr += '<td><div style="text-align: center;">' + data.error + ' for pair ' + base_coin + '/' + rel_coin + '</div></td>';
					exchange_my_orders_tr += '</tr>';
					$('.exchange_my_orders_tbl tbody').append(exchange_my_orders_tr);
				}*/
			} else {
				$.each(data, function (index, val) {
					//console.log(index);
					//console.log(val);

					var base_coin_name = return_coin_details(val.base).name
					var rel_coin_name = return_coin_details(val.rel).name

					var exchange_my_orders_tr = '';
					exchange_my_orders_tr += '<tr>';
					exchange_my_orders_tr += '<td>' + val.base + ' (' + base_coin_name + ')</td>';
					exchange_my_orders_tr += '<td>' + val.rel + ' (' + rel_coin_name + ')</td>';
					exchange_my_orders_tr += '<td>' + val.bid + '</td>';
					exchange_my_orders_tr += '<td>' + val.ask + '</td>';
					exchange_my_orders_tr += `<td><button class="btn btn-xs btn-danger btn_my_prices_cancel" data-base="${val.base}" data-rel="${val.rel}"><span class="glyphicon glyphicon-stop"></span></button></td>`;
					exchange_my_orders_tr += '</tr>';
					$('.exchange_my_orders_tbl tbody').append(exchange_my_orders_tr);
				});

				/*var base_coin_name = return_coin_details(data.base).name
				var rel_coin_name = return_coin_details(data.rel).name

				var exchange_my_orders_tr = '';
				exchange_my_orders_tr += '<tr>';
					exchange_my_orders_tr += '<td>'+ data.base + ' (' + base_coin_name + ')</td>';
					exchange_my_orders_tr += '<td>'+ data.rel + ' (' + rel_coin_name + ')</td>';
					exchange_my_orders_tr += '<td>' + data.bid + '</td>';
					exchange_my_orders_tr += '<td>' + data.ask + '</td>';
				exchange_my_orders_tr += '</tr>';
				$('.exchange_my_orders_tbl tbody').append(exchange_my_orders_tr);*/
			}
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

}

function cancel_my_prices(cancel_data) {
	console.log(cancel_data);

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "setprice", "base": cancel_data.base, "rel": cancel_data.rel, "price": 0, "broadcast": 1 };
	console.log(ajax_data)
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);
		check_my_prices();
		CheckOrderBookFn();
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

}


$('.trading_pair_coin').on('change', function (e) {
	var optionSelected = $("option:selected", this);
	var valueSelected = this.value;
	console.log(valueSelected);

	$('.relvol_basevol_coin').html(valueSelected);

	bot_screen_sellcoin_balance();
	bot_screen_coin_balance();

	CheckOrderBookFn();

	var charts_instruments_data = {}
	charts_instruments_data.symbol = $('.trading_pair_coin2').selectpicker('val') + '/' + $('.trading_pair_coin').selectpicker('val');
	charts_instruments_data.company = 'Komodo Platform';
	ChartsInstruments(charts_instruments_data)
	UpdateDexChart($('.trading_pair_coin2').selectpicker('val'), $('.trading_pair_coin').selectpicker('val'));
});


$('.trading_pair_coin2').on('change', function (e) {
	var optionSelected_pair_coin2 = $("option:selected", this);
	var valueSelected_pair_coin2 = this.value;
	console.log(valueSelected_pair_coin2);

	coin = $('.trading_pair_coin2').selectpicker('val');

	selected_coin = {}
	selected_coin.coin = coin;
	selected_coin.coin_name = return_coin_details(coin).name;
	//selected_coin.addr = $(this).data('addr');
	//selected_coin.balance = $(this).data('balance');
	console.log(selected_coin);
	sessionStorage.setItem('mm_selectedcoin', JSON.stringify(selected_coin));

	$('.coin_ticker').html(coin);
	$.each($('.coinexchange[data-coin]'), function (index, value) {
		$('.coinexchange[data-coin]').data('coin', coin);
	});
	$('.coingoal_label_coin_name').html(return_coin_details(coin).name + ' (' + coin + ')');

	bot_screen_sellcoin_balance();
	bot_screen_coin_balance();

	CheckOrderBookFn();

	var charts_instruments_data = {}
	charts_instruments_data.symbol = $('.trading_pair_coin2').selectpicker('val') + '/' + $('.trading_pair_coin').selectpicker('val');
	charts_instruments_data.company = 'Komodo Platform';
	ChartsInstruments(charts_instruments_data)
	UpdateDexChart($('.trading_pair_coin2').selectpicker('val'), $('.trading_pair_coin').selectpicker('val'));

});

$('.btn-refreshtrading_pair').click(function (e) {
	e.preventDefault();
	console.log('btn-refreshtrading_pair clicked');
	console.log($(this).data());

	//update_min_max_price_input();
})

$('.refresh-trades-history-icon').click(function (e) {
	e.preventDefault();
	toastr.info('Trade history updated')
})

$('input[name=trading_pair_options]').change(function () {
	console.log('trading_pair_options changed');

	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));

	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();
	console.log(buying_or_selling);

	var bot_or_manual = $('input[name=trading_mode_options]:checked').val();
	console.log(bot_or_manual);

	var margin_or_fixed = $('#trading_pair_coin_autoprice_mode').prop('checked');

	if (buying_or_selling == 'buying') {
		if (bot_or_manual == 'tradeportfolio') {
			$('.trading_pair_lable_text_one').html(`${default_lang.Exchange.exchange_portfolio_auto_price}`)
			$('#trading_pair_coin_price_max_min').html('%');
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			if (margin_or_fixed == true) {
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_buy_margin_percent);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_buy_margin_will_make);
			} else {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_buy_price);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_buy_on_fixed_price_will_make);
			}
		} else {
			$('#trading_pair_coin_price_max_min').html(`${default_lang.Exchange.exchange_lbl_one_max}`);
			$('.trading_pair_lable_text_one').html(`${default_lang.Exchange.exchange_lbl_one_max}`);
			$('.btn-bot_action').html(default_lang.Exchange.exchange_btn_buy_caps);
			$('.btn-bot_action').attr('data-action', 'buy');
			$('.relvol_basevol_label').html(default_lang.Exchange.exchange_itll_cost_you)
		}
		$('.trading_pair_lable_text_two').html(default_lang.Exchange.exchange_lbl_two_buy_small);
		$('.btn-bot_action').attr('data-action', 'buy');
		CheckOrderBookFn();
	}
	if (buying_or_selling == 'selling') {
		if (bot_or_manual == 'tradeportfolio') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			$('.trading_pair_lable_text_one').html(`${default_lang.Exchange.exchange_portfolio_auto_price}`)
			$('#trading_pair_coin_price_max_min').html('%');
			if (margin_or_fixed == true) {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_sell_margin_percent);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_sell_margin_will_make);
			} else {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_sell_price);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_sell_on_fixed_price_will_make);
			}
		} else {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			$('#trading_pair_coin_price_max_min').html(`${default_lang.Exchange.exchange_lbl_one_min}`);
			$('.trading_pair_lable_text_one').html(`${default_lang.Exchange.exchange_lbl_one_min}`);
			$('.btn-bot_action').html(default_lang.Exchange.exchange_btn_sell_caps);
			$('.btn-bot_action').attr('data-action', 'sell');
			$('.relvol_basevol_label').html(default_lang.Exchange.exchange_youll_get);
		}
		$('.trading_pair_lable_text_two').html(default_lang.Exchange.exchange_lbl_sell_small);
		$('.btn-bot_action').attr('data-action', 'sell');
		CheckOrderBookFn();
	}
});

$('.trading_pair_coin').on('changed.bs.select', function (e) {
	$('.trading_pair_coin').selectpicker('val');
	$('.relvol_basevol_coin').html($('.trading_pair_coin').selectpicker('val'));
	bot_screen_sellcoin_balance();
	bot_screen_coin_balance();
});

$('.your_coins_balance_info').on('click', '.coin_balance_enable_native', function () {
	console.log('coin_balance_enable_native clicked');
	console.log($(this).data());

	enable_disable_coin($(this).data());
	bot_screen_sellcoin_balance();
	bot_screen_coin_balance();
});

$('.your_coins_balance_info').on('click', '.coin_balance_enable_electrum', function () {
	console.log('coin_balance_enable_electrum clicked');
	console.log($(this).data());

	enable_disable_coin($(this).data());
	bot_screen_sellcoin_balance();
	bot_screen_coin_balance();
});

$('.your_coins_balance_info').on('click', '.coin_balance_disable', function () {
	console.log('coin_balance_disable clicked');
	console.log($(this).data());

	enable_disable_coin($(this).data());
	bot_screen_sellcoin_balance();
	bot_screen_coin_balance();
});

$('.your_coins_balance_info').on('click', '.coin_balance_receive', function () {
	console.log('coin_balance_receive clicked');
	console.log($(this).data());
	coinBalanceReceiveAddr($(this).data('coin'));
})

$('.your_coins_balance_info').on('click', '.coin_balance_send', function () {
	console.log('coin_balance_send clicked');
	console.log($(this).data());
	coinBalanceSendFn($(this).data('coin'));
});

function coinBalanceReceiveAddr(coin) {

	var coin_name = return_coin_details(coin).name;

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "getcoin", "coin": coin };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;

	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);
		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
		}

		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		bootbox.dialog({
			//title: 'A custom dialog with init',
			onEscape: true,
			backdrop: true,
			message: `<div style="text-align: center; margin-top: -40px;">
						<img src="img/cryptologo/${coin.toLowerCase()}.png" class="coin_balance_receive_coin_logo"/>
					</div>
					<div style="text-align: center;">
						<div id="receive_addr_qrcode"></div>
						<blockquote style="font-size: 15px; font-weight: 400; color: #c10a0a; background-color: #ffd5d5; #7d0b0b; border-left: 5px solid #f00;">${default_lang.Portfolio.portfolio_receive_address_dialog_01} <b>${default_lang.Portfolio.portfolio_receive_address_dialog_02}</b> ${default_lang.Portfolio.portfolio_receive_address_dialog_03}</blockquote>
						<pre style="font-size: 18px;">${data.coin.smartaddress}</pre class="receive_addr_qrcode_addr">
					</div>`
		});

		var qrcode = new QRCode("receive_addr_qrcode");
		qrcode.makeCode(data.coin.smartaddress); // make another code.
		$('#receive_addr_qrcode > img').removeAttr('style');
		$('#receive_addr_qrcode > img').css('display', 'initial');
		$('#receive_addr_qrcode > img').css('border', '9px solid #f1f1f1', 'border-radius', '5px', 'margin', '5px');
		$('#receive_addr_qrcode > img').css('border-radius', '5px');
		$('#receive_addr_qrcode > img').css('margin', '5px');

	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}


function coinBalanceSendFn(coin) {
	var tx_coin = coin;

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data0 = { "userpass": userpass, "method": "getcoin", "coin": tx_coin };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data0),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		console.log(JSON.stringify(data.coin));
		//console.log(data.coin.smartaddress);
		console.log(data.coin.balance);
		console.log(data.coin.txfee);

		/*if (return_coin_details(data.coin.coin).eth == true) {
			data.coin.txfee = 0;			
		}*/

		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		var coin_balance_send_bootbox = bootbox.dialog({
			onEscape: true,
			backdrop: true,
			message: `
				<div class="row">
					<div class="col-sm-12">
						<div class="panel panel-default">
							<div class="panel-heading">
							<h3 class="panel-title"><strong>${default_lang.Portfolio.portfolio_send_dialog_title_send_tx} (<span class="bot_sending_coin_balance">${data.coin.balance}</span> ${tx_coin})</strong></h3>
							</div>
							<div class="panel-body"> <!-- panel-body -->
								<div class="form-group">
									<div class="input-group col-sm-12">
										<span class="input-group-addon coin_ticker" style="font-size: 20px;">${default_lang.Portfolio.portfolio_send_to_address}</span>
										<input type="text" class="form-control" id="bot_send_toaddr" placeholder="Address" style="height: 64px; font-size: 20px;">
									</div>
								</div>
								<div class="form-group">
									<div class="input-group col-sm-12">
										<span class="input-group-addon coin_ticker" style="font-size: 20px;">${default_lang.Portfolio.portfolio_send_amount}</span>
										<input type="number" class="form-control" id="bot_send_amount" placeholder="Amount e.g. 12.5" style="height: 64px; font-size: 20px;">
									</div>
								</div>
								<div class="form-group">
									<span class="input-group-addon">
										<input type="checkbox" id="bot_send_amount_txfee_checkbox" name="bot_send_amount_txfee_checkbox"> ${default_lang.Portfolio.portfolio_send_subtract_txfee}
									</span>
									<span class="input-group-addon" style="font-size: 20px;">TxFee: <span class="bot_send_txfee">${data.coin.txfee / 100000000}</span></span>
									<span class="input-group-addon" style="font-size: 20px;">${default_lang.Portfolio.portfolio_send_total}: <span class="bot_send_total_amount"></span></span>
								</div>
							</div>
						</div>
					</div>
				</div>`,
			closeButton: false,
			size: 'large',
			className: 'custom_class_for_bootbox',

			buttons: {
				cancel: {
					label: default_lang.Common.btn_cancel,
					className: 'btn-default',
					callback: function () {

					}
				},
				ok: {
					label: default_lang.Portfolio.portfolio_send_tx,
					className: 'btn-primary bot_send_action',
					callback: function () {
						var to_addr = $('#bot_send_toaddr').val();
						//var send_amount = $('#bot_send_amount').val();
						var send_amount = $('.bot_send_total_amount').html();
						console.log(to_addr);
						console.log(send_amount);


						if (to_addr == data.coin.smartaddress) {
							if (return_coin_details(data.coin.coin).eth == true) {
								var output_data = {};
								output_data.to_addr = to_addr;
								output_data.send_amount = send_amount;
								console.log(output_data);
								console.log(JSON.stringify(output_data));

								console.log(tx_coin);
								create_sendtx(tx_coin, output_data);
							} else {
								var output_data = [];
								var output_data_obj = new Object();
								output_data_obj[to_addr] = parseFloat(send_amount) + parseFloat(data.coin.txfee / 100000000);
								output_data.push(output_data_obj);
								console.log(output_data);

								var output_data_2nd = new Object();
								var calc_2nd_amount = (send_amount - 0.0001 * 2) / 777
								output_data_2nd[to_addr] = calc_2nd_amount.toFixed(8);
								output_data.push(output_data_2nd);
								console.log(output_data);

								var output_data_feetx = new Object();
								output_data_feetx[to_addr] = 0.0001;
								output_data.push(output_data_feetx);
								console.log(output_data);
								console.log(JSON.stringify(output_data));

								console.log(tx_coin);
								create_sendtx(tx_coin, output_data);
							}
						} else {
							if (return_coin_details(data.coin.coin).eth == true) {
								var output_data = {};
								output_data.to_addr = to_addr;
								output_data.send_amount = send_amount;
								console.log(output_data);
								console.log(JSON.stringify(output_data));

								console.log(tx_coin);
								create_sendtx(tx_coin, output_data);
							} else {
								var output_data = [];
								var output_data_obj = new Object();
								output_data_obj[to_addr] = send_amount;
								output_data.push(output_data_obj);
								console.log(output_data);
								console.log(JSON.stringify(output_data));

								console.log(tx_coin);
								create_sendtx(tx_coin, output_data);
							}
						}
					}
				}
			}
		});
		coin_balance_send_bootbox.init(function () {
			console.log('coin_balance_send_bootbox dialog opened.')
			if (data.coin.smartaddress.substring(0, 2) == '0x') {
				console.log(data.coin.smartaddress);
				send_btn_get_eth_erc20_balance({"coin":tx_coin, "address":data.coin.smartaddress});
			}
			$('.bot_send_action').attr("disabled", "disabled");

			$('.bot_sending_coin_balance').click(function () {
				$('#bot_send_amount').val($('.bot_sending_coin_balance').html());
				var send_amount = $('#bot_send_amount').val();
				var send_txfee = $('.bot_send_txfee').html();
				var subtract_txfee = $('#bot_send_amount_txfee_checkbox').is(':checked')
				var send_toaddr = $('#bot_send_toaddr').val();
				console.log(send_amount);
				console.log(subtract_txfee);

				if (subtract_txfee == false) {
					var send_amount_total = parseFloat(send_amount) + parseFloat(send_txfee);
					$('.bot_send_total_amount').html(send_amount_total.toFixed(8));
				} else if (subtract_txfee == true) {
					var send_amount_total = parseFloat(send_amount) - parseFloat(send_txfee);
					$('.bot_send_total_amount').html(send_amount_total.toFixed(8));
				}

				var empty = false;
				if (send_toaddr.length == 0 || send_amount.length == 0) {
					console.log('Send Address is empty');
					console.log('Send Amount is empty');
					empty = true;
				} else if (send_toaddr.length !== 0 && send_amount.length !== 0) {
					console.log('SEND ADDRESS IS :' + send_toaddr);
					console.log('SEND AMOUNT IS :' + send_amount);
					empty = false;
				}
				console.log(empty);


				if (empty) {
					$('.bot_send_action').attr("disabled", "disabled");
				} else {
					$('.bot_send_action').removeAttr("disabled");
				}
			});

			$('#bot_send_amount').keyup(function () {
				var send_amount = $('#bot_send_amount').val();
				var send_txfee = $('.bot_send_txfee').html();
				var subtract_txfee = $('#bot_send_amount_txfee_checkbox').is(':checked')
				var send_toaddr = $('#bot_send_toaddr').val();
				console.log(send_amount);
				console.log(subtract_txfee);

				if (subtract_txfee == false) {
					var send_amount_total = parseFloat(send_amount) + parseFloat(send_txfee);
					$('.bot_send_total_amount').html(send_amount_total.toFixed(8));
				} else if (subtract_txfee == true) {
					var send_amount_total = parseFloat(send_amount) - parseFloat(send_txfee);
					$('.bot_send_total_amount').html(send_amount_total.toFixed(8));
				}

				var empty = false;
				if (send_toaddr.length == 0 || send_amount.length == 0) {
					console.log('Send Address is empty');
					console.log('Send Amount is empty');
					empty = true;
				} else if (send_toaddr.length !== 0 && send_amount.length !== 0) {
					console.log('SEND ADDRESS IS :' + send_toaddr);
					console.log('SEND AMOUNT IS :' + send_amount);
					empty = false;
				}
				console.log(empty);


				if (empty) {
					$('.bot_send_action').attr("disabled", "disabled");
				} else {
					$('.bot_send_action').removeAttr("disabled");
				}

			});

			$('#bot_send_amount_txfee_checkbox').change(function () {
				var send_amount = $('#bot_send_amount').val();
				var send_txfee = $('.bot_send_txfee').html();
				var subtract_txfee = $('#bot_send_amount_txfee_checkbox').is(':checked')
				var send_toaddr = $('#bot_send_toaddr').val();
				console.log(send_amount);
				console.log(subtract_txfee);

				if (subtract_txfee == false) {
					var send_amount_total = parseFloat(send_amount) + parseFloat(send_txfee);
					$('.bot_send_total_amount').html(send_amount_total.toFixed(8));
				} else if (subtract_txfee == true) {
					var send_amount_total = parseFloat(send_amount) - parseFloat(send_txfee);
					$('.bot_send_total_amount').html(send_amount_total.toFixed(8));
				}

				var empty = false;
				if (send_toaddr.length == 0 || send_amount.length == 0) {
					console.log('Send Address is empty');
					console.log('Send Amount is empty');
					empty = true;
				} else if (send_toaddr.length !== 0 && send_amount.length !== 0) {
					console.log('SEND ADDRESS IS :' + send_toaddr);
					console.log('SEND AMOUNT IS :' + send_amount);
					empty = false;
				}
				console.log(empty);


				if (empty) {
					$('.bot_send_action').attr("disabled", "disabled");
				} else {
					$('.bot_send_action').removeAttr("disabled");
				}
			});


		});
	});
}


function send_btn_get_eth_erc20_balance(etherc20_balance_data) {
	console.log(etherc20_balance_data);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "balance", "coin": etherc20_balance_data.coin, "address": etherc20_balance_data.address };
	var url = "http://127.0.0.1:7783/";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		timeout: 5000, // sets timeout to 5 seconds
		url: url
	}).done(function (etherc20_balance_output_data) {
		// If successful
		console.log(etherc20_balance_output_data);
		$('.bot_sending_coin_balance').html(etherc20_balance_output_data.balance)
		//$('.porfolio_coins_list_td_amount[data-coin="' + etherc20_balance_data.coin + '"]').html(etherc20_balance_output_data.balance);

	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}


$('.your_coins_balance_info').on('click', '.coin_balance_inventory', function () {
	console.log('coin_balance_inventory clicked');
	console.log($(this).data());
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	if ($(this).data('spvinv') == true && $(this).data('ethinv') == false) {
		coin = $(this).data('coin');
		addr = $(this).data('addr');
		balance = $(this).data('balance');

		get_coin_info_spv_inv($(this).data());

		check_coin_listunspent($(this).data());
	} else if ($(this).data('ethinv') == true) {
		coin = 'ETOMIC';
		addr = _.where(JSON.parse(sessionStorage.getItem('mm_usercoins')), { "coin": "ETOMIC" })[0].smartaddress;

		get_coin_info_spv_inv({ "coin": coin, "addr": addr });
		check_coin_listunspent({ "coin": coin, "addr": addr });
	} else {
		coin = $(this).data('coin');
		addr = $(this).data('addr');
		balance = $(this).data('balance');

		$('.inventory-title').html('Manage Inventory (' + balance + ' ' + coin + ')');
		$('.inventory-title').data('coin', coin);
		$('.inventory-title').data('balance', balance);
		$('.btn-makeinventory').data('coin', coin);
		$('.coininventory[data-coin]').attr('data-coin', coin);
		//$('.coininventory[data-coin]').attr('data-pair', $(this).data('pair'));
		$('.coininventory[data-coin]').attr('data-addr', addr);
		$('.inventory-sliderTotalCoin').html(' ' + coin);

		get_coin_info(coin);

		calc_data = { "coin": coin, "balance": balance };
		clac_coin_inventory(calc_data);

		check_coin_listunspent($(this).data());
	}


	$('.screen-exchange').hide()
	$('.screen-inventory').show();
	$('.dextradeshistory').hide();
	$('.dexdebug').hide();
	CheckOrderBookFn(false);
	check_swap_status(false);
	check_bot_list(false);
	check_my_prices(false);
	bot_screen_coin_balance(false);
	bot_screen_sellcoin_balance(false);
	Refresh_active_StockChart(false);



	$('.dex_showinv_alice_tbl tbody').html('<th><div style="text-align: center;">' + default_lang.Common.loading_wait + '</div></th>');
	$('.dex_showlist_unspents_tbl tbody').html('<th><div style="text-align: center;">' + default_lang.Common.loading_wait + '</div></th>');

	//check_coin_inventory(coin);



});

$('.your_coins_balance_info').on('click', '.coin_balance_zcredits', function () {
	console.log('coin_balance_zcredits clicked');
	console.log($(this).data());
});




function create_sendtx(coin, tx_data) {

	console.log(tx_data);

	var userpass = sessionStorage.getItem('mm_userpass');

	if (return_coin_details(coin).eth == true) {
		var ajax_data = { "userpass": userpass, "method": "eth_withdraw", "coin": coin, "to": tx_data.to_addr, "amount": tx_data.send_amount }
	} else {
		var ajax_data = { "userpass": userpass, "method": "withdraw", "coin": coin, "outputs": tx_data };
	}
	var url = "http://127.0.0.1:7783";

	console.log(ajax_data);
	console.log(JSON.stringify(ajax_data));
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;

	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);
		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);
		} else {

			if (return_coin_details(coin).eth == true) {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				bootbox.alert(`${default_lang.Exchange.exchange_sendrawtx_tx_sent_successfully_heres_txid}:<br>
				<a href="#" onclick="shell.openExternal('`+ return_coin_details(coin).explorer + data.tx_id + `'); return false;">` + data.tx_id + `</a>`);
			} else if (data.complete == true) {
				console.log(data.hex);
				if (!data.hasOwnProperty('coin')) { data.coin = coin; }
				bot_sendrawtx(data);
			} else {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				toastr.error(default_lang.Portfolio.portfolio_tx_did_not_complete, default_lang.Portfolio.portfolio_toastr_title_tx_info);
			}
		}

	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}


function update_min_max_price_input() {
	var coin = $('.trading_pair_coin2').selectpicker('val', coin);
	console.log(coin);

	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();

	if (buying_or_selling == 'buying') {
		var base_coin = coin;
		var rel_coin = $('.trading_pair_coin').selectpicker('val');
	}
	if (buying_or_selling == 'selling') {
		var base_coin = $('.trading_pair_coin').selectpicker('val');
		var rel_coin = coin;
	}

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');

	$('.orderbook_rel_coin').html(rel_coin);
	$('.orderbook_base_coin').html(base_coin);

	var ajax_data = { "userpass": userpass, "method": "orderbook", "base": base_coin, "rel": rel_coin };
	//console.log(ajax_data)
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);
		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
			//get_coins_list(data.coins);
		} else {
			//console.log(data.asks);
			if (buying_or_selling == 'buying') {
				$('.trading_pair_coin_price').val(data.asks[0].price);
			}
			if (buying_or_selling == 'selling') {
				$('.trading_pair_coin_price').val(data.bids[0].price);
			}
		}

		//$('.initcoinswap-output').html(JSON.stringify(data, null, 2));
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}

function check_bot_list(sig) {
	if (sig == false) {
		clearInterval(check_bot_list_Interval);
		return
	} else {
		console.log('checking bot list');
	}

	var coin = $('.trading_pair_coin2').selectpicker('val', coin);
	//console.log(coin);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "bot_statuslist" };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		timeout: 11000, // sets timeout to 5 seconds
		url: url
	}).done(function (data) {
		// If successful
		console.log('check_bot_list data: ' + JSON.stringify(data));

		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
		} else {
			$('.exchange_bot_list_tbl tbody').empty();
			$.each(data, function (index, val) {
				//console.log(index);
				//console.log(val);
				if (!val.error === false) {
					var exchange_bot_list_tr = '';
					exchange_bot_list_tr += '<tr>';
					exchange_bot_list_tr += '<td><div>error</div></td>';
					exchange_bot_list_tr += '<td>-</td>';
					exchange_bot_list_tr += '</tr>';
					$('.exchange_bot_list_tbl tbody').append(exchange_bot_list_tr);
				} else {

					function botProgressBar() {
						var trades = val.trades;
						//console.log(trades);
						var _out = {};
						_out.total = 0;
						for (let i = 0; i < trades.length; i++) {
							//console.log(_out.total);
							if (!isNaN(trades[i].volume)) {
								_out.total += trades[i].volume;
							}
						}

						_out.percent = (_out.total / val.totalbasevolume) * 100
						//console.log(_out.total);
						return _out
					}

					var bot_progress_data = botProgressBar();

					if (!val.paused === false) {
						var disable_resume_btn = ' ';
						var disable_pause_btn = 'disabled="disabled"';
					} else {
						var disable_resume_btn = 'disabled="disabled"';
						var disable_pause_btn = ' ';
					}
					if (!val.stopped === false) {
						var disable_stop_btn = 'disabled="disabled"';
					} else {
						var disable_stop_btn = ' ';
					}

					if (!val.minprice === false) {
						var max_min_val = val.minprice;
					}
					if (!val.maxprice === false) {
						var max_min_val = val.maxprice;
					}

					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					var exchange_bot_list_tr = '';
					exchange_bot_list_tr += '<tr>';
					//exchange_bot_list_tr += '<td>'+val.botid+'</td>';
					exchange_bot_list_tr += `<td style="font-size: 14px; font-weight: 200;">
													<span><font style="font-weight: 400;">`+ val.name + `</font></span><br>
													<span><font style="font-weight: 400;">${default_lang.Exchange.exchange_tradingbot_td_max_price}:</font> ` + max_min_val + ` ` + val.rel + `</span><br>
													<span><font style="font-weight: 400;">${default_lang.Exchange.exchange_tradingbot_td_total_spending}:</font> ` + val.totalrelvolume + ` ` + val.rel + `</span>
												</td>`;
					//exchange_bot_list_tr += '<td>'+val.action+'</td>';
					//exchange_bot_list_tr += '<td>'+max_min_val+'</td>';
					//exchange_bot_list_tr += '<td>'+val.totalrelvolume+'</td>';
					exchange_bot_list_tr += `<td>
													<div style="font-size: 14px; font-weight: 200;">
													<span><font style="font-weight: 400;">${default_lang.Exchange.exchange_tradingbot_td_total_to_buy}:</font> ` + val.totalbasevolume + ` ` + val.base + `</span><br>
													<!--<span><font style="font-weight: 400;">${default_lang.Exchange.exchange_tradingbot_td_total_bought}:</font> ` + bot_progress_data.total.toFixed(8) + ` ` + val.base + `</span><br>-->
													<span><font style="font-weight: 400;">${default_lang.Exchange.exchange_tradingbot_td_trade_attempts}:</font> ` + val.trades.length + `</span>
													</div>
												</td>`;
					exchange_bot_list_tr += '<td style="text-align: center;"><div class="btn-group"><button class="btn btn-sm btn-info btn_bot_status" data-botid="' + val.botid + '" data-action="status"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span></button><button class="btn btn-sm btn-success btn_bot_resume" data-botid="' + val.botid + '" data-action="resume" ' + disable_resume_btn + '><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button><button class="btn btn-sm btn-warning btn_bot_pause" data-botid="' + val.botid + '" data-action="pause" ' + disable_pause_btn + '><span class="glyphicon glyphicon-pause" aria-hidden="true"></span></button><button class="btn btn-sm btn-danger btn_bot_stop" data-botid="' + val.botid + '" data-action="stop" ' + disable_stop_btn + '><span class="glyphicon glyphicon-stop" aria-hidden="true"></span></button></div></td>';
					exchange_bot_list_tr += '</tr>';
					/*exchange_bot_list_tr += '<tr>'; // bot progress bar disabled
						exchange_bot_list_tr += '<td colspan="5" style="padding: 0;"><div class="progress progress-nomargin"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="' + bot_progress_data.percent.toFixed(2) + '" aria-valuemin="0" aria-valuemax="100" style="-webkit-transition: none !important; transition: none !important; width: ' + bot_progress_data.percent.toFixed(2) + '%; text-shadow: 0px 0px 5px rgba(150, 150, 150, 1);">' + bot_progress_data.percent.toFixed(2) + '%</div></div></td>';
					exchange_bot_list_tr += '</tr>';*/
					$('.exchange_bot_list_tbl tbody').append(exchange_bot_list_tr);
				}
			})
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}

function buy_sell_precheck(bot_data) {
	var coin = $('.trading_pair_coin2').selectpicker('val', coin);
	//console.log(coin);
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));

	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();
	var bot_or_manual = $('input[name=trading_mode_options]:checked').val();

	var base_coin = coin;
	var rel_coin = $('.trading_pair_coin').selectpicker('val');

	console.log('BOT OR MANUAL: ' + bot_or_manual);
	console.log('BUYING or SELLING??: ' + buying_or_selling);
	console.log('BASE: ' + base_coin);
	console.log('REL: ' + rel_coin);

	if (base_coin == 'BTC' || rel_coin == 'BTC') {
		console.log("BTC found in trading pair. Confirming BTC tx fee before proceeding.");

		var userpass = sessionStorage.getItem('mm_userpass');
		var ajax_data0 = { "userpass": userpass, "method": "getcoin", "coin": 'BTC' };
		var url = "http://127.0.0.1:7783";
		var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
		console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
		$.ajax({
			async: true,
			data: JSON.stringify(ajax_data0),
			dataType: 'json',
			type: 'POST',
			url: url
		}).done(function (data) {
			//console.log(data.coin.txfee);

			if (!data.error === true && data.error !== 'coin is disabled') {
				toastr.error(data.error, 'Order precheck info');
				if (data.coin.txfee >= 100000) {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					bootbox.alert(`${default_lang.Exchange.exchange_precheck_btc_tx_fee_too_high_100k_01} <b>${data.coin.txfee / 100000000}</b><br> ${default_lang.Exchange.exchange_precheck_btc_tx_fee_too_high_100k_02}`);
					return;
				} else if (data.coin.txfee >= 50000) {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					bootbox.confirm({
						message: `${default_lang.Exchange.exchange_precheck_btc_tx_high_50k_01} <b>${data.coin.txfee / 100000000}</b><br>${default_lang.Exchange.exchange_precheck_btc_tx_high_50k_02}`,
						buttons: {
							confirm: {
								label: default_lang.Common.yes_small,
								className: 'btn-success'
							},
							cancel: {
								label: default_lang.Common.no_small,
								className: 'btn-danger'
							}
						},
						callback: function (result) {
							console.log('This was logged in the callback: ' + result);
							var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
							if (result == true) {
								toastr.success(`${default_lang.Exchange.exchange_precheck_okay_proceeding_with_your_order}`, `${default_lang.Exchange.exchange_toastr_order_title}`);
								if (bot_or_manual == 'tradebot') {
									bot_buy_sell(bot_data);
								} else if (bot_or_manual == 'trademanual') {
									manual_buy_sell(bot_data);
								}
							} else {
								var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
								toastr.info(`${default_lang.Exchange.exchange_precheck_your_order_has_been_stopped_to_process}`, `${default_lang.Exchange.exchange_toastr_order_title}`);
								return;
							}
						}
					});
				} else {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					console.log("BTC transaction fee seems OK. Proceeding with trade.")
					toastr.success(`${default_lang.Exchange.exchange_precheck_btc_tx_fee_seems_ok}`, `${default_lang.Exchange.exchange_toastr_order_title}`);
					if (bot_or_manual == 'tradebot') {
						bot_buy_sell(bot_data);
					} else if (bot_or_manual == 'trademanual') {
						manual_buy_sell(bot_data);
					}
				}
			} else {
				toastr.info('Make sure Bitcoin wallet is enabled and running.');
			}
		});
	} else {
		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		console.log("Trading pair doesn't have BTC in it. Precheck done.")
		toastr.success(`${default_lang.Exchange.exchange_precheck_placing_order}`, `${default_lang.Exchange.exchange_toastr_order_title}`);
		if (bot_or_manual == 'tradebot') {
			bot_buy_sell(bot_data);
		} else if (bot_or_manual == 'trademanual') {
			manual_buy_sell(bot_data);
		}
	}
}

function bot_buy_sell(bot_data) {
	var coin = $('.trading_pair_coin2').selectpicker('val', coin);
	//console.log(coin);

	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();

	var base_coin = coin;
	var rel_coin = $('.trading_pair_coin').selectpicker('val');

	console.log('BUYING or SELLING??: ' + buying_or_selling);
	console.log('BASE: ' + base_coin);
	console.log('REL: ' + rel_coin);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');

	if (bot_data.action == 'buy') {
		var ajax_data = { "userpass": userpass, "method": "bot_buy", "base": base_coin, "rel": rel_coin, "maxprice": bot_data.price, "relvolume": bot_data.volume };
	}
	if (bot_data.action == 'sell') {
		var ajax_data = { "userpass": userpass, "method": "bot_sell", "base": base_coin, "rel": rel_coin, "minprice": bot_data.price, "basevolume": bot_data.volume };
	}

	console.log(ajax_data);

	console.log(JSON.stringify(ajax_data));

	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (bot_output_data) {
		// If successful
		console.log(bot_output_data);

		$('.trading_pair_coin_price').val('');
		$('.trading_pair_coin_volume').val('');
		$('.relvol_basevol').html('');

		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		if (!bot_output_data.error === false) {
			toastr.error(bot_output_data.error, `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
			if (bot_output_data.error == 'not enough funds') {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				//toastr.info(bot_output_data.error + '<br>Balance: ' + bot_output_data.balance + ' ' + bot_output_data.coin, `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
				bootbox.alert({
					backdrop: true,
					onEscape: true,
					title: `${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos}`,
					message: `<p>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_p1}</p>
					<p>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_p2}</p>
					<p>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_p3}<br>
					${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_p4}</p>
					<p>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_p5}</p>
					<ul>
					<li>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_li1}<br>
					${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_li2}</li>
					<li>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_li3}</li>
					<li>${default_lang.Exchange.exchange_utxo_dialog_looks_like_you_dont_have_enough_utxos_li4}</li>
					</ul>`});
				console.log(JSON.stringify(bot_output_data))

				if (bot_output_data.withdraw.complete === true) {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					bot_sendrawtx(bot_output_data);
					toastr.success(`${default_lang.Exchange.exchange_botbuysell_executed_auto_split_funds}`, `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
				} else {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					toastr.error(`${default_lang.Exchange.exchange_botbuysell_no_withdraw_info_found}`, `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
				}
			}
		} else if (bot_output_data.result == 'success') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.success(bot_output_data.name + ' started <br> Bot ID: ' + bot_output_data.botid, `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

	check_bot_list();
}

function bot_sendrawtx(bot_sendrawtx_data) {
	console.log(bot_sendrawtx_data);
	if (bot_sendrawtx_data.hasOwnProperty('withdraw')) { console.log(bot_sendrawtx_data.withdraw.hex); }
	var coin = bot_sendrawtx_data.coin;
	console.log(coin);



	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "sendrawtransaction", "coin": coin, "signedtx": (bot_sendrawtx_data.hasOwnProperty('withdraw') ? bot_sendrawtx_data.withdraw.hex : bot_sendrawtx_data.hex) };
	var url = "http://127.0.0.1:7783";

	console.log(ajax_data);
	console.log(JSON.stringify(ajax_data));
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		//dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (bot_sendrawtx_output_data) {
		// If successful
		console.log(bot_sendrawtx_output_data);
		var parsed_bot_sendrawtx_output_data = '';
		try {
			parsed_bot_sendrawtx_output_data = JSON.parse(bot_sendrawtx_output_data);
			console.log(parsed_bot_sendrawtx_output_data);

			if (!parsed_bot_sendrawtx_output_data.hasOwnProperty('error') === false && parsed_bot_sendrawtx_output_data.error === false) {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				toastr.error(parsed_bot_sendrawtx_output_data.error.message, default_lang.Portfolio.portfolio_toastr_title_tx_info);
			} else if (parsed_bot_sendrawtx_output_data.result == null) {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				bootbox.alert(`<p>${default_lang.Exchange.exchange_sendrawtx_error_making_withdraw_tx}: </p><br>` + JSON.stringify(parsed_bot_sendrawtx_output_data.error, null, 2));
			} else if (parsed_bot_sendrawtx_output_data.result == 'success') {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				toastr.info(`${default_lang.Exchange.exchange_sendrawtx_low_no_of_utxos_01}<br>${default_lang.Exchange.exchange_sendrawtx_low_no_of_utxos_02}`, 'Transaction Status');
			}
		} catch (e) {
			console.log(e);
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			bootbox.alert(`${default_lang.Exchange.exchange_sendrawtx_tx_sent_successfully_heres_txid}:<br>
				<a href="#" onclick="shell.openExternal('`+ return_coin_details(coin).explorer + bot_sendrawtx_output_data + `'); return false;">` + bot_sendrawtx_output_data + `</a>`);
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}




function bot_stop_pause_resume(bot_data) {
	console.log(bot_data);
	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');

	if (bot_data.action == 'pause') {
		var ajax_data = { "userpass": userpass, "method": "bot_pause", "botid": bot_data.botid };
		var action_result = 'paused';
	}
	if (bot_data.action == 'resume') {
		var ajax_data = { "userpass": userpass, "method": "bot_resume", "botid": bot_data.botid };
		var action_result = 'resumed';
	}
	if (bot_data.action == 'stop') {
		var ajax_data = { "userpass": userpass, "method": "bot_stop", "botid": bot_data.botid };
		var action_result = 'stopped';
	}

	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);

		if (!data.error === false) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.error(data.error, `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
		} else if (data.result == 'success') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.success('Bot ID: ' + bot_data.botid + ' ' + action_result, `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

	check_bot_list();
}

function bot_settings(bot_data) {
	console.log(bot_data);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "bot_settings", "botid": bot_data.botid, "newprice": bot_data.newprice, "newvolume": bot_data.newvolume };

	console.log(ajax_data);

	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);

		if (!data.error === false) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.error(data.error, `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
		} else if (data.result == 'success') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.success('Bot ID: ' + bot_data.botid + ' Updated', `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

	check_bot_list();
}


function bot_status(bot_data) {
	console.log(bot_data);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "bot_status", "botid": bot_data.botid };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);

		if (!data.error === false) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.error(data.error, `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
		} else if (data.result == 'success') {

			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));

			var max_min = null;
			var max_min_val = null;
			if (!data.minprice === false) {
				max_min = 'Minimum';
				max_min_val = data.minprice;
			}
			if (!data.maxprice === false) {
				max_min = 'Maximum';
				max_min_val = data.maxprice;
			}

			result_answer = (data.result == 'success') ? '<h4><span class="label label-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Success</span></h4>' : '<h4><span class="label label-danger"><span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span> ' + data.result + '</span></h4>';
			rel_answer = '<img src="img/cryptologo/' + data.rel.toLowerCase() + '.png" style="width: 30px;"> ' + return_coin_details(data.rel).name + ' (' + data.rel + ')';
			base_answer = '<img src="img/cryptologo/' + data.base.toLowerCase() + '.png" style="width: 30px;"> ' + return_coin_details(data.base).name + ' (' + data.base + ')';

			rel_form = '<img src="img/cryptologo/' + data.rel.toLowerCase() + '.png" style="width: 50px;"> ' + data.rel;
			base_form = '<img src="img/cryptologo/' + data.base.toLowerCase() + '.png" style="width: 50px;"> ' + data.base;

			buy_sell_text = (data.action == 'buy') ? default_lang.Exchange.exchange_botstatus_dialog_buyselltext_buy : default_lang.Exchange.exchange_botstatus_dialog_buyselltext_sell;
			max_min_text = (data.action == 'buy') ? `${default_lang.Exchange.exchange_lbl_one_max}` : `${default_lang.Exchange.exchange_lbl_one_min}`;

			// "tradeid": 1750749844, "price": 0.13749702, "volume":

			function renderTradeAttempts(trades) {
				if (trades &&
					trades.length) {
					let _out = {
						request: '',
						trade: '',
						requestNonEmpty: false,
						tradeNonEmpty: false,
					};
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));

					_out.request = `<table width="100%" class="table table-striped">
												<tr>
													<th>${default_lang.Exchange.exchange_botstatus_th_request_id}</th>
													<th>${default_lang.Exchange.exchange_botstatus_th_quote_id}</th>`;

					for (let i = 0; i < trades.length; i++) {
						if (trades[i].requestid) {
							_out.requestNonEmpty = true;
							_out.request += `<tr>
																<td>${trades[i].requestid}</td>
																<td>${trades[i].quoteid}</td>
															</tr>`;
						}
					}

					_out.request += `</table>`;

					_out.trade = `<table width="100%" class="table table-striped">
												<tr>
													<th>${default_lang.Exchange.exchange_botstatus_th_trade_id}</th>
													<th>${default_lang.Exchange.exchange_botstatus_th_status}</th>
													<th>${default_lang.Exchange.exchange_botstatus_th_price}</th>
													<th>${default_lang.Exchange.exchange_botstatus_th_volume}</th>`;

					for (let i = 0; i < trades.length; i++) {
						if (trades[i].tradeid) {
							_out.tradeNonEmpty = true;

							var trade_status = ''
							var trade_price = ''
							var trade_volume = ''
							if (!trades[i].status == true) {
								trade_status = '-'
								trade_price = '-';
								trade_volume = '-';
							} else {
								trade_status = trades[i].status;
								if (trades[i].status !== 'pending') {
									trade_price = trades[i].price;
									trade_volume = trades[i].volume;
								} else {
									trade_price = '-';
									trade_volume = '-';
								}
							}
							console.log(trade_price);
							console.log(trade_volume);

							_out.trade += `<tr>
												<td>${trades[i].tradeid}</td>
												<td>${trade_status}</td>
												<td>${trade_price}</td>
												<td>${trade_volume}</td>
											</tr>`;
						}
					}

					_out.trade += `</table>`;

					return (_out.requestNonEmpty ? _out.request : '') + (_out.tradeNonEmpty ? _out.trade : '');
				} else {
					return '';
				}
			}

			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			var bot_update_bootbox = bootbox.dialog({
				backdrop: true,
				onEscape: true,
				message: `
					<table width="100%" class="table table-striped">
						<tr>
							<td style="width: 150px;">${default_lang.Exchange.exchange_botstatus_td_auto_trader_id}</td>
							<td>` + data.botid + `</td>
						</tr>
						<tr>
							<td>${default_lang.Exchange.exchange_botstatus_td_auto_trade_name}</td>
							<td>` + data.name + `</td>
						</tr>
						<tr>
							<td>${default_lang.Exchange.exchange_botstatus_td_trade_action}</td>
							<td>` + data.action + `</td>
						</tr>
						<tr>
							<td>${default_lang.Exchange.exchange_botstatus_td_selling_currency}</td>
							<td>` + rel_answer + `</td>
						</tr>
						<tr>
							<td>${default_lang.Exchange.exchange_botstatus_td_buying_currency}</td>
							<td>` + base_answer + `</td>
						</tr>
						<tr>
							<td>` + max_min + ` Price</td>
							<td>` + max_min_val + ` ` + data.rel + `</td>
						</tr>
						<tr>
							<td>${default_lang.Exchange.exchange_botstatus_td_total_selling_volume}</td>
							<td>` + data.totalrelvolume + ` ` + data.rel + `</td>
						</tr>
						<tr>
							<td>${default_lang.Exchange.exchange_botstatus_td_total_buying_volume}</td>
							<td>` + data.totalbasevolume + ` ` + data.base + `</td>
						</tr>
						<tr>
							<td>${default_lang.Exchange.exchange_botstatus_td_result}</td>
							<td>` + result_answer + `</td>
						</tr>
						<tr>
							<td>${default_lang.Exchange.exchange_botstatus_td_trade_attempts}</td>
							<td><div style="max-height: 450px; overflow-y: scroll;">` + renderTradeAttempts(data.trades) + `</div></td>
						</tr>
					</table>

					<div class="row">
						<div class="col-sm-12">
							<div class="panel panel-default">
								<div class="panel-heading">
								<h3 class="panel-title"><strong>${default_lang.Exchange.exchange_botstatus_dialog_change_this_auto_traders_settings}</strong></h3>
								</div>
								<div class="panel-body"> <!-- panel-body -->

									<div class="form-group">
										<span style="float: right; font-size: 18px;"><span>${default_lang.Exchange.exchange_botstatus_dialog_new} ` + max_min_text + `</span> ${default_lang.Exchange.exchange_botstatus_dialog_price_to} <span>` + buy_sell_text + `</span></span>
									</div>
									<div class="input-group col-sm-12">
										<span class="input-group-addon">` + rel_form + `</span>
										<input type="number" class="form-control trading_pair_coin_newprice" placeholder="Price e.g. 0.01" style="height: 64px; font-size: 20px;">
										<span class="input-group-addon" id="trading_pair_coin_price_max_min_update" style="font-size: 20px;">` + max_min_text + `</span>
									</div>
									<div class="form-group" style="margin-top: 15px; margin-bottom: 0px;">
										<span style="font-size: 18px;">${default_lang.Exchange.exchange_botstatus_dialog_new_max_amount_to} ` + buy_sell_text + `</span>
									</div>
									<div class="input-group col-sm-12">
										<span class="input-group-addon coin_ticker" id="trading_pair_coin_ticker" style="font-size: 20px;">` + base_form + `</span>
										<input type="number" class="form-control trading_pair_coin_newvolume" placeholder="Amount e.g. 12.5" style="height: 64px; font-size: 20px;">
									</div>
									<div class="input-group col-sm-12">
										<span class="input-group-addon bot_settings_label1">${default_lang.Exchange.exchange_itll_cost_you}</span>
										<span class="input-group-addon bot_settings_label2"><span class="new_relvol_basevol">0</span> <span class="bot_settings_label3">` + data.rel.toUpperCase() + `</span></span>
									</div>


								</div>
							</div>
						</div>
					</div>`,
				closeButton: true,
				size: 'large',

				buttons: {
					cancel: {
						label: `${default_lang.Common.btn_close_smallcaps}`,
						className: 'btn-default',
						callback: function () {

						}
					},
					ok: {
						label: default_lang.Common.btn_update,
						className: 'btn-primary btn-bot_settings_update',
						callback: function () {
							//console.log($('.trading_pair_coin_newprice').val())
							//console.log($('.trading_pair_coin_newvolume').val())
							//console.log(data.rel);
							//console.log(data.base);

							var newmaxprice = $('.trading_pair_coin_newprice').val();
							var newbasevol = $('.trading_pair_coin_newvolume').val();
							var newrelvolume = newmaxprice * newbasevol;

							bot_update_data = {}
							bot_update_data.rel = data.rel;
							bot_update_data.base = data.base;
							bot_update_data.botid = data.botid;
							bot_update_data.newprice = newmaxprice;
							bot_update_data.newvolume = newrelvolume;

							//console.log(bot_update_data);

							bot_settings(bot_update_data);

						}
					}
				}
			});
			bot_update_bootbox.init(function () {
				console.log('bot_update_settings dialog opened.')
				$('.btn-bot_settings_update').attr("disabled", "disabled");
				$('.trading_pair_coin_newprice').inputNumber();
				$('.trading_pair_coin_newvolume').inputNumber();


				$('.trading_pair_coin_newprice').keyup(function () {

					var newmaxprice = $('.trading_pair_coin_newprice').val();
					var newbasevol = $('.trading_pair_coin_newvolume').val();
					var newrelvolume = newmaxprice * newbasevol;

					$('.new_relvol_basevol').html(newrelvolume.toFixed(8));

					var max_min_newprice = $('.trading_pair_coin_newprice')
					var max_newvolume = $('.trading_pair_coin_newvolume')

					var empty = false;
					if (max_min_newprice.val().length == 0) {
						console.log('new price is empty');
						empty = true;
					} else if (max_min_newprice.val().length !== 0) {
						console.log('NEW PRICE IS :' + max_min_newprice.val());
						empty = false;
					}
					console.log(empty);


					if (empty) {
						$('.btn-bot_settings_update').attr("disabled", "disabled");
					} else {
						$('.btn-bot_settings_update').removeAttr("disabled");
					}

				});

				$('.trading_pair_coin_newvolume').keyup(function () {

					var newmaxprice = $('.trading_pair_coin_newprice').val();
					var newbasevol = $('.trading_pair_coin_newvolume').val();
					var newrelvolume = newmaxprice * newbasevol;

					$('.new_relvol_basevol').html(newrelvolume.toFixed(8));

					var max_min_newprice = $('.trading_pair_coin_newprice')
					var max_newvolume = $('.trading_pair_coin_newvolume')

					var empty = false;
					if (max_newvolume.val().length == 0) {
						console.log('new price is empty');
						empty = true;
					} else if (max_newvolume.val().length !== 0) {
						console.log('NEW PRICE IS :' + max_newvolume.val());
						empty = false;
					}
					console.log(empty);


					if (empty) {
						$('.btn-bot_settings_update').attr("disabled", "disabled");
					} else {
						$('.btn-bot_settings_update').removeAttr("disabled");
					}

				});


			});

			//toastr.success('Bot ID: ' + bot_data.botid + ' ' + bot_data.action + ' presented.', `${default_lang.Exchange.exchange_toastr_title_bot_info}`);
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

	check_bot_list();
}

function bot_screen_sellcoin_balance(sig) {
	if (sig == false) {
		clearInterval(bot_screen_sellcoin_balance_Interval);
		return
	} else {
		console.log('checking bot screen coin balance');
	}

	coin = $('.trading_pair_coin').selectpicker('val');
	console.log('trading_pair_coin is: ' + coin);

	var coin_name = return_coin_details(coin).name;

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "getcoin", "coin": coin };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;

	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		timeout: 5000, // sets timeout to 5 seconds
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);
		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
			bot_screen_sellcoin_balance();
		} else {
			if (!data.error === false && data.error === 'coin is disabled') {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				var button_controls = `<br>
				<span>
					<button class="btn btn-primary btn-xs coin_balance_enable_native" style="margin-top: 6px; margin-right: 3px;" data-electrum=true data-method="enable" data-coin="` + coin + `">${default_lang.Common.btn_enable_native}</button>
					<button class="btn btn-warning btn-xs coin_balance_enable_electrum" style="margin-top: 6px;" data-electrum=false data-method="enable" data-coin="` + coin + `">${default_lang.Common.btn_enable_electrum}</button>
				</span>`;
				$('.trading_sellcoin_ticker_name').html('<img src="img/cryptologo/' + coin.toLowerCase() + '.png" style="width: 30px;"> ' + return_coin_details(coin).name + ' (' + coin + ')' + button_controls);
				$('.trading_sellcoin_balance').html('Coin is disabled');
				$('#balance-spinner').hide();
				$('.balance-block').show();
			} else {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				//console.warn(data.coin)
				var coin_mode = '';
				var ethinv = false;
				var spvinv = false;
				if (data.coin.hasOwnProperty('electrum') || return_coin_details(coin).eth == true) {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					if (return_coin_details(coin).eth == true) {
						ethinv = true;
					}
					spvinv = true;
					coin_mode = `<i class="fa fa-bolt" data-toggle="tooltip" data-placement="top" title="${default_lang.Common.label_enable_electrum}"></i>`
				} else {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					coin_mode = `<i class="fa fa-shield" data-toggle="tooltip" data-placement="top" title="${default_lang.Common.label_enable_native}"></i>`
				}
				var button_controls = `<br>
				<span>
					<button class="btn btn-danger btn-xs coin_balance_disable" style="margin-top: 6px;" data-electrum=true data-method="disable" data-coin="` + coin + `">${default_lang.Common.btn_disable}</button>
					<button class="btn btn-warning btn-xs coin_balance_receive" style="margin-top: 6px;" data-coin="` + coin + `">${default_lang.Common.btn_receive}</button>
					<button class="btn btn-success btn-xs coin_balance_send" style="margin-top: 6px;" data-coin="` + coin + `">${default_lang.Common.btn_send}</button>
					<button class="btn btn-info btn-xs coin_balance_inventory" style="margin-top: 6px;" data-coin="` + coin + `" data-addr="` + data.coin.smartaddress + `" data-balance="` + data.coin.balance + `" data-ethinv=` + ethinv + ` data-spvinv=` + spvinv + `>${default_lang.Common.btn_inventory}</button>
				</span>`;
				$('.trading_sellcoin_ticker_name').html('<img src="img/cryptologo/' + coin.toLowerCase() + '.png" style="width: 30px;"> ' + return_coin_details(coin).name + ' (' + coin + ') <small style="vertical-align: top; margin-left: 10px">' + coin_mode + '</small>' + button_controls);
				if (data.coin.hasOwnProperty('electrum') || return_coin_details(coin).eth == true) {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					var electrum_coin_balance_data = {};
					electrum_coin_balance_data.baserel = 'rel';
					electrum_coin_balance_data.coin = coin;
					electrum_coin_balance_data.smartaddress = data.coin.smartaddress;
					electrum_coin_balance(electrum_coin_balance_data);
					//$('.trading_sellcoin_balance').html(data.coin.balance + ' <span style="font-size: 60%; font-weight: 100;">' + coin + '</span><br><span style="font-size: 50%; font-weight: 200;">' + data.coin.smartaddress + '</span>');
				} else {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					if (data.coin.coin == 'KMD') {
						var show_zcredits = '<br><button class="btn btn-xs btn-warning coin_balance_zcredits" style="font-size: 50%;"><span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span> ' + data.coin.zcredits + '</button>';
					} else {
						var show_zcredits = '';
					}
					$('.trading_sellcoin_balance').html(data.coin.balance + ' <span style="font-size: 60%; font-weight: 100;">' + coin + '</span>' + show_zcredits + '<br><span style="font-size: 50%; font-weight: 200;">' + data.coin.smartaddress + '</span> <!--<button class="btn btn-xs copysellcoinaddr"><i class="fa fa-clipboard" aria-hidden="true"></i></button>-->');
				}
				$('#balance-spinner').hide();
				$('.balance-block').show();
			}
		}

	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}

function bot_screen_coin_balance(sig) {
	if (sig == false) {
		clearInterval(bot_screen_coin_balance_Interval);
		return
	} else {
		console.log('checking bot screen coin balance');
	}

	var coin = $('.trading_pair_coin2').selectpicker('val');
	console.log(coin);

	var coin_name = return_coin_details(coin).name;

	var userpass = sessionStorage.getItem('mm_userpass');
	var ajax_data = { "userpass": userpass, "method": "getcoin", "coin": coin };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;

	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		timeout: 5000, // sets timeout to 5 seconds
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);
		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
			bot_screen_coin_balance();
		} else {
			if (!data.error === false && data.error === 'coin is disabled') {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				var button_controls = `<br>
				<span>
					<button class="btn btn-primary btn-xs coin_balance_enable_native" style="margin-top: 6px; margin-right: 3px;" data-electrum=true data-method="enable" data-coin="` + coin + `">${default_lang.Common.btn_enable_native}</button>
					<button class="btn btn-warning btn-xs coin_balance_enable_electrum" style="margin-top: 6px;" data-electrum=false data-method="enable" data-coin="` + coin + `">${default_lang.Common.btn_enable_electrum}</button>
				</span>`;
				$('.trading_coin_ticker_name').html('<img src="img/cryptologo/' + coin.toLowerCase() + '.png" style="width: 30px;"> ' + return_coin_details(coin).name + ' (' + coin + ')' + button_controls);
				$('.trading_coin_balance').html('Coin is disabled');
			} else {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				var coin_mode = '';
				var ethinv = false;
				var spvinv = false;
				//console.warn(data.coin)
				if (data.coin.hasOwnProperty('electrum') || return_coin_details(coin).eth == true) {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					if (return_coin_details(coin).eth == true) {
						ethinv = true;
					}
					spvinv = true;
					coin_mode = `<i class="fa fa-bolt" data-toggle="tooltip" data-placement="top" title="${default_lang.Common.label_enable_electrum}"></i>`
				} else {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					coin_mode = `<i class="fa fa-shield" data-toggle="tooltip" data-placement="top" title="${default_lang.Common.label_enable_native}"></i>`
				}
				var button_controls = `<br>
				<span>
					<button class="btn btn-danger btn-xs coin_balance_disable" style="margin-top: 6px;" data-electrum=true data-method="disable" data-coin="` + coin + `">${default_lang.Common.btn_disable}</button>
					<button class="btn btn-warning btn-xs coin_balance_receive" style="margin-top: 6px;" data-coin="` + coin + `">${default_lang.Common.btn_receive}</button>
					<button class="btn btn-success btn-xs coin_balance_send" style="margin-top: 6px;" data-coin="` + coin + `">${default_lang.Common.btn_send}</button>
					<button class="btn btn-info btn-xs coin_balance_inventory" style="margin-top: 6px;" data-coin="` + coin + `" data-addr="` + data.coin.smartaddress + `" data-balance="` + data.coin.balance + `" data-ethinv=` + ethinv + ` data-spvinv="` + spvinv + `">${default_lang.Common.btn_inventory}</button>
				</span>`;
				$('.trading_coin_ticker_name').html('<img src="img/cryptologo/' + coin.toLowerCase() + '.png" style="width: 30px;"> ' + return_coin_details(coin).name + ' (' + coin + ') <small style="vertical-align: top; margin-left: 10px">' + coin_mode + '</small>' + button_controls);
				if (data.coin.hasOwnProperty('electrum') || return_coin_details(coin).eth == true) {
					var electrum_coin_balance_data = {};
					electrum_coin_balance_data.baserel = 'base';
					electrum_coin_balance_data.coin = coin;
					electrum_coin_balance_data.smartaddress = data.coin.smartaddress;
					electrum_coin_balance(electrum_coin_balance_data);
					//$('.trading_coin_balance').html(data.coin.balance + ' <span style="font-size: 60%; font-weight: 100;">' + coin + '</span><br><span style="font-size: 50%; font-weight: 200;">' + data.coin.smartaddress + '</span>');
				} else {
					if (data.coin.coin == 'KMD') {
						var show_zcredits = '<br><button class="btn btn-xs btn-warning coin_balance_zcredits" style="font-size: 50%;"><span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span> ' + data.coin.zcredits + '</button>';
					} else {
						var show_zcredits = '';
					}
					$('.trading_coin_balance').html(data.coin.balance + ' <span style="font-size: 60%; font-weight: 100;">' + coin + '</span>' + show_zcredits + '<br><span style="font-size: 50%; font-weight: 200;">' + data.coin.smartaddress + '</span> <!--<button class="btn btn-xs btn-copycoinaddr"><i class="fa fa-clipboard" aria-hidden="true"></i></button>-->');
				}
			}

			//$('.trading_coin_ticker_name').html('<img src="img/cryptologo/'+coin.toLowerCase()+'.png" style="width: 30px;"> '+ return_coin_details(coin).name + ' ('+coin+')');
			//$('.trading_coin_balance').html(data.coin.balance + ' <span style="font-size: 80%; font-weight: 100;">' + coin + '</span><br><span style="font-size: 50%; font-weight: 200;">' + data.coin.smartaddress + '</span>');
		}

	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}


function electrum_coin_balance(coin_balance_data) {
	console.log(coin_balance_data);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "balance", "coin": coin_balance_data.coin, "address": coin_balance_data.smartaddress };
	var url = "http://127.0.0.1:7783/";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		timeout: 5000, // sets timeout to 5 seconds
		url: url
	}).done(function (coin_balance_output_data) {
		// If successful
		console.log(coin_balance_output_data);

		if (coin_balance_data.coin == 'KMD') {
			var show_zcredits = '<br><button class="btn btn-xs btn-warning coin_balance_zcredits" style="font-size: 50%;"><span class="glyphicon glyphicon-piggy-bank" aria-hidden="true"></span> ' + coin_balance_output_data.zcredits + '</button>';
		} else {
			var show_zcredits = '';
		}

		if (coin_balance_data.baserel == 'base') {
			$('.trading_coin_balance').html(coin_balance_output_data.balance + ' <span style="font-size: 60%; font-weight: 100;">' + coin_balance_data.coin + '</span>' + show_zcredits + '<br><span style="font-size: 50%; font-weight: 200;">' + coin_balance_data.smartaddress + '</span>');
		}
		if (coin_balance_data.baserel == 'rel') {
			$('.trading_sellcoin_balance').html(coin_balance_output_data.balance + ' <span style="font-size: 60%; font-weight: 100;">' + coin_balance_data.coin + '</span>' + show_zcredits + '<br><span style="font-size: 50%; font-weight: 200;">' + coin_balance_data.smartaddress + '</span>');
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});

}

/* Auto Trading Bot END */



/* Swap Status */

$('.btn-swapstatusrefresh').click(function () {
	check_swap_status();
})


$('.exchange_swap_status_tbl tbody').on('click', '.swapstatus_details', function () {
	console.log('swapstatus details button clicked')
	console.log($(this).data());

	check_swap_status_details($(this).data());
});


function check_swap_status_details(swap_status_data) {
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	console.log(swap_status_data);

	CheckOrderBookFn(false);
	check_swap_status(false);
	check_bot_list(false);
	check_my_prices(false);
	Refresh_active_StockChart(false);
	//bot_screen_coin_balance(false);
	//bot_screen_sellcoin_balance(false);

	var options_holdon = {
		theme: "sk-bounce",
		message: default_lang.Exchange.exchange_swapstatus_getting_swap_status_detail,
		//backgroundColor:"#1847B1",
		textColor: "white"
	};

	HoldOn.open(options_holdon);

	var requestid = swap_status_data.requestid;
	var quoteid = swap_status_data.quoteid;
	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "swapstatus", "requestid": requestid, "quoteid": quoteid };
	var url = "http://127.0.0.1:7783/";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (swap_status_output_data) {
		// If successful
		HoldOn.close();
		console.log(swap_status_output_data);

		if (!swap_status_output_data.error === false) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.error(swap_status_output_data.error, default_lang.Exchange.exchange_swapstatus_toastr_title_status_notification);
		}

		if (!swap_status_output_data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(swap_status_output_data.coins));
			sessionStorage.setItem('mm_userpass', swap_status_output_data.userpass);
			sessionStorage.setItem('mm_mypubkey', swap_status_output_data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
		} else {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			result_answer = (swap_status_output_data.result == 'success') ? '<h4><span class="label label-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Success</span></h4>' : '<h4><span class="label label-danger"><span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span> ' + swap_status_output_data.result + '</span></h4>';
			alice_answer = '<img src="img/cryptologo/' + swap_status_output_data.alice.toLowerCase() + '.png" style="width: 30px;"> ' + return_coin_details(swap_status_output_data.alice).name + ' (' + swap_status_output_data.alice + ')';
			bob_answer = '<img src="img/cryptologo/' + swap_status_output_data.bob.toLowerCase() + '.png" style="width: 30px;"> ' + return_coin_details(swap_status_output_data.bob).name + ' (' + swap_status_output_data.bob + ')';
			iambob_answer = (swap_status_output_data.iambob == 0) ? default_lang.Exchange.exchange_swapstatus_iambob_buyer : default_lang.Exchange.exchange_swapstatus_iambob_seller;

			var time = new Date(swap_status_output_data.expiration * 1000);
			//var expiration = moment.unix(data.expiration);
			//var now = moment();

			function renderValues(values) {
				let _out = '';

				if (values &&
					values.length) {
					for (let i = 0; i < values.length; i++) {
						_out += `<div>${values[i]}</div>`;
					}
				}

				return _out;
			}

			var simplified_dexdetail_tr = '';
			if (swap_status_output_data.iambob == 0) {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				console.log("I'm Buyer.");
				var total_sell_unit = parseFloat(swap_status_output_data.values[3]) + parseFloat(swap_status_output_data.values[6]);
				var single_unit_price = parseFloat(swap_status_output_data.srcamount) / parseFloat(total_sell_unit);
				var price_per_bought_unit = parseFloat(total_sell_unit) / parseFloat(swap_status_output_data.srcamount);
				simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_price_paid_in} ` + swap_status_output_data.alice + ':</b> ' + swap_status_output_data.values[3].toFixed(8) + '</td></tr>';
				simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_fee_paid_in} ` + swap_status_output_data.alice + ':</b> ' + swap_status_output_data.values[6].toFixed(8) + '</td></tr>';
				simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_total} ` + swap_status_output_data.alice + ` ${default_lang.Exchange.exchange_swapstatus_td_paid}:</b> ` + total_sell_unit.toFixed(8) + '</td></tr>';
				simplified_dexdetail_tr += '<tr><td colspan=2><b>' + swap_status_output_data.bob + ` ${default_lang.Exchange.exchange_swapstatus_td_received}:</b> ` + swap_status_output_data.srcamount.toFixed(8) + '</td></tr>';
				simplified_dexdetail_tr += '<tr><td colspan=2><b>1 ' + swap_status_output_data.alice + ` ${default_lang.Exchange.exchange_swapstatus_td_can_buy}:</b> ` + swap_status_output_data.srcamount.toFixed(8) + ' / ' + total_sell_unit.toFixed(8) + ' = ~' + single_unit_price.toFixed(8) + '</td></tr>';
				simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_price_paid_per} ` + swap_status_output_data.bob + ':</b> ' + total_sell_unit.toFixed(8) + ' / ' + swap_status_output_data.srcamount.toFixed(8) + ' = ' + price_per_bought_unit.toFixed(8) + '</td></tr>';
			}

			if (swap_status_output_data.iambob == 1) {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				console.log("I'm Seller.");
				var total_sell_unit = parseFloat(swap_status_output_data.values[0]) + parseFloat(swap_status_output_data.bobtxfee);
				var units_sold_at_price = parseFloat(swap_status_output_data.values[3]) / parseFloat(total_sell_unit);
				simplified_dexdetail_tr += '<tr><td colspan=2><b>' + swap_status_output_data.bob + ` ${default_lang.Exchange.exchange_swapstatus_td_sold}: </b> = ` + swap_status_output_data.values[0].toFixed(8) + '</td></tr>';
				simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_fee_paid_in} ` + swap_status_output_data.bob + ': </b> = ' + swap_status_output_data.bobtxfee + '</td></tr>';
				simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_total} ` + swap_status_output_data.bob + ` ${default_lang.Exchange.exchange_swapstatus_td_deducted}: </b> = ` + total_sell_unit + '</td></tr>';
				simplified_dexdetail_tr += '<tr><td colspan=2><b>' + swap_status_output_data.alice + ` ${default_lang.Exchange.exchange_swapstatus_td_received}: </b> = ` + swap_status_output_data.values[3].toFixed(8) + '</td></tr>';
				simplified_dexdetail_tr += '<tr><td colspan=2><b>' + swap_status_output_data.bob + ` ${default_lang.Exchange.exchange_swapstatus_td_sold_at_price}: </b> = ` + swap_status_output_data.values[3].toFixed(8) + ' / ' + total_sell_unit.toFixed(8) + ' = ' + units_sold_at_price + '</td></tr>';
			}

			var swap_status_details_bootbox = bootbox.dialog({
				//onEscape: true, // DO NOT ENABLE THESE TWO LINES PLEASE. THAT DOESN'T LET THE CLOSE BUTTON ACTIONS EXECUTE IF THESE ARE ENABLED.
				//backdrop: true,
				message: `
					<div class="input-group col-sm-12">
						<span class="input-group-addon" style="font-size: 20px; border: 0px;"><div class="swapdetail_bobdeposit"><span class="glyphicon glyphicon-save" aria-hidden="true"></span><br>${default_lang.Exchange.exchange_swapstatus_statusbar_seller_deposit}</div></span>
						<span class="input-group-addon" style="font-size: 20px; border: 0px;"><div class="swapdetail_alicepayment"><span class="glyphicon glyphicon-transfer" aria-hidden="true"></span><br>${default_lang.Exchange.exchange_swapstatus_statusbar_buyer_payment}</div></span>
						<span class="input-group-addon" style="font-size: 20px; border: 0px;"><div class="swapdetail_bobpayment"><span class="glyphicon glyphicon-random" aria-hidden="true"></span><br>${default_lang.Exchange.exchange_swapstatus_statusbar_seller_payment}</div></span>
						<span class="input-group-addon" style="font-size: 20px; border: 0px; text-align: center;"><div class="swapdetail_alicespend"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span><br>${default_lang.Exchange.exchange_swapstatus_statusbar_all_done}</div></span>
					</div>
					<div class="input-group col-sm-12">
						<span class="input-group-addon swapdetail_info"></span>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="panel panel-default">
								<div class="panel-heading">
									<h3 class="panel-title"><strong>${default_lang.Exchange.exchange_swapstatus_full_status}</strong></h3>
									<button class="btn btn-xs btn-default btn_swap_status_details_close" style="float: right; margin-right: -6px; margin-top: -20px">${default_lang.Common.btn_close_caps}</button>
									<button class="btn btn-xs btn-warning btn_kickstart_stuck_trade" style="float: right; margin-right: 6px; margin-top: -20px">${default_lang.Exchange.exchange_swapstatus_btn_kickstart_stuck_trade}</button>
								</div>
								<div class=""> <!-- panel-body -->
									<table width="100%" class="table table-striped" style="margin-bottom: 0;">
										<tr>
											<td rowspan=5>${default_lang.Exchange.exchange_swapstatus_td_trade_info}</td>
											<td>${default_lang.Exchange.exchange_swapstatus_td_quote_id}</td>
											<td>` + swap_status_output_data.quoteid + `</td>
										</tr>
										<tr>
											<td>${default_lang.Exchange.exchange_swapstatus_td_request_id}</td>
											<td>` + swap_status_output_data.requestid + `</td>
										</tr>
										<tr>
											<td>${default_lang.Exchange.exchange_swapstatus_td_trade_id}</td>
											<td>` + swap_status_output_data.tradeid + `</td>
										</tr>
										<tr>
											<td>${default_lang.Exchange.exchange_swapstatus_td_expires_in}</td>
											<td>` + time + `</td>
										</tr>
										<tr>
											<td>${default_lang.Exchange.exchange_swapstatus_td_source_amount}</td>
											<td>` + swap_status_output_data.srcamount + `</td>
										</tr>
										<tr>
											<td rowspan=4>${default_lang.Exchange.exchange_swapstatus_td_buyer_info}</td>
											<td>${default_lang.Exchange.exchange_swapstatus_td_buyer_coin}</td>
											<td>` + alice_answer + `</td>
										</tr>
										<tr>
											<td>${default_lang.Exchange.exchange_swapstatus_td_buyer_id}</td>
											<td>` + swap_status_output_data.aliceid + `</td>
										</tr>
										<tr>
											<td>${default_lang.Exchange.exchange_swapstatus_td_buyer_payment}</td>
											<td class="tbl_alicepayment">` + `<a href="#" onclick="shell.openExternal('` + return_coin_details(swap_status_output_data.alice).explorer + swap_status_output_data.alicepayment + `'); return false;">` + swap_status_output_data.alicepayment + `</a></td>
										</tr>
										<tr>
											<td>${default_lang.Exchange.exchange_swapstatus_td_buyer_tx_fee}</td>
											<td class="tbl_alicetxfee">` + swap_status_output_data.alicetxfee + `</td>
										</tr>
										<tr>
											<td rowspan=4>${default_lang.Exchange.exchange_swapstatus_td_seller_info}</td>
											<td>${default_lang.Exchange.exchange_swapstatus_td_seller_coin}</td>
											<td>` + bob_answer + `</td>
										</tr>
										<tr>
											<td>${default_lang.Exchange.exchange_swapstatus_td_seller_deposit}</td>
											<td class="tbl_bobdeposit">` + `<a href="#" onclick="shell.openExternal('` + return_coin_details(swap_status_output_data.bob).explorer + swap_status_output_data.bobdeposit + `'); return false;">` + swap_status_output_data.bobdeposit + `</a></td>
										</tr>
										<tr>
											<td>${default_lang.Exchange.exchange_swapstatus_td_seller_payment}</td>
											<td class="tbl_bobpayment"><a href="#" onclick="shell.openExternal('`+ return_coin_details(swap_status_output_data.bob).explorer + swap_status_output_data.bobpayment + `'); return false;">` + swap_status_output_data.bobpayment + `</a></td>
										</tr>
										<tr>
											<td>${default_lang.Exchange.exchange_swapstatus_td_seller_tx_fee}</td>
											<td class="tbl_bobtxfee">` + swap_status_output_data.bobtxfee + `</td>
										</tr>
										<tr>
											<td rowspan=8>${default_lang.Exchange.exchange_swapstatus_td_other_info}</td>
											<td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_you_are}:</b> ` + iambob_answer + `</td>
										</tr>
										`+ simplified_dexdetail_tr + `
										<tr>
											<td colspan=2><b>Sent Flags:</b> <span class="tbl_sentflags">` + JSON.stringify(swap_status_output_data.sentflags, null, 2) + `</span></td>
										</tr>
										<!--<tr>
											<td>Values</td>
											<td class="tbl_values">` + renderValues(swap_status_output_data.values) + `</td>
										</tr>
										<tr>
											<td>depositspent</td>
											<td class="tbl_depositspent">` + swap_status_output_data.depositspent + `</td>
										</tr>
										<tr>
											<td>Apayment Spent</td>
											<td class="tbl_Apaymentspent">`+ swap_status_output_data.Apaymentspent + `</td>
										</tr>-->
									</table>
								</div>
							</div>
						</div>

					</div>`,
				closeButton: false,
				size: 'large'/*,
				buttons: {
					cancel: {
						label: `${default_lang.Common.btn_close_smallcaps}`,
						className: 'btn-default btn_swap_status_details_close',
						callback: function(){
						}
					}
				}*/
			});
			swap_status_details_bootbox.init(function () {
				/*CheckOrderBookFn(false);
				check_swap_status(false);
				check_bot_list(false);
				check_my_prices(false);
				Refresh_active_StockChart(false);
				//bot_screen_coin_balance(false);
				//bot_screen_sellcoin_balance(false);*/

				$('.btn_kickstart_stuck_trade').click(function (e) {
					e.preventDefault();
					console.log('btn_kickstart_stuck_trade clicked');
					var remove_finished_swap_file_status = ShepherdIPC({ "command": "remove_finished_swap_file", "requestid": swap_status_output_data.requestid, "quoteid": swap_status_output_data.quoteid });
					if (remove_finished_swap_file_status == 'removed') {
						var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
						console.log(`${swap_status_output_data.requestid}-${swap_status_output_data.quoteid}.finished file removed.`);
						toastr.success(`${swap_status_output_data.requestid}-${swap_status_output_data.quoteid}.finished ${default_lang.Exchange.exchange_swapstatus_kickstart_file_removed}`, default_lang.Exchange.exchange_swapstatus_toastr_title_swap_status_update);
					} else if (remove_finished_swap_file_status == 'error') {
						var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
						console.log(`Failed to remove ${swap_status_output_data.requestid}-${swap_status_output_data.quoteid} file`);
						toastr.error(`${default_lang.Exchange.exchange_swapstatus_kickstart_failed_to_remove} ${swap_status_output_data.requestid}-${swap_status_output_data.quoteid} ${default_lang.Exchange.exchange_swapstatus_kickstart_failed_to_remove_file}`, default_lang.Exchange.exchange_swapstatus_toastr_title_swap_status_update);
					}
				});

				var swapdetail_blinker = null;
				var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
				console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
				function blinker(sig) {
					$.ajax({
						async: true,
						data: JSON.stringify(ajax_data),
						dataType: 'json',
						type: 'POST',
						timeout: 6000, // sets timeout to 5 seconds
						url: url
					}).done(function (dataforblinker) {
						console.log(dataforblinker);

						if (!dataforblinker.error === false) {
							clearInterval(swapdetail_blinker);
							if (dataforblinker.error == 'swap never started') {
								$('.swapdetail_info').html(`<h3><i class="fa fa-ban"></i> ${dataforblinker.error}. Please try again.</h3>`);
							} else {
								$('.swapdetail_info').html(`<h3><i class="fa fa-ban"></i> ${dataforblinker.error}</h3>`);
							}
						}

						$('.tbl_alicepayment').html(`<a href="#" onclick="shell.openExternal('` + return_coin_details(swap_status_output_data.alice).explorer + dataforblinker.alicepayment + `'); return false;">` + dataforblinker.alicepayment + `</a>`);
						$('.tbl_alicetxfee').html(dataforblinker.alicetxfee);
						$('.tbl_bobdeposit').html(`<a href="#" onclick="shell.openExternal('` + return_coin_details(swap_status_output_data.bob).explorer + dataforblinker.bobdeposit + `'); return false;">` + dataforblinker.bobdeposit + `</a>`);
						$('.tbl_bobpayment').html(`<a href="#" onclick="shell.openExternal('` + return_coin_details(swap_status_output_data.bob).explorer + dataforblinker.bobpayment + `'); return false;">` + dataforblinker.bobpayment + `</a>`);
						$('.tbl_bobtxfee').html(dataforblinker.bobtxfee);;
						$('.tbl_sentflags').html(JSON.stringify(dataforblinker.sentflags), null, 2);
						$('.tbl_values').html(renderValues(dataforblinker.values));
						$('.tbl_depositspent').html(dataforblinker.depositspent);
						$('.tbl_Apaymentspent').html(dataforblinker.Apaymentspent);

						var current_sentflag = get_swapstatus_step(dataforblinker)
						console.log('CURRENT SENT FLAG IS: ' + current_sentflag);
						if (sig == false) {
							clearInterval(swapdetail_blinker);
							return
						} else {
							console.log('swap detail BLINKING');
						}

						if (dataforblinker.bobpayment !== '0000000000000000000000000000000000000000000000000000000000000000') {
							var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
							$('.swapdetail_info').html(`<h3><i class="fa fa-handshake-o"></i> ${default_lang.Exchange.exchange_swapstatus_state_barter_completed}</h3>`);
							blinker(false);
						} else if (current_sentflag == 'alicespend') {
							var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
							$('.swapdetail_info').html(`<h3>${default_lang.Exchange.exchange_swapstatus_state_buyer_received_funds}</h3>`);
							$('.swapdetail_alicespend').fadeOut(500);
							$('.swapdetail_alicespend').fadeIn(500);
						} else if (current_sentflag == 'bobpayment') {
							var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
							$('.swapdetail_info').html(`<h3>${default_lang.Exchange.exchange_swapstatus_state_seller_sent_payment}</h3>`);
							$('.swapdetail_alicespend').fadeOut(500);
							$('.swapdetail_alicespend').fadeIn(500);
						} else if (current_sentflag == 'alicepayment') {
							var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
							$('.swapdetail_info').html(`<h3>${default_lang.Exchange.exchange_swapstatus_state_buyer_payment_made}</h3>`);
							$('.swapdetail_bobpayment').fadeOut(500);
							$('.swapdetail_bobpayment').fadeIn(500);
						} else if (current_sentflag == 'bobdeposit') {
							var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
							$('.swapdetail_info').html(`<h3>${default_lang.Exchange.exchange_swapstatus_state_seller_deposited_his_security}</h3>`);
							$('.swapdetail_alicepayment').fadeOut(500);
							$('.swapdetail_alicepayment').fadeIn(500);
						} else if (current_sentflag == 'myfee') {
							var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
							$('.swapdetail_info').html(`<h3>${default_lang.Exchange.exchange_swapstatus_state_my_barterdex_fee_paid}</h3>`);
							$('.swapdetail_bobdeposit').fadeOut(500);
							$('.swapdetail_bobdeposit').fadeIn(500);
						}
					});
				}

				swapdetail_blinker = setInterval(blinker, 5000);

				$('.btn_swap_status_details_close').click(function (e) {
					e.preventDefault();
					console.log('btn_swap_status_details_close clicked');
					blinker(false);

					CheckOrderBookFn();
					CheckOrderbook_Interval = setInterval(CheckOrderBookFn, 30000);
					check_swap_status_Interval = setInterval(check_swap_status, 20000);
					check_swap_status();
					check_bot_list_Interval = setInterval(check_bot_list, 10000);
					check_bot_list();
					check_my_prices_Interval = setInterval(check_my_prices, 60000);
					check_my_prices();
					//bot_screen_coin_balance_Interval = setInterval(bot_screen_coin_balance, 30000);
					//bot_screen_coin_balance();
					//bot_screen_sellcoin_balance_Interval = setInterval(bot_screen_sellcoin_balance, 30000);
					//bot_screen_sellcoin_balance();
					swap_status_details_bootbox.modal('hide');

					var dexmode = sessionStorage.getItem('mm_dexmode');
					var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
					if (dexmode == 'dICO') {
						get_coin_info(selected_dICO_coin);
					}
				})

			});

		}

	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		HoldOn.close();
		console.log(textStatus + ': ' + errorThrown);
	});
}

function get_swapstatus_step(swap_data) {
	console.log(swap_data.sentflags);
	var status = "realtime";
	for (var i = 0; i < swap_data.sentflags.length; i++) {
		if (swap_data.sentflags[i] == 'alicespend') {
			status = "alicespend";
			return status;
			//break;
		} else if (swap_data.sentflags[i] == 'bobpayment') {
			status = "bobpayment";
			return status;
			//break;
		} else if (swap_data.sentflags[i] == 'alicepayment') {
			status = "alicepayment";
			return status;
			//break;
		} else if (swap_data.sentflags[i] == 'bobdeposit') {
			status = "bobdeposit";
			return status;
			//break;
		} else if (swap_data.sentflags[i] == 'myfee') {
			status = "myfee";
			return status;
			//break;
		}
	}
}


function check_swap_status(sig) {
	if (sig == false) {
		clearInterval(check_swap_status_Interval);
		return
	} else {
		console.log('checking swap status');
	}

	var coin = $('.trading_pair_coin2').selectpicker('val', coin);
	//console.log(coin);

	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "swapstatus", "pending": 0, "fast": 1, "limit": 30 };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		timeout: 5000, // sets timeout to 5 seconds
		url: url
	}).done(function (data) {
		// If successful
		console.log(data);

		if (!data.userpass === false) {
			console.log('first marketmaker api call execution after marketmaker started.')
			sessionStorage.setItem('mm_usercoins', JSON.stringify(data.coins));
			sessionStorage.setItem('mm_userpass', data.userpass);
			sessionStorage.setItem('mm_mypubkey', data.mypubkey);

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
		} else {
			var reversed_swap_list = data.swaps.reverse();

			$('.exchange_swap_status_tbl tbody').empty();
			/*if (reversed_swap_list &&
					reversed_swap_list.length) {
				$('.exchange-swap-status-spinner').hide();
			}*/
			$('.exchange-swap-status-spinner').hide();
			console.groupCollapsed('Swap Status Info');

			$.each(reversed_swap_list, function (index, val) {
				console.log(index); //swap #
				console.log(val); //swap data
				if (!val.error === false) {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					var exchange_swap_status_tr = '';
					exchange_swap_status_tr += '<tr>';
					exchange_swap_status_tr += `<td><div style="color: #e53935; font-size: 15px;"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> ${default_lang.SwapStatus.swapstatus_status_error}</div></td>`;
					exchange_swap_status_tr += `<td>${val.error}</td>`;
					//exchange_swap_status_tr += '<td>-</td>';
					exchange_swap_status_tr += '<td>-</td>';
					exchange_swap_status_tr += '</tr>';
					$('.exchange_swap_status_tbl tbody').append(exchange_swap_status_tr);
				} else {

					if (val.finishtime == undefined) {
						var fintime = '-';
					} else {
						var fintime = new Date(val.finishtime * 1000);
					}
					if (val.alice == undefined) {
						var aliceval = '-';
					} else {
						var aliceval = val.alice;
					}
					if (val.bob == undefined) {
						var bobval = '-';
					} else {
						var bobval = val.bob;
					}

					if (val.status !== 'realtime') {
						var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
						var current_sentflag = get_swapstatus_step(val);
						if (val.bobpayment !== '0000000000000000000000000000000000000000000000000000000000000000') {
							status_color = 'color: #43a047;';
							swap_status = '<span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>';
						} else if (current_sentflag == 'alicespend') {
							status_color = 'color: #43a047;';
							swap_status = '<span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span>';
						} else if (current_sentflag == 'bobpayment') {
							status_color = 'color: #0277bd;';
							swap_status = '<span class="glyphicon glyphicon-save" aria-hidden="true"></span>';
						} else if (current_sentflag == 'alicepayment') {
							status_color = 'color: #42a5f5;';
							swap_status = '<span class="glyphicon glyphicon-random" aria-hidden="true"></span>';
						} else if (current_sentflag == 'bobdeposit') {
							status_color = 'color: #4527a0;';
							swap_status = '<span class="glyphicon glyphicon-transfer" aria-hidden="true"></span>';
						} else if (current_sentflag == 'myfee') {
							status_color = 'color: #ef6c00;';
							swap_status = '<span class="glyphicon glyphicon-random" aria-hidden="true"></span>';
						}
						var pair_and_time = `<br><b>${default_lang.SwapStatus.swapstatus_pair}:</b> ${aliceval}/${bobval}<br>${fintime}`;
					} else {
						var status_color = '';
						var swap_status = '<span class="glyphicon glyphicon-transfer" aria-hidden="true"></span>';
						var pair_and_time = ``;
					}

					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					var exchange_swap_status_tr = '';
					exchange_swap_status_tr += '<tr>';
					exchange_swap_status_tr += '<td><div style="' + status_color + ' font-size: 15px;">' + swap_status + ' ' + val.status + '</div></td>';
					exchange_swap_status_tr += `<td><b>${default_lang.SwapStatus.swapstatus_quote_id}:</b> ${val.quoteid}<br>
													<b>${default_lang.SwapStatus.swapstatus_request_id}:</b> ${val.requestid}
													${pair_and_time}</td>`;
					//exchange_swap_status_tr += '<td>' + val.quoteid + '</td>';
					//exchange_swap_status_tr += '<td>' + val.requestid + '</td>';
					exchange_swap_status_tr += '<td><button class="btn btn-default swapstatus_details" data-quoteid="' + val.quoteid + '" data-requestid="' + val.requestid + `">${default_lang.SwapStatus.swapstatus_btn_details}</button></td>`;
					exchange_swap_status_tr += '</tr>';
					$('.exchange_swap_status_tbl tbody').append(exchange_swap_status_tr);
				}
			})
			console.groupEnd();

		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}

/* Swap Status END */



/* Random Color Generator */

function hashCode(str) { // java String#hashCode
	var hash = 0;
	for (var i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}
	return hash;
}

function intToRGB(i) {
	var c = (i & 0x00FFFFFF)
		.toString(16)
		.toUpperCase();

	return "00000".substring(0, 6 - c.length) + c;
}


function coloredPubkey(pubkey) {
	var final_string = {};
	final_string.firstpart = pubkey.slice(0, 3);
	final_string.lastpart = pubkey.slice(61, 64);
	final_string.colorpart1 = intToRGB(hashCode(pubkey.slice(5, 10)));
	final_string.colorpart2 = intToRGB(hashCode(pubkey.slice(10, 20)));
	final_string.colorpart3 = intToRGB(hashCode(pubkey.slice(20, 30)));
	final_string.colorpart4 = intToRGB(hashCode(pubkey.slice(30, 40)));
	final_string.colorpart5 = intToRGB(hashCode(pubkey.slice(40, 50)));
	final_string.colorpart6 = intToRGB(hashCode(pubkey.slice(50, 60)));
	final_string.char1 = final_string.colorpart1.slice(0, 1);
	final_string.char2 = final_string.colorpart2.slice(0, 1);
	final_string.char3 = final_string.colorpart3.slice(0, 1);
	final_string.char4 = final_string.colorpart4.slice(0, 1);
	final_string.char5 = final_string.colorpart5.slice(0, 1);
	final_string.char6 = final_string.colorpart6.slice(0, 1);

	return final_string;

}

/* Random Color Generator */



/* TRADE HISTORY - CREDIT: pbca26 */

function openTradeDetails(index, total) {
	for (let i = 0; i < total; i++) {
		if (i !== index) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			$(`.trade-details-${i}`).hide();
			$(`.trade-history-toggle-${i}`).html(default_lang.TradeHistory.tradehistory_btn_show_history);
		}
	}

	if ($(`.trade-details-${index}`).is(":visible")) {
		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		$(`.trade-details-${index}`).hide();
		$(`.trade-history-toggle-${index}`).html(default_lang.TradeHistory.tradehistory_btn_show_history);
	} else {
		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		$(`.trade-details-${index}`).show();
		$(`.trade-history-toggle-${index}`).html(default_lang.TradeHistory.tradehistory_btn_hide_history);
	}
}

// display rounding
function formatValue(formatValue) {
	const _valueToStr = formatValue.toString();

	if (_valueToStr.indexOf('.') === -1) {
		return formatValue;
	} else {
		if (_valueToStr) {
			const _decimal = _valueToStr.substr(_valueToStr.indexOf('.') + 1, _valueToStr.length);
			let newVal = _valueToStr.substr(0, _valueToStr.indexOf('.') + 1);

			for (let i = 0; i < _decimal.length; i++) {
				if (_decimal[i] === '0') {
					newVal = newVal + _decimal[i];
				} else {
					newVal = newVal + _decimal[i];
					break;
				}
			}

			return newVal;
		}
	}
}

function constructTradesHistory() {
	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "swapstatus" };
	//var ajax_data = {"userpass":userpass,"method":"recentswaps","limit":100};
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url,
	}).done(function (data) {
		console.log(data);
		let out = '';
		let tradesCounter = 0;

		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		if (data &&
			data.swaps &&
			data.swaps.length) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			out += `<h4 style="margin-bottom: 35px">${default_lang.TradeHistory.tradehistory_total_trades}: ${data.swaps.length}</h4>`;

			let tradesOut = `
				<table class="trades-history-table">
					<tr>
						<th>#</th>
						<th>Finish Time</th>
						<th>${default_lang.TradeHistory.tradehistory_th_direction}</th>
						<th>${default_lang.TradeHistory.tradehistory_th_pair}</th>
						<th>${default_lang.TradeHistory.tradehistory_th_sent}</th>
						<th>${default_lang.TradeHistory.tradehistory_th_received}</th>
						<th>${default_lang.TradeHistory.tradehistory_th_rate}</th>
						<th>${default_lang.TradeHistory.tradehistory_th_details}</th>
					</tr>
				`;
			const trades = data.swaps;

			for (let i = 0; i < trades.length; i++) {
				const data = trades[i];

				if (data.alice &&
					data.bob) {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					tradesCounter++;
					result_answer = (data.result == 'success') ? '<h4><span class="label label-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> Success</span></h4>' : '<h4><span class="label label-danger"><span class="glyphicon glyphicon-warning-sign" aria-hidden="true"></span> ' + data.result + '</span></h4>';
					alice_answer = '<img src="img/cryptologo/' + data.alice.toLowerCase() + '.png" style="width: 30px;"> ' + return_coin_details(data.alice).name + ' (' + data.alice + ')';
					bob_answer = '<img src="img/cryptologo/' + data.bob.toLowerCase() + '.png" style="width: 30px;"> ' + return_coin_details(data.bob).name + ' (' + data.bob + ')';
					iambob_answer = (data.iambob == 0) ? default_lang.Exchange.exchange_botstatus_dialog_buyselltext_buy : default_lang.Exchange.exchange_botstatus_dialog_buyselltext_buy;

					var time = new Date(data.expiration * 1000);
					var fintime = new Date(data.finishtime * 1000);

					var simplified_dexdetail_tr = '';
					if (data.iambob == 0) {
						var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
						var total_sell_unit = parseFloat(data.values[3]) + parseFloat(data.values[6]);
						var single_unit_price = parseFloat(data.srcamount) / parseFloat(total_sell_unit);
						var price_per_bought_unit = parseFloat(total_sell_unit) / parseFloat(data.srcamount);
						simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_price_paid_in} ` + data.alice + ':</b> ' + data.values[3].toFixed(8) + '</td></tr>';
						simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_fee_paid_in} ` + data.alice + ':</b> ' + data.values[6].toFixed(8) + '</td></tr>';
						simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_total} ` + data.alice + ` ${default_lang.Exchange.exchange_swapstatus_td_paid}:</b> ` + total_sell_unit.toFixed(8) + '</td></tr>';
						simplified_dexdetail_tr += '<tr><td colspan=2><b>' + data.bob + ` ${default_lang.Exchange.exchange_swapstatus_td_received}:</b> ` + data.srcamount.toFixed(8) + '</td></tr>';
						simplified_dexdetail_tr += '<tr><td colspan=2><b>1 ' + data.alice + ` ${default_lang.Exchange.exchange_swapstatus_td_can_buy}:</b> ` + data.srcamount.toFixed(8) + ' / ' + total_sell_unit.toFixed(8) + ' = ~' + single_unit_price.toFixed(8) + '</td></tr>';
						simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_price_paid_per} ` + data.bob + ':</b> ' + total_sell_unit.toFixed(8) + ' / ' + data.srcamount.toFixed(8) + ' = ' + price_per_bought_unit.toFixed(8) + '</td></tr>';
					}

					if (data.iambob == 1) {
						var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
						var total_sell_unit = parseFloat(data.values[0]) + parseFloat(data.bobtxfee);
						var units_sold_at_price = parseFloat(data.values[3]) / parseFloat(total_sell_unit);
						simplified_dexdetail_tr += '<tr><td colspan=2><b>' + data.bob + ` ${default_lang.Exchange.exchange_swapstatus_td_sold}: </b> = ` + data.values[0].toFixed(8) + '</td></tr>';
						simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_fee_paid_in} ` + data.bob + ': </b> = ' + data.bobtxfee + '</td></tr>';
						simplified_dexdetail_tr += `<tr><td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_total} ` + data.bob + ` ${default_lang.Exchange.exchange_swapstatus_td_deducted}: </b> = ` + total_sell_unit + '</td></tr>';
						simplified_dexdetail_tr += '<tr><td colspan=2><b>' + data.alice + ` ${default_lang.Exchange.exchange_swapstatus_td_received}: </b> = ` + data.values[3].toFixed(8) + '</td></tr>';
						simplified_dexdetail_tr += '<tr><td colspan=2><b>' + data.bob + ` ${default_lang.Exchange.exchange_swapstatus_td_sold_at_price}: </b> = ` + data.values[3].toFixed(8) + ' / ' + total_sell_unit.toFixed(8) + ' = ' + units_sold_at_price + '</td></tr>';
					}

					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					tradesOut += `
						<tr>
							<td>${i + 1}</td>
							<td>${fintime}</td>
							<td>
								<i class="fa fa-arrow-${data.iambob == 0 ? 'right col-green' : 'left col-red'}"></i>&nbsp;
								<span>${ data.iambob == 0 ? default_lang.Exchange.exchange_botstatus_dialog_buyselltext_bought : default_lang.Exchange.exchange_botstatus_dialog_buyselltext_sold}</span>
							</td>
							<td>
								<span class="${data.iambob == 0 ? '' : 'hide'}">${data.alice} &nbsp;<i class="fa fa-exchange"></i>&nbsp; ${data.bob}</span>
								<span class="${data.iambob == 0 ? 'hide' : ''}">${data.bob} &nbsp;<i class="fa fa-exchange"></i>&nbsp; ${data.alice}</span>
							</td>
							<td>
								<span class="${data.iambob == 0 ? '' : 'hide'}">
									${formatValue(total_sell_unit)} ${data.alice}
								</span>
								<span class="${data.iambob == 0 ? 'hide' : ''}">
									${formatValue(total_sell_unit)} ${data.bob}
								</span>
							</td>
							<td>
								<span class="${data.iambob == 0 ? '' : 'hide'}">
									${formatValue(data.srcamount)} ${data.bob}
								</span>
								<span class="${data.iambob == 0 ? 'hide' : ''}">
									${formatValue(data.values[3])} ${data.alice}
								</span>
							</td>
							<td>
								<span class="${data.iambob == 0 ? '' : 'hide'}">${price_per_bought_unit ? formatValue(price_per_bought_unit) : ''} (${formatValue(total_sell_unit)} / ${formatValue(data.srcamount)})</span>
								<span class="${data.iambob == 0 ? 'hide' : ''}">${units_sold_at_price ? formatValue(units_sold_at_price) : ''} (${formatValue(data.values[3])} / ${formatValue(total_sell_unit)})</span>
							</td>
							<td>
								<button class="btn btn-gray trade-history-toggle-${i}" onClick="openTradeDetails(${i}, ${trades.length})">${default_lang.TradeHistory.tradehistory_btn_show_history}</buton>
							</td>
						</tr>
						<tr>
							<td colspan="7">
								<div class="trade-details-${i}" style="display: none; margin-top: 15px">
							<div class="input-group col-sm-12">
								<span class="input-group-addon" style="font-size: 20px; border: 0px;"><div class="swapdetail_bobdeposit"><span class="glyphicon glyphicon-save" aria-hidden="true"></span><br>${default_lang.Exchange.exchange_swapstatus_statusbar_seller_deposit}</div></span>
								<span class="input-group-addon" style="font-size: 20px; border: 0px;"><div class="swapdetail_alicepayment"><span class="glyphicon glyphicon-transfer" aria-hidden="true"></span><br>${default_lang.Exchange.exchange_swapstatus_statusbar_buyer_payment}</div></span>
								<span class="input-group-addon" style="font-size: 20px; border: 0px;"><div class="swapdetail_bobpayment"><span class="glyphicon glyphicon-random" aria-hidden="true"></span><br>${default_lang.Exchange.exchange_swapstatus_statusbar_seller_payment}</div></span>
								<span class="input-group-addon" style="font-size: 20px; border: 0px; text-align: center;"><div class="swapdetail_alicespend"><span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span><br>${default_lang.Exchange.exchange_swapstatus_statusbar_all_done}</div></span>
							</div>
							<div class="input-group col-sm-12">
								<span class="input-group-addon swapdetail_info"></span>
							</div>
							<div class="row">
								<div class="col-sm-12">
									<div class="panel panel-default">
										<div class="panel-heading">
											<h3 class="panel-title"><strong>${default_lang.Exchange.exchange_swapstatus_full_status}</strong></h3>
										</div>
										<div class="">
											<table width="100%" class="table table-striped" style="margin-bottom: 0;">
												<tr>
													<td rowspan=5>${default_lang.Exchange.exchange_swapstatus_td_trade_info}</td>
													<td>${default_lang.Exchange.exchange_swapstatus_td_quote_id}</td>
													<td>` + data.quoteid + `</td>
												</tr>
												<tr>
													<td>${default_lang.Exchange.exchange_swapstatus_td_request_id}</td>
													<td>` + data.requestid + `</td>
												</tr>
												<tr>
													<td>${default_lang.Exchange.exchange_swapstatus_td_trade_id}</td>
													<td>` + data.tradeid + `</td>
												</tr>
												<tr>
													<td>${default_lang.Exchange.exchange_swapstatus_td_expires_in}</td>
													<td>` + time + `</td>
												</tr>
												<tr>
													<td>${default_lang.Exchange.exchange_swapstatus_td_source_amount}</td>
													<td>` + data.srcamount + `</td>
												</tr>
												<tr>
													<td rowspan=4>${default_lang.Exchange.exchange_swapstatus_td_buyer_info}</td>
													<td>${default_lang.Exchange.exchange_swapstatus_td_buyer_coin}</td>
													<td>` + alice_answer + `</td>
												</tr>
												<tr>
													<td>${default_lang.Exchange.exchange_swapstatus_td_buyer_id}</td>
													<td>` + data.aliceid + `</td>
												</tr>
												<tr>
													<td>${default_lang.Exchange.exchange_swapstatus_td_buyer_payment}</td>
													<td class="tbl_alicepayment">` + `<a href="#" onclick="shell.openExternal('` + return_coin_details(data.alice).explorer + data.alicepayment + `'); return false;">` + data.alicepayment + `</a></td>
												</tr>
												<tr>
													<td>${default_lang.Exchange.exchange_swapstatus_td_buyer_tx_fee}</td>
													<td class="tbl_alicetxfee">` + data.alicetxfee + `</td>
												</tr>
												<tr>
													<td rowspan=4>${default_lang.Exchange.exchange_swapstatus_td_seller_info}</td>
													<td>${default_lang.Exchange.exchange_swapstatus_td_seller_coin}</td>
													<td>` + bob_answer + `</td>
												</tr>
												<tr>
													<td>${default_lang.Exchange.exchange_swapstatus_td_seller_deposit}</td>
													<td class="tbl_bobdeposit">` + `<a href="#" onclick="shell.openExternal('` + return_coin_details(data.bob).explorer + data.bobdeposit + `'); return false;">` + data.bobdeposit + `</a></td>
												</tr>
												<tr>
													<td>${default_lang.Exchange.exchange_swapstatus_td_seller_payment}</td>
													<td class="tbl_bobpayment"><a href="#" onclick="shell.openExternal('`+ return_coin_details(data.bob).explorer + data.bobpayment + `'); return false;">` + data.bobpayment + `</a></td>
												</tr>
												<tr>
													<td>${default_lang.Exchange.exchange_swapstatus_td_seller_tx_fee}</td>
													<td class="tbl_bobtxfee">` + data.bobtxfee + `</td>
												</tr>
												<tr>
													<td rowspan=8>${default_lang.Exchange.exchange_swapstatus_td_other_info}</td>
													<td colspan=2><b>${default_lang.Exchange.exchange_swapstatus_td_you_are}:</b> ` + iambob_answer + `</td>
												</tr>
												`+ simplified_dexdetail_tr + `
											</table>
										</div>
									</div>
								</div>
							</div>
								</div>
							</td>
						</tr>`;
				}
			}

			tradesOut += '</table>';

			if (tradesCounter > 0) {
				$('#trades-history-content').html(out + tradesOut);
			} else {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('#trades-history-content').html(default_lang.TradeHistory.tradehistory_no_trade_history);
			}
		} else {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			$('#trades-history-content').html(default_lang.TradeHistory.tradehistory_no_trade_history);
		}
	});
}

/* TRADE HISTORY - CREDIT: pbca26 END*/

/* ZEROCONF SETTINGS */

function ZeroConfDeposit(deposit_weeks, deposit_amount) {
	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "instantdex_deposit", "weeks": deposit_weeks, "amount": deposit_amount, "broadcast": 1 };
	var url = "http://127.0.0.1:7783";
	console.log(ajax_data);
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (zconf_deposit_data) {
		console.log(zconf_deposit_data);
		var update_deposit_log_file = ShepherdIPC({ "command": "update_zeroconf_log", "data": { "logdata": JSON.stringify(zconf_deposit_data), "type": "deposit" } });
		console.log(update_deposit_log_file);
		if (!zconf_deposit_data.error === false) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.error(zconf_deposit_data.error, default_lang.ZeroConfirmation.zeroconf_toastr_title_instantdex_notification);
		}
		if (zconf_deposit_data.result == 'success') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			var zconf_depoit_bootbox = bootbox.dialog({
				title: default_lang.ZeroConfirmation.zeroconf_deposit_security_deposit_sent,
				message: `<b>${default_lang.ZeroConfirmation.zeroconf_history_td_address}: </b> ${zconf_deposit_data.address}<br>
						<b>${default_lang.ZeroConfirmation.zeroconf_history_td_deposit}: </b> ${zconf_deposit_data.deposit}<br>
						<b>${default_lang.ZeroConfirmation.zeroconf_history_td_expiration}: </b> ${zconf_deposit_data.expiration}<br>
						<a href="#" class="zconf_deposit_txid_bootbox" data-txid="${zconf_deposit_data.txid}">` + zconf_deposit_data.txid + `</a>`,
				closeButton: false,
				size: 'medium',
				buttons: {
					cancel: {
						label: `${default_lang.Common.btn_close_smallcaps}`,
						className: 'btn-default',
						callback: function () {
						}
					}
				}
			})
			zconf_depoit_bootbox.init(function () {
				$('.zconf_deposit_txid_bootbox').click(function () {
					console.log($(this).data());
					shell.openExternal('https://kmd.explorer.supernet.org/tx/' + $(this).data('txid'));
				});
			});
			//getZeroConfDepositHistory();
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}

function ZeroConfClaim() {
	var userpass = sessionStorage.getItem('mm_userpass');
	var mypubkey = sessionStorage.getItem('mm_mypubkey');
	var ajax_data = { "userpass": userpass, "method": "instantdex_claim" };
	var url = "http://127.0.0.1:7783";
	var fName = arguments.callee.toString().match(/function ([^\(]+)/)[1]
	console.warn(new Date().toLocaleTimeString() + " MM_CALL: " + fName);;
	$.ajax({
		async: true,
		data: JSON.stringify(ajax_data),
		dataType: 'json',
		type: 'POST',
		url: url
	}).done(function (zconf_claim_data) {
		console.log(zconf_claim_data);
		var update_claim_log_file = ShepherdIPC({ "command": "update_zeroconf_log", "data": { "logdata": JSON.stringify(zconf_claim_data), "type": "claim" } });
		console.log(update_claim_log_file);
		if (!zconf_claim_data.error === false) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			toastr.error(zconf_claim_data.error, default_lang.ZeroConfirmation.zeroconf_toastr_title_instantdex_notification);
		}
		if (zconf_claim_data.result == 'success') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			var zconf_claim_bootbox = bootbox.dialog({
				title: default_lang.ZeroConfirmation.zeroconf_claim_deposit_claim,
				message: `<div class="zeroconf_claims_table_div mCustomScrollbar" data-mcs-theme="minimal-dark">
								<table class="table table-striped zeroconf_claims_tbl" width="100%" style="margin-bottom: 0;">
									<thead>
										<th>${default_lang.ZeroConfirmation.zeroconf_claim_list_of_claimable}</th>
									</thead>
									<tbody></tbody>
								</table>
							</div>`,
				closeButton: false,
				size: 'medium',
				buttons: {
					cancel: {
						label: `${default_lang.Common.btn_close_smallcaps}`,
						className: 'btn-default',
						callback: function () {
						}
					}
				}
			})
			zconf_claim_bootbox.init(function () {

				$('.zeroconf_claims_tbl tbody').empty();
				$.each(zconf_claim_data.txids, function (index, val) {
					var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
					console.log(index);
					console.log(val);

					var seconds = val.waittime;
					var duration = moment.duration(seconds, 'seconds');
					var formatted_waittime = duration.format("hh:mm:ss");
					console.log(formatted_waittime);

					var zeroconf_claims_tbl_tr = '';

					zeroconf_claims_tbl_tr += '<tr>';
					zeroconf_claims_tbl_tr += `<td>
													<b>${default_lang.ZeroConfirmation.zeroconf_history_td_deposit}:</b> ${val.deposit} KMD<br>
													<b>${default_lang.ZeroConfirmation.zeroconf_claim_td_interest}:</b> ${val.interest}<br>
													<b>${default_lang.ZeroConfirmation.zeroconf_claim_td_wait_time}:</b> ${formatted_waittime} (HH:mm:ss)<br>
													<b>${default_lang.ZeroConfirmation.zeroconf_history_td_txid}:</b> <a class="zconf_claim_txid_bootbox" href="#" data-txid="${val.txid}">${default_lang.ZeroConfirmation.zeroconf_history_td_open_in_explorer}</a>
													</td>`;
					zeroconf_claims_tbl_tr += '</tr>';
					$('.zeroconf_claims_tbl tbody').append(zeroconf_claims_tbl_tr);
				});

				$('.zeroconf_claims_tbl tbody').on('click', '.zconf_claim_txid_bootbox', function (e) {
					console.log($(this).data());
					shell.openExternal('https://kmd.explorer.supernet.org/tx/' + $(this).data('txid'));
				});
			});

			//bootbox.alert();
		}
	}).fail(function (jqXHR, textStatus, errorThrown) {
		// If fail
		console.log(textStatus + ': ' + errorThrown);
	});
}
/* ZEROCONF SETTINGS END */
