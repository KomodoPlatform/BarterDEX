var PriceStyleSettingsDialog_html = `
<div id="scxPriceStyleDialog" class="modal scxDialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <a href="#" data-dismiss="modal" aria-hidden="true" class="close">×</a>
                <h4 id="scxPriceStyleDialog_title">Price Style Dialog</h4>
            </div>
            <div class="modal-body scxPriceStyleDialog-body">

                <div class="scxPriceStyleDialog_panel_ntb_inputsPanel">
                    <table>
                        <tr class="scxPriceStyleDialog_panel_ntb_source">
                            <td>
                                <label class="scxPriceStyleDialog_label_source">Source</label>
                                <select class="scxPriceStyleDialog_input_source scxDropdown">
                                    <option value="close">Close</option>
                                    <option value="highLow">High/Low</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="scxPriceStyleDialog_panel_ntb_boxSizeKind">
                            <td>
                                <label class="scxPriceStyleDialog_label_boxSizeKind">Calculation Method</label>
                                <select class="scxPriceStyleDialog_input_boxSizeKind scxDropdown">
                                    <option value="atr">ATR</option>
                                    <option value="fixed">Fixed</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="scxPriceStyleDialog_panel_ntb_ATRLength">
                            <td>
                                <label class="scxPriceStyleDialog_label_ATRLength">ATR Length</label>
                                <input class="scxPriceStyleDialog_input_ATRLength form-control" type="text">
                            </td>
                        </tr>
                        <tr class="scxPriceStyleDialog_panel_ntb_boxSize">
                            <td>
                                <label class="scxPriceStyleDialog_label_boxSize">Box Size</label>
                                <input class="scxPriceStyleDialog_input_boxSize form-control" type="text">
                            </td>
                        </tr>
                        <tr class="scxPriceStyleDialog_panel_ntb_reversalAmount">
                            <td>
                                <label class="scxPriceStyleDialog_label_reversalAmount">Reversal Amount</label>
                                <input class="scxPriceStyleDialog_input_reversalAmount form-control" type="text">
                            </td>
                        </tr>
                        <tr class="scxPriceStyleDialog_panel_ntb_reversalDoubleAmount">
                            <td>
                                <label class="scxPriceStyleDialog_label_reversalDoubleAmount">Reversal Amount</label>
                                <input class="scxPriceStyleDialog_input_reversalDoubleAmount form-control" type="text">
                            </td>
                        </tr>
                        <tr class="scxPriceStyleDialog_panel_ntb_numberOfLine">
                            <td>
                                <label class="scxPriceStyleDialog_label_numberOfLine">Number Of Line</label>
                                <input class="scxPriceStyleDialog_input_numberOfLine form-control" type="text">
                            </td>
                        </tr>
                        <tr class="scxPriceStyleDialog_panel_ntb_barStyle">
                            <td>
                                <label class="scxPriceStyleDialog_label_barStyle">Style</label>
                                <select class="scxPriceStyleDialog_input_barStyle scxDropdown">
                                    <option value="bar">OHLC</option>
                                    <option value="HLBar">HL</option>
                                    <option value="HLCBar">HLC</option>
                                </select>
                            </td>
                        </tr>
                        <tr class="scxPriceStyleDialog_panel_ntb_coloredBarStyle">
                            <td>
                                <label class="scxPriceStyleDialog_label_coloredBarStyle">Style</label>
                                <select class="scxPriceStyleDialog_input_coloredBarStyle scxDropdown">
                                    <option value="coloredBar">OHLC</option>
                                    <option value="coloredHLBar">HL</option>
                                    <option value="coloredHLCBar">HLC</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
            <div class="modal-footer scxPriceStyleDialog-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="scxPriceStyleDialog_btn_save">Save</button>
            </div>
        </div>
    </div>
</div>`;