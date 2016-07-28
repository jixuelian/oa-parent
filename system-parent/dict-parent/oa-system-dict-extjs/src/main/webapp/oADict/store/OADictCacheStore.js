/**
 * 字典数据仓库
 *
 * @author chenyanxu
 */
Ext.define('kalix.oa.oADict.store.OADictCacheStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.dict.model.DictModel',
    alias: 'store.oADictCacheStore',
    xtype: 'oADictCacheStore',
    storeId: 'oADictCacheStore',
    pageSize:0,
    autoLoad:true,
    singleton: true,
    proxyUrl: CONFIG.restRoot + '/camel/rest/oa/dicts/cache/list'
});