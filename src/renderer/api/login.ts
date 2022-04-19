// 仅示例
import request from '@renderer/utils/request'

interface postRegisterReq {
	userName: string
	passWord: string
	nickName?: string
	photo: string
	extData?:object
}
interface postLoginReq {
	userName: any
	passWord: any
}
export default {
	/** 注册 */
	getUserList: async () => {
		const { data } = await request({
			url: '/user/getUserList',
			data: {}
		})
		return data
	},
  /** 注册 */
  postRegister:async (payload:postRegisterReq) => {
      const { data } = await request({
          url: '/user/register',
          data: {...payload}
      })
      return data
  },
  /** 登录 */
  postLogin: async (payload:postLoginReq) => {
      const { data } = await request({
          url: '/user/login',
          data: {...payload}
      })
      return data
  },
  /** 登录 */
  postModify: async (payload:any) => {
	const { data } = await request({
		url: '/user/modify',
		data: {...payload}
	})
	return data
}
}
