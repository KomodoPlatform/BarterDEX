/*** JS that controls the HTML and changes it***/
const electron = require('electron'),
	app = electron.app,
	BrowserWindow = electron.BrowserWindow,
	path = require('path'),
	url = require('url'),
	os = require('os'),
	osPlatform = os.platform();

$(document).ready(function() {
	document.addEventListener('drop', function(e) {
		e.preventDefault();
		e.stopPropagation();
	});
	document.addEventListener('dragover', function(e) {
		e.preventDefault();
		e.stopPropagation();
	});

	/* OS Changes - Here we change anything on the page that's OS specific 
	This could grow enough to need its own function call, but this for now*/
	console.log('Platform: ' + osPlatform);
	switch (osPlatform) {
		case "darwin":

			break;
		case "linux":

			break;
		case "win32":
			
			break;
	}
	/* End OS Changes */
	/* Because grrr */ 
	sessionStorage.setItem('mm_chartinterval', JSON.stringify({ "periodicity": "h", "interval": 1 })); 
	/* End Because grrr */ 
	$('.loginbody').css('height',$(window).height())
	var mmstatus = ShepherdIPC({"command":"mmstatus"});
	if (mmstatus !== 'closed') {
		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		var mypubkey = sessionStorage.getItem('mm_mypubkey');
		var loginstate = sessionStorage.getItem('mm_loginstate');
		if (loginstate !== null && loginstate == 'loggedin') {
			$('.mainbody').show();
			$('.loginbody').hide();
			CheckPortfolio_Interval = setInterval(CheckPortfolioFn,300000);
			CheckPortfolioFn();

			//check_coin_balance_Interval = setInterval(check_coin_balance,3000);
			//check_coin_balance();

	//---- dICO App Settings START ----//
			//CheckPortfolio_Interval = setInterval(CheckPortfolioFn,300000);
			//CheckPortfolioFn();

			var dexmode = sessionStorage.getItem('mm_dexmode');
			var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');

			if (dexmode == 'BarterDEX') {
				$('.navbar-brandname').html('BarterDEX');
				$('#trading_mode_options_trademanual').trigger('click');
				$('#trading_mode_options_tradebot').removeAttr("checked");
				$('#trading_mode_options_trademanual').attr('checked','checked');
				$('.trading_pair_coin_autoprice_mode_span').hide();
				$('#trading_pair_coin_autoprice_mode').bootstrapToggle('on')
				$('#trading_pair_coin_price_max_min').html(`${default_lang.Exchange.exchange_lbl_one_max}`);
			}
			if (dexmode == 'dICO') {
				$('.navbar-brandname').html(return_coin_details(selected_dICO_coin).name + ' dICO');
				selected_coin = {}
				selected_coin.coin = selected_dICO_coin;
				selected_coin.coin_name = return_coin_details(selected_dICO_coin).name;
				console.log(selected_coin);
				sessionStorage.setItem('mm_selectedcoin', JSON.stringify(selected_coin));

				$('.dexdashboard-btn').hide();
				$('.screen-portfolio').hide();
				$('.screen-coindashboard').hide();
				$('.btn-exchangeclose').hide();
				$('.screen-exchange').show();
				$('.coin_ticker').html(selected_dICO_coin);
				$.each($('.coinexchange[data-coin]'), function(index, value) {
					$('.coinexchange[data-coin]').data('coin', selected_dICO_coin);
				});

				check_coin_balance(false);
				CheckOrderBookFn();
				CheckOrderbook_Interval = setInterval(CheckOrderBookFn,30000);
				check_swap_status_Interval = setInterval(check_swap_status,20000);
				check_swap_status();
				check_bot_list_Interval = setInterval(check_bot_list, 10000);
				check_bot_list();
				check_my_prices_Interval = setInterval(check_my_prices, 60000);
				check_my_prices();
				bot_screen_coin_balance_Interval = setInterval(bot_screen_coin_balance, 30000);
				bot_screen_coin_balance();
				bot_screen_sellcoin_balance_Interval = setInterval(bot_screen_sellcoin_balance, 30000);
				bot_screen_sellcoin_balance();
				get_coin_info(selected_dICO_coin);

				//Enableing Manual Trade by auto clicking Manual trade option via JS code.
				$('#trading_mode_options_trademanual').trigger('click');
				$('#trading_mode_options_tradebot').removeAttr("checked");
				$('#trading_mode_options_trademanual').attr('checked','checked');
				$('.trading_method_options').hide();
				$('.trading_buysell_options').hide();
				$('.trading_pair_coin_autoprice_mode_span').hide();
				$('#trading_pair_coin_autoprice_mode').bootstrapToggle('on')
				$('#trading_pair_coin_price_max_min').html(`${default_lang.Exchange.exchange_lbl_one_max}`);

				var charts_instruments_data = {}
				charts_instruments_data.symbol = selected_dICO_coin+'/KMD'
				charts_instruments_data.company = 'Komodo Platform';
				ChartsInstruments(charts_instruments_data)
				UpdateDexChart(selected_dICO_coin, 'KMD');
				
				var trading_chart_status = sessionStorage.getItem('mm_tradingchart');
				if (trading_chart_status == 'show') {
					$('.trading_chart_div').show();
					Refresh_active_StockChart_Interval = setInterval(Refresh_active_StockChart, 60000);
					Refresh_active_StockChart();
				} else {
					$('.trading_chart_div').hide();
				}
			}

	//---- dICO App Settings END ----//

			//$('.trading_selected_trader_label').hide();
			//$('.trading_selected_trader').hide();
			$('.relvol_basevol_coin').html($('.trading_pair_coin').selectpicker('val'));


			BarterDEXSettingsFn();
		}
	} else {
		$('.mainbody').hide();
		//$('.loginbody').show();
	}
	//$('.set_goal_label_portfolio').html($('.sell_coin_p').selectpicker('val'));
});

