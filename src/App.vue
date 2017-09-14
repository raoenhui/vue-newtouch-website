<template>
  <div id="app">
    <header class="header">

      <div class="header-con">
        <div class="header-nav clearfix">
          <router-link to="/"><img src="./assets/logo.png"></router-link>
          <div class="header-nav-line"><router-link to="/program">行业解决方案</router-link></div>
          <div class="header-nav-line"><a href="http://fic.newtouch.com">金融云</a></div>
          <div class="header-nav-line"><a href="http://mc.newtouch.com/#/-1">医疗云</a></div>
          <div class="header-nav-line"><a href="http://ecc.newtouch.com/index">企业云</a></div>
          <div class="header-nav-line">
            <router-link to="/cart">新致商城</router-link>
          </div>
          <div class="header-nav-line">
            <router-link to="/about">关于我们</router-link>
          </div>
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
  </div>
</template>


<script>

  import jQuery from "jquery";
  import bootstrap from "bootstrap";
  export default {
    name: 'app',
    mounted(){
      jQuery("#test").val("jquery set vaule");
    }
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-family: Microsoft Yahei;
    font-size: 14px;
    -webkit-text-size-adjust: 100%;
  }

  .clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
  }

  .clearfix {
    zoom: 1
  }

  a {
    text-decoration: none;
  }

  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
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
</style>
