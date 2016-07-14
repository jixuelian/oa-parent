package com.kalix.oa.system.meetingroom.biz;

import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;
import com.kalix.oa.system.meetingroom.api.biz.IMeetingroomBeanService;
import com.kalix.oa.system.meetingroom.api.dao.IMeetingroomBeanDao;
import com.kalix.oa.system.meetingroom.entities.MeetingroomBean;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class MeetingroomBeanServiceImpl extends ShiroGenericBizServiceImpl<IMeetingroomBeanDao, MeetingroomBean> implements IMeetingroomBeanService {
    private JsonStatus jsonStatus = new JsonStatus();

    public MeetingroomBeanServiceImpl() {
        super.init(MeetingroomBean.class.getName());
    }
}
