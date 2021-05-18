<template>
  <div id="look">
      <p>Count is {{ $store.state.count }} 是{{evenOrOdd}}</p>
      <button @click="increat">增加</button>
      <button @click="decreat">减少</button>
      <pr :mess = 'father' v-show="false"/>
      <vueScroll v-show="false"/>
      <div id="text">
          <ol>
              <li>测试有序列表</li>
              <li>测试有序列表</li>
              <li>测试有序列表</li>
              <li>测试有序列表</li>
          </ol>
      </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
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
    #text{
        width: 320px;
        height: 160px;
        border-radius: 10px;
        background-color: #bbffaa;
        margin-top: 10px;
        margin-left: 10px;
        overflow: hidden;
        ol{
            // overflow: hidden;
            margin-left: 10px;
        }
    }
}
</style>