import axios from 'axios'
import { getToken } from '@/utils/auth'
// import store from '@/store'
// create an axios instance
const service = axios.create({
  // process.env.VUE_APP_BASE_API
  baseURL: import.meta.VITE_BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    const token = getToken()
    if (token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['user-token'] = token
    }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  response => {
    const resType = typeof response
    if (resType === 'object' && Object.prototype.hasOwnProperty.call(response, 'data')) {
      const data = response.data
      // 查询服务器返回码
      if (Object.prototype.hasOwnProperty.call(data, 'code')) {
        const rtCode = parseInt(data.code)
        if (rtCode < 0) { // 如果服务器返回了登录超时等类型错误码
          // 显示登录窗口
          const msg = Object.prototype.hasOwnProperty.call(data.meta, 'msg') ? data.meta.msg : '服务器返回错误码：' + rtCode
          return Promise.reject(msg)
        }
        return data
      } else {
        return data
      }
    }
  },
  error => {
    //ElMessage({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)
export default service
