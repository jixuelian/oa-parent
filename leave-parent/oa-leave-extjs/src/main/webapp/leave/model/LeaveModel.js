/**
 * 面试人员模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.app.leave.model.LeaveModel', {
    extend: 'kalix.model.BaseModel',
    //todo 在此修改模型定义
    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'department',
            type: 'string'
        },
        {
            name: 'comment',
            type: 'string'
        }
    ]
});
