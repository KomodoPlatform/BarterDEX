var IndicatorsHelp_html = `
<div id="indicator-help" title="Technical Analysis Help" style="display: none">

<div id="scxIndicatorTooltip_id0" style="display: none;">
    <h1>Simple Moving Average</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Simple Moving Average is simply an average of values over a specified period of time.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>A Moving Average is most often used to average values for a smoother representation of the underlying price or indicator.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Moving_average" target="_blank">Wikipedia - Moving Averages</a></center>
</div>

<div id="scxIndicatorTooltip_id1" style="display: none;">
    <h1>Exponential Moving Average</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Exponential Moving Average is a type of Moving Average that applies more weight to recent values by adding a small percentage of the current value to the previous value.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>A Moving Average is most often used to average values for a smoother representation of the underlying price or indicator.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Moving_average" target="_blank">Wikipedia - Moving Averages</a></center>
</div>

<div id="scxIndicatorTooltip_id2" style="display: none;">
    <h1>Time Series Moving Average</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Time Series Moving Averages are very different from other types of Moving Averages.</p>
    <p>The calculation is derived from linear regression forecasts instead of actual data values.</p>
    <p>For that reason, the Time Series Moving Average can be much greater than or less than the underlying data if the linear regression trend has been increasing or decreasing.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Time Series Moving Average can be used like any other Moving Average, to obtain a smoother representation of the underlying data.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Moving_average" target="_blank">Wikipedia - Moving Averages</a> and <a href="http://en.wikipedia.org/wiki/Linear_regression" target="_blank">Wikipedia - Linear Regression</a></center>
</div>

<div id="scxIndicatorTooltip_id4" style="display: none;">
    <h1>Variable Moving Average</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Variable Moving Average is similar to an Exponential Moving Average with the added benefit of being able to adjust to market volatility. For this reason, the Variable Moving Average may be useful in sideways moving markets.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Variable Moving Average can be used like any other Moving Average, to obtain a smoother representation of the underlying data.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Moving_average" target="_blank">Wikipedia - Moving Averages</a></center>
</div>

<div id="scxIndicatorTooltip_id3" style="display: none;">
    <h1>Triangular Moving Average</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Triangular Moving Average is similar to the Simple Moving Average in that it averages the underlying data over a specified number of previous values.</p>
    <p>However, the Triangular Moving Average differs in that it is calculated and averaged n-times. The actual formula is TMA = (SMA1 + SMA2 + SMA3 + SMA4 + ... SMAn) / n.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Triangular Moving Average can be used like any other Moving Average, to obtain a smoother representation of the underlying data. It is important to note that the Triangular Moving Average is typically much smoother than other moving averages.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Moving_average" target="_blank">Wikipedia - Moving Averages</a></center>
</div>

<div id="scxIndicatorTooltip_id7" style="display: none;">
    <h1>Weighted Moving Average</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Weighted Moving Average is a type of Moving Average that assigns more weight to the most recent data points. The formula is P0 + &#945;P1 + &#945;2P2 + &#945;3P3 + &#8901;&#8901;&#8901; + &#945;nPn + &#8901;&#8901;&#8901;</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Weighted Moving Average can be used like any other Moving Average, to obtain a smoother representation of the underlying data. It is thought that the Weighted Moving Average provides a better representation of market volatility than the Simple and Exponential Moving Averages.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Moving_average" target="_blank">Wikipedia - Moving Averages</a></center>
</div>

<div id="scxIndicatorTooltip_id5" style="display: none;">
    <h1>VIDYA</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Volatility Index Dynamic Average (VIDYA) indicator is a type of Moving Average derived from the coefficient of determination.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>VIDYA can be used like any other Moving Average, to obtain a smoother representation of the underlying data. Because VIDYA is a derivative of linear regression, it quickly adapts to volatility.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods<br>
    R2 Scale - R2 scale to use in the linear regression calculation.</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Moving_average" target="_blank">Wikipedia - Moving Averages</a></center>
</div>

<div id="scxIndicatorTooltip_id6" style="display: none;">
    <h1>Welles Wilder Smoothing</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Developed by J. Welles Wilder, Jr. this indicator is similar to the Exponential Moving Average. It is rather slow to reflect changes in the underlying data when compared with other Moving Averages. This indicator is also used as the basis of Wilder's Relative Strength Index.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Welles Wilder Smoothing can be used like a Moving Average, to obtain a smoother representation of the underlying data.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Moving_average" target="_blank">Wikipedia - Moving Averages</a> and <a href="http://en.wikipedia.org/wiki/Average_Directional_Index" target="_blank">Wikipedia - Average Directional Index</a></center>
</div>

<div id="scxIndicatorTooltip_id41" style="display: none;">
    <h1>High Minus Low</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The High Minus Low indicator is quite simply a running index of the high price minus the low price.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>This indicator can be used to obtain a view of price volatility.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source</p>
</div>

<div id="scxIndicatorTooltip_id40" style="display: none;">
    <h1>Median Price</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Median Price is simply the running median of the high and low price data.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Median Price is often used as an alternative for viewing price action.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>None</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Median" target="_blank">Wikipedia - Median</a></center>
</div>

<div id="scxIndicatorTooltip_id37" style="display: none;">
    <h1>Typical Price</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Typical Price (also known as Pivot Points) is a running average of the high, low and close values.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Typical Price is often used as an alternative for viewing price action.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>None</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Typical_price" target="_blank">Wikipedia - Typical Price</a></center>
</div>

<div id="scxIndicatorTooltip_id35" style="display: none;">
    <h1>Weighted Close</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Weighted Close (also known as Weighted Pivot Points) is a running average of the high, low and close values.</p>
    <p>This indicator is similar to standard Pivot Points, except more weight is given to the most recent values in the underlying data.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Weighted Close is often used as an alternative for viewing price action.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>None</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Pivot_point" target="_blank">Wikipedia - Pivot Points</a></center>
</div>

<div id="scxIndicatorTooltip_id36" style="display: none;">
    <h1>Volume Rate of Change</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Volume Rate of Change is calculated by dividing the security's volume over the last n-periods by the total volume within the last n-periods window.</p>
    <p>If the volume from the current day is lower than n-periods ago, volume ROC trends lower. The actual formula is ((Volume - Volume n-periods ago ) / Volume n-periods ago) * 100</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Volume Rate of Change shows whether or not volume is trending up or down. This indicator is often used to confirm price breakouts.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Momentum_(technical_analysis)" target="_blank">Wikipedia - Momentum Analysis</a></center>
</div>

<div id="scxIndicatorTooltip_id39" style="display: none;">
    <h1>Price Rate of Change</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Price Rate of Change is calculated by dividing the security's price over the last n-periods by the total price within the last n-periods window.</p>
    <p>If the price from the current day is lower than n-periods ago, Price ROC trends lower. The actual formula is ((Close - Close n-periods ago ) / Close n-periods ago) * 100</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Price Rate of Change shows whether or not the security is trending up or down.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Momentum_(technical_analysis)" target="_blank">Wikipedia - Momentum Analysis</a></center>
</div>

<div id="scxIndicatorTooltip_id38" style="display: none;">
    <h1>Standard Deviation</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Standard deviation is a measure of variability used in statistics and probability theory. Standard Deviation is used in finance to show how much volatility exists in the underlying data.</p>
    <p>Low values indicate that the security's price is very close to the mean, whereas high values indicate that the price is more volatile than normal.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Major highs and lows often accompany extreme volatility. High values of standard deviations indicate that the price or indicator is more volatile than normal.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods<br>
    Standard Deviations<br>
    Moving Average Type</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Standard_deviation" target="_blank">Wikipedia - Standard Deviation</a></center>
</div>

<div id="scxIndicatorTooltip_id63" style="display: none;">
    <h1>Highest High Value</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Highest High Value is simply a running calculation of the highest high over the previous n-periods.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Highest High is most commonly used together with Lowest Low to identify support and resistance levels.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
</div>

<div id="scxIndicatorTooltip_id64" style="display: none;">
    <h1>Lowest Low Value</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Lowest Low Value is simply a running calculation of the lowest low over the previous n-periods.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Lowest Low is most commonly used together with Highest High to identify support and resistance levels.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
</div>

<div id="scxIndicatorTooltip_id27" style="display: none;">
    <h1>Linear Regression R2</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The coefficient of determination R2 measures the proportion of variability in the price data. R2 is simply the square of the sample correlation coefficient between the price and the predicted price.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>R2 is most often used to guage market volatility. High values indicate that the market is more volatile than normal while lower values indicate that the market is in a steady trend.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Linear_regression" target="_blank">Wikipedia - Linear Regression</a> and <a href="http://en.wikipedia.org/wiki/Coefficient_of_determination" target="_blank">Wikipedia - R2</a></center>
</div>

<div id="scxIndicatorTooltip_id28" style="display: none;">
    <h1>Linear Regression Forecast</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>In statistics, linear regression is an approach to modeling the relationship between a scalar variable y and one or more explanatory variables denoted X. Linear regression forecast shows how far prices deviate from their predicted targets.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Linear regression forecast can be used as a type of adaptive moving average.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Linear_regression" target="_blank">Wikipedia - Linear Regression</a></center>
</div>

<div id="scxIndicatorTooltip_id29" style="display: none;">
    <h1>Linear Regression Slope</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>In statistics, linear regression is an approach to modeling the relationship between a scalar variable y and one or more explanatory variables denoted X. The slope is b, and a is the intercept (the value of y when x = 0)</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Linear regression slope is often used as trend following indicator.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Linear_regression" target="_blank">Wikipedia - Linear Regression</a></center>
</div>

<div id="scxIndicatorTooltip_id30" style="display: none;">
    <h1>Linear Regression Intercept</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>In statistics, linear regression is an approach to modeling the relationship between a scalar variable y and one or more explanatory variables denoted X. The y intercept is the y value of the linear regression line when X equals zero.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Linear regression intercept can be used as a type of adaptive moving average.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Linear_regression" target="_blank">Wikipedia - Linear Regression</a></center>
</div>

<div id="scxIndicatorTooltip_id65" style="display: none;">
    <h1>Time Series Forecast</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>In statistics, linear regression is an approach to modeling the relationship between a scalar variable y and one or more explanatory variables denoted X. Linear regression forecast shows how far prices deviate from their predicted targets.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Time Series Forecast can be used as a type of adaptive moving average.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Linear_regression" target="_blank">Wikipedia - Linear Regression</a></center>
</div>

<div id="scxIndicatorTooltip_id42" style="display: none;">
    <h1>Bollinger Bands</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Bollinger Bands were invented by John Bollinger in the 1980s. Bollinger Bands measure a high and low trading range using a calculation based on standard deviation.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The interpretation of Bollinger Bands varies greatly among traders. The most common method is to buy when the price touches the lower band and to sell when the price touches the higher band.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods<br>
    Standard Deviations<br>
    Moving Average Type</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Bollinger_bands" target="_blank">Wikipedia - Bollinger Bands</a></center>
</div>

<div id="scxIndicatorTooltip_id45" style="display: none;">
    <h1>Moving Average Envelope</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Moving Average Envelopes are based on moving averages calculated from the underling price, shifted up and down by a fixed percentage.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>When prices rise above the upper band or fall below the lower band, a change in direction may occur when the price penetrates the band from the opposite direction.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods<br>
    Shift Percentage<br>
    Moving Average Type</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Moving_average" target="_blank">Wikipedia - Moving Average</a></center>
</div>

<div id="scxIndicatorTooltip_id44" style="display: none;">
    <h1>High Low Bands</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>High Low Bands consist of moving averages calculated from the underling price, shifted up and down by a fixed percentage of the median price.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>When prices rise above the upper band or fall below the lower band, a change in direction may occur when the price penetrates the band from the opposite direction.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Moving_average" target="_blank">Wikipedia - Moving Average</a></center>
</div>

<div id="scxIndicatorTooltip_id43" style="display: none;">
    <h1>Fractal Chaos Bands</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The chaotic nature of stock market movements explains why it is sometimes difficult to distinguish hourly charts from monthly charts if the time scale is not given.</p>
    <p>The patterns are similar regardless of the time resolution. Like the chambers of the nautilus, each level is like the one before it, but the size is different.</p>
    <p>Fractal Chaos Bands can be used to examine these patterns.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>When prices rise above the upper band or fall below the lower band, a change in direction may occur when the price penetrates the band from the opposite direction.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Fractals" target="_blank">Wikipedia - Fractals</a></center>
</div>

<div id="scxIndicatorTooltip_id60" style="display: none;">
    <h1>Prime Number Bands</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Prime Number Bands calculates the nearest prime number for the high and low prices.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>When prices rise above the upper band or fall below the lower band, a change in direction may occur when the price penetrates the band from the opposite direction.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>None</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Prime_number" target="_blank">Wikipedia - Prime Number</a></center>
</div>

<div id="scxIndicatorTooltip_id50" style="display: none;">
    <h1>Money Flow Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Money Flow Index is an oscillator indicator that ranges from 0 to 100. The calculation is based on a percentage of up and down days over an n-period sliding window.</p>
    <p>An "up" market day is where the close price of a security closes higher than the previous close and a "down" day is where the close price closes lower than the previous close.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>When values are over 80, the market is considered overbought. Conversely, when values are under 20, the market is considered oversold.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Money_flow_index" target="_blank">Wikipedia - Money Flow Index</a></center>
</div>

<div id="scxIndicatorTooltip_id55" style="display: none;">
    <h1>Trade Volume Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Trade Volume Index shows whether a security is being accumulated or distributed over period of time.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>When the indicator is rising, the security is said to be accumulating. Conversely, when the indicator is falling, the security is said to being distributing. Prices may reverse when the indicator converges with price.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Minimum Tick Value</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Money_flow_index" target="_blank">Wikipedia - Money Flow Index</a></center>
</div>

<div id="scxIndicatorTooltip_id46" style="display: none;">
    <h1>Swing Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Swing Index calculates the strength of a security by comparing the open, high, low and close prices with previous values.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Swing Index is a component of the Accumulation Swing Index, which provides an alternative view of price action.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Limit Move Value</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Swing_trading" target="_blank">Wikipedia - Swing Trading</a></center>
</div>

<div id="scxIndicatorTooltip_id47" style="display: none;">
    <h1>Accumulative Swing Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Accumulative Swing Index is a cumulative total of the Swing Index, which calculates the strength of a security by comparing the open, high, low and close prices with previous values.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Accumulative Swing Index may be analyzed using technical indicators, line studies, and chart patterns as an alternative view of price action.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Limit Move Value</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Swing_trading" target="_blank">Wikipedia - Swing Trading</a></center>
</div>

<div id="scxIndicatorTooltip_id54" style="display: none;">
    <h1>Relative Strength Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Relative Strength Index (RSI) is a technical indicator developed by J. Welles Wilder, which measures the velocity and magnitude of price movements within a security.</p>
    <p>RSI is computed as the ratio of higher closes to lower closes within an n-period sliding window.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The indicator is most often used with a 14-period setting. Values greater than 70 may indicate that the market is overbought, while values less than 30 may indicate that the market is oversold.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Relative_Strength_Index" target="_blank">Wikipedia - Relative Strength Index</a></center>
</div>

<div id="scxIndicatorTooltip_id48" style="display: none;">
    <h1>Comparative Relative Strength</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Comparative Relative Strength index is a computation between two input series. The values of one time series are divided by the other.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The first time series is said to be "out-performing" the second time series if the Comparative Relative Strength is trending upwards.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source 1<br>
    Source 2</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Relative_Strength_Index" target="_blank">Wikipedia - Relative Strength Index</a></center>
</div>

<div id="scxIndicatorTooltip_id31" style="display: none;">
    <h1>Price Volume Trend</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Price Volume Trend (sometimes referred to as Volume Price Trend) is a technical indicator that compares price to volume. Price Volume Trend is closely related to the On Balance Volume index.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Price Volume Trend generally precedes price movement. The theory is that well-informed investors are buying when the index rises and uninformed investors are buying when the index falls.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Volume%E2%80%93price_trend" target="_blank">Wikipedia - Price Volume Trend</a></center>
</div>

<div id="scxIndicatorTooltip_id53" style="display: none;">
    <h1>Positive Volume Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Positive Volume Index measures the price trend for periods where volume increases from the previous volume.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Positive Volume Index is based on the theory that uninformed investors buy when volume increases while informed investors buy when volume decreases.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source</p>
</div>

<div id="scxIndicatorTooltip_id51" style="display: none;">
    <h1>Negative Volume Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Negative Volume Index measures the price trend for periods where volume decreases from the previous volume.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Negative Volume Index is based on the theory that uninformed investors buy when volume increases while informed investors buy when volume decreases.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source</p>
</div>

<div id="scxIndicatorTooltip_id52" style="display: none;">
    <h1>On Balance Volume</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The On Balance Volume indicator is calculated based on a cumulative total of volume to show a relationship between price and volume.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>On Balance Volume is generally higher when prices are moving with the dominant trend and for this reason, the technical indicator is most often used to confirm a trend.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/On-balance_volume" target="_blank">Wikipedia - On Balance Volume</a></center>
</div>

<div id="scxIndicatorTooltip_id32" style="display: none;">
    <h1>Performance Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Performance Index calculates price performance as a normalized value or percentage over time.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>If the index shows 50, then the price of the security has increased 50 percent since the start of the calculation. Conversely, if the indictor shows -50, then the price of the security has decreased 50 percent since the start of the calculation.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source</p>
</div>

<div id="scxIndicatorTooltip_id49" style="display: none;">
    <h1>Mass Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Mass Index identifies price changes by indexing the narrowing and widening change between high and low prices.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>According to the inventor of the Mass Index, reversals may occur when a 25-period Mass Index rises above 27 or falls below 26.5.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
</div>

<div id="scxIndicatorTooltip_id34" style="display: none;">
    <h1>Chaikin Money Flow</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Chaikin Money Flow oscillator is a momentum indicator that identifies areas of buying and selling in the market by observing price in relation to volume.
    This indicator is based upon Chaikin Accumulation/Distribution, which is based upon the premise that if a stock closes above its midpoint [(high+low)/2] for the day then there was accumulation.
    Conversely, if it closes below its midpoint, then there was distribution.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>A value of 80 is generally considered overbought while a value of 20 oversold.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Money_flow_index" target="_blank">Wikipedia - Money Flow Index</a></center>
</div>

<div id="scxIndicatorTooltip_id33" style="display: none;">
    <h1>Commodity Channel Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The CCI was developed by Donald Lambert. The purpose of this indicator is to identify cyclical turns in commodities. The indicator is also frequently used with equities and currencies.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>This indicator oscillates between an overbought and oversold zone of +100 and -100 respectively.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Commodity_channel_index" target="_blank">Wikipedia - Commodity Channel Index</a></center>
</div>

<div id="scxIndicatorTooltip_id57" style="display: none;">
    <h1>Stochastic Momentum Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Stochastic Momentum Index, developed by William Blau, first appeared in the January 1993 issue of Stocks & Commodities magazine. This indicator plots the closeness relative to the midpoint of the recent high/low range.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Stochastic Momentum Index has two components: %K and %D. %K is most often displayed as a solid line and %D is often shown as a dotted line.</p>
    <p>The most widely used method for interpreting the Stochastic Momentum Index is to buy when either component rises above 40 or sell when either component falls below 40.</p>
    <p>Another method is to buy when %K rises above %D and sell when %K falls below %D.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>%K Periods<br>
    %K Smoothing<br>
    %K Double Smoothing<br>
    %D Periods<br>
    Moving Average Type<br>
    %D Moving Average Type</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Stochastic_oscillator" target="_blank">Wikipedia - Stochastic Indicator</a></center>
</div>

<div id="scxIndicatorTooltip_id61" style="display: none;">
    <h1>Historical Volatility</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Historical volatility is the log-normal standard deviation. Historical Volatility is based on the book by Don Fishback, "Odds: The Key to 90% Winners".</p>
    <p>Historical volatility outputs an n-period index ranging between 1 and 0. The formula is Stdev(Log(Close / Close Yesterday), 30) * Sqrt(365)</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Higher values indicate market volatility while lower values indicate calmness.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods<br>
    Standard Deviations<br>
    Bar History</p>
</div>

<div id="scxIndicatorTooltip_id23" style="display: none;">
    <h1>Chande Momentum Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Chande Momentum Oscillator (CMO) is an advanced momentum oscillator derived from linear regression.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Increasingly high values of CMO may indicate that prices are trending strongly upwards. Conversely, lower values may indicate that prices are trending strongly downwards. CMO is related to MACD and Price Rate of Change (ROC).</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
</div>

<div id="scxIndicatorTooltip_id18" style="display: none;">
    <h1>Momentum Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Momentum Oscillator calculates the change in price as a ratio over a specified length of time.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Increasingly high values may indicate that prices are trending strongly upwards. Conversely, lower values may indicate that prices are trending strongly downwards.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
</div>

<div id="scxIndicatorTooltip_id66" style="display: none;">
    <h1>TRIX</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>TRIX is a momentum oscillator that shows the rate of change of an exponentially averaged closing price.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The most common interpretation of the TRIX oscillator is to buy when the oscillator rises and sell when the oscillator falls.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/http://en.wikipedia.org/wiki/Trix_(technical_analysis)" target="_blank">Wikipedia - TRIX</a></center>
</div>

<div id="scxIndicatorTooltip_id11" style="display: none;">
    <h1>Vertical Horizontal Filter</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Vertical Horizontal Filter (VHF) identifies whether a market is in a trending or choppy movement phase.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>VHF is most commonly used as an indicator of market volatility. It is also used as a component in other technical indicators.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
</div>

<div id="scxIndicatorTooltip_id12" style="display: none;">
    <h1>Ultimate Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Ultimate Oscillator was developed by Larry Williams. The indicator is based buying and selling "pressure" represented by when a bar's closing price falls within the bar's true range.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The most popular interpretation of the Ultimate Oscillator is based on price and indicator divergence.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Cycle 1<br>
    Cycle 2<br>
    Cycle 3</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Ultimate_oscillator" target="_blank">Wikipedia - Ultimate Oscillator</a></center>
</div>

<div id="scxIndicatorTooltip_id8" style="display: none;">
    <h1>Williams %R</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Williams %R shows overbought and oversold levels by calculating the current closing price in relation to the high and low prices over the past n-periods.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The most widely used method for interpreting Williams %R is to buy when the indicator rises above 80 or sell when the indicator falls below 20.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Williams_%25R" target="_blank">Wikipedia - Williams %R</a></center>
</div>

<div id="scxIndicatorTooltip_id9" style="display: none;">
    <h1>Williams Accumulation Distribution</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Williams Accumulation Distribution shows a relationship of price and volume over time.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The security is said to be accumulating when the indicator is rising. Conversely, the security is said to be distributing when the indicator falls. Prices may reverse when the indicator converges with price.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Accumulation/distribution_index" target="_blank">Wikipedia - Accumulation Distribution</a></center>
</div>

<div id="scxIndicatorTooltip_id10" style="display: none;">
    <h1>Volume Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Volume Oscillator shows a spread of two different moving averages of volume over a specified period of time.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Volume Oscillator offers a clear view of whether or not volume is increasing or decreasing.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Short Term Periods<br>
    Long Term Periods<br>
    Points or Percent</p>
</div>

<div id="scxIndicatorTooltip_id24" style="display: none;">
    <h1>Chaikin Volatility</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Chaikin Volatility Oscillator is a moving average derivative of the Accumulation/Distribution index.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Chaikin Volatility Oscillator adjusts with respect to volatility, independent of long-term price action.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods<br>
    Rate of Change<br>
    Moving Average Type</p>
</div>

<div id="scxIndicatorTooltip_id56" style="display: none;">
    <h1>Stochastic Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Stochastic Oscillator is a popular indicator that shows where a security's price has closed in proportion to its closing price range over a specified period of time.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Stochastic Oscillator has two components: %K and %D. %K is most often displayed as a solid line and %D is often shown as a dotted line.</p>
    <p>The most widely used method for interpreting the Stochastic Oscillator is to buy when either component rises above 80 or sell when either component falls below 20.</p>
    <p>Another way to interpret the Stochastic Oscillator is to buy when %K rises above %D, and conversely, sell when %K falls below %D.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>%K Periods<br>
    %K Smoothing Periods<br>
    %D Periods<br>
    Moving Average Type</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Stochastic_oscillator" target="_blank">Wikipedia - Stochastic Oscillator</a></center>
</div>

<div id="scxIndicatorTooltip_id16" style="display: none;">
    <h1>Price Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Price Oscillator displays a spread between two moving averages.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Buying usually occurs when the oscillator rises and selling usually occurs when the oscillator falls.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Cycle 1<br>
    Cycle 2</p>
</div>

<div id="scxIndicatorTooltip_id19" style="display: none;">
    <h1>MACD</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The MACD is a moving average oscillator that shows potential overbought/oversold phases of market fluctuation. The calculation is based on two different moving averages of the price data.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Buy and sell signals are generated whenever MACD crosses a signal line, the zero mark line or when the MACD line diverges from price.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Signal Periods<br>
    Short Cycle<br>
    Long Cycle<br>
    Moving Average Type</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/MACD" target="_blank">Wikipedia - MACD</a></center>
</div>

<div id="scxIndicatorTooltip_id62" style="display: none;">
    <h1>MACD Histogram</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The MACD is a moving average oscillator that shows potential overbought/oversold phases of market fluctuation. The calculation is based on two different moving averages of the price data.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Buy and sell signals are generated whenever MACD crosses a signal line, the zero mark line or when the MACD line diverges from price.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Signal Periods<br>
    Short Cycle<br>
    Long Cycle<br>
    Moving Average Type</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/MACD" target="_blank">Wikipedia - MACD</a></center>
</div>

<div id="scxIndicatorTooltip_id20" style="display: none;">
    <h1>Ease Of Movement</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Ease of Movement oscillator shows a unique relationship between price change and volume.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Ease of Movement oscillator rises when prices are trending upwards under low volume and falls when prices are trending downwards under low volume.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods<br>
    Moving Average Type</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Ease_of_movement" target="_blank">Wikipedia - Ease Of Movment</a></center>
</div>

<div id="scxIndicatorTooltip_id22" style="display: none;">
    <h1>Detrended Price Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Detrened Price Oscillator is used when it is desirable to remove long-term trends or outliers from price data.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>This indicator is often used to supplement a standard price chart.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods<br>
    Moving Average Type</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Detrended_price_oscillator" target="_blank">Wikipedia - Detrended Price Oscillator</a></center>
</div>

<div id="scxIndicatorTooltip_id17" style="display: none;">
    <h1>Detrended Price Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Parabolic SAR was  developed by Welles Wilder. This indicator is always in the market (whenever a position is closed, an opposing position is taken).</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Parabolic SAR indicator is most often used to set trailing price stops. A stop and reversal (SAR) occurs when the price penetrates a Parabolic SAR level.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Min AF<br>
    Max AF</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Parabolic_SAR" target="_blank">Wikipedia - ParabolicSAR</a></center>
</div>

<div id="scxIndicatorTooltip_id21" style="display: none;">
    <h1>Directional Movement System</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Welles Wilder Directional Movement System is composed of ADX, DI+ and DI-. The indicators guage how much the market is trending, either up or down.</p>
    <p>The higher the ADX line, the more the market is trending and the more suitable it becomes for a trend-following system.</p>
    <p>DI+ represents a measure of uptrend strength and DI- represents a measure of downtrend strength.</p>
    <p>Detailed information about this indicator can be found in Welles Wilder's book, "New Concepts in Technical Trading Systems".</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>A buy signal is given when DI+ crosses over DI-, a sell signal is given when DI- crosses over DI+.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Average_Directional_Movement_Index" target="_blank">Wikipedia - Directional Movement System</a></center>
</div>

<div id="scxIndicatorTooltip_id13" style="display: none;">
    <h1>True Range</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>True Range is an indicator developed by Welles Wilder, which measures market volatility.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>High True Range values may signal market bottoms while low True Range values may signal neutral markets.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Average_True_Range" target="_blank">Wikipedia - Average True Range</a></center>
</div>

<div id="scxIndicatorTooltip_id14" style="display: none;">
    <h1>Average True Range</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Average True Range is an indicator developed by Welles Wilder, which measures market volatility.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>High Average True Range values may signal market bottoms while low Average True Range values may signal neutral markets.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Average_True_Range" target="_blank">Wikipedia - Average True Range</a></center>
</div>

<div id="scxIndicatorTooltip_id25" style="display: none;">
    <h1>Aroon</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Aroon indicator is used to help identify if a stock is trending or not.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Trends are determined by extreme values (above 80) of both lines (Aroon up and Aroon down), whereas unstable prices are determined when both lines are low (less than 20).</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
</div>

<div id="scxIndicatorTooltip_id26" style="display: none;">
    <h1>Aroon Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Aroon indicator is used to help identify if a stock is trending or not.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Trends are determined by extreme values (above 80) of both lines (Aroon up and Aroon down), whereas unstable prices are determined when both lines are low (less than 20).</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
</div>

<div id="scxIndicatorTooltip_id15" style="display: none;">
    <h1>Rainbow Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Rainbow Oscillator is based upon moving average of multiple time frames.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The trend may reverse when values rise above 80 or fall below 20.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Levels<br>
    Moving Average Type</p>
</div>

<div id="scxIndicatorTooltip_id58" style="display: none;">
    <h1>Fractal Chaos Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The chaotic nature of stock market movements explains why it is sometimes difficult to distinguish hourly charts from monthly charts if the time scale is not given.</p>
    <p>The patterns are similar regardless of the time resolution. Like the chambers of the nautilus, each level is like the one before it, but the size is different.</p>
    <p>The Fractal Chaos Oscillator can be used to examine these patterns.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Continuous zero values often indicate that the trend is about to reverse quickly and sharply.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
</div>

<div id="scxIndicatorTooltip_id59" style="display: none;">
    <h1>Prime Number Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>This indicator finds the nearest prime number from either the top or bottom of the series, and plots the difference between that prime number and the price data.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>This indicator can be used to spot market turning points. When the oscillator remains at the same high point for two consecutive periods in the positive range, consider selling. Conversely, when the oscillator remains at a low point for two consecutive periods in the negative range, consider buying.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>None</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Prime_number" target="_blank">Wikipedia - Prime Number</a></center>
</div>

<div id="scxIndicatorTooltip_id67" style="display: none;">
    <h1>Elder Ray</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Elder Ray indicator, developed in 1989 by Dr. Elder, measures bullish and bearish "power" by comparing the daily high and low to a moving average.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>A buy signal occurs when Bear Power is negative but moving upward and Bull Power has recently increased. Conversely, a sell signal occurs when Bull Power is positive but moving downward and Bear Power has recently decreased.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods<br>
    Moving Average Type</p>
</div>

<div id="scxIndicatorTooltip_id68" style="display: none;">
    <h1>Elder Force Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Elder Force Index is calculated by the change in price from the previous to the current day, multiplied by volume.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Buy signals are generated when the two-day EMA of the Elder Force Index is negative and sell signals are generated when it is positive.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>None</p>
</div>

<div id="scxIndicatorTooltip_id69" style="display: none;">
    <h1>Elder Thermometer</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Elder Thermometer indicator is described in Dr. Alexander Elder's book "Come into my trading room" on page 162.</p>
    <p>This indicator measures the "temperature" of the market, indicated by greater or lesser intraday ranges.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>"Cold" and "Hot" Elder Thermometer zones tend to precede major moves.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>None</p>
</div>

<div id="scxIndicatorTooltip_id70" style="display: none;">
    <h1>Ehler's Fisher Transform</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Ehler's Fisher Transform is an oscillator that is based on the principle that security prices do not have a Gaussian probability distribution function.</p>
    <p>The Fisher Transform makes the probability distribution function nearly Gaussian, creating turning points that are sharply peaked for easier identification of trend changes.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>A trigger line is typically plotted with Ehler's Fisher Transform. Buy and sell signals occur when the trigger line crosses over or under the indicator.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
</div>

<div id="scxIndicatorTooltip_id71" style="display: none;">
    <h1>Keltner Channel</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Keltner Channel is a volatility based moving average envelope that shifts a moving average of the True Range indicator by a certain percentage upwards and downwards.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Prices may reverse sharply after exiting and re-entering either the top or bottom band.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods<br>
    Shift Percentage<br>
    Moving Average Type</p>
</div>

<div id="scxIndicatorTooltip_id72" style="display: none;">
    <h1>Market Facilitation Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Market Facilitation Index, developed by Dr. Bill Williams, shows prices changes as they relate to volume. The formula is (High - Low) / Volume.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>When both the Market Facilitation Index and Volume increase at the same time, it can be said that market participants are becoming more interested.</p>
    <p>Likewise, when both the Market Facilitation Index and Volume decrease, it can be said that market participants are losing interest.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>None</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Market_facilitation_index" target="_blank">Wikipedia - Market Facilitation Index</a></center>
</div>

<div id="scxIndicatorTooltip_id73" style="display: none;">
    <h1>Schaff Trend Cycle</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Schaff Trend Cycle, by Doug Schaff, combines both Slow Stochastics and the Moving Average Convergence/Divergence (MACD).</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Schaff Trend Cycle is interpreted similar to MACD. Buy and sell signals are generated whenever the indicator crosses a signal line, the zero mark line or when the indicator diverges from price.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods<br>
    Short Cycle<br>
    Long Cycle<br>
    Moving Average Type</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/MACD" target="_blank">Wikipedia - MACD</a></center>
</div>

<div id="scxIndicatorTooltip_id74" style="display: none;">
    <h1>QStick</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>QStick was developed by Tushar Chande as a quantifier for candlestick charts. QStick shows the relationship of the open and close prices.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Positive values indicate that the majority of candlesticks have been white during the previous n-periods, while negative values indicate that the majority of candlesticks have been black.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods<br>
    Moving Average Type</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Candlestick_chart" target="_blank">Wikipedia - Candlestick Chart</a></center>
</div>

<div id="scxIndicatorTooltip_id75" style="display: none;">
    <h1>Stoller Average Range Channels</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Stoller Average Range Channels (STARC) is a volatility based channel system that shifts a moving average of the True Range indicator by a certain percentage upwards and downwards.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Prices may reverse sharply after exiting and re-entering either the top or bottom band.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods<br>
    Shift Percentage<br>
    Moving Average Type</p>
</div>

<div id="scxIndicatorTooltip_id76" style="display: none;">
    <h1>Center Of Gravity</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Center Of Gravity oscillator, by John Ehlers, shows a comparison of recent prices versus older prices within a sliding window.</p>
    <p>The prices can be thought of as being placed on two ends of a beam that is supported in the center. The oscillator represents the balance point or center of gravity on the beam.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Center of Gravity oscillator decreases when prices rise and increases when prices fall.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
</div>

<div id="scxIndicatorTooltip_id77" style="display: none;">
    <h1>Coppock Curve</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Coppock Curve, developed by Edwin Coppock and published in Barron's Magazine in 1962, is based on a 14-month and 11-month rate of change, smoothed by a 10-period weighted moving average.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The Coppock Curve generates buy signals when the value falls below zero and turns upwards from a low point.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source</p>
    <center>Also see <a href="http://en.wikipedia.org/wiki/Coppock_curve" target="_blank">Wikipedia - Coppock Curve</a></center>
</div>

<div id="scxIndicatorTooltip_id78" style="display: none;">
    <h1>Chande Forecast Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Chande Forecast Oscillator calculates the deviation between the current bar's price and an n-bar linear regression forecast value.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The market is said to be trending when the Chande Forecast Oscillator remains either above or below the zero line for an extended time.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
</div>

<div id="scxIndicatorTooltip_id79" style="display: none;">
    <h1>Gopalakrishnan Range Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Gopalakrishnan Range Index (GAPO) by Jayanthi Gopalakrishnan quantifies the variability of price data based on the log of the price range over an n-bar period.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>GAPO helps to identify erratic and smooth markets.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
    <center>Also see <a href="http://www.traders.com/documentation/FEEDbk_docs/2001/01/Abstracts_new/Jayanthi/Jayanthi.html" target="_blank">Wikipedia - Gopalakrishnan Range Index</a></center>
</div>

<div id="scxIndicatorTooltip_id80" style="display: none;">
    <h1>Intraday Momentum Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Intraday Momentum Index (IMI) is a technical indicator that combines aspects of candlestick analysis with the relative strength index (RSI).</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The intraday momentum index, or IMI, provides investors with potential buying and selling days based off of signals created on individual days.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Periods</p>
</div>

<div id="scxIndicatorTooltip_id81" style="display: none;">
    <h1>Klinger Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>A technical indicator developed by Stephen Klinger that is used to determine long-term trends of money flow while remaining sensitive enough to short-term fluctuations to enable a trader to predict short-term reversals.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>This indicator compares the volume flowing in and out of a security to price movement, and it is then turned into an oscillator.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods<br>
    Short Cycle<br>
    Long Cycle<br>
    Moving Average Type</p>
</div>

<div id="scxIndicatorTooltip_id82" style="display: none;">
    <h1>Pretty Good Oscillator</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Pretty Good Oscillator measures the distance of the current close from its N-day simple moving average, expressed in terms of an average true range over a similar period.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
</div>

<div id="scxIndicatorTooltip_id83" style="display: none;">
    <h1>Range Action Verification Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Range Action Verification Index (RAVI) indicator, developed by Tushar Chande in the late 1990s, attempts to identify trend strength.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Tushar Chande in his original implementation uses two simple moving averages for the calculation and takes the absolute value of the result ensuring all values are positive.
    Doing this, the larger the value of RAVI, the stronger the trend is said to be, however, the trend direction is lost.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Source<br>
    Short Cycle<br>
    Long Cycle</p>
</div>

<div id="scxIndicatorTooltip_id84" style="display: none;">
    <h1>Random Walk Index</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The random walk index (RWI) is a technical indicator that attempts to determine if a stock's price movement is random or nature or a result of a statistically significant trend.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>The random walk index attempts to determine when the market is in a strong uptrend or downtrend by measuring price ranges over N and how it differs from what would be expected by a random walk (randomly going up or down).
    The greater the range suggests a stronger trend. The RWI states that the shortest distance between two points is a straight line and the further prices stray from a straight line, implies the market is choppy and random in nature.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
</div>

<div id="scxIndicatorTooltip_id85" style="display: none;">
    <h1>Twiggs Money Flow</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Based on the popular Chaikin Money Flow indicator, which is in turn derived from the Accumulation Distribution line.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>Twiggs Money Flow warns of breakouts and provides useful trend confirmation. It is based on the observation that buying support is normally signaled by increased volume and frequent closes in the top half of the daily range.</p>
    <p>Likewise, selling pressure is evidenced by increased volume and frequent closes in the lower half of the daily range.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Periods</p>
</div>

<div id="scxIndicatorTooltip_id87" style="display: none;">
    <h1>Ichimoku Cloud</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>The Ichimoku cloud is a chart used in technical analysis that shows support and resistance, and momentum and trend directions for a security or investment.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>It is designed to provide relevant information at a glance using moving averages (tenkan-sen and kijun-sen) to show bullish and bearish crossover points.
    The "clouds" (kumo, in Japanese) are formed between spans of the average of the tenkan-sen and kijun-sen plotted six months ahead (senkou span B), and of the midpoint of the 52-week high and low (senkou span B) plotted six months ahead.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>Conversion Line Periods<br>
    Base Line Periods<br>
    Lagging Span 2 Periods</p>
</div>

<div id="scxIndicatorTooltip_id1000" style="display: none;">
    <h1>Volume</h1>
    <div class="scxIndicatorHelp">Overview</div>
    <p>Volume is the number of shares or contracts traded in a security or an entire market during a given period of time.</p>
    <div class="scxIndicatorHelp">Interpretation</div>
    <p>It is simply the amount of shares that trade hands from sellers to buyers as a measure of activity. If a buyer of a stock purchases 100 shares from a seller, then the volume for that period increases by 100 shares based on that transaction.</p>
    <div class="scxIndicatorHelp">Parameters</div>
    <p>None</p>
</div>

</div>`;