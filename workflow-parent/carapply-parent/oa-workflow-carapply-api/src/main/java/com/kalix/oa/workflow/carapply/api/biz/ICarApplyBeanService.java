package com.kalix.oa.workflow.carapply.api.biz;


import com.kalix.middleware.workflow.api.biz.IWorkflowBizService;
import com.kalix.oa.workflow.carapply.entities.CarApplyBean;

/**
 * @author sunlf
 */
public interface ICarApplyBeanService extends IWorkflowBizService<CarApplyBean> {
      final String PROCESS_KEY_NAME="carapply";
}
