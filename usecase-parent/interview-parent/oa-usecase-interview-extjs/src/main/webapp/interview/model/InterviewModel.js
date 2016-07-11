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
            name: 'dateSecond'
        },
        {
            name: 'interviewerSecond'
        },
        {
            name: 'interviewContentSecond'
        },
        {
            name: 'passSecond'
        },
        {
            name: 'whichInterview'
        }
    ]
});
