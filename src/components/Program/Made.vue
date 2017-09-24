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
          icon: 'fa fa-list-alt',
          title: '食品业生产管理解决方案',
          detail: '食品业生产管理解决方案主要功能包括需求预测、销售计划、产能分配、库存管理、采购管理、MPS、生产计划、日程管理，为企业缩减了制造业生产资料以及原材料调配计划的立案周期、降低次品率，达到“用适当的成本获取最大的利润”。',
          link:'http://www.newtouch.cn/china/fangan/images/shipinshwngchan.pdf'
        }]
      }
    },
    components: {ProgramItem}
  }
</script>
