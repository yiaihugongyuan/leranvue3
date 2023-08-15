import axios, { type AxiosResponse } from 'axios'
// import store from '@/store'
// create an axios instance
const service = axios.create({
    // process.env.VUE_APP_BASE_API
    baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        const token: string = 'ddddd39'
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
    (response: AxiosResponse) => {
        const s: AxiosResponse = <AxiosResponse>{}
        return response
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
