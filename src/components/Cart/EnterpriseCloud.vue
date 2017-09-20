<template>
  <div class="enterpriseCloud">
    <div class="row enterpriseCloud_Category">
      <div class="Category_list">
        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="enterpriseCloudlist">

            <div class="Category_msg">
              <img src="../../assets/cart/enterprise_icon1.png" style="width:25%;"/>
              <h3>新致云CRM</h3>
              <p>掌E保是一款用于智能手机及平板电脑上的app应用产品，主要面向保险营销员，经纪人或营业代理。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/Crm')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="enterpriseCloudlist">

            <div class="Category_msg">
              <img src="../../assets/cart/enterprise_icon2.png" style="width:25%;"/>
              <h3>新致云PM</h3>
              <p>掌E保是一款用于智能手机及平板电脑上的app应用产品，主要面向保险营销员，经纪人或营业代理。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/Pm')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "enterpriseCloud",
    methods: {
      learnMoreFun: function (path) {
        this.$router.push({path: path})
        document.body.scrollTop = 0+'px';
      }
    }
  }
</script>

<style scoped>
  .enterpriseCloud .enterpriseCloud_Category{
    margin-bottom: 40px;
    text-align: center;
    margin-left: 10px;
  }

  .enterpriseCloud .enterpriseCloud_Category .enterpriseCloudlist{
    border:solid 1px #eee;
    padding: 0px;
    margin:0px 0px 0px 0px;
    background-color: #fff;
    box-shadow: 0 0 20px #eee;
  }

  .enterpriseCloud .enterpriseCloud_Category .enterpriseCloudlist .Category_msg{
    padding-top: 25px;
  }

  .enterpriseCloud .enterpriseCloud_Category .enterpriseCloudlist .Category_msg p{
    text-align: left!important;
    padding:0px 30px;
    min-height: 100px;
  }

  .enterpriseCloud .enterpriseCloud_Category .enterpriseCloudlist .Category_msg h3  {
    padding: 20px 0px;
  }

  .enterpriseCloud .enterpriseCloud_Category .category_more_cat .category_cat,.category_more_cat .category_more{
    width:50%;
    padding: 10px 0px;
    min-height: 66px;
  }

  .enterpriseCloud .enterpriseCloud_Category .category_more_cat .category_cat{
    background-color: #4178BE;
  }
  .enterpriseCloud .enterpriseCloud_Category .category_more_cat .category_cat span{
    font-size: 1.3em;
  }
  .enterpriseCloud .enterpriseCloud_Category .category_more_cat .category_cat a{
    color: #fff;
  }
  .enterpriseCloud .enterpriseCloud_Category .category_more_cat .category_more{
    background-color:#DCDCDC;
  }
  .enterpriseCloud .enterpriseCloud_Category .category_more_cat .category_more span{
    font-size: 1.3em;
  }
  .enterpriseCloud .enterpriseCloud_Category .category_more_cat .category_more a{
    color: #656565;
  }

</style>

