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
          icon: 'fa fa-list',
          title: '全面预算管理系统解决方案',
          detail: '全面预算管理作为对现代企业成熟与发展起过重大推动作用的管理系统，是企业内部管理控制的一种主要方法。从最初的计划、协调、发展到现在的兼具控制、激励、评价等诸多功能的一种综合贯彻企业经营战略的管理工具，全面预算管理在企业内部控制中日益发挥核心作用.',
          link:'http://www.newtouch.cn/china/fangan/images/1P.pdf'
        }, {
          icon: 'fa fa-save',
          title: '财务共享业财作业平台解决方案',
          detail: '财务共享业财作业平台解决方案利用IT技术成财务报账、预算管控和财务核算是资金支付业务，依据行业标准和企业的相关业务规定，梳理和优化财务集中管理的各项业务流程，促进财务合算的额效率以及管理的细化。',
          link:'http://www.newtouch.cn/china/fangan/images/3P.pdf'
        }, {
          icon: 'fa fa-rss-square',
          title: '财务共享绩效管理平台解决方案',
          detail: '财务共享绩效管理平台是财务共享业财作业管理思想的延伸，对财务共享中心的正常、合理、规范运行起管控作用。它通过财务共享业财平台手机的各项信息进行数据展示和分析，并及时发现错误数据。',
          link:'http://www.newtouch.cn/china/fangan/images/5P.pdf'
        }, {
          icon: 'fa fa-file-text-o',
          title: '合同管理系统解决方案',
          detail: '合同管理系统支持对合同的生命周期管理，即支持合同的录入、审批、旅行、归档、变更和终止，规范企业管理流程，通过对合同的有效管控能来实现对资金的有效管控，提供决策支持的依据，支持合同查询统计分析功能。作为一个结构合理、功能完善、管理规范的合同管理系统，有效提高合同从定制到审批，旅行的工作效率，达到合同信息的共享并可对合同的全生命周期数据进行综合统计分析，为企业的生产经营提供必要的决策支撑。',
          link:'http://www.newtouch.cn/china/fangan/images/7P.pdf'
        }, {
          icon: 'fa fa-calculator',
          title: '财务基础核算解决方案',
          detail: '财务基础核算管理通过应收、应付管理企业的收支业务，记录与客户和供应商的往来业务；通过工程财务归集工程建设过程中的发生的成本，并在工程结算后，生成固定资产；企业所有的资产（包括固定资产、无形资产、低值易耗等资产）有固定资产进行统一管理，管理资产的额折旧和价变化；收支业务、工程费用、资产折旧和价值变化产生的会计凭证有总账核算统一管理，为出具会计报表提供数据基础。',
          link:'http://www.newtouch.cn/china/fangan/images/2P.pdf'
        }, {
          icon: 'fa fa-cube',
          title: '数据通用服务平台解决方案',
          detail: '数据通用服务平台的核心建设思想是“集中和统一”，对公用的基础数据集中管控，集中存储、集中维护，报账各系统间的数据统一、一直；对互相调用的服务接口进行统一规范，规定统一的服务接口和数据规格，对于可共用的业务模块，则提供统一的操作和展现的界面，重复利用。',
          link:'http://www.newtouch.cn/china/fangan/images/4P.pdf'
        }, {
          icon: 'fa fa-exchange',
          title: '财务信息共享平台解决方案',
          detail: '财务信息共享平台是企业门户的垂直子门户，在保证信息安全、合规的前提下载整个企业范围内通过多种渠道发布、共享财务信息，财务信息共享平台作为财务信息发布的统一出口，系统的核心建设思路是“恰当的时间、合适的地点、以准确的方式、将准确的信息、共享给有权限的人”。',
          link:'http://www.newtouch.cn/china/fangan/images/6P.pdf'
        }, {
          icon: 'fa fa-server',
          title: '物资管理系统解决方案',
          detail: '企业物资管理是指企业在生产过程中，对本企业所需的物资的采纳、使用和储备等行为进行计划、组织和控制，这些环节环环相扣，相互影响，任何一个环节出现问题都将对企业的物资供应链造成不良影响，通过物资管理系统对物资进行有效管理，降低企业生产成本，加速资金周转，进而促进企业盈利，提升市场竞争力。',
          link:'http://www.newtouch.cn/china/fangan/images/8P.pdf'
        }
        ]
      }
    },
    components: {ProgramItem}
  }
</script>
