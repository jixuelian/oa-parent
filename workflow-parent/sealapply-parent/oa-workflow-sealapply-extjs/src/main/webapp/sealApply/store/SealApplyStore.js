/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.sealApply.store.SealApplyStore', {
    extend: 'kalix.store.BaseStore',
    alias: 'store.sealApplyStore',
    model: 'kalix.workflow.sealApply.model.SealApplyModel',
    xtype: 'sealApplyStore',
    storeId: 'sealApplyStore',
    proxyUrl: CONFIG.restRoot + '/camel/rest/sealapplys'
});