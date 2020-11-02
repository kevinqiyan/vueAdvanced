import axios from 'axios'
import { config } from 'vue/types/umd';
const serveAjax = {
    baseURL:process.env.baseURL,
    timeout:10000,
    headers:{
        "content-type": "application/json;charset=UTF-8"
    }
};
const instance = axios.create(serveAjax)
// 添加请求拦截器
instance.interceptors.request.use(config=>{
    return config
})
// 添加响应拦截器
instance.interceptors.response.use(
    response=>{
        const res = response.data
        if(res.err_code === 0){
            return res
        }else{
            console.log(res);
        }
    },
    error =>{
        console.log(error);
        // 出现错误返回Promise
        return Promise.reject(error)
    }
)
export default instance