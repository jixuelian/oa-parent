package com.kalix.oa.usecase.interview.biz;

import com.kalix.framework.core.api.persistence.JsonData;
import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.api.web.model.BaseDTO;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;
import com.kalix.framework.core.util.Assert;
import com.kalix.framework.core.util.SerializeUtil;
import com.kalix.oa.usecase.interview.api.biz.ILectureBeanService;
import com.kalix.oa.usecase.interview.api.dao.ILectureBeanDao;
import com.kalix.oa.usecase.interview.api.query.LectureDTO;
import com.kalix.oa.usecase.interview.entities.LectureBean;

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
public class LectureBeanServiceImpl extends ShiroGenericBizServiceImpl<ILectureBeanDao, LectureBean> implements ILectureBeanService {
    private JsonStatus jsonStatus = new JsonStatus();
    public LectureBeanServiceImpl() {
        super.init(LectureBean.class.getName());
    }

    @Override
    public JsonData getAllEntityByQuery(Integer page, Integer limit, String jsonStr) {
        Map<String, String> jsonMap = SerializeUtil.json2Map(jsonStr);
        //获得查询的sql语句
        String sql = getNativeQueryStr();
        Assert.notNull(sql, "查询条件不能为空.");
        //获得返回的结果类
        Class<? extends BaseDTO> cls = getResultClass();
        Assert.notNull(cls, "返回查询结果类不能为空.");

        String posSql = " order by b.creationDate desc ";
        for (Map.Entry<String, String> entry : jsonMap.entrySet()) {
            if(entry.getValue() != null && !entry.getValue().equals("")) {
                sql = sql + " and b." + entry.getKey() + " = " + entry.getValue();
            }
        }

        return dao.findByNativeSql(sql + posSql, page, limit, cls, null);
    }

    @Override
    protected String getNativeQueryStr() {
        return "select b.id, " +
                "a.personcategory, " +
                "a.department, " +
                "a.xm, " +
                "a.sex, " +
                "a.age, " +
                "a.tel, " +
                "a.position, " +
                "a.id as candidateid, " +
                "b.subject, " +
                "b.content, " +
                "b.argumentScore, " +
                "b.coursewareScore, " +
                "b.expressionScore, " +
                "b.attitudeScore, " +
                "b.effectScore, " +
                "b.qa, " +
                "b.comment," +
                "b.suggestion, " +
                "b.participant, " +
                "b.pass " +
                " from oa_candidate a , oa_lecture b where a.id = b.candidateid and (a.personcategory='2' or a.personcategory='3') ";
    }

    @Override
    protected Class<? extends BaseDTO> getResultClass() {
        return LectureDTO.class;
    }
}
