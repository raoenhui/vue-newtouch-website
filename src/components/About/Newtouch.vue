<template>
  <div class="aboutNewtouch">
    <div class="tab-pane">
      <ul style="line-height: 42px;">
        <li class="active" @click="showTab(1)"><a href="javascript:void(0);">企业简历</a></li>  <!--/about/conpanyProfile-->
        <li><a href="javascript:void(0);" @click="showTab(2)">分支机构</a></li>
        <li><a href="javascript:void(0);" @click="showTab(3)">企业文化</a></li>
        <li><a href="javascript:void(0);" @click="showTab(4)">发展历程</a></li>
        <li><a href="javascript:void(0);" @click="showTab(5)">企业资质</a></li>
        <li><a href="javascript:void(0);" @click="showTab(6)">企业荣耀</a></li>
      </ul>
      <div class="tab-pane-con">
        <div class="tab-pane-con-tab clearfix companyInfo">
          <article class="Info_content article row">
            <div class="col-md-3" style="padding: 0px;text-align: center; margin-top: 1%;"><img src="../../assets/about/newtouch_logo.png" alt="..."></div>
            <div class="col-md-9">上海新致软件有限公司成立于1994年，是一家高科技企业。2002年起至今每年被认定为“国家规划布局内重点软件企业”；2004年首批获得“A级中国软件欧美出口工程试点企业认定”，公司整体通过CMMI5评估。
            新致软件是一家信息技术服务供应商、多个行业提供咨询、设计、实施、测试、支持、培训等专业的解决方案。
            </div>
          </article>

          <article class="Info_content row">
            <ul>
              <li >
                <div class="col-md-3"><i class="fa fa-linode" aria-hidden="true"></i></div>
                <div class="col-md-9">
                    新致以软件技术为核心，<br/>
                    通过软件与服务的结合，技术与业务的融合， <br/>
                    提供行业解决方案和信息服务外包以及相关软件产品、平台及服务。
                </div>
              </li>
              <li>
                <!--<i class="fa fa-handshake-o" aria-hidden="true"></i> 握手  <i class="fa fa-users" aria-hidden="true"></i> 2 <i class="fa fa-cubes" aria-hidden="true"></i> 3 <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>4-->
                <div class="col-md-3"><i class="fa fa-users" aria-hidden="true"></i></div>
                <div class="col-md-9">
                  面向行业客户，我们满足客户需求，提供安全、可靠、高质量、易扩展的解决方案，包括为行业客户量<br/>
                  设定做的应用和通过客户服务网络提供的专业服务，帮助客户实现信息化管理的最佳实践，并持续提高<br/>
                  技术先进性和管理先进性。
                </div>
              </li>
              <li >
                <div class="col-md-3"><i class="fa fa-cubes" aria-hidden="true"></i></div>
                <div class="col-md-9">
                  行业解决方案所涵盖的领域包括：金融、电信、政府公众、商业连锁、交通运输、医疗卫生、制造业和<br/>
                  企业信息化等行业，凭借多年与各行业主流企业进行合作所积累的经验，新致公司已具备了信息技术与<br/>
                  现代管理相结合、项目规划咨询和工程实施相结合、软件构件化和制定设计相结合的核心竞争能力。<br/>
                </div>
              </li>

              <li >
                <div class="col-md-3"><i class="fa fa-handshake-o" aria-hidden="true" style="margin-top: 45px;"></i> </div>
                <div class="col-md-9">
                  在信息服务外包领域中，凭借多年以来国际化客户提供开发、维护、测试服务的经验和知识，新致建立<br/>
                  并完善了在岸、近岸、离岸的多层次混合服务模式，在全国范围内向客户提供覆盖应用开发与维护项目<br/>
                  全生命周期的服务。我们服务的行业有：银行、证券、保险、电信、公共事业、制造、医疗、交通、物<br/>
                  流、食品。服务模式包括：项目开发、人员派遣、离岸开发中心、业务流程外包、IT业务咨询、IT教育<br/>
                  培训、系统集成、技术支持等。十多年国外众多行业的项目经验，综合的信息技术能力、高效的离岸交<br/>
                  付能力、以及软件制造过程的精细化管理能力，是选择新致作为合作伙伴的重要理由。
                </div>
              </li>

              <li >
                <div class="col-md-3"><i class="glyphicon glyphicon-heart" aria-hidden="true"></i></div>
                <div class="col-md-9">
                  新致以”日新以致远“作为公司的核心理念和品牌承诺。作为一家以软件技术为核心的公司，新致通过<br/>
                  合作创新、有效管理、人才发展等战略的实施，持续提升公司的核心竞争力，不断为客户创造价值，为<br/>
                  员工创造机会，从而实现对社会的积极贡献。<br/>
                </div>
              </li>
            </ul>
          </article>
        </div>
        <div class="tab-pane-con-tab hide">
          <div class="contentMin">
            <div class="row">
            <div class="col-md-6"><newtouchItem :addressObj="addressObj" v-for="(addressObj,index) in datas" :key="index" /></div>
            <div class="col-md-6">
              <img src="../../assets/about/newtouch-map.png"/>
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
          <div class="aboutNewtouch-coreIdea values row">
            <div style="width:1100px; margin: 0px auto">
              <h2>价值观</h2>
              <div class="values_item col-md-3">
                <h3 class="values_tit">合作</h3>
                <p><span class="icon-cooperation"></span>
                </p>
                <div class="values_detail">新致的事业本身就是建立在与客户、员工、投资者、供应商，及政府、行业协会和金融机构等合作的基础上。我们一直尽心尽力地为合作伙伴的长远利益而努力，从而增进相互间的信任，维护好共赢的合作模式。所有曾经为我们事业的成功而做出贡献的合作伙伴，均会因新致的成功获得价值。</div>
              </div>
              <div class="values_item col-md-3">
                <h3 class="values_tit">诚信</h3>
                <p><span class="icon-respect"></span>
                <div class="values_detail">诚信是我们的事业得以发展和成功的根本。新致一向言必信、行必果，信守承诺，坚持做到兑现大于等于承诺。新致追求的成功并非是单纯经济意义上的成功，更有我们赢得的广泛的尊敬、信任和良好的商誉。</div>
              </div>
              <div class="values_item col-md-3">
                <h3 class="values_tit">尊重</h3>
                <p><span class="icon-response"></span>
                <div class="values_detail">尊重并肯定每位员工的独特性。每一位个人都应获取尊重、获得公平的对待以及拥有发挥能力、达致成功的机会。新致不断为他们提升竞争力和事业发展提供机会，为他们的贡献给予信守承诺的回报。</div>
              </div>
              <div class="values_item col-md-3">
                <h3 class="values_tit">负责</h3>
                <p><span class="icon-sincerity"></span>
                <div class="values_detail">每个人都应尽力尽责实现自己的目标，也应全力以赴帮助公司、客户和其他合作伙伴实现共同的目标。新致关注客户需求，尊重客户投资，不断为客户创造价值；持续改进公司经营结果，为投资者带来长期良好的回报。新致有社会责任感，遵守法律，保护环境，实现企业成长与社会发展的和谐。</div>
              </div>
            </div>
          </div>
          <div class="aboutNewtouch-coreIdea contentMin">
            <h2>行为原则</h2>
            <div class="aboutNewtouch-coreIdea-con">
              注重成果、把握整体、专注要点、利用优点、相互信任、正面思维。
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
                <div class="col-md-4 attestation">
                  <div class="attestation-part">
                    <div class="attestation_title">
                      <div class="attestation_boder pull-left"></div>
                      <h4 class="pull-left">政府认定</h4>
                      <div class="attestation_boder pull-left"></div>
                    </div>

                    <ul>
                      <li><a href="http://www.newtouch.cn/china/about/08_02.htm">国家规划布局内重点软件企业</a></li>
                      <li><a href="javascript:void(0);">中国软件欧美出口工程试点企业</a></li>
                      <li><a href="javascript:void(0);" @click="showImgFun(1)">中国软件出口工程企业</a></li>
                      <li><a href="javascript:void(0);" @click="showImgFun(2)">上海市高新技术企业</a></li>
                      <li><a href="javascript:void(0);" @click="showImgFun(3)">上海市技术先进型服务企业</a></li>
                      <li><a href="javascript:void(0);" @click="showImgFun(4)">上海市认定企业技术中心</a></li>
                      <li><a href="javascript:void(0);" @click="showImgFun(5)">上海市软件企业认定证书</a></li>
                      <li><a href="javascript:void(0);" @click="showImgFun(6)">上海市服务外包重点企业</a></li>
                      <li><a href="javascript:void(0);" @click="showImgFun(7)">上海市明星软件企业</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 attestation">
                  <div class="attestation-part">
                    <div class="attestation_title">
                      <div class="attestation_boder pull-left"></div>
                      <h4 class="pull-left">ISO质量认证体系</h4>
                      <div class="attestation_boder pull-left"></div>
                    </div>

                    <ul>
                      <li><a href="javascript:void(0);" @click="showImgFun(8)">2000年，新致公司通过ISO9001:&nbsp 2000认证</a></li>
                      <li><a href="javascript:void(0);" @click="showImgFun(10)">2010年，新致公司通过ISO9001:&nbsp 2008认证</a></li>
                      <li><a href="javascript:void(0);" @click="showImgFun(12)">2014年，新致公司通过ISO9001:&nbsp 2008认证</a></li>
                    </ul>
                  </div>

                  <div class="attestation-part">
                    <div class="attestation_title">
                      <div class="attestation_boder pull-left"></div>
                      <h4 class="pull-left">信息安全管理认证</h4>
                      <div class="attestation_boder pull-left"></div>
                    </div>

                    <ul>
                      <li><a href="javascript:void(0);" v-on:click="showImgFun(15)">2008年，新致公司通过ISO/ IEC 27001:2005认证</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 attestation attestation3" style="text-align: right">
                  <div class="attestation-part">
                    <div class="attestation_title">
                      <div class="attestation_boder pull-left"></div>
                      <h4 class="pull-left">CMM认证</h4>
                      <div class="attestation_boder pull-left"></div>
                    </div>
                    <ul>
                      <li><a href="javascript:void(0);">2003年，新致公司整体通过CMM&nbsp 3级认证</a></li>
                      <li><a href="javascript:void(0);" v-on:click="showImgFun(13)">2004年，新致公司整体通过CMM&nbsp 4级认证</a></li>
                      <li><a href="javascript:void(0);" v-on:click="showImgFun(14)">2008年，新致公司整体通过CMMI&nbsp 5级认证</a></li>
                    </ul>
                  </div>
                  <div class="attestation-part">
                    <div class="attestation_title">
                      <div class="attestation_boder pull-left"></div>
                      <h4 class="pull-left">其他资质</h4>
                      <div class="attestation_boder pull-left"></div>
                    </div>
                    <ul>
                      <li><a href="javascript:void(0);" v-on:click="showImgFun(16)">获取信息系统集成及服务资质贰级</a></li>
                    </ul>
                  </div>
                </div>

                <div id="certificate_1" class="certificate_style" v-show="isShow">
                  <img :src="certificateImg">
                  <h4 v-on:click="isShow=false"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>关闭</h4>
                </div>
                <div id="certificate_8" class="certificate_style certificate_spi" v-show="isShow1">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td align="left" valign="middle" style=" border-right:1px solid #fff;"><p style="padding: 0px;"><img :src="certificateImg"></p></td>
                        <td align="right" valign="middle"><img :src="certificateImg1"></td>
                      </tr>
                    </tbody>
                  </table>
                  <h4 v-on:click="isShow1=false"><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>关闭</h4>
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
  //  import {MP} from './map.js'
  import NewtouchItem from 'src/components/Common/About/NewtouchItem.vue'
  export default {
    name: 'newtouch',
    data () {
      return {
        isShow:false,
        isShow1:false,
        certificateImg:'',
        certificateImg1:'',
        datas: [
          {
          addressDivTitTotle:'公司总部',
          addressDivTit:'',
          addressDivName:'上海新致软件股份有限公司',
          addressDivLink: '上海市浦东新区峨山路91弄98号陆家嘴软件园1号楼4F-6F',
          addressDivTel: '021-51105660',
          addressDivFax:'021-51105667',
          addressDivPostcode:'200127',
          addressDivMail:'newtouch@newtouch.cn',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'分支机构',
          addressDivName:'上海新逸科技有限公司',
          addressDivLink: '上海市徐汇区田林路200号C幢206室',
          addressDivTel: '021-51105660 ',
          addressDivFax:'021-51105667',
          addressDivPostcode:'200127',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'上海新致仕海软件有限公司',
          addressDivLink: '中国（上海）自由贸易试验区乳山路227号2楼B区231室',
          addressDivTel: '021-51105660',
          addressDivFax:'021-51105667',
          addressDivPostcode:'200127',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'上海新致信息技术有限公司',
          addressDivLink: '中国（上海）自由贸易试验区华申路198号一幢楼六层E-03室',
          addressDivTel: '021-51105660',
          addressDivFax:'021-51105667',
          addressDivPostcode:'200127',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'北京新致君阳信息技术有限公司',
          addressDivLink: '北京市丰台区丰台北路18号恒泰中心A座8楼',
          addressDivTel: '010-83733921-8008',
          addressDivFax:'',
          addressDivPostcode:'100035',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'大连新致软件有限公司',
          addressDivLink: '大连软件园东路21号12号楼301C室',
          addressDivTel: '0411-84768350；0411-84768351；0411-84768331',
          addressDivFax:'0411-84768350-815',
          addressDivPostcode:'116023',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'大连亿蓝德信息科技有限公司',
          addressDivLink: '大连软件园东路21号12号楼301C室',
          addressDivTel: '0411-84768350；0411-84768351；0411-84768331',
          addressDivFax:'0411-84768350-815',
          addressDivPostcode:'116023',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'西安新致信息技术有限公司',
          addressDivLink: '西安市高新区科技二路68号西安软件园秦风阁综合楼601室',
          addressDivTel: '029-87669728 029-81779891',
          addressDivFax:'029-87669727',
          addressDivPostcode:'710075',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'深圳新致软件有限公司',
          addressDivLink: '深圳市福田区福田街道金田路4018号安联大厦26层2629室',
          addressDivTel: '0755-33955890',
          addressDivFax:'0755-33955890',
          addressDivPostcode:'518026',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'新致软件（昆山）有限公司',
          addressDivLink: '花桥镇兆丰路8号',
          addressDivTel: '021-51105660',
          addressDivFax:'021-51105667',
          addressDivPostcode:'200127',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'成都新致软件有限公司',
          addressDivLink: '成都市高新区科园二路10号2栋2单元10层2A号',
          addressDivTel: '028-83378392',
          addressDivFax:'',
          addressDivPostcode:'610093',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'成都新致远日软件有限公司',
          addressDivLink: '成都市高新区科园二路10号2栋2单元10层2A号',
          addressDivTel: '028-83378392',
          addressDivFax:'',
          addressDivPostcode:'610093',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'日本东京newtouch株式会社',
          addressDivLink: '东京都品川区南品川二丁目2番13号',
          addressDivTel: '（03）6433-2998 ',
          addressDivFax:'',
          addressDivPostcode:'',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'晟欧技术株式会社',
          addressDivLink: '东京都品川区南品川二丁目2番13号南品川JN大厦2F ',
          addressDivTel: '（03）6433-1695',
          addressDivFax:'',
          addressDivPostcode:'140-0004',
          addressDivMail:'',
        }, {
          addressDivTitTotle:'',
          addressDivTit:'',
          addressDivName:'株式会社亿蓝德',
          addressDivLink: '东京都港区高轮二丁目14番17号Grace高轮大厦7F ',
          addressDivTel: '（03）5791-5198  ',
          addressDivFax:'',
          addressDivPostcode:'',
          addressDivMail:'',
        }
        ]
      }
    },
    methods: {
      showTab: function (i) {
        $(`.aboutNewtouch .tab-pane ul>li:nth-child(${i})`).addClass('active').siblings().removeClass('active')
        $(`.aboutNewtouch .tab-pane-con-tab:nth-child(${i})`).removeClass('hide').siblings().addClass('hide')
      },
      showMap:function() {
        // 百度地图API功能
//      MP().then(function(BMap){
//          var map = new BMap.Map("allmap");
//          var point = new BMap.Point(116.331398,39.897445);
//          map.centerAndZoom(point,12);
//          // 创建地址解析器实例
//          var myGeo = new BMap.Geocoder();
//          // 将地址解析结果显示在地图上,并调整地图视野
//          myGeo.getPoint("上海市浦东新区峨山路91弄98号陆家嘴软件园1号楼", function(point){
//            if (point) {
//              map.centerAndZoom(point, 16);
//              map.addOverlay(new BMap.Marker(point));
//            }else{
//              alert("您选择地址没有解析到结果!");
//            }
//          }, "上海市");
//        }
//      );
      },
      showImgFun: function(path){
          console.log(path);
          if(path==8){
            this.isShow1 = true;
            this.certificateImg = require(`../../assets/about/certificate_8.jpg`);
            this.certificateImg1 = require(`../../assets/about/certificate_9.jpg`);
          }else if(path==10){
            this.isShow1 = true;
            this.certificateImg = require(`../../assets/about/certificate_10.jpg`);
            this.certificateImg1 = require(`../../assets/about/certificate_11.jpg`);
          }else{
            this.isShow = true;
            this.certificateImg = require(`../../assets/about/certificate_${path}.jpg`);
          }
      }
    },
    components: {NewtouchItem}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "Newtouch";
</style>
