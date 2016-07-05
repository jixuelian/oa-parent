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
    public JsonData getAllEntityByQuery(int page, int limit, String jsonStr) {
        Map<String, String> jsonMap = SerializeUtil.json2Map(jsonStr);
        //获得查询的sql语句
        String sql = getNativeQueryStr();
        Assert.notNull(sql, "查询条件不能为空.");
        //获得返回的结果类
        Class<? extends BaseDTO> cls = getResultClass();
        Assert.notNull(cls, "返回查询结果类不能为空.");

        String posSql = " order by a.creationDate desc ";
        for (Map.Entry<String, String> entry : jsonMap.entrySet()) {
            sql = sql + " and a." + entry.getKey() + " like '%" + entry.getValue() + "%'";
        }

        JsonData jsonData = dao.findByNativeSql(sql + posSql, page, limit, cls, null);
        List<InterviewDTO> list = jsonData.getData();
        for (InterviewDTO pe:list) {
            if(pe.getId()==null){
                pe.setId(0L);
            }
        }

        return jsonData;
    }

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
                "b.passsecond," +
                "b.employment" +
                " from oa_candidate a left join oa_interview b on  a.id = b.candidateid and (a.personcategory='1' or a.personcategory='2') ";
    }

    @Override
    protected Class<? extends BaseDTO> getResultClass() {
        return InterviewDTO.class;
    }
}