/* Inventory */
$('.btn-inventoryclose').click(function(e) {
	e.preventDefault();
	console.log('btn-inventoryclose clicked');
	console.log($(this).data());
	$('.screen-exchange').show()
	$('.screen-inventory').hide();
	$('.dex_showinv_alice_tbl tbody').empty();
	$('.dex_showlist_unspents_tbl tbody').empty();
	$('.RawJSONInventory-output').empty();
	//$('.coin_ticker').html($(this).attr('data-coin'));
	//$.each($('.coinexchange[data-coin]'), function(index, value) {
		//$('.coinexchange[data-coin]').data('coin', $(this).attr('data-coin'));
	//});

	check_coin_balance(false);
	CheckOrderBookFn();
	CheckOrderbook_Interval = setInterval(CheckOrderBookFn,30000);
	check_swap_status_Interval = setInterval(check_swap_status,20000);
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

	var dexmode = sessionStorage.getItem('mm_dexmode');
	var selected_dICO_coin = sessionStorage.getItem('mm_selected_dICO_coin');
			if (dexmode == 'dICO') {
				get_coin_info(selected_dICO_coin);
			}
});

$('.btn-inventoryrefresh').click(function(e) {
	e.preventDefault();
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	console.log('btn-inventoryrefresh clicked');
	console.log($(this).data());
	$('.dex_showinv_alice_tbl tbody').html(`<th><div style="text-align: center;">${default_lang.Common.loading_wait}</div></th>`);
	$('.dex_showlist_unspents_tbl tbody').html(`<th><div style="text-align: center;">${default_lang.Common.loading_wait}</div></th>`);

	//check_coin_inventory($(this).data('coin'));
	check_coin_listunspent($(this).data());
});

$('.dex_showinv_alice_tbl tbody').on('click', '.btn_coiniventory_detail', function() {
	//console.log($(this).data());
	var index = $(this).data('index');
	var coininventory = sessionStorage.getItem('mm_coininventory');
	coininventory = JSON.parse(coininventory);
	console.log(coininventory.alice[index]);

	bootbox.dialog({
		onEscape: true,
		backdrop: true,
		message: `
			<table class="table table-striped">
				<tbody>
					<tr>
					<th rowspan="13" style="width: 30px;">` + index + `</th>
					<th>method</th>
					<th>` + coininventory.alice[index].method + `</th>
					</tr>
					<tr>
					<td>gui</td>
					<td>` + coininventory.alice[index].gui + `</td>
					</tr>
					<tr>
					<td>coin</td>
					<td>` + coininventory.alice[index].coin + `</td>
					</tr>
					<tr>
					<td>iambob</td>
					<td>` + coininventory.alice[index].iambob + `</td>
					</tr>
					<tr>
					<td>address</td>
					<td>` + coininventory.alice[index].address + `</td>
					</tr>
					<tr>
					<td>txid</td>
					<td>` + coininventory.alice[index].txid + `</td>
					</tr>
					<tr>
					<td>vout</td>
					<td>` + coininventory.alice[index].vout + `</td>
					</tr>
					<tr>
					<td>value</td>
					<td>` + (parseFloat(coininventory.alice[index].value)/100000000).toFixed(8) + ` ` + coininventory.alice[index].coin + `</td>
					</tr>
					<tr>
					<td>satoshis</td>
					<td>` + coininventory.alice[index].satoshis + `</td>
					</tr>
					<tr>
					<td>txid2</td>
					<td>` + coininventory.alice[index].txid2 + `</td>
					</tr>
					<tr>
					<td>vout2</td>
					<td>` + coininventory.alice[index].vout2 + `</td>
					</tr>
					<tr>
					<td>value2</td>
					<td>` + (parseFloat(coininventory.alice[index].value2)/100000000).toFixed(8) + ` ` + coininventory.alice[index].coin + `</td>
					</tr>
					<tr>
					<td>desthash</td>
					<td>` + coininventory.alice[index].desthash + `</td>
					</tr>
				</tbody>
			</table>`,
		closeButton: true,
		size: 'large'
	});
});

