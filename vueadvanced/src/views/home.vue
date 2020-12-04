<template>
  <div id="Home">
      <div id="title">
          <div class="titleWap">
              <span class="titleBtnL" @click="change(1)">Look</span>
              <span class="titleBtnR" @click="change(2)">Hello</span>
          </div>
          <Look id="look" v-if="isShow"></Look>
          <HelloWorld id="hell" v-else></HelloWorld>
      </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import Look from '../components/vue-easy-slider'
export default {
    components:{
        HelloWorld,
        Look
    },
    data() {
        return {
            isShow:false
        }
    },
    methods:{
        change(i){
            switch (i) {
                case 1:
                    this.isShow = true
                    break;
                case 2:
                    this.isShow = false
                    break
                default:1
                break;
            }
            // this.isShow = true
        }
    }
}

</script>
<style>
*{
    margin: 0;
    padding:0;
}
.titleWap{
    width: 100%;
    height:30px;
    text-align: center;
    line-height: 30px;
}
.titleBtnL, .titleBtnR{
    width: 80px;
    text-align: center;
    cursor: pointer;
}
.titleBtnL{
    margin-right: 50px;
}
</style>