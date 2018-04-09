
function BarterDEXInitLang() {
	var barterDEX_settings = ShepherdIPC({"command":"read_settings"});
	console.log(barterDEX_settings.deflang);
	if (barterDEX_settings.deflang == undefined) {
		ShepherdIPC({"command":"reset_settings"});
		BarterDEXDefaultLangFn('en_US');
	} else {
		if (barterDEX_settings.deflang == 'tlh_UNI') {
			$('body').css('font-family','piqad');
			BarterDEXDefaultLangFn(barterDEX_settings.deflang);
		} else {
			$('body').css('font-family',"'Open Sans', 'Helvetica Neue', Helvetica, sans-serif");
			BarterDEXDefaultLangFn(barterDEX_settings.deflang);
		}
	}
}

function BarterDEXDefaultLangFn(lang_data) {
	//console.log(lang_data);
	var default_lang = ShepherdIPC({"command":"get_lang_data","lang":lang_data});
	sessionStorage.setItem('mm_default_lang', JSON.stringify(default_lang));
	PopulateDefaultLanguage();
}

function PopulateDefaultLanguage() {
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	//console.log(default_lang);

	// Populate common phrases localization
	$('.language[data-langstr="loading_wait"]').text(default_lang.Common.loading_wait);

	// Populate loading screen localization
	$('.language[data-langstr="starting_barterdex"]').text(default_lang.loading.starting_barterdex);
	
	// Populate login screen localization
	$('.language[data-langstr="Welcome_to_BarterDEX"]').text(default_lang.login.welcome_to_barterdex);
	$('.language[data-langstr="please_login"]').text(default_lang.login.please_login);
	$('.language[data-langstr="passphrase"]').text(default_lang.login.passphrase);
	$('.language[data-langstr="login_passphrase_input_placeholder"]').attr('placeholder',default_lang.login.login_passphrase_input_placeholder);
	$('.language[data-langstr="login_btn"]').text(default_lang.login.login_btn);
	$('.language[data-langstr="generate_a_new_passphrase"]').text(default_lang.login.generate_a_new_passphrase);

	// Populate naviation menu localization
	$('.language[data-langstr="nav_dashboard"]').text(default_lang.Navigation.nav_dashboard);
	$('.language[data-langstr="nav_trade_history"]').text(default_lang.Navigation.nav_trade_history);
	$('.language[data-langstr="nav_close"]').text(default_lang.Navigation.nav_close);
	$('.language[data-langstr="nav_debug"]').text(default_lang.Navigation.nav_debug);
	$('.language[data-langstr="nav_settings"]').text(default_lang.Navigation.nav_settings);
	$('.language[data-langstr="nav_logout"]').text(default_lang.Navigation.nav_logout);

	// Populate debug localization
	$('.language[data-langstr="debug_payload"]').text(default_lang.Debug.debug_payload);
	$('.language[data-langstr="debug_execute"]').text(default_lang.Debug.debug_execute);
	$('.language[data-langstr="debug_response"]').text(default_lang.Debug.debug_response);
	$('.language[data-langstr="debug_playload_input_placeholder"]').attr('placeholder',default_lang.Debug.debug_playload_input_placeholder);

	// Populate portfolio localization
	$('.language[data-langstr="portfolio_portfolio_chart"]').text(default_lang.Portfolio.portfolio_portfolio_chart);
	$('.language[data-langstr="portfolio_add_coins"]').text(default_lang.Portfolio.portfolio_add_coins);
	$('.language[data-langstr="portfolio_add_default_startup_coins"]').text(default_lang.Portfolio.portfolio_add_default_startup_coins);
	$('.language[data-langstr="portfolio_default_startup_coins"]').text(default_lang.Portfolio.portfolio_default_startup_coins);
	$('.language[data-langstr="portfolio_manage_coins"]').text(default_lang.Portfolio.portfolio_manage_coins);
	$('.language[data-langstr="portfolio_portfolio_coins"]').text(default_lang.Portfolio.portfolio_portfolio_coins);
	$('.language[data-langstr="portfolio_auto_goal_all_active_coins"]').text(default_lang.Portfolio.portfolio_auto_goal_all_active_coins);
	$('.language[data-langstr="portfolio_th_coin"]').text(default_lang.Portfolio.portfolio_th_coin);
	$('.language[data-langstr="portfolio_th_balance"]').text(default_lang.Portfolio.portfolio_th_balance);
	$('.language[data-langstr="portfolio_th_price"]').text(default_lang.Portfolio.portfolio_th_price);
	$('.language[data-langstr="portfolio_th_current_percent"]').text(default_lang.Portfolio.portfolio_th_current_percent);
	$('.language[data-langstr="portfolio_th_goal_percent"]').text(default_lang.Portfolio.portfolio_th_goal_percent);
	$('.language[data-langstr="portfolio_th_kmdvalue"]').text(default_lang.Portfolio.portfolio_th_kmdvalue);
	$('.language[data-langstr="portfolio_th_action"]').text(default_lang.Portfolio.portfolio_th_action);

	// Populate inventory localization
	$('.language[data-langstr="inventory_tab_inventory"]').text(default_lang.Inventory.inventory_tab_inventory);
	$('.language[data-langstr="inventory_list_unspent_tab"]').text(default_lang.Inventory.inventory_list_unspent_tab);

	// Populate exchange localization
	$('.language[data-langstr="exchange_your_balance"]').text(default_lang.Exchange.exchange_your_balance);
	$('.language[data-langstr="exchange_switch_pairs"]').text(default_lang.Exchange.exchange_switch_pairs);
	$('.language[data-langstr="exchange_trading_pair"]').text(default_lang.Exchange.exchange_trading_pair);
	$('.trading_pair_coin_price[data-langstr="exchange_trading_pair_coin_price_input_placeholder"]').attr('placeholder',default_lang.Exchange.exchange_trading_pair_coin_price_input_placeholder);
	$('.trading_pair_coin_volume[data-langstr="exchange_trading_pair_coin_volume_input_placeholder"]').attr('placeholder',default_lang.Exchange.exchange_trading_pair_coin_volume_input_placeholder);
	$('.language[data-langstr="exchange_speed_mode_settings"]').text(default_lang.Exchange.exchange_speed_mode_settings);
	$('.language[data-langstr="exchange_btn_buy_caps"]').text(default_lang.Exchange.exchange_btn_buy_caps);
	$('.language[data-langstr="exchange_btn_sell_caps"]').text(default_lang.Exchange.exchange_btn_sell_caps);
	$('.language[data-langstr="exchange_btn_trade_bot"]').text(default_lang.Exchange.exchange_btn_trade_bot);
	$('.language[data-langstr="exchange_btn_manual_trade"]').text(default_lang.Exchange.exchange_btn_manual_trade);
	
	$('.language[data-langstr="exchange_set_gaol_caps"]').text(default_lang.Exchange.exchange_set_gaol_caps);
	$('.language[data-langstr="exchange_btn_portfolio"]').text(default_lang.Exchange.exchange_btn_portfolio);
	$('.language[data-langstr="exchange_lbl_one_max"]').text(default_lang.Exchange.exchange_lbl_one_max);
	$('.language[data-langstr="exchange_lbl_one_price_to"]').text(default_lang.Exchange.exchange_lbl_one_price_to);
	$('.language[data-langstr="exchange_lbl_buy_small"]').text(default_lang.Exchange.exchange_lbl_buy_small);

	$('.language[data-langstr="exchange_trade_with_selected_trader"]').text(default_lang.Exchange.exchange_trade_with_selected_trader);
	$('.language[data-langstr="exchange_coin_price_max"]').text(default_lang.Exchange.exchange_coin_price_max);
	$('.language[data-langstr="exchange_destpubkey_yes"]').text(default_lang.Exchange.exchange_destpubkey_yes);
	$('.language[data-langstr="exchange_lbl_two_max"]').text(default_lang.Exchange.exchange_lbl_two_max);
	$('.language[data-langstr="exchange_lbl_amount_to"]').text(default_lang.Exchange.exchange_lbl_amount_to);

	$('.language[data-langstr="exchange_dont_auto_repeat_order"]').text(default_lang.Exchange.exchange_dont_auto_repeat_order);
	$('.language[data-langstr="exchange_enable_auto_repeat_this_trade"]').text(default_lang.Exchange.exchange_enable_auto_repeat_this_trade);
	$('.language[data-langstr="exchange_enable_auto_repeat_coinmarketcap"]').text(default_lang.Exchange.exchange_enable_auto_repeat_coinmarketcap);

	$('.language[data-langstr="exchange_0conf_settings_text_one"]').text(default_lang.Exchange.exchange_0conf_settings_text_one);
	$('.language[data-langstr="exchange_0conf_settings_text_two"]').text(default_lang.Exchange.exchange_0conf_settings_text_two);
	$('.language[data-langstr="exchange_0conf_settings_a"]').text(default_lang.Exchange.exchange_0conf_settings_a);
	$('.language[data-langstr="exchange_0conf_settings_text_three"]').text(default_lang.Exchange.exchange_0conf_settings_text_three);
	$('.language[data-langstr="excahnge_0conf_deposit_high_speed_mode_sec"]').text(default_lang.Exchange.excahnge_0conf_deposit_high_speed_mode_sec);
	$('.language[data-langstr="exchange_0conf_make_sec_deposit"]').text(default_lang.Exchange.exchange_0conf_make_sec_deposit);
	$('.language[data-langstr="exchange_0conf_see_deposit_history"]').text(default_lang.Exchange.exchange_0conf_see_deposit_history);
	$('.language[data-langstr="exchange_0conf_claim_deposit"]').text(default_lang.Exchange.exchange_0conf_claim_deposit);

	$('.language[data-langstr="exchange_my_prices"]').text(default_lang.Exchange.exchange_my_prices);
	$('.language[data-langstr="exchange_auto_bot_list"]').text(default_lang.Exchange.exchange_auto_bot_list);
	$('.language[data-langstr="exchange_trade_status"]').text(default_lang.Exchange.exchange_trade_status);


	$('.language[data-langstr="exchange_th_my_orders_base"]').text(default_lang.Exchange.exchange_th_my_orders_base);
    $('.language[data-langstr="exchange_th_my_orders_rel"]').text(default_lang.Exchange.exchange_th_my_orders_rel);
    $('.language[data-langstr="exchange_th_my_orders_bid"]').text(default_lang.Exchange.exchange_th_my_orders_bid);
    $('.language[data-langstr="exchange_th_my_orders_ask"]').text(default_lang.Exchange.exchange_th_my_orders_ask);
    $('.language[data-langstr="exchange_th_bot_list_tradebot_info"]').text(default_lang.Exchange.exchange_th_bot_list_tradebot_info);
    $('.language[data-langstr="exchange_th_bot_list_progress_info"]').text(default_lang.Exchange.exchange_th_bot_list_progress_info);
    $('.language[data-langstr="exchange_th_bot_list_actions"]').text(default_lang.Exchange.exchange_th_bot_list_actions);
    $('.language[data-langstr="exchange_th_swap_status_status"]').text(default_lang.Exchange.exchange_th_swap_status_status);
    $('.language[data-langstr="exchange_th_swap_status_info"]').text(default_lang.Exchange.exchange_th_swap_status_info);
    $('.language[data-langstr="exchange_th_swap_status_action"]').text(default_lang.Exchange.exchange_th_swap_status_action);


    $('.language[data-langstr="exchange_sellers_caps"]').text(default_lang.Exchange.exchange_sellers_caps);
    $('.language[data-langstr="exchange_buyers_caps"]').text(default_lang.Exchange.exchange_buyers_caps);
    $('.language[data-langstr="exchange_btn_back"]').text(default_lang.Exchange.exchange_btn_back);
    $('.language[data-langstr="exchange_th_orderbook_price_in"]').text(default_lang.Exchange.exchange_th_orderbook_price_in);
    //$('.language[data-langstr="exchange_th_orderbook_avg_volume"]').text(default_lang.Exchange.exchange_th_orderbook_avg_volume);
    $('.language[data-langstr="exchange_th_orderbook_max_volume"]').text(default_lang.Exchange.exchange_th_orderbook_max_volume);
    $('.language[data-langstr="exchange_th_orderbook_depth"]').text(default_lang.Exchange.exchange_th_orderbook_depth);
    //$('.language[data-langstr="exchange_th_orderbook_trader_pubkey"]').text(default_lang.Exchange.exchange_th_orderbook_trader_pubkey);
    $('.language[data-langstr="exchange_th_orderbook_age"]').text(default_lang.Exchange.exchange_th_orderbook_age);
    $('.language[data-langstr="exchange_th_orderbook_utxos"]').text(default_lang.Exchange.exchange_th_orderbook_utxos);
    $('.language[data-langstr="exchange_th_orderbook_zcredits"]').text(default_lang.Exchange.exchange_th_orderbook_zcredits);


	



	
}

function GetListofAvailableLocalization() {
	//var barterDEX_settings = ShepherdIPC({"command":"read_settings"});
	//console.log(barterDEX_settings.deflang);
	

	var BarterDEX_langauge_files_list = ShepherdIPC({"command":"get_lang_file_list"});

	var langauge_list_options = '';
	$.each(BarterDEX_langauge_files_list, function(index, value) {
		//console.log(index);
		//console.log(value);
		console.log(value.slice(0, -5));
		var temp_lang_code_array = value.split('_');
		var first_word = temp_lang_code_array[0];
		var second_word = temp_lang_code_array[temp_lang_code_array.length-1];
		langauge_list_options += `<option data-content="${GetLanguageName(first_word)} (${GetCountryName(second_word.slice(0, 2))})" data-tokens="${GetLanguageName(first_word)} (${GetCountryName(second_word.slice(0, 2))})">${value.slice(0, -5)}</option>`
	});
	//console.log(langauge_list_options);
	return langauge_list_options;
}