import vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Look from '../views/look.vue'
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
        path:'/',
        component:Look
    }
]})