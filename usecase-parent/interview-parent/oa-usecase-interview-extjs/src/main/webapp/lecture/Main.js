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
        'kalix.usecase.lecture.view.LectureSearchForm',
        'kalix.usecase.lecture.viewModel.LectureViewModel'
    ],
    storeId: 'lectureStore',
    viewModel: 'lectureViewModel',
    items: [
        {
            title: '面试人员查询',
            xtype: 'lectureSearchForm'
        },
        {
            xtype: 'lectureGridPanel',
            id: 'lectureGridPanel',
            title: '面试人员列表',
            iconCls: 'x-fa fa-cutlery',
            margin: 10
        }
    ]
});
