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
          icon: 'fa fa-search-plus',
          title: '超高速全文检索解决方案',
          detail: '通过安装Newtouch超高速全文检索引擎，能够在瞬间从数百万个文件中检索出必要的信息，另外，在文件中可以添加属性信息，根据属性信息，可以进行检索及减小范围的检索',
          link:'http://www.newtouch.cn/china/fangan/images/qiyexinxihua01.pdf'
        }, {
          icon: 'fa fa-folder-open-o',
          title: '协作知识管理解决方案',
          detail: '协作知识管理方案使企业内部的各种项目管理井然有序，员工通过一个统一的入口及时了解到自己的任务并及 时汇报进展情况，同时在平时的知识生产过程产生的知识通过平台进行共享，形成企业的无 形资产。管理人员可以随时随地了解到组织内部的人、项目、客户的相关情况。',
          link:'http://www.newtouch.cn/china/fangan/images/xiezuozhishi.pdf'
        }]
      }
    },
    components: {ProgramItem}
  }
</script>
