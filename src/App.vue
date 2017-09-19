<template>
  <div id="app">
    <header class="header">

      <div class="header-con">
        <div class="header-nav clearfix">
          <router-link to="/"><img src="./assets/logo.png"></router-link>
          <router-link to="/program"><div class="header-nav-line">行业解决方案</div></router-link>
          <div class="header-nav-line"><a href="http://fic.newtouch.com">金融云</a></div>
          <div class="header-nav-line"><a href="http://mc.newtouch.com/#/-1">医疗云</a></div>
          <div class="header-nav-line"><a href="http://ecc.newtouch.com/index">企业云</a></div>
          <router-link to="/cart"><div class="header-nav-line">
            新致商城
          </div></router-link>
          <router-link to="/about"><div class="header-nav-line">
            关于我们
          </div></router-link>
          <div class="header-nav-action">
            <label>选择区域/语言&nbsp;&nbsp;&nbsp;登录 &nbsp;&nbsp;&nbsp;注册</label>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="" aria-describedby="basic-addon2" id="test">
              <span class="input-group-addon"><span class="glyphicon glyphicon-search"></span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer class="footer">
      <div class="content clearfix">
        <dl>
          <dt>帮助中心</dt>
          <dd>全程服务</dd>
          <dd>业务支持</dd>
        </dl>
        <dl>
          <dt>公司</dt>
          <dd>网站使用条款</dd>
          <dd>信息保护声明</dd>
          <dd>CMMI5</dd>
          <dd>ISO27001</dd>
          <dd>员工信箱</dd>
          <dd>客户入口 </dd>
        </dl>
        <dl>
          <dt>联系方式</dt>
          <dd>地址：上海市浦东新区峨山路91弄98号陆家嘴软件园 1号楼4楼</dd>
          <dd>电话：400-7842-782</dd>
          <dd>邮箱：support@newtouch.com</dd>
        </dl>
        <div class="footer-i">

        </div>
      </div>
      <div class="footer-bottom">
        Copyright © 2014-2017&nbsp;&nbsp;&nbsp;上海新致软件股份有限公司&nbsp;&nbsp;&nbsp;ICP证：沪ICP备10012409号-1
      </div>
    </footer>
  </div>
</template>


<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>
  /*公共css*/
  @import './css/App.css';
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-family: Microsoft Yahei;
    font-size: 14px;
    -webkit-text-size-adjust: 100%;
  }


  .header {
    background: #022330;
    height: 80px;
  }

  .header .header-con {
    width: 1200px;
    margin: 0 auto;
  }

  .header .header-nav {
    color: #fff;
  }

  .header .header-nav img {
    float: left;
    margin-top: 20px;
  }

  .header .header-nav .header-nav-line {
    float: left;
    margin-left: 30px;
    line-height: 80px;
    font-size: 16px;
  }

  .header .header-nav .router-link-active .header-nav-line{
    border-bottom: #00BEFF 4px solid;
    box-sizing: border-box;
    height: 80px;
  }

  .header .header-nav .header-nav-line:hover {
    cursor: pointer;
  }

  .header .header-nav .header-nav-line a {
    color: #fff;
  }

  .header .header-nav .header-nav-action {
    float: right;
    width: 230px;
    padding-top: 8px;
  }

  .header .header-nav .header-nav-action label {
    font-weight: inherit;
  }
  .header .header-nav a{
    color:#fff
  }
  .footer{
    background: #061325;
  }
  .footer .content{
    padding: 50px 0;
  }
  .footer .content dl{
    float: left;
    color: #fff;
    width: 20%;
  }
  .footer .content dt{
    font-size: 16px;
    margin-bottom: 10px;
  }
  .footer .content dd{}
  .footer .footer-bottom{
    text-align: center;
    color: #fff;
    border-top: #142c40 1px solid;
    padding: 10px 0px;
  }

</style>
