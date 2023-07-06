
import service from '@/utils/request'
import qs from 'qs'

export function postData(path, data, params = {}) {
    service.defaults.baseURL = import.meta.VITE_BASE_URL + path
    return service({
        params: {
            ...params
        },
        method: 'post',
        data: qs.stringify(data)
    })
}

// 向服务器发送get请求的通用函数
// path = 路径，即action=？
// data为发送的数据
export function getData(path, params = {}) {
    service.defaults.baseURL = import.meta.VITE_BASE_URL + path
    return service({
        params: {
            ...params
        }
    })
}

// 向服务器发送数据删除的通用函数
// path = 路径，即action=？
export function delData(path, params = {}) {
    service.defaults.baseURL = import.meta.VITE_BASE_URL + path
    return service({
        params: {
            ...params
        }
    })
}

export function datamethod(data) {
    return postData('datatable', data)
}
