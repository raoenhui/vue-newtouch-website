<template>
  <div class="total-container">
    <div class="header-content">
      <div class="page-local">
        <a href="">首页</a>/
        <a href="">新致商城</a>/
        <a href="">金融云</a>
      </div>
    </div>

    <div class="main-content clearfix cart">
      <div class="silder-content lf">
        <h4 class="silder-title">新致商城</h4>
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default">
            <div class="panel-heading active" role="tab" id="headingOne" v-on:click="headtitClick">
              <h4 class="panel-title">
                <router-link to="/cart/finCloud">
                  <a role="button" data-toggle="collapse" class="active" data-parent="#accordion" href="#collapseOne"
                     aria-expanded="true" aria-controls="collapseOne">
                    金融云
                  </a>
                </router-link>
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
              <div class="panel-body silder-List">
                <ul>
                  <router-link to="/cart/palm">
                    <li>掌E保</li>
                  </router-link>
                  <router-link to="/cart/system">
                    <li>财险核心系统</li>
                  </router-link>
                  <router-link to="/cart/eCommerce">
                    <li>电子商务</li>
                  </router-link>
                  <router-link to="/cart/userSystem">
                    <li>统一人员管理系统</li>
                  </router-link>
                  <router-link to="/cart/clientSystem">
                    <li>CRM客户管理平台</li>
                  </router-link>
                  <router-link to="/cart/bigSystem">
                    <li>大资管协同平台</li>
                  </router-link>
                  <router-link to="/cart/inventSystem">
                    <li>贵金属综合投资平台</li>
                  </router-link>
                  <router-link to="/cart/exchangeSystem">
                    <li>选股学习与交流平台</li>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo" v-on:click="headtitClick">
              <h4 class="panel-title">
                <router-link to="/cart/medicalCloud">
                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                     aria-expanded="false" aria-controls="collapseTwo">
                    医疗云
                  </a>
                </router-link>
              </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div class="panel-body silder-List">
                <ul>
                  <router-link to="/cart/image">
                    <li>影像云</li>
                  </router-link>
                  <router-link to="/cart/image">
                    <li>云HIS</li>
                  </router-link>
                  <router-link to="/cart/image">
                    <li>电子商务</li>
                  </router-link>
                  <router-link to="/cart/image">
                    <li>统一人员管理系统</li>
                  </router-link>
                  <router-link to="/cart/image">
                    <li>CRM客户管理平台</li>
                  </router-link>
                  <router-link to="/cart/image">
                    <li>大资管协同平台</li>
                  </router-link>
                  <router-link to="/cart/image">
                    <li>贵金属综合投资平台</li>
                  </router-link>
                  <router-link to="/cart/image">
                    <li>选股学习与交流平台</li>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingThree" v-on:click="headtitClick">
              <router-link to="/cart/enterPriseCloud">
                <h4 class="panel-title">
                  <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                     href="#collapseThree"
                     aria-expanded="false" aria-controls="collapseThree">
                    企业云
                  </a>
                </h4>
              </router-link>
            </div>
            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
              <div class="panel-body silder-List">
                <ul>
                  <router-link to="/cart/crm">
                    <li>新致云CRM</li>
                  </router-link>
                  <router-link to="/cart/pm">
                    <li>新致云PM</li>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-content lf">
        <router-view></router-view>
      </div>
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
    },
    // 在 `methods` 对象中定义方法
    methods: {
      headtitClick: function (event) {
        $(event.target).parents('.silder-content').find('.panel-heading').removeClass('active');
        if ($(event.target).attr("aria-expanded"))
          $(event.target).parents(".panel-heading").addClass('active');
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .total-container h4 {
    margin: 0 !important;
  }

  .panel-heading {
    height: 40px;
    line-height: 40px;
    background-color: #F1F1F1;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
  }

  .panel-heading.active {
    border-left: #06497E 5px solid;
  }

  .total-container {
    background-color: #fff;
  }

  .header-content {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #F1F1F1;
  }

  .header-content .page-local {
    width: 1200px;
    margin: 0px auto;
  }

  .header-content .page-local a {
    padding-right: 10px;
  }

  .main-content {
    width: 1200px;
    margin: 30px auto;
  }

  .silder-content {
    width: 250px;
    margin-right: 30px;
  }

  .silder-title {
    height: 40px;
    color: #fff;
    line-height: 40px;
    background-color: #06497E;
    padding-left: 15px;
  }

  .panel-group .panel {
    margin-bottom: -6px;
    border-radius: 0px;
  }

  .silder-content ul li {
    list-style: none;
    height: 40px;
    line-height: 40px;
    padding-left: 15px;
    color: #06497E;
    /*border-bottom: #E5E5E5 1px solid;*/
  }

  .silder-List {
    background-color: #f1f1f1;
  }

  .silder-List ul li {
    padding-left: 15px;
    padding-bottom: 15px
  }

  .text-content {
    width: calc(100% - 280px);
  }

  .cart .panel-body {
    padding: 0px;
  }
</style>
