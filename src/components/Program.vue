<template>
  <div class="program">
    <div class="financialBg">
      <div class="content">
        <img src="../assets/financialBg.png"/>
      </div>
    </div>
    <div class="content">
      <div class="program-nav">
        <router-link to="#/program/scheme"><div class="program-nav-line program-nav-headtit">行业解决方案</div></router-link>
        <router-link to="#/program/financial"><div class="program-nav-line">金融</div></router-link>
        <router-link to="#/program/scheme"><div class="program-nav-line">电信</div></router-link>
        <router-link to="#/program/scheme"><div class="program-nav-line">政府公众</div></router-link>
        <router-link to="#/program/scheme"><div class="program-nav-line">电信</div></router-link>
        <router-link to="#/program/scheme"><div class="program-nav-line">电信</div></router-link>
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
      msg: ''
    }
  }
}
</script>


<style scoped>
  .program {
    position: relative;
  }
  .program .program-nav{
    width: 250px;
    margin-top: 20px;
    position: absolute;
    top: 0;
    background: #fff;
  }
  .program .program-nav a.router-link-active>.program-nav-line:not(.program-nav-headtit){
    border-left: 5px solid #092d44;
  }
  .program .program-nav .program-nav-line{
    line-height: 40px;
    padding-left: 20px;
    border-bottom: #ccc 1px solid;
    border-left: #ccc 1px solid;
    border-right: #ccc 1px solid;
  }
  .program .program-nav .program-nav-line.program-nav-headtit{
    background: #092d44;
    border: none;
    color: #fff;
  }
  .program .program-con{
    min-height: 300px;
    margin-left: 280px;
  }
  .program .financialBg{
    background: #0e5888;
    text-align: right;
  }
  .program .financialBg img{}
</style>
