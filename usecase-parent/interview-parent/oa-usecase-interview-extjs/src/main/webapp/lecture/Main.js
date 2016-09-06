/**
 * 试讲首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.lecture.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.usecase.lecture.view.LectureGrid',
        'kalix.usecase.lecture.view.LectureSearchForm'
    ],
    items: [
        {
            title: '试讲人员查询',
            xtype: 'lectureSearchForm'
        },
        {
            xtype: 'lectureGridPanel',
            id: 'lectureGridPanel',
            title: '试讲人员列表',
            iconCls: 'x-fa fa-cutlery'
        }
    ]
});
