<template>
  <div id="box">
      <button @click="btn">点击更新</button>
      <p  v-show="isShow">事件件测试文本事件测试文本事件测试文本事件测试文</p>
      <div class="top"  v-show="isShow">hjkl;复活节</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:true
    }
  },
  methods:{
    btn(){
      this.isShow = !this.isShow
    }
  }
}

</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#box{
  height: 100px;
  background-color:#bfa;
}
.top{
  width: 200px;
  height: 50px;
  background-color:red;
  overflow: hidden;
  animation:identifier 1s linear;
}
p{
  height: 50px;
  width: 200px;
  animation: mymove 1.5s linear;
}
@keyframes mymove {
  from{opacity:0;}
  to{opacity:1}
}
@keyframes identifier {
  /* from{width: 200px;}
  to{width:0px;} */
  
}

</style>