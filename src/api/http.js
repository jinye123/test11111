import axios from 'axios'
import { message } from 'antd';

//设置请求的配置信息
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/api';
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = '//agent.kongque360.com';
}
axios.defaults.responseType = 'json';
axios.defaults.withCredentials= true;
axios.defaults.transformRequest=[function(data) {
    let param = '';
    for ( const key in data ) {
        if( data.hasOwnProperty(key) ) {
            param += `${key}=${data[key]}&`;
        }
    }
    param = param.substr(0, param.length - 1 );
    return param ? param : null;
}];

//拦截响应请求，统一提示错误信息
axios.interceptors.response.use(function (response) {
    if (response.status >= 200 && response.status < 300 ) {
        if (response.data.code === 1) {
            return Promise.reject(response.data);
        }else {
            return response.data.data
        }
    }
}, function (err) {
    if (err && err.response) {
        err.msg = `连接出错(${err.response.status})!`;
    }else{
        err.msg = '连接服务器失败!'
    }
    return Promise.reject(err);
});


//请求方式
export default {

    post (url, data) {
        return new Promise((resolve,reject)=>{
            axios({
                method: 'post',
                url,
                data: data,
            }).then(res => {
                resolve(res)
            }).catch(e=>{
                message.error(e.msg);
            })
        })
    },

    get (url, params) {
        return new Promise((resolve,reject)=>{
            axios({
                method: 'get',
                url,
                params
            }).then((res) => {
                resolve(res)
            }).catch(e=>{
                message.error(e.msg);
            })
        })
    }
}
