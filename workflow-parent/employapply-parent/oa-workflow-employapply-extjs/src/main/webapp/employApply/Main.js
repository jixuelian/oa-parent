/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.employApply.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.workflow.employApply.view.EmployApplyGrid',
        'kalix.workflow.employApply.viewModel.EmployApplyViewModel',
        'kalix.workflow.employApply.view.EmployApplySearchForm'
    ],
    viewModel: 'employApplyViewModel',
    storeId: 'employApplyStore',
    items: [
         {
            title: '入职申请查询',
            xtype: 'employApplySearchForm'
        },
        {
            xtype: 'employApplyGrid',
            title: '入职申请列表',
            margin: 10
        }
    ]
});
