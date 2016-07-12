/**
 * 面试首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.app.leave.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.app.leave.view.LeaveGrid',
        'kalix.app.leave.view.LeaveSearchForm',
        'kalix.app.leave.viewModel.LeaveViewModel'
    ],
    storeId: 'leaveStore',
    viewModel: 'leaveViewModel',
    items: [
        {
            title: '面试人员查询',
            xtype: 'leaveSearchForm'
        },
        {
            xtype: 'leaveGridPanel',
            id: 'leaveGridPanel',
            title: '面试人员列表',
            iconCls: 'x-fa fa-cutlery',
            margin: 10
        }
    ]
});
