<template>
  <div id="echarts">
      <testOne/>
  </div>
</template>

<script>
import testOne from './testOne/index'
export default {
    components:{
        testOne,
    }
}

</script>
<style lang='scss'>
#echarts{
    width: 100vw;
    height: 100vh;
}
</style>