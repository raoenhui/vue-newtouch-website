<template>
  <div class="pharmacy clearfix">
    <div class="content_title pull-left">
      <img src="../../assets/cart/pharmacy.png" class="pull-left"/>
      <h4 class="pull-left" style="margin-top: 35px; position:relative;padding-left: 5px;" >
        云药房药库管理系统
      </h4>
    </div>

    <p>云药房药库管理系统是新致医疗研发的基于云计算的新一代药房药库系统,采用B/S架构，适合医院、药房、门诊、药库、中小医院、私营医院、乡镇医院、药店等各类医药卫生行业。系统可划分一个药库和多个药房，药房可以自定义N个，可以定义任何形式、任何性质的药房。包括进货入库，盘点入库，库存状况、库存不足、库存积压和有效期报警，药品出库，报损出库。</p>

  </div>
</template>

<script>
  export default {
    name: 'pharmacy'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pharmacy .content_title{
    margin-bottom:20px ;
    width: 100%;
  }

  .pharmacy .content_title img{
    max-width: 60px;
    margin-right: 5px;
  }

  .pharmacy{
    letter-spacing: 1px;
    color: #061325;
    line-height: 25px;
    background-color: #fff;
    padding:30px;
    margin-bottom: 15px;
  }

</style>
