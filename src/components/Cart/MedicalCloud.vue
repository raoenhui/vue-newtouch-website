<template>
  <div class="medicalCloud">
    <div class="row medicalCloud_Category">
      <div class="Category_list">
        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">

            <div class="Category_msg">
              <img src="../../assets/image1.png" style="width:15%;"/>
              <h3>影像云</h3>
              <p>从诊断前，诊断中，诊断后三个角度出发，以患者、医生、医院为中心，提供医疗影像诊断系统整体解决方案，帮助医疗机构加速进入"云"时代。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/image')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">

            <div class="Category_msg">
              <img src="../../assets/image2.png" style="width:15%;"/>
              <h3>云HIS</h3>
              <p>集门诊管理、住院管理、病人管理及基础数据管理四大功能模块，药房药库：适合医院、药房、门诊、药库、中小医院、私营医院、乡镇医院、药店等各类医药卫生行业。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/his')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">

            <div class="Category_msg">
              <img src="../../assets/image3.png" style="width:15%;"/>
              <h3>云CPOE</h3>
              <p>通过建立闭环医嘱系统为临床精细化管理提供支持，医生可以使用系统时非常容易的下医嘱然后提交至护理站，由护士核对并执行，能让医生节省大量的时间用于住院患者的诊疗上，大大的提高了工作效率，也提高了患者的满意度。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/Cpoe')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">

            <div class="Category_msg">
              <img src="../../assets/image4.png" style="width:15%;"/>
              <h3>云CIS</h3>
              <p>主要帮助门诊医生规范、高效的完成日常处方、病例的书写和维护。查阅医院药品信息。完善个人、医院、科室的病历、处方、申请单、诊断模板，操作快捷、方便。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/Cis')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">
            <div class="Category_msg">
              <img src="../../assets/image5.png" style="width:15%;"/>
              <h3>云REM</h3>
              <p>是集病历书写、医疗质量控制、信息查询及统计分析、综合信息管理等于一体的综合型电子病历平台，应用能够帮助医院简化传统工作模式中的某些耗时且容易出错的工作环节，加速检查检验申请及结果信息在医院科室及临床医生的传递。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/Erm')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">
            <div class="Category_msg">
              <img src="../../assets/cart/privateCloud.png" style="width:15%;"/>
              <h3>私有云</h3>
              <p>以OpenStack为云管理平台，以Hypervisor KVM为虚拟化引擎，以CEPH分布式存储为存储集群为医疗行业提供私有云解决方案，提供各类计算服务、资源和管理系统，并帮助医疗卫生机构和医院实现数据高安全性，充分利用现有硬件资源和软件资源，保证服务质量。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/PrivateCloud')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">
            <div class="Category_msg">
              <img src="../../assets/cart/mixtureCloud.png"  style="width:15%;"/>
              <h3>混合云</h3>
              <p>新致混合云提供了云平台和医院私有设备托管的混合部署模式，既解决医院数据安全性痛点又实现应用的按需分配和弹性扩展，大大缩短了医院IT部署时间，降低了运维成本，改善了医院应用的可靠性和可用性。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/mixtureCloud')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">
            <div class="Category_msg">
              <img src="../../assets/cart/disasterCloud.png" style="width:15%;"/>
              <h3>云备灾</h3>
              <p>利用信息化的云技术，简化操作流程和物理机的损耗，数据保护工作灵敏度增高，达到实时同步备份的效果。告别原定时增量的模式，形成实时备份、实时数据保护、实时接管的信息网络化科学管理模式。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/disasterCloud')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">
            <div class="Category_msg">
              <img src="../../assets/cart/bigData.png" style="width:15%;"/>
              <h3>大数据挖掘和分析</h3>
              <p>利用信息化的云技术，简化操作流程和物理机的损耗，数据保护工作灵敏度增高，达到实时同步备份的效果。告别原定时增量的模式，形成实时备份、实时数据保护、实时接管的信息网络化科学管理模式。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/bigData')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">
            <div class="Category_msg">
              <img src="../../assets/image5.png" style="width:15%;"/>
              <h3>上云咨询服务</h3>
              <p>医疗行业需要迅速扩张的弹性平台，提供协同的工作平台，科室间协作的云解决方案，医院信息化需要最经济、最灵活的平台支撑创新和变革。新致医疗云根据云产品特点及医疗场景设计软件及系统云架构、并提升医疗IT治理水平，以满足弹性、高可用、高性能等需求。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/consult')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">
            <div class="Category_msg">
              <img src="../../assets/image5.png" style="width:15%;"/>
              <h3>云运维服务</h3>
              <p>依托监控、告警、日志、报告工具，全面监控发现网络故障，建立主动运维服务缓解设备宕机引起的医患矛盾。增加分支机构时，只需在网络上安装网管机，就可监管系统，过程简单高效。云计算降低成本，将本地工作转移到云端，工作量减少，成本降低。可将人力投入医生和患者端。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/ops')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">
            <div class="Category_msg">
              <img src="../../assets/cart/pay.png" style="width:15%;"/>
              <h3>云支付</h3>
              <p>建立安全支付联盟，提供用户身份识别，加强信息安全与隐私保护，确保交易安全，以及交易行为受到监控及识别。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/pay')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-6" style="padding: 5px 5px 20px;">
          <div class="medicalCloudlist">
            <div class="Category_msg">
              <img src="../../assets/cart/pharmacy.png" style="width:15%;"/>
              <h3>云药房药库管理系统</h3>
              <p>云药房药库管理系统是新致医疗研发的基于云计算的新一代药房药库系统,采用B/S架构，适合医院、药房、门诊、药库、中小医院、私营医院、乡镇医院、药店等各类医药卫生行业。系统可划分一个药库和多个药房，药房可以自定义N个，可以定义任何形式、任何性质的药房。包括进货入库，盘点入库，库存状况、库存不足、库存积压和有效期报警，药品出库，报损出库。</p>
            </div>

            <div class="category_more_cat">
              <div class="pull-left category_more" @click="learnMoreFun('/cart/pharmacy')">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-info-sign" ></span></div>
                  了解更多
                </a>
              </div>
              <div class="pull-left category_cat">
                <a>
                  <div style="min-height: 26px;"><span class="glyphicon glyphicon-shopping-cart"></span></div>
                  购物
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "medicalCloud",
    methods: {
      learnMoreFun: function (path) {
        this.$router.push({path: path})
        document.body.scrollTop = 0+'px';
      }
    }
  }
