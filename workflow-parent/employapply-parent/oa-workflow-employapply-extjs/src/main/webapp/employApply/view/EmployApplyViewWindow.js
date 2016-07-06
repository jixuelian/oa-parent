/**
 * @author chenyanxu
 */

Ext.define('kalix.workflow.employApply.view.EmployApplyViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.workflow.employApply.view.EmployApplyViewForm',
        'kalix.workflow.employApply.viewModel.EmployApplyViewModel'
    ],
    alias: 'widget.employApplyViewWindow',
    xtype: "employApplyViewWindow",
    viewModel: 'employApplyViewModel',
    width: 840,
    items: [
        {
            xtype: 'employApplyViewForm',
            layout: {
                type: 'table',
                columns: 6
            }
        }
    ]
});