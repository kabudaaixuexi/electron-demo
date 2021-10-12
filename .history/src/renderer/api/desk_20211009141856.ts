import request from '@renderer/utils/request'
export default {
    getDeskImgList:async (payload) => {
        const { data } = await request({
            url: '/upload/getFiles',
            data: {...payload}
        })
        return data
    }
} 