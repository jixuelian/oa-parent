package com.kalix.oa.workflow.carapply.biz.form;


import com.kalix.middleware.workflow.biz.AbstractBizDataFormHandler;

/**
 * @author chenyanxu
 *         用车申请业务数据表单
 */
public class CarApplyBizDataFormImpl extends AbstractBizDataFormHandler {
    @Override
    public String getFormClass() {
        return "kalix.workflow.carApply.view.CarApplyViewForm";
    }
}
