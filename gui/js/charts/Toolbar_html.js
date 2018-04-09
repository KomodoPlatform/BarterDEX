var Toolbar_html = `
<div class="scxToolbar">
    <input type="text" class="symbolSearch form-control" title="Selected instrument" style="display: none;">

    <div class="scxToolbarButton scxToolbarButtonWithDropdown scxTimeFramePicker">
        <div class="scxToolbarButton-buttonWrapper" title="Time frame">
            <div class="scxToolbarButton-activateBtn">
                <span class="scxTimeFramePicker-button-value"></span>
                <span class="scxTimeFramePicker-button-units"></span>
            </div>
            <div class="scxToolbarButton-toggleDropdownBtn"></div>
        </div>
        <div class="scxToolbarButton-dropdownWrapper scxTimeFramePickerDropDown">
            <div class="scxTimeFramePicker-dropdownContainer">
                <div class="scxTimeFramePicker-ValuesWrapper">
                    <div class="scxToolbarButton-dropdownElement" data-scxvalue="30" data-scxunits="s" title="30 seconds" style="display: none;">
                        <span class="scxToolbarButton-dropdownElement-value">30</span>
                        <span class="scxToolbarButton-dropdownElement-units">seconds</span>
                    </div>
                    <div class="scxToolbarButton-dropdownElement" data-scxvalue="1" data-scxunits="" title="1 minute">
                        <span class="scxToolbarButton-dropdownElement-value">1</span>
                        <span class="scxToolbarButton-dropdownElement-units">minute</span>
                    </div>
                    <div class="scxToolbarButton-dropdownElement" data-scxvalue="5" data-scxunits="" title="5 minutes">
                        <span class="scxToolbarButton-dropdownElement-value">5</span>
                        <span class="scxToolbarButton-dropdownElement-units">minutes</span>
                    </div>
                    <div class="scxToolbarButton-dropdownElement" data-scxvalue="10" data-scxunits="" title="10 minutes">
                        <span class="scxToolbarButton-dropdownElement-value">10</span>
                        <span class="scxToolbarButton-dropdownElement-units">minutes</span>
                    </div>
                    <div class="scxToolbarButton-dropdownElement" data-scxvalue="15" data-scxunits="" title="15 minutes">
                        <span class="scxToolbarButton-dropdownElement-value">15</span>
                        <span class="scxToolbarButton-dropdownElement-units">minutes</span>
                    </div>
                    <div class="scxToolbarButton-dropdownElement" data-scxvalue="1" data-scxunits="h" title="1 hour">
                        <span class="scxToolbarButton-dropdownElement-value">1</span>
                        <span class="scxToolbarButton-dropdownElement-units">hour</span>
                    </div>
                    <div class="scxToolbarButton-dropdownElement" data-scxvalue="4" data-scxunits="h" title="4 hours">
                        <span class="scxToolbarButton-dropdownElement-value">4</span>
                        <span class="scxToolbarButton-dropdownElement-units">hours</span>
                    </div>
                    <div class="scxToolbarButton-dropdownElement" data-scxvalue="1" data-scxunits="d" title="1 day">
                        <span class="scxToolbarButton-dropdownElement-value">1</span>
                        <span class="scxToolbarButton-dropdownElement-units">day</span>
                    </div>
                    <div class="scxToolbarButton-dropdownElement" data-scxvalue="1" data-scxunits="w" title="1 week">
                        <span class="scxToolbarButton-dropdownElement-value">1</span>
                        <span class="scxToolbarButton-dropdownElement-units">week</span>
                    </div>
                    <div class="scxToolbarButton-dropdownElement" data-scxvalue="1" data-scxunits="m" title="1 month">
                        <span class="scxToolbarButton-dropdownElement-value">1</span>
                        <span class="scxToolbarButton-dropdownElement-units">month</span>
                    </div>
                    <div class="scxToolbarButton-dropdownElement" data-scxvalue="1" data-scxunits="y" title="1 year">
                        <span class="scxToolbarButton-dropdownElement-value">1</span>
                        <span class="scxToolbarButton-dropdownElement-units">year</span>
                    </div>
                </div>
                <div class="scxTimeFramePicker-CustomValueWrapper" style="display: none;">
                    <button class="scxTimeFramePicker-CustomValueMinus btn btn-default" title="Decrease">-</button>
                    <input class="scxTimeFramePicker-CustomValueText form-control" value="" type="text" title="Interval">
                    <button class="scxTimeFramePicker-CustomValuePlus btn btn-default" title="Increase">+</button>
                    <select class="scxTimeFramePicker-CustomValueUnits" title="Periodicity">
                        <option value="s">second</option>
                        <option value="">minute</option>
                        <option value="h">hour</option>
                        <option value="d">day</option>
                        <option value="w">week</option>
                        <option value="m">month</option>
                        <option value="y">year</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="scxToolbar-btn scxToolbar-btn-indicators" title="Add Indicators..."></div>
    <div class="scxToolbar-btn scxToolbar-btn-theme" title="Theme settings..."></div>

    <div class="scxToolbarBarStyle scxToolbarButton scxToolbarButtonWithDropdown" data-type="scxToolbarBarStyle" title="Price Style">
        <div class="scxToolbarButton-buttonWrapper">
            <button class="scxToolbarButton-activateBtn"></button>
            <button class="scxToolbarButton-toggleDropdownBtn"></button>
        </div>
        <div class="scxToolbarButton-dropdownWrapper">
            <div class="scxToolbarButton-dropdownElementsContainer">
                <div class="scxToolbarButton-dropdownElement" data-scxValue="bar" title="Bars">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Bars</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="coloredBar" title="Colored Bars">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Colored Bars</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="candle" title="Candles">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Candles</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="hollowCandle" title="Hollow Candles">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Hollow Candles</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="heikinAshi" title="Heikin Ashi" style="display: none;">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Heikin Ashi</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="renko" title="Renko">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Renko</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="lineBreak" title="Line Break">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Line Break</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="kagi" title="Kagi">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Kagi</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="line" title="Line">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Line</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="mountain" title="Mountain">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Mountain</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="pointAndFigure" title="Point & Figure">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Point & Figure</span>
                </div>
            </div>
        </div>
    </div>

    <div class="scxToolbarCrossHair scxToolbarButton scxToolbarButtonWithDropdown" data-type="scxToolbarCrossHair" title="Cursor Type">
        <div class="scxToolbarButton-buttonWrapper">
            <button class="scxToolbarButton-activateBtn"></button>
            <button class="scxToolbarButton-toggleDropdownBtn"></button>
        </div>
        <div class="scxToolbarButton-dropdownWrapper">
            <div class="scxToolbarButton-dropdownElementsContainer">
                <div class="scxToolbarButton-dropdownElement" data-scxValue="none" title="Arrow">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Arrow</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="markers" title="Arrow with Markers">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Arrow with Markers</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="crossBars" title="CrossHairs">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">CrossHairs</span>
                </div>
            </div>
        </div>
    </div>

    <div class="scxToolbarZoomIn scxToolbarButton scxToolbarButtonWithDropdown scxToolbarCanToggle" data-type="scxToolbarZoomIn" title="Zoom In Type">
        <div class="scxToolbarButton-buttonWrapper">
            <button class="scxToolbarButton-activateBtn"></button>
            <button class="scxToolbarButton-toggleDropdownBtn"></button>
        </div>
        <div class="scxToolbarButton-dropdownWrapper">
            <div class="scxToolbarButton-dropdownElementsContainer">
                <div class="scxToolbarButton-dropdownElement" data-scxValue="dateRange" title="Zoom Date Range">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Zoom Date Range</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="rect" title="Zoom Rect">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Zoom Rect</span>
                </div>
            </div>
        </div>
    </div>

    <!--<div class="scxToolbar-delimiter"></div>-->

    <div class="scxToolbarButton scxToolbarCanToggle scxToolbar-btn-hideDrawings" title="Show/Hide Drawings">
        <div class="scxToolbarButton-buttonWrapper">
            <button class="scxToolbarButton-activateBtn"></button>
        </div>
    </div>

    <!--<div class="scxToolbarButton scxToolbarCanToggle scxToolbar-btn-enableDrawingsTooltip scxToolbarButtonManuallySwitchable" title="Enable/Disable Drawings Tooltip">
        <div class="scxToolbarButton-buttonWrapper">
            <button class="scxToolbarButton-activateBtn"></button>
        </div>
    </div>-->

    <div class="scxToolbarButton scxToolbarCanToggle scxToolbarButtonManuallySwitchable scxToolbar-btn-stayInDrawingMode" title="Stay in drawing mode">
        <div class="scxToolbarButton-buttonWrapper">
            <button class="scxToolbarButton-activateBtn"></button>
        </div>
    </div>

    <div class="scxToolbarMarkerDrawings scxToolbarButton scxToolbarButtonWithDropdown scxToolbarCanToggle" data-type="scxToolbarMarkerDrawings" title="Chart Marker Drawings">
        <div class="scxToolbarButton-buttonWrapper">
            <button class="scxToolbarButton-activateBtn"></button>
            <button class="scxToolbarButton-toggleDropdownBtn"></button>
        </div>
        <div class="scxToolbarButton-dropdownWrapper">
            <div class="scxToolbarButton-dropdownElementsContainer">
                <div class="scxToolbarButton-dropdownElement" data-scxValue="dot" title="Dot">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Dot</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="square" title="Square">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Square</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="diamond" title="Diamond">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Diamond</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="arrowUp" title="Arrow Up">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Arrow Up</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="arrowDown" title="Arrow Down">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Arrow Down</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="arrowLeft" title="Arrow Left">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Arrow Left</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="arrowRight" title="Arrow Right">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Arrow Right</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="arrow" title="Arrow">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Arrow</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="note" title="Note">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Note</span>
                </div>
            </div>
        </div>
    </div>

    <div class="scxToolbarGeometricDrawings scxToolbarButton scxToolbarButtonWithDropdown scxToolbarCanToggle" data-type="scxToolbarGeometricDrawings" title="Geometric Drawings">
        <div class="scxToolbarButton-buttonWrapper">
            <button class="scxToolbarButton-activateBtn"></button>
            <button class="scxToolbarButton-toggleDropdownBtn"></button>
        </div>
        <div class="scxToolbarButton-dropdownWrapper">
            <div class="scxToolbarButton-dropdownElementsContainer">
                <div class="scxToolbarButton-dropdownElement" data-scxValue="lineSegment" title="Line Segment">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Line Segment</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="horizontalLine" title="Horizontal Line">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Horizontal Line</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="verticalLine" title="Vertical Line">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Vertical Line</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="rectangle" title="Rectangle">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Rectangle</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="triangle" title="Triangle">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Triangle</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="circle" title="Circle">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Circle</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="ellipse" title="Ellipse">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Ellipse</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="polygon" title="Polygon">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Polygon</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="polyline" title="Polyline">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Polyline</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="freeHand" title="Free hand">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Free hand</span>
                </div>
            </div>
        </div>
    </div>

    <div class="scxToolbarFibonacciDrawings scxToolbarButton scxToolbarButtonWithDropdown scxToolbarCanToggle" data-type="scxToolbarFibonacciDrawings" title="Fibonacci Drawings">
        <div class="scxToolbarButton-buttonWrapper">
            <button class="scxToolbarButton-activateBtn"></button>
            <button class="scxToolbarButton-toggleDropdownBtn"></button>
        </div>
        <div class="scxToolbarButton-dropdownWrapper">
            <div class="scxToolbarButton-dropdownElementsContainer">
                <div class="scxToolbarButton-dropdownElement" data-scxValue="fibonacciArcs" title="Fibonacci Arcs">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Fibonacci Arcs</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="fibonacciEllipses" title="Fibonacci Ellipses">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Fibonacci Ellipses</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="fibonacciRetracements" title="Fibonacci Retracements">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Fibonacci Retracements</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="fibonacciFan" title="Fibonacci Fan">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Fibonacci Fan</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="fibonacciTimeZones" title="Fibonacci Time Zones">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Fibonacci Time Zones</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="fibonacciExtensions" title="Fibonacci Extensions">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Fibonacci Extensions</span>
                </div>
            </div>
        </div>
    </div>

    <div class="scxToolbarTrendDrawings scxToolbarButton scxToolbarButtonWithDropdown scxToolbarCanToggle" data-type="scxToolbarTrendDrawings" title="Trend Channel Drawings">
        <div class="scxToolbarButton-buttonWrapper">
            <button class="scxToolbarButton-activateBtn"></button>
            <button class="scxToolbarButton-toggleDropdownBtn"></button>
        </div>
        <div class="scxToolbarButton-dropdownWrapper">
            <div class="scxToolbarButton-dropdownElementsContainer">
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="trendChannel" title="Trend Channel">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Trend Channel</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="andrewsPitchfork" title="Andrews Pitchfork">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Andrews Pitchfork</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="errorChannel" title="Error Channel">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Error Channel</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="raffRegression" title="Raff Regression">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Raff Regression</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="quadrantLines" title="Quadrant Lines">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Quadrant Lines</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="tironeLevels" title="Tirone Levels">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Tirone Levels</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="speedLines" title="Speed Lines">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Speed Lines</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="gannFan" title="Gann Fan">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Gann Fan</span>
                </div>
            </div>
        </div>
    </div>

    <div class="scxToolbarGeneralDrawings scxToolbarButton scxToolbarButtonWithDropdown scxToolbarCanToggle" data-type="scxToolbarGeneralDrawings" title="General Drawings">
        <div class="scxToolbarButton-buttonWrapper">
            <button class="scxToolbarButton-activateBtn"></button>
            <button class="scxToolbarButton-toggleDropdownBtn"></button>
        </div>
        <div class="scxToolbarButton-dropdownWrapper">
            <div class="scxToolbarButton-dropdownElementsContainer">
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="text" title="Text">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Text</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="image" title="Image">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Image</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="balloon" title="Balloon">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Balloon</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxvalue="measure" title="Measure">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Measure</span>
                </div>
            </div>
        </div>
    </div>

    <div class="scxToolbarDelete scxToolbarButton scxToolbarButtonWithDropdown scxToolbarCanFireFromHead" data-type="scxToolbarDelete" title="Delete Selected Drawing">
        <div class="scxToolbarButton-buttonWrapper">
            <div class="scxToolbarButton-activateBtn" data-scxValue="deleteDrawing"></div>
            <button class="scxToolbarButton-toggleDropdownBtn"></button>
        </div>
        <div class="scxToolbarButton-dropdownWrapper">
            <div class="scxToolbarButton-dropdownElementsContainer">
                <div class="scxToolbarButton-dropdownElement" data-scxValue="deleteAllDrawings" title="Delete All Drawings">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Delete All Drawings</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="deleteAllIndicators" title="Delete All Indicators">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Delete All Indicators</span>
                </div>
            </div>
        </div>
    </div>

    <!--<div class="scxToolbar-delimiter"></div>-->

    <div class="scxToolbar-btn scxToolbarSaveImage" title="Save as Image..."></div>

    <div class="scxToolbarViewMode scxToolbarButton scxToolbarButtonWithDropdown scxToolbarCanFireFromHead" data-type="scxToolbarViewMode" title="View Mode" style="display: none;">
        <div class="scxToolbarButton-buttonWrapper">
            <div class="scxToolbarButton-activateBtn" data-scxValue="toggleFullWindow"></div>
            <button class="scxToolbarButton-toggleDropdownBtn"></button>
        </div>
        <div class="scxToolbarButton-dropdownWrapper">
            <div class="scxToolbarButton-dropdownElementsContainer">
                <div class="scxToolbarButton-dropdownElement" data-scxValue="toggleFullWindow" title="Full Window Mode">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Full Window Mode</span>
                </div>
                <div class="scxToolbarButton-dropdownElement" data-scxValue="toggleFullScreen" title="Full Screen Mode" style="display: none;">
                    <span class="scxToolbarButton-dropdownElement-image"></span>
                    <span class="scxToolbarButton-dropdownElement-text">Full Screen Mode</span>
                </div>
            </div>
        </div>
    </div>

</div>`;