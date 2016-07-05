package com.kalix.oa.usecase.interview.api.query;

import com.kalix.framework.core.api.web.model.BaseDTO;

/**
 * Created by zangyanming on 2016/06/21.
 */
public class LectureDTO extends BaseDTO {
    private String name; //项目名称

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}