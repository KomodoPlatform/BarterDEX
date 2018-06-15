var coin_select_options = '';

coin_select_options = `<optgroup label="Crypto Coins">
      <option data-content="<img src='img/cryptologo/kmd.png' width='30px;'/> Komodo (KMD)" data-tokens="kmd komodo ">KMD</option>
      <option data-content="<img src='img/cryptologo/btc.png' width='30px;'/> Bitcoin (BTC)" data-tokens="btc bitcoin ">BTC</option>
      <option data-content="<img src='img/cryptologo/bch.png' width='30px;'/> Bitcoin Cash (BCH)" data-tokens="bch bitcoin cash ">BCH</option>
      <option data-content="<img src='img/cryptologo/chips.png' width='30px;'/> CHIPS (CHIPS)" data-tokens="CHIPS CHIPS ">CHIPS</option>
      <option data-content="<img src='img/cryptologo/eth.png' width='30px;'/> Ethereum (ETH)" data-tokens="Ethereum ETH ">ETH</option>

      <option data-content="<img src='img/cryptologo/beer.png' width='30px;'/> BEER (BEER TESTCOIN)" data-tokens="BEER BEER TESTCOIN">BEER</option>
      <option data-content="<img src='img/cryptologo/pizza.png' width='30px;'/> PIZZA (PIZZA TESTCOIN)" data-tokens="PIZZA PIZZA TESTCOIN">PIZZA</option>

      <option data-content="<img src='img/cryptologo/888.png' width='30px'/> OctoCoin (888)" data-tokens="OctoCoin 888">888</option>
      <option data-content="<img src='img/cryptologo/aby.png' width='30px'/> ArtByte (ABY)" data-tokens="ArtByte ABY">ABY</option>
      <option data-content="<img src='img/cryptologo/arc.png' width='30px'/> ArcticCoin (ARC)" data-tokens="ArcticCoin ARC">ARC</option>
      <option data-content="<img src='img/cryptologo/arg.png' width='30px'/> Argentum (ARG)" data-tokens="Argentum ARG">ARG</option>
      <option data-content="<img src='img/cryptologo/atb.png' width='30px'/> ATBCoin (ATB)" data-tokens="ATB">ATB</option>
      <option data-content="<img src='img/cryptologo/axe.png' width='30px'/> Axe (AXE)" data-tokens="Axe AXE">AXE</option>
      <option data-content="<img src='img/cryptologo/bcbc.png' width='30px'/> Bitcoin@CBC (BCBC)" data-tokens="Bitcoin@CBC BCBC">BCBC</option>
      <option data-content="<img src='img/cryptologo/bay.png' width='30px'/> BitBay (BAY)" data-tokens="BitBay BAY">BAY</option>
      <option data-content="<img src='img/cryptologo/bco.png' width='30px;'/> BridgeCoin (BCO)" data-tokens="BridgeCoin BCO">BCO</option>
      <option data-content="<img src='img/cryptologo/bits.png' width='30px;'/> BitStar (BITS)" data-tokens="BitStar BITS">BITS</option>
      <option data-content="<img src='img/cryptologo/bta.png' width='30px;'/> Bata (BTA)" data-tokens="Bata BTA">BTA</option>
      <option data-content="<img src='img/cryptologo/bdl.png' width='30px;'/> Bitdeal (BDL)" data-tokens="Bitdeal BDL">BDL</option>
      <option data-content="<img src='img/cryptologo/btx.png' width='30px'/> Bitcore (BTX)" data-tokens="Bitcore BTX">BTX</option>
      <option data-content="<img src='img/cryptologo/btcp.png' width='30px'/> BitcoinPrivate (BTCP)" data-tokens="BitcoinPrivate BTCP">BTCP</option>
      <option data-content="<img src='img/cryptologo/btcz.png' width='30px'/> BitcoinZ (BTCZ)" data-tokens="BitcoinZ BTCZ">BTCZ</option>
      <option data-content="<img src='img/cryptologo/bsd.png' width='30px'/> BitSend (BSD)" data-tokens="BitSend BSD">BSD</option>
      <option data-content="<img src='img/cryptologo/btg.png' width='30px'/> Bitcoin Gold (BTG)" data-tokens="Bitcoin Gold BTG">BTG</option>
      <option data-content="<img src='img/cryptologo/blk.png' width='30px'/> BlackCoin (BLK)" data-tokens="BlackCoin BLK">BLK</option>
      <option data-content="<img src='img/cryptologo/block.png' width='30px'/> Blocknet (BLOCK)" data-tokens="Blocknet BLOCK">BLOCK</option>
      <option data-content="<img src='img/cryptologo/buck.png' width='30px'/> Buck (BUCK)" data-tokens="Buck BUCK">BUCK</option>
      <option data-content="<img src='img/cryptologo/cmm.png' width='30px'/> Commercium (CMM)" data-tokens="CMM">CMM</option>
      <option data-content="<img src='img/cryptologo/crds.png' width='30px'/> Credits (CRDS)" data-tokens="CRDS">CRDS</option>
      <option data-content="<img src='img/cryptologo/crc.png' width='30px'/> CrowdCoin (CRC)" data-tokens="CrowdCoin CRC">CRC</option>
      <option data-content="<img src='img/cryptologo/crw.png' width='30px'/> Crown (CRW)" data-tokens="crw crown ">CRW</option>
      <option data-content="<img src='img/cryptologo/crea.png' width='30px'/> Creativecoin (CREA)" data-tokens="Creativecoin CREA">CREA</option>
      <option data-content="<img src='img/cryptologo/dash.png' width='30px'/> Dash (DASH)" data-tokens="dash">DASH</option>
      <option data-content="<img src='img/cryptologo/dgb.png' width='30px'/> Digibyte (DGB)" data-tokens="dgb digibyte">DGB</option>
      <option data-content="<img src='img/cryptologo/din.png' width='30px'/> Dinero (DIN)" data-tokens="Dinero DIN">DIN</option>
      <option data-content="<img src='img/cryptologo/doge.png' width='30px'/> Dogecoin (DOGE)" data-tokens="doge dogecoin">DOGE</option>
      <option data-content="<img src='img/cryptologo/dnr.png' width='30px'/> Denarius (DNR)" data-tokens="dnr denarius">DNR</option>
      <option data-content="<img src='img/cryptologo/dsr.png' width='30px'/> Desire (DSR)" data-tokens="Desire dsr">DSR</option>
      <option data-content="<img src='img/cryptologo/dyn.png' width='30px'/> Dynamic (DYN)" data-tokens="Dynamic DYN">DYN</option>
      <option data-content="<img src='img/cryptologo/efl.png' width='30px'/> e-Gulden (EFL)" data-tokens="e-Gulden EFL">EFL</option>
      <option data-content="<img src='img/cryptologo/eli.png' width='30px'/> Elicoin (ELI)" data-tokens="Elicoin ELI">ELI</option>
      <option data-content="<img src='img/cryptologo/elp.png' width='30px'/> Ellerium (ELP)" data-tokens="Ellerium ELP">ELP</option>
      <option data-content="<img src='img/cryptologo/emc2.png' width='30px'/> Einsteinium (EMC2)" data-tokens="emc2 einsteinium">EMC2</option>
      <option data-content="<img src='img/cryptologo/erc.png' width='30px'/> EuropeCoin (ERC)" data-tokens="EuropeCoin ERC">ERC</option>
      <option data-content="<img src='img/cryptologo/fair.png' width='30px'/> Faircoin (FAIR)" data-tokens="FAIR Faircoin">FAIR</option>
      <option data-content="<img src='img/cryptologo/flo.png' width='30px'/> Florincoin (FLO)" data-tokens="Florincoin FLO">FLO</option>
      <option data-content="<img src='img/cryptologo/ftc.png' width='30px'/> Feathercoin (FTC)" data-tokens="Feathercoin FTC">FTC</option>
      <option data-content="<img src='img/cryptologo/fjc.png' width='30px'/> Fujicoin (FJC)" data-tokens="Fujicoin FJC">FJC</option>
      <option data-content="<img src='img/cryptologo/game.png' width='30px'/> Gamecredits (GAME)" data-tokens="Gamecredits GAME">GAME</option>
      <option data-content="<img src='img/cryptologo/gbx.png' width='30px'/> GoByte (GBX)" data-tokens="GoByte GBX">GBX</option>
      <option data-content="<img src='img/cryptologo/gld.png' width='30px'/> GoldCoin (GLD)" data-tokens="GoldCoin GLD">GLD</option>
      <option data-content="<img src='img/cryptologo/glt.png' width='30px'/> GlobalToken (GLT)" data-tokens="GlobalToken GLT">GLT</option>
      <option data-content="<img src='img/cryptologo/grlc.png' width='30px'/> Garlicoin (GRLC)" data-tokens="Garlicoin GRLC">GRLC</option>
      <option data-content="<img src='img/cryptologo/grs.png' width='30px'/> Groestlcoin (GRS)" data-tokens="Groestlcoin GRS">GRS</option>
      <option data-content="<img src='img/cryptologo/hxx.png' width='30px'/> Hexx (HXX)" data-tokens="HXX">HXX</option>
      <option data-content="<img src='img/cryptologo/hodlc.png' width='30px'/> HODLCoin (HODLC)" data-tokens="HODLCoin HODLC">HODLC</option>
      <option data-content="<img src='img/cryptologo/html.png' width='30px'/> HTMLCOIN (HTML)" data-tokens="HTMLCOIN HTML">HTML</option>
      <option data-content="<img src='img/cryptologo/huc.png' width='30px'/> Huntercoin (HUC)" data-tokens="Huntercoin HUC">HUC</option>
      <option data-content="<img src='img/cryptologo/hush.png' width='30px'/> Hush (HUSH)" data-tokens="Hush HUSH">HUSH</option>
      <option data-content="<img src='img/cryptologo/i0c.png' width='30px'/> I0Coin (I0C)" data-tokens="I0Coin I0C">I0C</option>
      <option data-content="<img src='img/cryptologo/iop.png' width='30px'/> Internet of People (IOP)" data-tokens="Internet of People IOP">IOP</option>
      <option data-content="<img src='img/cryptologo/inn.png' width='30px'/> Innova (INN)" data-tokens="Innova INN">INN</option>
      <option data-content="<img src='img/cryptologo/kng.png' width='30px'/> BetKings (KNG)" data-tokens="BetKings KNG">KNG</option>
      <option data-content="<img src='img/cryptologo/kreds.png' width='30px'/> Kreds (KREDS)" data-tokens="Kreds KREDS">KREDS</option>
      <option data-content="<img src='img/cryptologo/lbc.png' width='30px'/> LBRY Credits (LBC)" data-tokens="LBRY Credits LBC">LBC</option>
      <option data-content="<img src='img/cryptologo/ltc.png' width='30px'/> Litecoin (LTC)" data-tokens="Litecoin LTC">LTC</option>
      <option data-content="<img src='img/cryptologo/ltz.png' width='30px'/> LitecoinZ (LTZ)" data-tokens="LitecoinZ LTZ">LTZ</option>
      <option data-content="<img src='img/cryptologo/mac.png' width='30px'/> Machinecoin (MAC)" data-tokens="Machinecoin MAC">MAC</option>
      <option data-content="<img src='img/cryptologo/maga.png' width='30px'/> Magacoin (MAGA)" data-tokens="Magacoin MAGA">MAGA</option>
      <option data-content="<img src='img/cryptologo/mlm.png' width='30px'/> MktCoin (MLM)" data-tokens="MLM">MLM</option>
      <option data-content="<img src='img/cryptologo/mnx.png' width='30px'/> MinexCoin (MNX)" data-tokens="MinexCoin MNX">MNX</option>
      <option data-content="<img src='img/cryptologo/mona.png' width='30px'/> Monacoin (MONA)" data-tokens="Monacoin MONA">MONA</option>
      <option data-content="<img src='img/cryptologo/mue.png' width='30px'/> Monetary Unit (MUE)" data-tokens="MonetaryUnit MUE">MUE</option>
      <option data-content="<img src='img/cryptologo/xmcc.png' width='30px'/> Monoeci (XMCC)" data-tokens="Monoeci XMCC">XMCC</option>
      <option data-content="<img src='img/cryptologo/moon.png' width='30px'/> Mooncoin (MOON)" data-tokens="Mooncoin MOON">MOON</option>
      <option data-content="<img src='img/cryptologo/xmy.png' width='30px'/> Myriad (XMY)" data-tokens="Myriad (XMY)">XMY</option>
      <option data-content="<img src='img/cryptologo/nav.png' width='30px'/> Navcoin (NAV)" data-tokens="Navcoin NAV">NAV</option>
      <option data-content="<img src='img/cryptologo/nmc.png' width='30px'/> Namecoin (NMC)" data-tokens="Namecoin NMC">NMC</option>
      <option data-content="<img src='img/cryptologo/ore.png' width='30px'/> Galactrum (ORE)" data-tokens="ORE">ORE</option>
      <option data-content="<img src='img/cryptologo/pew.png' width='30px'/> BroFist (PEW)" data-tokens="PEW">PEW</option>
      <option data-content="<img src='img/cryptologo/pgn.png' width='30px'/> Pigeon (PGN)" data-tokens="PGN">PGN</option>
      <option data-content="<img src='img/cryptologo/pivx.png' width='30px'/> PIVX (PIVX)" data-tokens="PIVX">PIVX</option>
      <option data-content="<img src='img/cryptologo/pura.png' width='30px'/> Pura (PURA)" data-tokens="PURA">PURA</option>
      <option data-content="<img src='img/cryptologo/pyro.png' width='30px'/> Pyro (PYRO)" data-tokens="PYRO">PYRO</option>
      <option data-content="<img src='img/cryptologo/qtum.png' width='30px'/> Qtum (QTUM)" data-tokens="Qtum">QTUM</option>
      <option data-content="<img src='img/cryptologo/radius.png' width='30px'/> Radius (RADIUS)" data-tokens="Radius RADIUS">RADIUS</option>
      <option data-content="<img src='img/cryptologo/rap.png' width='30px'/> Rapture (RAP)" data-tokens="Rapture RAP">RAP</option>
      <option data-content="<img src='img/cryptologo/rvn.png' width='30px'/> Ravencoin (RVN)" data-tokens="Ravencoin RVN">RVN</option>
      <option data-content="<img src='img/cryptologo/xre.png' width='30px'/> RevolverCoin (XRE)" data-tokens="RevolverCoin XRE">XRE</option>
      <option data-content="<img src='img/cryptologo/roi.png' width='30px'/> ROIcoin (ROI)" data-tokens="ROICoin ROI">ROI</option>
      <option data-content="<img src='img/cryptologo/scriv.png' width='30px'/> Scriv (SCRIV)" data-tokens="Scriv SCRIV">SCRIV</option>
      <option data-content="<img src='img/cryptologo/seq.png' width='30px'/> Sequence (SEQ)" data-tokens="Sequence SEQ">SEQ</option>
      <option data-content="<img src='img/cryptologo/sxc.png' width='30px'/> Sexcoin (SXC)" data-tokens="Sexcoin SXC">SXC</option>
      <option data-content="<img src='img/cryptologo/sib.png' width='30px'/> Sibcoin (SIB)" data-tokens="Sibcoin SIB">SIB</option>
      <option data-content="<img src='img/cryptologo/smart.png' width='30px'/> SmartCash (SMART)" data-tokens="SmartCash SMART">SMART</option>
      <option data-content="<img src='img/cryptologo/smc.png' width='30px'/> SmartCoin (SMC)" data-tokens="SmartCoin SMC">SMC</option>
      <option data-content="<img src='img/cryptologo/sng.png' width='30px'/> SnowGem (SNG)" data-tokens="SnowGem SNG">SNG</option>
      <option data-content="<img src='img/cryptologo/spk.png' width='30px'/> Sparks (SPK)" data-tokens="Sparks (SPK)">SPK</option>
      <option data-content="<img src='img/cryptologo/stak.png' width='30px'/> Straks (STAK)" data-tokens="Straks STAK">STAK</option>
      <option data-content="<img src='img/cryptologo/sys.png' width='30px'/> Syscoin (SYS)" data-tokens="Syscoin SYS">SYS</option>
      <option data-content="<img src='img/cryptologo/trc.png' width='30px'/> Terracoin (TRC)" data-tokens="Terracoin TRC">TRC</option>
      <option data-content="<img src='img/cryptologo/ufo.png' width='30px'/> Uniform Fiscal Object (UFO)" data-tokens="Uniform Fiscal Object UFO">UFO</option>
      <option data-content="<img src='img/cryptologo/uis.png' width='30px'/> Unitus (UIS)" data-tokens="Unitus UIS">UIS</option>
      <option data-content="<img src='img/cryptologo/vtc.png' width='30px'/> Vertcoin (VTC)" data-tokens="Vertcoin VTC">VTC</option>
      <option data-content="<img src='img/cryptologo/via.png' width='30px'/> Viacoin (VIA)" data-tokens="Viacoin VIA">VIA</option>
      <option data-content="<img src='img/cryptologo/vrt.png' width='30px'/> Virtus (VRT)" data-tokens="Virtus VRT">VRT</option>
      <option data-content="<img src='img/cryptologo/vivo.png' width='30px'/> VIVO (VIVO)" data-tokens="VIVO VIVO">VIVO</option>
      <option data-content="<img src='img/cryptologo/vot.png' width='30px'/> VoteCoin (VOT)" data-tokens="VoteCoin VOT">VOT</option>
      <option data-content="<img src='img/cryptologo/wavi.png' width='30px'/> Wavi (WAVI)" data-tokens="Wavi WAVI">WAVI</option>
      <option data-content="<img src='img/cryptologo/xcg.png' width='30px'/> Xchange (XCG)" data-tokens="Xchange XCG">XCG</option>
      <option data-content="<img src='img/cryptologo/xcoin.png' width='30px'/> xCoin (XCOIN)" data-tokens="xCoin XCOIN">XCOIN</option>
      <option data-content="<img src='img/cryptologo/xsn.png' width='30px'/> Stakenet (XSN)" data-tokens="XSN">XSN</option>
      <option data-content="<img src='img/cryptologo/xzc.png' width='30px'/> ZCoin (XZC)" data-tokens="ZCoin XZC">XZC</option>
      <option data-content="<img src='img/cryptologo/zcl.png' width='30px'/> ZClassic (ZCL)" data-tokens="ZClassic ZCL">ZCL</option>
      <option data-content="<img src='img/cryptologo/zel.png' width='30px'/> Zelcash (ZEL)" data-tokens="Zelcash ZEL">ZEL</option>
      <option data-content="<img src='img/cryptologo/zer.png' width='30px'/> Zero (ZER)" data-tokens="Zero ZER">ZER</option>
      <option data-content="<img src='img/cryptologo/zet.png' width='30px'/> Zetacoin (ZET)" data-tokens="Zetacoin ZET">ZET</option>
      <option data-content="<img src='img/cryptologo/zec.png' width='30px'/> Zcash (ZEC)" data-tokens="Zcash ZEC">ZEC</option>
      <option data-content="<img src='img/cryptologo/zoi.png' width='30px'/> Zoin (ZOI)" data-tokens="Zoin ZOI">ZOI</option>
    </optgroup>
    <optgroup label="ETH/ERC20 Coins">
      <option data-content="<img src='img/cryptologo/jst.png' width='30px;'/> JST (TESTCOIN)" data-tokens="JST JST ">JST</option>
      <option data-content="<img src='img/cryptologo/dec8.png' width='30px;'/> DEC8 (TESTCOIN)" data-tokens="JST JST ">DEC8</option>
      <option data-content="<img src='img/cryptologo/adt.png' width='30px'/> adToken (ADT)" data-tokens="ADT">ADT</option>
      <option data-content="<img src='img/cryptologo/ae.png' width='30px'/> Aeternity (AE)" data-tokens="AE">AE</option>
      <option data-content="<img src='img/cryptologo/elf.png' width='30px'/> aelf (ELF)" data-tokens="ELF">ELF</option>
      <option data-content="<img src='img/cryptologo/aion.png' width='30px'/> Aion (AION)" data-tokens="AION">AION</option>
      <option data-content="<img src='img/cryptologo/ann.png' width='30px'/> Agent Not Needed (ANN)" data-tokens="ANN">ANN</option>
      <option data-content="<img src='img/cryptologo/ast.png' width='30px'/> AirSwap (AST)" data-tokens=" AST">AST</option>
      <option data-content="<img src='img/cryptologo/amb.png' width='30px'/> Ambrosus (AMB)" data-tokens=" AMB">AMB</option>
      <option data-content="<img src='img/cryptologo/ant.png' width='30px'/> Aragon (ANT)" data-tokens=" ANT">ANT</option>
      <option data-content="<img src='img/cryptologo/rep.png' width='30px'/> Augur (REP)" data-tokens=" REP">REP</option>
      <option data-content="<img src='img/cryptologo/bnt.png' width='30px'/> Bancor (BNT)" data-tokens=" BNT">BNT</option>
      <option data-content="<img src='img/cryptologo/bat.png' width='30px'/> Basic Attention Token (BAT)" data-tokens=" BAT">BAT</option>
      <option data-content="<img src='img/cryptologo/bbt.png' width='30px'/> BitBoost (BBT)" data-tokens=" BBT">BBT</option>
      <option data-content="<img src='img/cryptologo/bcap.png' width='30px'/> Bcap (BCAP)" data-tokens=" BCAP">BCAP</option>
      <option data-content="<img src='img/cryptologo/bnb.png' width='30px'/> Binance Coin (BNB)" data-tokens=" BNB">BNB</option>
      <option data-content="<img src='img/cryptologo/btk.png' width='30px'/> BitcoinToken (BTK)" data-tokens="BTK">BTK</option>
      <option data-content="<img src='img/cryptologo/btcl.png' width='30px'/> BTC Lite (BTCL)" data-tokens=" BTCL">BTCL</option>
      <option data-content="<img src='img/cryptologo/btm.png' width='30px'/> Bytom (BTM)" data-tokens="BTM">BTM</option>
      <option data-content="<img src='img/cryptologo/cdt.png' width='30px'/> Blox (CDT)" data-tokens=" CDT">CDT</option>
      <option data-content="<img src='img/cryptologo/cennz.png' width='30px'/> Centrality (CENNZ)" data-tokens="CENNZ">CENNZ</option>
      <option data-content="<img src='img/cryptologo/cvc.png' width='30px'/> Civic (CVC)" data-tokens=" CVC">CVC</option>
      <option data-content="<img src='img/cryptologo/cfi.png' width='30px'/> Cofound.it (CFI)" data-tokens=" CFI">CFI</option>
      <option data-content="<img src='img/cryptologo/time.png' width='30px'/> Chronobank (TIME)" data-tokens=" TIME">TIME</option>
      <option data-content="<img src='img/cryptologo/cix.png' width='30px'/> Cryptonetix (CIX)" data-tokens="CIX">CIX</option>
      <option data-content="<img src='img/cryptologo/dai.png' width='30px'/> Dai (DAI)" data-tokens="DAI">DAI</option>
      <option data-content="<img src='img/cryptologo/mana.png' width='30px'/> Decentraland (MANA)" data-tokens=" MANA">MANA</option>
      <option data-content="<img src='img/cryptologo/dcn.png' width='30px'/> Dentacoin (DCN)" data-tokens="DCN">DCN</option>
      <option data-content="<img src='img/cryptologo/dgd.png' width='30px'/> DigixDAO (DGD)" data-tokens=" DGD">DGD</option>
      <option data-content="<img src='img/cryptologo/dgpt.png' width='30px'/> DigiPulse (DGPT)" data-tokens="DGPT">DGPT</option>
      <option data-content="<img src='img/cryptologo/dnt.png' width='30px'/> district0x (DNT)" data-tokens=" DNT">DNT</option>
      <option data-content="<img src='img/cryptologo/drt.png' width='30px'/> DomRaider (DRT)" data-tokens=" DRT">DRT</option>
      <option data-content="<img src='img/cryptologo/drgn.png' width='30px'/> Dragonchain (DRGN)" data-tokens="DRGN">DRGN</option>
      <option data-content="<img src='img/cryptologo/drop.png' width='30px'/> Dropil (DROP)" data-tokens="DROP">DROP</option>
      <option data-content="<img src='img/cryptologo/edg.png' width='30px'/> Edgeless (EDG)" data-tokens=" EDG">EDG</option>
      <option data-content="<img src='img/cryptologo/eld.png' width='30px'/> Electrum Dark (ELD)" data-tokens="ELD">ELD</option>
      <option data-content="<img src='img/cryptologo/enj.png' width='30px'/> Enjin Coin (ENJ)" data-tokens=" ENJ">ENJ</option>
      <option data-content="<img src='img/cryptologo/dice.png' width='30px'/> Etheroll (DICE)" data-tokens=" DICE">DICE</option>
      <option data-content="<img src='img/cryptologo/eos.png' width='30px'/> EOS (EOS)" data-tokens=" EOS">EOS</option>
      <option data-content="<img src='img/cryptologo/ethos.png' width='30px'/> Ethos (ETHOS)" data-tokens=" ETHOS">ETHOS</option>
      <option data-content="<img src='img/cryptologo/1st.png' width='30px'/> FirstBlood (1ST)" data-tokens=" 1ST">1ST</option>
      <option data-content="<img src='img/cryptologo/fllw.png' width='30px'/> FollowCoin (FLLW)" data-tokens="FLLW">FLLW</option>
      <option data-content="<img src='img/cryptologo/fun.png' width='30px'/> FunFair (FUN)" data-tokens=" FUN">FUN</option>
      <option data-content="<img src='img/cryptologo/fsn.png' width='30px'/> Fusion (FSN)" data-tokens="FSN">FSN</option>
      <option data-content="<img src='img/cryptologo/fyn.png' width='30px'/> FundYourselfNow (FYN)" data-tokens=" FYN">FYN</option>
      <option data-content="<img src='img/cryptologo/gno.png' width='30px'/> Gnosis (GNO)" data-tokens=" GNO">GNO</option>
      <option data-content="<img src='img/cryptologo/gpn.png' width='30px'/> GPN Coin (GPN)" data-tokens="GPN">GPN</option>
      <option data-content="<img src='img/cryptologo/hgt.png' width='30px'/> HelloGold (HGT)" data-tokens=" HGT">HGT</option>
      <option data-content="<img src='img/cryptologo/hmq.png' width='30px'/> Humaniq (HMQ)" data-tokens=" HMQ">HMQ</option>
      <option data-content="<img src='img/cryptologo/hyd.png' width='30px'/> Hydra (HYD)" data-tokens="HYD">HYD</option>
      <option data-content="<img src='img/cryptologo/icn.png' width='30px'/> Iconomi (ICN)" data-tokens=" ICN">ICN</option>
      <option data-content="<img src='img/cryptologo/icx.png' width='30px'/> ICON (ICX)" data-tokens=" ICX">ICX</option>
      <option data-content="<img src='img/cryptologo/iost.png' width='30px'/> IOST (IOST)" data-tokens="IOST">IOST</option>
      <option data-content="<img src='img/cryptologo/rlc.png' width='30px'/> iExec RLC (RLC)" data-tokens=" RLC">RLC</option>
      <option data-content="<img src='img/cryptologo/ind.png' width='30px'/> Indorse Token (IND)" data-tokens=" IND">IND</option>
      <option data-content="<img src='img/cryptologo/knc.png' width='30px'/> Kyber Network (KNC)" data-tokens=" KNC">KNC</option>
      <option data-content="<img src='img/cryptologo/lala.png' width='30px'/> LALA World (LALA)" data-tokens=" LALA">LALA</option>
      <option data-content="<img src='img/cryptologo/lys.png' width='30px'/> Lightyears (LYS)" data-tokens=" LYS">LYS</option>
      <option data-content="<img src='img/cryptologo/loom.png' width='30px'/> Loom Network (LOOM)" data-tokens="LOOM">LOOM</option>
      <option data-content="<img src='img/cryptologo/lrc.png' width='30px'/> Loopring (LRC)" data-tokens="LRC">LRC</option>
      <option data-content="<img src='img/cryptologo/lun.png' width='30px'/> Lunyr (LUN)" data-tokens=" LUN">LUN</option>
      <option data-content="<img src='img/cryptologo/mkr.png' width='30px'/> Maker (MKR)" data-tokens=" MKR">MKR</option>
      <option data-content="<img src='img/cryptologo/gup.png' width='30px'/> Matchpool (GUP)" data-tokens=" GUP">GUP</option>
      <option data-content="<img src='img/cryptologo/mln.png' width='30px'/> Melon (MLN)" data-tokens=" MLN">MLN</option>
      <option data-content="<img src='img/cryptologo/mco.png' width='30px'/> Monaco (MCO)" data-tokens=" MCO">MCO</option>
      <option data-content="<img src='img/cryptologo/mgo.png' width='30px'/> MobileGo (MGO)" data-tokens="MGO">MGO</option>
      <option data-content="<img src='img/cryptologo/mtl.png' width='30px'/> Metal (MTL)" data-tokens=" MTL">MTL</option>
      <option data-content="<img src='img/cryptologo/nas.png' width='30px'/> Nebulas (NAS)" data-tokens="NAS">NAS</option>
      <option data-content="<img src='img/cryptologo/net.png' width='30px'/> NetCoin (NET)" data-tokens=" NET">NET</option>
      <option data-content="<img src='img/cryptologo/nmr.png' width='30px'/> Numeraire (NMR)" data-tokens=" NMR">NMR</option>
      <option data-content="<img src='img/cryptologo/omg.png' width='30px'/> OmiseGO (OMG)" data-tokens=" OMG">OMG</option>
      <option data-content="<img src='img/cryptologo/occ.png' width='30px'/> Original Crypto Coin (OCC)" data-tokens=" OCC">OCC</option>
      <option data-content="<img src='img/cryptologo/oct.png' width='30px'/> Octus (OCT)" data-tokens="OCT">OCT</option>
      <option data-content="<img src='img/cryptologo/prl.png' width='30px'/> Oyster (PRL)" data-tokens="PRL">PRL</option>
      <option data-content="<img src='img/cryptologo/pcl.png' width='30px'/> Peculium (PCL)" data-tokens="PCL">PCL</option>
      <option data-content="<img src='img/cryptologo/powr.png' width='30px'/> Power Ledger (POWR)" data-tokens="POWR">POWR</option>
      <option data-content="<img src='img/cryptologo/plu.png' width='30px'/> Pluton (PLU)" data-tokens=" PLU">PLU</option>
      <option data-content="<img src='img/cryptologo/ppt.png' width='30px'/> Populous (PPT)" data-tokens=" PPT">PPT</option>
      <option data-content="<img src='img/cryptologo/qsp.png' width='30px'/> Quantstamp (QSP)" data-tokens=" QSP">QSP</option>
      <option data-content="<img src='img/cryptologo/qash.png' width='30px'/> QASH (QASH)" data-tokens=" QASH">QASH</option>
      <option data-content="<img src='img/cryptologo/rdn.png' width='30px'/> Raiden Network Token (RDN)" data-tokens=" RDN">RDN</option>
      <option data-content="<img src='img/cryptologo/req.png' width='30px'/> Request Network (REQ)" data-tokens=" REQ">REQ</option>
      <option data-content="<img src='img/cryptologo/rhoc.png' width='30px'/> RChain (RHOC)" data-tokens="RHOC">RHOC</option>
      <option data-content="<img src='img/cryptologo/rcn.png' width='30px'/> Ripio Credit Network (RCN)" data-tokens=" RCN">RCN</option>
      <option data-content="<img src='img/cryptologo/rvt.png' width='30px'/> Rivetz (RVT)" data-tokens="RVT">RVT</option>
      <option data-content="<img src='img/cryptologo/salt.png' width='30px'/> SALT (SALT)" data-tokens=" SALT">SALT</option>
      <option data-content="<img src='img/cryptologo/sanc.png' width='30px'/> Sancoj (SANC)" data-tokens="SANC">SANC</option>
      <option data-content="<img src='img/cryptologo/san.png' width='30px'/> Santiment Network Token (SAN)" data-tokens=" SAN">SAN</option>
      <option data-content="<img src='img/cryptologo/sngls.png' width='30px'/> SingularDTV (SNGLS)" data-tokens=" SNGLS">SNGLS</option>
      <option data-content="<img src='img/cryptologo/srn.png' width='30px'/> SIRIN LABS Token (SRN)" data-tokens="SRN">SRN</option>
      <option data-content="<img src='img/cryptologo/rlty.png' width='30px'/> SMARTRealty (RLTY)" data-tokens="RLTY">RLTY</option>
      <option data-content="<img src='img/cryptologo/snt.png' width='30px'/> Status (SNT)" data-tokens=" SNT">SNT</option>
      <option data-content="<img src='img/cryptologo/storj.png' width='30px'/> Storj (STORJ)" data-tokens=" STORJ">STORJ</option>
      <option data-content="<img src='img/cryptologo/stwy.png' width='30px'/> StorweeyToken (STWY)" data-tokens="STWY">STWY</option>
      <option data-content="<img src='img/cryptologo/swt.png' width='30px'/> Swarm City (SWT)" data-tokens=" SWT">SWT</option>
      <option data-content="<img src='img/cryptologo/pay.png' width='30px'/> TenX (PAY)" data-tokens=" PAY">PAY</option>
      <option data-content="<img src='img/cryptologo/usdt.png' width='30px'/> Tether (USDT)" data-tokens=" USDT">USDT</option>
      <option data-content="<img src='img/cryptologo/tusd.png' width='30px'/> TrueUSD (TUSD)" data-tokens=" TUSD">TUSD</option>
      <option data-content="<img src='img/cryptologo/taas.png' width='30px'/> TaaS (TAAS)" data-tokens=" TAAS">TAAS</option>
      <option data-content="<img src='img/cryptologo/tkn.png' width='30px'/> TokenCard (TKN)" data-tokens=" TKN">TKN</option>
      <option data-content="<img src='img/cryptologo/ucash.png' width='30px'/> U.CASH (UCASH)" data-tokens="UCASH">UCASH</option>
      <option data-content="<img src='img/cryptologo/ven.png' width='30px'/> VeChain (VEN)" data-tokens="VEN">VEN</option>
      <option data-content="<img src='img/cryptologo/vsl.png' width='30px'/> vSlice (VSL)" data-tokens=" VSL">VSL</option>
      <option data-content="<img src='img/cryptologo/trst.png' width='30px'/> WeTrust (TRST)" data-tokens=" TRST">TRST</option>
      <option data-content="<img src='img/cryptologo/wtc.png' width='30px'/> Waltonchain (WTC)" data-tokens="WTC">WTC</option>
      <option data-content="<img src='img/cryptologo/wings.png' width='30px'/> Wings (WINGS)" data-tokens=" WINGS">WINGS</option>
      <option data-content="<img src='img/cryptologo/xaur.png' width='30px'/> Xaurum (XAUR)" data-tokens=" XAUR">XAUR</option>
      <option data-content="<img src='img/cryptologo/xov.png' width='30px'/> XOVBank (XOV)" data-tokens="XOV">XOV</option>
      <option data-content="<img src='img/cryptologo/zil.png' width='30px'/> Zilliqa (ZIL)" data-tokens="ZIL">ZIL</option>
      <option data-content="<img src='img/cryptologo/zrx.png' width='30px'/> 0x (ZRX)" data-tokens=" ZRX">ZRX</option>
    </optgroup>
    <optgroup label="AssetChains">
      <option data-content="<img src='img/cryptologo/axo.png' width='30px'/> AXO (AXO)" data-tokens="AXO AXO">AXO</option>
      <option data-content="<img src='img/cryptologo/bet.png' width='30px'/> BET (BET)" data-tokens="BET BET">BET</option>
      <option data-content="<img src='img/cryptologo/bots.png' width='30px'/> BOTS (BOTS)" data-tokens="BOTS BOTS">BOTS</option>
      <option data-content="<img src='img/cryptologo/btch.png' width='30px'/> BTCH (BTCH)" data-tokens="BTCH BTCH">BTCH</option>
      <option data-content="<img src='img/cryptologo/ceal.png' width='30px'/> Ceal (CEAL)" data-tokens="Ceal CEAL">CEAL</option>
      <option data-content="<img src='img/cryptologo/chain.png' width='30px;'/> Chainmakers (CHAIN)" data-tokens="Chainmakers CHAIN">CHAIN</option>
      <option data-content="<img src='img/cryptologo/coqui.png' width='30px;'/> COQUI (COQUI)" data-tokens="COQUI COQUI">COQUI</option>
      <option data-content="<img src='img/cryptologo/crypto.png' width='30px'/> Crypto777 (CRYPTO)" data-tokens="Crypto777 CRYPTO">CRYPTO</option>
      <option data-content="<img src='img/cryptologo/dsec.png' width='30px;'/> DSEC (DSEC)" data-tokens="DSEC">DSEC</option>
      <option data-content="<img src='img/cryptologo/eql.png' width='30px;'/> Equaliser (EQL)" data-tokens="Equaliser EQL">EQL</option>
      <option data-content="<img src='img/cryptologo/etomic.png' width='30px'/> ETOMIC (ETOMIC)" data-tokens="ETOMIC ETOMIC">ETOMIC</option>
      <option data-content="<img src='img/cryptologo/glxt.png' width='30px;'/> GLXToken (GLXT)" data-tokens="GLXToken GLXT">GLXT</option>
      <option data-content="<img src='img/cryptologo/hodl.png' width='30px'/> HODL (HODL)" data-tokens="HODL HODL">HODL</option>
      <option data-content="<img src='img/cryptologo/dex.png' width='30px;'/> InstantDEX (DEX)" data-tokens="InstantDEX DEX">DEX</option>
      <option data-content="<img src='img/cryptologo/jumblr.png' width='30px;'/> Jumblr (JUMBLR)" data-tokens="Jumblr JUMBLR">JUMBLR</option>
      <option data-content="<img src='img/cryptologo/kv.png' width='30px'/> KeyValue (KV)" data-tokens="KeyValue KV">KV</option>
      <option data-content="<img src='img/cryptologo/mnz.png' width='30px;'/> Monaize (MNZ)" data-tokens="mnz monaize ">MNZ</option>
      <option data-content="<img src='img/cryptologo/mshark.png' width='30px'/> MSHARK (MSHARK)" data-tokens="MSHARK MSHARK">MSHARK</option>
      <option data-content="<img src='img/cryptologo/mgw.png' width='30px'/> MultiGateway (MGW)" data-tokens="MultiGateway MGW">MGW</option>
      <option data-content="<img src='img/cryptologo/oot.png' width='30px'/> Utrum (OOT)" data-tokens="OOT">OOT</option>
      <option data-content="<img src='img/cryptologo/pangea.png' width='30px'/> Pangea (PANGEA)" data-tokens="Pangea PANGEA">PANGEA</option>
      <option data-content="<img src='img/cryptologo/revs.png' width='30px'/> REVS (REVS)" data-tokens="REVS REVS">REVS</option>
      <option data-content="<img src='img/cryptologo/rum.png' width='30px;'/> RUM (RUM)" data-tokens="RUM RUM">RUM</option>
      <option data-content="<img src='img/cryptologo/mesh.png' width='30px'/> SuperMesh (MESH)" data-tokens="SuperMesh MESH">MESH</option>
      <option data-content="<img src='img/cryptologo/supernet.png' width='30px'/> SUPERNET (SUPERNET)" data-tokens="SUPERNET SUPERNET">SUPERNET</option>
      <option data-content="<img src='img/cryptologo/vrsc.png' width='30px'/> VerusCoin (VRSC)" data-tokens="VRSC">VRSC</option>
      <option data-content="<img src='img/cryptologo/wlc.png' width='30px'/> Wireless (WLC)" data-tokens="Wireless WLC">WLC</option>>
    </optgroup>`;


