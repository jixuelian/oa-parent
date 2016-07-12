package com.kalix.oa.leave.dao;

import com.kalix.framework.core.impl.dao.GenericDao;
import com.kalix.oa.leave.api.dao.ILeaveBeanDao;
import com.kalix.oa.leave.entities.LeaveBean;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class LeaveBeanDaoImpl extends GenericDao<LeaveBean, Long> implements ILeaveBeanDao {
    @Override
    @PersistenceContext(unitName = "leave-unit")
    public void setEntityManager(EntityManager em) {
        super.setEntityManager(em);
    }
}
