/**
 * 字典数据仓库
 *
 * @author chenyanxu
 */
Ext.define('kalix.oa.oADict.store.OADictStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.dict.model.DictModel',
    alias: 'store.oADictStore',
    xtype: 'oADictStore',
    storeId: 'oADictStore',
    proxyUrl: CONFIG.restRoot + '/camel/rest/oa/dicts'
});