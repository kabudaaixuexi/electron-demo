import { getTranslateReq } from './type'
import axios from 'axios'
import md5 from 'js-md5';

export default {
    /** 翻译 */
    getTranslate:async (payload:getTranslateReq) => {
        const { from = 'auto', to, content } = payload
        const salt = Date.now()
        const sign = md5(`20220328001146641${content}${salt}SwLlj_642jyhjy6LsRGH`)
        const { data } = await axios.get('https://fanyi-api.baidu.com/api/trans/vip/translate', {
            params: {
              from,
              to,
              q: content,
              appid: '20220328001146641',
              salt,
              sign
            }
        })
        return {
            data
        }
    },
}