/*
<option data-content="<img src='img/cryptologo/ANC.png' width='30px' disabled/> Anoncoin (ANC)" data-tokens="anc anoncoin">ANC</option>
<option data-content="<img src='img/cryptologo/CARB.png' width='30px' disabled/> Carboncoin (CARB)" data-tokens="carb carboncoin">CARB</option>
<option data-content="<img src='img/cryptologo/FRK.png' width='30px' disabled/> Franko (FRK)" data-tokens="Franko FRK">FRK</option>
<option data-content="<img src='img/cryptologo/MZC.png' width='30px' disabled/> Mazacoin (MZC)" data-tokens="Mazacoin MZC">MZC</option>
<option data-content="<img src='img/cryptologo/strat.png' width='30px'/> Stratis (STRAT)" data-tokens="Stratis STRAT">STRAT</option>
<option data-content="<img src='img/cryptologo/UNO.png' width='30px' disabled/> Unobtanium (UNO)" data-tokens="Unobtanium UNO">UNO</option>
<option data-content="<img src='img/cryptologo/MVP.png' width='30px' disabled/> MVP (MVP)" data-tokens="MVP MVP">MVP</option>
<option data-content="<img src='img/cryptologo/zen.png' width='30px'/> ZenCash (ZEN)" data-tokens="ZenCash ZEN">ZEN</option>
<optgroup label="Komodo Currencies">
      <option data-content="<img src='img/cryptologo/aud.png' width='30px;'/> Australian Dollar (AUD)" data-tokens="Australian Dollar AUD">AUD</option>
      <option data-content="<img src='img/cryptologo/bgn.png' width='30px;'/> Bulgarian Lev (BGN)" data-tokens="Bulgarian Lev BGN">BGN</option>
      <option data-content="<img src='img/cryptologo/cad.png' width='30px;'/> Canadian Dollar (CAD)" data-tokens="Canadian Dollar CAD">CAD</option>
      <option data-content="<img src='img/cryptologo/chf.png' width='30px;'/> Swiss Franc (CHF)" data-tokens="Swiss Franc CHF">CHF</option>
      <option data-content="<img src='img/cryptologo/cny.png' width='30px;'/> Chinese Yuan (CNY)" data-tokens="Chinese Yuan CNY">CNY</option>
      <option data-content="<img src='img/cryptologo/czk.png' width='30px;'/> Czech Koruna (CZK)" data-tokens="Czech Koruna CZK">CZK</option>
      <option data-content="<img src='img/cryptologo/dkk.png' width='30px;'/> Danish Krone (DKK)" data-tokens="Danish Krone DKK">DKK</option>
      <option data-content="<img src='img/cryptologo/eur.png' width='30px;'/> Euro (EUR)" data-tokens="Euro EUR">EUR</option>
      <option data-content="<img src='img/cryptologo/gbp.png' width='30px;'/> Pound Sterling (GBP)" data-tokens="Pound Sterling GBP">GBP</option>
      <option data-content="<img src='img/cryptologo/hkd.png' width='30px;'/> Hong Kong Dollar (HKD)" data-tokens="Hong Kong Dollar HKD">HKD</option>
      <option data-content="<img src='img/cryptologo/hrk.png' width='30px;'/> Croatian Kuna (HRK)" data-tokens="Croatian Kuna HRK">HRK</option>
      <option data-content="<img src='img/cryptologo/huf.png' width='30px;'/> Hungarian Forint (HUF)" data-tokens="Hungarian Forint HUF">HUF</option>
      <option data-content="<img src='img/cryptologo/idr.png' width='30px;'/> Indonesian Rupiah (IDR)" data-tokens="Indonesian Rupiah IDR">IDR</option>
      <option data-content="<img src='img/cryptologo/ils.png' width='30px;'/> Israeli Shekel (ILS)" data-tokens="Israeli Shekel ILS">ILS</option>
      <option data-content="<img src='img/cryptologo/inr.png' width='30px;'/> Indian Rupee (INR)" data-tokens="Indian Rupee INR">INR</option>
      <option data-content="<img src='img/cryptologo/jpy.png' width='30px;'/> Japanese Yen (JPY)" data-tokens="Japanese Yen JPY">JPY</option>
      <option data-content="<img src='img/cryptologo/krw.png' width='30px;'/> South Korean Won (KRW)" data-tokens="South Korean Won KRW">KRW</option>
      <option data-content="<img src='img/cryptologo/mxn.png' width='30px;'/> Mexican Peso (MXN)" data-tokens="Mexican Peso MXN">MXN</option>
      <option data-content="<img src='img/cryptologo/myr.png' width='30px;'/> Malaysian Ringgit (MYR)" data-tokens="Malaysian Ringgit MYR">MYR</option>
      <option data-content="<img src='img/cryptologo/nok.png' width='30px;'/> Norwegian Krone (NOK)" data-tokens="Norwegian Krone NOK">NOK</option>
      <option data-content="<img src='img/cryptologo/nzd.png' width='30px;'/> New Zealand Dollar (NZD)" data-tokens="New Zealand Dollar NZD">NZD</option>
      <option data-content="<img src='img/cryptologo/php.png' width='30px;'/> Philippine Peso (PHP)" data-tokens="Philippine Peso PHP">PHP</option>
      <option data-content="<img src='img/cryptologo/pln.png' width='30px;'/> Polish Zloty (PLN)" data-tokens="Polish Zloty PLN">PLN</option>
      <option data-content="<img src='img/cryptologo/brl.png' width='30px;'/> Brazilian Real (BRL)" data-tokens="Brazilian Real BRL">BRL</option>
      <option data-content="<img src='img/cryptologo/ron.png' width='30px;'/> Romanian Leu (RON)" data-tokens="Romanian Leu RON">RON</option>
      <option data-content="<img src='img/cryptologo/rub.png' width='30px;'/> Russian Ruble (RUB)" data-tokens="Russian Ruble RUB">RUB</option>
      <option data-content="<img src='img/cryptologo/sek.png' width='30px;'/> Swedish Krona (SEK)" data-tokens="Swedish Krona SEK">SEK</option>
      <option data-content="<img src='img/cryptologo/sgd.png' width='30px;'/> Singapore Dollar (SGD)" data-tokens="Singapore Dollar SGD">SGD</option>
      <option data-content="<img src='img/cryptologo/thb.png' width='30px;'/> Thai Baht (THB)" data-tokens="Thai Baht THB">THB</option>
      <option data-content="<img src='img/cryptologo/try.png' width='30px;'/> Turkish Lira (TRY)" data-tokens="Turkish Lira TRY">TRY</option>
      <option data-content="<img src='img/cryptologo/usd.png' width='30px;'/> US Dollar (USD)" data-tokens="US Dollar USD">USD</option>
      <option data-content="<img src='img/cryptologo/zar.png' width='30px;'/> South African Rand (ZAR)" data-tokens="South African Rand ZAR">ZAR</option>
    </optgroup>
*/

$('.trading_pair_coin').html(coin_select_options);
$('.trading_pair_coin2').html(coin_select_options);

$('.addcoin_startup_select').html(coin_select_options);


$('.sell_coin').html(coin_select_options);
$('.buy_coin').html(coin_select_options);

$('.sell_coin_p').html(coin_select_options);
$('.buy_coin_p').html(coin_select_options);
