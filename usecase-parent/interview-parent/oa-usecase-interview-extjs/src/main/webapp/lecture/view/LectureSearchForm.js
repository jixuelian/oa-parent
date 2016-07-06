/**
 * 试讲人员查询表单
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.lecture.view.LectureSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.lectureSearchForm',
    xtype: 'lectureSearchForm',
    storeId: 'lectureStore',
    items: [
        {
            xtype: 'textfield',
            fieldLabel: '应聘人',
            labelAlign: 'right',
            labelWidth: 60,
            width: 200,
            name: 'candidateId'
        }
    ]
});
