package com.kalix.oa.usecase.candidate.biz;

import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;
import com.kalix.oa.usecase.candidate.api.biz.ICandidateBeanService;
import com.kalix.oa.usecase.candidate.api.dao.ICandidateBeanDao;
import com.kalix.oa.usecase.candidate.entities.CandidateBean;

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

}
