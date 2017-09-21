<template>
  <div class="image">
    <div class="goods_message">
      <div class="row">
        <div class="col-md-4 financial_icon"><img src="../../assets/cart/enterprise_icon1.png" /></div>
        <div class="col-md-8 financial_msg">
          <h3>新致企业云CRM管理系统</h3>
          <p>掌E保是一款用于智能手机及平板电脑上的app应用产品，主要面向保险营销员，经纪人或营业代理。</p>
          <div class="goods_price">
            <span>价格</span>
            <span class="price">￥10000.00</span>
            <span>/月</span>
          </div>
          <div class="goods_size">
            <span style="margin-right:15px ">规格</span>
            <a class="active">普通版</a>
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
          <span>新致云CRM结合中小企业现状，采用科学的客户关系管理模型，完整的销售周期及售后管理让企业实际运作更加方便快捷。新致云CRM不仅能够科学的管理客户关系，更进一步改善企业的营销能力、加强科学决策、实现企业管理信息化。依托新致企业云，采用SAAS服务模式，灵活可靠，安全部署，同时降低了企业IT建设成本。</span>
          <h4>【功能列表】</h4>
          <ol>
            <li>
              客户状况一目了然
            </li>
            <li>
              准确把握客户状况和员工状况
            </li>
            <li>
              实现客户资源的最优化管理
            </li>
            <li>
              深度发掘和了解客户需求
            </li>
            <li>
              准确评估和管理客户价值
            </li>
            <li>
              及时发现早期的客户不满
            </li>
            <li>
              完整管理客户生命周期
            </li>
            <li>
              量化管理销售过程
            </li>
            <li>
              科学评估执行效果，发现能力短板
            </li>
            <li>
              提供充分的知识库支持
            </li>
            <li>
              有效的实现经验的复制和继承
            </li>
            <li>
              提供充分的决策信息
            </li>
            <li>
              实现及时响应，快速决策
            </li>
            <li>
              实现随时随地“移动管理”
            </li>
          </ol>
          <h4>【功能架构】</h4>
          <div style="text-align: center">
            <img src="../../assets/crm_icon.png"></img>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'crm'
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
    background-color: #fff;
  }

  .financial_icon{
    text-align: center;
    margin-top: 3%;
  }

  .financial_msg p{
    color:#5e5e5e;
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
    border: solid 1px #cccccc;
    padding:10px 15px;
    margin-right: 15px;
    color: #cccccc;
  }

  .goods_size a.active {
    color: #00BEFF;
    border: solid 1px #00BEFF;
  }

  .btn-primary,.btn-danger{
    border-radius: 0px;
    padding: 8px 12px;
    margin-right: 10px;
  }

  .btn-primary{
    background-color: #00BEFF;
    border-color: #00BEFF;
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

  /*.goods_detail li{*/
    /*margin-bottom: 15px;*/
  /*}*/
</style>