$('.btn-makeinventory').click(function(e) {
	e.preventDefault();
	console.log('btn-makeinventory clicked');
	//console.log($(this).data());

	utxo_input1 = $("#inventory_slider_input1").val();
	utxo_input2 = $("#inventory_slider_input2").val();
	utxo_input3 = $("#inventory_slider_input3").val();
	//console.log(utxo_input1);
	//console.log(utxo_input2);
	//console.log(utxo_input3);

	var slider_input1 = $('#inventory-slider1').val();
	var slider_input2 = $('#inventory-slider2').val();
	var slider_input3 = $('#inventory-slider3').val();
	//console.log(slider_input1);
	//console.log(slider_input2);
	//console.log(slider_input3);

	var selected_coin = JSON.parse(sessionStorage.getItem('mm_selectedcoin'));
	var coin_addr = selected_coin.addr;
	console.log(coin_addr);

	var withdraw_outputs = []

	for(var i=0; i < slider_input1; i++){
		var tmp_json = {}
		tmp_json[coin_addr] = utxo_input1
		//console.log(tmp_json)
		withdraw_outputs.push(tmp_json)
	}
	for(var i=0; i < slider_input2; i++){
		var tmp_json = {}
		tmp_json[coin_addr] = utxo_input2
		withdraw_outputs.push(tmp_json)
	}
	for(var i=0; i < slider_input3; i++){
		var tmp_json = {}
		tmp_json[coin_addr] = utxo_input3
		withdraw_outputs.push(tmp_json)
	}
	//console.log(withdraw_outputs);

	inventory_data = {};
	inventory_data['coin'] = $(this).data('coin');
	inventory_data['outputs'] = withdraw_outputs;
	console.log(inventory_data);
	make_inventory_withdraw(inventory_data);

});
/* Inventory END*/
/* Manual Tradeing */

