/**
 * 会议室首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.meetingroom.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.usecase.meetingroom.view.MeetingroomGrid',
        'kalix.usecase.meetingroom.view.MeetingroomSearchForm'
    ],
    items: [
        {
            title: '会议室查询',
            xtype: 'meetingroomSearchForm'
        },
        {
            xtype: 'meetingroomGridPanel',
            id: 'meetingroomGridPanel',
            title: '会议室列表',
            iconCls: 'fa fa-university',
            margin: 10
        }
    ]
});
