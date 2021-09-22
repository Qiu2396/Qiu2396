// 1 axios封装
import axios from 'axios'
import { Toast } from 'vant';
// import loading from '@/assets/loading.png'
var http = axios.create({
    baseURL: 'https://m.maizuo.com',
    timeout: 1000,
    headers: {
        'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.0.4","e":"1630385868964095603900417","bc":"110100"}'
    }
})


//在发请求之前拦截 showLoadi
http.interceptors.request.use(function(config) {


    Toast.loading({
        message: '加载中...',
        forbidClick: true,
    });
    // Toast({
    //     forbidClick: true,
    //     icon: loading,
    //     message: '加载中...',
    //     // size: 240
    //     // none

    // });
    // Toast.resetDefaultOptions();
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

//在成功后拦截 比（then）要早
axios.interceptors.response.use(function(response) {
    Toast.clear(); //主动去除加载中
    return response;
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Toast.clear();
    return Promise.reject(error);
});
export default http