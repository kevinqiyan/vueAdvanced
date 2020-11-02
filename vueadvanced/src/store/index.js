import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    count:0
}
const mutations = {
    increat(state){
        state.count++
    },
    decreat(state){
        state.count--
    }
}
const actions = {
    increat({commit}){
        commit('increat')
    },
    decreat({commit}){
        commit('decreat')
    }
}
const getters ={
    evenOrOdd:state => state.count %2 === 0?'偶数':'奇数'
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})