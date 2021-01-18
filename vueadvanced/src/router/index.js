import vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import EasySlider from '../components/vue-easy-slider.vue'
import vueScoll from '../components/vue-easy-slider.vue'
import Look from '../views/look.vue'
import Home from '../views/home.vue'
vue.use(Router)
export default new Router({
    routes:[
    {
        path:'/HelloWorld',
        name:'HelloWorld',
        component:HelloWorld
    },
    {
        path:'/EasySlider',
        name:'EasySlider',
        component:EasySlider
    },
    {
        path:'/Look',
        name:'Look',
        component:Look
    },
    {
        path:'',
        component:Look
    }
]})