import vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import EasySlider from '../components/vue-easy-slider.vue'
// import vueScoll from '../components/vue-easy-slider.vue'
import Look from '../views/look.vue'
<<<<<<< HEAD
import Home from '../views/home.vue'
=======
import Once from '../views/once.vue'
import Echarts from '../components/echartsTest/index.vue'
>>>>>>> vuex
vue.use(Router)
export default new Router({
    routes: [
        {
            path: 'Echarts',
            name: 'Echarts',
            component: Echarts
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/EasySlider',
            name: 'EasySlider',
            component: EasySlider
        },
        {
            path: '/Look',
            name: 'Look',
            component: Look
        },
        {
            path: '/Once',
            name: 'Once',
            component: Once
        },
        {
            path: '',
            component: Echarts
        }
    ]
})