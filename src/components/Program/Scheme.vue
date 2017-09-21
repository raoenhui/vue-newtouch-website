<template>
  <div>
    <ProgramItem :dataObj="dataObj" v-for="(dataObj,index) in datas" :key="index"/>
  </div>
</template>

<script>
  import ProgramItem from '../Common/Program/Item.vue'
  export default {
    data () {
      return {
        datas: [{
          icon: 'fa fa-cube',
          title: '全面预算管理系统解决方案',
          detail: '全面预算管理作为对现代企业成熟与发展起过重大推动作用的管理系统，是企业内部管理控制的一种主要方法。从最初的计划、协调、发展到现在的兼具控制、激励、评价等诸多功能的一种综合贯彻企业经营战略的管理工具，全面预算管理在企业内部控制中日益发挥核心作用.'
        }, {
          icon: 'fa fa-cubes',
          title: '财务共享业财作业平台解决方案',
          detail: '财务共享业财作业平台解决方案利用IT技术成财务报账、预算管控和财务核算是资金支付业务，依据行业标准和企业的相关业务规定，梳理和优化财务集中管理的各项业务流程，促进财务合算的额效率以及管理的细化。'
        }]
      }
    },
    components: {ProgramItem}
  }
</script>
