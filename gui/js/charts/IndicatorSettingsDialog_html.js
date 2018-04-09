var IndicatorSettingsDialog_html = `
<div id="scxIndicatorDialog" class="modal scxDialog" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <a href="#" data-dismiss="modal" aria-hidden="true" class="close">×</a>
                <h4 id="scxIndicatorDialog_title">Indicator</h4>
            </div>
            <div class="modal-body scxIndicatorDialog_body">
                <form>
                    <fieldset>

                        <div id="scxIndicatorDialog_container_source">
                            <label id="scxIndicatorDialog_label_source" for="scxIndicatorDialog_input_source">Source</label>
                            <select id="scxIndicatorDialog_input_source" class="scxComboBox scxDropdown" data-container="body">
                                <option value=".open">Open Price</option>
                                <option value=".high">High Price</option>
                                <option value=".low">Low Price</option>
                                <option value=".close" selected>Close Price</option>
                                <option value=".volume">Volume</option>
                            </select>
                        </div>

                        <div id="scxIndicatorDialog_container_periods">
                            <label id="scxIndicatorDialog_label_periods" for="scxIndicatorDialog_input_periods">Periods</label>
                            <input id="scxIndicatorDialog_input_periods" type="text" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_signalPeriods">
                            <label id="scxIndicatorDialog_label_signalPeriods" for="scxIndicatorDialog_input_signalPeriods">Signal Periods</label>
                            <input type="text" value="3" id="scxIndicatorDialog_input_signalPeriods" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_r2scale">
                            <label id="scxIndicatorDialog_label_r2scale" for="scxIndicatorDialog_input_r2scale">R2 Scale</label>
                            <input type="text" value="0.65" id="scxIndicatorDialog_input_r2scale" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_standardDeviations">
                            <label id="scxIndicatorDialog_label_standardDeviations" for="scxIndicatorDialog_input_standardDeviations">Standard Deviations</label>
                            <input type="text" value="2" id="scxIndicatorDialog_input_standardDeviations" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_barHistory">
                            <label id="scxIndicatorDialog_label_barHistory" for="scxIndicatorDialog_input_barHistory">Bar History</label>
                            <input type="text" value="10" id="scxIndicatorDialog_input_barHistory" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_shift">
                            <label id="scxIndicatorDialog_label_shift" for="scxIndicatorDialog_input_shift">Shift Percentage</label>
                            <input type="text" value="5" id="scxIndicatorDialog_input_shift" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_shortCycle">
                            <label id="scxIndicatorDialog_label_shortCycle" for="scxIndicatorDialog_input_shortCycle">Short Cycle</label>
                            <input type="text" value="13" id="scxIndicatorDialog_input_shortCycle" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_longCycle">
                            <label id="scxIndicatorDialog_label_longCycle" for="scxIndicatorDialog_input_longCycle">Long Cycle</label>
                            <input type="text" value="25" id="scxIndicatorDialog_input_longCycle" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_cycle1">
                            <label id="scxIndicatorDialog_label_cycle1" for="scxIndicatorDialog_input_cycle1">Cycle 1</label>
                            <input type="text" value="3" id="scxIndicatorDialog_input_cycle1" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_cycle2">
                            <label id="scxIndicatorDialog_label_cycle2" for="scxIndicatorDialog_input_cycle2">Cycle 2</label>
                            <input type="text" value="8" id="scxIndicatorDialog_input_cycle2" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_cycle3">
                            <label id="scxIndicatorDialog_label_cycle3" for="scxIndicatorDialog_input_cycle3">Cycle 3</label>
                            <input type="text" value="14" id="scxIndicatorDialog_input_cycle3" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_shortTerm">
                            <label id="scxIndicatorDialog_label_shortTerm" for="scxIndicatorDialog_input_shortTerm">Short Term Periods</label>
                            <input type="text" value="8" id="scxIndicatorDialog_input_shortTerm" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_longTerm">
                            <label id="scxIndicatorDialog_label_longTerm" for="scxIndicatorDialog_input_longTerm">Long Term Periods</label>
                            <input type="text" value="14" id="scxIndicatorDialog_input_longTerm" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_rateOfChange">
                            <label id="scxIndicatorDialog_label_rateOfChange" for="scxIndicatorDialog_input_rateOfChange">Rate of Change</label>
                            <input type="text" value="2" id="scxIndicatorDialog_input_rateOfChange" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_minAF">
                            <label id="scxIndicatorDialog_label_minAF" for="scxIndicatorDialog_input_minAF">Minimum AF</label>
                            <input type="text" value="0.02" id="scxIndicatorDialog_input_minAF" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_maxAF">
                            <label id="scxIndicatorDialog_label_maxAF" for="scxIndicatorDialog_input_maxAF">Maximum AF</label>
                            <input type="text" value="0.02" id="scxIndicatorDialog_input_maxAF" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_levels">
                            <label id="scxIndicatorDialog_label_levels" for="scxIndicatorDialog_input_levels">Levels</label>
                            <input type="text" value="3" id="scxIndicatorDialog_input_levels" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_minTick">
                            <label id="scxIndicatorDialog_label_minTick" for="scxIndicatorDialog_input_minTick">Minimum Tick Value</label>
                            <input type="text" value="0.5" id="scxIndicatorDialog_input_minTick" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_limitMove">
                            <label id="scxIndicatorDialog_label_limitMove" for="scxIndicatorDialog_input_limitMove">Limit Move Value</label>
                            <input type="text" value="0.5" id="scxIndicatorDialog_input_limitMove" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_kPeriods">
                            <label id="scxIndicatorDialog_label_kPeriods" for="scxIndicatorDialog_input_kPeriods">%K Periods</label>
                            <input type="text" value="13" id="scxIndicatorDialog_input_kPeriods" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_kSmoothing">
                            <label id="scxIndicatorDialog_label_kSmoothing" for="scxIndicatorDialog_input_kSmoothing">%K Smoothing</label>
                            <input type="text" value="25" id="scxIndicatorDialog_input_kSmoothing" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_kDoubleSmoothing">
                            <label id="scxIndicatorDialog_label_kDoubleSmoothing" for="scxIndicatorDialog_input_kDoubleSmoothing">%K Double Smoothing</label>
                            <input type="text" value="2" id="scxIndicatorDialog_input_kDoubleSmoothing" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_dPeriods">
                            <label id="scxIndicatorDialog_label_dPeriods" for="scxIndicatorDialog_input_dPeriods">%D Periods</label>
                            <input type="text" value="9" id="scxIndicatorDialog_input_dPeriods" class="form-control scxNumeric">
                        </div>

                        <div id="scxIndicatorDialog_container_pointsOrPercent">
                            <label id="scxIndicatorDialog_label_pointsOrPercent" for="scxIndicatorDialog_input_pointsOrPercent">Points or Percent</label>
                            <select id="scxIndicatorDialog_input_pointsOrPercent" class="scxComboBox scxDropdown" data-container="body">
                                <option value="2" selected>Percent</option>
                                <option value="1">Points</option>
                            </select>
                        </div>

                        <div id="scxIndicatorDialog_container_source2">
                            <label id="scxIndicatorDialog_label_source2" for="scxIndicatorDialog_input_source2">Source #2</label>
                            <select id="scxIndicatorDialog_input_source2" class="scxComboBox scxDropdown" data-container="body">
                                <option value=".open" selected>Open Price</option>
                                <option value=".high">High Price</option>
                                <option value=".low">Low Price</option>
                                <option value=".close">Close Price</option>
                                <option value=".volume">Volume</option>
                            </select>
                        </div>

                        <div id="scxIndicatorDialog_container_maType">
                            <label id="scxIndicatorDialog_label_maType" for="scxIndicatorDialog_input_maType">Moving Average Type</label>
                            <select id="scxIndicatorDialog_input_maType" class="scxComboBox scxDropdown" data-container="body">
                                <option value="0" selected>Simple</option>
                                <option value="1">Exponential</option>
                                <option value="2">Time Series</option>
                                <option value="3">Triangular</option>
                                <option value="4">Variable</option>
                                <option value="5">VIDYA</option>
                                <option value="7">Weighted</option>
                                <option value="6">Welles Wilder Smoothing</option>
                            </select>
                        </div>

                        <div id="scxIndicatorDialog_container_pctDMovingAverageType">
                            <label id="scxIndicatorDialog_label_pctDMovingAverageType" for="scxIndicatorDialog_input_pctDMovingAverageType">%D Moving Average Type</label>
                            <select id="scxIndicatorDialog_input_pctDMovingAverageType" class="scxComboBox scxDropdown" data-container="body">
                                <option value="0" selected>Simple</option>
                                <option value="1">Exponential</option>
                                <option value="2">Time Series</option>
                                <option value="3">Triangular</option>
                                <option value="4">Variable</option>
                                <option value="5">VIDYA</option>
                                <option value="7">Weighted</option>
                                <option value="6">Welles Wilder Smoothing</option>
                            </select>
                        </div>

                        <div id="scxIndicatorDialog_container_histogram_colors">
                            <table>
                                <tr>
                                    <td><label id="scxIndicatorDialog_label_histogram_line1" for="scxIndicatorDialog_input_line1_width">Up Color</label></td>
                                    <td><input id="scxIndicatorDialog_input_histogram_line1_color" type=text class="scxSpectrum"></td>
                                </tr>
                                <tr>
                                    <td><label id="scxIndicatorDialog_label_histogram_line2" for="scxIndicatorDialog_input_line1_width">Down Color</label></td>
                                    <td><input id="scxIndicatorDialog_input_histogram_line2_color" type=text class="scxSpectrum"></td>
                                </tr>
                            </table>
                        </div>


                        <div id="scxIndicatorDialog_container_line1">
                            <label id="scxIndicatorDialog_label_line1" for="scxIndicatorDialog_input_line1_width">Color 1</label>

                            <input type="text" id="scxIndicatorDialog_input_line1_width" class="form-control scxNumeric">

                            <select id="scxIndicatorDialog_input_line1_style" class="scxLineStyleSelector scxDropdown" data-container="body">
                                <option value="solid">&nbsp;</option>
                                <option value="dash">&nbsp;</option>
                                <option value="dot">&nbsp;</option>
                                <option value="dash-dot">&nbsp;</option>
                            </select>

                            <input id="scxIndicatorDialog_input_line1_color" type=text class="scxSpectrum">
                        </div>

                        <div id="scxIndicatorDialog_container_line2">
                            <label id="scxIndicatorDialog_label_line2" for="scxIndicatorDialog_input_line2_width">Color 2</label>

                            <input type="text" id="scxIndicatorDialog_input_line2_width" class="form-control scxNumeric">

                            <select id="scxIndicatorDialog_input_line2_style" class="scxLineStyleSelector scxDropdown" data-container="body">
                                <option value="solid">&nbsp;</option>
                                <option value="dash">&nbsp;</option>
                                <option value="dot">&nbsp;</option>
                                <option value="dash-dot">&nbsp;</option>
                            </select>

                            <input id="scxIndicatorDialog_input_line2_color" type=text class="scxSpectrum">
                        </div>

                        <div id="scxIndicatorDialog_container_line3">
                            <label id="scxIndicatorDialog_label_line3" for="scxIndicatorDialog_input_line2_width">Color 3</label>

                            <input type="text" id="scxIndicatorDialog_input_line3_width" class="form-control scxNumeric">

                            <select id="scxIndicatorDialog_input_line3_style" class="scxLineStyleSelector scxDropdown" data-container="body">
                                <option value="solid">&nbsp;</option>
                                <option value="dash">&nbsp;</option>
                                <option value="dot">&nbsp;</option>
                                <option value="dash-dot">&nbsp;</option>
                            </select>

                            <input id="scxIndicatorDialog_input_line3_color" type=text class="scxSpectrum">
                        </div>

                    </fieldset>
                </form>
            </div>
            <div class="modal-footer scxIndicatorDialog-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" id="scxIndicatorDialog_btn_save">Save</button>
                <button type="button" class="btn btn-primary" id="scxIndicatorDialog_btn_apply">Apply</button>
            </div>
        </div>
    </div>
</div>`