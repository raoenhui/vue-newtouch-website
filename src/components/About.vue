<template>
  <div class="mian">

      <div id="carousel1" class="carousel slide" data-ride="carousel">

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img src="../assets/about_index1.png" alt="...">
          </div>
          <div class="item">
            <img src="../assets/about_index2.png" alt="...">
          </div>
          <div class="item">
            <img src="../assets/about_index3.png" alt="...">
          </div>
          <div class="item">
            <img src="../assets/about_index4.png" alt="...">
          </div>
          <div class="item">
            <img src="../assets/about_index5.png" alt="...">
          </div>
        </div>

        <!-- Controls -->
        <!--<a class="left carousel-control" href="javascript:viod(0)" role="button" data-slide="prev" v-on:click="prev1">-->
          <!--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>-->
          <!--<span class="sr-only">Previous</span>-->
        <!--</a>-->
        <!--<a class="right carousel-control" href="javascript:viod(0)"  role="button" data-slide="next" v-on:click="next1">-->
          <!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
          <!--<span class="sr-only">Next</span>-->
        <!--</a>-->
      </div>

    <div class="nav-controller clearfix">

      <div class="about-nav">
        <ul role="tablist">
          <li class="about-nav-line"><a href="#home" aria-controls="home" role="tab" toggle="tab">日新以致远</a></li>
          <li class="about-nav-line"><a href="#">企业动态</a></li>
          <li class="about-nav-line"><a href="#">公益支持</a></li>
          <li class="about-nav-line"><a href="#">联系我们</a></li>
          <li class="about-nav-line"><a href="#/about/financial">加入我们</a></li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="home" style="">
            <ul>
              <li class="active"><a href="#">企业简历</a></li>  <!--/about/conpanyProfile-->
              <li><a href="#">分支机构</a></li>
              <li><a href="#">企业文化</a></li>
              <li><a href="#">发展历程</a></li>
              <li><a href="#">企业资质</a></li>
              <li><a href="#">企业荣耀</a></li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    <div class="clearfix companyInfo">
      <article class="Info_content" >
        上海新致软件有限公司成立于1994年，是一家高科技企业。2002年起至今每年被认定为“国家规划布局内重点软件企业”；2004年首批获得“A级中国软件欧美出口工程试点企业认定”，公司整体通过CMMI5评估。
        新致软件是一家信息技术服务供应商、多个行业提供咨询、设计、实施、测试、支持、培训等专业的解决方案。
      </article>

      <article class="Info_content" >
        <img src="../assets/info_banner.png" alt="...">
      </article>

      <article class="Info_content">
        <div class="share-con">
          <img src="../assets/info1.png">
          <img src="../assets/info2.png">
          <img src="../assets/info3.png">
        </div>
      </article>

    </div>

  <!--</div>-->

    <div class="clearfix news-content">
      <div class="content" style="width:1030px">
        <div class="panel panel-default news active">
          <div class="panel-body">
            <div class="col-md-9">
              <h4>【务副省长秦如培来访纪实】 云算天下 做 数字经济产业发展的中坚力量</h4>
              <span>
                七月二十七贵州省省委常委、常务副省长秦如培，在贵安数字 经济产业园区领导陪同下，莅临贵州新致普惠观摩考察
              </span>
            </div>
            <div class="col-md-3">
                <span class="month_day pull-right">27/07</span>
                <span class="year pull-right">2017</span>
            </div>
          </div>
        </div>

        <div class="panel panel-default news">
          <div class="panel-body">
            <div class="col-md-9">
              <h4>【务副省长秦如培来访纪实】 云算天下 做 数字经济产业发展的中坚力量</h4>
              <span>
                七月二十七贵州省省委常委、常务副省长秦如培，在贵安数字 经济产业园区领导陪同下，莅临贵州新致普惠观摩考察
              </span>
            </div>
            <div class="col-md-3">
              <span class="month_day pull-right">27/07</span>
              <span class="year pull-right">2017</span>
            </div>
          </div>
        </div>

        <div class="panel panel-default news">
          <div class="panel-body">
            <div class="col-md-9">
              <h4>【务副省长秦如培来访纪实】 云算天下 做 数字经济产业发展的中坚力量</h4>
              <span>
                七月二十七贵州省省委常委、常务副省长秦如培，在贵安数字 经济产业园区领导陪同下，莅临贵州新致普惠观摩考察
              </span>
            </div>
            <div class="col-md-3">
              <span class="month_day pull-right">27/07</span>
              <span class="year pull-right">2017</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import jQuery from "jquery";

  export default {
    name: 'main',
    data () {
      return {
        msg: ''
      }
    }
  }
//    // 在 `methods` 对象中定义方法
//    methods: {
//      prev1: function (event) {
//        jQuery('#carousel1').carousel('prev')
//      },next1: function () {
//        jQuery('#carousel1').carousel('next')
//      }
//    },
//
//    mounted: function () {
//      jQuery('#carousel1').carousel();
//    }
//  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*公共样式
  */
  ul{
    margin: 0px;
    padding: 0px;
  }

  ul li{
    list-style:none;
    display: inline-block;
  }

  a{
    color: #fff;
    display: block;
    padding:0px 20px;
  }

  /*关于我们导航样式
  */

  .nav-controller{
    background:#4178BE;
  }

  .about-nav{
    margin-top: -42px;
    border-left: none;
    text-align: center;
  }

  .about-nav-line{
    line-height: 42px;
    margin: 0px;
    display: inline-block;
    position: relative;
    border-top:solid 1px #fff;
    border-left:solid 0.5px #fff;
    border-right:solid 0.5px #fff;
    margin-right: -5px;
  }

  .tab-content{
    line-height:42px;
    text-align: center;
  }

  .tab-content > .active {
    display: block;
    display: inline-block;
    position: relative;
    margin: 0 auto;
    margin-left: 9%;
  }

  .tab-pane ul li.active a{
    color: #fff;
  }

  .tab-pane ul li a{
    color: #000;
  }

  /*公司简历
  */
  .companyInfo{
    background-color: #E7E7E7;
    padding: 30px 0px;
  }

  .companyInfo .Info_content{
    width: 1030px;
    letter-spacing:2px;
    padding: 20px;
    margin: 0 auto;
  }

  .Info_content .share-con{
    text-align: center;
  }

  /*企业动态*/

  .news-content{
    background: #E0E0E0;
    padding-bottom: 30px;
  }

  .panel{
    margin-top: 30px;
    margin-bottom: 0px;
    border-radius: 0px;
    padding: 20px 10px;
  }

  .news.active{
    border:solid 1px #4178BE;
  }

  .panel-body h4{
        margin-top: 0px;
  }

  .panel-body span{
      color:#9f9f9f;
  }

  .month_day{
      font-size: 2.7em;
      width: 100%;
    text-align:right ;
  }

  .year{
      font-size: 1.3em;
    width:100%;
    text-align: right;
  }

</style>

