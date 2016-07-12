package com.kalix.oa.workflow.recruitapply.web.impl.form;


import com.kalix.middleware.workflow.biz.AbstractBizDataFormHandler;

/**
 * Created by sunlf on 2016/2/25.
 * 工作流历史查看显示业务数据
 */
public class RecruitApplyBizDataFormImpl extends AbstractBizDataFormHandler {
    @Override
    public String getFormClass() {
        return "kalix.workflow.recruitApply.view.RecruitApplyViewForm";
    }
}
