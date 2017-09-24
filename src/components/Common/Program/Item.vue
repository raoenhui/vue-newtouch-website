<template>
  <div class="programItem clearfix">
    <div class="programItem-lf">
      <i :class="dataObj.icon"></i>
    </div>
    <div class="programItem-rf">
      <h3>{{dataObj.title}}</h3>
      <p>
        {{dataObj.detail}}
      </p>
      <div class="programItem-btn"><a :href="dataObj.link">了解更多</a><a href="#">在线咨询</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProgramItem',
    props: ['dataObj'],
  }
</script>
<style lang="scss" scoped>
  @import "./Item.scss";
</style>
