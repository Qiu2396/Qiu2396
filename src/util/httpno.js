// 1 axios封装
import axios from 'axios'


var httpno = axios.create({
    baseURL: 'https://m.maizuo.com',
    timeout: 1000,
    headers: {
        'X-Client-Info': ' {"a":"3000","ch":"1002","v":"5.0.4","e":"1630385868964095603900417","bc":"110100"}'
    }
})


export default httpno