<template>
  <div class="aboutNewtouch">
    <div class="tab-pane">
      <ul>
        <li class="active" @click="showTab(1)"><a href="javascript:void(0);">企业简历</a></li>  <!--/about/conpanyProfile-->
        <li><a href="javascript:void(0);" @click="showTab(2)">分支机构</a></li>
        <li><a href="javascript:void(0);" @click="showTab(3)">企业文化</a></li>
        <li><a href="javascript:void(0);" @click="showTab(4)">发展历程</a></li>
        <li><a href="javascript:void(0);" @click="showTab(5)">企业资质</a></li>
        <li><a href="javascript:void(0);" @click="showTab(6)">企业荣耀</a></li>
      </ul>
      <div class="tab-pane-con">
        <div class="tab-pane-con-tab clearfix companyInfo">
          <article class="Info_content article" >
            上海新致软件有限公司成立于1994年，是一家高科技企业。2002年起至今每年被认定为“国家规划布局内重点软件企业”；2004年首批获得“A级中国软件欧美出口工程试点企业认定”，公司整体通过CMMI5评估。
            新致软件是一家信息技术服务供应商、多个行业提供咨询、设计、实施、测试、支持、培训等专业的解决方案。
          </article>

          <article class="Info_content" >
            <img src="../../assets/info_banner.png" alt="...">
          </article>

          <article class="Info_content">
            <div class="share-con">
              <img src="../../assets/info1.png">
              <img src="../../assets/info2.png">
              <img src="../../assets/info3.png">
            </div>
          </article>

        </div>
        <div class="tab-pane-con-tab">分支机构</div>
        <div class="tab-pane-con-tab">企业文化</div>
        <div class="tab-pane-con-tab">发展历程</div>
        <div class="tab-pane-con-tab">企业资质</div>
        <div class="tab-pane-con-tab">企业荣耀</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'newtouch',
    methods:{
      showTab:function(i){
        $(`.aboutNewtouch .tab-pane ul>li:nth-child(${i})`).addClass('active').siblings().removeClass('active')
        $(`.aboutNewtouch .tab-pane-con-tab:nth-child(${i})`).removeClass('hide').siblings().addClass('hide')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aboutNewtouch a{
  color: #fff;
}
.aboutNewtouch .tab-pane{
  background:#4178BE;
}
.aboutNewtouch .tab-pane li{    margin: 0 5px;}
.aboutNewtouch .tab-pane li.active a{color: #023041;}
.aboutNewtouch .tab-pane-con-tab{    background: #fff;}
/*公司简历 start*/
.companyInfo{
  background-color: #E7E7E7;
  padding: 30px 0px;
}

.companyInfo .Info_content{
  width: 1030px;
  letter-spacing:2px;
  padding: 20px;
  margin: 0 auto;
}
.companyInfo .article.Info_content{
  text-align: left;
  text-indent: 27px;
}

.companyInfo .Info_content .share-con{
  text-align: center;
}
/*公司简历 end*/
</style>
