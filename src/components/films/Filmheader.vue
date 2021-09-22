<template>
    <ul>
        <router-link to="/films/coming" custom v-slot="{navigate,isActive}">
          <li @click="navigate" >
              <span :class="isActive?'flims':''">正在热映</span>
          </li>
        </router-link>
        <router-link to="/films/nowplay" custom v-slot="{navigate,isActive}">
          <li @click="navigate" >
              <span :class="isActive?'flims':''">即将上映</span>
          </li>
        </router-link>
    </ul>
</template>
<style lang="scss" scoped>
    ul{
        display: flex;
        height: 3.0625rem;
        line-height: 3.0625rem;
        border-bottom:1px solid rgba(200,200,200,0.25);
        z-index: 100;
        li{
            flex: 1;
            text-align: center;
        }
        span{
            padding-bottom: .80rem;
        }
    }
    .flims{
       color:pink;
       border-bottom: 2px solid pink;
   } 
</style>