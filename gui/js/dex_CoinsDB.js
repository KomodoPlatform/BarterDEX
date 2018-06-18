
function BarterDEX_Init_CoinsDB() {
	var barterDEX_app_info = ShepherdIPC({ "command": "app_info" });
	console.log(barterDEX_app_info);

	localStorage.setItem('mm_barterdex_app_info', JSON.stringify(barterDEX_app_info));
	CoinsDB_ManageCoinsJson();
}

function CoinsDB_UpdatedCoinsDbFile() {
	var update_coinsdb_file = ShepherdIPC({ "command": "coins_db_dl", "data":{"cmd":"update_coins_file"} });
	console.log(update_coinsdb_file);
}


function CoinsDB_DlIcons(icons_array) {
	console.log(icons_array); //if multiple expected value is ["kmd","btc","oot"]. If single ["kmd"]. MUST be small letters.
	var icons_dl = ShepherdIPC({ "command": "coins_db_dl", "data":{"cmd":"dl_icons","coin_array":icons_array} });
}


function CoinsDB_ReadLocalDB() {
	var local_coinsdb = ShepherdIPC({ "command": "coins_db_read_db" });
	//console.log(local_coinsdb)
	return local_coinsdb;
}


function CoinsDB_ManageCoinsJson(coins_json_action, coins_json_data) {
	
	var default_coinsdb_json_array = ["BTC","KMD"]

	switch (coins_json_action) {
		case 'add':
			console.log('Adding: ' + coins_json_data);
			if (JSON.parse(localStorage.getItem('mm_coinsdb_json_array')) == null) {
				console.warn(`localStorage object mm_coinsdb_json_array not found. Creating with default values...`);
				localStorage.setItem('mm_coinsdb_json_array', JSON.stringify(default_coinsdb_json_array));
			} else {
				var lstore_coinsdb_json_array = JSON.parse(localStorage.getItem('mm_coinsdb_json_array'));
				if (_.contains(lstore_coinsdb_json_array, coins_json_data) == false) {
					lstore_coinsdb_json_array.push(coins_json_data);
					localStorage.setItem('mm_coinsdb_json_array', JSON.stringify(_.sortBy(lstore_coinsdb_json_array)));
					console.log(`Coin ${coins_json_data} added to the local array.`);
					return lstore_coinsdb_json_array;
				} else {
					console.warn(`Coin ${coins_json_data} already exists in local array`);
					return lstore_coinsdb_json_array
				}
			}
			break;
		case 'remove':
			console.log('Removing: ' + coins_json_data);
			var lstore_coinsdb_json_array = JSON.parse(localStorage.getItem('mm_coinsdb_json_array'));
			if (_.contains(lstore_coinsdb_json_array, coins_json_data) == false) {
				console.warn(`Coin ${coins_json_data} does't exists in local array. Remove coin action terminated.`);
				return lstore_coinsdb_json_array;
			} else {
				console.log(`Coin ${coins_json_data} found in local array. Updating local array with updated list...`)
				lstore_coinsdb_json_array = _.without(lstore_coinsdb_json_array, coins_json_data);
				localStorage.setItem('mm_coinsdb_json_array', JSON.stringify(_.sortBy(lstore_coinsdb_json_array)));
				console.log(`Coin ${coins_json_data} removed from the local array.`);
				return lstore_coinsdb_json_array;
			}
			
			break;
		default:
			console.warn(`No action specified. Executing default action...`);
			if (JSON.parse(localStorage.getItem('mm_coinsdb_json_array')) == null) {
				console.warn(`localStorage object mm_coinsdb_json_array not found. Creating with default values...`);
				localStorage.setItem('mm_coinsdb_json_array', JSON.stringify(default_coinsdb_json_array));
			} else {
				var lstore_coinsdb_json_array = JSON.parse(localStorage.getItem('mm_coinsdb_json_array'));
				return lstore_coinsdb_json_array;
			}
	}
}

function CoinsDB_ManageCoinsDetails(coins_detail_action, coins_detail_data) {
	//TODO
	var default_coins_detail_list = [{"coin": "KMD", "Name": "Komodo","explorer":["https://kmdexplorer.ru/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10001},{"electrum1.cipig.net":10001}]},{"coin": "BTC", "Name": "Bitcoin","explorer":["https://www.blocktrail.com/BTC/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10000},{"electrum1.cipig.net":10000}]}]

	var local_coinsdb = ShepherdIPC({ "command": "coins_db_read_db" });
	var lstore_coinsdb_json_array = JSON.parse(localStorage.getItem('mm_coinsdb_json_array'));
	switch (coins_detail_action) {
		case 'gen':
			console.log(`Generating coins.json file...`);
			//console.log(lstore_coinsdb_json_array);
			$.each(lstore_coinsdb_json_array, function(index, value){
				//console.log(index);
				//console.log(value);
				$.each(local_coinsdb, function(db_index, db_val) {
					if (db_val.coin == value) {
						//console.log(db_val);
						if (db_val.etomic != undefined) {
							console.log(`${db_val.coin} is ETOMIC`);
							db_val.eth = true
							console.log(db_val);
						} else {
							db_val.eth = false
							console.log(db_val);
						}
					}
				});
			});
			break;
		case 'update':
			console.log(`Updating coins.json file...`);
			console.log(lstore_coinsdb_json_array);
			break;
		default:
			console.log(`Default action. No action selected.`);
		}

	/*
	ShepherdIPC({ "command": "coins_db_update_coins_json_file", "data": [{"coin": "KMD", "Name": "Komodo","explorer":["https://www.kmd.host/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10001},{"electrum1.cipig.net":10001}]},{"coin": "BTC", "Name": "Bitcoin","explorer":["https://www.blocktrail.com/BTC/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10000},{"electrum1.cipig.net":10000}]}] });
	*/
}


function CoinsDB_GetCoinDetails(coin_code) {
	console.log(coin_code)

	var coins_detail_list = [{"coin": "KMD", "Name": "Komodo","explorer":["https://www.kmd.host/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10001},{"electrum1.cipig.net":10001}]},{"coin": "BTC", "Name": "Bitcoin","explorer":["https://www.blocktrail.com/BTC/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10000},{"electrum1.cipig.net":10000}]}]

	var coin_details = '';
	$.each(coins_detail_list, function(index, value){
		//console.log(index);
		//console.log(value);
		if (coin_code == value.coin) {
			coin_details = value;
		}
	});

	return coin_details;
}

function CoinDB_coin_select_options() {
	var coinsdbdir = JSON.parse(localStorage.getItem('mm_barterdex_app_info')).CoinsDBDir;
	//console.log(coinsdbdir);

	var coins_detail_list = [{"coin": "KMD", "Name": "Komodo","explorer":["https://www.kmd.host/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10001},{"electrum1.cipig.net":10001}]},{"coin": "BTC", "Name": "Bitcoin","explorer":["https://www.blocktrail.com/BTC/tx/"],"eth":false,"electrum":[{"electrum2.cipig.net":10000},{"electrum1.cipig.net":10000}]}]
	
	var options_data = '';
	$.each(coins_detail_list, function(index, value){
		//console.log(index);
		//console.log(value);
		//console.log(value.coin.toLowerCase());
		options_data += `
<option data-content="<img src='${coinsdbdir}/icons/${value.coin.toLowerCase()}.png' width='30px;'/> ${value.Name} (${value.coin})" data-tokens="${value.coin.toLowerCase()} ${value.Name} ">${value.coin}</option>`;
	})
	//console.log(options_data);

	return options_data
}