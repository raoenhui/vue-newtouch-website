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
          icon: 'fa fa-indent',
          title: '政务信息资源目录体系解决方案',
          detail: '政务信息资源目录体系解决方案全面梳理区级政务信息资源，找准数据源头，明确政务信息元数据标准和交换标准，以目录系统建设为突破口，逐步推进公共服务、社会管理和政府工作领域的信息资源的整合利用，加快政务资源数字化、目录化、规范化发展，促进政务资源共享。',
          link:'http://www.newtouch.cn/china/fangan/images/government-republic.pdf'
        }, {
          icon: 'fa fa-fire-extinguisher',
          title: '城市应急指挥调度解决方案',
          detail: '城市应急指挥调度解决方案是整合城市110、122、119、120等多个应急单位资源，实现单位之间的应急联动，加强处理社会紧急事件能力，快速处理对社会稳定和人民生命财产安全有重大影响的突发事件。建立城市应急响应机制，实现统一接警、分类联动处警，统一指挥、资源共享，保证城市应急机制的快速反应，协调运转。',
          link:'http://www.newtouch.cn/china/fangan/images/qiyexinxihua02.pdf'
        }, {
          icon: 'fa fa-map-o',
          title: '三维展示平台解决方案',
          detail: '以三维与两维地图相结合的方式，展示沿街的商业楼宇以及商铺网店信息，用户可以通过浏览器，就能够在网上便捷查看街景的概貌，每个商业楼宇的基本信息各个商铺网点的基本信息，并且还可以直接选择制定好的各种行走路线.',
          link:'http://www.newtouch.cn/china/fangan/images/government-republic.pdf'
        }, {
          icon: 'fa fa-object-group',
          title: '村务管理信息系统介绍',
          detail: '村务管理信息系统涵盖区、镇、村三级层面，是以各村务管理为核心，结合土地管理，社事管理、综治管理、资产管理和村务公开的信息管理系统，实现村务管理信息化、智能化、自动化和标准化，充分发挥信息化在新农村建设中的作用，有效地服务于村务公开和民主管理，提高农村村务管理水平，提高村务工作透明度，推进基层党风廉政建设，从根本上维护村民利益、促进集体经济发展。',
          link:'http://www.newtouch.cn/china/fangan/images/government-republic.pdf'
        }
        ]
      }
    },
    components: {ProgramItem}
  }
</script>
