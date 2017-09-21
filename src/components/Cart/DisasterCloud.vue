<template>
  <div class="disasterCloud clearfix">
    <div class="content_title pull-left">
      <img src="../../assets/image1.png" class="pull-left"/>
      <h4 class="pull-left" style="margin-top: 35px; position:relative;padding-left: 5px;" >
        云备灾
      </h4>
    </div>

    <p>利用信息化的云技术，简化操作流程和物理机的损耗，数据保护工作灵敏度增高，达到实时同步备份的效果。告别原定时增量的模式，形成实时备份、实时数据保护、实时接管的信息网络化科学管理模式。</p>

    <h4 class="title">【产品特点】</h4>
    <ol>
      <li>
        统一管理，实现备份、存储、网关、云计算等超融合数据管理，提升IT效率
      </li>
      <li>
        在原有灾备系统上弹性扩充新业务应用场景和新功能需求
      </li>
      <li>
        具备原厂SLA能力，在不停机的情况下，可进行系统升级、维护等服务
      </li>
      <li>
        实时监控数据中心设备、业务的运行情况。对设备异常、资源瓶颈提前预警，降低潜在风险
      </li>
      <li>
        利用备份保护支持，实现对数据备份、远程复制、容灾等保护
      </li>
      <li>
        快速生成直观可读性强的报表分析，可导出到本地保存，帮助快速制定总结报告
      </li>
    </ol>
    <h4 class="title" >【产品框架图】</h4>
    <div style="text-align: left; margin: 10px 0px 0px 10%;">
      <img src="../../assets/cart/medical_img3.png" style="max-width: 100%;" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'disasterCloud'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .disasterCloud .content_title{
    margin-bottom:20px ;
    width: 100%;
  }

  .disasterCloud{
    letter-spacing: 1px;
    color: #061325;
    line-height: 25px;
    background-color: #fff;
    padding:30px;
    margin-bottom: 15px;
  }

  .disasterCloud .title{
    padding: 20px 0px;
  }

  .disasterCloud li{
    margin-bottom: 15px;
  }
</style>
