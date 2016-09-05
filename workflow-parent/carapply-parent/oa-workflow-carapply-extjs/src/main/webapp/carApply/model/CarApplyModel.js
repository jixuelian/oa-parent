/**model of contract
 *  @author chenyanxu
 *
 */
Ext.define('kalix.workflow.carApply.model.CarApplyModel', {
    extend: 'kalix.model.WorkflowBaseModel',
    fields: [
        {name: 'reason',validators: [{type: 'presence'}]},//用车事由
        {name: 'usageCount', validators: [{type: 'presence'},{type: 'range',min:1}]}, //乘车人数
        {name: 'beginDate', type: 'date', dateFormat: 'Y-m-d H:i:s',validators: [{type: 'presence'}]}, //用车时段,开始时间
        {name: 'endDate', type: 'date', dateFormat: 'Y-m-d H:i:s',validators: [{type: 'presence'}]}, //用车时段，结束时间
        {name: 'applyDate', type: 'date', dateFormat: 'Y-m-d H:i:s', defaultValue: new Date()},//用车申请时间
        {name: 'address',validators: [{type: 'presence'}]}, //用车起始地点
        {name: 'city', type: 'boolean', defaultValue: true,validators: [{type: 'presence'}]},//是否市内用车
        {name: 'operatorPhone',validators: [{type: 'presence'}]},//申请人联系电话
        {name: 'depUser'}, //申请部门负责人签字
        {name: 'managerUser'}, //副校级领导审核
        {name: 'schoolUser'}, //校务部签字
        {name: 'schoolManagerUser'}//校务部主管领导审批（市外）
    ]
});
