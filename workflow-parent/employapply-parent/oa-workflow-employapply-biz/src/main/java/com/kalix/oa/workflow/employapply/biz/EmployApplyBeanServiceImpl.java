package com.kalix.oa.workflow.employapply.biz;

import com.kalix.framework.core.api.persistence.JsonData;
import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.api.persistence.PersistentEntity;
import com.kalix.framework.core.api.web.model.BaseDTO;
import com.kalix.framework.core.util.Assert;
import com.kalix.framework.core.util.SerializeUtil;
import com.kalix.middleware.workflow.biz.WorkflowGenericBizServiceImpl;
import com.kalix.oa.usecase.candidate.api.biz.ICandidateBeanService;
import com.kalix.oa.usecase.candidate.entities.CandidateBean;
import com.kalix.oa.workflow.employapply.api.biz.IEmployApplyBeanService;
import com.kalix.oa.workflow.employapply.api.dao.IEmployApplyBeanDao;
import com.kalix.oa.workflow.employapply.api.query.EmployApplyDTO;
import com.kalix.oa.workflow.employapply.entities.EmployApplyBean;

import java.util.List;
import java.util.Map;

/**
 * @author chenyanxu
 */
public class EmployApplyBeanServiceImpl extends WorkflowGenericBizServiceImpl<IEmployApplyBeanDao, EmployApplyBean> implements IEmployApplyBeanService {
    private ICandidateBeanService candidateBeanService;

    @Override
    public String getProcessKeyName() {
        return PROCESS_KEY_NAME;
    }

    @Override
    public Map getVariantMap(Map map, EmployApplyBean bean) {
        JsonData jsonData = candidateBeanService.getAllByNativeQuery(1,10,"{\"employApplyWorkflowId\":"+bean.getId()+"}");

        List<PersistentEntity> candidateBeanList = jsonData.getData();
        map.put("personCategory", ((CandidateBean)candidateBeanList.get(0)).getPersonCategory());
        return map;
    }

    @Override
    public JsonData getAllEntityByQuery(int page, int limit, String jsonStr) {
        Map<String, String> jsonMap = SerializeUtil.json2Map(jsonStr);
        //获得查询的sql语句
        String sql = getNativeQueryStr();
        Assert.notNull(sql, "查询条件不能为空.");
        //获得返回的结果类
        Class<? extends BaseDTO> cls = getResultClass();
        Assert.notNull(cls, "返回查询结果类不能为空.");

        String posSql = " order by a.creationDate desc";
        for (Map.Entry<String, String> entry : jsonMap.entrySet()) {
            sql = sql + " and a." + entry.getKey() + " like '%" + entry.getValue() + "%'";
        }

        return dao.findByNativeSql(sql + posSql, page, limit, cls, null);
    }

    @Override
    protected String getNativeQueryStr() {
        return "select a.id,a.personCategory,a.department,a.xm,a.sex,a.age,a.tel,a.position," +
                "b.id as employApplyWorkflowId," +
                "b.processInstanceId," +
                "b.currentNode," +
                "b.status," +
                "b.auditResult," +
                "b.branchSchoolLeader,b.schoolLeader,b.manpower " +
                "from oa_candidate a left join oa_workflow_employapply b " +
                "on a.employApplyWorkflowId = b.id " +
                "where (case a.personcategory when '1' then a.id in (select candidateid from oa_interview c where c.passfirst=true and c.passsecond=true) " +
                "when '2' then a.id in (select candidateid from oa_interview d where d.passfirst=true and d.passsecond=true) " +
                "when '3' then a.id in (select candidateid from oa_lecture e where e.employment=true)" +
                "end)";
    }

    @Override
    protected Class<? extends BaseDTO> getResultClass() {
        return EmployApplyDTO.class;
    }

    @Override
    public JsonStatus startProcess(String id) {
        CandidateBean candidateBean = candidateBeanService.getEntity(Long.parseLong(id));
        if(candidateBean.getEmployApplyWorkflowId() == null || candidateBean.getEmployApplyWorkflowId() == 0){
            EmployApplyBean employApplyBean = new EmployApplyBean();
            employApplyBean.setId(0);
            JsonStatus jsonStatus = this.saveEntity(employApplyBean);

            candidateBean.setEmployApplyWorkflowId(Long.parseLong(jsonStatus.getTag()));
            candidateBeanService.updateEntity(candidateBean);

            return super.startProcess(jsonStatus.getTag());
        }else{
            return super.startProcess(String.valueOf(candidateBean.getEmployApplyWorkflowId()));
        }
    }

    public ICandidateBeanService getCandidateBeanService() {
        return candidateBeanService;
    }

    public void setCandidateBeanService(ICandidateBeanService candidateBeanService) {
        this.candidateBeanService = candidateBeanService;
    }
}
