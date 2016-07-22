/**
 * 字典数据仓库
 *
 * @author chenyanxu
 */
Ext.define('kalix.oa.oADict.store.OADictNoPageStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.dict.model.DictModel',
    alias: 'store.oADictNoPageStore',
    xtype: 'oADictNoPageStore',
    storeId: 'oADictNoPageStore',
    pageSize:0,
    singleton: true,
    proxyUrl: CONFIG.restRoot + '/camel/rest/oa/dicts'
});