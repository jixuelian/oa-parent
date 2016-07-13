/**
 * 会议室选择下拉comboBox
 * @author zangyanming
 */
Ext.define('kalix.usecase.meetingroom.component.MeetingroomComboBox', {
    extend: 'kalix.view.components.common.BaseComboBox',
    requires: [
        'kalix.usecase.meetingroom.store.MeetingroomStore'
    ],
    alias: 'widget.meetingroomComboBox',
    xtype: 'meetingroomComboBox',
    valueField: 'id',
    displayField: 'name',
    queryParam: 'name',
    modelField: 'meetingroomId',
    store: {
        type: 'meetingroomStore'
    }
});
