package com.kalix.oa.usecase.candidate.biz;

import com.kalix.framework.core.api.persistence.JsonData;
import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.api.persistence.PersistentEntity;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;
import com.kalix.oa.usecase.candidate.api.biz.ICandidateBeanService;
import com.kalix.oa.usecase.candidate.api.dao.ICandidateBeanDao;
import com.kalix.oa.usecase.candidate.api.query.CandidateDTO;
import com.kalix.oa.usecase.candidate.entities.CandidateBean;

import java.util.List;

/**
 * @类描述： 
 * @创建人：  
 * @创建时间： 
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class CandidateBeanServiceImpl extends ShiroGenericBizServiceImpl<ICandidateBeanDao, CandidateBean> implements ICandidateBeanService {
    private JsonStatus jsonStatus = new JsonStatus();
    public CandidateBeanServiceImpl() {
        super.init(CandidateBean.class.getName());
    }

    public JsonData getAllEntityByCheck(String type){
        JsonData jsonData = new JsonData();
        List<PersistentEntity> checkList;
        if(type.equals("first")) {// first 获取初试人员
            checkList = dao.findByNativeSql("select b.id,a.id as candidateId,a.xm from oa_candidate a LEFT JOIN oa_interview b on a.id = b.candidateid where (b.passfirst = false or b.passfirst is null) and (a.personcategory='1' or a.personcategory='2')", CandidateDTO.class, "");
        }else if(type.equals("second")){// second 获取复试人员
            checkList = dao.findByNativeSql("select b.id,a.id as candidateId,a.xm from oa_candidate a LEFT JOIN oa_interview b on a.id = b.candidateid where b.passfirst = true and (b.passSecond = false or b.passSecond is null) and a.personcategory='1'", CandidateDTO.class, "");
        }else{// lecture 获取试讲人员
            checkList = dao.findByNativeSql("select b.id,a.id as candidateId,a.xm from oa_candidate a LEFT JOIN oa_lecture b on a.id = b.candidateid where (case a.personcategory when '2' then a.id in (select candidateid from oa_interview c where c.passfirst=true) " +
                    " when '3' then a.id in (select candidateid from oa_lecture d where d.pass=false or d.pass is null)" +
                    " end)", CandidateDTO.class, "");
        }

        jsonData.setTotalCount(Long.valueOf(checkList.size()));
        jsonData.setData(checkList);
        return jsonData;
    }
}
