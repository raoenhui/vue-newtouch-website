<template>
  <div class="image clearfix">
    <div class="content_title pull-left">
      <img src="../../assets/image1.png" class="pull-left"/>
      <h4 class="pull-left" style="margin-top: 35px; position:relative;padding-left: 5px;" >
        影像云
      </h4>
    </div>

     <p>诊断前，诊断中，诊断后三个角度出发，以患者、医生、医院为中心，提供医疗影像诊断系统整体解决方案，帮助医疗机构加速进入“云”时代。</p>

    <h4 class="title">【产品特点】</h4>
    <ol>
      <li>
        构建统一、规范、标准预约服务，在“云”快速预约
      </li>
      <li>
        建立门诊预约到控费的闭环管理，“云”合雾集
      </li>
      <li>
        支付安全、智能、便利，“云”中遨游
      </li>
      <li>
        影像科医生移动办公，影像数据上“云”
      </li>
      <li>
        打破传统，突破局限，“云”非凡
      </li>
      <li>
        患者个人影像数据自我管理，可随时随处调阅，体验“云”自在
      </li>
    </ol>
    <h4 class="title">【产品框架图】</h4>
    <div style="text-align: left; margin: 10px 0px 0px 10%;">
      <img src="../../assets/cart/image.png" style="max-width: 100%;" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'image'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content_title{
      margin-bottom:20px ;
      width: 100%;
    }

    .image{
      letter-spacing: 1px;
      color: #061325;
      line-height: 25px;
      background-color: #fff;
      padding:30px;
      margin-bottom: 15px;
    }

    .image .title{
        padding: 20px 0px;
    }

    .image li{
      margin-bottom: 15px;
    }
</style>
