<template>
  <div class="program">
    <div class="header-content">
      <div class="page-local">
        <a href="">首页</a>/
        <a href="">行业解决方案</a>/
        <a href="">{{titleName}}</a>
      </div>
    </div>
    <div class="financialBg" v-show="showBg" v-bind:style="{ background: bgColor}">
      <div class="content">
        <img :src="srcBg" v-show="srcBg"/>
      </div>
    </div>
    <div class="content">
      <div class="program-nav">
        <router-link to="/program/scheme">
          <div class="program-nav-line program-nav-headtit" @click="showBgFun('scheme')">行业解决方案</div>
        </router-link>
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
    </div>
    <div class="content">
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
        showBg: false,
        titleName:'',
        path: '',
        //背景图片
        srcBg: '',
        bgColor: '#fff',
        dataObj: {
          'scheme': {
            bgColor: '#061325',
            title:''
          }, 'financial': {
            bgColor: 'rgb(14, 88, 136)',
            title:'金融'
          }, 'telecom': {
            bgColor: '#5eb4e7',
            title:'电信'
          }, 'government': {
            bgColor: '#126fa2',
            title:'政府公众'
          }, 'business': {
            bgColor: '#1fafc1',
            title:'商业连锁'
          }, 'transportation': {
            bgColor: '#165e73',
            title:'交通运输'
          }, 'medical': {
            bgColor: '#99c75d',
            title:'医疗卫生'
          }, 'made': {
            bgColor: '#768f9b',
            title:'制造业'
          }, 'messages': {
            bgColor: '#1496a6',
            title:'企业信息化'
          },
        }
      }
    },
    methods: {
      showBgFun: function (path) {
        if (path == "scheme") {
          this.showBg = false;
        } else {
          this.showBg = true;
          this.srcBg = require(`../assets/${path}_bg.png`);
        }

        if (this.dataObj[path])
            this.bgColor=this.dataObj[path].bgColor;
            this.titleName=this.dataObj[path].title;
      }
    },
    mounted: function () {
          if(this.$route.path=="/program/scheme"){
            this.showBg=false;
          }else{
            this.showBg=true;
            var path=this.$route.path.split('/')[2];
            if(path){
              this.srcBg = require(`../assets/${path}_bg.png`);
              this.bgColor=this.dataObj[path].bgColor;
              this.titleName=this.dataObj[path].title;
            }
          }
    }
  }
</script>


<style scoped>

  .header-content{
    width:100%;
    height: 50px;
    line-height: 50px;
    background: #ececec;
  }

  .header-content .page-local{
    width: 1200px;
    margin: 0px auto;
  }

  .header-content .page-local a{
    padding-right: 10px;
  }

  .program {
    position: relative;
  }

  .program .program-nav {
    width: 250px;
    margin-top: 70px;
    position: absolute;
    top: 0;
    background: #fff;
  }

  .program .program-nav a.router-link-active > .program-nav-line:not(.program-nav-headtit) {
    border-left: 5px solid #092d44;
  }

  .program .program-nav .program-nav-line {
    line-height: 40px;
    padding-left: 20px;
    border-bottom: #ccc 1px solid;
    border-left: #ccc 1px solid;
    border-right: #ccc 1px solid;
    color:#022330;
  }

  .program .program-nav .program-nav-line.program-nav-headtit {
    background: #092d44;
    border: none;
    color: #fff;
  }

  .program .program-con {
    min-height: 300px;
    margin-left: 280px;
  }

  .program .financialBg {
    background: #0e5888;
    text-align: right;
  }

</style>
