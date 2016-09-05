/**model of contract
 *  @author chenyanxu
 *
 */
Ext.define('kalix.workflow.sealApply.model.SealApplyModel', {
    extend: 'kalix.model.WorkflowBaseModel',
    fields: [
        {name: 'usageCount',validators: [{type: 'presence'}]},
        {name: 'sealType', defaultValue: '0', type: 'string'},
        {name: 'departmentHead'},
        {name: 'filialeHead'},
        {name: 'counsel'},
        {name: 'generalManager'},
        {name: 'sealAdministrator'},
        {name: 'remark'},
        {name: 'status'},
        {name: 'currentNode'}
    ]
});
