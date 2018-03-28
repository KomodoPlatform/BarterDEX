!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.Datafeeds={})}(this,function(e){"use strict";var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};var r=!1;function s(e){if(r){var t=new Date;console.log(t.toLocaleTimeString()+"."+t.getMilliseconds()+"> "+e)}}function o(e){return void 0===e?"":"string"==typeof e?e:e.message}var i=function(){function e(e,t){this._datafeedUrl=e,this._requester=t}return e.prototype.getBars=function(e,t,r,s){var i=this,n={symbol:e.ticker||"",resolution:t,from:r,to:s};return new Promise(function(e,t){i._requester.sendRequest(i._datafeedUrl,"history",n).then(function(r){if("ok"===r.s||"no_data"===r.s){var s=[],o={noData:!1};if("no_data"===r.s)o.noData=!0,o.nextTime=r.nextTime;else for(var i=void 0!==r.v,n=void 0!==r.o,a=0;a<r.t.length;++a){var u={time:1e3*r.t[a],close:Number(r.c[a]),open:Number(r.c[a]),high:Number(r.c[a]),low:Number(r.c[a])};n&&(u.open=Number(r.o[a]),u.high=Number(r.h[a]),u.low=Number(r.l[a])),i&&(u.volume=Number(r.v[a])),s.push(u)}e({bars:s,meta:o})}else t(r.errmsg)}).catch(function(e){var r=o(e);console.warn("HistoryProvider: getBars() failed, error="+r),t(r)})})},e}(),n=function(){function e(e,t){this._subscribers={},this._requestsPending=0,this._historyProvider=e,setInterval(this._updateData.bind(this),t)}return e.prototype.subscribeBars=function(e,t,r,o){this._subscribers.hasOwnProperty(o)?s("DataPulseProvider: already has subscriber with id="+o):(this._subscribers[o]={lastBarTime:null,listener:r,resolution:t,symbolInfo:e},s("DataPulseProvider: subscribed for #"+o+" - {"+e.name+", "+t+"}"))},e.prototype.unsubscribeBars=function(e){delete this._subscribers[e],s("DataPulseProvider: unsubscribed for #"+e)},e.prototype._updateData=function(){var e=this;if(!(this._requestsPending>0)){this._requestsPending=0;var t=function(t){r._requestsPending+=1,r._updateDataForSubscriber(t).then(function(){e._requestsPending-=1,s("DataPulseProvider: data for #"+t+" updated successfully, pending="+e._requestsPending)}).catch(function(r){e._requestsPending-=1,s("DataPulseProvider: data for #"+t+" updated with error="+o(r)+", pending="+e._requestsPending)})},r=this;for(var i in this._subscribers)t(i)}},e.prototype._updateDataForSubscriber=function(e){var t=this,r=this._subscribers[e],s=parseInt((Date.now()/1e3).toString()),o=s-function(e,t){var r=0;r="D"===e?t:"M"===e?31*t:"W"===e?7*t:t*parseInt(e)/1440;return 24*r*60*60}(r.resolution,10);return this._historyProvider.getBars(r.symbolInfo,r.resolution,o,s).then(function(r){t._onSubscriberDataReceived(e,r)})},e.prototype._onSubscriberDataReceived=function(e,t){if(this._subscribers.hasOwnProperty(e)){var r=t.bars;if(0!==r.length){var o=r[r.length-1],i=this._subscribers[e];if(!(null!==i.lastBarTime&&o.time<i.lastBarTime)){if(null!==i.lastBarTime&&o.time>i.lastBarTime){if(r.length<2)throw new Error("Not enough bars in history for proper pulse update. Need at least 2.");var n=r[r.length-2];i.listener(n)}i.lastBarTime=o.time,i.listener(o)}}}else s("DataPulseProvider: Data comes for already unsubscribed subscription #"+e)},e}();var a=function(){function e(e){this._subscribers={},this._requestsPending=0,this._quotesProvider=e,setInterval(this._updateQuotes.bind(this,1),1e4),setInterval(this._updateQuotes.bind(this,0),6e4)}return e.prototype.subscribeQuotes=function(e,t,r,o){this._subscribers[o]={symbols:e,fastSymbols:t,listener:r},s("QuotesPulseProvider: subscribed quotes with #"+o)},e.prototype.unsubscribeQuotes=function(e){delete this._subscribers[e],s("QuotesPulseProvider: unsubscribed quotes with #"+e)},e.prototype._updateQuotes=function(e){var t=this;if(!(this._requestsPending>0)){var r=function(r){i._requestsPending++;var n=i._subscribers[r];i._quotesProvider.getQuotes(1===e?n.fastSymbols:n.symbols).then(function(o){t._requestsPending--,t._subscribers.hasOwnProperty(r)&&(n.listener(o),s("QuotesPulseProvider: data for #"+r+" ("+e+") updated successfully, pending="+t._requestsPending))}).catch(function(i){t._requestsPending--,s("QuotesPulseProvider: data for #"+r+" ("+e+") updated with error="+o(i)+", pending="+t._requestsPending)})},i=this;for(var n in this._subscribers)r(n)}},e}();function u(e,t,r){var s=e[t];return Array.isArray(s)?s[r]:s}var c=function(){function e(e,t,r){this._exchangesList=["NYSE","FOREX","AMEX"],this._symbolsInfo={},this._symbolsList=[],this._datafeedUrl=e,this._datafeedSupportedResolutions=t,this._requester=r,this._readyPromise=this._init(),this._readyPromise.catch(function(e){console.error("SymbolsStorage: Cannot init, error="+e.toString())})}return e.prototype.resolveSymbol=function(e){var t=this;return this._readyPromise.then(function(){var r=t._symbolsInfo[e];return void 0===r?Promise.reject("invalid symbol"):Promise.resolve(r)})},e.prototype.searchSymbols=function(e,t,r,s){var o=this;return this._readyPromise.then(function(){var i=[],n=0===e.length;e=e.toUpperCase();for(var a=function(s){var a=o._symbolsInfo[s];if(void 0===a)return"continue";if(r.length>0&&a.type!==r)return"continue";if(t&&t.length>0&&a.exchange!==t)return"continue";var u=a.name.toUpperCase().indexOf(e),c=a.description.toUpperCase().indexOf(e);if((n||u>=0||c>=0)&&!i.some(function(e){return e.symbolInfo===a})){var l=u>=0?u:8e3+c;i.push({symbolInfo:a,weight:l})}},u=0,c=o._symbolsList;u<c.length;u++){a(c[u])}var l=i.sort(function(e,t){return e.weight-t.weight}).slice(0,s).map(function(e){var t=e.symbolInfo;return{symbol:t.name,full_name:t.full_name,description:t.description,exchange:t.exchange,params:[],type:t.type,ticker:t.name}});return Promise.resolve(l)})},e.prototype._init=function(){for(var e=this,t=[],r={},o=0,i=this._exchangesList;o<i.length;o++){var n=i[o];r[n]||(r[n]=!0,t.push(this._requestExchangeData(n)))}return Promise.all(t).then(function(){e._symbolsList.sort(),s("SymbolsStorage: All exchanges data loaded")})},e.prototype._requestExchangeData=function(e){var t=this;return new Promise(function(r,i){t._requester.sendRequest(t._datafeedUrl,"symbol_info",{group:e}).then(function(s){try{t._onExchangeDataReceived(e,s)}catch(e){return void i(e)}r()}).catch(function(t){s("SymbolsStorage: Request data for exchange '"+e+"' failed, reason="+o(t)),r()})})},e.prototype._onExchangeDataReceived=function(e,t){var r=this,s=0;try{for(var o=t.symbol.length,i=void 0!==t.ticker;s<o;++s){var n=t.symbol[s],a=u(t,"exchange-listed",s),c=u(t,"exchange-traded",s),h=c+":"+n,f=i?u(t,"ticker",s):n,d={ticker:f,name:n,base_name:[a+":"+n],full_name:h,listed_exchange:a,exchange:c,description:u(t,"description",s),has_intraday:l(u(t,"has-intraday",s),!1),has_no_volume:l(u(t,"has-no-volume",s),!1),minmov:u(t,"minmovement",s)||u(t,"minmov",s)||0,minmove2:u(t,"minmove2",s)||u(t,"minmov2",s),fractional:u(t,"fractional",s),pricescale:u(t,"pricescale",s),type:u(t,"type",s),session:u(t,"session-regular",s),timezone:u(t,"timezone",s),supported_resolutions:l(u(t,"supported-resolutions",s),r._datafeedSupportedResolutions),force_session_rebuild:u(t,"force-session-rebuild",s),has_daily:l(u(t,"has-daily",s),!0),intraday_multipliers:l(u(t,"intraday-multipliers",s),["1","5","15","30","60"]),has_weekly_and_monthly:u(t,"has-weekly-and-monthly",s),has_empty_bars:u(t,"has-empty-bars",s),volume_precision:l(u(t,"volume-precision",s),0)};r._symbolsInfo[f]=d,r._symbolsInfo[n]=d,r._symbolsInfo[h]=d,r._symbolsList.push(n)}}catch(r){throw new Error("SymbolsStorage: API error when processing exchange "+e+" symbol #"+s+" ("+t.symbol[s]+"): "+r.message)}},e}();function l(e,t){return void 0!==e?e:t}function h(e,t,r){var s=e[t];return Array.isArray(s)?s[r]:s}var f=function(){function e(e,t,r,s){void 0===s&&(s=1e4);var o=this;this._configuration={supports_search:!1,supports_group_request:!0,supported_resolutions:["1","5","15","30","60","1D","1W","1M"],supports_marks:!1,supports_timescale_marks:!1},this._symbolsStorage=null,this._datafeedURL=e,this._requester=r,this._historyProvider=new i(e,this._requester),this._quotesProvider=t,this._dataPulseProvider=new n(this._historyProvider,s),this._quotesPulseProvider=new a(this._quotesProvider),this._configurationReadyPromise=this._requestConfiguration().then(function(e){null===e&&(e={supports_search:!1,supports_group_request:!0,supported_resolutions:["1","5","15","30","60","1D","1W","1M"],supports_marks:!1,supports_timescale_marks:!1}),o._setupWithConfiguration(e)})}return e.prototype.onReady=function(e){var t=this;this._configurationReadyPromise.then(function(){e(t._configuration)})},e.prototype.getQuotes=function(e,t,r){this._quotesProvider.getQuotes(e).then(t).catch(r)},e.prototype.subscribeQuotes=function(e,t,r,s){this._quotesPulseProvider.subscribeQuotes(e,t,r,s)},e.prototype.unsubscribeQuotes=function(e){this._quotesPulseProvider.unsubscribeQuotes(e)},e.prototype.calculateHistoryDepth=function(e,t,r){},e.prototype.getMarks=function(e,t,r,i,n){if(this._configuration.supports_marks){var a={symbol:e.ticker||"",from:t,to:r,resolution:n};this._send("marks",a).then(function(e){if(!Array.isArray(e)){for(var t=[],r=0;r<e.id.length;++r)t.push({id:h(e,"id",r),time:h(e,"time",r),color:h(e,"color",r),text:h(e,"text",r),label:h(e,"label",r),labelFontColor:h(e,"labelFontColor",r),minSize:h(e,"minSize",r)});e=t}i(e)}).catch(function(e){s("UdfCompatibleDatafeed: Request marks failed: "+o(e)),i([])})}},e.prototype.getTimescaleMarks=function(e,t,r,i,n){if(this._configuration.supports_timescale_marks){var a={symbol:e.ticker||"",from:t,to:r,resolution:n};this._send("timescale_marks",a).then(function(e){if(!Array.isArray(e)){for(var t=[],r=0;r<e.id.length;++r)t.push({id:h(e,"id",r),time:h(e,"time",r),color:h(e,"color",r),label:h(e,"label",r),tooltip:h(e,"tooltip",r)});e=t}i(e)}).catch(function(e){s("UdfCompatibleDatafeed: Request timescale marks failed: "+o(e)),i([])})}},e.prototype.getServerTime=function(e){this._configuration.supports_time&&this._send("time").then(function(t){var r=parseInt(t);isNaN(r)||e(r)}).catch(function(e){s("UdfCompatibleDatafeed: Fail to load server time, error="+o(e))})},e.prototype.searchSymbols=function(e,t,r,i){if(this._configuration.supports_search){var n={limit:30,query:e.toUpperCase(),type:r,exchange:t};this._send("search",n).then(function(e){if(void 0!==e.s)return s("UdfCompatibleDatafeed: search symbols error="+e.errmsg),void i([]);i(e)}).catch(function(t){s("UdfCompatibleDatafeed: Search symbols for '"+e+"' failed. Error="+o(t)),i([])})}else{if(null===this._symbolsStorage)throw new Error("UdfCompatibleDatafeed: inconsistent configuration (symbols storage)");this._symbolsStorage.searchSymbols(e,t,r,30).then(i).catch(i.bind(null,[]))}},e.prototype.resolveSymbol=function(e,t,r){s("Resolve requested");var i=Date.now();function n(e){s("Symbol resolved: "+(Date.now()-i)+"ms"),t(e)}if(this._configuration.supports_group_request){if(null===this._symbolsStorage)throw new Error("UdfCompatibleDatafeed: inconsistent configuration (symbols storage)");this._symbolsStorage.resolveSymbol(e).then(n).catch(r)}else{var a={symbol:e};this._send("symbols",a).then(function(e){void 0!==e.s?r("unknown_symbol"):n(e)}).catch(function(e){s("UdfCompatibleDatafeed: Error resolving symbol: "+o(e)),r("unknown_symbol")})}},e.prototype.getBars=function(e,t,r,s,o,i){this._historyProvider.getBars(e,t,r,s).then(function(e){o(e.bars,e.meta)}).catch(i)},e.prototype.subscribeBars=function(e,t,r,s,o){this._dataPulseProvider.subscribeBars(e,t,r,s)},e.prototype.unsubscribeBars=function(e){this._dataPulseProvider.unsubscribeBars(e)},e.prototype._requestConfiguration=function(){return this._send("config").catch(function(e){return s("UdfCompatibleDatafeed: Cannot get datafeed configuration - use default, error="+o(e)),null})},e.prototype._send=function(e,t){return this._requester.sendRequest(this._datafeedURL,e,t)},e.prototype._setupWithConfiguration=function(e){if(this._configuration=e,void 0===e.exchanges&&(e.exchanges=[]),!e.supports_search&&!e.supports_group_request)throw new Error("Unsupported datafeed configuration. Must either support search, or support group request");!e.supports_group_request&&e.supports_search||(this._symbolsStorage=new c(this._datafeedURL,e.supported_resolutions||[],this._requester)),s("UdfCompatibleDatafeed: Initialized with "+JSON.stringify(e))},e}();var d=function(){function e(e,t){this._datafeedUrl=e,this._requester=t}return e.prototype.getQuotes=function(e){var t=this;return new Promise(function(r,i){t._requester.sendRequest(t._datafeedUrl,"quotes",{symbols:e}).then(function(e){"ok"===e.s?r(e.d):i(e.errmsg)}).catch(function(e){var t=o(e);s("QuotesProvider: getQuotes failed, error="+t),i("network error: "+t)})})},e}(),p=function(){function e(e){e&&(this._headers=e)}return e.prototype.sendRequest=function(e,t,r){if(void 0!==r){var o=Object.keys(r);0!==o.length&&(t+="?"),t+=o.map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(r[e].toString())}).join("&")}s("New request: "+t);var i={credentials:"same-origin"};return void 0!==this._headers&&(i.headers=this._headers),fetch(e+"/"+t,i).then(function(e){return e.text()}).then(function(e){return JSON.parse(e)})},e}(),_=function(e){function r(t,r){void 0===r&&(r=1e4);var s=new p,o=new d(t,s);return e.call(this,t,o,s,r)||this}return function(e,r){function s(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(s.prototype=r.prototype,new s)}(r,e),r}(f);e.UDFCompatibleDatafeed=_,Object.defineProperty(e,"__esModule",{value:!0})});
