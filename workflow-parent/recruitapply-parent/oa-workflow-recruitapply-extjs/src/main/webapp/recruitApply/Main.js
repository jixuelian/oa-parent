/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.recruitApply.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.workflow.recruitApply.view.RecruitApplyGrid',
        'kalix.workflow.recruitApply.view.RecruitApplySearchForm'
    ],
    storeId: 'recruitApplyStore',
    items: [
         {
            title: '用工招聘申请查询',
            xtype: 'recruitApplySearchForm'
        },
        {
            xtype: 'recruitApplyGrid',
            title: '用工招聘申请列表'
        }
    ]
});
