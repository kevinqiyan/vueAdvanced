<template>
  <div id="scroll">
    <div id="content">
      <vuescroll :ops="ops">
      <ul>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
        <li>测试滚动条</li>
      </ul>
      </vuescroll>
    </div>
    <div class="testBtn" @click="addWidth">
      测试增加
    </div>
    <div class="testBtn" @click="reduceWidth">
      测试减少
    </div>
  </div>
</template>

<script>
import vuescroll from 'vuescroll'
export default {
  components:{
    vuescroll
  },
  data() {
    return {
      ops:{
        vuescroll: {
          mode:'native', //native更适用于PC端,slide跟移动端更契合
          sizeStrategy: 'number',
          detectResize: true,
          /** 锁定一种滚动方向， 锁定的方向为水平或者垂直方向上滑动距离较大的那个方向 */
          locking: true,
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: true,
          speed: 300,
          easing: undefined,
          verticalNativeBarPos: 'right',
          maxHeight:undefined,
          maxWidth:undefined,
        },
        rail:{
          background: '#01a99a',
          opacity: 0,
          size: '6px',
          specifyBorderRadius: false,
          gutterOfEnds: '0px', //滚动条距离底部的距离
          gutterOfSide: '2px', //滚动条距离左/右的距离(verticalNativeBarPos)
          keepShow:true, //保持显示
        },
        bar: {
          onlyShowBarOnScroll:false, //是否只在滚动时显示bar
          showDelay:100, //鼠标离开后多长时间隐藏滚动条
          background:'#cecece',
          keepShow:true,//保持显示
          opacity:1,
          specifyBorderRadius:false,//指定滚动条的borderRadius,默认false
          size:'6px'
        },
        scrollButton:{
          enable:false,
          background:'black',
          opacity:1,
          set:100, //点击滚动条的箭头移动距离
          mousedownStep:30, //每次当你按住 scrollButton 所滚动的距离
        }
      }
    }
  },
  methods:{
    addWidth(){
      this.ops.rail.size = '10px'
      this.ops.bar.size = '10px'
    },
    reduceWidth(){
      this.ops.rail.size = '6px'
      this.ops.bar.size = '6px'
    }
  },
  computed:{

  }
}

</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  user-select:none;
}
#scroll{
  width: 345px;
  height: 50vh;
  background-color: #bbffaa;
  #content{
    width: 50%;
    height: 400px;
    margin: 0 auto;
    background-color: blue;
    color: white;
    overflow: hidden;
    ul{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
  .testBtn{
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: black;
    color: white;
    cursor: pointer;
    margin-left: 10px;
    float: left;
  }
}
</style>