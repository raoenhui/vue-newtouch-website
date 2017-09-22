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
          icon: 'fa fa-navicon',
          title: '政务信息资源目录体系解决方案',
          detail: '政务信息资源目录体系解决方案全面梳理区级政务信息资源，找准数据源头，明确政务信息元数据标准和交换标准，以目录系统建设为突破口，逐步推进公共服务、社会管理和政府工作领域的信息资源的整合利用，加快政务资源数字化、目录化、规范化发展，促进政务资源共享。',
          link:'http://www.newtouch.cn/china/fangan/images/qiyexinxihua02.pdf'
        }]
      }
    },
    components: {ProgramItem}
  }
</script>
