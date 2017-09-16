<template>
  <Financial :mainObj="mainObj"  :detailObj="detailObj" />
</template>

<script>
  import Financial from "../Common/Cart/Financial.vue"
  const Name="exchangeSystem"
  export default {
    name: Name,
    data () {
      return {
        mainObj:{
          title:'证券类',
          intro:'面向普通股民，对接国内股市行情，集选股学习、股民社交、选股推荐、选股考核为一体，旨在打造草根股神，培养股民投资学习交流的在线教育社交平台。',
          icon:require(`../../assets/cart/${Name}_icon.png`)
        },
        detailObj:{
          intro:'面向普通股民，对接国内股市行情，集选股学习、股民社交、选股推荐、选股考核为一体，旨在打造草根股神，培养股民投资学习交流的在线教育社交平台。',
          items:[{
            title:"产品优势",
            type:'list',
            data:['业务：支持后续业务的丰富可拓展性',
              '产品：适应于多峰谷的交易类、学习类产品特性',
              '技术：对于量化程序的大数据计算提供可支持环境','运营：利于自营互联网平台的运营管理维护']
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

