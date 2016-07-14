package com.kalix.oa.workflow.sealapply.biz;


import com.kalix.middleware.workflow.biz.WorkflowGenericBizServiceImpl;
import com.kalix.oa.workflow.sealapply.api.biz.ISealApplyBeanService;
import com.kalix.oa.workflow.sealapply.api.dao.ISealApplyBeanDao;
import com.kalix.oa.workflow.sealapply.entities.SealApplyBean;

import java.util.Map;

/**
 * @author chenyanxu
 */
public class SealApplyBeanServiceImpl extends WorkflowGenericBizServiceImpl<ISealApplyBeanDao, SealApplyBean> implements ISealApplyBeanService {
    @Override
    public String getProcessKeyName() {
        return PROCESS_KEY_NAME;
    }

    @Override
    public Map getVariantMap(Map map,SealApplyBean bean) {
        return map;
    }
}
