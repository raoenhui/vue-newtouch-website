<template>

  <div>{{ count }}+{{countPlusLocalState}}+{{doneTodosCount}}</div>
</template>

<script>
  import { mapState,mapGetters } from 'vuex'
  export default {
    name: 'counter',
//    computed: {
//      count () {
//        return this.$store.state.count
//      }
//    }
    data(){
      return {
        localCount:11
      }
    },
    computed:{
//      count:state => state.count,
      ...mapState([
        'count'
      ]),
      countPlusLocalState (state) {
        return state.count + this.localCount
      },
      ...mapGetters(['doneTodosCount'])
    }

  }
</script>


