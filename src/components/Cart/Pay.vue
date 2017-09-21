<template>
  <div class="disasterCloud clearfix">
    <div class="content_title pull-left">
      <img src="../../assets/image1.png" class="pull-left"/>
      <h4 class="pull-left" style="margin-top: 35px; position:relative;padding-left: 5px;" >
        云支付平台
      </h4>
    </div>

    <p>建立安全支付联盟，提供用户身份识别，加强信息安全与隐私保护，确保交易安全，以及交易行为受到监控及识别。</p>

    <h4 class="title">【产品特点】</h4>
    <ol>
      <li>
        基于开放性更好的智能操作系统
      </li>
      <li>
        基于互联网和移动互联网
      </li>
      <li>
        支持触摸、大屏幕彩屏，更好的体验
      </li>
      <li>
        业务展现能力和交互能力，支持更复杂的业务
      </li>
    </ol>
    <h4 class="title" >【产品框架图】</h4>
    <div style="text-align: left; margin: 10px 0px 0px 10%;">
      <img src="../../assets/cart/medical_img4.png" style="max-width: 100%;" />
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
