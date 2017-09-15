<template>
  <div class="main">
      <div class="scheme_list">
          <div class="scheme financial">
            <div class="more_btn"><a href="#" class="more">了解更多</a><a href="#" class="online">在线咨询</a></div>
          </div>
          <div class="scheme telecom">
            <div class="more_btn"><a href="#" class="more">了解更多</a><a href="#" class="online">在线咨询</a></div>
          </div>
          <div class="scheme government">
            <div class="more_btn"><a href="#" class="more">了解更多</a ><a href="#" class="online">在线咨询</a></div>
          </div>
          <div class="scheme business">
            <div class="more_btn"><a href="#" class="more">了解更多</a><a href="#" class="online">在线咨询</a></div>
          </div>
          <div class="scheme transportation">
            <div class="more_btn" ><a href="#" class="more">了解更多</a><a href="#" class="online">在线咨询</a></div>
          </div>
          <div class="scheme medical">
            <div class="more_btn"><a href="#" class="more">了解更多</a><a href="#" class="online">在线咨询</a></div>
          </div>
          <div class="scheme made">
            <div class="more_btn"><a href="#" class="more">了解更多</a><a href="#" class="online">在线咨询</a></div>
          </div>
          <div class="scheme messages">
            <div class="more_btn"><a href="#" class="more">了解更多</a><a href="#" class="online">在线咨询</a></div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'scheme',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .scheme_list{
    width: 100%;
  }

  .scheme_list .scheme{
      width: inherit;
      display: block;
      width: 100%;
      height: 220px;
      margin-bottom: 20px;
      position: relative;
      background-size:cover;
      background-repeat:no-repeat;
  }

  .scheme_list .financial{
      background-image:url(../../assets/financial_bg.png);
  }

  .scheme_list .telecom{
    background-image:url('../../assets/telecom_bg.png');
  }

  .scheme_list .government{
    background-image:url('../../assets/government_bg.png');
  }

  .scheme_list .business{
    background-image:url('../../assets/business_bg.png');
  }

  .scheme_list .transportation{
    background-image:url('../../assets/transportation_bg.png');
  }

  .scheme_list .medical{
    background-image:url('../../assets/medical_bg.png');
  }

  .scheme_list .made{
    background-image:url('../../assets/made_bg.png');
  }

  .scheme_list .messages{
    background-image:url('../../assets/messages_bg.png');
  }

  .scheme_list .scheme .more_btn{
    position: absolute;
    bottom: 30px;
    left: 10%;
  }

  .more_btn a{
    display: inline-block;
    padding: 9px 30px;
    color: #fff;
    margin-right: 20px;
  }

  .more_btn .more{
      background: #022330;
  }

  .more_btn .online{
      background:#B5C5C6;
  }
</style>
