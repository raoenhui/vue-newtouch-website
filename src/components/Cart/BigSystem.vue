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
          title:'银行类',
          intro:'全面打通投资人、管理人、托管人、投资标的多系统渠道通路，实现基于管理、估值、监督的托管业务环境，标准化管理人指令服务与投资人资产视图，构建多云环境的资管全生命周期协同平台。',
          icon:require(`../../assets/cart/${Name}_icon.png`)
        },
        detailObj:{
          intro:'全面打通投资人、管理人、托管人、投资标的多系统渠道通路，实现基于管理、估值、监督的托管业务环境，标准化管理人指令服务与投资人资产视图，构建多云环境的资管全生命周期协同平台。',
          items:[{
            title:"产品特点",
            type:'list',
            data:['流程化的作业留痕',
              '客户中心的创新驱动',
              '全生命周期的资管','单点集成全貌']
          },{
            title:"产品优势",
            type:'list',
            data:['打通托管人、管理人与投资人的多系统环境的业务通路渠道',
              '标准化管理人与投资人的服务提供',
              '混合云架构提供数据安全与服务便利的完美通路']
          },{
            title:"实施规划",
            type:'image',
            imgSrc:require(`../../assets/cart/bigSystem_plan.png`)
          }]
        }
      }
    },
    components:{Financial}
  }
</script>

