
function return_coin_details(coin) {
	var coin_details = {};

	switch (coin) {
		case 'KMD':
			coin_details.name = 'Komodo';
			coin_details.explorer = 'https://www.kmd.host/tx/';
			coin_details.eth = false;
			break;
		case 'CHIPS':
			coin_details.name = 'Chips';
			coin_details.explorer = 'https://explorer.chips.cash/tx/';
			coin_details.eth = false;
			break;
		case 'ABY':
			coin_details.name = 'ArtByte';
			coin_details.explorer = 'http://explorer.artbyte.me/tx/';
			coin_details.eth = false;
			break;
		case 'BAY':
			coin_details.name = 'BitBay';
			coin_details.explorer = 'https://chainz.cryptoid.info/bay/tx.dws?';
			coin_details.eth = false;
			break;
		case 'BTC':
			coin_details.name = 'Bitcoin';
			coin_details.explorer = 'https://www.blocktrail.com/BTC/tx/';
			coin_details.eth = false;
			break;
		case 'BCH':
			coin_details.name = 'Bitcoin Cash';
			coin_details.explorer = 'https://blockchair.com/bitcoin-cash/transaction/';
			coin_details.eth = false;
			break;
		case 'PEW':
			coin_details.name = 'BroFist';
			coin_details.explorer = 'https://pew.overemo.com/tx/';
			coin_details.eth = false;
			break;
		case 'BCBC':
			coin_details.name = 'Bitcoin@CBC';
			coin_details.explorer = 'http://be.cleanblockchain.org/tx/';
			coin_details.eth = false;
			break;
		case 'BLK':
			coin_details.name = 'BlackCoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/blk//tx.dws?';
			coin_details.eth = false;
			break;
		case 'GRLC':
			coin_details.name = 'Garlicoin';
			coin_details.explorer = 'https://garli.co.in/tx/';
			coin_details.eth = false;
			break;
		case 'DIN':
			coin_details.name = 'Dinero';
			coin_details.explorer = 'https://explorer.dinerocoin.org/tx/';
			coin_details.eth = false;
			break;
		case 'BUCK':
			coin_details.name = 'Buck';
			coin_details.explorer = 'https://explorer.buck.red/tx/';
			coin_details.eth = false;
			break;
		case 'RAP':
			coin_details.name = 'Rapture';
			coin_details.explorer = 'http://explorer.our-rapture.com/tx/';
			coin_details.eth = false;
			break;
		case 'RADIUS':
			coin_details.name = 'Radius';
			coin_details.explorer = 'http://explorer.radiuscrypto.online/tx/';
			coin_details.eth = false;
			break;
		case 'DYN':
			coin_details.name = 'Dynamic';
			coin_details.explorer = 'http://dyn.blocksandchain.com/tx/';
			coin_details.eth = false;
			break;
		case 'SEQ':
			coin_details.name = 'Sequence';
			coin_details.explorer = 'http://seq.blocksandchain.com/tx/';
			coin_details.eth = false;
			break;
		case 'ROI':
			coin_details.name = 'ROICoin';
			coin_details.explorer = 'https://roi-coin-blockexplorer.roi-coin.com/tx/';
			coin_details.eth = false;
			break;
		case 'XCOIN':
			coin_details.name = 'xCoin';
			coin_details.explorer = 'http://xcoin.ddns.net/tx/';
			coin_details.eth = false;
			break;
		case 'ELP':
			coin_details.name = 'Ellerium';
			coin_details.explorer = 'https://elp.overemo.com/transaction/';
			coin_details.eth = false;
			break;
		case 'ELI':
			coin_details.name = 'Elicoin';
			coin_details.explorer = 'http://explorer.elicoin.net/?page=tx&id=';
			coin_details.eth = false;
			break;
		case 'BITS':
			coin_details.name = 'BitStar';
			coin_details.explorer = 'http://explorer.v2.bitstarcoin.com/tx/';
			coin_details.eth = false;
			break;
		case 'FTC':
			coin_details.name = 'Feathercoin';
			coin_details.explorer = 'https://fsight.chain.tips/tx/';
			coin_details.eth = false;
			break;
		case 'FJC':
			coin_details.name = 'Fujicoin';
			coin_details.explorer = 'http://explorer.fujicoin.org/tx/';
			coin_details.eth = false;
			break;
		case 'BLOCK':
			coin_details.name = 'Blocknet';
			coin_details.explorer = 'https://chainz.cryptoid.info/block/tx.dws?';
			coin_details.eth = false;
			break;
		case 'BTCP':
			coin_details.name = 'BitcoinPrivate';
			coin_details.explorer = 'https://explorer.btcprivate.org/tx/';
			coin_details.eth = false;
			break;
		case 'BTCZ':
			coin_details.name = 'BitcoinZ';
			coin_details.explorer = 'https://explorer.bitcoinz.site/tx/';
			coin_details.eth = false;
			break;
		case 'BTG':
			coin_details.name = 'Bitcoin Gold';
			coin_details.explorer = 'https://btgexp.com/tx/';
			coin_details.eth = false;
			break;
		case 'BCO':
			coin_details.name = 'BridgeCoin';
			coin_details.explorer = 'https://explorer.bridgecoin.org/tx/';
			coin_details.eth = false;
			break;
		case 'MNZ':
			coin_details.name = 'Monaize';
			coin_details.explorer = 'https://www.mnzexplorer.com/tx/';
			coin_details.eth = false;
			break;
		case '888':
			coin_details.name = 'OctoCoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/octo/tx.dws?';
			coin_details.eth = false;
			break;
		case 'ARG':
			coin_details.name = 'Argentum';
			coin_details.explorer = 'https://chainz.cryptoid.info/arg/tx.dws?';
			coin_details.eth = false;
			break;
		case 'REVS':
			coin_details.name = 'REVS';
			coin_details.explorer = 'http://revs.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'JUMBLR':
			coin_details.name = 'JUMBLR';
			coin_details.explorer = 'http://jumblr.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'DOGE':
			coin_details.name = 'Dogecoin';
			coin_details.explorer = 'http://dogechain.info/tx/';
			coin_details.eth = false;
			break;
		case 'DNR':
			coin_details.name = 'Denarius';
			coin_details.explorer = 'https://denariusexplorer.org/tx/';
			coin_details.eth = false;
			break;
		case 'DGB':
			coin_details.name = 'Digibyte';
			coin_details.explorer = 'https://digiexplorer.info/tx/';
			coin_details.eth = false;
			break;
		case 'EFL':
			coin_details.name = 'e-Gulden';
			coin_details.explorer = 'https://chainz.cryptoid.info/efl/tx.dws?';
			coin_details.eth = false;
			break;
		case 'GLT':
			coin_details.name = 'GlobalToken';
			coin_details.explorer = 'https://explorer.globaltoken.org/tx/';
			coin_details.eth = false;
			break;
		case 'GRS':
			coin_details.name = 'Groestlcoin';
			coin_details.explorer = 'http://groestlsight.groestlcoin.org/tx/';
			coin_details.eth = false;
			break;
		case 'HTML':
			coin_details.name = 'HTMLCOIN';
			coin_details.explorer = 'https://html.mastercalls.io/tx/';
			coin_details.eth = false;
			break;
		case 'IOP':
			coin_details.name = 'Internet of People';
			coin_details.explorer = 'http://mainnet.iop.cash/tx/';
			coin_details.eth = false;
			break;
		case 'INN':
			coin_details.name = 'Innova';
			coin_details.explorer = 'http://explorer.innovacoin.info/tx/';
			coin_details.eth = false;
			break;
		case 'KNG':
			coin_details.name = 'BetKings';
			coin_details.explorer = 'https://explorer.kings.ag/tx/';
			coin_details.eth = false;
			break;
		case 'KREDS':
			coin_details.name = 'Kreds';
			coin_details.explorer = 'https://www.kredsexplorer.com/tx/';
			coin_details.eth = false;
			break;
		case 'LTZ':
			coin_details.name = 'LitecoinZ';
			coin_details.explorer = 'https://explorer.litecoinz.info/tx/';
			coin_details.eth = false;
			break;
		case 'MNX':
			coin_details.name = 'MinexCoin';
			coin_details.explorer = 'https://minexexplorer.com/?r=explorer/tx&hash=';
			coin_details.eth = false;
			break;
		case 'MZC':
			coin_details.name = 'Mazacoin';
			coin_details.explorer = 'http://mazacoin.thecoin.pw/tx/';
			coin_details.eth = false;
			break;
		case 'SCRIV':
			coin_details.name = 'Scriv';
			coin_details.explorer = 'http://explorer.scriv.network/tx/';
			coin_details.eth = false;
			break;
		case 'SYS':
			coin_details.name = 'Syscoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/sys/tx.dws?';
			coin_details.eth = false;
			break;
		case 'UIS':
			coin_details.name = 'Unitus';
			coin_details.explorer = 'https://explorer.unitus.online/tx/';
			coin_details.eth = false;
			break;
		case 'UNO':
			coin_details.name = 'Unobtanium';
			coin_details.explorer = 'https://chainz.cryptoid.info/uno/tx.dws?';
			coin_details.eth = false;
			break;
		case 'VRT':
			coin_details.name = 'Virtus';
			coin_details.explorer = 'http://213.183.45.119:3001/tx/';
			coin_details.eth = false;
			break;
		case 'XCG':
			coin_details.name = 'Xchange';
			coin_details.explorer = '';
			coin_details.eth = false;
			break;
		case 'ZER':
			coin_details.name = 'Zero';
			coin_details.explorer = 'http://zeroexplorer.forgetop.com/tx/';
			coin_details.eth = false;
			break;
		case 'ZET':
			coin_details.name = 'Zetacoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/zet/tx.dws?';
			coin_details.eth = false;
			break;
		case 'ZEC':
			coin_details.name = 'Zcash';
			coin_details.explorer = 'https://explorer.zcha.in/transactions/';
			coin_details.eth = false;
			break;
		case 'BTM':
			coin_details.name = 'Bitmark';
			coin_details.explorer = 'http://explorer.bitmark.io/tx/';
			coin_details.eth = false;
			break;
		case 'CARB':
			coin_details.name = 'Carboncoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/carbon/tx.dws?';
			coin_details.eth = false;
			break;
		case 'ANC':
			coin_details.name = 'Anoncoin';
			coin_details.explorer = 'http://abe.darkgamex.ch:2751/tx/';
			coin_details.eth = false;
			break;
		case 'FRK':
			coin_details.name = 'Franko';
			coin_details.explorer = 'https://cryptobe.com/tx/';
			coin_details.eth = false;
			break;
		case 'GAME':
			coin_details.name = 'Gamecredits';
			coin_details.explorer = 'https://blockexplorer.gamecredits.com/transactions/';
			coin_details.eth = false;
			break;
		case 'LTC':
			coin_details.name = 'Litecoin';
			coin_details.explorer = 'https://bchain.info/LTC/tx/';
			coin_details.eth = false;
			break;
		case 'SUPERNET':
			coin_details.name = 'SUPERNET';
			coin_details.explorer = 'http://supernet.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'WLC':
			coin_details.name = 'Wireless';
			coin_details.explorer = 'http://wireless.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'PANGEA':
			coin_details.name = 'Pangea';
			coin_details.explorer = 'http://pangea.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'DEX':
			coin_details.name = 'InstantDEX';
			coin_details.explorer = 'http://dex.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'BET':
			coin_details.name = 'BET';
			coin_details.explorer = 'http://bet.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'CRYPTO':
			coin_details.name = 'Crypto777';
			coin_details.explorer = 'http://crypto.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'COQUI':
			coin_details.name = 'COQUI';
			coin_details.explorer = 'https://explorer.coqui.cash/tx/';
			coin_details.eth = false;
			break;
		case 'EQL':
			coin_details.name = 'Equaliser';
			coin_details.explorer = 'http://178.62.240.191/tx/';
			coin_details.eth = false;
			break;
		case 'HODL':
			coin_details.name = 'HODL';
			coin_details.explorer = 'http://HODL.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'HODLC':
			coin_details.name = 'HOdlcoin';
			coin_details.explorer = 'http://hodl.amit177.cf:1781/tx/';
			coin_details.eth = false;
			break;
		case 'MSHARK':
			coin_details.name = 'MSHARK';
			coin_details.explorer = 'http://mshark.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'BOTS':
			coin_details.name = 'BOTS';
			coin_details.explorer = 'http://bots.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'MGW':
			coin_details.name = 'MultiGateway';
			coin_details.explorer = 'http://mgw.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'MVP':
			coin_details.name = 'MVP';
			coin_details.explorer = 'http://mvp.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'KV':
			coin_details.name = 'KeyValue';
			coin_details.explorer = 'http://kv.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'CEAL':
			coin_details.name = 'Ceal';
			coin_details.explorer = 'http://ceal.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'DASH':
			coin_details.name = 'Dash';
			coin_details.explorer = 'https://chainz.cryptoid.info/dash/tx.dws?';
			coin_details.eth = false;
			break;
		case 'MESH':
			coin_details.name = 'SuperMesh';
			coin_details.explorer = 'http://mesh.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'AXO':
			coin_details.name = 'AXO';
			coin_details.explorer = 'http://axo.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'ETOMIC':
			coin_details.name = 'ETOMIC';
			coin_details.explorer = 'http://etomic.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'BTCH':
			coin_details.name = 'Bitcoin Hush';
			coin_details.explorer = 'https://explorer.btchush.org/tx/';
			coin_details.eth = false;
			break;
		case 'CRC':
			coin_details.name = 'CrowdCoin';
			coin_details.explorer = 'http://explorer.cryptopros.us/tx/';
			coin_details.eth = false;
			break;
		case 'CRW':
			coin_details.name = 'Crown';
			coin_details.explorer = 'https://chainz.cryptoid.info/crw/tx.dws?';
			coin_details.eth = false;
			break;
		case 'HUC':
			coin_details.name = 'Huntercoin';
			coin_details.explorer = 'https://www.huntercoin.info/blockExplorer/tx/';
			coin_details.eth = false;
			break;
		case 'OOT':
			coin_details.name = 'Utrum';
			coin_details.explorer = 'http://explorer.utrum.io/tx/';
			coin_details.eth = false;
			break;
		case 'PIVX':
			coin_details.name = 'PIVX';
			coin_details.explorer = 'https://chainz.cryptoid.info/pivx/tx.dws?';
			coin_details.eth = false;
			break;
		case 'RVN':
			coin_details.name = 'Ravencoin';
			coin_details.explorer = 'http://threeeyed.info/tx/';
			coin_details.eth = false;
			break;
		case 'BDL':
			coin_details.name = 'Bitdeal';
			coin_details.explorer = 'https://explorer.bitdeal.co.in/tx/';
			coin_details.eth = false;
			break;
		case 'ARC':
			coin_details.name = 'Arcticcoin';
			coin_details.explorer = 'http://explorer.arcticcoin.org/tx/';
			coin_details.eth = false;
			break;
		case 'ZCL':
			coin_details.name = 'ZClassic';
			coin_details.explorer = 'http://explorer.zclmine.pro/tx/';
			coin_details.eth = false;
			break;
		case 'VIA':
			coin_details.name = 'Viacoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/via/tx.dws?';
			coin_details.eth = false;
			break;
		case 'ERC':
			coin_details.name = 'Europecoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/erc/tx.dws?';
			coin_details.eth = false;
			break;
		case 'FAIR':
			coin_details.name = 'Faircoin';
			coin_details.explorer = 'https://chain.fair.to/transaction?transaction=';
			coin_details.eth = false;
			break;
		case 'FLO':
			coin_details.name = 'Florincoin';
			coin_details.explorer = 'https://florincoin.info/tx/';
			coin_details.eth = false;
			break;
		case 'GBX':
			coin_details.name = 'GoByte';
			coin_details.explorer = 'http://explorer.gobyte.network:5001/tx/';
			coin_details.eth = false;
			break;
		case 'SXC':
			coin_details.name = 'Sexcoin';
			coin_details.explorer = 'http://blockexplorer.lavajumper.com/tx/';
			coin_details.eth = false;
			break;
		case 'CREA':
			coin_details.name = 'Creativecoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/crea/tx.dws?';
			coin_details.eth = false;
			break;
		case 'TRC':
			coin_details.name = 'Terracoin';
			coin_details.explorer = 'https://explorer.terracoin.io/tx/';
			coin_details.eth = false;
			break;
		case 'UFO':
			coin_details.name = 'Uniform Fiscal Object';
			coin_details.explorer = 'https://chainz.cryptoid.info/ufo/tx.dws?';
			coin_details.eth = false;
			break;
		case 'VIVO':
			coin_details.name = 'VIVO';
			coin_details.explorer = 'https://chainz.cryptoid.info/vivo/tx.dws?';
			coin_details.eth = false;
			break;
		case 'BTA':
			coin_details.name = 'Bata';
			coin_details.explorer = 'https://chainz.cryptoid.info/bta/tx.dws?';
			coin_details.eth = false;
			break;
		case 'SMART':
			coin_details.name = 'SmartCash';
			coin_details.explorer = 'https://explorer3.smartcash.cc/tx/';
			coin_details.eth = false;
			break;
		case 'SMC':
			coin_details.name = 'Smartcoin';
			coin_details.explorer = 'http://smartchain.cc/tx/';
			coin_details.eth = false;
			break;
		case 'NMC':
			coin_details.name = 'Namecoin';
			coin_details.explorer = 'https://namecoin.webbtc.com/tx/';
			coin_details.eth = false;
			break;
		case 'NAV':
			coin_details.name = 'Navcoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/nav/tx.dws?';
			coin_details.eth = false;
			break;
		case 'MOON':
			coin_details.name = 'Mooncoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/moon/tx.dws?';
			coin_details.eth = false;
			break;
		case 'EMC2':
			coin_details.name = 'Einsteinium';
			coin_details.explorer = 'https://chainz.cryptoid.info/emc2/tx.dws?';
			coin_details.eth = false;
			break;
		case 'I0C':
			coin_details.name = 'I0Coin';
			coin_details.explorer = 'https://chainz.cryptoid.info/i0c/tx.dws?';
			coin_details.eth = false;
			break;
		case 'STRAT':
			coin_details.name = 'Stratis';
			coin_details.explorer = 'https://cryptobe.com/tx/';
			coin_details.eth = false;
			break;
		case 'MUE':
			coin_details.name = 'MonetaryUnit';
			coin_details.explorer = 'https://chainz.cryptoid.info/mue/tx.dws?';
			coin_details.eth = false;
			break;
		case 'MONA':
			coin_details.name = 'MonaCoin';
			coin_details.explorer = 'https://mona.chainsight.info/tx/';
			coin_details.eth = false;
			break;
		case 'XMCC':
			coin_details.name = 'Monoeci';
			coin_details.explorer = 'http://block.monacocoin.net:8080/tx/';
			coin_details.eth = false;
			break;
		case 'XMY':
			coin_details.name = 'Myriad';
			coin_details.explorer = 'https://cryptap.us/myr/explorer/tx/';
			coin_details.eth = false;
			break;
		case 'MAC':
			coin_details.name = 'Machinecoin';
			coin_details.explorer = 'https://explorer.machinecoin.org/tx/';
			coin_details.eth = false;
			break;
		case 'BTX':
			coin_details.name = 'Bitcore';
			coin_details.explorer = 'https://chainz.cryptoid.info/btx/tx.dws?';
			coin_details.eth = false;
			break;
		case 'XRE':
			coin_details.name = 'RevolverCoin';
			coin_details.explorer = 'http://revolvercoin.org:3001/tx/';
			coin_details.eth = false;
			break;
		case 'LBC':
			coin_details.name = 'LBRY Credits';
			coin_details.explorer = 'https://explorer.lbry.io/tx/';
			coin_details.eth = false;
			break;
		case 'SIB':
			coin_details.name = 'SIBCoin';
			coin_details.explorer = 'https://chain.sibcoin.net/en/tx/';
			coin_details.eth = false;
			break;
		case 'SNG':
			coin_details.name = 'SnowGem';
			coin_details.explorer = 'https://explorer.snowgem.org/tx/';
			coin_details.eth = false;
			break;
		case 'VOT':
			coin_details.name = 'VoteCoin';
			coin_details.explorer = 'http://explorer.votecoin.site/tx/';
			coin_details.eth = false;
			break;
		case 'VTC':
			coin_details.name = 'Vertcoin';
			coin_details.explorer = 'https://bitinfocharts.com/vertcoin/tx/';
			coin_details.eth = false;
			break;
		case 'HUSH':
			coin_details.name = 'Hush';
			coin_details.explorer = 'https://explorer.myhush.org/tx/';
			coin_details.eth = false;
			break;
		case 'XZC':
			coin_details.name = 'ZCoin';
			coin_details.explorer = 'http://explorer.zcoin.io/tx/';
			coin_details.eth = false;
			break;
		case 'ZEL':
			coin_details.name = 'Zelcash';
			coin_details.explorer = 'http://explorer.zel.cash/tx/';
			coin_details.eth = false;
			break;
		case 'ZOI':
			coin_details.name = 'Zoin';
			coin_details.explorer = 'https://chainz.cryptoid.info/zoi/tx.dws?';
			coin_details.eth = false;
			break;
		case 'QTUM':
			coin_details.name = 'Qtum';
			coin_details.explorer = 'https://explorer.qtum.org/tx/';
			coin_details.eth = false;
			break;
		case 'DSR':
			coin_details.name = 'Desire';
			coin_details.explorer = 'http://desire.thecryptochat.net/block.php?hash=';
			coin_details.eth = false;
			break;
		case 'PURA':
			coin_details.name = 'Pura';
			coin_details.explorer = 'https://chainz.cryptoid.info/pura/tx.dws?';
			coin_details.eth = false;
			break;
		case 'AUD':
			coin_details.name = 'Australian Dollar';
			coin_details.explorer = 'http://aud.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'BGN':
			coin_details.name = 'Bulgarian Lev';
			coin_details.explorer = 'http://BGN.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'CAD':
			coin_details.name = 'Canadian Dollar';
			coin_details.explorer = 'http://CAD.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'CHF':
			coin_details.name = 'Swiss Franc';
			coin_details.explorer = 'http://CHF.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'CNY':
			coin_details.name = 'Chinese Yuan';
			coin_details.explorer = 'http://CNY.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'CZK':
			coin_details.name = 'Czech Koruna';
			coin_details.explorer = 'http://CZK.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'DKK':
			coin_details.name = 'Danish Krone';
			coin_details.explorer = 'http://DKK.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'EUR':
			coin_details.name = 'Euro';
			coin_details.explorer = 'http://EUR.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'GBP':
			coin_details.name = 'Pound Sterling';
			coin_details.explorer = 'http://GBP.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'HKD':
			coin_details.name = 'Hong Kong Dollar';
			coin_details.explorer = 'http://HKD.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'HRK':
			coin_details.name = 'Croatian Kuna';
			coin_details.explorer = 'http://HRK.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'HUF':
			coin_details.name = 'Hungarian Forint';
			coin_details.explorer = 'http://HUF.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'IDR':
			coin_details.name = 'Indonesian Rupiah';
			coin_details.explorer = 'http://IDR.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'ILS':
			coin_details.name = 'Israeli Shekel';
			coin_details.explorer = 'http://ILS.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'INR':
			coin_details.name = 'Indian Rupee';
			coin_details.explorer = 'http://INR.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'JPY':
			coin_details.name = 'Japanese Yen';
			coin_details.explorer = 'http://JPY.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'KRW':
			coin_details.name = 'South Korean Won';
			coin_details.explorer = 'http://KRW.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'MXN':
			coin_details.name = 'Mexican Peso';
			coin_details.explorer = 'http://MXN.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'MYR':
			coin_details.name = 'Malaysian Ringgit';
			coin_details.explorer = 'http://MYR.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'NOK':
			coin_details.name = 'Norwegian Krone';
			coin_details.explorer = 'http://NOK.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'NZD':
			coin_details.name = 'New Zealand Dollar';
			coin_details.explorer = 'http://NZD.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'PHP':
			coin_details.name = 'Philippine Peso';
			coin_details.explorer = 'http://PHP.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'PLN':
			coin_details.name = 'Polish Zloty';
			coin_details.explorer = 'http://PLN.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'BRL':
			coin_details.name = 'Brazilian Real';
			coin_details.explorer = 'http://BRL.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'RON':
			coin_details.name = 'Romanian Leu';
			coin_details.explorer = 'http://RON.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'RUB':
			coin_details.name = 'Russian Ruble';
			coin_details.explorer = 'http://RUB.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'SEK':
			coin_details.name = 'Swedish Krona';
			coin_details.explorer = 'http://SEK.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'SGD':
			coin_details.name = 'Singapore Dollar';
			coin_details.explorer = 'http://SGD.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'THB':
			coin_details.name = 'Thai Baht';
			coin_details.explorer = 'http://THB.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'TRY':
			coin_details.name = 'Turkish Lira';
			coin_details.explorer = 'http://TRY.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'USD':
			coin_details.name = 'US Dollar';
			coin_details.explorer = 'http://USD.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'ZAR':
			coin_details.name = 'South African Rand';
			coin_details.explorer = 'http://ZAR.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'STAK':
			coin_details.name = 'Straks';
			coin_details.explorer = 'https://straks.info/transaction/';
			coin_details.eth = false;
			break;
		case 'BEER':
			coin_details.name = 'BEER TESTCOIN';
			coin_details.explorer = 'http://beer.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'PIZZA':
			coin_details.name = 'PIZZA TESTCOIN';
			coin_details.explorer = 'http://pizza.explorer.supernet.org/tx/';
			coin_details.eth = false;
			break;
		case 'AXE':
			coin_details.name = 'Axe';
			coin_details.explorer = 'http://207.246.65.114:3001/tx/';
			coin_details.eth = false;
			break;

		case 'ETH':
			coin_details.name = 'Ethereum';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'JST':
			coin_details.name = 'JST (TESTCOIN)';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'DEC8':
			coin_details.name = 'DEC8 (TESTCOIN)';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'USDT':
			coin_details.name = 'Tether';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'BBT':
			coin_details.name = 'BitBoost';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'OMG':
			coin_details.name = 'OmiseGO';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'ICX':
			coin_details.name = 'ICON';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'BNB':
			coin_details.name = 'Binance Coin';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'BTCL':
			coin_details.name = 'BTC Lite';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'DGD':
			coin_details.name = 'DigixDAO';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'DRT':
			coin_details.name = 'DomRaider';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'PPT':
			coin_details.name = 'Populous';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'LYS':
			coin_details.name = 'Lightyears';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'MKR':
			coin_details.name = 'Maker';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'SNT':
			coin_details.name = 'Status';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'REP':
			coin_details.name = 'Augur';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'ZRX':
			coin_details.name = '0x';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'BAT':
			coin_details.name = 'Basic Attention Token';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'GNT':
			coin_details.name = 'Golem';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'ETHOS':
			coin_details.name = 'Ethos';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'QASH':
			coin_details.name = 'QASH';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'FUN':
			coin_details.name = 'FunFair';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'KNC':
			coin_details.name = 'Kyber Network';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'SALT':
			coin_details.name = 'SALT';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'BNT':
			coin_details.name = 'Bancor';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'ICN':
			coin_details.name = 'Iconomi';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'OCC':
			coin_details.name = 'Original Crypto Coin';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'PAY':
			coin_details.name = 'TenX';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'REQ':
			coin_details.name = 'Request Network';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'STORJ':
			coin_details.name = 'Storj';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'GNO':
			coin_details.name = 'Gnosis';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'RLC':
			coin_details.name = 'iExec RLC';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'ENJ':
			coin_details.name = 'Enjin Coin';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'QSP':
			coin_details.name = 'Quantstamp';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'RDN':
			coin_details.name = 'Raiden Network Token';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'CVC':
			coin_details.name = 'Civic';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'SAN':
			coin_details.name = 'Santiment Network Token';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'ANT':
			coin_details.name = 'Aragon';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'MANA':
			coin_details.name = 'Decentraland';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'MCO':
			coin_details.name = 'Monaco';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'MTL':
			coin_details.name = 'Metal';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'EDG':
			coin_details.name = 'Edgeless';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'MLN':
			coin_details.name = 'Melon';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'AMB':
			coin_details.name = 'Ambrosus';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'WINGS':
			coin_details.name = 'Wings';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'RCN':
			coin_details.name = 'Ripio Credit Network';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'SNGLS':
			coin_details.name = 'SingularDTV';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'TAAS':
			coin_details.name = 'TaaS';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'DNT':
			coin_details.name = 'district0x';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'CFI':
			coin_details.name = 'Cofound.it';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'LUN':
			coin_details.name = 'Lunyr';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'ADT':
			coin_details.name = 'adToken';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'AST':
			coin_details.name = 'AirSwap';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'CDT':
			coin_details.name = 'Blox';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'TKN':
			coin_details.name = 'TokenCard';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'HMQ':
			coin_details.name = 'Humaniq';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'BCAP':
			coin_details.name = 'Bcap';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'NMR':
			coin_details.name = 'Numeraire';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'NET':
			coin_details.name = 'NetCoin';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'TRST':
			coin_details.name = 'WeTrust';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'GUP':
			coin_details.name = 'Matchpool';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case '1ST':
			coin_details.name = 'FirstBlood';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'TIME':
			coin_details.name = 'Chronobank';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'SWT':
			coin_details.name = 'Swarm City';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'DICE':
			coin_details.name = 'Etheroll';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'XAUR':
			coin_details.name = 'Xaurum';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'PLU':
			coin_details.name = 'Pluton';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'HGT':
			coin_details.name = 'HelloGold';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'VSL':
			coin_details.name = 'vSlice';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'IND':
			coin_details.name = 'Indorse Token';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'FYN':
			coin_details.name = 'FundYourselfNow';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'EOS':
			coin_details.name = 'EOS';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'LALA':
			coin_details.name = 'LALA World';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
		case 'TUSD':
			coin_details.name = 'True USD';
			coin_details.explorer = 'https://etherscan.io/tx/';
			coin_details.eth = true;
			break;
	}
	return coin_details;
}
