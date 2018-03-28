
function return_coin_details(coin) {
	var coin_details = {};

	switch (coin) {
		case 'KMD':
			coin_details.name = 'Komodo';
			coin_details.explorer = 'https://www.kmd.host/tx/';
			break;
		case 'CHIPS':
			coin_details.name = 'Chips';
			coin_details.explorer = 'https://explorer.chips.cash/tx/';
			break;
		case 'ABY':
			coin_details.name = 'ArtByte';
			coin_details.explorer = 'http://explorer.artbyte.me/tx/';
			break;
                case 'BAY':
                        coin_details.name = 'BitBay';
                        coin_details.explorer = 'https://chainz.cryptoid.info/bay/tx.dws?';
                        break;
		case 'XMG':
			coin_details.name = 'Magi';
			coin_details.explorer = 'https://chainz.cryptoid.info/xmg//tx.dws?';
			break;
		case 'FTC':
			coin_details.name = 'Feathercoin';
			coin_details.explorer = 'https://fsight.chain.tips/tx/';
			break;
		case 'VRT':
			coin_details.name = 'Virtus';
			coin_details.explorer = 'http://213.183.45.119:3001/tx/';
			break;
		case 'BTC':
			coin_details.name = 'Bitcoin';
			coin_details.explorer = 'https://www.blocktrail.com/BTC/tx/';
			break;
		case 'BCH':
			coin_details.name = 'Bitcoin Cash';
			coin_details.explorer = 'https://blockchair.com/bitcoin-cash/transaction/';
			break;
		case 'BLK':
			coin_details.name = 'BlackCoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/blk//tx.dws?';
			break;
		case 'BITS':
			coin_details.name = 'BitStar';
			coin_details.explorer = 'http://explorer.v2.bitstarcoin.com/tx/';
			break;
		case 'ROI':
			coin_details.name = 'ROICoin';
			coin_details.explorer = 'https://roi-coin-blockexplorer.roi-coin.com/tx/';
			break;
		case 'XCOIN':
			coin_details.name = 'xCoin';
			coin_details.explorer = 'http://xcoin.ddns.net/tx/';
			break;
		case 'ELP':
			coin_details.name = 'Ellerium';
			coin_details.explorer = 'https://elp.overemo.com/transaction/';
			break;
		case 'ELI':
			coin_details.name = 'Elicoin';
			coin_details.explorer = 'http://explorer.elicoin.net/?page=tx&id=';
			break;
		case 'BLOCK':
			coin_details.name = 'Blocknet';
			coin_details.explorer = 'https://chainz.cryptoid.info/block/tx.dws?';
			break;
                case 'BTCP':
                        coin_details.name = 'BitcoinPrivate';
                        coin_details.explorer = 'https://explorer.btcprivate.org/tx/';
                        break;
		case 'BTCZ':
			coin_details.name = 'BitcoinZ';
			coin_details.explorer = 'https://explorer.bitcoinz.site/tx/';
			break;
		case 'BTG':
			coin_details.name = 'Bitcoin Gold';
			coin_details.explorer = 'https://btgexp.com/tx/';
			break;
		case 'BCO':
			coin_details.name = 'BridgeCoin';
			coin_details.explorer = 'https://explorer.bridgecoin.org/tx/';
			break;
		case 'MNZ':
			coin_details.name = 'Monaize';
			coin_details.explorer = 'https://www.mnzexplorer.com/tx/';
			break;
		case '888':
			coin_details.name = 'OctoCoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/octo/tx.dws?';
			break;
		case 'ARG':
			coin_details.name = 'Argentum';
			coin_details.explorer = 'https://chainz.cryptoid.info/arg/tx.dws?';
			break;
		case 'REVS':
			coin_details.name = 'REVS';
			coin_details.explorer = 'http://revs.explorer.supernet.org/tx/';
			break;
		case 'JUMBLR':
			coin_details.name = 'JUMBLR';
			coin_details.explorer = 'http://jumblr.explorer.supernet.org/tx/';
			break;
		case 'DOGE':
			coin_details.name = 'Dogecoin';
			coin_details.explorer = 'http://dogechain.info/tx/';
			break;
		case 'DNR':
			coin_details.name = 'Denarius';
			coin_details.explorer = 'http://denariusexplorer.org/tx/';
			break;
		case 'DGB':
			coin_details.name = 'Digibyte';
			coin_details.explorer = 'https://digiexplorer.info/tx/';
			break;
		case 'EFL':
			coin_details.name = 'e-Gulden';
			coin_details.explorer = 'https://chainz.cryptoid.info/efl/tx.dws?';
			break;
		case 'GLT':
			coin_details.name = 'GlobalToken';
			coin_details.explorer = 'https://explorer.globaltoken.org/tx/';
			break;
		case 'GRS':
			coin_details.name = 'Groestlcoin';
			coin_details.explorer = 'http://groestlsight.groestlcoin.org/tx/';
			break;
                case 'HTML':
                        coin_details.name = 'HTMLCOIN';
                        coin_details.explorer = 'https://html.mastercalls.io/tx/';
                        break;
		case 'IOP':
			coin_details.name = 'Internet of People';
			coin_details.explorer = 'http://mainnet.iop.cash/tx/';
			break;
		case 'INN':
			coin_details.name = 'Innova';
			coin_details.explorer = 'http://explorer.innovacoin.info/tx/';
			break;
                case 'KNG':
                        coin_details.name = 'BetKings';
                        coin_details.explorer = 'https://explorer.kings.ag/tx/';
                        break;
                case 'KREDS':
                        coin_details.name = 'Kreds';
                        coin_details.explorer = 'https://www.kredsexplorer.com/tx/';
                        break;
                case 'LTZ':
                        coin_details.name = 'LitecoinZ';
                        coin_details.explorer = 'https://explorer.litecoinz.info/tx/';
                        break;
                case 'MNX':
                        coin_details.name = 'MinexCoin';
                        coin_details.explorer = 'https://minexexplorer.com/?r=explorer/tx&hash=';
                        break;
		case 'MZC':
			coin_details.name = 'Mazacoin';
			coin_details.explorer = 'http://mazacoin.thecoin.pw/tx/';
			break;
                case 'SCRIV':
                        coin_details.name = 'Scriv';
                        coin_details.explorer = 'http://explorer.scriv.network/tx/';
                        break;
		case 'SYS':
			coin_details.name = 'Syscoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/sys/tx.dws?';
			break;
		case 'UIS':
			coin_details.name = 'Unitus';
			coin_details.explorer = 'https://explorer.unitus.online/tx/';
			break;
		case 'UNO':
			coin_details.name = 'Unobtanium';
			coin_details.explorer = 'https://chainz.cryptoid.info/uno/tx.dws?';
			break;
		case 'ZER':
			coin_details.name = 'Zero';
			coin_details.explorer = 'http://zeroexplorer.forgetop.com/tx/';
			break;
		case 'ZET':
			coin_details.name = 'Zetacoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/zet/tx.dws?';
			break;
		case 'ZEC':
			coin_details.name = 'Zcash';
			coin_details.explorer = 'https://explorer.zcha.in/transactions/';
			break;
		case 'BTM':
			coin_details.name = 'Bitmark';
			coin_details.explorer = 'http://explorer.bitmark.io/tx/';
			break;
		case 'CARB':
			coin_details.name = 'Carboncoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/carbon/tx.dws?';
			break;
		case 'ANC':
			coin_details.name = 'Anoncoin';
			coin_details.explorer = 'http://abe.darkgamex.ch:2751/tx/';
			break;
		case 'FRK':
			coin_details.name = 'Franko';
			coin_details.explorer = 'https://cryptobe.com/tx/';
			break;
		case 'GAME':
			coin_details.name = 'Gamecredits';
			coin_details.explorer = 'https://blockexplorer.gamecredits.com/transactions/';
			break;
		case 'LTC':
			coin_details.name = 'Litecoin';
			coin_details.explorer = 'https://bchain.info/LTC/tx/';
			break;
		case 'SUPERNET':
			coin_details.name = 'SUPERNET';
			coin_details.explorer = 'http://supernet.explorer.supernet.org/tx/';
			break;
		case 'WLC':
			coin_details.name = 'Wireless';
			coin_details.explorer = 'http://wireless.explorer.supernet.org/tx/';
			break;
		case 'PANGEA':
			coin_details.name = 'Pangea';
			coin_details.explorer = 'http://pangea.explorer.supernet.org/tx/';
			break;
		case 'DEX':
			coin_details.name = 'InstantDEX';
			coin_details.explorer = 'http://dex.explorer.supernet.org/tx/';
			break;
		case 'BET':
			coin_details.name = 'BET';
			coin_details.explorer = 'http://bet.explorer.supernet.org/tx/';
			break;
		case 'CRYPTO':
			coin_details.name = 'Crypto777';
			coin_details.explorer = 'http://crypto.explorer.supernet.org/tx/';
			break;
		case 'COQUI':
			coin_details.name = 'COQUI';
			coin_details.explorer = 'https://explorer.coqui.cash/tx/';
			break;
		case 'HODL':
			coin_details.name = 'HODL';
			coin_details.explorer = 'http://HODL.explorer.supernet.org/tx/';
			break;
		case 'HODLC':
			coin_details.name = 'HOdlcoin';
			coin_details.explorer = 'http://hodl.amit177.cf:1781/tx/';
			break;
		case 'MSHARK':
			coin_details.name = 'MSHARK';
			coin_details.explorer = 'http://mshark.explorer.supernet.org/tx/';
			break;
		case 'BOTS':
			coin_details.name = 'BOTS';
			coin_details.explorer = 'http://bots.explorer.supernet.org/tx/';
			break;
		case 'MGW':
			coin_details.name = 'MultiGateway';
			coin_details.explorer = 'http://mgw.explorer.supernet.org/tx/';
			break;
		case 'MVP':
			coin_details.name = 'MVP';
			coin_details.explorer = 'http://mvp.explorer.supernet.org/tx/';
			break;
		case 'KV':
			coin_details.name = 'KeyValue';
			coin_details.explorer = 'http://kv.explorer.supernet.org/tx/';
			break;
		case 'CEAL':
			coin_details.name = 'Ceal';
			coin_details.explorer = 'http://ceal.explorer.supernet.org/tx/';
			break;
		case 'DASH':
			coin_details.name = 'Dash';
			coin_details.explorer = 'https://chainz.cryptoid.info/dash/tx.dws?';
			break;
		case 'MESH':
			coin_details.name = 'SuperMesh';
			coin_details.explorer = 'http://mesh.explorer.supernet.org/tx/';
			break;
		case 'AXO':
			coin_details.name = 'AXO';
			coin_details.explorer = 'http://axo.explorer.supernet.org/tx/';
			break;
		case 'ETOMIC':
			coin_details.name = 'ETOMIC';
			coin_details.explorer = 'http://etomic.explorer.supernet.org/tx/';
			break;
		case 'BTCH':
			coin_details.name = 'BTCH';
			coin_details.explorer = 'http://btch.explorer.supernet.org/tx/';
			break;
                case 'CRC':
                        coin_details.name = 'CrowdCoin';
                        coin_details.explorer = 'http://explorer.cryptopros.us/tx/';
                        break;
		case 'CRW':
			coin_details.name = 'Crown';
			coin_details.explorer = 'https://chainz.cryptoid.info/crw/tx.dws?';
			break;
		case 'HUC':
			coin_details.name = 'Huntercoin';
			coin_details.explorer = 'https://www.huntercoin.info/blockExplorer/tx/';
			break;
		case 'OOT':
			coin_details.name = 'Utrum';
			coin_details.explorer = 'http://explorer.utrum.io/tx/';
			break;
		case 'PIVX':
			coin_details.name = 'PIVX';
			coin_details.explorer = 'https://chainz.cryptoid.info/pivx/tx.dws?';
			break;
                case 'RVN':
                        coin_details.name = 'Ravencoin';
                        coin_details.explorer = 'http://threeeyed.info/tx/';
                        break;
		case 'BDL':
			coin_details.name = 'Bitdeal';
			coin_details.explorer = 'https://explorer.bitdeal.co.in/tx/';
			break;
		case 'ARC':
			coin_details.name = 'Arcticcoin';
			coin_details.explorer = 'http://explorer.arcticcoin.org/tx/';
			break;
		case 'ZCL':
			coin_details.name = 'ZClassic';
			coin_details.explorer = 'http://explorer.zclmine.pro/tx/';
			break;
		case 'VIA':
			coin_details.name = 'Viacoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/via/tx.dws?';
			break;
		case 'ERC':
			coin_details.name = 'Europecoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/erc/tx.dws?';
			break;
		case 'FAIR':
			coin_details.name = 'Faircoin';
			coin_details.explorer = 'https://chain.fair.to/transaction?transaction=';
			break;
		case 'FLO':
			coin_details.name = 'Florincoin';
			coin_details.explorer = 'https://florincoin.info/tx/';
			break;
		case 'GBX':
			coin_details.name = 'GoByte';
			coin_details.explorer = 'http://explorer.gobyte.network:5001/tx/';
			break;
		case 'SXC':
			coin_details.name = 'Sexcoin';
			coin_details.explorer = 'http://blockexplorer.lavajumper.com/tx/';
			break;
		case 'CREA':
			coin_details.name = 'Creativecoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/crea/tx.dws?';
			break;
		case 'TRC':
			coin_details.name = 'Terracoin';
			coin_details.explorer = 'https://explorer.terracoin.io/tx/';
			break;
                case 'UFO':
                        coin_details.name = 'Uniform Fiscal Object';
                        coin_details.explorer = 'https://chainz.cryptoid.info/ufo/tx.dws?';
                        break;
                case 'VIVO':
                        coin_details.name = 'VIVO';
                        coin_details.explorer = 'https://chainz.cryptoid.info/vivo/tx.dws?';
                        break;
		case 'BTA':
			coin_details.name = 'Bata';
			coin_details.explorer = 'https://chainz.cryptoid.info/bta/tx.dws?';
			break;
                case 'SMART':
                        coin_details.name = 'SmartCash';
                        coin_details.explorer = 'https://explorer3.smartcash.cc/tx/';
                        break;
		case 'SMC':
			coin_details.name = 'Smartcoin';
			coin_details.explorer = 'http://smartchain.cc/tx/';
			break;
		case 'NMC':
			coin_details.name = 'Namecoin';
			coin_details.explorer = 'https://namecoin.webbtc.com/tx/';
			break;
		case 'NAV':
			coin_details.name = 'Navcoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/nav/tx.dws?';
			break;
		case 'MOON':
			coin_details.name = 'Mooncoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/moon/tx.dws?';
			break;
		case 'EMC2':
			coin_details.name = 'Einsteinium';
			coin_details.explorer = 'https://chainz.cryptoid.info/emc2/tx.dws?';
			break;
		case 'I0C':
			coin_details.name = 'I0Coin';
			coin_details.explorer = 'https://chainz.cryptoid.info/i0c/tx.dws?';
			break;
		case 'STRAT':
			coin_details.name = 'Stratis';
			coin_details.explorer = 'https://cryptobe.com/tx/';
			break;
		case 'MUE':
			coin_details.name = 'MonetaryUnit';
			coin_details.explorer = 'https://chainz.cryptoid.info/mue/tx.dws?';
			break;
		case 'MONA':
			coin_details.name = 'MonaCoin';
			coin_details.explorer = 'https://mona.chainsight.info/tx/';
			break;
		case 'XMCC':
			coin_details.name = 'Monoeci';
			coin_details.explorer = 'http://block.monacocoin.net:8080/tx/';
			break;
		case 'XMY':
			coin_details.name = 'Myriad';
			coin_details.explorer = 'https://cryptap.us/myr/explorer/tx/';
			break;
		case 'MAC':
			coin_details.name = 'Machinecoin';
			coin_details.explorer = 'https://explorer.machinecoin.org/tx/';
			break;
		case 'BTX':
			coin_details.name = 'Bitcore';
			coin_details.explorer = 'https://chainz.cryptoid.info/btx/tx.dws?';
			break;
		case 'XRE':
			coin_details.name = 'RevolverCoin';
			coin_details.explorer = 'http://revolvercoin.org:3001/tx/';
			break;
		case 'LBC':
			coin_details.name = 'LBRY Credits';
			coin_details.explorer = 'https://explorer.lbry.io/tx/';
			break;
		case 'SIB':
			coin_details.name = 'SIBCoin';
			coin_details.explorer = 'https://chain.sibcoin.net/en/tx/';
			break;
                case 'SNG':
                        coin_details.name = 'SnowGem';
                        coin_details.explorer = 'https://explorer.snowgem.org/tx/';
                        break;
		case 'VOT':
			coin_details.name = 'VoteCoin';
			coin_details.explorer = 'http://explorer.votecoin.site/tx/';
			break;
		case 'VTC':
			coin_details.name = 'Vertcoin';
			coin_details.explorer = 'https://bitinfocharts.com/vertcoin/tx/';
			break;
		case 'HUSH':
			coin_details.name = 'Hush';
			coin_details.explorer = 'https://explorer.myhush.org/tx/';
			break;
		case 'XZC':
			coin_details.name = 'ZCoin';
			coin_details.explorer = 'http://explorer.zcoin.io/tx/';
			break;
                case 'ZEL':
                        coin_details.name = 'Zelcash';
                        coin_details.explorer = 'http://explorer.zel.cash/tx/';
                        break;
                case 'ZOI':
                        coin_details.name = 'Zoin';
                        coin_details.explorer = 'https://chainz.cryptoid.info/zoi/tx.dws?';
                        break;
		case 'QTUM':
			coin_details.name = 'Qtum';
			coin_details.explorer = 'https://explorer.qtum.org/tx/';
			break;
		case 'DSR':
			coin_details.name = 'Desire';
			coin_details.explorer = 'http://desire.thecryptochat.net/block.php?hash=';
			break;
		case 'PURA':
			coin_details.name = 'Pura';
			coin_details.explorer = 'https://chainz.cryptoid.info/pura/tx.dws?';
			break;
		case 'AUD':
			coin_details.name = 'Australian Dollar';
			coin_details.explorer = 'http://aud.explorer.supernet.org/tx/';
			break;
		case 'BGN':
			coin_details.name = 'Bulgarian Lev';
			coin_details.explorer = 'http://BGN.explorer.supernet.org/tx/';
			break;
		case 'CAD':
			coin_details.name = 'Canadian Dollar';
			coin_details.explorer = 'http://CAD.explorer.supernet.org/tx/';
			break;
		case 'CHF':
			coin_details.name = 'Swiss Franc';
			coin_details.explorer = 'http://CHF.explorer.supernet.org/tx/';
			break;
		case 'CNY':
			coin_details.name = 'Chinese Yuan';
			coin_details.explorer = 'http://CNY.explorer.supernet.org/tx/';
			break;
		case 'CZK':
			coin_details.name = 'Czech Koruna';
			coin_details.explorer = 'http://CZK.explorer.supernet.org/tx/';
			break;
		case 'DKK':
			coin_details.name = 'Danish Krone';
			coin_details.explorer = 'http://DKK.explorer.supernet.org/tx/';
			break;
		case 'EUR':
			coin_details.name = 'Euro';
			coin_details.explorer = 'http://EUR.explorer.supernet.org/tx/';
			break;
		case 'GBP':
			coin_details.name = 'Pound Sterling';
			coin_details.explorer = 'http://GBP.explorer.supernet.org/tx/';
			break;
		case 'HKD':
			coin_details.name = 'Hong Kong Dollar';
			coin_details.explorer = 'http://HKD.explorer.supernet.org/tx/';
			break;
		case 'HRK':
			coin_details.name = 'Croatian Kuna';
			coin_details.explorer = 'http://HRK.explorer.supernet.org/tx/';
			break;
		case 'HUF':
			coin_details.name = 'Hungarian Forint';
			coin_details.explorer = 'http://HUF.explorer.supernet.org/tx/';
			break;
		case 'IDR':
			coin_details.name = 'Indonesian Rupiah';
			coin_details.explorer = 'http://IDR.explorer.supernet.org/tx/';
			break;
		case 'ILS':
			coin_details.name = 'Israeli Shekel';
			coin_details.explorer = 'http://ILS.explorer.supernet.org/tx/';
			break;
		case 'INR':
			coin_details.name = 'Indian Rupee';
			coin_details.explorer = 'http://INR.explorer.supernet.org/tx/';
			break;
		case 'JPY':
			coin_details.name = 'Japanese Yen';
			coin_details.explorer = 'http://JPY.explorer.supernet.org/tx/';
			break;
		case 'KRW':
			coin_details.name = 'South Korean Won';
			coin_details.explorer = 'http://KRW.explorer.supernet.org/tx/';
			break;
		case 'MXN':
			coin_details.name = 'Mexican Peso';
			coin_details.explorer = 'http://MXN.explorer.supernet.org/tx/';
			break;
		case 'MYR':
			coin_details.name = 'Malaysian Ringgit';
			coin_details.explorer = 'http://MYR.explorer.supernet.org/tx/';
			break;
		case 'NOK':
			coin_details.name = 'Norwegian Krone';
			coin_details.explorer = 'http://NOK.explorer.supernet.org/tx/';
			break;
		case 'NZD':
			coin_details.name = 'New Zealand Dollar';
			coin_details.explorer = 'http://NZD.explorer.supernet.org/tx/';
			break;
		case 'PHP':
			coin_details.name = 'Philippine Peso';
			coin_details.explorer = 'http://PHP.explorer.supernet.org/tx/';
			break;
		case 'PLN':
			coin_details.name = 'Polish Zloty';
			coin_details.explorer = 'http://PLN.explorer.supernet.org/tx/';
			break;
		case 'BRL':
			coin_details.name = 'Brazilian Real';
			coin_details.explorer = 'http://BRL.explorer.supernet.org/tx/';
			break;
		case 'RON':
			coin_details.name = 'Romanian Leu';
			coin_details.explorer = 'http://RON.explorer.supernet.org/tx/';
			break;
		case 'RUB':
			coin_details.name = 'Russian Ruble';
			coin_details.explorer = 'http://RUB.explorer.supernet.org/tx/';
			break;
		case 'SEK':
			coin_details.name = 'Swedish Krona';
			coin_details.explorer = 'http://SEK.explorer.supernet.org/tx/';
			break;
		case 'SGD':
			coin_details.name = 'Singapore Dollar';
			coin_details.explorer = 'http://SGD.explorer.supernet.org/tx/';
			break;
		case 'THB':
			coin_details.name = 'Thai Baht';
			coin_details.explorer = 'http://THB.explorer.supernet.org/tx/';
			break;
		case 'TRY':
			coin_details.name = 'Turkish Lira';
			coin_details.explorer = 'http://TRY.explorer.supernet.org/tx/';
			break;
		case 'USD':
			coin_details.name = 'US Dollar';
			coin_details.explorer = 'http://USD.explorer.supernet.org/tx/';
			break;
		case 'ZAR':
			coin_details.name = 'South African Rand';
			coin_details.explorer = 'http://ZAR.explorer.supernet.org/tx/';
			break;
		case 'STAK':
			coin_details.name = 'Straks';
			coin_details.explorer = 'https://straks.info/transaction/';
			break;
		case 'BEER':
			coin_details.name = 'BEER TESTCOIN';
			coin_details.explorer = 'http://beer.explorer.supernet.org/tx/';
			break;
		case 'PIZZA':
			coin_details.name = 'PIZZA TESTCOIN';
			coin_details.explorer = 'http://pizza.explorer.supernet.org/tx/';
			break;
	}
	return coin_details;
}
