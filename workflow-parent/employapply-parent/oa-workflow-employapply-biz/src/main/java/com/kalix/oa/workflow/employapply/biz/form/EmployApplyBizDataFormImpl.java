package com.kalix.oa.workflow.employapply.biz.form;


import com.kalix.middleware.workflow.biz.AbstractBizDataFormHandler;

/**
 * @author chenyanxu
 *         入职申请业务数据表单
 */
public class EmployApplyBizDataFormImpl extends AbstractBizDataFormHandler {
    @Override
    public String getFormClass() {
        return "kalix.workflow.employApply.view.EmployApplyViewForm";
    }
}
