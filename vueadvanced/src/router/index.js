import vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
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
        path:'/Look',
        name:'Look',
        component:Look
    },
    {
        path:'/Home',
        name:'Home',
        component:Home
    },
    {
        path:'/',
        component:Home
    }
]})