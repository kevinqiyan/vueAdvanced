<template>
  <div>
      <p>Count is {{ $store.state.count }} 是{{evenOrOdd}}</p>
      <button @click="increat">增加</button>
      <button @click="decreat">减少</button>
      <easySlider></easySlider>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import easySlider from '../components/vue-easy-slider'
export default {    
    components:{
        easySlider
    },
    data() {
        return {
            
        }
    },
    mounted() {

    },
    methods:mapActions([
        'decreat',
        'increat'
    ]),
    computed:mapGetters([
        'evenOrOdd'
    ]
        
    )
}

</script>
<style>
</style>