<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div>
        <van-nav-bar title="影院" ref="yingyuan" @click-left="handleclick">
        <template #left>
            {{$store.state.cityname}}
            <van-icon name="arrow-down" color="black" />
        </template>
        <template #right>
            <van-icon name="search" size="20" color="black" @click="handelsearch" />
        </template>
        </van-nav-bar>
        <div class="box" :style="{
            height:height
        }">
        <!-- <ul>
            <li v-for="datalist in $store.state.cinemaslist" :key="datalist.cinemaId">
                <div class="left">
                    <div class="left_name">{{datalist.name}}</div>
                    <div class="left_text">{{datalist.address}}</div>
                </div>
                <div class="right">￥{{datalist.lowPrice/100}}起</div>
            </li>
        </ul> -->
            <cineaslist :cineaslist ='$store.state.cinemaslist'></cineaslist>
        </div>
    </div>
    </van-pull-refresh>
</template>
<script>

import cineaslist from '@/components/cinmeaslist'
import {Toast} from 'vant'

export default {
    data() {
        return {
            cinemaslist:[],
            height:'0px',
            isLoading: false,
        }
    },
    components:{
        cineaslist
    },
    methods: {
        onRefresh() {
          setTimeout(() => {
            Toast('刷新成功');
            location.reload();
            this.isLoading = false;
          }, 1000);
        },
        handleclick(){
            this.$router.push('/city')
            this.$store.commit('clearCinema')
        },
        handelsearch(){
            this.$router.push('/search')
        }
    },
    mounted() {
        if(document.querySelector('footer').offsetHeight===0){
             this.height = document.documentElement.clientHeight - this.$refs.yingyuan.$el.offsetHeight - 50 +'px'
        }else{
             this.height = document.documentElement.clientHeight - this.$refs.yingyuan.$el.offsetHeight - 50 +'px'

        }
        console.log(document.querySelector('footer').offsetHeight)
        
        
    },
    // mounted() {
    //     console.log(this.$store.state.cityid)
    //     // console.log(this.$refs.yingyuan.$el.offsetHeight) 顶部选项卡的高度
    //     //动态结算高度
    //     this.height = document.documentElement.clientHeight - this.$refs.yingyuan.$el.offsetHeight - document.querySelector('footer').offsetHeight+'px'

    //     //分发  
    //     if(this.$store.state.cinemaslist.length===0){
    //         this.$store.dispatch('getcinemasdata').then(res=>{  //return出来使用.then加载nextTick 
    //         //因为http是异步nextTick是一开始就加载  所以使用return
    //             this.$nextTick(()=>{
    //                 new better('.box',{
    //                     scrollbar:{
    //                         fade:true  //滚动的时候显示滚动条
    //                     }
    //                 })
    //             })
    //         })
                
    //     }else{
    //             this.$nextTick(()=>{
    //                 new better('.box',{
    //                     scrollbar:{
    //                         fade:true  //滚动的时候显示滚动条
    //                     }
    //                 })
    //         })
    //     }
    //     // http({
    //     //     url:`/gateway?cityId=${this.$store.state.cityid}&ticketFlag=1&k=1866409`,
    //     //     headers:{
    //     //         'X-Host': 'mall.film-ticket.cinema.list'
    //     //     }
    //     // }).then(res=>{
    //     //     // console.log(res.data.data.cinemas)
    //     //     this.cinemaslist = res.data.data.cinemas

    //         // this.$nextTick(()=>{
    //         // new better('.box',{
    //         //     scrollbar:{
    //         //         fade:true  //滚动的时候显示滚动条
    //         //     }
    //         // })

    //         // })

    //     // })
    // },
}
</script>
<style lang="scss" scoped>
.box{
    overflow: hidden;
    position: relative; //解决滚动条超出这个box
    margin-bottom: 3.125rem;
}
    // li{
    //     overflow: hidden;
    //     padding: .9375rem;
    //     display: flex;
    //     justify-content: space-between;
    //     border-bottom:1px solid rgba(200,200,200,0.25);
    //     .left{
    //         width: 13.25rem;
    //         .left_name{
    //             font-size:.9375rem;
    //             color: #191a1b;
    //             overflow: hidden;
    //             text-overflow: ellipsis;
    //             white-space: nowrap;
    //         }
    //         .left_text{
    //             font-size: .75rem;
    //             color: #797d82;
    //             overflow: hidden;
    //             text-overflow: ellipsis;
    //             white-space: nowrap;
    //         }
    //     }
    //     .right{
    //         float: right;
    //         text-align: center;
    //         color: #ff5f16;
    //     }
    // }
</style>