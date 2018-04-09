var DrawingSettingsDialog_html = `
<div id="scxDrawingDialog" class="modal scxDialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <a href="#" data-dismiss="modal" aria-hidden="true" class="close">×</a>
                <h4 id="scxDrawingDialog_title">Drawing</h4>
            </div>
            <div class="modal-body scxDrawingDialog-body">

                <ul class="scxTabs">
                    <li class="scxTabItem active" data-id="scxDrawingDialog_tab_style">Style</li>
                    <li class="scxTabItem" data-id="scxDrawingDialog_tab_tooltip">Tooltip</li>
                </ul>

                <div class="scxTabsContent">
                    <div class="scxTabPanel active" data-id="scxDrawingDialog_tab_style">
                        <div id="scxDrawingDialog_panel_figure">
                            <table>
                                <tr id="scxDrawingDialog_panel_figure_linePanel">
                                    <td><label id="scxDrawingDialog_label_lineColor">Line</label></td>
                                    <td>
                                        <input id="scxDrawingDialog_input_lineColor" type="text" class="scxSpectrum">

                                        <input id="scxDrawingDialog_input_lineWidth" type="text" class="form-control">

                                        <select id="scxDrawingDialog_input_lineStyle" class="scxLineStyleSelector scxDropdown">
                                            <option value="solid">&nbsp;</option>
                                            <option value="dash">&nbsp;</option>
                                            <option value="dot">&nbsp;</option>
                                            <option value="dash-dot">&nbsp;</option>
                                        </select>

                                        <span id="scxDrawingDialog_panel_figure_lineEnabled">
                                            <input id="scxDrawingDialog_chk_lineColor" type="checkbox" class="js-switch" />
                                        </span>
                                    </td>
                                </tr>
                                <tr id="scxDrawingDialog_panel_figure_fillColorPanel">
                                    <td><label id="scxDrawingDialog_label_fillColor">Fill</label></td>
                                    <td>
                                        <input id="scxDrawingDialog_input_fillColor" type="text" class="scxSpectrum">
                                        <span id="scxDrawingDialog_panel_figure_fillColorPanel_fillEnabled">
                                            <input id="scxDrawingDialog_chk_fillColor" type="checkbox" class="js-switch" />
                                        </span>
                                    </td>
                                </tr>

                                <tr id="scxDrawingDialog_panel_figure_fillColorPanel2">
                                    <td><label id="scxDrawingDialog_label_fillColor2">Inner Fill</label></td>
                                    <td>
                                        <input id="scxDrawingDialog_input_fillColor2" type="text" class="scxSpectrum">
                                        <span id="scxDrawingDialog_panel_figure_fillColorPanel2_fillEnabled">
                                            <input id="scxDrawingDialog_chk_fillColor2" type="checkbox" class="js-switch" />
                                        </span>
                                    </td>
                                </tr>

                                <tr id="scxDrawingDialog_panel_figure_label">
                                    <td>
                                        <label id="scxDrawingDialog_label_label">Label</label>
                                    </td>
                                    <td>
                                        <input id="scxDrawingDialog_input_labelText" type="text" class="form-control" minlength="1" maxlength="1" required>

                                        <input id="scxDrawingDialog_input_labelColor" type="text" class="scxSpectrum">

                                        <select id="scxDrawingDialog_input_labelFont" class="scxDropdown scxFontDropdown scxLabelFont">
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

                                        <select id="scxDrawingDialog_input_labelSize" class="scxDropdown">
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="16">16</option>
                                            <option value="18">18</option>
                                            <option value="20">20</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div id="scxDrawingDialog_panel_image">
                            <table>
                                <tr>
                                    <td><input id="scxDrawingDialog_input_imageURL" class="form-control" placeholder="Image URL" type="text"></td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <div class="scxDrawingDialog_imagePreviewWrapper scxHasBg form-control">
                                            <img id="scxDrawingDialog_imagePreview" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div id="scxDrawingDialog_panel_text">
                            <table>
                                <tr>
                                    <td colspan="2" class="scxControls">
                                        <input id="scxDrawingDialog_input_textColor" type="text" class="scxSpectrum">

                                        <select id="scxDrawingDialog_input_textFont" class="scxDropdown scxFontDropdown">
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

                                        <select id="scxDrawingDialog_input_textSize" class="scxDropdown">
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="16">16</option>
                                            <option value="18">18</option>
                                            <option value="20">20</option>
                                        </select>

                                        <div class="scxButtonGroup scxDrawingDialog_textStyles">
                                            <label class="btn btn-default scxDrawingDialog_label_textBold">
                                                <input type="checkbox" id="scxDrawingDialog_chk_textBold">
                                            </label>
                                            <label class="btn btn-default scxDrawingDialog_label_textItalic">
                                                <input type="checkbox" id="scxDrawingDialog_chk_textItalic">
                                            </label>
                                            <label class="btn btn-default scxDrawingDialog_label_textUndeline">
                                                <input type="checkbox" id="scxDrawingDialog_chk_textUndeline">
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <textarea id="scxDrawingDialog_input_text" class="form-control"></textarea>
                                    </td>
                                </tr>
                                <!--<tr>-->
                                    <!--<td><label id="scxDrawingDialog_label_textBackgroundColor">Background Color</label></td>-->
                                    <!--<td>-->
                                        <!--<input id="scxDrawingDialog_input_textBackgroundColor" type="text" class="scxSpectrum">-->
                                        <!--<input id="scxDrawingDialog_chk_textBackgroundColor" type="checkbox" class="js-switch" />-->
                                    <!--</td>-->
                                <!--</tr>-->
                                <!--<tr>-->
                                    <!--<td><label id="scxDrawingDialog_label_textBorderColor">Border Color</label></td>-->
                                    <!--<td>-->
                                        <!--<input id="scxDrawingDialog_input_textBorderColor" type="text" class="scxSpectrum">-->
                                        <!--<input id="scxDrawingDialog_chk_textBorderColor" type="checkbox" class="js-switch" />-->
                                    <!--</td>-->
                                <!--</tr>-->

                            </table>
                        </div>
                    </div>
                    <div class="scxTabPanel" data-id="scxDrawingDialog_tab_tooltip">
                        <div id="scxDrawingDialog_panel_tooltip">
                            <table>
                                <tr id="scxDrawingDialog_panel_tooltip_borderPanel">
                                    <td><label id="scxDrawingDialog_label_tooltipBorder">Border</label></td>
                                    <td>
                                        <input id="scxDrawingDialog_input_tooltipBorderColor" type="text" class="scxSpectrum">

                                        <input id="scxDrawingDialog_input_tooltipBorderWidth" type="text" class="form-control">

                                        <select id="scxDrawingDialog_input_tooltipBorderStyle" class="scxLineStyleSelector scxDropdown scxDrawingDialog_input_tooltipBorderStyle">
                                            <option value="solid">&nbsp;</option>
                                            <option value="dash">&nbsp;</option>
                                            <option value="dot">&nbsp;</option>
                                            <option value="dash-dot">&nbsp;</option>
                                        </select>

                                        <input id="scxDrawingDialog_chk_tooltipBorderColor" type="checkbox" class="js-switch" />
                                    </td>
                                </tr>
                                <tr id="scxDrawingDialog_panel_tooltip_fillPanel">
                                    <td><label id="scxDrawingDialog_label_tooltipFill">Fill</label></td>
                                    <td>
                                        <input id="scxDrawingDialog_input_tooltipFillColor" type="text" class="scxSpectrum">
                                        <input id="scxDrawingDialog_chk_tooltipFillColor" type="checkbox" class="js-switch" />
                                    </td>
                                </tr>
                                <tr id="scxDrawingDialog_panel_tooltip_kindPanel">
                                    <td><label>Kind</label></td>
                                    <td>
                                        <div class="scxButtonGroup scxDrawingDialog_tooltipKind">
                                            <label class="btn btn-default scxDrawingDialog_label_tooltipKindText glyphicon glyphicon-font" title="Text" data-kind="text">
                                                <input type="checkbox" id="scxDrawingDialog_chk_tooltipKindText">
                                            </label>
                                            <label class="btn btn-default scxDrawingDialog_label_tooltipKindImage glyphicon glyphicon-picture" title="Image" data-kind="image">
                                                <input type="checkbox" id="scxDrawingDialog_chk_tooltipKindImage">
                                            </label>
                                            <label class="btn btn-default scxDrawingDialog_label_tooltipKindHTML glyphicon glyphicon-console" title="HTML" data-kind="html">
                                                <input type="checkbox" id="scxDrawingDialog_chk_tooltipKindHTML">
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div id="scxDrawingDialog_panel_tooltipText">
                            <table>
                                <tr id="scxDrawingDialog_panel_tooltipText_style">
                                    <td colspan="2" class="scxControls">
                                        <input id="scxDrawingDialog_input_tooltipTextColor" type="text" class="scxSpectrum">

                                        <select id="scxDrawingDialog_input_tooltipTextFont" class="scxDropdown scxFontDropdown">
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

                                        <select id="scxDrawingDialog_input_tooltipTextSize" class="scxDropdown">
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="16">16</option>
                                            <option value="18">18</option>
                                            <option value="20">20</option>
                                        </select>

                                        <div class="scxButtonGroup scxDrawingDialog_tooltipTextStyles">
                                            <label class="btn btn-default scxDrawingDialog_label_textBold">
                                                <input type="checkbox" id="scxDrawingDialog_chk_tooltipTextBold">
                                            </label>
                                            <label class="btn btn-default scxDrawingDialog_label_textItalic">
                                                <input type="checkbox" id="scxDrawingDialog_chk_tooltipTextItalic">
                                            </label>
                                            <label class="btn btn-default scxDrawingDialog_label_textUndeline">
                                                <input type="checkbox" id="scxDrawingDialog_chk_tooltipTextUndeline">
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                                <tr id="scxDrawingDialog_panel_tooltipText_text">
                                    <td colspan="2">
                                        <textarea id="scxDrawingDialog_input_tooltipText" class="form-control"></textarea>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div id="scxDrawingDialog_panel_tooltipImage">
                            <table>
                                <tr>
                                    <td><input id="scxDrawingDialog_input_tooltipImageURL" class="form-control" placeholder="Image URL" type="text"></td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <div class="scxDrawingDialog_tooltipImagePreviewWrapper scxHasBg form-control">
                                            <img id="scxDrawingDialog_tooltipImagePreview" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer scxDrawingDialog-footer">
                <button type="button" class="btn btn-warning" id="scxDrawingDialog_btn_resetToDefaults">Defaults</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" id="scxDrawingDialog_btn_save">Save</button>
                <button type="button" class="btn btn-primary" id="scxDrawingDialog_btn_apply">Apply</button>
            </div>
        </div>
    </div>
</div>`;