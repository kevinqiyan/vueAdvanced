<template>
  <div id="hello">
    <div id="content" :class="isShow?'test':''">
      <one ref="one"/>
      <two ref="two"/>
      <thre ref="thre"/>
      <four ref="four"/>
      <five ref="five"/>
      <!-- <button @click="fs">点击</button> -->
    </div>
    <div id="imgBlur" :class="isShow?'test':''">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg" alt="">
    </div>
    <div @click="check" id="btn">动画切换</div>
  </div>
</template>

<script>
import one from '../components/dragModule/one'
import two from '../components/dragModule/two'
import thre from '../components/dragModule/thre'
import four from '../components/dragModule/four'
import five from '../components/dragModule/five'
// import draggable from 'vuedraggable'
import math from 'library/dist/library'
// import getAll from '../api/index'
// import build from '../../dist/info.yaml'
export default {
  name: 'HelloWorld',
  components:{
    // draggable,
    one,
    two,
    thre,
    four,
    five
  },
  data() {
    return {
      list:[
        {'name':one},
        {'name':two},
        {'name':thre},
        {'name':four},
        {'name':five}
      ],
      isShow:false,
      isShow2:true,
    }
  },
  
  methods: {
    fs(){
      let yaml = require('yamljs')
      console.log(yaml,'++++++',yaml.load);
      let result = yaml.load('../../dist/info.yaml')
      console.log(result);
    },
    req(){
      this.$http.get('../api/index.js',(res)=>{
        console.log(res,'req');
      })
    },
    thrd(){
      let fs = require('fs')
      let content = fs.readFileSync('../../dist/info.yaml',{encoding:'utf8'})
      console.log(content,'thrd内容');
    },
    check(){
      this.isShow = !this.isShow
      setTimeout(()=>{
        this.isShow2 = !this.isShow2
      },2000)
      
      // if (!this.isShow) {
      //     setTimeout(()=>{
      //     this.isShow2 = false
      //   },2000)
      // }else{
      //   // setTimeout(()=>{
      //   //   this.isShow2 = true
      //   // },1000)
      //   // this.isShow = true
      //   this.isShow2 = true
      // }
      
    }
  },
  mounted() {
    this.isShow = true,
    console.log(math,'11111',math.math.add(1,2));
    // this.fs()
    // this.req()
    // this.thrd()
    // let abc = new getAll
    // abc.info()
    // console.log(localStorage.getItem('info'));
  },
  computed:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
*{
  margin: 0;
  padding: 0;
}
.test{
  left: 0px!important;
  transition: 2s;
}
#hello{
  width: 100%;
  height: 100%;
  #content{
    width: 100%;
    position: absolute;
    left: -100%;
    transition: 2s;
    // height: 625px;
    // display: flex;
    // flex-wrap: wrap;
  }
  #imgBlur{
    width: 345px;
    height: 345px;
    position: absolute;
    top: 500px;
    left: -100%;
    transition: 2s;
    img{
      width: 345px;
      height: 345px;
      filter: blur(5px);
    }
  }
  #btn{
    position: absolute;
    // top: 625px;
    z-index: 2;
  }
}
</style>
