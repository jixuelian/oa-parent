/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.recruitApply.store.RecruitApplyStore', {
    extend: 'kalix.store.BaseStore',
    alias: 'store.recruitApplyStore',
    model: 'kalix.workflow.recruitApply.model.RecruitApplyModel',
    xtype: 'recruitApplyStore',
    storeId: 'recruitApplyStore',
    proxyUrl: CONFIG.restRoot + '/camel/rest/recruitapplys'
});