/**
 * 面试人员表格控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.usecase.interview.controller.InterviewGridController', {
    extend: 'kalix.controller.BaseGridController',
    alias: 'controller.interviewGridController',
    onClick: function (grid, rowIndex, colIndex) {
        var selModel = grid.getStore().getData().items[rowIndex];

        if(selModel.id == 0){
            var viewModel = this.getViewModel();
            var view = Ext.create(this.cfgForm);
            var vm = view.lookupViewModel();

            vm.set('rec', Ext.create(this.cfgModel));
            vm.set('rec.data.candidateId',selModel.data.candidateId);
            vm.set('iconCls', 'iconfont icon-add');
            vm.set('title', viewModel.get('add_title'));
            view.show();
        }else{
            this.onEdit(grid,rowIndex,colIndex);
        }
    }
});
