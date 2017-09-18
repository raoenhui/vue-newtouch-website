
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
              <div class="pull-left category_more">
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
              <div class="pull-left category_more">
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
              <div class="pull-left category_more">
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
              <div class="pull-left category_more">
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
              <div class="pull-left category_more">
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
    name: "medicalCloud"
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
    background-color: #4178BE;
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

