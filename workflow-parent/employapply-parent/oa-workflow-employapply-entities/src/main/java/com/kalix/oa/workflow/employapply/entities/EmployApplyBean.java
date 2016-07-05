package com.kalix.oa.workflow.employapply.entities;

import com.kalix.middleware.workflow.api.model.WorkflowEntity;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

/**
 * @类描述：入职申请管理
 * @创建人： sunlf
 * @创建时间：2016/2/24
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
@Entity
@Table(name = "oa_workflow_employapply")
@Inheritance(strategy = InheritanceType.JOINED)
public class EmployApplyBean extends WorkflowEntity {
    private String branchSchoolLeader;//分院领导审批
    private String schoolLeader;//校领导审批
    private String manpower;// 人力资源部长签字

    public String getBranchSchoolLeader() {
        return branchSchoolLeader;
    }

    public void setBranchSchoolLeader(String branchSchoolLeader) {
        this.branchSchoolLeader = branchSchoolLeader;
    }

    public String getSchoolLeader() {
        return schoolLeader;
    }

    public void setSchoolLeader(String schoolLeader) {
        this.schoolLeader = schoolLeader;
    }

    public String getManpower() {
        return manpower;
    }

    public void setManpower(String manpower) {
        this.manpower = manpower;
    }
}
