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
      <div class="programItem-btn"><a href="#">了解更多</a><a href="#">在线咨询</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProgramItem',
    props: ['dataObj'],
  }
</script>
<style>
  .programItem {
    background: #fff;
    padding: 40px 0;
    margin-bottom: 20px;
    border: solid 1px #fff;
  }

  .programItem:hover {
    border: solid 1px #00bfff;
    -webkit-box-shadow: 0 0 20px #00bfff;
    box-shadow: 0 0 20px #00bfff;
  }

  .programItem:hover .programItem-lf {
    color: #00bfff;
  }

  .programItem .programItem-lf {
    font-size: 100px;
    float: left;
    width: 240px;
    text-align: center;
  }

  .programItem .programItem-rf {
    float: left;
    width: 533px;
  }

  .programItem .programItem-rf h3 {
    margin-bottom: 20px;
  }

  .programItem .programItem-btn a {
    width: 100px;
    line-height: 40px;
    display: inline-block;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }

  .programItem .programItem-btn a:nth-child(1) {
    background: #00bfff;
    margin-right: 20px;
  }

  .programItem .programItem-btn a:nth-child(2) {
    background: #b5c5c6;
  }

</style>
