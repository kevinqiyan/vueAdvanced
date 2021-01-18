import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
import VueResource from 'vue-resource'
import vuescroll from 'vuescroll'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(vuescroll)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
