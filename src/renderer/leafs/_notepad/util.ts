
const { ipcRenderer } = require("electron");
import axios from 'axios'

export const listenerDrag = function () {
    var resize = (document.querySelector(".middle") as any);
    var left = (document.querySelector(".notepad_sidebar_left") as any);
    var right = (document.querySelector(".notepad_sidebar_cont") as any);
    var box = (document.querySelector(".notepad_sidebar") as any);
    // console.log(resize, left, right, box, 'lkhghjk');
    resize.onmousedown = function (e) {
        var startX = e.clientX;
        resize.left = resize.offsetLeft;
        document.onmousemove = function (e) {
            var endX = e.clientX;
            var moveLen = resize.left + (endX - startX);
            var maxT = box.clientWidth - resize.offsetWidth;
            if (moveLen < 120) moveLen = 120;
            if (moveLen > maxT - 500) moveLen = maxT - 500;
            resize.style.left = moveLen;
            left.style.width = moveLen + "px";
            right.style.width = (box.clientWidth - moveLen - 5) + "px";
        }
        document.onmouseup = function (evt) {
            evt.stopPropagation()
            document.onmousemove = null;
            document.onmouseup = null;
            resize.releaseCapture && resize.releaseCapture();
        }
        resize.setCapture && resize.setCapture();
        return false;
    };
};
// 重写所有图片，添加双击事件
export const repaintImg = (el) => {
    Array.from(el.children).map(el => {
        if (el.localName == 'img') {
            if(el.clientHeight < el.clientWidth) {
                el.style.height = 'auto'
                el.style.width = "120px"
            } else {
                el.style.width = 'auto'
                el.style.height = "120px"
            }
            el.addEventListener('dblclick', (el) => {
                const url = el.target.currentSrc
                const len = url.split('/')
                const title = len[len.length - 1]
                ipcRenderer.invoke("open-win", { url, title });
            })
        }
        if(Array.from(el.children).length){
            repaintImg(el)
        }
    })
}
import Template from './index.vue'
export const listenerDrop = (el) => {
    el.addEventListener('dragover', (ev) => {
        ev.preventDefault();
    })
    el.addEventListener('drop', (e) => {
        var df = e.dataTransfer;
        var dropFiles = []; // 存放拖拽的文件对象

        if (df.items !== undefined) {
            // Chrome有items属性，对Chrome的单独处理
            for (var i = 0; i < df.items.length; i++) {
                var item = df.items[i];
                // 用webkitGetAsEntry禁止上传目录
                if (item.kind === "file" && item.webkitGetAsEntry().isFile) {
                    var file = item.getAsFile();
                    dropFiles.push(file);
                }
            }
        }

        // 追加图片
        const appendImg = async (ev) => {
            let data = new FormData() //初始化时将form Dom对象传入
            data.append('file', ev) //将imagefile键追加进去，值为input-file的dom对象，否则服务端无法获取file
            const { data:result } = await axios.post("http://124.220.16.124:8099/upload/setFilesNote",data)
            // const img_src = URL.createObjectURL(ev);
            Template.setup().changeStyle({
                command: 'insertImage',
                value: result.data
            })
            repaintImg(el)
        }
        // 追加pdf
        const appendOther = (ev) => {
            const template = `<iframe width="300px" height="400px" src="${URL.createObjectURL(ev)}" frameborder="0"></iframe>`
            Template.setup().changeStyle({
                command: 'insertHTML',
                value: template
            })
        }
        dropFiles.map(ev => {
            // console.log(ev, 'ev');
            // console.log(Template.setup(),'Template');
            // 如果拖进来的是图片
            ev['type'].indexOf('image') !== -1 && appendImg(ev)
            // 如果拖进来的是pdf
            ev['type'].indexOf('pdf') !== -1 && appendOther(ev)
        })
    })
}

/**
* 将DOM转换为虚拟DOM(这里使用的是递归的方法，但是在真正的vue源码中使用的 栈结构，使用栈存储 )
*/
class VNode {
    constructor(tag, data, value, type) {
        let that = (this as any)
        that._tag = tag && tag.toLowerCase();
        that._data = data;
        that._value = value;
        that._type = type;
        that.children = [];
    }
    appendChild(vnode) {
        let that = (this as any)
        that.children.push(vnode);
    }
}
export const getVNode = (node) => {
    /**
     * 1、获取到节点的类型，判断是元素节点还是文本节点 1 元素节点 3 文本节点
     *    - 元素节点
     *      + 获取到元素的 name 与 attr
     *      + 获取到的属性是一个伪数组，将伪书组转换为对象
     *    - 文本节点    
    */
    let nodeType = node.nodeType;

    let _vnode = null;
    if (nodeType === 1) { // 元素节点              
        let nodeName = node.nodeName;

        let attrs = node.attributes;
        let attrObj = {};
        for (let i = 0; i < attrs.length; i++) {
            attrObj[attrs[i].nodeName] = attrs[i].nodeValue;
        }
        // 元素节点没有 value
        _vnode = new VNode(nodeName, attrObj, undefined, nodeType);

        // 有子元素的情况
        let childNodes = node.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            let childNode = getVNode(childNodes[i]);
            _vnode.appendChild(childNode);
        }

    } else if (nodeType === 3) { // 文本节点没有标签与属性
        _vnode = new VNode(undefined, undefined, node.nodeValue, nodeType);
    }
    return _vnode;
}

/*
* 将虚拟DOM转化为DOM   
* 递归会影响性能，
* 真正的vue源码使用的是 vue + 栈 数据类型
*/
export const creatEmptyVNode = () => {
    return {
        children: [],
        _data: {
            contenteditable: "true",
            allowdrop: "true",
            class: `notepad_sidebar_cont`
        },
        _tag: "article",
        _type: 1,
        _value: undefined
    }
}

export const parse = (vnode) => {
    let _node = null;
    let type = vnode._type;
    if (type === 1) { // 元素节点
        _node = document.createElement(vnode._tag);
        // 属性
        let _data = vnode._data;
        // console.log(Object.keys(_data)); 得到一个使用key组成的数据
        // Object.keys(_data).forEach(key => {
        //     let attrName = key;
        //     let attrValue = _data[key];
        //     _node.setAttribute(attrName, attrValue);
        // })
        Object.entries(_data).forEach(([attrName, attrValue]) => {
            _node.setAttribute(attrName, attrValue);
        })

        // 含有子节点
        let children = vnode.children;
        children.forEach(item => {
            let childNode = parse(item);
            _node.appendChild(childNode);
        })

    } else if (type === 3) { // 文本节点
        return document.createTextNode(vnode._value); // 创建一个文本节点
    }
    return _node;
}
