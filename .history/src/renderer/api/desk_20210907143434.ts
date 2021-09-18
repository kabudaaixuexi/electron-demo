import request from '@renderer/utils/request'
export default {
    getDeskImgList: () => {
        return request({
            url: '/files/desk'
        })
    }
} 