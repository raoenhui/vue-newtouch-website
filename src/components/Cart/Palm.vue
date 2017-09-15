<template>
  <div class="palm">
      <div class="goods_message">
          <div class="row">
            <div class="col-md-4 financial_icon"><img src="../../assets/financial_icon.png" /></div>
            <div class="col-md-8 financial_msg">
              <h3>掌E保</h3>
              <p>掌E保是一款用于智能手机及平板电脑上的app应用产品，主要面向保险营销员，经纪人或营业代理。</p>
              <div class="goods_price">
                <span>价格</span>
                <span class="price">￥10000.00</span>
                <span>/月</span>
              </div>
              <div class="goods_size">
                <span style="margin-right:15px ">规格</span>
                <a href="#" class="active">普通版</a>
                <a>旗舰版</a>
              </div>
              <div class="buys_goods">
                <button type="button" class="btn btn-primary">立即购买</button>
                <button type="button" class="btn btn-danger">我要定制</button>
              </div>
            </div>
          </div>
      </div>

      <div class="goods_detail">
        <div class="row">
          <div class="col-md-12" >
            <span>掌E保是一款用于智能手机及平板电脑上的app应用产品。主要面向保险营销员、经纪人或兼业代理。通过本产品实现轻松几步制作建议书，快速移动出单，全方面记录客户，合理制订工作计划，更实时了解业绩情况、实时政策。让保险日常工作更便捷更高效。</span>
            <h4>【业务模块】</h4>
            <div style="text-align: center">
                <img src="../../assets/goods_icon.png"></img>
            </div>
              <h4>【上云优势】</h4>
              <ol>
                <li>
                  云上租用，合作方式更灵活。不再依赖项目模式。<br>
                  按人租用，付费灵活<br>
                  按年租用，多租更省<br>
                </li>
                <li>
                  快速上线<br>
                  系统快速上线；业务产品快速上线<br>
                </li>
                <li>
                  快速计算<br>
                  基于云计算的掌E保，能快速的进行保费计算及利益演示，且能极大的缩短业务流程上花费的时间。
                </li>
              </ol>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'palm',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .goods_message .row, .goods_detail .row{
      padding: 0px;
  }
  .goods_message,.goods_detail{
      margin-bottom: 20px;
      border: solid 1px #ddd;
      width: 100%;
      padding:30px 20px;
  }

  .financial_icon{
      text-align: center;
        margin-top: 3%;
  }

  .financial_msg p{
    color:#ccc;
  }

  .financial_msg h3{
    font-weight: 500;
    font-size: 22px;
    padding-bottom: 15px;
  }

  .goods_price {
    padding: 15px;
    background-color:#f1f1f1;
    line-height: 30px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .goods_price span{
      font-size: 16px;
      font-weight: 500;
  }

  .goods_price .price{
      color:#ff0000;
      font-size: 2em;
      margin-left: 15px;
      margin-right: 15px;
  }

  .goods_size{
    padding: 15px;
    margin-bottom: 20px;
  }

  .goods_size span{
    font-size: 16px;
  }

  .goods_size a{
    border: solid 1px #DADADA;
    padding:10px 15px;
    margin-right: 15px;
    color:#DADADA;
  }

  .goods_size a.active{
    color: #06497E;
    border: solid 1px #06497E;
  }

  .btn-primary,.btn-danger{
    border-radius: 0px;
    padding: 8px 12px;
    margin-right: 10px;
  }

  .goods_detail{
    color: #061325;
    letter-spacing: 2px;
    padding:30px 40px;
    line-height: 25px;
  }

  .goods_detail h4{
      padding: 20px 0px;
  }

  .goods_detail li{
    margin-bottom: 15px;
  }
</style>
