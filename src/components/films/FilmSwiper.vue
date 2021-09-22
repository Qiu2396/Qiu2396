<template>
    <div class="swiper-container qiuhan">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<style>
.swiper-container {
    width: 23.4375rem;
    height: 12.5rem;
} 
</style>
<script>
// import Switer from 'swiper'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
    mounted() {
        new Swiper ('.qiuhan', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true,
        
        
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        } 
        })  
    },
          
}
</script>