<template>
  <div class="about">
    <div class="carousel slide">

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <h1>{{srcTit}}</h1>
          <img class="marginCenter" :src="srcBg">
        </div>
      </div>
    </div>

    <div class="nav-controller clearfix">

      <div class="about-nav">
        <ul role="tablist">
          <router-link to="/about/newtouch">
            <div class="about-nav-line" @click="showBgFun('newtouch')">日新以致远</div>
          </router-link>
          <router-link to="/about/news">
            <div class="about-nav-line" @click="showBgFun('news')">企业动态</div>
          </router-link>
          <router-link to="/about/support">
            <div class="about-nav-line" @click="showBgFun('support')">公益支持</div>
          </router-link>
          <router-link to="/about/contact">
            <div class="about-nav-line" @click="showBgFun('contact')">联系我们</div>
          </router-link>
          <router-link to="/about/join">
            <div class="about-nav-line" @click="showBgFun('join')">加入我们</div>
          </router-link>
        </ul>
        <div class="tab-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import jQuery from "jquery";

  const InfoObj = {
    'newtouch': '日新以致远',
    'news': '企业动态',
    'support': '公益支持',
    'contact': '联系我们',
    'join': '加入我们'
  }

  export default {
    name: 'main',
    data () {
      return {
        //背景图片
        srcBg: require('../assets/about/newtouch_bg.png'),
        //背景文字
        srcTit: ''
      }
    },
    methods: {
      showBgFun: function (path) {
        this.srcBg = require(`../assets/about/${path}_bg.png`);
        this.srcTit = InfoObj[path];
      }
    },
    mounted: function () {

      var path = this.$route.path.split('/')[2];
      if (path) {
        this.srcBg = require(`../assets/about/${path}_bg.png`);
        this.srcTit = InfoObj[path];

      }
    }
  }
</script>

<!--<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=d33xUOlYyOEP6pRiTDcaM4rc"></script>-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about .carousel h1 {
    position: absolute;
    color: #fff;
    z-index: 1;
    width: 100%;
    text-align: center;
    top: 35%;
  }

  /*关于我们导航样式
  */
  .about-nav {
    margin-top: -43px;
    border-left: none;
    text-align: center;
  }

  .about .about-nav ul > a {
    display: inline-block;
  }

  .about .about-nav .router-link-active .about-nav-line {
    background: #00beff;
  }

  .about .about-nav .about-nav-line {
    line-height: 42px;
    margin: 0px;
    display: inline-block;
    position: relative;
    border-top: solid 1px #fff;
    border-left: solid 0.5px #fff;
    border-right: solid 0.5px #fff;
    margin-right: -5px;
    padding: 0 20px;
    color: #fff;
    background: #343434;
  }

  .about .about-nav .about-nav-line:hover {
    cursor: pointer;
  }

  .tab-content {
    line-height: 30px;
    text-align: center;
  }

  .tab-content > .active {
    display: block;
    display: inline-block;
    position: relative;
    margin: 0 auto;
    margin-left: 9%;
  }

  .tab-pane ul li.active a {
    color: #fff;
  }

  .tab-pane ul li a {
    color: #000;
  }

  .carousel-inner img {
    min-height: 245px;
  }

</style>

