/**
   * @desc 函数防抖
   * @param func 目标函数
   * @param wait 延迟执行毫秒数
   * @param immediate true - 立即执行， false - 延迟执行
   */
export function debounce(func, wait, immediate) {
    let timer;
    return function() {
      let context = this,
          args = arguments;
           
      if (timer) clearTimeout(timer);
      if (immediate) {
        let callNow = !timer;
        timer = setTimeout(() => {
          timer = null;
        }, wait);
        if (callNow) func.apply(context, args);
      } else {
        timer  = setTimeout(() => {
          func.apply(context, args);
        }, wait)
      }
    }
}

/**
 * 名称、值以及过期天数
 * @param key 
 * @param value 
 * @param expiredays 
 */
export function setCookie(key,value,expiredays){
  const exdate:any = new Date();
  exdate.setDate(exdate.getDate()+expiredays);
  document.cookie=key+ "=" +escape(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

/**
 * 
 * @param key 
 * @returns 
 */
export function getCookie(key){
  if (document.cookie.length>0){
      let c_start: any = document.cookie.indexOf(key + "=");
      if (c_start!=-1){
          c_start=c_start + key.length+1;
          let c_end: any = document.cookie.indexOf(";", c_start);
          if (c_end==-1){ 
              c_end=document.cookie.length;
          }
          return unescape(document.cookie.substring(c_start,c_end));
      }
   }
  return "";
}

export const filterUser = (user: any, fa: any) => {
	if (fa === 0) { // 加密
		return JSON.stringify(user)
	}
	if (fa === 1) { //解密
		return JSON.parse(user)
	}
}
