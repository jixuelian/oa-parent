/**
 * 面试人员查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.interview.view.InterviewSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.interviewSearchForm',
    xtype: 'interviewSearchForm',
    storeId: 'interviewStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '应聘者姓名',
            labelAlign: 'right',
            labelWidth: 80,
            width: 200,
            name: 'xm'
        }
    ]
});
