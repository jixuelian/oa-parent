package com.kalix.oa.system.dict.api.biz;

import com.kalix.framework.core.api.biz.IBizService;
import com.kalix.oa.system.dict.entities.OADictBean;

import java.util.List;
import java.util.Map;

public interface IOADictBeanService extends IBizService<OADictBean> {
    List<Map> getDictTypes(String query);
}
