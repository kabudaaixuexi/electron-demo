import { getTranslateReq, getVoiceReq } from './type'
import axios from 'axios'
import md5 from 'js-md5';
const getToken = async () => {
    const { data } = await axios.get('https://aip.baidubce.com/oauth/2.0/token', {
        params: {
            grant_type: 'client_credentials',
            client_id: 'GC1mOdfpB7LpQbc9BBbu8FTk',
            client_secret: 'Gm1HKAGSOSuVMrVzR9cpOj5NG90wk3s9'
        }
    })
    return data.access_token
}
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
    /** 合成语音 */
    getVoice:async (payload:getVoiceReq) => {
        const { ctp=1, lan='zh', cuid = 'FVFG259TQ6LR', tok = localStorage.getItem('token') || 'GC1mOdfpB7LpQbc9BBbu8FTk Gm1HKAGSOSuVMrVzR9cpOj5NG90wk3s9', // 产品密钥
            tex = '', // 要合成的文字
            spd = 1, // 语速 1 - 15
            pit = 1, // 音调 1 - 15
            vol = 0, // 音量 1 - 15
            per = 0 // 度小宇=1，度小美=0，度逍遥（基础）=3，度丫丫=4
        } = payload
        const res = await axios.get('http://tsn.baidu.com/text2audio', {
            params: {
              ctp,lan,cuid,tex,tok,spd,pit,vol,per
            }
        })
        if (res.data?.err_no === 502) {
            const token = await getToken()
            localStorage.setItem('token', token)
            const res = await axios.get('http://tsn.baidu.com/text2audio', {
                params: {
                ctp,lan,cuid,tex,spd,pit,vol,per,
                tok: token
                }
            })            
            return {
                data: res.data
            }
        }
        // console.log(data, 'data:audio/mp3;base64,' + Buffer.from(data).toString('base64'));
        return {
            // data: 'data:audio/mp3;base64,' + Buffer.from(data).toString('base64')
            data: res.data
        }
    }
}
