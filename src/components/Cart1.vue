<template>
<div class="total-container">
  <div class="header-content">
      <div class="page-local">
        <a href="">首页</a>/
        <a href="">新致商城</a>/
        <a href="">金融云</a>
      </div>
  </div>

  <div class="main-content">

      <div class="silder-content">
          <h4 class="silder-title">新致商城</h4>
          <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            <div class="panel panel-default">
              <div class="panel-heading active" role="tab" id="headingOne">
                <h4 class="panel-title">
                  <a role="button" data-toggle="collapse" class="active" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    金融云
                  </a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body silder-List">
                    <ul>
                      <li>掌E保</li>
                      <li>财险核心系统</li>
                      <li>电子商务</li>
                      <li>统一人员管理系统</li>
                      <li>CRM客户管理平台</li>
                      <li>大资管协同平台</li>
                      <li>贵金属综合投资平台</li>
                      <li>选股学习与交流平台</li>
                    </ul>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingTwo">
                <h4 class="panel-title">
                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    医疗云
                  </a>
                </h4>
              </div>
              <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="panel-body silder-List">
                  <ul>
                    <li>掌E保</li>
                    <li>财险核心系统</li>
                    <li>电子商务</li>
                    <li>统一人员管理系统</li>
                    <li>CRM客户管理平台</li>
                    <li>大资管协同平台</li>
                    <li>贵金属综合投资平台</li>
                    <li>选股学习与交流平台</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingThree">
                <h4 class="panel-title">
                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    企业云
                  </a>
                </h4>
              </div>
              <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div class="panel-body silder-List">
                  <ul>
                    <li>掌E保</li>
                    <li>财险核心系统</li>
                    <li>电子商务</li>
                    <li>统一人员管理系统</li>
                    <li>CRM客户管理平台</li>
                    <li>大资管协同平台</li>
                    <li>贵金属综合投资平台</li>
                    <li>选股学习与交流平台</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="text-content"></div>
  </div>

</div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      msg: ''
    }
  }
}

//$('#accordion').collapse({
//  toggle: false
//})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*公共样式*/
  html {
    background-color: #f0f3f4;
  }

  body {
    font-family: "微软雅黑","Microsoft YaHei","Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    line-height: 1.42857143;
    color: #58666e;
    background-color: transparent;
  }

  *:focus {
    outline: 0 !important;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0px;
    padding: 0px;
  }

  a {
    color: #061325;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover,
  a:focus {
    color: #141719;
    text-decoration: none;
  }

  ul{
    margin: 0px;
    padding: 0px;
  }

  li{
    list-style: none;
  }

  .panel-heading{
    height: 40px;
    line-height: 40px;
    background-color: #F1F1F1;
    border-top-right-radius:0px;
    border-top-left-radius:0px;
  }

  .panel-heading.active{
    border-left: #06497E 5px solid;
  }

  label {
    font-weight: normal;
  }

  .total-container{
    background-color: #fff;
  }

  .header-content{
      width:100%;
      height: 50px;
      line-height: 50px;
      background-color: #F1F1F1;
  }

  .page-local{
      width: 1200px;
      margin: 0px auto;
  }

  .page-local a{
    padding-right: 10px;
  }

  .main-content{
      width:1200px;
      margin: 30px auto;
  }

  .silder-content{
     width: 250px;
     margin-right: 30px;
  }

  .silder-title{
      height: 40px;
      color:#fff;
      line-height: 40px;
      background-color: #06497E;
      padding-left: 15px;
  }

  .panel-group .panel{
    margin-bottom:-6px;
    border-radius: 0px;
  }

  .silder-content  ul li{
    list-style: none;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    color:#06497E;
    /*border-bottom: #E5E5E5 1px solid;*/
  }

  .silder-List{
    background-color: #f1f1f1;
  }

  .silder-List ul li{
      padding-left: 15px;
      padding-bottom:15px
  }

</style>
