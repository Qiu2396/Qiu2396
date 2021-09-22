<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
   <div>
        <div class="filmscity" @click="handleclick">
            {{$store.state.cityname}}
            <van-icon name="arrow-down" size='12px' />
        </div>
        <film-swiper class="swiperbackground" :key="datalis.length">
          <film-swiper-item class="swiperitem" v-for="data in datalis" :key="data.id"><img :src="data.imgUrl"></film-swiper-item>
        </film-swiper>
        <film-header class="sticky"></film-header>
        <router-view></router-view>
    </div>
</van-pull-refresh>
   
</template>
<script>
import filmSwiper from '@/components/films/FilmSwiper'
import filmSwiperItem from '@/components/films/filmSwiperItem'
import filmHeader from '@/components/films/Filmheader'
import axios from 'axios'
import FilmSwiper from '../components/films/FilmSwiper.vue'
import {Toast} from 'vant'
// import FilmSwiper from '../components/films/FilmSwiper.vue'
export default {
      data() {
        return {
          datalis:[],
          isLoading: false,
        }
      },
      components:{
        filmSwiper,
        filmSwiperItem,
        filmHeader
      },
      methods: {
        onRefresh() {
          setTimeout(() => {
            Toast('刷新成功');
            location.reload();
            this.isLoading = false;
          }, 500);
        },
        handleclick(){
            this.$router.push('/city')
            this.$store.commit('clearCinema')
        },
      },
      
      mounted() {
        axios.get('banner.json').then(res=>{
          this.datalis = res.data.banner
        })
      },
}
</script>
<style lang="scss" scoped>
.filmscity{
  position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0,0,0,.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;
}
  .swiperitem{
    img{
      width: 100%;
    }
  }
  // 把正在热映固定到顶部
  .sticky{
    position: sticky;
    top: 0;
    background-color: white;
  }
</style>