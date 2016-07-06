/**
 * @author chenyanxu
 */

Ext.define('kalix.workflow.employApply.view.EmployApplyWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseWindowController',
        'kalix.workflow.employApply.viewModel.EmployApplyViewModel',
        'kalix.admin.dict.component.DictCombobox',
        'Ext.ux.DateTimeField'
    ],
    alias: 'widget.employApplyWindow',
    xtype: "employApplyWindow",
    viewModel: 'employApplyViewModel',
    width: 400,
    controller: {
        type: 'baseWindowController',
        storeId: 'employApplyStore'
    },
    items: [{
        items: [
            {
                fieldLabel: '人力资源部长签字',
                bind: {
                    value: '{rec.manpower}'
                }
            }
        ]
    }
    ]
});