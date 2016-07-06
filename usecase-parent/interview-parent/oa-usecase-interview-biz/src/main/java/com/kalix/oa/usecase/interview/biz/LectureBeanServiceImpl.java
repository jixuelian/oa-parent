package com.kalix.oa.usecase.interview.biz;

import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;
import com.kalix.oa.usecase.interview.api.biz.ILectureBeanService;
import com.kalix.oa.usecase.interview.api.dao.ILectureBeanDao;
import com.kalix.oa.usecase.interview.entities.LectureBean;

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

}
