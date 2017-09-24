<template>
  <div class="privateCloud clearfix">
    <div class="content_title pull-left">
      <img src="src/assets/cart/PrivateCloud.png" class="pull-left"/>
      <h4 class="pull-left" style="margin-top: 35px; position:relative;padding-left: 5px;" >
        私有云
      </h4>
    </div>

    <p>以OpenStack为云管理平台，以Hypervisor KVM为虚拟化引擎，以CEPH分布式存储为存储集群为医疗行业提供私有云解决方案，提供各类计算服务、资源和管理系统，并帮助医疗卫生机构和医院实现数据高安全性，充分利用现有硬件资源和软件资源，保证服务质量。</p>

    <h4 class="title">【产品特点】</h4>
    <ol>
      <li>
        搭建安全可靠的IDC
      </li>
      <li>
        提供云迁移解决方案
      </li>
      <li>
        提供全面的技术支持与行业咨询服务
      </li>
      <li>
        提供基础运维、运营服务
      </li>
    </ol>
    <h4 class="title" style="padding-bottom: 0px;">【产品框架图】</h4>
    <div style="text-align: left; margin: 10px 0px 0px 10%;">
      <img src="../../assets/cart/medical_img1.png" style="max-width: 100%;" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'privateCloud'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .privateCloud .content_title{
    margin-bottom:20px ;
    width: 100%;
  }

  .privateCloud .content_title img{
    max-width: 60px;
    margin-right: 5px;
  }

  .privateCloud{
    letter-spacing: 1px;
    color: #061325;
    line-height: 25px;
    background-color: #fff;
    padding:30px;
    margin-bottom: 15px;
  }

  .privateCloud .title{
    padding: 20px 0px;
  }

  .privateCloud li{
    margin-bottom: 15px;
  }
</style>
