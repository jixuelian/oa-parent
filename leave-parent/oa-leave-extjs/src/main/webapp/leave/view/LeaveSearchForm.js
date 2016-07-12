/**
 * 面试人员查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.app.leave.view.LeaveSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.leaveSearchForm',
    xtype: 'leaveSearchForm',
    storeId: 'leaveStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '职位名称',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'name'
        }
    ]
});
