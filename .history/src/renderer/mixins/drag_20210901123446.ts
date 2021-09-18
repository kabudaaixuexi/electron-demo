let ZINDEX = Number(1)
// 可拖拽组件：pc和Mobile
function useMove(el?:any, els?: any[], reset?: boolean) {
    let temEls: { x: any; y: any }[] = []
    if (!sessionStorage.getItem('ELS')) {
        Array.from(els).map(_item => { 
            temEls.push({
                x:_item.offsetLeft + parseInt((<any>getComputedStyle(_item))['margin-left']),
                y:_item.offsetTop + parseInt((<any>getComputedStyle(_item))['margin-right'])
            })
        })
        sessionStorage.setItem('ELS',JSON.stringify(temEls))
    } else {
        const ELS = JSON.parse(sessionStorage.getItem('ELS'))
        Array.from(els).forEach((vm, index) => {
            // vm.style.transition = '600ms';
            vm.style.zIndex = '1'
            vm.style.left = ELS[index]['x'] + 'px'
            vm.style.top = ELS[index]['y'] + 'px'
        })
    }
    if (reset) {
        const ELS = JSON.parse(localStorage.getItem('ELS'))
        Array.from(els).forEach((vm, index) => {
            vm.style.transition = '600ms';
            vm.style.height = '100px';
            vm.style.zIndex = '1'
            vm.style.left = ELS[index]['x'] + 'px'
            vm.style.top = ELS[index]['y'] + 'px'
        })
        return
    }
    el.style.position = 'absolute';
    let offsetX: number, offsetY: number, oL: number, oT: number, oLeft: number, oTop: number;
    const browser = {
        versions: function () {
            const u = navigator.userAgent;
            return {
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //判断设备
                //  ..... 其他设备信息
            };
        }(),
    }
    if (!browser.versions.mobile) {//Pc
        if (el != null) {
            el.addEventListener('mousedown', function (event: any) {
                if (event.button == 0 && el != null) {
                    const lexObj: any = getComputedStyle(el);
                    offsetX = event.pageX - el.offsetLeft + parseInt(lexObj['margin-left']);
                    offsetY = event.pageY - el.offsetTop + parseInt(lexObj['margin-right']);
                    const move = function (event: any) {
                        if (el != null) {
                            el.style.transition = 'none';
                            ZINDEX ++; el.style.zIndex = ZINDEX
                            let x = event.pageX - offsetX;
                            let y = event.pageY - offsetY;
                            if (x < 0) {
                                x = 0;
                            } else if (x > document.documentElement.clientWidth - el.offsetWidth) {
                                x = document.documentElement.clientWidth - el.offsetWidth
                            }
                            if (y < 0) {
                                y = 0;
                            } else if (y > document.documentElement.clientHeight - el.offsetHeight) {
                                y = document.documentElement.clientHeight - el.offsetHeight
                            }
                            el.style.left = x + 'px';
                            el.style.top = y + 'px';
                        }
                        return false;
                    }
                    document.addEventListener('mousemove', move);
                    const stop = function () {
                        document.removeEventListener('mousemove', move);
                        document.removeEventListener('mouseup', stop);
                    }
                    document.addEventListener('mouseup', stop);
                }
                return false;
            });
        }
    } else { //Mobile
        if (el != null) {
            const maxW = document.body.clientWidth - el.offsetWidth;
            const maxH = document.body.clientHeight - el.offsetHeight;
            const defaultEvent = function (e: any) {
                e.preventDefault();
            }
            el.addEventListener('touchstart', function (e: any) {
                const ev = e || window.event;
                const touch = ev.targetTouches[0];
                oL = touch.clientX - el.offsetLeft;
                oT = touch.clientY - el.offsetTop;
                document.addEventListener("touchmove", defaultEvent, false);
                el.addEventListener('touchmove', function (e: any) {
                    const ev = e || window.event;
                    const touch = ev.targetTouches[0];
                    oLeft = touch.clientX - oL;
                    oTop = touch.clientY - oT;
                    if (oLeft < 0) {
                        oLeft = 0;
                    } else if (oLeft >= maxW) {
                        oLeft = maxW;
                    }
                    if (oTop < 0) {
                        oTop = 0;
                    } else if (oTop >= maxH) {
                        oTop = maxH;
                    }
                    el.style.left = oLeft + 'px';
                    el.style.top = oTop + 'px';
                });
                el.addEventListener('touchend', function () {
                    document.removeEventListener("touchmove", defaultEvent);
                });
            });
        }
    }
}


export default useMove;
