<template>
  <div class="image">
    <div class="goods_message">
      <div class="row">
        <div class="col-md-4 financial_icon"><img src="../../assets/financial_icon.png" /></div>
        <div class="col-md-8 financial_msg">
          <h3>新致企业云项目管理系统</h3>
          <p>掌E保是一款用于智能手机及平板电脑上的app应用产品，主要面向保险营销员，经纪人或营业代理。</p>
          <div class="goods_price">
            <span>价格</span>
            <span class="price">￥10000.00</span>
            <span>/月</span>
          </div>
          <div class="goods_size">
            <span style="margin-right:15px ">规格</span>
            <a>普通版</a>
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
          <span>新致云PM的设计理念是围绕产品展开的，集产品管理、项目管理、质量管理、文档管理、组织管理和事务管理于一体，是一款专业的研发项目管理软件，完整地覆盖了项目管理的核心流程。依托新致企业云，采用SAAS服务模式，灵活可靠，安全部署，同时降低了企业IT建设成本。</span>
          <h4>【功能列表】</h4>
          <ol>
            <li>
              产品管理：包括产品、需求、计划、发布、路线图等功能。
            </li>
            <li>
              项目管理：包括项目、任务、团队、build、燃尽图等功能。
            </li>
            <li>
              质量管理：包括bug、测试用例、测试任务、测试结果等功能。
            </li>
            <li>
              文档管理：包括产品文档库、项目文档库、自定义文档库等功能。
            </li>
            <li>
              事务管理：包括todo管理，我的任务、我的Bug、我的需求、我的项目等个人事务管理功能。
            </li>
            <li>
              组织管理：包括部门、用户、分组、权限等功能。
            </li>
            <li>
              统计功能：丰富的统计表。
            </li>
            <li>
              搜索功能：强大的搜索，帮助您找到相应的数据。
            </li>
            <li>
              灵活的扩展机制，几乎可以对系统的任何地方进行扩展。
            </li>
          </ol>
          <h4>【功能架构】</h4>
          <div style="text-align: center">
            <img src="../../assets/pm_icon.png" style="max-width: 90%;"></img>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Pm'
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
    border: solid 1px #cccccc;
    padding:10px 15px;
    margin-right: 15px;
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

  /*.goods_detail li{*/
    /*margin-bottom: 15px;*/
  /*}*/
</style>
