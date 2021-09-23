<template>
    <footer>
        <ul>
            <!-- 声明式导航
            <a href="/#/center">center</a> -->
            <router-link to="/films" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'qiuclass':''">
                    <i class="iconfont icondianying" :class="isActive?'qiuclass':''"></i>
                    <span>电影</span>
                </li>
            </router-link>
            <router-link to="/cinemas" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'qiuclass':''">
                    <i class="iconfont iconyingyuan" :class="isActive?'qiuclass':''"></i>
                    <span>影院</span>
                </li>
            </router-link>   
            <!-- active-class自定义路由组件样式名字 -->
            <router-link to="/center" custom v-slot="{navigate,isActive}">
                <li @click="navigate" :class="isActive?'qiuclass':''">
                    <i class="iconfont iconwode" :class="isActive?'qiuclass':''"></i>
                    <span>我的</span>
                </li>
            </router-link> 
        </ul>
    </footer>
</template>
<style lang="scss" scoped>
    .qiuclass{
        color:pink;
    }
    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3.0625rem;
        background-color: white;
        border-top:1px solid rgba(200,200,200,0.25);
        z-index: 999;
        ul{
            display: flex;
            li{
                flex: 1;
                line-height: 1.5625rem;
                text-align: center;
                display: flex;
                flex-direction: column;
                margin-top: 0.3125rem;
                i{
                    font-size: 1.25rem;
                    margin-bottom: -0.3125rem;
                    opacity: 0.5;   
                }
                span{
                    opacity: 0.8;
                    font-size: .9375rem;


                }

            }
        }
    }
</style>