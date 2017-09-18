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
          <article class="Info_content article">
            上海新致软件有限公司成立于1994年，是一家高科技企业。2002年起至今每年被认定为“国家规划布局内重点软件企业”；2004年首批获得“A级中国软件欧美出口工程试点企业认定”，公司整体通过CMMI5评估。
            新致软件是一家信息技术服务供应商、多个行业提供咨询、设计、实施、测试、支持、培训等专业的解决方案。
          </article>

          <article class="Info_content">
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
        <div class="tab-pane-con-tab hide">
          <div class="contentMin">
            <div class="row ">
            <div class="col-md-6">
              <div class="aboutNewtouch-addressDiv">
                <div class="aboutNewtouch-addressDiv-tit">|&nbsp;&nbsp;公司总部&nbsp;&nbsp;|</div>
                <div class="aboutNewtouch-addressDiv-link">上海新致软件股份有限公司</div>
                <div class="aboutNewtouch-addressDiv-con">地址：上海市浦东新区峨山路91弄98号陆家嘴软件园1号楼4F-6F</div>
                <div class="aboutNewtouch-addressDiv-con">电话：021-51105660</div>
                <div class="aboutNewtouch-addressDiv-con">传真：021-51105667</div>
                <div class="aboutNewtouch-addressDiv-con">邮编：200127</div>
                <div class="aboutNewtouch-addressDiv-con">邮件：newtouch@newtouch.cn</div>
              </div>
              <div class="aboutNewtouch-addressDiv">
                <div class="aboutNewtouch-addressDiv-tit">|&nbsp;&nbsp;分支机构&nbsp;&nbsp;|</div>
                <div class="aboutNewtouch-addressDiv-link">上海新逸科技有限公司</div>
                <div class="aboutNewtouch-addressDiv-con">地址：上海市徐汇区田林路200号C幢206室</div>
                <div class="aboutNewtouch-addressDiv-con">电话：021-51105660</div>
                <div class="aboutNewtouch-addressDiv-con">传真：021-51105667</div>
                <div class="aboutNewtouch-addressDiv-con">邮编：200127</div>
              </div>
              <div class="aboutNewtouch-addressDiv">
                <div class="aboutNewtouch-addressDiv-link">上海新致仕海软件有限公司</div>
                <div class="aboutNewtouch-addressDiv-con">地址：中国（上海）自由贸易试验区乳山路227号2楼B区231室</div>
                <div class="aboutNewtouch-addressDiv-con">电话：021-51105660</div>
                <div class="aboutNewtouch-addressDiv-con">传真：021-51105667</div>
                <div class="aboutNewtouch-addressDiv-con">邮编：200127</div>
              </div>
              <div class="aboutNewtouch-addressDiv">
                <div class="aboutNewtouch-addressDiv-link">上海新致信息技术有限公司</div>
                <div class="aboutNewtouch-addressDiv-con">地址：中国（上海）自由贸易试验区华申路198号一幢楼六层E-03室</div>
                <div class="aboutNewtouch-addressDiv-con">电话：021-51105660</div>
                <div class="aboutNewtouch-addressDiv-con">传真：021-51105667</div>
                <div class="aboutNewtouch-addressDiv-con">邮编：200127</div>
              </div>
            </div>
            <div class="col-md-6">
              <img src="../../assets/about/map.png"/>
            </div>
          </div>
          </div>
        </div>
        <div class="tab-pane-con-tab hide">
          <div class="aboutNewtouch-coreIdea contentMin">
            <h2>核心理念</h2>
            <div class="aboutNewtouch-coreIdea-con">
              日新”语出《大学》首章：“苟日新、日日新、又日新”，蕴涵不断自我更新之意。<br/>
              “致远”采自诸葛亮《诫子书》：“非淡泊无以明志、非宁静无以致远”，久远的农耕社会政治家确信成功之道源于“宁静”的静态法则。<br/>
              如今商业社会的技术性公司所遵循的则是“推陈出新，不断自新"”的动态法则
            </div>
            <div class="aboutNewtouch-coreIdea-img">
              <img src="../../assets/about/coreIdea1.png"/>
              <img src="../../assets/about/coreIdea2.png"/>
              <img src="../../assets/about/coreIdea3.png"/>
            </div>
          </div>
        </div>
        <div class="tab-pane-con-tab hide">
          <div class="contentMin">
            <ul class="aboutNewtouch-timeline">
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2014年</h3>
                  <p>
                    新致软件成功蜕变，完成股份改制
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2013年</h3>
                  <p>
                    新致软件重装上阵，全面升级
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2012年</h3>
                  <p>
                    成功开拓电信运营商客户
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2011年</h3>
                  <p>
                    业绩持续增长<br/>公司员工2000人<br/>
                    建成 日电新致医疗创新发展中心NNHIS
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2010年</h3>
                  <p>
                    服务中国2010年上海世博会运营指挥<br/>
                    建成 法国标致雪铁龙集团公司中国开发中心PDC<br/>
                    建成 TIS & Newtouch 开发中心
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2009年</h3>
                  <p>
                    成立北京、苏州新致<br/>
                    公司员工1200人<br/>
                    评为“上海名牌”
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2008年</h3>
                  <p>
                    公司整体通过CMMI5<br/>
                    通过ISO27001认证<br/>
                    设立杭州、巴黎办事处
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2007年</h3>
                  <p>
                    被认定为“中国软件出口工程企业”<br/>
                    首次评为“上海名牌服务”
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2006年</h3>
                  <p>
                    成立美国Newtouch<br/>
                    员工超过1000人
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2005年</h3>
                  <p>
                    成立东京Newtouc<br/>
                    人员规模 500人<br/>
                    成立西安新致
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2004年</h3>
                  <p>
                    成立东京Newtouch<br/>
                    人员规模 500人<br/>
                    成立西安新致
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2003年</h3>
                  <p>
                    公司整体通过CMM3
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2002年</h3>
                  <p>
                    成立第一个海外子公司 日本关西Newtouch<br/>
                    首次被认定为 “国家规划布局内重点软件企业”
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2001年</h3>
                  <p>
                    开始服务政府公众客户<br/>
                    人员达到 100人
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2000年</h3>
                  <p>
                    通过ISO9001认证
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">1998年</h3>
                  <p>
                    开拓日本软件外包市场<br/>
                    公司员工 50人
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">1996年</h3>
                  <p>
                    开始服务金融行业客户
                  </p>
                </div>
              </li>

              <li class="aboutNewtouch-timeline-item last">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">1994年6月</h3>
                  <p>
                    新致公司创立
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--<div class="tab-pane-con-tab">企业资质</div>-->
        <div class="tab-pane-con-tab hide">
          <div class="aboutNewtouch-coreIdea contentMin">
            <h2>核心理念</h2>
            <div class="aboutNewtouch-coreIdea-con">
              日新”语出《大学》首章：“苟日新、日日新、又日新”，蕴涵不断自我更新之意。<br/>
              “致远”采自诸葛亮《诫子书》：“非淡泊无以明志、非宁静无以致远”，久远的农耕社会政治家确信成功之道源于“宁静”的静态法则。<br/>
              如今商业社会的技术性公司所遵循的则是“推陈出新，不断自新"”的动态法则
            </div>
            <div class="aboutNewtouch-coreIdea-img">
              <img src="../../assets/about/coreIdea1.png"/>
              <img src="../../assets/about/coreIdea2.png"/>
              <img src="../../assets/about/coreIdea3.png"/>
            </div>
          </div>
        </div>
        <div class="tab-pane-con-tab hide">
          <div class="contentMin">
            <ul class="aboutNewtouch-timeline">
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2014年</h3>
                  <p>
                    上海市服务外包重点企业
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2013年</h3>
                  <p>
                    国家规划布局内重点软件企业<br/>
                    上海市第一批移动互联网成长型企业<br/>
                    上海明星软件企业
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2012年</h3>
                  <p>
                    高新技术企业<br/>
                    软件和信息技术服务出口重点企业<br/>
                    上海明星软件企业
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2011年</h3>
                  <p>
                    上海市服务外包重点企业<br/>
                    上海明星软件企业
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2010年</h3>
                  <p>
                    上海名牌<br/>
                    企业信用等级评价 AAA<br/>
                    连续八年评为“上海明星软件企业”荣誉称号<br/>
                    上海市软件和信息技术服务出口重点企业
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2009年</h3>
                  <p>
                    上海名牌<br/>
                    技术先进型服务企业
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2008年</h3>
                  <p>
                    中国软件和信息服务外包贡献奖<br/>
                    上海名牌服务
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2007年</h3>
                  <p>
                    新致Newtouch评为上海名牌服务<br/>
                    上海软件度量基准体系创建核心会员
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2006年</h3>
                  <p>
                    上海市外经贸贡献奖 光荣榜<br/>
                    软件过程改进优秀企业
                  </p>
                </div>
              </li>
              <li class="aboutNewtouch-timeline-item last">
                <span class="glyphicon glyphicon-record"></span>
                <div class="aboutNewtouch-timeline-content aboutNewtouch-text">
                  <h3 class="aboutNewtouch-timeline-title">2005年</h3>
                  <p>
                    上海市外经贸工作 专项奖 — 科技兴贸<br/>
                    浦东新区信息化示范企业荣誉称号
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'newtouch',
    methods: {
      showTab: function (i) {
        $(`.aboutNewtouch .tab-pane ul>li:nth-child(${i})`).addClass('active').siblings().removeClass('active')
        $(`.aboutNewtouch .tab-pane-con-tab:nth-child(${i})`).removeClass('hide').siblings().addClass('hide')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .aboutNewtouch a {
    color: #fff;
  }

  .aboutNewtouch .tab-pane {
    background: #4178BE;
  }

  .aboutNewtouch .tab-pane li {
    display: inline-block;
    margin: 0 5px;
  }

  .aboutNewtouch .tab-pane li.active a {
    color: #023041;
  }

  .aboutNewtouch .tab-pane-con-tab {
    background: #e7e7e7;
  }

  .aboutNewtouch .contentMin {
    padding: 40px 0;
  }

  /*公司简历 start*/
  .companyInfo {
    background-color: #E7E7E7;
    padding: 30px 0px;
  }

  .companyInfo .Info_content {
    width: 1030px;
    letter-spacing: 2px;
    padding: 20px;
    margin: 0 auto;
  }

  .companyInfo .article.Info_content {
    text-align: left;
    text-indent: 27px;
  }

  .companyInfo .Info_content .share-con {
    text-align: center;
  }

  /*公司简历 end*/

  /*分支机构start*/
  .aboutNewtouch .aboutNewtouch-addressDiv {
    text-align: left;
    margin-bottom: 20px;
    line-height: 34px;
  }

  .aboutNewtouch .aboutNewtouch-addressDiv .aboutNewtouch-addressDiv-tit {
    font-size: 16px;
  }

  .aboutNewtouch .aboutNewtouch-addressDiv .aboutNewtouch-addressDiv-link {
    color: #4178be;
    cursor: pointer;
  }

  /*分支机构end*/
  /*企业文化start*/
  .aboutNewtouch .aboutNewtouch-coreIdea h2 {
    margin-bottom: 20px;
  }

  .aboutNewtouch .aboutNewtouch-coreIdea .aboutNewtouch-coreIdea-con {
    margin-bottom: 40px;
    line-height: 34px;
  }

  .aboutNewtouch .aboutNewtouch-coreIdea .aboutNewtouch-coreIdea-img img:nth-child(2) {
    margin: 0 10px;
  }

  /*企业文化end*/
  /*发展历程end*/
  .aboutNewtouch .aboutNewtouch-timeline {
    width: 500px;
    margin: 0px auto !important;
    text-align: left;
    color: #31397a;
    padding-left: 100px;
  }

  .aboutNewtouch .aboutNewtouch-timeline-item {
    position: relative;
    padding-bottom: 20px;
    width: 100%;
  }

  .aboutNewtouch .aboutNewtouch-timeline-item:before {
    content: '';
    position: absolute;
    left: 4px;
    top: 0;
    z-index: 0;
    width: 2px;
    height: 100%;
    background-color: #040d5f;
  }

  .aboutNewtouch .aboutNewtouch-timeline-item.last:before {
    height: 0;
  }

  .aboutNewtouch .aboutNewtouch-timeline .glyphicon {
    position: absolute;
    left: -5px;
    top: 0;
    z-index: 10;
    width: 20px;
    height: 20px;
    line-height: 20px;
    background-color: #e7e7e7;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
  }

  .aboutNewtouch .aboutNewtouch-timeline .aboutNewtouch-timeline-content {
    padding-left: 50px;
  }

  .aboutNewtouch .aboutNewtouch-timeline .aboutNewtouch-timeline-content p {
    line-height: 34px;
  }

  /*发展历程end*/
</style>
