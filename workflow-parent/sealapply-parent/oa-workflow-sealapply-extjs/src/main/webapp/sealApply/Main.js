/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.sealApply.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.workflow.sealApply.view.SealApplyGrid',
        'kalix.workflow.sealApply.view.SealApplySearchForm'
    ],
    storeId: 'sealApplyStore',
    items: [
         {
            title: '印章申请查询',
            xtype: 'sealApplySearchForm'
        },
        {
            xtype: 'sealApplyGrid',
            title: '印章申请列表'
        }
    ]
});
