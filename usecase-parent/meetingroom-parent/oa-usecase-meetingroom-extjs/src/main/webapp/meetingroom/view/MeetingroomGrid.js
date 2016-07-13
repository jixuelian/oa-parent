/**
 * 会议室表格
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.meetingroom.view.MeetingroomGrid', {
    extend: 'kalix.view.components.common.BaseGrid',
    requires: [
        'kalix.usecase.meetingroom.controller.MeetingroomGridController',
        'kalix.usecase.meetingroom.store.MeetingroomStore'
    ],
    alias: 'widget.meetingroomGrid',
    xtype: 'meetingroomGridPanel',
    controller: {
        type: 'meetingroomGridController',
        cfgForm: 'kalix.usecase.meetingroom.view.MeetingroomWindow',
        cfgViewForm: 'kalix.usecase.meetingroom.view.MeetingroomViewWindow',
        cfgModel: 'kalix.usecase.meetingroom.model.MeetingroomModel'
    },
    store: {
        type: 'meetingroomStore'
    },

    //todo 在此修改grid显示列
    columns: {
        defaults: {flex: 1, renderer: 'addTooltip'},
        items: [
            {
                xtype: "rownumberer",
                text: "行号",
                width: 50,
                flex: 0,
                align: 'center',
                renderer: this.update
            },
            {
                text: '编号',
                dataIndex: 'id',
                hidden: true
            },
            {
                text: '会议室名称',
                dataIndex: 'name'
            },
            {
                text: '会议室地址',
                dataIndex: 'address'
            },
            {
                text: '容纳人数',
                dataIndex: 'capacity'
            },
            {
                text: '会议室设备说明',
                dataIndex: 'equipment'
            },
            {
                text: '会议室描述',
                dataIndex: 'description'
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
                        tooltip: '编辑',
                        handler: 'onEdit'
                    }, {
                        iconCls:'iconfont icon-delete',
                        permission: '',
                        tooltip: '删除',
                        handler: 'onDelete'
                    }
                ]
            }
        ]
    },
    tbar: {
        xtype: 'securityToolbar',
        verifyItems: [
            {
                text: '添加',
                xtype: 'button',
                //todo change permission
                iconCls:'iconfont icon-add',
                permission: '',
                handler: 'onAdd'
            }
        ]
    }
});
