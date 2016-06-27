/**
 * @author chenyanxu
 */

Ext.define('kalix.workflow.carApply.view.CarApplyViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.workflow.carApply.view.CarApplyViewForm',
        'kalix.workflow.carApply.viewModel.CarApplyViewModel'
    ],
    alias: 'widget.carApplyViewWindow',
    xtype: "carApplyViewWindow",
    viewModel: 'carApplyViewModel',
    width: 840,
    items: [
        {
            xtype: 'carApplyViewForm',
            layout: {
                type: 'table',
                columns: 6
            }
        }
    ]
});