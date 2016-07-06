/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.employApply.store.EmployApplyStore', {
    extend: 'kalix.store.BaseStore',
    alias: 'store.employApplyStore',
    model: 'kalix.workflow.employApply.model.EmployApplyModel',
    xtype: 'employApplyStore',
    storeId: 'employApplyStore',
    proxyUrl: CONFIG.restRoot + '/camel/rest/employapplys'
});