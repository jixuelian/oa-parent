package com.kalix.oa.system.meetingroom.entities.internal;

import com.kalix.framework.core.util.SystemUtil;
import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;

/**
 * Created by zangyanming on 2016/6/21.
 */
public class InitActivator implements BundleActivator {
    @Override
    public void start(BundleContext bundleContext) throws Exception {
        SystemUtil.startBundlePrintln(bundleContext);
    }

    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        SystemUtil.stopBundlePrintln(bundleContext);
    }
}