</script>

<style scoped>
  .medicalCloud .medicalCloud_Category{
    margin-bottom: 40px;
    text-align: center;
    margin-left: 10px;
  }

  .medicalCloud .medicalCloud_Category .medicalCloudlist{
    border:solid 1px #eee;
    padding: 0px;
    margin:0px 0px 0px 0px;
    background-color: #fff;
    box-shadow: 0 0 20px #eee;
  }

  .medicalCloud .medicalCloud_Category .medicalCloudlist .Category_msg{
    padding-top: 25px;
  }

  .medicalCloud .medicalCloud_Category .medicalCloudlist .Category_msg p{
    text-align: left!important;
    padding:0px 30px;
    min-height: 100px;
  }

  .medicalCloud .medicalCloud_Category .medicalCloudlist .Category_msg h3  {
    padding: 20px 0px;
  }

  .medicalCloud .medicalCloud_Category .category_more_cat .category_cat,.category_more_cat .category_more{
    width:50%;
    padding: 10px 0px;
    min-height: 66px;
  }

  .medicalCloud .medicalCloud_Category .category_more_cat .category_cat{
    background-color: #00BEFF;
  }
  .medicalCloud .medicalCloud_Category .category_more_cat .category_cat span{
    font-size: 1.3em;
  }
  .medicalCloud .medicalCloud_Category .category_more_cat .category_cat a{
    color: #fff;
  }
  .medicalCloud .medicalCloud_Category .category_more_cat .category_more{
    background-color:#DCDCDC;
  }
  .medicalCloud .medicalCloud_Category .category_more_cat .category_more span{
    font-size: 1.3em;
  }
  .medicalCloud .medicalCloud_Category .category_more_cat .category_more a{
    color: #656565;
  }

</style>

