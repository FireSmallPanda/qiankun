import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

let routes = [
    {   
        path:"/",
        name:"Home",
        component:Home    
    }
]

const router = new VueRouter({
    mode: 'history', // 设置路由模式为history
    base:'/vue', // 设置根目录为 /vue
    routes
})

export default router;