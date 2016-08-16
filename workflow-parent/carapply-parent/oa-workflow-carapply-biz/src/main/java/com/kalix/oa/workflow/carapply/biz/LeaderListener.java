package com.kalix.oa.workflow.carapply.biz;

import org.activiti.engine.delegate.DelegateTask;
import org.activiti.engine.delegate.TaskListener;

/**
 * Created by Administrator on 2016-08-15.
 */
public class LeaderListener implements TaskListener {
    @Override
    public void notify(DelegateTask delegateTask) {
//        delegateTask.addCandidateUser();
        delegateTask.addCandidateUser("zhengliguo");
    }
}
