import vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import EasySlider from '../components/vue-easy-slider.vue'
vue.use(Router)
export default new Router({
    routes:[
    {
        path:'/',
        name:'HelloWorld',
        component:HelloWorld
    },
    {
        path:'/EasySlider',
        name:'EasySlider',
        component:EasySlider
    }
]})