<template>
  <div class="main">
    <div id="carousel1" class="carousel slide" data-ride="carousel">
      <!--&lt;!&ndash; Indicators &ndash;&gt;-->
      <!--<ol class="carousel-indicators">-->
        <!--<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>-->
        <!--<li data-target="#carousel-example-generic" data-slide-to="1"></li>-->
        <!--<li data-target="#carousel-example-generic" data-slide-to="2"></li>-->
      <!--</ol>-->

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../assets/index1.png" alt="...">
        </div>
        <div class="item">
          <img src="../assets/index2.png" alt="...">
        </div>
        <div class="item">
          <img src="../assets/index3.png" alt="...">
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="javascript:void(0)" role="button" data-slide="prev" v-on:click="prev1">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="javascript:void(0)"  role="button" data-slide="next" v-on:click="next1">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div id="carousel2" class="carousel slide" data-ride="carousel">

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="carousel-promotion">
            <img src="../assets/promotion1.png" alt="...">
            <img src="../assets/promotion2.png" alt="...">
            <img src="../assets/promotion3.png" alt="...">
          </div>
        </div>
        <div class="item">
          <div class="carousel-promotion">
            <img src="../assets/promotion4.png" alt="...">
            <img src="../assets/promotion5.png" alt="...">
            <img src="../assets/promotion6.png" alt="...">
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="javascript:void(0)" role="button" data-slide="prev" v-on:click="prev2">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="javascript:void(0)"  role="button" data-slide="next" v-on:click="next2">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="main-share">
      <div class="main-share-con">
        <img src="../assets/share1.png">
        <img src="../assets/share2.png">
        <img src="../assets/share3.png">
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
  },
  // 在 `methods` 对象中定义方法
  methods: {
    prev1: function (event) {
      jQuery('#carousel1').carousel('prev')
    },next1: function () {
      jQuery('#carousel1').carousel('next')
    },prev2: function () {
      jQuery('#carousel2').carousel('prev')
    },next2: function () {
      jQuery('#carousel2').carousel('next')
    }
  },
  mounted: function () {
    jQuery('#carousel1').carousel();
    jQuery('#carousel2').carousel({
      cycle:false
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #carousel2{    background: #e7e7e7;}
  .carousel-promotion{
    width: 1000px;
    margin: 20px auto;
  }
  .carousel-promotion img:nth-child(2){
    margin: 0 10px;
  }
  .main-share{
    background: #264a60;
    padding: 100px 0;
  }
  .main-share .main-share-con{
    width:1200px;
    margin: 0 auto;
  }
  .main-share img:nth-child(2){
    margin: 0px 35px;
  }
  #carousel1 .carousel-inner > .item > img{
    margin: 0 auto;
  }

</style>
