/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.employApply.view.EmployApplyGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.workflow.employApply.controller.EmployApplyGridController',
        'kalix.workflow.employApply.store.EmployApplyStore',
        'kalix.oa.oADict.component.OADictGridColumn'
    ],
    alias: 'widget.employApplyGrid',
    xtype: 'employApplyGrid',
    iconCls: 'iconfont icon-public-employ',
    controller: {
        type: 'employApplyGridController',
        cfgForm: 'kalix.workflow.employApply.view.TestEmployApplyWindow',
        cfgViewForm: 'kalix.workflow.employApply.view.EmployApplyViewWindow',
        cfgModel: 'kalix.workflow.employApply.model.EmployApplyModel'
    },
    store: {
        type: 'employApplyStore'
    },
    columns: {
        defaults: {
            flex: 1,
            renderer: 'addTooltip'
        },
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                flex: 0,
                align: 'center',
                renderer: null
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true
            },
            {
                text: '人员类别',
                xtype: 'oADictGridColumn',
                dictType: '招聘人员类别',
                dataIndex: 'personCategory',
                renderer: null
            },
            {
                text: '部门',
                dataIndex: 'department'
            },
            {
                text: '姓名',
                dataIndex: 'xm'
            },
            {
                text: '性别',
                xtype: 'oADictGridColumn',
                dictType: '性别',
                dataIndex: 'sex',
                renderer: null
            },
            {
                text: '经办人',
                dataIndex: 'createBy'
            },
            {
                text: '审批结果',
                dataIndex: 'auditResult'
            },
            {
                text: '当前环节',
                dataIndex: 'currentNode'
            },
            {
                text: '工作流状态',
                xtype: 'oADictGridColumn',
                dictType: '工作流状态',
                dataIndex: 'status',
                colorConfig: {
                    '结束': 'red',
                    'default': 'blue'
                },
                renderer: null
            },
            {
                flex: 1.5,
                //width: 80,
                xtype: 'securityGridColumnCommon',
                items: [
                    {
                        iconCls: 'iconfont icon-view-column',
                        permission: 'oa:workFlowBizModule:employApplyMenu:view',
                        tooltip: '查看',
                        handler: 'onView'
                    },
                    {
                        permission: 'oa:workFlowBizModule:employApplyMenu:edit',
                        tooltip: '编辑',
                        handler: 'onEdit',
                        getClass: function (v, meta, record) {
                            if (0 != record.data.status) {
                                return "kalix_hidden";
                            }
                            return "iconfont icon-edit-column";
                        }
                    },
                    {
                        permission: 'oa:workFlowBizModule:employApplyMenu:progress',
                        tooltip: '查看进度',
                        handler: 'onViewCurrentProcess',
                        getClass: function (v, meta, record) {
                            if (1 != record.data.status) {
                                return "kalix_hidden";
                            }
                            return "iconfont icon-current-process";
                        }
                    },
                    {
                        permission: 'oa:workFlowBizModule:employApplyMenu:delete',
                        tooltip: '删除',
                        handler: 'onDelete',
                        getClass: function (v, meta, record) {
                            if (0 != record.data.status) {
                                return "kalix_hidden";
                            }
                            return "iconfont icon-delete";
                        }
                    },
                    {
                        getClass: function (v, meta, record) {
                            if (record.data.status) {
                                return "kalix_hidden";
                            }
                            return "iconfont icon-start";
                        },
                        getTip: function (value, metadata, record, row, col, store) {
                            if (record.data.status) {
                                return "停止";
                            }
                            return '启动';
                        },
                        permission: 'oa:workFlowBizModule:employApplyMenu:control',
                        handler: 'onWorkFlowStart'
                    },
                    {
                        iconCls: 'iconfont icon-attachment-column',
                        permission: 'oa:workFlowBizModule:employApplyMenu:attachment',
                        tooltip: '附件管理',
                        handler: 'onAttachmentManage'
                    }
                ]
            }
        ]
    }
    //,
    //tbar: {
    //    xtype: 'securityToolbar',
    //    verifyItems: [
    //        {
    //            text: '添加',
    //            xtype: 'button',
    //            permission: '',
    //            iconCls: 'iconfont icon-add',
    //            handler: 'onAdd'
    //        }
    //    ]
    //}
});
