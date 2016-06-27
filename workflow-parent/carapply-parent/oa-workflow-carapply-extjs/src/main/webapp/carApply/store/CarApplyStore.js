/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.carApply.store.CarApplyStore', {
    extend: 'kalix.store.BaseStore',
    alias: 'store.carApplyStore',
    model: 'kalix.workflow.carApply.model.CarApplyModel',
    xtype: 'carApplyStore',
    storeId: 'carApplyStore',
    proxyUrl: CONFIG.restRoot + '/camel/rest/carapplys'
});