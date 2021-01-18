<template>
  <div id="look">
      <p>Count is {{ $store.state.count }} 是{{evenOrOdd}}</p>
      <button @click="increat">增加</button>
      <button @click="decreat">减少</button>
      <pr :mess = 'father'/>
      <vueScroll/>
  </div>
</template>

<script>
import {mapActions,mapGetters, mapState} from 'vuex';
import pr from '../components/props';
import vueScroll from '../components/vueScroll.vue';
export default {
    components:{
        pr,
        vueScroll
    },
    data() {
        return {
            father:'我是父组件传过来的参数'
        }
    },
    mounted() {
       
    },
    
    methods:mapActions([
        'decreat',
        'increat'
    ]),
    computed:mapGetters([
        'evenOrOdd'
    ]
        
    )
}

</script>
<style lang='scss' scoped>
*{
    margin: 0;
    padding: 0;
}
#look{
    width: 100vw;
    // height: 100vh;
}
</style>