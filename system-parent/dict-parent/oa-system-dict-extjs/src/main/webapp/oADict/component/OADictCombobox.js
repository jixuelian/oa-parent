/**
 * @author chenyanxu
 */
Ext.define('kalix.oa.oADict.component.OADictCombobox', {
    extend: 'kalix.dict.component.DictCombobox',
    alias: 'widget.oADictCombobox',
    xtype: 'oADictCombobox',
    storeClass:'kalix.oa.oADict.store.OADictCacheStore'
});