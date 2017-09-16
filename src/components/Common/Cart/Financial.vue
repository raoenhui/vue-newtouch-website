<template>
  <div class="financial">
    <div class="goods_message">
      <div class="row">
        <div class="col-md-4 financial_icon"><img :src="mainObj.icon"/></div>
        <div class="col-md-8 financial_msg">
          <h3>{{mainObj.title}}</h3>
          <p>{{mainObj.intro}}</p>
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
            <button type="button" class="btn btn-primary" @click="buyBtnFun">立即购买</button>
            <button type="button" class="btn btn-danger">我要定制</button>
          </div>
        </div>
      </div>
    </div>

    <div class="goods_detail">
      <div class="row">
        <div class="col-md-12">
          <span>{{detailObj.intro}}</span>
          <div v-for="obj in detailObj.items" v-if="detailObj.items">
            <h4>【{{obj.title}}】</h4>
            <div class="good_detail-img" v-if="obj.type=='image'">
              <img :src="obj.imgSrc"/>
            </div>
            <div v-if="obj.type=='sentence'" v-html="obj.sentence"></div>
            <ol v-if="obj.type=='list'">
              <li v-for="liObj in obj.data" v-html="liObj"/>
            </ol>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Financial',
    props: ['mainObj', 'detailObj','buyClick'],
    methods:{
      buyBtnFun:function(){
        this.buyClick && this.buyClick('该功能暂时没有开启')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .financial .goods_message .row, .goods_detail .row {
    padding: 0px;
  }

  .financial .goods_message, .goods_detail {
    margin-bottom: 20px;
    border: solid 1px #ddd;
    width: 100%;
    padding: 30px 20px;
  }

  .financial .financial_icon {
    text-align: center;
    margin-top: 3%;
  }

  .financial .financial_msg p {
    color: #ccc;
  }

  .financial .financial_msg h3 {
    font-weight: 500;
    font-size: 22px;
    padding-bottom: 15px;
  }

  .financial .goods_price {
    padding: 15px;
    background-color: #f1f1f1;
    line-height: 30px;
    margin-bottom: 10px;
    margin-top: 20px;
  }

  .financial .goods_price span {
    font-size: 16px;
    font-weight: 500;
  }

  .financial .goods_price .price {
    color: #ff0000;
    font-size: 2em;
    margin-left: 15px;
    margin-right: 15px;
  }

  .financial .goods_size {
    padding: 15px;
    margin-bottom: 20px;
  }

  .financial .goods_size a.active {
    color: #06497E;
    border: solid 1px #06497E;
  }

  .financial .goods_size span {
    font-size: 16px;
  }

  .financial .goods_size a {
    border: solid 1px #cccccc;
    padding: 10px 15px;
    margin-right: 15px;
  }

  .financial .btn-primary, .btn-danger {
    border-radius: 0px;
    padding: 8px 12px;
    margin-right: 10px;
  }

  .financial .goods_detail {
    color: #061325;
    letter-spacing: 2px;
    padding: 30px 40px;
    line-height: 25px;
  }

  .financial .goods_detail h4 {
    padding: 20px 0px;
  }

  .financial .goods_detail .good_detail-img {
    text-align: center
  }
  .financial .goods_detail .good_detail-img img{
    max-width: 800px;
  }
</style>
