<template>
  <div class="program content">
    <div class="row">
      <div class="col-md-3">
        <div class="program-nav">
          <div class="program-nav-line"><a href="#/program/scheme">行业解决方案</a></div>
          <div class="program-nav-line"><a href="#/program/financial">金融</a></div>
          <div class="program-nav-line"><a href="#/program/financial">电信</a></div>
          <div class="program-nav-line"><a href="#/program/financial">金融</a></div>
          <div class="program-nav-line"><a href="#/program/financial">金融</a></div>
          <div class="program-nav-line"><a href="#/program/financial">金融</a></div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="program-con">
          <router-view></router-view>
         </div>
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
  .program {}
  .program .program-nav{
    position: fixed;
    width: 300px;
    margin-top: 20px;
    border: #ccc 1px solid;
  }
  .program .program-nav .program-nav-line{
    line-height: 40px;
    padding-left: 20px;
    border-bottom: #ccc 1px solid;
  }
  .program .program-con{
    min-height: 300px;
    margin: 20px;
  }
</style>
