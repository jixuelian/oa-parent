/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.carApply.Main', {
  extend: 'kalix.container.BaseContainer',
  requires: [
    'kalix.workflow.carApply.view.CarApplyGrid',
    'kalix.workflow.carApply.view.CarApplySearchForm'
  ],
  storeId: 'carApplyStore',
  items: [
    {
      title: '用车申请查询',
      xtype: 'carApplySearchForm'
    },
    {
      xtype: 'carApplyGrid',
      title: '用车申请列表'
    }
  ]
});
