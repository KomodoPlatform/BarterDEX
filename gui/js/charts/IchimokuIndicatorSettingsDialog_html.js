var IchimokuIndicatorSettingsDialog_html = `
<div id="scxIchimokuIndicatorDialog" class="modal scxDialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <a href="#" data-dismiss="modal" aria-hidden="true" class="close">×</a>
                <h4 id="scxIchimokuIndicatorDialog_title">Ichimoku Cloud Settings</h4>
            </div>
            <div class="modal-body scxIchimokuIndicatorDialog-body">

                <div class="scxIchimokuIndicatorDialog_panel_figure_linesStylePanel">
                    <table>
                        <tr class="scxIchimokuIndicatorDialog_panel_figure_tenkanLine">
                            <td>
                                <span class="scxIchimokuIndicatorDialog_panel_figure_tenkanEnabled">
                                    <input class="scxIchimokuIndicatorDialog_chk_tenkanLine js-switch" type="checkbox"/>
                                </span>

                                <label class="scxIchimokuIndicatorDialog_label">Tenkan Sen</label>

                                <input class="scxIchimokuIndicatorDialog_input_lineColor scxSpectrum" type="text">

                                <input class="scxIchimokuIndicatorDialog_input_lineWidth form-control" type="text">

                                <select class="scxIchimokuIndicatorDialog_input_lineStyle scxLineStyleSelector scxDropdown">
                                    <option value="solid">&nbsp;</option>
                                    <option value="dash">&nbsp;</option>
                                    <option value="dot">&nbsp;</option>
                                    <option value="dash-dot">&nbsp;</option>
                                </select>

                                <!--<span class="scxIchimokuIndicatorDialog_panel_figure_tenkanPriceLineEnabled">
                                    <input class="scxIchimokuIndicatorDialog_chk_tenkanPriceLine js-switch" type="checkbox"/>
                                </span>

                                <label class="scxIchimokuIndicatorDialog_label_priceLine">Price Line</label>-->
                            </td>
                        </tr>
                        <tr class="scxIchimokuIndicatorDialog_panel_figure_kijunLine">
                            <td>
                                <span class="scxIchimokuIndicatorDialog_panel_figure_kijunEnabled">
                                    <input class="scxIchimokuIndicatorDialog_chk_kijunLine js-switch" type="checkbox"/>
                                </span>

                                <label class="scxIchimokuIndicatorDialog_label">Kijun Sen</label>

                                <input class="scxIchimokuIndicatorDialog_input_lineColor scxSpectrum" type="text">

                                <input class="scxIchimokuIndicatorDialog_input_lineWidth form-control" type="text">

                                <select class="scxIchimokuIndicatorDialog_input_lineStyle scxLineStyleSelector scxDropdown">
                                    <option value="solid">&nbsp;</option>
                                    <option value="dash">&nbsp;</option>
                                    <option value="dot">&nbsp;</option>
                                    <option value="dash-dot">&nbsp;</option>
                                </select>

                                <!--<span class="scxIchimokuIndicatorDialog_panel_figure_kijunPriceLineEnabled">
                                    <input class="scxIchimokuIndicatorDialog_chk_kijunPriceLine js-switch" type="checkbox"/>
                                </span>

                                <label class="scxIchimokuIndicatorDialog_label_priceLine">Price Line</label>-->
                            </td>
                        </tr>
                        <tr class="scxIchimokuIndicatorDialog_panel_figure_chikouLine">
                            <td>
                                <span class="scxIchimokuIndicatorDialog_panel_figure_chikouEnabled">
                                    <input class="scxIchimokuIndicatorDialog_chk_chikouLine js-switch" type="checkbox"/>
                                </span>

                                <label class="scxIchimokuIndicatorDialog_label">Chikou Span</label>

                                <input class="scxIchimokuIndicatorDialog_input_lineColor scxSpectrum" type="text">

                                <input class="scxIchimokuIndicatorDialog_input_lineWidth form-control" type="text">

                                <select class="scxIchimokuIndicatorDialog_input_lineStyle scxLineStyleSelector scxDropdown">
                                    <option value="solid">&nbsp;</option>
                                    <option value="dash">&nbsp;</option>
                                    <option value="dot">&nbsp;</option>
                                    <option value="dash-dot">&nbsp;</option>
                                </select>

                                <!--<span class="scxIchimokuIndicatorDialog_panel_figure_chikouPriceLineEnabled">
                                    <input class="scxIchimokuIndicatorDialog_chk_chikouPriceLine js-switch" type="checkbox"/>
                                </span>

                                <label class="scxIchimokuIndicatorDialog_label_priceLine">Price Line</label>-->
                            </td>
                        </tr>
                        <tr class="scxIchimokuIndicatorDialog_panel_figure_senkouALine">
                            <td>
                                <span class="scxIchimokuIndicatorDialog_panel_figure_senkouAEnabled">
                                    <input class="scxIchimokuIndicatorDialog_chk_senkouALine js-switch" type="checkbox"/>
                                </span>

                                <label class="scxIchimokuIndicatorDialog_label">Senkou Span A</label>

                                <input class="scxIchimokuIndicatorDialog_input_lineColor scxSpectrum" type="text">

                                <input class="scxIchimokuIndicatorDialog_input_lineWidth form-control" type="text">

                                <select class="scxIchimokuIndicatorDialog_input_lineStyle scxLineStyleSelector scxDropdown">
                                    <option value="solid">&nbsp;</option>
                                    <option value="dash">&nbsp;</option>
                                    <option value="dot">&nbsp;</option>
                                    <option value="dash-dot">&nbsp;</option>
                                </select>

                                <!--<span class="scxIchimokuIndicatorDialog_panel_figure_senkouAPriceLineEnabled">
                                    <input class="scxIchimokuIndicatorDialog_chk_senkouAPriceLine js-switch" type="checkbox"/>
                                </span>

                                <label class="scxIchimokuIndicatorDialog_label_priceLine">Price Line</label>-->
                            </td>
                        </tr>
                        <tr class="scxIchimokuIndicatorDialog_panel_figure_senkouBLine">
                            <td>
                                <span class="scxIchimokuIndicatorDialog_panel_figure_senkouBEnabled">
                                    <input class="scxIchimokuIndicatorDialog_chk_senkouBLine js-switch" type="checkbox"/>
                                </span>

                                <label class="scxIchimokuIndicatorDialog_label">Senkou Span B</label>

                                <input class="scxIchimokuIndicatorDialog_input_lineColor scxSpectrum" type="text">

                                <input class="scxIchimokuIndicatorDialog_input_lineWidth form-control" type="text">

                                <select class="scxIchimokuIndicatorDialog_input_lineStyle scxLineStyleSelector scxDropdown">
                                    <option value="solid">&nbsp;</option>
                                    <option value="dash">&nbsp;</option>
                                    <option value="dot">&nbsp;</option>
                                    <option value="dash-dot">&nbsp;</option>
                                </select>

                                <!--<span class="scxIchimokuIndicatorDialog_panel_figure_senkouBPriceLineEnabled">
                                    <input class="scxIchimokuIndicatorDialog_chk_senkouBPriceLine js-switch" type="checkbox"/>
                                </span>

                                <label class="scxIchimokuIndicatorDialog_label_priceLine">Price Line</label>-->
                            </td>
                        </tr>
                        <tr class="scxIchimokuIndicatorDialog_panel_figure_kumo">
                            <td>
                                <span class="scxIchimokuIndicatorDialog_panel_figure_kumoEnabled">
                                    <input class="scxIchimokuIndicatorDialog_chk_kumo js-switch" type="checkbox"/>
                                </span>

                                <label class="scxIchimokuIndicatorDialog_label">Kumo</label>

                                <input class="scxIchimokuIndicatorDialog_input_lineColor scxSpectrum" type="text">
                            </td>
                        </tr>
                    </table>
                </div>

                <div class="scxIchimokuIndicatorDialog_panel_figure_inputsPanel">
                    <table>
                        <tr class="scxIchimokuIndicatorDialog_panel_figure_conversionLinePeriods">
                            <td>
                                <label class="scxIchimokuIndicatorDialog_label_conversionLinePeriods">Conversion Line Periods</label>

                                <input class="scxIchimokuIndicatorDialog_input_conversionLinePeriods form-control" type="text">
                            </td>
                        </tr>
                        <tr class="scxIchimokuIndicatorDialog_panel_figure_baseLinePeriods">
                            <td>
                                <label class="scxIchimokuIndicatorDialog_label_baseLinePeriods">Base Line Periods</label>

                                <input class="scxIchimokuIndicatorDialog_input_baseLinePeriods form-control" type="text">
                            </td>
                        </tr>
                        <tr class="scxIchimokuIndicatorDialog_panel_figure_laggingSpanPeriods">
                            <td>
                                <label class="scxIchimokuIndicatorDialog_label_laggingSpanPeriods">Lagging Span 2 Periods</label>

                                <input class="scxIchimokuIndicatorDialog_input_laggingSpanPeriods form-control" type="text">
                            </td>
                        </tr>
                        <!--<tr class="scxIchimokuIndicatorDialog_panel_figure_displacement">
                            <td>
                                <label class="scxIchimokuIndicatorDialog_label_displacement">Displacement</label>

                                <input class="scxIchimokuIndicatorDialog_input_displacement form-control" type="text">
                            </td>
                        </tr>-->
                    </table>
                </div>

                <!--<div class="scxIchimokuIndicatorDialog_panel_figure_scalePanel">
                    <table>
                        <tr class="scxIchimokuIndicatorDialog_panel_figure_scale">
                            <td>
                                <label class="scxIchimokuIndicatorDialog_label_scale">Scale</label>

                                <select class="scxIchimokuIndicatorDialog_input_scalePosition">
                                    <option value="left">Scale Left</option>
                                    <option value="right">Scale Right</option>
                                    <option value="center">Screen (No scale)</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </div>-->
            </div>
            <div class="modal-footer scxIchimokuIndicatorDialog-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" id="scxIchimokuIndicatorDialog_btn_save">Save</button>
                <button type="button" class="btn btn-primary" id="scxIchimokuIndicatorDialog_btn_apply">Apply</button>
            </div>
        </div>
    </div>
</div>`;