package com.kalix.oa.workflow.recruitapply.biz;


import com.kalix.middleware.workflow.biz.WorkflowGenericBizServiceImpl;
import com.kalix.oa.workflow.recruitapply.api.biz.IRecruitApplyBeanService;
import com.kalix.oa.workflow.recruitapply.api.dao.IRecruitApplyBeanDao;
import com.kalix.oa.workflow.recruitapply.entities.RecruitApplyBean;

import java.util.Map;

/**
 * Created by zangyanming on 2016/6/15.
 */
public class RecruitApplyBeanServiceImpl extends WorkflowGenericBizServiceImpl<IRecruitApplyBeanDao, RecruitApplyBean> implements IRecruitApplyBeanService {
    @Override
    public String getProcessKeyName() {
        return PROCESS_KEY_NAME;
    }

    @Override
    public Map getVariantMap(Map map, RecruitApplyBean bean) {
        return map;
    }
}
