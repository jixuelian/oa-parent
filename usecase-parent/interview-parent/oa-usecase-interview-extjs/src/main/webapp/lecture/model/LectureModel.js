/**
 * 试讲人员模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.usecase.lecture.model.LectureModel', {
    extend: 'kalix.model.BaseModel',
    //todo 在此修改模型定义
    fields: [
        {
            name: 'candidateId'
        },
        {
            name: 'subject'
        },
        {
            name: 'content'
        },
        {
            name: 'argumentScore'
        },
        {
            name: 'coursewareScore'
        },
        {
            name: 'expressionScore'
        },
        {
            name: 'attitudeScore'
        },
        {
            name: 'effectScore'
        },
        {
            name: 'qa'
        },
        {
            name: 'comment'
        },
        {
            name: 'suggestion'
        },
        {
            name: 'participant'
        },
        {
            name: 'employment'
        },
        {
            name: 'employApplyWorkflowId'
        }
    ]
});
