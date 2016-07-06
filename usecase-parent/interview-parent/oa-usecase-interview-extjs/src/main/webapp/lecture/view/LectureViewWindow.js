/**
 * 试讲人员查看表单
 *
 * @author
 * @version 1.0.0
 */

Ext.define('kalix.usecase.lecture.view.LectureViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.usecase.lecture.viewModel.LectureViewModel'
    ],
    alias: 'widget.lectureViewWindow',
    viewModel: 'lectureViewModel',
    xtype: "lectureViewWindow",
    width: 400,
    //todo 在此修改查看字段
    items: [
        {
            defaults: {readOnly: true},
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
                    fieldLabel: '试讲题目',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.subject}',
                        value: '{rec.subject}'
                    }
                },
                {
                    fieldLabel: '授课内容',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.content}',
                        value: '{rec.content}'
                    }
                },
                {
                    fieldLabel: '教学论点分数',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.argumentScore}',
                        value: '{rec.argumentScore}'
                    }
                },
                {
                    fieldLabel: '板书或课件分数',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.coursewareScore}',
                        value: '{rec.coursewareScore}'
                    }
                },
                {
                    fieldLabel: '语言表达分数',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.expressionScore}',
                        value: '{rec.expressionScore}'
                    }
                },
                {
                    fieldLabel: '教态分数',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.attitudeScore}',
                        value: '{rec.attitudeScore}'
                    }
                },
                {
                    fieldLabel: '教学效果分数',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.effectScore}',
                        value: '{rec.effectScore}'
                    }
                },
                {
                    fieldLabel: '所提问题及回答情况',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.comment}',
                        value: '{rec.comment}'
                    }
                },
                {
                    fieldLabel: '评语',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.comment}',
                        value: '{rec.comment}'
                    }
                },
                {
                    fieldLabel: '聘用意见',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.suggestion}',
                        value: '{rec.suggestion}'
                    }
                },
                {
                    fieldLabel: '听课人',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.participant}',
                        value: '{rec.participant}'
                    }
                },
                {
                    fieldLabel: '是否聘用',
                    allowBlank: false,
                    bind: {
                        activeError: '{validation.employment}',
                        value: '{rec.employment}'
                    }
                }
            ]
        }
    ]
});