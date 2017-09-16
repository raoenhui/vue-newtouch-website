<template>
  <div class="aboutJoin">
    <div class="row contentMin">
      <div class="aboutJoin_part">
        <div class="aboutJoin_titleIcon">
          <img src="../../assets/about/join_icon1.png" />
          <div class="aboutJoin_title">
              <p></p>
              <h4>社会招聘</h4>
          </div>

            <div class="textContent">新致软件随着国内外业务的快速发展，常年诚聘大量行业相关人才。新致软件愿意成为每一位员工职业发展生涯中的一个闪亮点。公司员工按一定流程可以申请在上海、北京、西安、大连、深圳、成都、日本等各（子）公司之间流动工作。
            </div>

            <div class="textContent">
                <p style="font-weight: 600;">公司常年招聘各类相关人才，详情请登录（下列网站）查看公司当前发布的所有招聘职位：</p>
              <p>前程无忧&nbsp;&nbsp; <a href="http://search.51job.com/list/co,c,156132,0000,10,1.html">http://search.51job.com/list/co,c,156132,0000,10,1.html</a></p>
                <p style="margin-bottom: 20px;">智联招聘 &nbsp;&nbsp;<a href="http://company.zhaopin.com/P6/CC0002/7945/CC000279456.htm">http://company.zhaopin.com/P6/CC0002/7945/CC000279456.htm</a> </p>
                <p> 简历投递：&nbsp;&nbsp; <a href="hr@newtouch.cn">hr@newtouch.cn</a> <br/></p>
            </div>

        </div>
      </div>

      <div class="aboutJoin_part">
        <div class="aboutJoin_titleIcon">
          <img src="../../assets/about/join_icon2.png" />
          <div class="aboutJoin_title">
            <p></p>
            <h4>校园招聘</h4>
          </div>

          <div class="textContent">
            新致软件坚持以人为本，为加入的大学生提供专业化、多元化的人才培养模式；通过专业的基础课程、真实的项目实践，使得加入的每一位同学都能获得快速畅通的职业发展空间。新致软件的培养模式也得到了广泛的社会认同，与上海大学、东华大学、上海理工大学、华东理工大学等众多知名大学合作建立了实习就业基地我们始终坚持"以人为本"的理念，非常重视人才的吸引、培养、发展和投资。应届大学毕业生是新致人力资源的重要来源；每年大批应届毕业生的加盟，为我们的发展注入了新鲜的血液，提供了不竭的动力。鲲鹏展翅，志在千里。我们期待您的加入
          </div>

          <div class="textContent">
            <p style="font-weight: 600;">了解新致历届校园招聘职位信息，请点击：</p>
            <p>校园招聘网申通道&nbsp;&nbsp; <a href="http://newtouch.hirede.com/ ">http://newtouch.hirede.com/ </a></p>
            <p>前程无忧&nbsp;&nbsp; <a href="http://search.51job.com/list/co,c,156132,0000,10,1.html">http://search.51job.com/list/co,c,156132,0000,10,1.html</a></p>
            <p style="margin-bottom: 20px;">智联招聘 &nbsp;&nbsp;<a href="http://company.zhaopin.com/P6/CC0002/7945/CC000279456.htm">http://company.zhaopin.com/P6/CC0002/7945/CC000279456.htm</a> </p>
          </div>

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
    .aboutJoin{
      margin: 0 auto;
      background-color: #E7E7E7;
      padding: 60px 0px;

    }

    .contentMin {
      width:1030px;margin:0px auto;
    }

    .aboutJoin_part .aboutJoin_titleIcon{
      position: relative;
    }

    .aboutJoin_part .aboutJoin_titleIcon img{
      margin-bottom: 20px;
    }

    .aboutJoin_part .aboutJoin_title {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: block;
    }

    .aboutJoin_part .aboutJoin_title p{
      height: 1px;
      background-color: rgb(20, 51, 93);
      width: 135px;
      display: inline-block;
      margin-right: -106px;
    }

    .aboutJoin_part .aboutJoin_title h4{
      top: -4px;
      background: #E7E7E7;
      position: relative;
      width: 101px;
      display: inline-block;
      left: -17px;
      margin-bottom: 30px;
      font-weight: 600;
    }

    .aboutJoin_titleIcon .textContent{
      text-align: left!important;
      margin-bottom: 20px;
    }

    .aboutJoin_titleIcon .textContent p{
      margin: 0px;
    }
</style>
