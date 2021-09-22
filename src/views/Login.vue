<template>
    <div class="logobackground">
        <div class="citytop">
            <van-icon name="arrow-left" @click="citycross"  class="cityleft" />
            登录
        </div>
        <div class="logohead">
            <div class="logo">logo</div>
            <div>
                <van-form @submit="onSubmit">
                    <van-field
                        v-model="username"
                        name="用户名"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ pattern, message: '请填写用户名' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ pattern, message: '请填写密码' }]"
                    />
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submit">登录</van-button>
                    </div>
                    </van-form>
            </div>
        </div>
        <!-- <button @click="handlclick">登录</button> -->
    </div>
</template>
<style lang="scss" scoped>
body{
    height: 100%;
    background-color: slategrey;
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
        border-bottom: 1px solid #f4f4f4;
        .cityleft{
            float: left;
        }
    }
.logohead{
    margin-top: 10.5rem;
    .logo{
        text-align: center;
        font-size: 1.5625rem;
        margin-bottom: 3.125rem;
    }
}
.logobackground{
    position: fixed ;
    height: 100%;
    width: 100%;
    background-color:white;
    background-size: 100% 100%;
}
</style>
<script>
import obj from '@/util/mixin'
import { Toast } from 'vant';
export default {
    mixins:[obj],
     data() {
        return {
            username: '',
            password: '',
            pattern: /\d{6}/
        };
    },
    methods: {
    //    handlclick(){
    //        setTimeout(()=>{
    //         localStorage.setItem('token','token字段') //在登录页面 添加token字段
    //         //获取query字段 跳转到当前想要的页面
    //         // console.log(this.$route)
    //         this.$router.push(this.$route.query.aaa)
    //        },0)
    //    },
        onSubmit(values) {
        // console.log('submit', values);
        setTimeout(()=>{
            localStorage.setItem('token','token字段') //在登录页面 添加token字段
            //获取query字段 跳转到当前想要的页面
            // console.log(this.$route)
            this.$router.push(this.$route.query.aaa)
           },0)
        },
        citycross(){
            this.$router.back()
        },
    },
}
</script>