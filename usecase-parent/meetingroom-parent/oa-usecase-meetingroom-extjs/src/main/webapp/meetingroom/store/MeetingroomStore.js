/**
 * 会议室数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.meetingroom.store.MeetingroomStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.usecase.meetingroom.model.MeetingroomModel',
    alias: 'store.meetingroomStore',
    xtype: 'meetingroomStore',
    storeId: "meetingroomStore",
    proxyUrl: '/kalix/camel/rest/meetingrooms'
});