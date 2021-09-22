import Vue from 'vue' // es6导入方式
import App from './App.vue' //导入跟组件app
import router from './router' // 引入路由
import store from './store'

Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')