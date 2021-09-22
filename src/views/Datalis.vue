<template>

   
    <div v-if="filmInfo" class="film">
            <van-nav-bar :title=filmInfo.name :fixed = true v-scroll="50">
            <template #left>
                <van-icon @click="vanleft" name="arrow-left" size='20px' color = 'black' />
            </template>
        </van-nav-bar>
        
        <!-- <img :src="filmInfo.poster"> -->
        <div :style="{
            backgroundImage:'url('+filmInfo.poster+')'
            }" class="poster"></div>
            <div class="conter">
                <div class="name">
                    <span class="spanname">{{filmInfo.name}}</span>
                    <div class="typename">
                    {{filmInfo.filmType.name}}
                    </div>
                    <span v-if="filmInfo.grade!==undefined" class="spangrade">{{filmInfo.grade}}分</span>
                </div>
                <div class="header">{{filmInfo.category}}</div>
                <!-- 计算属性premiereAttime -->
                <div class="header">{{premiereAttime}}上映</div>
                <div class="header">{{filmInfo.nation}}|{{filmInfo.runtime}}分钟</div>
                <div class="synopsis" :class="isHidden?'hidden':''">{{filmInfo.synopsis}}
                </div>
                <div class="jiantou"><i :class="isHidden?'iconfont iconjiantou9':'iconfont iconshangjiantou'" @click="isHidden=!isHidden"></i></div>
            </div>
        <div class="actios">
            <div class="actiostop">演职人员</div>
            <div class="swiperdata">
                <data-swiper :qiu="3.5" han="han">
                    <data-swiperitem v-for="(data,index) in filmInfo.actors" :key="index">
                        <div :style="{
            backgroundImage:'url('+data.avatarAddress+')'
            }" class="avatarAddress" ></div>
                        <div class="dataname">{{data.name}}</div>
                        <div class="datarole">{{data.role}}</div>
                    </data-swiperitem>
                </data-swiper>
            </div>
        </div>
        <div class="photos">
            <div class="photostop">剧照</div>
            <div>
                <data-swiper :qiu="3" han="han2" class="photosdata">
                    <data-swiperitem v-for="(data,index) in filmInfo.photos" :key="index">
                        <div :style="{
            backgroundImage:'url('+data+')'
            }" class="photosimg"  @click="handlephotos(index)"></div>
                    </data-swiperitem>
                </data-swiper>
            </div>
        </div>
        <div class="bottom"></div>
    </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import Vue from 'vue'
import dataSwiper from '@/components/detas/dataSwiper'
import dataSwiperitem from '@/components/detas/dataSwiperItem'
import { ImagePreview } from 'vant'; //导入剧照图片全屏查看函数
import obj from '@/util/mixin'

Vue.directive('scroll',{
    inserted(el,binding){
        el.style.display = 'none'
        window.onscroll = ()=>{
            if((document.documentElement.scrollTop || document.body.scrollTop)>binding.value){
                el.style.display = 'block'
            }else{
                el.style.display = 'none'    
            }
        }
    },
    unbind(){
        window.onscroll=null
    }
})
export default {
    mixins:[obj],

    data() {
        return {
            filmInfo:null,
            //初始值赋值null 使用v-if来判断 没有数据的时候为null 不渲染
            isHidden:true
        }
    },
    methods: {
        vanleft(){
            this.$router.back() //点击返回上一个页面
        },
        handlephotos(index){
            ImagePreview(
               {
                    images:this.filmInfo.photos, //图片数组
                    startPosition: index,
                    closeable: true,
                    closeIconPosition :"top-left"
               }
            );
        }
    },

    components:{
        dataSwiper,
        dataSwiperitem
    },
    computed:{
        premiereAttime(){
            return moment(this.filmInfo.premiereAt*1000).format('YYYY-MM-DD') //计算日期
        }
    },
    created() {
        console.log(this.$route.params.myid)
    },
    mounted() {
        axios({
            url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=5133320`,
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1630385868964095603900417"}',
                'X-Host': 'mall.film-ticket.film.info'
            }
        }).then(res=>{
            // console.log(res.data.data.film.photos)
            this.filmInfo = res.data.data.film  
            //赋值给一个对象 因为拿到的是对象

        })
    },
}
</script>
<style>
.van-nav-bar__title{
    font-size: 1.25rem;
}
</style>
<style lang="scss" scoped>
.film{
    background-color: #f4f4f4;
    overflow: hidden;
}
.poster{
    width: 100%;
    height:13.125rem;
    background-position: center;
    background-size: cover;    
}
.conter{
    padding: .9375rem;
    background-color: white;
    margin-bottom: 1.25rem;
}
.name{
    overflow: hidden;
    position: relative;

    margin-bottom: .3125rem;
    height: 1.875rem;
    .spanname{
    font-size: 1.25rem;
    }    
    .typename{
        position: absolute;
        bottom: .625rem;
        display: inline-block;
        margin-left: .25rem;
        line-height: 0.875rem;
        text-align: center;
        color: white;
        font-size: 0.75rem;
        width: 1.25rem;
        height: 0.875rem;
        background-color: #d2d6dc;
        border-radius: 2px;
    
    }
    .spangrade{
        float: right;
        color: chocolate;
        font-style:oblique
    }
}
.header{
    font-size: .8125rem;
    color: #797d82;
    line-height: 1.25rem;
    letter-spacing:.0625rem
}
.synopsis{
    line-height:18px;
    margin-top: 1rem;
    font-size: .8125rem;
    color: #797d82;
}
.hidden{
    height:36px;
    line-height:18px;
    overflow: hidden;
}
.jiantou{
    text-align: center;
}
.actios{
    margin-top: 1.15rem;
    height: 12.5rem;
    background-color: white;
    overflow: hidden;
    .actiostop{
        padding: .9375rem;
        font-size: 1.25rem;
    }
}
.avatarAddress{
    // width: 100%;
    width: 5.3125rem;
    height: 5.3125rem;
    margin-left: .625rem;
    background-position: center;
    background-size: cover; 
}
.dataname{
    margin-top: 5px;
    font-size: .8125rem;
    text-align: center;
    color: #333;
}
.datarole{
    font-size: .8125rem;
    color: #797d82;
    text-align: center;
}
.photos{
    overflow: hidden;
    height: 18.75rem;
    margin-top: .625rem;
    margin-bottom: 1rem;
    height: 15.625rem;
    background-color: white;
}
.photostop{
    padding: .9375rem;
    font-size: 1.25rem;
}
.photosimg{
    width: 7.5rem;
    height: 5.3125rem;
    margin-left: .625rem;
    background-position: center;
    background-size: cover;
}


</style>