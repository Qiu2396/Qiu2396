<template>
    <div class="swiper-container" :class="this.han">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
// import Switer from 'swiper'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'

export default {
    props:{
        qiu:{
            type:Number,
            default:1
        },
        han:{
            default:"qiu"
        }
    },
    mounted() {
        new Swiper ('.'+this.han, {
            slidesPerView: this.qiu,
            // spaceBetween: 10,
            freeMode: true,
        })  
    },
          
}
</script>