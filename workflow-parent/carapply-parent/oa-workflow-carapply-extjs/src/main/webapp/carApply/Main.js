/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.carApply.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.workflow.carApply.view.CarApplyGrid',
        'kalix.workflow.carApply.viewModel.CarApplyViewModel',
        'kalix.workflow.carApply.view.CarApplySearchForm'
    ],
    viewModel: 'carApplyViewModel',
    storeId: 'carApplyStore',
    items: [
         {
            title: '用车申请查询',
            xtype: 'carApplySearchForm'
        },
        {
            xtype: 'carApplyGrid',
            title: '用车申请列表',
            margin: 10
        }
    ]
});
