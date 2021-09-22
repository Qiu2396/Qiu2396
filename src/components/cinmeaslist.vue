<template>
    <ul>
            <li v-for="datalist in cineaslist" :key="datalist.cinemaId">
                <div class="left">
                    <div class="left_name">{{datalist.name}}</div>
                    <div class="left_text">{{datalist.address}}</div>
                </div>
                <div class="right">￥{{datalist.lowPrice/100}}起</div>
            </li>
        </ul>
</template>
<script>
import http from '@/util/http.js'   
import better from 'better-scroll' //影院组件优化
export default {
    props:['cineaslist'],
     mounted() {
      
        // console.log(this.$store.state.cityid)
        // console.log(this.$refs.yingyuan.$el.offsetHeight) 顶部选项卡的高度
        //动态结算高度
        
            // this.cineaslist = this.$store.state.cinemaslist

        //分发  
        if(this.$store.state.cinemaslist.length===0){
            this.$store.dispatch('getcinemasdata').then(res=>{  //return出来使用.then加载nextTick 
            //因为http是异步nextTick是一开始就加载  所以使用return
            console.log(this.cineaslist,"CHUAN");
                this.$nextTick(()=>{
                    new better('.box',{
                        scrollbar:{
                            fade:true  //滚动的时候显示滚动条
                        }
                    })
                })
            })
                
        }else{
                this.$nextTick(()=>{
                    new better('.box',{
                        scrollbar:{
                            fade:true  //滚动的时候显示滚动条
                        }
                    })
            })
        }
        // http({
        //     url:`/gateway?cityId=${this.$store.state.cityid}&ticketFlag=1&k=1866409`,
        //     headers:{
        //         'X-Host': 'mall.film-ticket.cinema.list'
        //     }
        // }).then(res=>{
        //     // console.log(res.data.data.cinemas)
        //     this.cinemaslist = res.data.data.cinemas

            // this.$nextTick(()=>{
            // new better('.box',{
            //     scrollbar:{
            //         fade:true  //滚动的时候显示滚动条
            //     }
            // })

            // })

        // })
    },
}
</script>
<style lang="scss" scoped>
li{
        overflow: hidden;
        padding: .9375rem;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid rgba(200,200,200,0.25);
        .left{
            width: 13.25rem;
            .left_name{
                font-size:.9375rem;
                color: #191a1b;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .left_text{
                font-size: .75rem;
                color: #797d82;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .right{
            float: right;
            text-align: center;
            color: #ff5f16;
        }
    }
</style>