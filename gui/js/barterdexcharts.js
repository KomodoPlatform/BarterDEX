$(function() {

});
function getParameterByName(name) {
     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
 return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function doTradingView(tradingPair) {
if(!tradingPair){
	//tradingPair = "BTC-KMD";
}
console.log("**********DO TRADINGVIEW");
				var widget = $(window).tvWidget = new TradingView.widget({
					 debug: true, // uncomment this line to see Library errors and warnings in the console
					fullscreen: false,
					width: 850,
					height: 500,
					symbol: tradingPair,
					interval: 'D',
					container_id: "tv_chart_container",
					//	BEWARE: no trailing slash is expected in feed URL
					datafeed: new Datafeeds.UDFCompatibleDatafeed("http://192.99.71.59:8888"),
					library_path: "charting_library/",
					locale: getParameterByName('lang') || "en",
					//	Regression Trend-related functionality is not implemented yet, so it's hidden for a while
					drawings_access: { type: 'black', tools: [ { name: "Regression Trend" } ] },
					disabled_features: ["use_localstorage_for_settings", "header_symbol_search", "header_screenshot"],
					enabled_features: ["study_templates"],
					charts_storage_url: 'http://saveload.tradingview.com',
                    charts_storage_api_version: "1.1",
					client_id: 'tradingview.com',
					user_id: 'public_user_id',
					loading_screen: { backgroundColor: "#000000" },
					toolbar_bg: '#000000',
					overrides: {
						"paneProperties.background": "#000000",
                        "paneProperties.vertGridProperties.color": "#454545",
                        "paneProperties.horzGridProperties.color": "#454545",
						"symbolWatermarkProperties.transparency": 90,
						"scalesProperties.textColor" : "#AAA"
					}
				});
			console.log("**********DO TRADINGVIEW END");
}