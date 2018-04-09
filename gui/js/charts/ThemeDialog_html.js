var ThemeDialog_html = `
<div id="scxThemeDialog" class="modal scxDialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <a href="#" data-dismiss="modal" aria-hidden="true" class="close">×</a>
                <h4>Theme "<span id="scxThemeDialog_headerTitle"></span>"</h4>
            </div>
            <div class="modal-body scxThemeDialog-body">
                <table>
                    <tr>
                        <td><label>Line/Bar Color</label></td>
                        <td><input id="scxThemeDialog_input_lineBarColor" type="text" class="scxSpectrum"></td>
                    </tr>
                    <tr>
                        <td><label>Up Candle Color</label></td>
                        <td><input id="scxThemeDialog_input_upBarColor" type="text" class="scxSpectrum"></td>
                    </tr>
                    <tr>
                        <td><label id="scxThemeDialog_label_upBarBorderColor">Up Candle Border Color</label></td>
                        <td class="scxInline">
                            <input id="scxThemeDialog_input_upBarBorderColor" type="text" class="scxSpectrum">
                            <input id="scxThemeDialog_chk_upBarBorderColor" type="checkbox" class="js-switch" />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Down Candle Color</label></td>
                        <td><input id="scxThemeDialog_input_downBarColor" type="text" class="scxSpectrum"></td>
                    </tr>
                    <tr>
                        <td><label id="scxThemeDialog_label_downBarBorderColor">Down Candle Border Color</label></td>
                        <td class="scxInline">
                            <input id="scxThemeDialog_input_downBarBorderColor" type="text" class="scxSpectrum">
                            <input id="scxThemeDialog_chk_downBarBorderColor" type="checkbox" class="js-switch" />
                        </td>
                    </tr>
                    <tr>
                        <td><label>Wick Color</label></td>
                        <td><input id="scxThemeDialog_input_wickColor" type="text" class="scxSpectrum"></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><label>Text Font</label></td>
                        <td>
                            <select id="scxThemeDialog_input_textFont" class="scxDropdown scxFontDropdown">
                                <option style="font-family:Arial;" value="Arial">Arial</option>
                                <option style="font-family:Calibri;" value="Calibri" selected>Calibri</option>
                                <option style="font-family:'Comic Sans';" value="Comic Sans">Comic Sans</option>
                                <option style="font-family:'Courier New';" value="Courier New">Courier New</option>
                                <option style="font-family:Georgia;" value="Georgia">Georgia</option>
                                <option style="font-family:Impact;" value="Impact">Impact</option>
                                <option style="font-family:'Open Sans';" value="Open Sans">Open Sans</option>
                                <option style="font-family:'Source Sans Pro';" value="Source Sans Pro">Source Sans Pro</option>
                                <option style="font-family:Tangerine;" value="Tangerine">Tangerine</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Text Size</label></td>
                        <td>
                            <select id="scxThemeDialog_input_textSize" class="scxDropdown">
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label>Text Color</label></td>
                        <td><input id="scxThemeDialog_input_textColor" type="text" class="scxSpectrum"></td>
                    </tr>
                    <tr>
                        <td><label>Gradient Color 1</label></td>
                        <td><input id="scxThemeDialog_input_gradient1Color" type="text" class="scxSpectrum"></td>
                    </tr>
                    <tr>
                        <td><label>Gradient Color 2</label></td>
                        <td><input id="scxThemeDialog_input_gradient2Color" type="text" class="scxSpectrum"></td>
                    </tr>
                    <tr>
                        <td><label>Grid Color</label></td>
                        <td><input id="scxThemeDialog_input_gridColor" type="text" class="scxSpectrum"></td>
                    </tr>
                </table>

                <div id="scxThemeDialog_themeWrapper" style="float: left;">
                    <select id="scxThemeDialog_input_theme" class="scxDropdown" data-dropup-auto="true">
                        <option title="Theme" value="Dark">Dark</option>
                        <option title="Theme" value="Light">Light</option>
                    </select>
                    <button type="button" class="btn btn-default" id="scxThemeDialog_btn_newTheme">New</button>
                    <span id="scxThemeDialog_newThemeWrapper">
                        <input type="text" value="" class="form-control" id="scxThemeDialog_input_newThemeName">
                        <button type="button" class="btn btn-default" id="scxThemeDialog_btn_newThemeConfirm">Cancel</button>
                    </span>
                </div>
            </div>
            <div class="modal-footer scxThemeDialog-footer">
                <div class="scxThemeDialog-footer-buttons">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success" id="scxThemeDialog_btn_saveTheme">Save</button>
                    <button type="button" class="btn btn-primary" id="scxThemeDialog_btn_save">Apply</button>
                </div>
            </div>
        </div>
    </div>
</div>`;