$('input[name=trading_mode_options]').change(function() {
	console.log('trading_mode_options changed');

	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));

	var buying_or_selling = $('input[name=trading_pair_options]:checked').val();
	//console.log(buying_or_selling);

	var bot_or_manual = $('input[name=trading_mode_options]:checked').val();
	//console.log(bot_or_manual);

	var margin_or_fixed = $('#trading_pair_coin_autoprice_mode').prop('checked');

	if(bot_or_manual == 'tradebot') {
		var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
		$('#trading_pair_coin_price_max_min').html(`${default_lang.Exchange.exchange_lbl_one_max}`);
		$('.trading_pair_lable_text_one').html(`${default_lang.Exchange.exchange_lbl_one_max}`);
		$('.trading_pair_lable_text_two').html(default_lang.Exchange.exchange_lbl_two_buy_small);
		$('.buy_sell_advanced_options_div').hide();
		if(buying_or_selling == 'buying') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			$('.btn-bot_action').html(default_lang.Exchange.exchange_btn_buy_caps);
			$('.relvol_basevol_label').html(default_lang.Exchange.exchange_itll_cost_you);
			$('.btn-bot_action').attr('data-action', 'buy');
		}
		if(buying_or_selling == 'selling') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			$('.btn-bot_action').html(default_lang.Exchange.exchange_btn_sell_caps);
			$('.relvol_basevol_label').html(default_lang.Exchange.exchange_youll_get);
			$('.btn-bot_action').attr('data-action', 'sell');
		}
		$('.trading_selected_trader_label').hide();
		$('.trading_selected_trader').hide();
		$('.trading_pair_coin_autoprice_mode_span').hide();
		$('#trading_pair_coin_autoprice_mode').bootstrapToggle('on')
		$('#trading_pair_coin_price_max_min').html(`${default_lang.Exchange.exchange_lbl_one_max}`);
		$('#trading_pair_coin_price_max_min').show();
		$('.buy_sell_amount_to').show();
		$('#trading_pair_coin_ticker').show();
		$('.trading_pair_coin2').show();
		$('.trading_pair_coin_volume').show();
		$('.btn-bot_action').removeClass('btn-block');
		$('.btn-bot_action').css('border-top-left-radius','0');
		$('.btn-bot_action').css('border-bottom-left-radius','0');
		$('.buy_sell_button_div').css('margin-top', '0');
		$('.relvol_basevol_amount').show();
		$('.relvol_basevol_label').show();
		$('.portfolio_info_text').hide();
		$('.coingoal_label_div').hide();
		$('.coingoal_div').hide();
	}
	if(bot_or_manual == 'trademanual') {
		$('input[name=trading_manual_buy_sell_options]:nth(0)').trigger('click');
		//$('#trading_pair_coin_price_max_min').html(`${default_lang.Exchange.exchange_lbl_one_min}`);
		$('.trading_pair_lable_text_one').html('');
		$('.buy_sell_advanced_options_div').show();
		//$('.trading_pair_lable_text_two').html('Sell');
		if(buying_or_selling == 'buying') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			$('.btn-bot_action').html(default_lang.Exchange.exchange_btn_buy_caps);
			$('.relvol_basevol_label').html(default_lang.Exchange.exchange_itll_cost_you)
			$('.btn-bot_action').attr('data-action', 'buy');
		}
		if(buying_or_selling == 'selling') {
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
		$('.btn-bot_action').css('border-top-left-radius','0');
		$('.btn-bot_action').css('border-bottom-left-radius','0');
		$('.buy_sell_button_div').css('margin-top', '0');
		$('.relvol_basevol_amount').show();
		$('.relvol_basevol_label').show();
		$('.portfolio_info_text').hide();
		$('.coingoal_label_div').hide();
		$('.coingoal_div').hide();
	}
	if(bot_or_manual == 'tradeportfolio') {
		$('.trading_pair_lable_text_one').html(`${default_lang.Exchange.exchange_portfolio_auto_price}`)
		$('.trading_selected_trader_label').hide();
		$('.trading_selected_trader').hide();
		$('.trading_pair_coin_autoprice_mode_span').show();
		$('#trading_pair_coin_autoprice_mode').bootstrapToggle('on')
		$('#trading_pair_coin_autoprice_mode').parent().removeClass(' disabled');
		$('#trading_pair_coin_autoprice_mode').removeAttr('disabled');
		$('.buy_sell_advanced_options_div').hide();
		$('#trading_pair_coin_price_max_min').html('%');
		if(buying_or_selling == 'buying') {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			if(margin_or_fixed == true){
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_buy_margin_percent);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_buy_margin_will_make);
			} else {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_buy_price);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_buy_on_fixed_price_will_make);
			}
		}
		if(buying_or_selling == 'selling') {
			if(margin_or_fixed == true){
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_sell_margin_percent);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_sell_margin_will_make);
			} else {
				var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
				$('.btn-bot_action').html(default_lang.Exchange.exchange_portfolio_set_auto_sell_price);
				$('.portfolio_info_text').html(default_lang.Exchange.exchange_portfolio_auto_sell_on_fixed_price_will_make);
			}
		}
		$('.btn-bot_action').attr('data-action', 'autoprice');
		$('.buy_sell_amount_to').hide();
		$('#trading_pair_coin_ticker').hide();
		$('.trading_pair_coin2').hide();
		$('.trading_pair_coin_volume').hide();
		$('.btn-bot_action').addClass(' btn-block');
		$('.btn-bot_action').css('border-top-left-radius','4px');
		$('.btn-bot_action').css('border-bottom-left-radius','4px');
		$('.buy_sell_button_div').css('margin-top', '20px');
		$('.relvol_basevol_amount').hide();
		$('.relvol_basevol_label').hide();
		$('.portfolio_info_text').show();
		$('.coingoal_label_div').show();
		$('.coingoal_div').show();
	}
});

