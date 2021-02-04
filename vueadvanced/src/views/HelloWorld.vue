<template>
  <div id="hello">
    <div id="content">
      <one ref="one"/>
      <two ref="two"/>
      <thre ref="thre"/>
      <four ref="four"/>
      <five ref="five"/>
      <!-- <button @click="fs">点击</button> -->
    </div>
  </div>
</template>

<script>
import one from '../components/dragModule/one'
import two from '../components/dragModule/two'
import thre from '../components/dragModule/thre'
import four from '../components/dragModule/four'
import five from '../components/dragModule/five'
import draggable from 'vuedraggable'
// import getAll from '../api/index'
// import build from '../../dist/info.yaml'
export default {
  name: 'HelloWorld',
  components:{
    draggable,
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
      ]
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
    }
  },
  mounted() {
    // this.fs()
    // this.req()
    // this.thrd()
    // let abc = new getAll
    // abc.info()
    // console.log(localStorage.getItem('info'));
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
*{
  margin: 0;
  padding: 0;
}
#hello{
  width: 100%;
  height: 100%;
  #content{
    width: 100%;
    height: 100%;
    // display: flex;
    // flex-wrap: wrap;
  }
}
</style>
