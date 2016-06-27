package com.kalix.oa.workflow.carapply.web.impl.form;

import com.kalix.middleware.workflow.biz.AbstractAuditFormHandler;

/**
 * Created by sunlf on 2016/2/25.
 * 用车申请审批窗口
 */
public class CarApplyAuditFormImpl extends AbstractAuditFormHandler {
    @Override
    public String getFormClass() {
        return "kalix.workflow.carApply.view.CarApplyViewForm";
    }
}
