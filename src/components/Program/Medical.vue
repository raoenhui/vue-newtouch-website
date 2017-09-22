<template>
  <div>
    <ProgramItem :dataObj="dataObj" v-for="(dataObj,index) in datas" :key="index"/>
  </div>
</template>

<script>
  import ProgramItem from 'src/components/Common/Program/Item.vue'
  export default {
    data () {
      return {
        datas: [{
          icon: 'fa fa-th-list',
          title: '新致新一代数字化医院解决方案 Newtouch Care',
          detail: 'Newtouch Care是新致软件在引入国外医院现金管理理念的基础上，结合国内管理实际需要而研制的新一代数字化医院解决方案，以医院的信息平台为中心，通过可插卸的方式集成前台业务系统（窗口业务、临床信息、病员服务）和后台运营系统（人、财、物、知识），基于集成门户为各类用户提供系统访问入口。',
          link:'http://www.newtouch.cn/china/fangan/images/newtouchyiliaoyangce.pdf'
        }, {
          icon: 'fa fa-plus-square-o',
          title: '医院信息平台解决方案 ',
          detail: '医院信息平台能够实现从“点对点”到“点线式”集成方式，整合“孤岛”；对历史数据进行集中、分类存储和统一管理；集中收集数据并深入挖掘数据的再利用价值；统一管理和实现内外部写作所需的数据上报和系统接口；建立统一的系统访问门户。',
          link:'http://www.newtouch.cn/china/fangan/images/PhysicalInforPlatform.pdf'
        }, {
          icon: 'fa fa-wifi',
          title: '移动医护工作站解决方案 ',
          detail: '医护人员可通过移动医护工作站随时随处获取病人诊疗信息，缩短诊疗处理延时，给医护人员提供更快、更全面的诊疗决策支持，按需推送工作提醒，避免遗漏；减少重复录入、提高录入质量；减少医疗差错、降低医疗事故。',
          link:'http://www.newtouch.cn/china/fangan/images/MobileMedical.pdf'
        }, {
          icon: 'fa fa-users',
          title: '病员关系管理平台解决方案 ',
          detail: '病员关系管理平台从“以医疗为中心”向“以客户为中心”转换，甄别VIP客户，提供个性化诊疗服务，合理利用医疗资源，着力于医院客户关系管理，提高客户满意度和忠诚度，提升医院核心竞争力、打造医院品牌。',
          link:'http://www.newtouch.cn/china/fangan/images/Relationship.pdf'
        }, {
          icon: 'fa fa-calendar-minus-o',
          title: '医院科教管理平台解决方案 ',
          detail: ' 医院科教管理平台主要是为医院建立全院科教信息化管理、促进科研经验和成果的积累，建立科研人力、设备、资金等资源信息库，为科研教学人员、管理者提供高效、优质的服务。',
          link:'http://www.newtouch.cn/china/fangan/images/EducationManageSys.pdf'
        }, {
          icon: 'fa fa-truck',
          title: '医院物流管理平台解决方案 ',
          detail: '医院物流管理平台是基于条码技术和RFID技术，实现医院物资设备自动化管理，实现网上申请、审批流转，增强管理过程监管能力，优化全院后勤管理流程，无缝连接医院HIS、医院会计核算系统，实时统一物流、信息流、资金流。',
          link:'http://www.newtouch.cn/china/fangan/images/LogisticsManagement.pdf'
        }]
      }
    },
    components: {ProgramItem}
  }
</script>
