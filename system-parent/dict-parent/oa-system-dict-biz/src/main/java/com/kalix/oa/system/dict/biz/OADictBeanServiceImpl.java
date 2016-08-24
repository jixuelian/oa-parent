package com.kalix.oa.system.dict.biz;

import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.impl.system.BaseDictServiceImpl;
import com.kalix.oa.system.dict.api.biz.IOADictBeanService;
import com.kalix.oa.system.dict.api.dao.IOADictBeanDao;
import com.kalix.oa.system.dict.entities.OADictBean;

public class OADictBeanServiceImpl extends BaseDictServiceImpl<IOADictBeanDao, OADictBean> implements IOADictBeanService {
    @Override
    public JsonStatus saveEntity(OADictBean entity) {
        Integer maxValue = dao.getFieldMaxValue("value","type='"+entity.getType()+"'");

        maxValue=maxValue+1;

        entity.setValue(maxValue);

        return super.saveEntity(entity);
    }
}
