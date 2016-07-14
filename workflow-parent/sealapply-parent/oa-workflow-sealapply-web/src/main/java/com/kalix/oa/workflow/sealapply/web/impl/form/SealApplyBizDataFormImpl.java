package com.kalix.oa.workflow.sealapply.web.impl.form;


import com.kalix.middleware.workflow.biz.AbstractBizDataFormHandler;

/**
 * @author chenyanxu
 * 用车申请业务数据表单
 */
public class SealApplyBizDataFormImpl extends AbstractBizDataFormHandler {
    @Override
    public String getFormClass() {
        return "kalix.workflow.sealApply.view.SealApplyViewForm";
    }
}
