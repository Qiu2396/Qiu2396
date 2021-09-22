<template>
    <div class="city">
        <div class="citytop">
            <van-icon name="cross" @click="citycross"  class="cityleft" />
            当前城市-{{$store.state.cityname}}
        </div>
        <div class="bj"></div>
        <div class="recommendcity"> 
            <div class="rmcs">
                <div class="rmcsname">热门城市</div>
                <div v-for="(hot,index) in ishot" :key="index">
                    <div @click="handlehot(hotmin)" class="hot" v-for="hotmin in hot.hot" :key="hotmin.cityId">{{hotmin.name}}</div>
                </div>
            </div>
        </div>
        <van-index-bar :index-list='list' @change='handleselect'  :sticky = 'false'>
            <div v-for="data in citylist" :key="data.type">
                <van-index-anchor :index="data.type" />
                    <van-cell @click="handlename(item)" :title="item.name" v-for="item in data.list" :key="item.cityId" />
                   
            </div>
        </van-index-bar> 
    </div>
</template>
<style lang="scss" scoped>
.city{
    background-color: #f4f4f4;
    .bj{
        color: #f4f4f4;
        height: 5px;
    }
    .citytop{
        position: fixed;
        top: 0;
        left: 0;
        width: 21.5625rem;
        height: 1.575rem;
        padding: .9375rem;
        margin-bottom: .625rem;
        text-align: center;
        font-size: 1.25rem;
        background-color: white;
        align-items: center;
        z-index: 200;
        .cityleft{
            float: left;
        }
    }
    .recommendcity{
        margin-top: 5rem;
        width: 21.5625rem;
        // height: 13rem;
        background-color: white;
        padding: .9375rem;
        

        .rmcs{
            overflow: hidden;
            .rmcsname{
                font-size:.8125rem;
                color: #797d82;
            }
            .hot{
                height: 1.875rem;
                width: 6.125rem;
                text-align: center;
                background-color: #f4f4f4;
                line-height: 1.875rem;
                border-radius: 3px;
                box-sizing: border-box;
                margin: 5px 7.5px;
                font-size: 14px;
                float: left;
                color: #191a1b;
            }
        }
    }
}
    
</style>
<script>
import http from '@/util/http.js'
import { Toast } from 'vant';
import obj from '@/util/mixin'

export default {
    mixins:[obj],
    data() {
        return {
            citylist:[],
            list:[],
            ishot:[]
        }
    },
    mounted() {
        http({
            url:'https://m.maizuo.com/gateway?k=880964',
            headers:{
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res=>{
            console.log(res.data.data.cities)
            //把数据传到函数
            this.renderctiy(res.data.data.cities)
        })
    },
    methods: {
        citycross(){
            this.$router.back()
        },
        handlename(item){
            console.log(item)
            this.$store.commit('changname',item)
            this.$router.back()
        },
        handlehot(hot){
            this.$store.commit('changhot',hot)
            this.$router.back()
        },

        handleselect(index){
            console.log('dd',index)    //data是传回来的index索引
            Toast(index);
            Toast.setDefaultOptions({ duration: 500 });
        },
        //接收数据
        renderctiy(list){
            var letterlist = []
            //循环出26个字母 fromCharCode(65) = A
            for(var i = 65; i<91; i++){
                letterlist.push(String.fromCharCode(i))
            }

            letterlist.forEach(letter=>{
                var newlist = list.filter(item=>{
                   return item.pinyin.substring(0,1).toUpperCase()===letter
                     
                    //filter回调函数加大括号要有return 不加不需要
                })
                    // console.log(newlist)
                    //letterlist有26个 每一次遍历  把letter 例如a push到citylist数组对象中 
                    //item是对象所以list是很多对象 citylist.list是一个数组里面有n个对象
                    //因为有的字母开头的城市没有 所以过滤的数组要大于0
                    newlist.length > 0 && this.citylist.push({
                        type:letter,
                        list:newlist
                    })
                    //item是原数组 newlist是过滤出来的新数组  在遍历a的时候把 原数组里面的拼音字段所有符合a开头的对象
                    //赋值给newlist数组  再把新的数组过滤到citylist数组 拿到适合我们的数组渲染页面
                    //定义一个数组 把过滤处理的26字母单独赋值给list 目的渲染页面右边 索引字符列表
                    newlist.length > 0 && this.list.push(letter)
                    var hot = newlist.filter(item=>{
                        return item.isHot == 1
                    })
                    console.log(hot)
                    hot.length>0 && this.ishot.push({
                        hot
                    })
            })
            console.log(this.citylist)

            console.log(this.ishot)

        }
    },
}
</script>
<style lang="scss">
    .van-toast{
        min-width: 2.125rem;
    }
</style>