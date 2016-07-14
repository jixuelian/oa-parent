package com.kalix.oa.workflow.sealapply.api.biz;

import com.kalix.middleware.workflow.api.biz.IWorkflowBizService;
import com.kalix.oa.workflow.sealapply.entities.SealApplyBean;

/**
 * @author chenyanxu
 */
public interface ISealApplyBeanService extends IWorkflowBizService<SealApplyBean> {
    final String PROCESS_KEY_NAME="sealapply";
}
