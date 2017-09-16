<template>
  <Financial :mainObj="mainObj"  :detailObj="detailObj" />
</template>

<script>
  import Financial from "../Common/Cart/Financial.vue"
  const Name="eCommerce"
  export default {
    name: Name,
    data () {
      return {
        mainObj:{
          title:'电子商务',
          intro:'电子商务平台面向客户及电子商务运营管理团队，支持B2C、B2B、B2E等多种业务模式，并实现新渠道与传统渠道的互动。平台具备多项能力：应对大并发海量出单交易，多渠道接入，在线销售和服务，客户分析，合作渠道管理，营销策划及推广等。',
          icon:require(`../../assets/cart/${Name}_icon.png`)
        },
        detailObj:{
          intro:'电子商务平台面向客户及电子商务运营管理团队，支持B2C、B2B、B2E等多种业务模式，并实现新渠道与传统渠道的互动。平台具备多项能力：应对大并发海量出单交易，多渠道接入，在线销售和服务，客户分析，合作渠道管理，营销策划及推广等。',
          items:[{
            title:"系统功能",
            type:'image',
            imgSrc:require(`../../assets/cart/eCommerce_function.png`)
          },{
            title:"产品优势",
            type:'list',
            data:['提升平台交易处理能力，包括TPS、并发数、响应时间',
              '根据重新规划实时通功能模块',
              '去IOE化','将部分同步交易服务转为异步服务']
          }]
        }
      }
    },
    components:{Financial}
  }
</script>

