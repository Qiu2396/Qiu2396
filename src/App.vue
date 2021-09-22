<template>
  <div>
    <!-- 路由容器 -->
    <div>
      <router-view></router-view>
    </div>
    <!-- <input type="text" v-model="name">
    <button @click="handelclick">click</button>
    <ul>
      <li v-for="(item,index) in datalist" :key="index">{{item}}</li>
    </ul> -->

    <tabbar v-show="$store.state.istabbarshow" class="mytabbar" ref="mytabbar"></tabbar>
  </div>
</template>
<style>
  *{
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }
  html,body{
    height: 100%;
  }
  ul{
    list-style: none;
  }
 

</style>

<script>
import tabbar from './components/Tabbar'
import Vue from 'vue'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css'; 
import Tabbar from './components/Tabbar.vue'

Vue.use(Vant);
//es6导出语法
export default {
  data() {
    return {
      myname:'qiuhan',
      name:'',
      datalist:[]
    }
  },
  components:{
    tabbar
  },
  methods: {
    handelclick(){
      console.log(this.name)
      this.datalist.push(this.name)
    }
  },
  mounted() {
    console.log(this.$refs.mytabbar)

  },
}
</script>