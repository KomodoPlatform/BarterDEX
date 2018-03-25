var electrum_servers_list = {
  "ARG": [{"173.212.225.176": 50081},{"136.243.45.140": 50081}],
  "BCH": [{"electrum2.cipig.net":10051},{"electrum1.cipig.net":10051}],
  "BET": [{"electrum2.cipig.net":10012},{"electrum1.cipig.net":10012}],
  "BLK": [{"electrum2.cipig.net":10054},{"electrum1.cipig.net":10054}],
  "BOTS": [{"electrum2.cipig.net":10007},{"electrum1.cipig.net":10007}],
  "BTC": [{"node1.komodo.rocks":50001},{"e-x.not.fyi":50001},{"helicarrier.bauerj.eu":50001},{"electrum.hsmiths.com":50001}],
  "BTCZ": [{"electrum2.cipig.net":10056},{"electrum1.cipig.net":10056}],
  "BTCH": [{"electrum2.cipig.net":10020},{"electrum1.cipig.net":10020}],
  "BTG": [{"94.130.224.11":10052},{"173.212.225.176":10052}],
  "BTX": [{"electrum2.cipig.net":10057},{"electrum1.cipig.net":10057}],
  "CHIPS": [{"electrum2.cipig.net":10053},{"electrum1.cipig.net":10053}],
  "COQUI": [{"78.47.146.222":10011},{"94.130.173.120":10011},{"electrum2.cipig.net":10011},{"electrum1.cipig.net":10011}],
  "CRW": [{"173.212.225.176": 50041},{"136.243.45.140": 50041}],
  "CRYPTO": [{"electrum2.cipig.net":10008},{"electrum1.cipig.net":10008}],
  "DASH": [{"173.212.225.176": 50098},{"136.243.45.140": 50098}],
  "DEX": [{"electrum2.cipig.net":10006},{"electrum1.cipig.net":10006}],
  "DNR": [{"173.254.244.122":50002},{"173.254.244.119":50002},{"155.254.33.176":50002}],
  "DGB": [{"136.243.45.140": 50022},{"173.212.225.176": 50022}],
  "DOGE": [{"173.212.225.176": 50015},{"136.243.45.140": 50015}],
  "EMC2": [{"173.212.225.176": 50079},{"136.243.45.140": 50079}],
  "FAIR": [{"173.212.225.176": 50005},{"136.243.45.140": 50005}],
  "GRS": [{"electrum10.groestlcoin.org":50001},{"electrum11.groestlcoin.org":50001},{"electrum13.groestlcoin.org":50001},{"electrum14.groestlcoin.org":50001}],
  "HODL": [{"electrum2.cipig.net":10009},{"electrum1.cipig.net":10009}],
  "HODLC": [{"hodl2.amit.systems":17989},{"hodl.amit.systems":17989}],
  "HUSH": [{"173.212.225.176": 50013},{"136.243.45.140": 50013}],
  "JUMBLR": [{"electrum2.cipig.net": 10004},{"electrum1.cipig.net": 10004}],
  "KMD": [{"electrum2.cipig.net":10001},{"electrum1.cipig.net":10001}],
  "LTC": [{"173.212.225.176": 50012},{"136.243.45.140": 50012}],
  "MGW": [{"electrum2.cipig.net":10015},{"electrum1.cipig.net":10015}],
  "MNZ": [{"electrum2.cipig.net":10002},{"electrum1.cipig.net":10002}],
  "MONA": [{"173.212.225.176": 50002},{"136.243.45.140": 50002}],
  "MSHARK": [{"electrum2.cipig.net": 10013},{"electrum1.cipig.net": 10013}],
  "NMC": [{"173.212.225.176": 50036},{"136.243.45.140": 50036}],
  "OOT": [{"electrum1.utrum.io": 10088},{"electrum2.utrum.io": 10088}],
  "PANGEA": [{"electrum2.cipig.net": 10010},{"electrum1.cipig.net": 10010}],
  "QTUM": [{"s1.qtum.info":50001},{"s2.qtum.info":50001},{"s3.qtum.info":50001},{"s4.qtum.info":50001}],
  "REVS": [{"electrum2.cipig.net": 10003},{"electrum1.cipig.net": 10003}],
  "SIB": [{"electrum2.cipig.net": 10050},{"electrum1.cipig.net": 10050}],
  "SNG": [{"128.199.233.38": 10001},{"45.77.254.232": 10001}],
  "SUPERNET": [{"electrum2.cipig.net": 10005},{"electrum1.cipig.net": 10005}],
  "VIA": [{"173.212.225.176": 50033},{"136.243.45.140": 50033}],
  "VTC": [{"173.212.225.176": 50088},{"136.243.45.140": 50088}],
  "WLC": [{"electrum2.cipig.net": 10014},{"electrum1.cipig.net": 10014}],
  "XZC": [{"45.63.92.224": 50002},[{"51.15.82.184": 50002},[{"47.75.76.176": 50002}],
  "ZCL": [{"electrum2.cipig.net": 10055},{"electrum1.cipig.net": 10055}],
  "ZEC": [{"173.212.225.176": 50032},{"136.243.45.140": 50032}],
  "BEER": [{"electrum1.cipig.net": 10022},{"electrum2.cipig.net": 10022}],
  "PIZZA": [{"electrum1.cipig.net": 10024},{"electrum2.cipig.net": 10024}]
}


Array.prototype.getRandomElectrumServer = function(){
  return this[Math.floor(Math.random()*this.length)];
}


//electrum_coin_servers = electrum_servers_list['BTC']
//console.log(electrum_coin_servers);

function get_random_electrum_server(coin) {
  var select_random_server = electrum_servers_list[coin][Math.floor(Math.random() * electrum_servers_list[coin].length)];
  var return_data = {}
  var ipaddr = _.keys(select_random_server);
  return_data.ipaddr = ipaddr[0];
  return_data.port = select_random_server[ipaddr[0]];
  return return_data;
}
