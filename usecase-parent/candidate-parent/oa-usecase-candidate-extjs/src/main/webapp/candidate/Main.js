/**
 * 面试首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.candidate.Main', {
    extend: 'kalix.container.BaseContainer',
    requires: [
        'kalix.usecase.candidate.view.CandidateGrid',
        'kalix.usecase.candidate.view.CandidateSearchForm',
        'kalix.usecase.candidate.viewModel.CandidateViewModel'
    ],
    storeId: 'candidateStore',
    viewModel: 'candidateViewModel',
    items: [
        {
            title: '应聘人员查询',
            xtype: 'candidateSearchForm'
        },
        {
            xtype: 'candidateGridPanel',
            id: 'candidateGridPanel',
            title: '应聘人员列表',
            iconCls: 'x-fa fa-cutlery',
            margin: 10
        }
    ]
});
