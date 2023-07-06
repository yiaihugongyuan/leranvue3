
import service from '@/utils/request'
import qs from 'qs'

export function postData(path, data, params = {}) {
    return service({
        params: {
            action: path,
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
    return service({
        params: {
            action: path,
            ...params
        }
    })
}

// 向服务器发送数据删除的通用函数
// path = 路径，即action=？
export function delData(path, params = {}) {
    return service({
        params: {
            action: path,
            ...params
        }
    })
}

export function datamethod(data) {
    return postData('datatable', data)
}
