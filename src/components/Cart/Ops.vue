<template>
  <div class="ops clearfix">
    <div class="content_title pull-left">
      <img src="../../assets/image1.png" class="pull-left"/>
      <h4 class="pull-left" style="margin-top: 35px; position:relative;padding-left: 5px;" >
        云运维服务
      </h4>
    </div>

    <p>依托监控、告警、日志、报告工具，全面监控发现网络故障，建立主动运维服务缓解设备宕机引起的医患矛盾。增加分支机构时，只需在网络上安装网管机，就可监管系统，过程简单高效。云计算降低成本，将本地工作转移到云端，工作量减少，成本降低。可将人力投入医生和患者端。</p>

    <h4 class="title">【产品特点】</h4>
    <ol>
      <li>
        7*24小时监控
      </li>
      <li>
        应急事故处理
      </li>
      <li>
        日常运维服务
      </li>
      <li>
        安全运维服务
      </li>
      <li>
        性能评估及调优
      </li>
      <li>
        提供运维报告
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ops'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ops .content_title{
    margin-bottom:20px ;
    width: 100%;
  }

  .ops{
    letter-spacing: 1px;
    color: #061325;
    line-height: 25px;
    background-color: #fff;
    padding:30px;
    margin-bottom: 15px;
  }

  .ops .title{
    padding: 20px 0px;
  }

  .ops li{
    margin-bottom: 15px;
  }
</style>
