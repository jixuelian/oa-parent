/**
 * 面试人员表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.interview.view.InterviewGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.usecase.interview.controller.InterviewGridController',
        'kalix.usecase.interview.store.InterviewStore'
    ],
    alias: 'widget.interviewGrid',
    xtype: 'interviewGridPanel',
    controller: {
        type: 'interviewGridController',
        storeId: 'interviewStore',
        cfgForm: 'kalix.usecase.interview.view.InterviewWindow',
        cfgViewForm: 'kalix.usecase.interview.view.InterviewViewWindow',
        cfgModel: 'kalix.usecase.interview.model.InterviewModel'
    },
    store: {
        type: 'interviewStore'
    },

    //todo 在此修改grid显示列
    columns: {
        defaults: {flex: 1,renderer: 'addTooltip'},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                align: 'center',
                flex:0,
                renderer:this.update
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true
            },
            {
                text: 'candidateId',
                dataIndex: 'candidateId',
                hidden: true
            },{
                text: '应聘者姓名',
                dataIndex: 'xm'
            },
            {
                text: '初试时间',
                dataIndex: 'dateFirst',
                xtype: 'datecolumn',
                format: 'Y-m-d',
                renderer: null
            },
            {
                text: '初试面试官',
                dataIndex: 'interviewerFirst'
            },
            {
                text: '初试面试内容',
                dataIndex: 'interviewContentFirst'
            },
            {
                text: '初试是否通过',
                trueText: '是',
                falseText: '否',
                xtype: 'booleancolumn',
                dataIndex: 'passFirst',
                renderer: null
            },
            {
                text: '复试时间',
                dataIndex: 'dateSecond',
                xtype: 'datecolumn',
                format: 'Y-m-d',
                renderer: null
            },
            {
                text: '复试面试官',
                dataIndex: 'interviewerSecond'
            },
            {
                text: '复试面试内容',
                dataIndex: 'interviewContentSecond'
            },
            {
                text: '复试是否通过',
                trueText: '是',
                falseText: '否',
                xtype: 'booleancolumn',
                dataIndex: 'passSecond',
                renderer: null
            },
            {
                text: '是否聘用',
                trueText: '是',
                falseText: '否',
                xtype: 'booleancolumn',
                dataIndex: 'employment',
                renderer: null
            },
            {
                xtype: 'securityGridColumnCommon',
                items: [
                    {
                        iconCls:'iconfont icon-view-column',
                        permission: '',
                        tooltip: '查看',
                        handler: 'onView'
                    },
                    {
                        iconCls:'iconfont icon-edit-column',
                        permission: '',
                        tooltip: '初试',
                        handler: 'onClick'
                    },
                    {
                        iconCls:'iconfont icon-edit-column',
                        permission: '',
                        tooltip: '复试',
                        handler: 'onEdit'
                    },
                    {
                        iconCls:'iconfont icon-delete',
                        permission: '',
                        tooltip: '删除',
                        handler: 'onDelete'
                    }
                ]
            }
        ]
    }
});
