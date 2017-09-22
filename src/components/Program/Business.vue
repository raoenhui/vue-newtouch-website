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
          icon: 'fa fa-phone-square',
          title: '呼叫中心排班系统解决方案',
          detail: '完成百胜旗下(背景、上海两大呼叫中心)肯德基、东方既白、pizza hut等餐饮连锁品牌的呼叫中心人力资源的调度和分配管理。',
          link:'http://www.newtouch.cn/china/fangan/images/qiyexinxihua02.pdf'
        }]
      }
    },
    components: {ProgramItem}
  }
</script>
