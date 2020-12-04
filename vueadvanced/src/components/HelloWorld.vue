<template>
<div class="container">
  <!-- <div id="demoCanvas" class="svga" ref="canvas"></div> -->
  <!-- <p v-model="num">测试一下{{num}}</p>
  <button @click="t2">测试</button> -->
  <div id="top">
    <img src="../assets/clean.svg" alt="">
  </div>
  <div id="bottom">
    <img src="../assets/rocket.svg" alt="">
  </div>
</div>
</template>

<script>
// import SVGA from 'svgaplayerweb'
export default {
  name: 'HelloWorld',
  data() {
    return {
      // bgImg:'https://file.nidong.com/upload/gift/20200520/upload_l3xlns9v1in4heomhwgbndzxt8quc9yb.svga',
      // bgImg:'https://pcsd-test.oss-cn-beijing.aliyuncs.com/ligw7/svga/rocket_svga',
      // testImg:'../assets/clean-svga.svga',
      // num:'00'
    }
  },
  methods:{
    // test(){
    //   this.$nextTick(()=>{
    //     var player = new SVGA.Player("#demoCanvas");
    //     var parser = new SVGA.Parser("#demoCanvas");
    //     parser.load('../assets/clean-svga.svga', function(videoItem) {
    //         player.setVideoItem(videoItem);
    //         player.startAnimation();
    //     });
    //   })
    // }

  },
  mounted() {
        // var player = new SVGA.Player("#demoCanvas");
        // var parser = new SVGA.Parser("#demoCanvas");
        // parser.load('/assets/clean-svga.svga', function(videoItem) {
        //     player.setVideoItem(videoItem);
        //     player.startAnimation();
        // });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.svga {
    width: 200px;
    height: 200px;
    margin: 100px auto;
}
#top{
  width: 200px;
  height: 200px;
  margin: 0 auto;
  background: black;
}
#top img{
  width: 200px;
  height: 200px;
}
#bottom{
  width: 200px;
  height: 200px;
  background-color: black;
}
#bottom img{
  width: 100%;
  height: 100%;
}
</style>