/* Manual Tradeing END*/
/* Portfolio */
$('.porfolio_coins_list tbody').on('click', '.btn_portfolio_coingoal', function() {
	console.log('portfolio set goal button clicked')
	console.log($(this).data());
	console.log($(this).data('coin'));

	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	var coin = $(this).data('coin');

	var set_coingoal_bootbox = bootbox.dialog({
		backdrop: true,
		onEscape: true,
		message: `<div class="form-group coingoal_label_div" style="margin-top: 15px; margin-bottom: 0px;">
                      <span style="font-size: 18px;">${$(this).data('coin')}: ${default_lang.Portfolio.portfolio_set_goal_percentage_for_your_portfolio}</span>
                    </div>
                    <div class="input-group col-sm-12 coingoal_div">
                      <span class="input-group-addon coin_ticker" style="font-size: 20px;">`+$(this).data('coin')+`</span>
                      <input type="number" class="form-control coingoal_percentage_bootbox" placeholder="e.g. 12.5" style="height: 64px; font-size: 20px;">
                    </div>`,
		closeButton: true,
		size: 'medium',

		buttons: {
			cancel: {
				label: `${default_lang.Common.btn_close_smallcaps}`,
				className: 'btn-default',
				callback: function(){
				}
			},
			ok: {
				label: `${default_lang.Portfolio.portfolio_set_goal}`,
				className: 'btn-primary btn_set_coin_goal_bootbox',
				callback: function(){
					var goal_data = {}
					goal_data.coin = coin;
					goal_data.auto = false;
					goal_data.percent = $('.coingoal_percentage_bootbox').val();

					console.log(goal_data);
					set_coin_goal(goal_data);
				}
			}
		}
	});
	set_coingoal_bootbox.init(function(){
		console.log('set_coingoal_bootbox dialog opened.')
	});


});

$('.porfolio_coins_list tbody').on('click', '.btn-portfoliogo', function() {
	console.log('portfolio coin button clicked')
	console.log($(this).data());
	console.log($(this).data('coin'));
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	$('.screen-portfolio').hide();
	setTimeout(function(){
		if ($(window).height() - ($('.col1').height() + $('.col2').height() + 135) <= 285) {
			var trade_status_body_height = '285px';
		} else {
			var trade_status_body_height = $(window).height() - ($('.col1').height() + $('.col2').height() + 135);
		}
		$('.exchange_trade_status_body').css('height',trade_status_body_height);
		$('#exchange_coin_asks_togl').css('max-height',$('.col1').height() + $('.col2').height() + $('.col3').height() - 470);
		$('#exchange_coin_bids_togl').css('max-height',$('.col1').height() + $('.col2').height() + $('.col3').height() - 470);
		$('#exchange_coin_asks').css('max-height',$('.col1').height() + $('.col2').height() + $('.col3').height() - 470);
		$('#exchange_coin_bids').css('max-height',$('.col1').height() + $('.col2').height() + $('.col3').height() - 470);
	}, 10);
	$('#trading_mode_options_trademanual').trigger('click');
	$('#trading_mode_options_tradebot').removeAttr("checked");
	$('#trading_mode_options_trademanual').attr('checked','checked');
	$('#trading_pair_options_buying').trigger('click');
	$('#trading_pair_options_selling').removeAttr("checked");
	$('#trading_pair_options_buying').attr('checked','checked');
	$('.trading_pair_coin').selectpicker('val', 'KMD');
	$('.relvol_basevol_coin').html('KMD');
	$('.trading_pair_coin_price').val('');
	$('.trading_pair_destpubkey').val('');
	$('.trading_pair_coin_volume').val('');
	$('.relvol_basevol').html('');
	$('.navbar-right').children().removeClass('active');
	$('.trading_pair_coin_autoprice_mode_span').hide();
	$('#trading_pair_coin_autoprice_mode').bootstrapToggle('on')
	$('#trading_pair_coin_price_max_min').html(`${default_lang.Exchange.exchange_lbl_one_max}`);

	$('.trading_sellcoin_ticker_name').empty();
	$('.trading_sellcoin_balance').empty();

	$('.trading_coin_ticker_name').empty();
	$('.trading_coin_balance').empty();
	$('#balance-spinner').show();

	coin = $(this).data('coin');

	if (coin == 'KMD') {
		$('.trading_pair_coin').selectpicker('val', 'BTC');
		$('.relvol_basevol_coin').html('BTC');
		setTimeout(function(){ $('.trading_pair_coin2').selectpicker('val', 'KMD'); }, 10);
	}

	selected_coin = {}
	selected_coin.coin = $(this).data('coin');
	selected_coin.coin_name = $(this).data('coinname');
	selected_coin.addr = $(this).data('addr');
	selected_coin.balance = $(this).data('balance');
	console.log(selected_coin);
	sessionStorage.setItem('mm_selectedcoin', JSON.stringify(selected_coin));

	//check_coin_balance_Interval = setInterval(check_coin_balance($(this).data()),3000);

	$('.screen-portfolio').hide();
	$('.screen-coindashboard').hide()
	$('.screen-exchange').show();
	$('.coin_ticker').html(coin);
	$.each($('.coinexchange[data-coin]'), function(index, value) {
		$('.coinexchange[data-coin]').data('coin', coin);
	});
	$('.trading_pair_coin2').selectpicker('val',coin);
	$('.coingoal_label_coin_name').html(return_coin_details(coin).name + ' ('+coin+')');

	CheckPortfolioFn(false);
	CheckOrderBookFn();
	CheckOrderbook_Interval = setInterval(CheckOrderBookFn,30000);
	check_swap_status_Interval = setInterval(check_swap_status,20000);
	check_swap_status();
	check_bot_list_Interval = setInterval(check_bot_list, 10000);
	check_bot_list();
	check_my_prices_Interval = setInterval(check_my_prices, 60000);
	check_my_prices();
	bot_screen_coin_balance_Interval = setInterval(bot_screen_coin_balance, 30000);
	bot_screen_coin_balance();
	bot_screen_sellcoin_balance_Interval = setInterval(bot_screen_sellcoin_balance, 30000);
	bot_screen_sellcoin_balance();

	//getZeroConfDepositHistory();

	sessionStorage.setItem('mm_chartinterval', JSON.stringify({"periodicity":"h","interval":1}));

	var charts_instruments_data = {}
	if ($(this).data('coin') == 'KMD') {
		charts_instruments_data.symbol = $(this).data('coin')+'/BTC'
		charts_instruments_data.company = 'Komodo Platform';
		ChartsInstruments(charts_instruments_data)
		UpdateDexChart($(this).data('coin'),'BTC');
	} else {
		charts_instruments_data.symbol = $(this).data('coin')+'/KMD'
		charts_instruments_data.company = 'Komodo Platform';
		ChartsInstruments(charts_instruments_data)
		UpdateDexChart($(this).data('coin'),'KMD');
	}
	
	var trading_chart_status = sessionStorage.getItem('mm_tradingchart');
	if (trading_chart_status == 'show') {
		$('.trading_chart_div').show();
		Refresh_active_StockChart_Interval = setInterval(Refresh_active_StockChart, 60000);
	} else {
		$('.trading_chart_div').hide();
	}

	// Fix width of chart
	gChart.size = {width: $('#chartContainer').parent().width()};
	gChart.update();
	setTimeout(function(){
		PopulateDefaultLanguage();
		$('input:radio[name="trading_manual_buy_sell_options"]').filter('[value="disabled"]').trigger('click');
	}, 100);
});
/* Portfolio END */
/* Coins */
$('.btn-activatecoins').click(function(e){
	e.preventDefault();
	console.log('btn-activatecoins clicked');
	console.log($(this).data());

	addcoins_dialog();

	//$('.screen-portfolio').hide();
	//$('.screen-addcoins').show();

	//CheckPortfolioFn(false);
	//get_coins_list();



})

