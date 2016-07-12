package com.kalix.oa.workflow.recruitapply.web.impl.form;

import com.kalix.middleware.workflow.biz.AbstractAuditFormHandler;

/**
 * Created by sunlf on 2016/2/25.
 * 用人申请审批页面实现类
 */
public class RecruitApplyAuditFormImpl extends AbstractAuditFormHandler {
    @Override
    public String getFormClass() {
        return "kalix.workflow.recruitApply.view.RecruitApplyViewForm";
    }
}
