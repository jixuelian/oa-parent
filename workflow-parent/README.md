# workflow-parent

##### 工作流工程的父工程
  * carapply-parent 车辆使用申请工作流
    * [carapply-parent](oa-parent/workflow-parent/carapply-parent/README.md)
  * employapply-parent 入职审批工作流
    * [employapply-parent](oa-parent/workflow-parent/employapply-parent/README.md)
  * meetingapply-parent 会议室使用申请工作流
    * [meetingapply-parent](oa-parent/workflow-parent/meetingapply-parent/README.md)
  * recruitapply-parent 招聘申请工作流
    * [recruitapply-parent](oa-parent/workflow-parent/recruitapply-parent/README.md)
  * sealapply-parent 印章使用申请工作流
    * [sealapply-parent](oa-parent/workflow-parent/sealapply-parent/README.md)

# 注意事项
  * 工作流的配置文件xml中的含义
  “name”是工作流图中的显示名称
  “activiti:candidateGroups”是角色组的名称或者是角色的名称

        <userTask id="branchSchoolLeader" name="分院领导审批" activiti:candidateGroups="分院领导" activiti:formKey="audit.form">
            <documentation>分院领导审批</documentation>
            <extensionElements>
                <activiti:formProperty id="accepted" name="判断环节" type="boolean" variable="accepted">
                </activiti:formProperty>
            </extensionElements>
        </userTask>

