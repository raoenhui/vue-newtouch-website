<template>
  <Financial :mainObj="mainObj"  :detailObj="detailObj" />
</template>

<script>
  import Financial from "../Common/Cart/Financial.vue"
  const Name="userSystem"
  export default {
    name: Name,
    data () {
      return {
        mainObj:{
          title:'统一人员管理系统',
          intro:'统一销售人员管理平台是一套对保险公司各营销渠道的销售人员进行管理的软件系统。该系统从管理角度出发，为各营销渠道销售支持岗提供了针对保险销售人员的全生命周期管理，以及佣金结算、绩效考核等一系列完整的服务。',
          icon:require(`../../assets/cart/${Name}_icon.png`)
        },
        detailObj:{
          intro:'统一销售人员管理平台是一套对保险公司各营销渠道的销售人员进行管理的软件系统。该系统从管理角度出发，为各营销渠道销售支持岗提供了针对保险销售人员的全生命周期管理，以及佣金结算、绩效考核等一系列完整的服务。',
          items:[{
            title:"产品定位",
            type:'sentence',
            sentence:'建立销售渠道的统一管理平台。适用于保险行业，更适用于整个金融行业：银行、证券、新金融等'
          },{
            title:"产品功能",
            type:'sentence',
            sentence:'组织机构管理、手续费管理、报表管理、合同管理、佣金结算、系统管理、日常信息管理、晋升降级考核'
          },{
            title:"上云优势",
            type:'list',
            data:['配置简便：支持业务规则的经常性变化、扩展激励机制。',
              '性能卓越：高性能软件及链家的硬件架构、上云后秒级处理万级人员数据。',
              '多元化：扩展移动端应用；系统各用户可实时掌握指标、排名等营销数据，最大实现数据应用价值。']
          }]
        }
      }
    },
    components:{Financial}
  }
</script>

