/**
 * 面试首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.interview.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.usecase.interview.view.InterviewGrid',
        'kalix.usecase.interview.view.InterviewSearchForm',
        'kalix.usecase.interview.viewModel.InterviewViewModel'
    ],
    storeId: 'interviewStore',
    viewModel: 'interviewViewModel',
    items: [
        {
            title: '面试人员查询',
            xtype: 'interviewSearchForm'
        },
        {
            xtype: 'interviewGridPanel',
            id: 'interviewGridPanel',
            title: '面试人员列表',
            iconCls: 'x-fa fa-cutlery',
            margin: 10
        }
    ]
});
