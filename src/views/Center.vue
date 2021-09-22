<template>
    <div>
        <div class="centertop" :style="{
            backgroundImage:'url('+img+')'
        }
        ">
            <div class="avator">
                <div class="logo"></div>
                <div class="name">
                    {{centername}}
                </div>
            </div>
        </div>
        <van-grid :column-num="2">
            <van-grid-item text="电影订单">
                <van-icon name="coupon" color = 'pink' size = '20px' class="coupon" />
                <span class="custom-title">电影票</span>
            </van-grid-item>
            <van-grid-item text="电影订单">
                <van-icon name="cart" color = 'sandybrown' size = '20px' class="coupon" />
                <span class="custom-title">电影订单</span>
            </van-grid-item>
        </van-grid>
        <div>
            <van-cell is-link >
                <template #title center>
                    <van-icon name="coupon" color = 'pink' size = '20px' class="coupon" />
                    <span class="custom-title">电影票</span>
                </template>
            </van-cell>
            <van-cell is-link >
                <template #title center>
                    <van-icon name="bill" color = 'sandybrown' size = '20px' class="coupon" />
                    <span class="custom-title">优惠券</span>
                </template>
            </van-cell>
            <van-cell is-link >
                <template #title center>
                    <van-icon name="gold-coin" color = 'skyblue' size = '20px' class="coupon" />
                    <span class="custom-title">余额</span>
                </template>
            </van-cell>
            <van-cell is-link >
                <template #title center>
                    <van-icon name="setting" color = 'black' size = '20px' class="coupon" />
                    <span class="custom-title">设置</span>
                </template>
            </van-cell>
            
        </div>  
    </div>
    
</template>
<script>
import background from '@/assets/backgroundwd.jpg'
import { Grid, GridItem } from 'vant';
export default {
    data(){
        return {
           img:background,
           centername:'if.'
        }
    },
    methods: {
       
    },
}
</script>
<style lang="scss" scoped>
.custom-title{
    color: #797d82;
    font-size: .875rem;
}
.coupon{
    vertical-align: text-bottom; //把元素的底端与父元素字体的底端对齐。
    padding-right: .3125rem ;
}
.centertop{
    width: 100%;
    height: 12.5rem;
    background-size:cover;
    .avator{
        display: flex;
        align-items: center; //里面的两个元素垂直居中对齐
        width: 12.5rem;
        height: 6.25rem;
        padding: 3.125rem 1.625rem;
        .logo{
            width: 4.375rem;
            height: 4.375rem;
            border-radius: 35px;
            margin-right: 20px;
            border: 2px solid #fff;
            background-color: yellow;
            background-size: cover;
            background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F05%2F20200705105246_vtlkb.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634795973&t=4545210cfcc56dfcd507b86b573abd8f');
        }
        .name{
            color: white;
            width: 5rem;
            height: 1.875rem;
            font-size: 1.125rem;
        }
    }
}
</style>