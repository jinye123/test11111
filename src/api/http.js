import axios from 'axios'
import qs from 'qs'

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://test.api.zhaoyifen.com/web.app';
} else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = 'https://app.api.zhaoyifen.com/web.app';
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://app.api.zhaoyifen.com/web.app';
}
function checkStatus(response) {
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        return response.data
    }
    return {
        status: -404,
        msg: '请求出错'
    }
}

function checkCode(res) {
    if (res.status === -404) {
        alert(res.msg)
    }
    if (res.data && (!res.code)) {
        alert(res.data.error_msg)
    }
    return res
}

export default {
    post (url, data) {
        return axios({
            method: 'post',
            url,
            data: qs.stringify(data),
            timeout: 20000,
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return Promise.resolve(checkCode(res))
            }
        )
    },
    get (url, params) {
        return axios({
            method: 'get',
            url,
            params,
            timeout: 20000
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then(
            (res) => {
                return Promise.resolve(checkCode(res))
            }
        )
    }
}