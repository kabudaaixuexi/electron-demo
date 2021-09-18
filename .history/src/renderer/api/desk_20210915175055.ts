import request from '@renderer/utils/request'
export default {
    getDeskImgList:async () => {
        const { data } = await request({
            url: '/test/desk'
        })
        return data
    }
} 