/*$('.btn-addcoinsclose').click(function(e){
	e.preventDefault();
	console.log('btn-addcoinsclose clicked');
	console.log($(this).data());

	$('.screen-portfolio').show();
	$('.screen-addcoins').hide();

	CheckPortfolioFn();
	CheckPortfolio_Interval = setInterval(CheckPortfolioFn,300000);
});

$('.btn-addcoinsrefresh').click(function(e){
	e.preventDefault();
	console.log('btn-addcoinsrefresh clicked');
	console.log($(this).data());

	get_coins_list()
});*/

$('.addcoins_tbl tbody').on('click', '.addcoins_tbl_disable_btn', function() {
	console.log('Disable this coin:' + $(this).data('coin'));
	var refresh_data = {"coin":$(this).data('coin'), "status": "disable"};
	//enable_disable_coin(refresh_data)
	//$('.selectpicker option').filter(function () { return $(this).html() == $(this).data('coin'); }).attr("disabled","disabled");
	//$('.selectpicker').selectpicker('refresh');


});

$('.addcoins_tbl tbody').on('click', '.addcoins_tbl_enable_btn', function() {
	console.log('Enable this coin:' + $(this).data('coin'));
	var refresh_data = {"coin":$(this).data('coin'), "status": "enable"};
	//enable_disable_coin(refresh_data)
	//$('.selectpicker option').filter(function () { return $(this).html() == $(this).data('coin'); }).removeAttr('disabled');
	//$('.selectpicker').selectpicker('refresh');
});
/* Coins END */
/* Static Menu Buttons (Debug is in mmCalls)*/
$('.dexdashboard-btn').click(function (e) {
	e.preventDefault();
	console.log('btn-exchangeclose clicked');
	console.log($(this).data());

	$('.navbar-right').children().removeClass('active');
	$('.dexdashboard-btn').parent().addClass("active");

	$('body').css('overflow', 'inherit');
	$('.dextradeshistory').hide();

	$('.dexdebug').hide();
	$('.dexdebug-btn').show();
	$('.dexlogout-btn').show();
	$('.dexdebug-close-btn').hide();
	$('.dextradeshistory-btn').show();

	//$('.screen-coindashboard').show()
	$('.screen-exchange').hide();
	$('.screen-inventory').hide();
	$('.screen-managecoins').hide();
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

	CheckPortfolioFn();
	CheckPortfolio_Interval = setInterval(CheckPortfolioFn, 60000);
});

