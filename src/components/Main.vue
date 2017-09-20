<template>
  <div class="main">
    <div id="carousel1" class="carousel slide" data-ride="carousel">
      <!--&lt;!&ndash; Indicators &ndash;&gt;-->
      <ol class="carousel-indicators">
        <li data-target="#carousel1" data-slide-to="0" class="active"></li>
        <li data-target="#carousel1" data-slide-to="1"></li>
        <li data-target="#carousel1" data-slide-to="2"></li>
      </ol>
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="carousel-con clearfix">
            <div class="carousel-con-lf">
              <h2>新致软件满甘三</h2>
              <h2>初心不忘再起航</h2>
            </div>
            <img src="../assets/index1.png" alt="...">
          </div>
        </div>
        <div class="item">
          <div class="carousel-con clearfix">
            <div class="carousel-con-lf">
              <h2>走进新致商城</h2>
              <h5>实现企业一站式进入云计算时代的可能</h5>
              <router-link to="/cart" class="carousel-con-btn">查看详情</router-link>
            </div>
            <img src="../assets/index2.png" alt="...">
          </div>
        </div>
        <div class="item">
          <div class="carousel-con clearfix">
            <div class="carousel-con-lf">
              <h2>行业解决方案</h2>
              <h5>融入行业发展变化中，实现企业信息化管理的最佳实践</h5>
              <router-link to="/program" class="carousel-con-btn">查看详情</router-link>
            </div>
            <img src="../assets/index3.png" alt="...">
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel1" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel1" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div id="carousel2" class="carousel slide" data-ride="carousel">
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="carousel-promotion clearfix">
            <div class="carousel-promotion-item">
              <img src="../assets/promotion4.png" alt="...">
              <div class="carousel-promotion-tit">影像云</div>
              <div class="carousel-promotion-intro">从诊断前，诊断中，诊断后三个角度出发，以患者、医生、医院为中心，提供医疗影像诊断系统整体解决方案，帮助医疗机构加速进入“云”时代。
              </div>
              <div class="carousel-promotion-btn">了解更多</div>
            </div>
            <div class="carousel-promotion-item">
              <img src="../assets/promotion5.png" alt="...">
              <div class="carousel-promotion-tit">新致云CRM</div>
              <div class="carousel-promotion-intro">结合中小企业现状，采用科学的客户关系管理模型，完整的销售周期及售后管理让企业实际运作更加方便快捷。</div>
              <div class="carousel-promotion-btn">了解更多</div>
            </div>
            <div class="carousel-promotion-item">
              <img src="../assets/promotion6.png" alt="...">
              <div class="carousel-promotion-tit">大资管协同平台</div>
              <div class="carousel-promotion-intro">
                全面打通投资人、管理人、托管人、投资标的多系统渠道通路，实现基于管理、估值、监督的托管业务环境，标准化管理人指令服务与投资人资产视图，构建多云环境的资管全生命周期协同平台。
              </div>
              <div class="carousel-promotion-btn">了解更多</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="carousel-promotion clearfix">
            <div class="carousel-promotion-item">
              <img src="../assets/promotion1.png" alt="...">
              <div class="carousel-promotion-tit">影像云</div>
              <div class="carousel-promotion-intro">从诊断前，诊断中，诊断后三个角度出发，以患者、医生、医院为中心，提供医疗影像诊断系统整体解决方案，帮助医疗机构加速进入“云”时代。
              </div>
              <div class="carousel-promotion-btn">了解更多</div>
            </div>
            <div class="carousel-promotion-item">
              <img src="../assets/promotion2.png" alt="...">
              <div class="carousel-promotion-tit">新致云CRM</div>
              <div class="carousel-promotion-intro">结合中小企业现状，采用科学的客户关系管理模型，完整的销售周期及售后管理让企业实际运作更加方便快捷。</div>
              <div class="carousel-promotion-btn">了解更多</div>
            </div>
            <div class="carousel-promotion-item">
              <img src="../assets/promotion3.png" alt="...">
              <div class="carousel-promotion-tit">大资管协同平台</div>
              <div class="carousel-promotion-intro">
                全面打通投资人、管理人、托管人、投资标的多系统渠道通路，实现基于管理、估值、监督的托管业务环境，标准化管理人指令服务与投资人资产视图，构建多云环境的资管全生命周期协同平台。
              </div>
              <div class="carousel-promotion-btn">了解更多</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel2" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel2" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="main-share">
      <div class="main-share-con">
        <h2>知识共享</h2>
        <img src="../assets/share1.png">
        <img src="../assets/share2.png">
        <img src="../assets/share3.png">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'main',
    data () {
      return {
        msg: ''
      }
    },
    mounted: function () {
      $('#carousel2').carousel({
        cycle: false
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #carousel1 .carousel-inner {
    background: #343434;
  }

  #carousel1 .carousel-inner .carousel-con {
    width: 1000px;
    margin: 0 auto;
  }

  #carousel1 .carousel-con .carousel-con-lf {
    float: left;
    color: #fff;
    padding: 140px 0 0 40px;
  }

  #carousel1 .carousel-con .carousel-con-lf h2 {
    font-size: 45px;
    margin-bottom: 30px;
  }

  #carousel1 .carousel-con .carousel-con-lf h5 {
    font-size: 18px;
  }

  #carousel1 .carousel-con .carousel-con-lf .carousel-con-btn {
    width: 120px;
    height: 60px;
    display: block;
    line-height: 60px;
    text-align: center;
    background: #00bfff;
    color: #fff;
    font-size: 14px;
    margin-top: 30px;
  }

  #carousel1 .carousel-con img {
    float: right;
  }

  #carousel2 {
    background: #fff;
    padding: 40px 0px;
  }

  #carousel2 .carousel-control.left, #carousel2 .carousel-control.right {
    background: none;
  }

  .carousel-promotion .carousel-promotion-item {
    width: 300px;
    height: 430px;
    position: relative;
    text-align: center;
    border: 1px solid #bbb;
    float: left;
    padding: 20px;
  }

  .carousel-promotion .carousel-promotion-item:hover {
    background: #00bfff;
    border: 1px solid #00bfff;
    color: #fff;
    transition: background-color 0.3s linear;
    -moz-transition: background-color 0.3s linear;
    -webkit-transition: background-color 0.3s linear;
    -o-transition: background-color 0.3s linear;
  }

  .carousel-promotion .carousel-promotion-item:nth-child(2) {
    margin: 0px 30px;
  }

  .carousel-promotion .carousel-promotion-item img {
    width: 260px;
  }

  .carousel-promotion .carousel-promotion-item .carousel-promotion-tit {
    font-size: 18px;
    line-height: 40px;
    margin-bottom: 10px;
  }

  .carousel-promotion .carousel-promotion-item .carousel-promotion-intro {
    text-align: left;
  }

  .carousel-promotion .carousel-promotion-item .carousel-promotion-btn {
    background: #00bfff;
    width: 100px;
    line-height: 30px;
    bottom: 20px;
    left: 100px;
    position: absolute;
    color: #fff;
  }

  .carousel-promotion .carousel-promotion-item:hover .carousel-promotion-btn {
    background: #fff;
    color: #00bfff;
    cursor: pointer;
  }

  .carousel-promotion {
    width: 960px;
    margin: 20px auto;
  }

  .main-share {
    padding: 50px 0;
  }

  .main-share .main-share-con {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 0px 0px 30px;
  }

  .main-share .main-share-con h2 {
    margin-bottom: 50px;
  }

  .main-share img:nth-child(3) {
    margin: 0px 35px;
  }

  #carousel1 .carousel-inner > .item > img {
    margin: 0 auto;
  }

</style>
