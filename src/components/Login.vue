<template>

  <form class="form-horizontal" role="form" style="width: 500px;margin: 0 auto;">
    <counter></counter>
    <div class="form-group">
      <label class="col-sm-2 control-label" @click="increment(2)">用户名</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="请输入用户名" v-model.lazy="userAccount">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label" @click="decrement">密码</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="密码" v-model="passWord">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">验证码</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="验证码" name="codeNumber" maxlength="6" v-model="codeNumber">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label>
            <input type="checkbox">请记住我
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <button @click.prevent="mobileLogin" class="btn btn-default">登录</button>
      </div>
    </div>
  </form>
</template>

<script>
  import { mapMutations } from 'vuex'
  import {accountLogin} from 'src/service/handleData'
  import Counter from 'src/components/Common/Login/Counter'
  export default {
    name: 'login',
    data () {
      return {
        userInfo: null, //获取到的用户信息
        userAccount: null, //用户名
        passWord: null, //密码
        codeNumber: null, //验证码
      }
    },
    methods: {
      mobileLogin(){
        if (!this.userAccount) {
          alert('请输入手机号/邮箱/用户名');
          return
        } else if (!this.passWord) {
          alert('请输入密码');
          return
        } else if (!this.codeNumber) {
          alert('请输入验证码');
          return
        }
        //用户名登录
//        this.userInfo = await accountLogin(this.userAccount, this.passWord, this.codeNumber);
      },
//      increment(){
//        this.$store.commit('increment',2)
//      },
      ...mapMutations([
        'increment'
      ]),
      decrement(){
//        this.$store.commit({type:'decrement',count:1})
        this.$store.dispatch({type:'decrement',count:1})
      }
    },
    components: { Counter }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
