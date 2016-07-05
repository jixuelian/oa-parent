/**
 * 面试新增和修改表单
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.interview.view.InterviewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.usecase.interview.viewModel.InterviewViewModel',
        'kalix.controller.BaseWindowController'
    ],
    alias: 'widget.interviewWindow',
    viewModel: 'interviewViewModel',
    controller: {
        type: 'baseWindowController',
        storeId: 'interviewStore'
    },
    xtype: "interviewWindow",
    width: 400,
    //todo 在此修改表单
    items: [
        {
            xtype: 'baseForm',
            items: [
                {
                    fieldLabel: '应聘人',
                    allowBlank: false,
                    bind: {
                        value: '{rec.candidateId}'
                    }
                },
                {
                    fieldLabel: '初试时间',
                    allowBlank: false,
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    bind: {
                        value: '{rec.dateFirst}'
                    }
                },
                {
                    fieldLabel: '初试面试官',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.interviewerFirst}',
                        value: '{rec.interviewerFirst}'
                    }
                },
                {
                    fieldLabel: '初试面试内容',
                    allowBlank: false,
                    xtype: 'textarea',
                    bind: {
                        activeError: '{validation.interviewContentFirst}',
                        value: '{rec.interviewContentFirst}'
                    }
                },
                {
                    fieldLabel: '初试是否通过',
                    allowBlank: false,
                    xtype: 'combobox',
                    editable: false,
                    valueField: 'passFirst',
                    displayField: 'name',
                    store: {
                        data: [
                            {'name': '是', 'passFirst': true},
                            {'name': '否', 'passFirst': false}
                        ]
                    },
                    bind: {
                        activeError: '{validation.passFirst}',
                        value: '{rec.passFirst}'
                    }
                },
                {
                    fieldLabel: '复试时间',
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.dateSecond}',
                        value: '{rec.dateSecond}'
                    }
                },
                {
                    fieldLabel: '复试面试官',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.interviewerSecond}',
                        value: '{rec.interviewerSecond}'
                    }
                },
                {
                    fieldLabel: '复试面试内容',
                    allowBlank: false,
                    xtype: 'textarea',
                    bind: {
                        activeError: '{validation.interviewContentSecond}',
                        value: '{rec.interviewContentSecond}'
                    }
                },
                {
                    fieldLabel: '复试是否通过',
                    allowBlank: false,
                    xtype: 'combobox',
                    editable: false,
                    valueField: 'passSecond',
                    displayField: 'name',
                    store: {
                        data: [
                            {'name': '是', 'passSecond': true},
                            {'name': '否', 'passSecond': false}
                        ]
                    },
                    bind: {
                        activeError: '{validation.passSecond}',
                        value: '{rec.passSecond}'
                    }
                },
                {
                    fieldLabel: '是否聘用',
                    allowBlank: false,
                    xtype: 'combobox',
                    editable: false,
                    valueField: 'employment',
                    displayField: 'name',
                    store: {
                        data: [
                            {'name': '是', 'employment': true},
                            {'name': '否', 'employment': false}
                        ]
                    },
                    bind: {
                        activeError: '{validation.employment}',
                        value: '{rec.employment}'
                    }
                }
            ]
        }
    ]
});