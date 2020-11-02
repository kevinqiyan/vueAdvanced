import axios from './api'
// 主要编写API接口,进行请求数据
export const reqCount = ()=>{
   return axios.get('/Count')
}