<template>
  <div id="box">
      <button @click="btn">点击更新</button>
      <p  v-show="isShow">事件件测试文本事件测试文本事件测试文本事件测试文</p>
      <div class="topWap">
        <p class="top"  v-show="isShow">hjkl;复活节事件件测试文本事件测试文本事件测试文本事件测试文事件件测试文本事件测试文本事件测试文本事件测试文</p>
      </div>
      
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
.topWap{
  text-align:left;
  margin-left: 200px;
}
.top{
  width: 400px;
  height: 50px;
  background-color:red;
  overflow: hidden;
  transition: width 2s;
  animation:identifier 1s linear;
}
/* .top:hover{
  width: 200px;
} */
/* p{
  height: 50px;
  width: 200px;
  animation: mymove 1.5s linear;
} */
/* @keyframes mymove {
  from{opacity:0;}
  to{opacity:1}
} */
@keyframes identifier {
    0% {width:0%}
    /* 40% {width:0%}
    60% {width:0%;} */
    100% {width:400px;}
}

</style>