/**
 * 面试人员模型
 *
 * @author
 * @version 1.0.0
 */


Ext.define('kalix.usecase.interview.model.InterviewModel', {
    extend: 'kalix.model.BaseModel',
    //todo 在此修改模型定义
    fields: [
        {
            name: 'candidateId'
        },
        {
            name: 'dateFirst'
        },
        {
            name: 'interviewerFirst'
        },
        {
            name: 'interviewContentFirst'
        },
        {
            name: 'passFirst'
        },
        {
            name: 'dateSecond',
            type: 'date',
            dateFormat: 'Y-m-d'
        },
        {
            name: 'interviewerSecond'
        },
        {
            name: 'interviewContentSecond',
            type: 'date',
            dateFormat: 'Y-m-d'
        },
        {
            name: 'passSecond'
        },
        {
            name: 'employment'
        }
    ]
});
