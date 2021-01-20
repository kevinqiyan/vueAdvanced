<template>
  <div id="hello">
    <div id="content">
      <one ref="one"/>
      <two ref="two"/>
      <thre ref="thre"/>
      <four ref="four"/>
      <five ref="five"/>
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
