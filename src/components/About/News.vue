<template>
  <div class="aboutNews">
    <div class="clearfix news-content">
      <div class="content" style="width:1030px">
        <router-link :to="{ name: 'newDetail', params: { id: 123 }}" v-for="i in [1,2,3]" :key="i">
          <div class="panel panel-default news active"  >
            <div class="panel-body">
              <div class="col-md-9">
                <h4>新致软件满廿三 初心不忘再起航</h4>
                <span>
                  今日，浦东假日酒店，历经二十三个春华秋实的新致软件，在这里召开庆祝活动。公司股东、合作伙伴、老员工代表和董事会、管理团队等一百余名新老朋友在这里相聚，一起用切实行动，欢庆公司二十三华诞
                </span>
              </div>
              <div class="col-md-3">
                <span class="month_day pull-right">27/07</span>
                <span class="year pull-right">2017</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'news'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*企业动态*/

  .aboutNews{
    text-align: left!important;
  }

  .aboutNews .news-content{
    background: #E0E0E0;
    padding-bottom: 30px;
  }

  .aboutNews .panel{
    margin-top: 30px;
    margin-bottom: 0px;
    border-radius: 0px;
    padding: 20px 10px;
  }

  .aboutNews .news a{
    color:#23527c;
  }

  .aboutNews .news:hover{
    cursor: pointer;
    border:solid 1px #4178BE;
    box-shadow: 0 0 20px #4178BE;
  }

  .aboutNews .panel-body h4{
    margin-top: 0px;
    margin-bottom: 10px;
  }

  .aboutNews .panel-body span{
    color:#9f9f9f;
  }

  .aboutNews .month_day{
    font-size: 2.7em;
    width: 100%;
    text-align:right ;
  }

  .aboutNews .year{
    font-size: 1.3em;
    width:100%;
    text-align: right;
  }

</style>
