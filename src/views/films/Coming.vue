<template>
    <div class="padd">
       
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="我是有底线的！"
                    @load="onLoad"
                    loading-text="努力冲刺中！"
                    :immediate-check = false
                >
  

            <van-cell v-for="data in datalis" :key="data.filmId" @click="handlechangepafe(data.filmId)">
                <img :src="data.poster">
                <div class="data">
                    <div class="dataname">
                        {{data.name}}
                        <span class="item">
                            {{data.filmType.name}}
                        </span>
                    </div>
                    <div class="datas datagrane">
                        观众评分{{data.grade}}
                    </div>
                    <div class="datas actors actor">
                        <span class="datas" v-for="actors in data.actors" :key="actors.filmId">
                            主演:&#8194;{{actors.name}}
                        </span>
                    </div>
                    <div class="datas datanation">
                        {{data.nation}}&#8194;|&#8194;{{data.runtime}}分钟
                    </div>
                </div>
                <div class="Film">
                    <div class="Film-buy">
                        购票
                    </div>
                </div>
                
                
            </van-cell>
        </van-list>
    </div>
</template>
<script>
import http from '@/util/http.js'
import httpno from '@/util/httpno.js'
export default {
    data() {
        return {
            datalis:[],
            loading: false,
            finished: false,
            current:1,
            total:0
        }
    },
        mounted() {
        http({
            url:`gateway?cityId=${this.$store.state.cityid}&pageNum=1&pageSize=10&type=1&k=6310447`,
            headers:{
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            // console.log(res.data.data.total);
            this.datalis = res.data.data.films
            this.total = res.data.data.total

        })
    },
    methods: {
        onLoad(){
            //数组的长度和后端返回的数组总长度相等 把finished设置成true 并return 
            //finished	是否已加载完成，加载完成后不再触发load(加载)事件 
            //this.total!==0解决详情页面出现滚动条在返回主页直接出现到底情况
            if(this.datalis.length === this.total && this.total!==0){
                this.finished = true
                return
            }

            console.log('到底了')
            this.current++
            httpno({
            url:`/gateway?cityId=${this.$store.state.cityid}&pageNum=${this.current}&pageSize=10&type=1&k=6310447`,
            headers:{
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res=>{
            console.log(this.datalis.length);
            this.datalis = [...this.datalis,...res.data.data.films]  //将原来的数组的新数组合并
            //将loading设置false
            //List 组件通过 loading 和 finished 两个变量控制加载状态，当组件滚动到底部时，
            //会触发 load 事件并将 loading 设置成 true。此时可以发起异步操作并更新数据，
            //数据更新完毕后，将 loading 设置成 false 即可。若数据已全部加载完毕，则直接将 finished 设置成 true 即可。
            this.loading = false
        })
        },
        handlechangepafe(dataid){
            //1 编程式导航
            // this.$router.push(`/datalis/${dataid}`)  //这里是分号


            //2   通过路由名跳转
            this.$router.push(
                {
                    name:'qiudatalis',
                    params:{
                        myid:dataid
                    }
                }
            )
        }
    },

}
</script>
<style lang="scss" scoped>
 .padd{
    padding-bottom: 3.0625rem;
  }
    .van-list{
        .van-cell{
            overflow: hidden;
            padding: .9375rem;
            // height: 5.875rem;
            border-top:1px solid rgba(200,200,200,0.25);
            img{
                width: 4.125rem;
                float: left;
            }
            .Film{
                display: flex;
                float: right;
                height:5.875rem;
                text-align: center;
                align-items: center;
                .Film-buy{
                    width: 3.125rem;
                    height: 1.5625rem;
                    font-size: .75rem;
                    color: #ff5f16;
                    line-height: 1.5625rem;
                    text-align: center;
                    border:1px solid #ff5f16;
                    border-radius:4px;
                }
            }
            
            .data{
                padding-left: .3125rem;
                width: 12.5rem;
                float: left;
                .datas{
                    font-size: .75rem;
                    padding: .3125rem 0;
                    color: #666;
                    line-height: .9375rem;
                }
                .actor{
                    width: 12.5rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .dataname{
                font-size: 1rem;
                width: 12.5rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                line-height: 1.25rem;
                span{
                    display: inline-block;
                    line-height: .875rem ;
                    text-align: center;
                    color: white;
                    font-size: .75rem;
                    width: 1.25rem;
                    height: .875rem;
                    background-color: #d2d6dc;
                    border-radius: 2px;
                }
            }
        }
        
    }
</style>