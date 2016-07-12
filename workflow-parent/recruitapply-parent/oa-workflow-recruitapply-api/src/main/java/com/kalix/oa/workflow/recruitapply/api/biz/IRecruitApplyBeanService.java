package com.kalix.oa.workflow.recruitapply.api.biz;


import com.kalix.middleware.workflow.api.biz.IWorkflowBizService;
import com.kalix.oa.workflow.recruitapply.entities.RecruitApplyBean;

/**
 * Created by Administrator on 2016/6/15.
 */
public interface IRecruitApplyBeanService extends IWorkflowBizService<RecruitApplyBean> {
    final String PROCESS_KEY_NAME="recruitapply";
}
