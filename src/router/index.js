import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Films from '@/views/Films'
import Coming from '@/views/films/Coming'
import Nowplay from '@/views/films/Nowplay'
// import Center from '@/views/Center'
import Login from '@/views/Login'
import City from '@/views/City'
import Search from '@/views/search'


// import cineames from '@/views/cineames'
import Cinemas from '@/views/Cinemas'
import Datalis from '@/views/Datalis'



Vue.use(VueRouter) //注册路由插件

//配置表
const routes = [{
        path: '/films',
        component: Films,
        children: [{
                path: '/films/nowplay',
                component: Nowplay,
            },
            {
                path: '/films/coming',
                component: Coming,
            },
            {
                //重定向(优先级最低)
                path: '/films',
                redirect: '/films/coming'
            }
        ]
    },
    {
        name: 'qiudatalis',
        path: '/datalis/:myid',
        component: Datalis
    },
    {
        path: '/center',
        component: () =>
            import ('@/views/Center'), // 懒加载防止第一次页面加载过大
        meta: {
            isqiuRequired: true //需要拦截的路由
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/city',
        component: City
    },
    {
        path: '/center/cineames',
        component: () =>
            import ('@/views/cineames')
    },
    {
        path: '/cinemas',
        component: Cinemas
    },
    {
        //重定向(优先级最低)
        path: '*',
        redirect: '/films'
    },



    //   {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }
]

const router = new VueRouter({
        // mode: 'history',
        // base: process.env.BASE_URL,
        routes,

    })
    //全局拦截  局部拦截把下面这段代码放在某个里面
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    // 需要拦截的路由meta字段为真就拦截 没有这个字段和字段为假则不拦截 直接通过
    if (to.meta.isqiuRequired) {
        //判断本地存贮是否有token字段 没有跳转到login 并在login记录点击谁才跳转的login 
        //这里拦截的是center所以点击center才会跳转到login 所以跳转的是center 
        if (localStorage.getItem('token')) {
            next()
        } else {
            next({
                path: '/login',
                query: {
                    aaa: to.fullPath
                }
            })

        }
    } else {
        next()
    }
})
export default router