/**
 * 应聘人员查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.candidate.view.CandidateSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.candidateSearchForm',
    xtype: 'candidateSearchForm',
    storeId: 'candidateStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '人员类别',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'personCategory'
        },
        {
            xtype: 'textfield',
            fieldLabel: '所在部门',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'department'
        },
        {
            xtype: 'textfield',
            fieldLabel: '应聘岗位',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'position'
        }
    ]
});
