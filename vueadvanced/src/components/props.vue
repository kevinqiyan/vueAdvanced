<template>
  <div id="props">
    <p>12121212121212121212</p>
    <p>{{mess}}</p>
  </div>
</template>

<script>
export default {
  props:['mess'],
  data() {
    return {
     me:''
    }
  },
  mounted() {
    this.me = this.mess
    console.log(this.me,'打印父组件传过来的参数',this.mess);
  },
}

</script>
<style lang='scss' scoped>
*{
  padding: 0;
  margin: 0;
}
#props{
  width: 100%;
  height: 20vh;
  background-color: red;
}
</style>