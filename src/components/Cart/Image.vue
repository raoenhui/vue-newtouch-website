<template>
  <div class="image clearfix">
    <div class="content_title pull-left">
      <img src="../../assets/image1.png" class="pull-left"/>
      <h4 class="pull-left" style="margin-top: 35px; position:relative;padding-left: 5px;" >
        影像云
      </h4>
    </div>

     <p>从诊断前，诊断中，诊断后三个角度出发，以患者、医生、医院为中心，提供医疗影像诊断系统整体解决方案，帮助医疗机构加速进入"云"时代。</p>

    <h4 class="title">【产品特点】</h4>
    <ol>
      <li>
        产品管理：包括产品、需求、计划、发布、路线图等功能。
      </li>
      <li>
        项目管理：包括项目、任务、团队、build、燃尽图等功能。
      </li>
      <li>
        质量管理：包括bug、测试用例、测试任务、测试结果等功能。
      </li>
      <li>
        文档管理：包括产品文档库、项目文档库、自定义文档库等功能。
      </li>
      <li>
        事务管理：包括todo管理，我的任务、我的Bug、我的需求、我的项目等个人事务管理功能。
      </li>
      <li>
        组织管理：包括部门、用户、分组、权限等功能。
      </li>
    </ol>
    <h4 class="title">【产品框架图】</h4>
    <div style="text-align: center">
      <img src="../../assets/pm_icon.png" style="max-width: 90%;"></img>
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
    }

    .image .title{
        padding: 20px 0px;
    }

    .image li{
      margin-bottom: 15px;
    }
</style>
