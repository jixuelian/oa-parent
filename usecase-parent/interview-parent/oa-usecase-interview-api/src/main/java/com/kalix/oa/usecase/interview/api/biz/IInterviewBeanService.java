package com.kalix.oa.usecase.interview.api.biz;


import com.kalix.framework.core.api.biz.IBizService;
import com.kalix.framework.core.api.persistence.JsonData;
import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.oa.usecase.interview.entities.InterviewBean;

/**
 * @类描述：应用服务接口.
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public interface IInterviewBeanService extends IBizService<InterviewBean> {
    //在此添加新的业务方法
    JsonData getAllEntityByQuery(Integer page, Integer limit, String jsonStr);
    JsonStatus updateEntity(InterviewBean entity);

}
