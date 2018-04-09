/*
 * Copyright Modulus Financial Engineering, Inc. Scottsdale, AZ http://www.modulusfe.com
 */

var gChart;

$(function() {
    "use strict";

    var isDebugMode = window.location.port === '63342';
    var isFullWindowMode = isDebugMode || ((StockChartX.Environment.isMobile && $(window).width() < 768) || StockChartX.Environment.isPhone);

    var symbolsFilePath = StockChartX.Environment.isMobile ? "data/symbols.mobile.json" : "data/symbols.json";
    $.get(symbolsFilePath, function(symbols) {
        StockChartX.getAllInstruments = function() { return symbols; }
    });

    gChart = $('#chartContainer').StockChartX({
        width: 768,
        height: 460,
        fullWindowMode: isFullWindowMode,
        onToolbarLoaded: function() {
            if (window.innerHeight < gChart.size.height) {
                gChart.size = {
                    width  : gChart.size.width,
                    height : window.innerHeight
                };
                gChart.update();
            }

            if ((StockChartX.Environment.isMobile && $(window).width() < 768) || StockChartX.Environment.isPhone) {
                var jToolbar = gChart.container.find('.scxToolbar');
                jToolbar.find('.scxToolbarViewMode').remove();
                var jLastChild = jToolbar.children().last();
                jLastChild.hasClass('scxToolbar-delimiter') && jLastChild.remove();
            }
        }
    });

    if (!StockChartX.Environment.isPhone) {
        var myIndicator = new MyCustomMACD();
        gChart.addIndicators([myIndicator, TASdk.RelativeStrengthIndex, TASdk.BollingerBands]);
    }

    var ind = gChart.addIndicators(StockChartX.VolumeIndicator);
    ind.setParameterValue(StockChartX.IndicatorParam.LINE_WIDTH, 5);
    //ind.chartPanel.setHeightRatio(50/gChart.size.height);

    gChart.on(StockChartX.ChartEvent.SYMBOL_ENTERED, function(event) {
        // TODO: Load data for the new symbol
        gChart.showWaitingBar();
        gChart.instrument = event.value;
        setTimeout(function(){
            gChart.update();
            gChart.hideWaitingBar();
        }, 2000);
    });
    gChart.on(StockChartX.ChartEvent.TIME_FRAME_CHANGED, function(event) {
        // TODO: Process time frame change
        console.log(event.value.interval + ' ' + event.value.periodicity);
    });
    gChart.on(StockChartX.ChartEvent.MORE_HISTORY_REQUESTED, function() {
        console.log("TODO: Load more history!");
    });


    gChart.showWaitingBar();

    var dataFilePath = StockChartX.Environment.isMobile ? "data/aapl-1day.mobile.csv" : "data/aapl-1day.csv";
    $.get(dataFilePath, function(data) {
        parseBars(data, false);
        //simulateData();
        gChart.instrument = {
            symbol: "GOOG",
            company: "Google Inc.",
            exchange: "NASDAQ"
        };
        gChart.timeInterval = StockChartX.TimeSpan.MILLISECONDS_IN_DAY;
        gChart.setNeedsAutoScaleAll();

//        gChart.mainPanel.addDrawings(new StockChartX.LineSegmentDrawing({
//            locked: false,
//            points: [
//                {
//                    date: gChart.findDataSeries(StockChartX.DATE_DATA_SERIES_SUFFIX).values[100],
//                    y: 100
//                },
//                {
//                    date: gChart.findDataSeries(StockChartX.DATE_DATA_SERIES_SUFFIX).values[200],
//                    y: 200
//                }
//            ]
//        }));
//        gChart.mainPanel.addDrawings(new StockChartX.TextDrawing({
//            points: [{
//                date: gChart.findDataSeries(StockChartX.DATE_DATA_SERIES_SUFFIX).values[100],
//                y: 100
//            }],
//            text: 'Some text'
//        }));
        //gChart.startUserDrawing(new StockChartX.TextDrawing());
        
        gChart.update();


        if (!StockChartX.Environment.isPhone) {
            // test
            var scale1 = gChart.addValueScale();
            scale1.leftPanelVisible = true;
            scale1.rightPanelVisible = false;

            var scale2 = gChart.addValueScale();

            gChart.indicators[2].valueScale = scale1;
            gChart.indicators[1].valueScale = scale2;
        }

        gChart.updateIndicators();
        gChart.setNeedsAutoScale();
        gChart.update();

        !StockChartX.Environment.isMobile && gChart.recordRange(1000);
//        gChart.dateScale.customFormat = "HH:mm:ss";
        gChart.update();
        gChart.hideWaitingBar();

    }).fail(function() {
        gChart.hideWaitingBar();
        alert('Unable to load data file.');
    });

    function parseBars(data, isIntraday) {
        var dataSeries = gChart.barDataSeries();

        var lines = data.split("\n");
        lines.reverse();
        $.each(lines, function(index, line) {
            var values = line.split(","),
                date = moment(values[0], "D-MMM-YY").toDate();

            dataSeries.date.add(date);
            dataSeries.open.add(parseFloat(values[1]));
            dataSeries.high.add(parseFloat(values[2]));
            dataSeries.low.add(parseFloat(values[3]));
            dataSeries.close.add(parseFloat(values[4]));
            dataSeries.volume.add(parseInt(values[5], 10));
        });
        gChart.updateComputedDataSeries();
    }

    function simulateData() {
        var dataSeries = gChart.barDataSeries(),
            ms = dataSeries.date.lastValue.getTime();

        for (var i = 0; i < 1000000; i++) {
            ms += 60 * 1000;

            dataSeries.date.add(new Date(ms));
            dataSeries.open.add(dataSeries.open.valueAtIndex(i));
            dataSeries.high.add(dataSeries.high.valueAtIndex(i));
            dataSeries.low.add(dataSeries.low.valueAtIndex(i));
            dataSeries.close.add(dataSeries.close.valueAtIndex(i));
            dataSeries.volume.add(dataSeries.volume.valueAtIndex(i));
        }
    }
});
