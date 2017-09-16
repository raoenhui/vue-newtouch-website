<template>
  <Financial :mainObj="mainObj"  :detailObj="detailObj" />
</template>

<script>
  import Financial from "../Common/Cart/Financial.vue"
  export default {
    name: 'system',
    data () {
      return {
        mainObj:{
            title:'财险核心系统',
            intro:'财险核心系统提供财险整套核心解决方案，包含：产品管理、承保、核保、理赔等全保单生命周期服务。解决方案具备：多态化业务的快速接入，支持互联网保险业务、移动或微信业务的快速接入；碎片化业务有效融合；解决场景化/高频化相关问题；快速整合渠道数据；提升高可用性能；提升易维护性。',
            icon:require('../../assets/cart/system_icon.png')
        },
        detailObj:{
            intro:'财险核心系统提供财险整套核心解决方案，包含：产品管理、承保、核保、理赔等全保单生命周期服务。解决方案具备：多态化业务的快速接入，支持互联网保险业务、移动或微信业务的快速接入；碎片化业务有效融合；解决场景化/高频化相关问题；快速整合渠道数据；提升高可用性能；提升易维护性。',
            items:[{
              title:"系统功能",
              type:'sentence',
              sentence:'产品配置、承保、再保、统一支付平台、理赔、核保'
            },{
              title:"系统特色",
              type:'list',
              data:['多态化业务的快速接入',
                '碎片化业务有效融合',
                '快速整合渠道数据',
              '解决场景化/高频化相关问题','提升高可用性能','提升易维护性']
            }]
        }
      }
    },
    components:{Financial}
  }
</script>

