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
          icon: 'fa fa-cubes',
          title: '托管业务一体化解决方案',
          detail: '托管业务一体化系统是托管银行、资产管理公司的托管核心业务系统，该系统提供了完 善的财务核算、估值、投资监管和资金的二级清算功能，并实现了业务和财务的有机整合，同时还提供了先进的财务管理和投资监控功能，充分满足了托管行或基金管理公司 对所管理的资产进行证券投资业务财务核算管理以及资产估值的要求。',
          link:'http://www.newtouch.cn/china/fangan/images/tuoguanyewuyitihuaxitong.pdf'
        }, {
          icon: 'fa fa-bank',
          title: '开放式基金代销系统解决方案',
          detail: '开放式基金代销系统充分利用银行或其他代销机构的现有金融电子网络和网点优势，建立一个安全、方便、快捷的开放式基金代 销服务平台，解决银行或其他代销机构经营管理 和开放式基金市场发展的需要，满足投资者多元化的投资需要。',
          link:'http://www.newtouch.cn/china/fangan/images/kaifangshijijindaixiao.pdf'
        }, {
          icon: 'fa fa-credit-card',
          title: '理财产品销售管理平台解决方案',
          detail: '理财产品销售管理平台致力于建设一套能够满足银行灵活扩充各种理财产品，提供简便统一 销售操作，并实现规范集中业务管理的平台，为各种渠道的产品营销提供强大的后台支撑， 缩短新产品的开发周期，共享资源，以便为客户制定切实的理财服务，增强银行自身竞争力。',
          link:'http://www.newtouch.cn/china/fangan/images/licaixiaoshou.pdf'
        }, {
          icon: 'fa fa-window-restore',
          title: '国际结算系统解决方案',
          detail: '支持多实体，多分行，多语言，多币种 ，全面支持银行国结和贸易融资业务国结网银 + 国结后台 + 系统整合，提供规则配置、业务服务、运营管理和决策支持的全面的解决方案；具有交易和管理功能，提高运营管理效率，提升银行国际业务和市场的竞争力。',
          link:'http://www.newtouch.cn/china/fangan/images/guojijiesuanjiejuefangan.pdf'
        }, {
          icon: 'fa fa-database',
          title: '票据交易管理系统解决方案',
          detail: '新致票据系统可根据客户的具体情况，先期实施纸质（或电子）票 据交易模块，而后补充实施电子（或纸质）票据交易模块，也可纸 质和电子票据交易同期实施。按需实施，组合灵活。对于各种组织架构及其变动、业务系统未总行集中的情况，以及不同票据所有权归属情况，都能够应对自如。',
          link:'http://www.newtouch.cn/china/fangan/images/piaojujiaoyi.pdf'
        }, {
          icon: 'fa fa-cc-diners-club',
          title: '固定资产管理系统',
          detail: '固定资产管理系统使管理遵循"分级管理、授权 有限"的原则，实行多层次的分级管理体制，包 括：计划管理总量控制、购置审批、采购结算、 固定资产登记，低值易耗品登记，相关条形码 打印，固定资产条码盘点，资产转移、报废等。 同时，可以通过扫描资产条码等方式，就对资 产物品进行领用，转移，报废，盘点的操作生 成对应的数据及资产状况的监控表。解决了成 本管理、固定资产流失、使用率低、固定资产 盘点事务琐碎等问题。',
          link:'http://www.newtouch.cn/china/fangan/images/gudingzichan.pdf'
        }, {
          icon: 'fa fa-gg-circle',
          title: ' 供应链金融系统解决方案',
          detail: '供应链金融系统是根据最新的供应链金融的实用模式开发出来的一套处理系统。具有 实用性强，业务处理全面，风险控制可靠，操作人性化，与外部系统接口丰富，辅助功能 齐全等特性。覆盖了几乎所有的供应链金融业务。将业务中的供应链关系进行相关性分析 和实时处理。还能对其他系统（如物流系统等）进行实时对接。',
          link:'http://www.newtouch.cn/china/fangan/images/gongyinglianjinrongxitong.pdf'
        }, {
          icon: 'fa fa-credit-card-alt',
          title: '信用卡中心商户管理系统解决方案',
          detail: '商户管理系统为统一的商户和活动管理平台，可以提供信用 卡中心对内管理和对外服务两方面核心功能，提升信用卡中心 、商户和持卡客户三者之间的沟通互动。使信用卡中心的活动 能早一步推向、占领市场，并且更好掌握活动开展的情况，进 一步提高合作商户和持卡客户的粘度与满意度。',
          link:'http://www.newtouch.cn/china/fangan/images/xinyongkazhongxin.pdf'
        }, {
          icon: 'fa fa-heartbeat',
          title: '保险营销渠道管理解决方案',
          detail: '保险营销渠道管理系统涵盖保险业的渠道建设和中介商管理，涵盖渠道包括个险营销、保险经纪、兼业代理、客户经理、银邮中介、银保中介、直销渠道业务人员、专业保险代理等，充分适应保险行业未来业务的需要。本系统主要目的在协助保险业者有效利用最新面向服务技术整合现有营销渠道，在最低进入障碍下，快速完成保险营销渠道建设。',
          link:'http://www.newtouch.cn/china/fangan/images/baoxianyingxiao01.pdf'
        }, {
          icon: 'fa fa-cny',
          title: '财产险核心业务系统解决方案',
          detail: '随着近年来中国保险市场的高速发展，竞争日益加剧，保险公司迫切需要得到一个高度灵活的、可靠的和可扩展的核心业务系统的支持，正是在这种情况下，上海新致软件凭借自己在国内财产险多年的经验积累并结合了国际先进、成熟的业务以及架构，适时推出了财产险核心业务系统解决方案，帮助国内保险企业改善业务处理质量，加强客户的服务能力，降低成本，提高企业竞争力。',
          link:'http://www.newtouch.cn/china/fangan/images/caichanhexin01.pdf'
        }, {
          icon: 'fa fa-bar-chart',
          title: '精算系统解决方案',
          detail: '精算系统依据经济学的基本原理结合IT技术，通过对于保险公司的所有保险业务数据进行计算，将计算结果用于保险公司未来的财务风险进行分析、估价和管理并用于经验分析的系统，所以具有很高的科学性和可靠性。精算系统具体可以实现责任准备金分析，内在价值分析，未来现金流分析等数据分析，能够使保险公司的经营者在产品定价，市场战略，营销策略等重要管理动作获取数据上的支持，一个好的精选系统对于保险公司的运营不可或缺。',
          link:'http://www.newtouch.cn/china/fangan/images/jingsuanxitong.pdf'
        }, {
          icon: 'fa fa-line-chart',
          title: '金融行业数据仓库解决方案',
          detail: '新致金融行业数据仓库解决方案针对各类金融企业的实际情况，通过成熟的数据仓库实施方法论指导，为金融企业消除“信息孤岛”、提升金融企业信息使用水平提供完整的服务；针对不同的数据资源进行数据提取、清理和载入；并以成熟的数据模型为基础，提供ODS、多维立体、自主分析、数据查询、报表分析、多维分析等功能。',
          link:'http://www.newtouch.cn/china/fangan/images/jinronghangye.pdf'
        }, {
          icon: 'fa fa-desktop',
          title: '保险行业电子商务平台解决方案',
          detail: '保险行业电子商务解决方案之处B2B、B2C、B2B2C等多种商业模式，运用SOA架构思想设计，整合成熟的技术和产品，使客户以最小的投入，得到最大的回报。',
          link:'http://www.newtouch.cn/china/fangan/images/dianzishangwu.htm'
        }, {
          icon: 'fa fa-drivers-license',
          title: '行销支持系统解决方案',
          detail: '行销支持系统解决方案全程支持轻松展业，权威形象第一时间赢得客户信赖，客户资料保单信息随时触手可得，丰富功能展业旅程步步随身相伴，客户催询公司咨询时刻保持更新。',
          link:'http://www.newtouch.cn/china/fangan/images/xingxiaozhichi.htm'
        }, {
          icon: 'fa fa-tasks',
          title: ' "新一代"托管系统解放方案',
          detail: '"新一代"托管系统解放方案的托管核心机制：基于信托基本原则，引入一个完全独立的第三方机构，在制度上规避风险。新致软件提供的高效安全的托管系统支持全资产和总分行运营模式。',
          link:'http://www.newtouch.cn/china/fangan/images/newProxy.pdf'
        },{
          icon: 'fa fa-tablet',
          title: '保险移动销售服务平台',
          detail: '保险移动销售服务平台既包括高级定制的产品线，也包括打破时间、空间局限的全方位移动服务，此外运用移动技术，实现专员任务自动推送、主管强化辅导的管理模式。实现“以客户为中心、以任务为驱动”的活动管理，彻底解决了传统营销队伍活动不可控，准客户资源不能共享现状。',
          link:'http://www.newtouch.cn/china/fangan/images/yidongxiaoshou.htm'
        }
        ]
      }
    },
    components: {ProgramItem}
  }
</script>
