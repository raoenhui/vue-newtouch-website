<template>
  <div class="aboutContact">
    <div class="contentMin">
      <div class="row">
        <div class="col-md-6">
          <div class="aboutContact-addressDiv">
            <div class="aboutContact-addressDiv-link"><h4 style="font-weight: 600;">上海新致软件股份有限公司</h4></div>
            <div class="aboutContact-addressDiv-con">地址：上海市浦东新区峨山路91弄98号陆家嘴软件园1号楼4F-6F</div>
            <div class="aboutContact-addressDiv-con">电话：021-51105660</div>
            <div class="aboutContact-addressDiv-con">传真：021-51105667</div>
            <div class="aboutContact-addressDiv-con">邮编：200127</div>
            <div class="aboutContact-addressDiv-con">邮件：newtouch@newtouch.cn</div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../../assets/about/contact_map.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*分支机构start*/
  .aboutContact .aboutContact-addressDiv {
    text-align: left;
    margin-bottom: 20px;
    line-height: 34px;
    margin-top:20%;
  }

  .aboutContact-addressDiv-con{
    font-size: 16px;
  }

  .aboutContact .aboutContact-addressDiv .aboutContact-addressDiv-link {
    color: #242B6F;
    cursor: pointer;
    margin-bottom: 40px;
  }

  /*分支机构end*/
</style>
