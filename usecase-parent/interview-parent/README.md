# interview-parent

##### 面试及试讲用例，调用candidate-parent模块产生的数据
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
  * 该模块包含面试及试讲两个用例
  * 人员类别
    * 行政和科研人员
    * 专职教师
    * 兼职教师
  * 流程用例
    * 初试
    * 复试
    * 试讲
  * 人员类别与流程用例的关系
    * 行政和科研人员需要进行初试、复试，没有试讲
    * 专职教师需要进行一次面试及试讲
    * 兼职教师只需要进行试讲，没有初试和复试
  * service的实现中，利用了getNativeQueryStr方式获取查询结果，该查询关联了candidate-parent模块产生的数据