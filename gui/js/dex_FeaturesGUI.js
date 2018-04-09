/*** Added GUI Features (related more towards UX than towards DEX) ***/

/** DEX COINS MANAGEMENT SETTINGS **/
$('.btn-managecoins').click(function(e){
	e.preventDefault();
	console.log('btn-managecoins clicked');

	$('.screen-portfolio').hide();
	$('.screen-coindashboard').hide();
	$('.screen-exchange').hide();
	$('.screen-inventory').hide();
	$('.dexdebug').hide();
	$('.dextradeshistory').hide();
	$('.screen-managecoins').show();

	$('.navbar-right').children().removeClass('active');
	$('.screen-managecoins').css("height", $(document).height());

	RefreshDEXManageCoinsFn();
})

$('.dex_mng_coins_list tbody').on('click', '.btn_dex_mng_coins_list_remove', function(e) {
	e.preventDefault();
	console.log('btn-btn_dex_mng_coins_list_remove clicked');
	console.log($(this).data());

	var tmp_remove_coin_obj = {coin: $(this).data('coin'), electrum: false, method: "enable"}
	ManageDEXCoins('remove',tmp_remove_coin_obj);
	RefreshDEXManageCoinsFn();
	toastr.info($(this).data('coin') + ' removed from Startup Coins list.', 'DEX Coins Mangement')
});

$('.btn-refreshmanagecoins').click(function(e){
	e.preventDefault();
	console.log('btn-refreshmanagecoins clicked');
	RefreshDEXManageCoinsFn();
})

$('.btn-managecoins_add_to_startup').click(function(e){
	e.preventDefault();
	console.log('btn-managecoins_add_to_startup clicked');
	var addcoin_startup_data = {};
	addcoin_startup_data.coin = $('.addcoin_startup_select').selectpicker('val');
	addcoin_startup_data.electrum = $('#addcoin_toggle_startup_native_electrum').prop('checked');
	addcoin_startup_data.method = 'enable';

	console.log(addcoin_startup_data);
	ManageDEXCoins('add',addcoin_startup_data);
	RefreshDEXManageCoinsFn();
	toastr.info(addcoin_startup_data.coin + ' added to Startup Coins list.', 'DEX Coins Mangement')
})

function RefreshDEXManageCoinsFn() {
	var lstore_default_coins_list_array = JSON.parse(localStorage.getItem('mm_default_coins_list'));
	var default_lang = JSON.parse(sessionStorage.getItem('mm_default_lang'));
	$('.dex_mng_coins_list tbody').empty();
	var dex_mng_coins_list_tr = '<tr><td>COIN</td><td>MODE</td><td>ACTIONS</td></tr>';
	$.each(lstore_default_coins_list_array, function(index,value) {
		console.log(index);
		console.log(value);
		dex_mng_coins_list_tr += `<tr><td>${value.coin}</td><td>${ (value.electrum == false ? "Electrum" : "Native")}</td><td><button class="btn btn-xs btn-danger btn_dex_mng_coins_list_remove" data-coin="${value.coin}">Remove</button></td></tr>`
	});
	$('.dex_mng_coins_list tbody').append(dex_mng_coins_list_tr);
	toastr.info('Default Startup Coins list refreshed', 'DEX Coins Mangement')
}

/** DEX COINS MANAGEMENT SETTINGS END **/
