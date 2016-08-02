package com.kalix.oa.system.database;

import com.kalix.admin.core.api.biz.IApplicationBeanService;
import com.kalix.admin.core.api.biz.IFunctionBeanService;
import com.kalix.admin.core.entities.ApplicationBean;
import com.kalix.admin.core.entities.FunctionBean;
import com.kalix.framework.core.api.web.IApplication;
import com.kalix.framework.core.api.web.IMenu;
import com.kalix.framework.core.api.web.IModule;
import com.kalix.framework.core.api.web.model.ModuleBean;
import com.kalix.framework.core.web.manager.ApplicationManager;
import com.kalix.framework.core.web.manager.MenuManager;
import com.kalix.framework.core.web.manager.ModuleManager;

import java.util.List;

/**
 * Created by sunlf on 2016-08-02.
 * 数据库初始化类
 */
public class DBInit {
    private static final String appName = "oa";
    private IApplicationBeanService applicationService;
    private IFunctionBeanService functionService;

    public void init() {
        //todo 增加初始化的判断，读取config文件
        List<IApplication> applicationList = ApplicationManager.getInstall().getApplicationList();
        if (applicationList != null && !applicationList.isEmpty()) {
            for (IApplication application : applicationList) {
                if (application.getId().equals(appName)) {
                    insertApplication(application);
                    List<IModule> moduleList = ModuleManager.getInstall().getModuleList(appName);
                    if (moduleList != null && !moduleList.isEmpty()) {
                        for (IModule module : moduleList) {
                            insertModule(application,module);
                            List<IMenu> allMenu = MenuManager.getInstall().getMenuList(module.getId());
                            if (allMenu != null && !allMenu.isEmpty()) {
                                for (IMenu menu : allMenu) {
                                    insertMenu(menu);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * 插入menu数据
     * @param menu
     */
    private void insertMenu(IMenu menu) {

    }

    /**
     * 插入module数据
     * @param application
     */
    private void insertModule(IApplication application, IModule module) {
        FunctionBean bean=new FunctionBean();
        bean.setName(module.getId());
        /*bean.setApplicationId();
        bean.setCode();
        bean.setIsLeaf();
        bean.setPermission();*/
        functionService.saveEntity(bean);
    }

    /**
     * 插入application数据
     * @param application
     */
    private void insertApplication(IApplication application) {
        ApplicationBean bean=new ApplicationBean();
        bean.setName(application.getId());
        bean.setCode(application.getText());
        applicationService.saveEntity(bean);
    }

    public void setApplicationService(IApplicationBeanService applicationService) {
        this.applicationService = applicationService;
    }

    public void setFunctionService(IFunctionBeanService functionService) {
        this.functionService = functionService;
    }
}
