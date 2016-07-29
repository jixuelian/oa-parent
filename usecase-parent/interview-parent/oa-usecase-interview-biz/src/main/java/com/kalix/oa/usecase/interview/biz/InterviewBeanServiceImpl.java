package com.kalix.oa.usecase.interview.biz;

import com.kalix.framework.core.api.persistence.JsonData;
import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.api.persistence.PersistentEntity;
import com.kalix.framework.core.api.web.model.BaseDTO;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;
import com.kalix.framework.core.util.Assert;
import com.kalix.framework.core.util.SerializeUtil;
import com.kalix.oa.usecase.interview.api.biz.IInterviewBeanService;
import com.kalix.oa.usecase.interview.api.dao.IInterviewBeanDao;
import com.kalix.oa.usecase.interview.api.query.InterviewDTO;
import com.kalix.oa.usecase.interview.entities.InterviewBean;

import java.util.List;
import java.util.Map;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class InterviewBeanServiceImpl extends ShiroGenericBizServiceImpl<IInterviewBeanDao, InterviewBean> implements IInterviewBeanService {
    private JsonStatus jsonStatus = new JsonStatus();
    public InterviewBeanServiceImpl() {
        super.init(InterviewBean.class.getName());
    }

    @Override
    public JsonData getAllEntityByQuery(Integer page, Integer limit, String jsonStr) {
        Map<String, String> jsonMap = SerializeUtil.json2Map(jsonStr);
        //获得查询的sql语句
        String sql = getNativeQueryStr();
        //获得返回的结果类
        Class<? extends BaseDTO> cls = getResultClass();
        Assert.notNull(cls, "返回查询结果类不能为空.");

        String posSql = " order by b.creationDate desc";
        for (Map.Entry<String, String> entry : jsonMap.entrySet()) {
            if(entry.getValue() != null && !entry.getValue().equals("")) {
                sql = sql + " and b." + entry.getKey() + " = " + entry.getValue();
            }
        }

        return dao.findByNativeSql(sql + posSql, page, limit, cls, null);
    }

    /**
     * 从应聘人员表oa_candidate和面试表oa_interview中关联查出人员类别为1(行政和科研人员)和2(专职教师)的2类人员
     * 也就是说行政和科研人员、专职教师需要进行面试，其中行政和科研人员需要进行初始和复试，而专职教师只需要一次面试，兼职教师不需要进行面试
     * @return
     */
    @Override
    protected String getNativeQueryStr() {
        return "select b.id," +
                "a.personcategory," +
                "a.department," +
                "a.xm," +
                "a.sex," +
                "a.age," +
                "a.tel," +
                "a.position," +
                "a.id as candidateid," +
                "b.datefirst," +
                "b.interviewerfirst," +
                "b.interviewcontentfirst," +
                "b.passfirst," +
                "b.datesecond," +
                "b.interviewersecond," +
                "b.interviewcontentsecond," +
                "b.passsecond" +
                " from oa_candidate a , oa_interview b where a.id = b.candidateid and (a.personcategory='1' or a.personcategory='2') ";
    }

    @Override
    protected Class<? extends BaseDTO> getResultClass() {
        return InterviewDTO.class;
    }


    @Override
    public JsonStatus saveEntity(InterviewBean entity){
        if(entity.getWhichInterview() != null && entity.getWhichInterview().equals("review")){
            List<PersistentEntity> list = dao.find("select ob from InterviewBean ob where ob.candidateId=?1",entity.getCandidateId());
            if(list != null && list.size()>0){
                entity.setId(list.get(0).getId());
                return super.updateEntity(entity);
            }
        }

        return super.saveEntity(entity);
    }
}
