<template>
  <Financial :mainObj="mainObj"  :detailObj="detailObj" />
</template>

<script>
  import Financial from "../Common/Cart/Financial.vue"
  const Name="inventSystem"
  export default {
    name: Name,
    data () {
      return {
        mainObj:{
          title:'贵金属综合投资平台',
          intro:'打破实物金、代理金、纸黄金、黄金理财的贵金属业务边界，形成银行、交易所、基金公司、投资人混业化的贵金属投资新生态，构建集资讯、投资、营销、销售一体化的全面贵金属投资服务平台。',
          icon:require(`../../assets/cart/${Name}_icon.png`)
        },
        detailObj:{
          intro:'打破实物金、代理金、纸黄金、黄金理财的贵金属业务边界，形成银行、交易所、基金公司、投资人混业化的贵金属投资新生态，构建集资讯、投资、营销、销售一体化的全面贵金属投资服务平台。',
          items:[{
            title:"产品优势",
            type:'list',
            data:['满足生态圈业务的扩展需要',
              '适应于多峰谷的交易类产品特性',
              '混合云结构的多实施方案适应不同客户技术现状','利于自营互联网平台的运营管理维护']
          },{
            title:"实施规划",
            type:'image',
            imgSrc:require(`../../assets/cart/inventSystem_plan.png`)
          }]
        }
      }
    },
    components:{Financial}
  }
</script>

