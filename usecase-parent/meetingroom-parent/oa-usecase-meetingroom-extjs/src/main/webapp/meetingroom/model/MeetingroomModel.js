/**
 * 会议室模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.usecase.meetingroom.model.MeetingroomModel', {
    extend: 'kalix.model.BaseModel',

    //todo 在此修改模型定义
    fields: [
        {
            name: 'name',
            validators: [{type: 'presence'}]
        },
        {
            name: 'address',
            validators: [{type: 'presence'}]
        },
        {
            name: 'capacity',
            type: 'int',
            defaultValue: 0
        },
        {
            name: 'equipment'
        },
        {
            name: 'description'
        }
    ]
});