/* Static Menu Buttons END*/
/* ZEROCONF SETTINGS */

/*$('.zeroconf_deposits_history_tbl tbody').on('click', '.zconf_deposit_txid_link', function(e) {
	e.preventDefault();
	console.log('zconf_deposit_txid_link clicked');
	console.log($(this).data());
	shell.openExternal('https://kmd.explorer.supernet.org/tx/'+$(this).data('txid'));
});*/

$('.zeroconf_deposits_history_tbl tbody').on('click', '.zconf_deposit_details', function(e) {
	e.preventDefault();
	console.log('zconf_deposit_details clicked');
	console.log($(this).data());
});

$('.btn_zeroconf_claim_deposit').click(function(e) {
	e.preventDefault();
	console.log('btn_zeroconf_claim_deposit clicked');
	ZeroConfClaim();
});

$('.btn_zeroconf_deposit').click(function(e){
	e.preventDefault();
	console.log('btn_zeroconf_deposit clicked');
	var deposit_weeks = $('.zeroconf_weeks_select').selectpicker('val');
	var deposit_amount = $('.zeroconf_deposit_amount').val();
	console.log(deposit_weeks);
	console.log(deposit_amount);
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	var zeroconf_deposit_confirm_bootbox = bootbox.dialog({
			onEscape: true,
			backdrop: true,
			message: `${default_lang.ZeroConfirmation.zeroconf_please_confirm_you_want_to_send_and_lock_01} <font style="font-size: 135%;">${deposit_amount} KMD</font> ${default_lang.ZeroConfirmation.zeroconf_please_confirm_you_want_to_send_and_lock_02} <font style="font-size: 135%;">${deposit_weeks} ${default_lang.ZeroConfirmation.zeroconf_week_weeks} </font>${default_lang.ZeroConfirmation.zeroconf_please_confirm_you_want_to_send_and_lock_03}?`,
			closeButton: false,
			size: 'medium',
			className: 'zeroconf_deposit_confirm_class_bootbox',

			buttons: {
				cancel: {
					label: default_lang.Common.btn_close_smallcaps,
					className: 'btn-default',
					callback: function(){
						toastr.info('Sending Speed Deposit fund is canceled.','Speed Deposit Notification')
					}
				},
				ok: {
					label: default_lang.ZeroConfirmation.zeroconf_yes_i_confirm,
					className: 'btn-primary zeroconf_deposit_confirm_make_despoit',
					callback: function(){
						ZeroConfDeposit(deposit_weeks,deposit_amount);
					}
				}
			}
		});
		zeroconf_deposit_confirm_bootbox.init(function(){
			console.log('zeroconf_deposit_confirm_bootbox dialog opened.')
			
		});
});

$('.zeroconf_deposit_amount').keyup(function(){
	var deposit_amount = $('.zeroconf_deposit_amount').val();
	//console.log(deposit_amount);

	var empty = false;
	if (deposit_amount < 10.01) {
		console.log('Send Address is empty or less than 10.01');
		empty = true;
	}
	//console.log(empty);

	if (empty){
		$('.btn_zeroconf_deposit').attr("disabled", "disabled");
	} else {
		$('.btn_zeroconf_deposit').removeAttr("disabled");
	}
});

