/**model of contract
 *  @author chenyanxu
 *
 */
Ext.define('kalix.workflow.employApply.model.EmployApplyModel', {
    extend: 'kalix.model.WorkflowBaseModel',
    fields: [
        {name: 'candidateId'}, //应聘者ID
        {name: 'branchSchoolLeader'}, //分院领导审批
        {name: 'schoolLeader'}, //校领导审批
        {name: 'manpower'}//人力资源部长签字
    ]
});
