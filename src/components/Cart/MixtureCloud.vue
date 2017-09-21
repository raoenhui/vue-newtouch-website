<template>
  <div class="mixtureCloud clearfix">
    <div class="content_title pull-left">
      <img src="../../assets/image1.png" class="pull-left"/>
      <h4 class="pull-left" style="margin-top: 35px; position:relative;padding-left: 5px;" >
        混合云
      </h4>
    </div>

    <p>新致混合云提供了云平台和医院私有设备托管的混合部署模式，既解决医院数据安全性痛点又实现应用的按需分配和弹性扩展，大大缩短了医院IT部署时间，降低了运维成本，改善了医院应用的可靠性和可用性。</p>

    <h4 class="title">【产品特点】</h4>
    <ol>
      <li>
        VPN或专线的数据通道建立
      </li>
      <li>
        BGP路由优化保障访问质量
      </li>
      <li>
        架构弹性化和高扩展性
      </li>
      <li>
        运维任务简化和稳定性
      </li>
    </ol>
    <h4 class="title" style="padding-bottom: 0px;">【产品框架图】</h4>
    <div style="text-align: left; margin: 10px 0px 0px 10%;">
      <img src="../../assets/cart/medical_img2.png" style="max-width: 100%;" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mixtureCloud'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mixtureCloud .content_title{
    margin-bottom:20px ;
    width: 100%;
  }

  .mixtureCloud{
    letter-spacing: 1px;
    color: #061325;
    line-height: 25px;
    background-color: #fff;
    padding:30px;
    margin-bottom: 15px;
  }

  .mixtureCloud .title{
    padding: 20px 0px;
  }

  .mixtureCloud li{
    margin-bottom: 15px;
  }
</style>
