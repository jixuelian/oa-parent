package com.kalix.oa.workflow.carapply.biz;

import com.kalix.middleware.workflow.biz.WorkflowGenericBizServiceImpl;
import com.kalix.oa.workflow.carapply.api.biz.ICarApplyBeanService;
import com.kalix.oa.workflow.carapply.api.dao.ICarApplyBeanDao;
import com.kalix.oa.workflow.carapply.entities.CarApplyBean;

import java.util.Map;

/**
 * @author chenyanxu
 */
public class CarApplyBeanServiceImpl extends WorkflowGenericBizServiceImpl<ICarApplyBeanDao, CarApplyBean> implements ICarApplyBeanService {
    @Override
    public String getProcessKeyName() {
        return PROCESS_KEY_NAME;
    }

    @Override
    public Map getVariantMap(Map map,CarApplyBean bean) {
        map.put("city", bean.isCity());
        return map;
    }
}
