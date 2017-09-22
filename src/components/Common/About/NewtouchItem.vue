<template>

  <div class="newtouchItem">
    <div class="aboutNewtouch-addressDiv">
      <div class="aboutNewtouch-addressDiv-tit" v-if="addressObj.addressDivTitTotle != ''">|&nbsp;&nbsp;{{addressObj.addressDivTitTotle}}&nbsp;&nbsp;|</div>
      <div class="aboutNewtouch-addressDiv-tit" v-if="addressObj.addressDivTit != ''">|&nbsp;&nbsp;{{addressObj.addressDivTit}}&nbsp;&nbsp;|</div>
      <div class="aboutNewtouch-addressDiv-link">{{addressObj.addressDivName}}&nbsp;&nbsp; <span class="glyphicon glyphicon-map-marker" aria-hidden="true" ></span></div>
      <div class="aboutNewtouch-addressDiv-con">地址：{{addressObj.addressDivLink}}</div>
      <div class="aboutNewtouch-addressDiv-con">电话：{{addressObj.addressDivTel}}</div>
      <div class="aboutNewtouch-addressDiv-con" v-if="addressObj.addressDivFax != ''">传真：{{addressObj.addressDivFax}}</div>
      <div class="aboutNewtouch-addressDiv-con" v-if="addressObj.addressDivPostcode != ''">邮编：{{addressObj.addressDivPostcode}}</div>
      <div class="aboutNewtouch-addressDiv-con" v-if="addressObj.addressDivMail != ''">邮件：{{addressObj.addressDivMail}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'newtouchItem',
    props: ['addressObj'],

  }
</script>
<style lang="scss" scoped>
  /*分支机构start*/
  .newtouchItem .aboutNewtouch-addressDiv {
    text-align: left;
    margin-bottom: 20px;
    line-height: 34px;

    .aboutNewtouch-addressDiv-tit {
      font-size: 16px;
    }

    .aboutNewtouch-addressDiv-link {
      color: #00BEFF;
      cursor: pointer;
    }

    .aboutNewtouch-addressDiv-link span{
      font-size: 1.7em;
    }
  }
  /*分支机构end*/
</style>
