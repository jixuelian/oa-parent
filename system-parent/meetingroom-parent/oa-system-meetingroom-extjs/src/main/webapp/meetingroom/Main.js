/**
 * 会议室首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.system.meetingroom.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.system.meetingroom.view.MeetingroomGrid',
        'kalix.system.meetingroom.view.MeetingroomSearchForm'
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
