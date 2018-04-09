var IndicatorsDialog_html = `
<div id="scxIndicators" class="modal scxDialog" data-keyboard="false" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <a href="#" data-dismiss="modal" aria-hidden="true" class="close">×</a>
                <h4>Indicators</h4>
                <div class="scxInline" id="scxIndicators_searchBlock">
                    <div class="input-group scxCustomWidth">
                        <span class="scxIndicators_searchPic input-group-addon">
                            <span class="glyphicon glyphicon-search"></span>
                        </span>
                        <input id="scxIndicators_inp_search" type="search" class="form-control scxInline" placeholder="Search">
                        <div id="scxIndicators_btn_clearInput">
                            <span class="glyphicon glyphicon-remove"></span>
                        </div>
                    </div>
                </div>
                <div class="scxIndicators_helpControlPanel">
                    <input id="scxIndicators_chkHelpSwitcher" type="checkbox" class="js-switch" />
                    <label for="scxIndicators_chkHelpSwitcher">Help</label>
                    <div class="scxLabel_downloading" style="display: none;"></div>
                </div>
            </div>
            <div class="modal-body scxIndicators-body">
                <p class="scxNoResult">No indicators matched your criteria</p>
                <div id="scxIndicatorsResult"></div>
            </div>
        </div>
    </div>
</div>`;