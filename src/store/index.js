import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http.js'
import createpersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    //vue持久化 默认全部传入 这里只传id和name
    plugins: [createpersistedState({
            reducer: (state) => {
                return {
                    cityid: state.cityid,
                    cityname: state.cityname
                }
            }
        }

    )],
    //state公共状态管理
    state: {
        cityid: '110100',
        cityname: '北京',
        cinemaslist: [],
        istabbarshow: true
    },
    //同样管理 被监控了
    //只能支持同步
    mutations: {
        changname(state, cityname) {
            state.cityname = cityname.name
            state.cityid = cityname.cityId
            console.log(cityname)
        },
        changhot(state, hot) {
            state.cityname = hot.name
            state.cityid = hot.cityId
        },
        changecinemaData(state, data) {
            state.cinemaslist = data
        },
        //点击城市选择按钮清空数据重新缓存
        clearCinema(state) {
            state.cinemaslist = []
        },
        //显示隐藏tabbar组件
        show(state) {
            state.istabbarshow = true
        },
        hide(state) {
            state.istabbarshow = false
        }
    },
    //支持同步和异步
    actions: {
        getcinemasdata(store) {
            return http({
                url: `/gateway?cityId=${store.state.cityid}&ticketFlag=1&k=1866409`,
                headers: {
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then(res => {
                // console.log(res.data.data.cinemas)
                this.cinemaslist = res.data.data.cinemas

                store.commit('changecinemaData', res.data.data.cinemas)

                // this.$nextTick(() => {
                //     new better('.box', {
                //         scrollbar: {
                //             fade: true //滚动的时候显示滚动条
                //         }
                //     })

                // })

            })
        }
    },
    modules: {}
})

//vuex项目应用
//1 非父子通信 2 后端数据的缓存快照，减少重复请求数据 减轻服务器压力 提高用户体验