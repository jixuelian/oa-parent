/**
 * @author chenyanxu
 */
Ext.define('kalix.workflow.employApply.viewModel.EmployApplyViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.employApplyViewModel',
    data: {
        rec: null,
        validation: {},  //验证错误信息
        icon: '',
        title: '',
        view_operation: false,
        view_title: '查看申请',
        add_title: '添加申请',
        edit_title: '修改申请',
        add_image_path: CONFIG.restRoot + '/demo/resources/images/employ_apply_add.png',
        view_image_path: CONFIG.restRoot + '/demo/resources/images/employ_apply_view.png',
        delete_image_path: CONFIG.restRoot + '/demo/resources/images/employ_apply_delete.png',
        edit_image_path: CONFIG.restRoot + '/demo/resources/images/employ_apply_edit.png'
    }
});