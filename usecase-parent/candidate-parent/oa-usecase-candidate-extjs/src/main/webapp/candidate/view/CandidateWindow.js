/**
 * 应聘新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.candidate.view.CandidateWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.usecase.candidate.viewModel.CandidateViewModel',
        'kalix.controller.BaseWindowController',
        'kalix.admin.dict.component.DictCombobox'
    ],
    alias: 'widget.candidateWindow',
    viewModel: 'candidateViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'candidateStore'
    },
    xtype: "candidateWindow",
    width: 400,
    //todo 在此修改表单
    items: [{
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '人员类别',
                allowBlank: false,
                xtype: 'dictCombobox',
                dictType: 'oa_candidate_personCategory',
                bind: {
                    //activeError: '{validation.personCategory}',
                    value: '{rec.personCategory}'
                }
            },
            {
                fieldLabel: '所在部门',
                allowBlank: false,
                bind: {
                    //activeError: '{validation.department}',
                    value: '{rec.department}'
                }
            },
            {
                fieldLabel: '姓名',
                allowBlank: false,
                bind: {
                    //activeError: '{validation.xm}',
                    value: '{rec.xm}'
                }
            },
            {
                fieldLabel: '性别',
                allowBlank: false,
                xtype: 'dictCombobox',
                dictType: 'sex',
                bind: {
                    //activeError: '{validation.sex}',
                    value: '{rec.sex}'
                }
            },
            {
                fieldLabel: '年龄',
                allowBlank: false,
                xtype: 'numberfield',
                bind: {
                    //activeError: '{validation.age}',
                    value: '{rec.age}'
                }
            },
            {
                fieldLabel: '联系电话',
                allowBlank: false,
                bind: {
                    //activeError: '{validation.tel}',
                    value: '{rec.tel}'
                }
            },
            {
                fieldLabel: '毕业学校',
                allowBlank: false,
                bind: {
                    //activeError: '{validation.graduateSchool}',
                    value: '{rec.graduateSchool}'
                }
            },
            {
                fieldLabel: '专业',
                allowBlank: false,
                bind: {
                    //activeError: '{validation.major}',
                    value: '{rec.major}'
                }
            },
            {
                fieldLabel: '最后学历',
                allowBlank: false,
                bind: {
                    value: '{rec.education}'
                }
            },
            {
                fieldLabel: '户口所在地',
                allowBlank: false,
                bind: {
                    value: '{rec.residence}'
                }
            },
            {
                fieldLabel: '应聘岗位',
                allowBlank: false,
                bind: {
                    //activeError: '{validation.comment}',
                    value: '{rec.position}'
                }
            },
            {
                fieldLabel: '期望工资',
                allowBlank: false,
                bind: {
                    //activeError: '{validation.salary}',
                    value: '{rec.salary}'
                }
            },
            {
                fieldLabel: '从业经验',
                allowBlank: false,
                bind: {
                    value: '{rec.experience}'
                }
            },
            {
                fieldLabel: '备注',
                allowBlank: false,
                xtype: 'textarea',
                bind: {
                    value: '{rec.comment}'
                }
            }
        ]
    }]
});