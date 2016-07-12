package com.kalix.oa.leave.api.query;

import com.kalix.framework.core.api.web.model.QueryDTO;

/**
 * Created by zangyanming on 2016/06/23.
 */
public class LeaveDTO extends QueryDTO {
    private String name; //项目名称

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}