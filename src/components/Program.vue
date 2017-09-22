<template>
  <div class="program">
    <div class="programBg">
      <div class="content clearfix">
        <div class="programBg-lf">
          <h2>{{titleName}}</h2>
          <div class="programbg-detail" v-for="detail in programDetails">{{detail}}</div>
        </div>
        <img :src="srcBg" v-show="srcBg"/>
      </div>
    </div>
    <div class="content clearfix">
    <div class="program-nav">
            <div class="program-nav-line program-nav-headtit">行业解决方案</div>
            <router-link to="/program/financial">
              <div class="program-nav-line" @click="showBgFun('financial')">金融</div>
            </router-link>
            <router-link to="/program/telecom">
              <div class="program-nav-line" @click="showBgFun('telecom')">电信</div>
            </router-link>
            <router-link to="/program/government">
              <div class="program-nav-line" @click="showBgFun('government')">政府公众</div>
            </router-link>
            <router-link to="/program/business">
              <div class="program-nav-line" @click="showBgFun('business')">商业连锁</div>
            </router-link>
            <router-link to="/program/transportation">
              <div class="program-nav-line" @click="showBgFun('transportation')">交通运输</div>
            </router-link>
            <router-link to="/program/medical">
              <div class="program-nav-line" @click="showBgFun('medical')">医疗卫生</div>
            </router-link>
            <router-link to="/program/made">
              <div class="program-nav-line" @click="showBgFun('made')">制造业</div>
            </router-link>
            <router-link to="/program/messages">
              <div class="program-nav-line" @click="showBgFun('messages')">企业信息化</div>
            </router-link>
          </div>
      <div class="program-con">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'program',
    data () {
      return {
        path: '',
        //背景图片
        srcBg: '',
        titleName: '',
        programDetails:[],
        dataObj: {
          'financial': {
            title: '金融',
            detail:['技术与业务战略性融合，以IT推动企业的每个行动']
          }, 'telecom': {
            title: '电信',
            detail:['网络信息技术在改进人们工作和学习的体验']
          }, 'government': {
            title: '政府公众',
            detail:['提高政府公众客户的管理效率和决策效能','实现互联互通，资源共享，安全保障']
          }, 'business': {
            title: '商业连锁',
            detail:['为其卓越运营和规模扩张奠定了基础','通过可持续性的业务改进，实现与合作伙伴的共同成长']
          }, 'transportation': {
            title: '交通运输',
            detail:['通过快速、准确、高服务质量及降低成本赢得竞争优势']
          }, 'medical': {
            title: '医疗卫生',
            detail:['协助合作伙伴整合资源','实现统一高效、互联互通、资源共享的医疗卫生信息化平台']
          }, 'made': {
            title: '制造业',
            detail:['通过软件与服务的结合，技术与业务的融合','协助制造业客户完成“制造”到“创造的跨越”']
          }, 'messages': {
            title: '企业信息化',
            detail:['为提高“客户”和“客户的客户”的业绩','共同商讨最佳解决方案']
          },
        }
      }
    },
    methods: {
      showBgFun: function (path) {
        this.srcBg = require(`../assets/${path}_bg.png`);
        this.titleName = this.dataObj[path].title;
        this.programDetails = this.dataObj[path].detail;
        this.path=path;
      }
    },
    mounted: function () {
      var path = this.$route.path.split('/')[2];
      if (path) {
        this.showBgFun(path)
      }

    }
  }
</script>


<style scoped>
  .program {
    position: relative;
  }

  .program .program-nav {
    width: 250px;
    top: 0;
    background: #fff;
    float: left;
    margin-top: 20px;
  }

  .program .program-nav a.router-link-active > .program-nav-line:not(.program-nav-headtit) {
    border-left: 5px solid #00beff;
  }

  .program .program-nav .program-nav-line {
    line-height: 40px;
    padding-left: 20px;
    border-bottom: #ccc 1px solid;
    border-left: #ccc 1px solid;
    border-right: #ccc 1px solid;
    color: #022330;
  }

  .program .program-nav .program-nav-line.program-nav-headtit {
    background: #343434;
    border: none;
    color: #fff;
  }

  .program .program-con {
      min-height: 430px;
      float: left;
      width: 930px;
      margin-left: 20px;
      margin-top: 20px;
  }
  .program .programBg{
    background: #343434;
  }
  .program .programBg .programBg-lf{
    float: left;
    color: #fff;
  }
  .program .programBg .programBg-lf h2{
    font-size: 40px;
    margin-bottom: 20px;
    margin-top: 50px;
  }
  .program .programBg .programBg-lf .programbg-detail{
    font-size: 16px;
  }
  .program .programBg img{
    float: right;
  }


</style>
