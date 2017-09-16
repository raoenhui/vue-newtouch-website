<template>
  <Financial :mainObj="mainObj"  :detailObj="detailObj" :buyClick="buyClickFun"/>
</template>

<script>
  import Financial from "../Common/Cart/Financial.vue"
  const Name="palm"
  export default {
    name: Name,
    data () {
      return {
        mainObj:{
          title:'掌E保',
          intro:'掌E保是一款用于智能手机及平板电脑上的app应用产品。主要面向保险营销员、经纪人或兼业代理。通过本产品实现轻松几步制作建议书，快速移动出单，全方面记录客户，合理制订工作计划，更实时了解业绩情况、实时政策。让保险日常工作更便捷更高效。',
          icon:require(`../../assets/cart/${Name}_icon.png`)
        },
        detailObj:{
          intro:'掌E保是一款用于智能手机及平板电脑上的app应用产品。主要面向保险营销员、经纪人或兼业代理。通过本产品实现轻松几步制作建议书，快速移动出单，全方面记录客户，合理制订工作计划，更实时了解业绩情况、实时政策。让保险日常工作更便捷更高效。',
          items:[{
            title:"业务模块",
            type:'image',
            imgSrc:require(`../../assets/cart/goods_icon.png`)
          },{
            title:"上云优势",
            type:'list',
            data:['云上租用，合作方式更灵活。不再依赖项目模式。<br/>按人租用，付费灵活<br/>按年租用，多租更省<br/>',
              '快速上线<br>系统快速上线；业务产品快速上线<br/>',
              '快速计算<br/>基于云计算的掌E保，能快速的进行保费计算及利益演示，且能极大的缩短业务流程上花费的时间。']
          }]
        }
      }
    },
    methods:{
      buyClickFun:function (x) {
        console.log(x)
      }
    },
    components:{Financial}
  }
</script>

