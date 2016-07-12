package com.kalix.oa.leave.biz;

//import com.kalix.framework.core.api.biz.JsonStatus;
import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;
import com.kalix.oa.leave.api.biz.ILeaveBeanService;
import com.kalix.oa.leave.api.dao.ILeaveBeanDao;
import com.kalix.oa.leave.entities.LeaveBean;

/**
 * @类描述： 
 * @创建人：  
 * @创建时间： 
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class LeaveBeanServiceImpl extends ShiroGenericBizServiceImpl<ILeaveBeanDao, LeaveBean> implements ILeaveBeanService {
    private JsonStatus jsonStatus = new JsonStatus();
    public LeaveBeanServiceImpl() {
        super.init(LeaveBean.class.getName());
    }

}
