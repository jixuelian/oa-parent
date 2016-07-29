# candidate-parent

##### 应聘人员的增删改查基本信息管理，提供给面试、试讲用例
  * api：后台的service和dao的接口
  * biz：后台service接口的实现
  * dao：后台dao接口的实现
  * entities：javaBean实体类
  * extjs：前台增删改查界面的展示
  * rest：前台到后台的rest服务配置
  * web：前台菜单的实现

# 使用
引用该模块所生成的osgi jar包，在karaf的环境etc目录下的ConfigMenu.cfg配置文件中增加菜单配置，菜单的配置详见“菜单的配置”说明。

# 注意事项
service中的getAllEntityByCheck函数，根据参数type的值获取相应人员，type为first则查找初试人员，为second则查找复试人员，其他则查找试讲人员。

        public JsonData getAllEntityByCheck(String type){
            .......
        }
