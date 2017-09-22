<template>
  <div class="total-container">
    <div class="main-content clearfix cart">
      <div class="silder-content lf">
        <h4 class="silder-title">新致商城</h4>
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          <div class="panel panel-default">
            <router-link class="panel-heading " to="/cart/finCloud">
              <h4 class="panel-title">
                金融云
              </h4>
            </router-link>
          </div>
          <div class="panel panel-default">
            <router-link class="panel-heading " to="/cart/medicalCloud">
              <h4 class="panel-title">
                医疗云
              </h4>
            </router-link>
          </div>
          <div class="panel panel-default">
            <router-link class="panel-heading " to="/cart/enterPriseCloud">
              <h4 class="panel-title">
                企业云
              </h4>
            </router-link>
          </div>
        </div>
      </div>
      <div class="text-content lf">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'cart'
  }
</script>

<style lang="scss" scoped>
  @import "src/components/cart";
</style>