function getZeroConfDepositHistory(){
	var zeroconf_deposit_history_data = ShepherdIPC({"command":"read_zeroconf_log", "type":"deposit"});
	//console.log(zeroconf_deposit_history_data);
	var reversed_zeroconf_deposit_history_data = zeroconf_deposit_history_data.reverse();

	$('.zeroconf_deposits_history_tbl tbody').empty();
	$.each(reversed_zeroconf_deposit_history_data, function(index, val) {
		//console.log(index);
		//console.log(val);

		if(!val.error === false) {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
			var zeroconf_deposits_history_tr = '';
			zeroconf_deposits_history_tr += '<tr>';
			//zeroconf_deposits_history_tr += '<td>' + index + '</td>';
			zeroconf_deposits_history_tr += `<td><div style="color: #e53935; font-size: 15px;"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span> ${default_lang.ZeroConfirmation.zeroconf_history_td_error}</div></td>`;
			//zeroconf_deposits_history_tr += '<td>-</td>';
			zeroconf_deposits_history_tr += '</tr>';
			$('.zeroconf_deposits_history_tbl tbody').append(zeroconf_deposits_history_tr);
		} else {
			var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));

			var expiration_time = new Date( val.expiration *1000);

			var zeroconf_deposits_history_tr = '';
			zeroconf_deposits_history_tr += '<tr>';
			//zeroconf_deposits_history_tr += '<td>' + index + '</td>';
			zeroconf_deposits_history_tr += `<td>
											<b>${default_lang.ZeroConfirmation.zeroconf_history_td_address}:</b> ${val.address}<br>
											<b>${default_lang.ZeroConfirmation.zeroconf_history_td_deposit}:</b> ${val.deposit} KMD<br>
											<b>${default_lang.ZeroConfirmation.zeroconf_history_td_expiration}:</b> ${expiration_time}<br>
											<b>${default_lang.ZeroConfirmation.zeroconf_history_td_txid}:</b> <a class="zconf_deposit_txid_link" href="#" data-txid="${val.txid}">${default_lang.ZeroConfirmation.zeroconf_history_td_open_in_explorer}</a>
											</td>`;
			/*zeroconf_deposits_history_tr += `<td><button class="btn btn-xs btn-default zconf_deposit_details" data-address="` + val.address + `" data-expiration="` + val.expiration + `" style="display: none;">Details</button>
												<button class="btn btn-xs btn-success zconf_deposit_claim" data-address="` + val.address + `" data-expiration="` + val.expiration + `" style="margin: 3px;">Claim Deposit</button>
											</td>`;*/
			zeroconf_deposits_history_tr += '</tr>';
			$('.zeroconf_deposits_history_tbl tbody').append(zeroconf_deposits_history_tr);
			
		}
	});

	$('.zeroconf_deposits_history_tbl tbody').on('click', '.zconf_deposit_txid_link', function(e) {
		e.preventDefault();
		console.log('zconf_deposit_txid_link clicked');
		console.log($(this).data());
		shell.openExternal('https://kmd.explorer.supernet.org/tx/'+$(this).data('txid'));
	});
}

$('.btn_zeroconf_deposit_history').click(function(e){
	e.preventDefault();
	console.log('info_box_for_zeroconf clicked');

	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	var zconf_deposit_history_bootbox = bootbox.dialog({
		title: default_lang.ZeroConfirmation.zeroconf_history_dialog_title,
		message: `<div class="zeroconf_settings_table_div mCustomScrollbar" data-mcs-theme="minimal-dark">
					<table class="table table-striped zeroconf_deposits_history_tbl" width="100%" style="margin-bottom: 0;">
						<thead>
							<!--<th>Index</th>-->
							<th>${default_lang.ZeroConfirmation.zeroconf_history_th_deposit_history}</th>
							<!--<th>Actions</th>-->
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
				callback: function(){
				}
			}
		}
	})
	zconf_deposit_history_bootbox.init(function(){
		getZeroConfDepositHistory();
		$(".mCustomScrollbar").mCustomScrollbar();
	});
});

$('.info_box_for_zeroconf').click(function(e){
	e.preventDefault();
	console.log('info_box_for_zeroconf clicked');
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	bootbox.alert({
		title: `${default_lang.ZeroConfirmation.zeroconf_info_dialog_title}`,
		message: `<p>${default_lang.ZeroConfirmation.zeroconf_info_dialog_p_01}:</p>
			<ul>
				<li>${default_lang.ZeroConfirmation.zeroconf_info_dialog_li_01}</li>
				<li>${default_lang.ZeroConfirmation.zeroconf_info_dialog_li_02}</li>
                <li>${default_lang.ZeroConfirmation.zeroconf_info_dialog_li_03}</li>
                <li>${default_lang.ZeroConfirmation.zeroconf_info_dialog_li_04}</li>
                <li>${default_lang.ZeroConfirmation.zeroconf_info_dialog_li_05}</li>
                <li>${default_lang.ZeroConfirmation.zeroconf_info_dialog_li_06}</li>
            </ul>
			<p>${default_lang.ZeroConfirmation.zeroconf_info_dialog_p_02}</p>`,
		size: 'large',
		buttons: {
			ok: {
				label: `${default_lang.Common.btn_ok_caps}`,
				className: 'btn-primary',
				callback: function(){
				}
			}
		}
	});
})
/* ZEROCONF SETTINGS END */
