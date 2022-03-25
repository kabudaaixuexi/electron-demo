import state from './state'

const moon = (self = false, data = state) => {
	const _self = self
	let _data = data
	let _data_proxy = {}
	let _callback = {}

	// const define = () => {
    //     console.log(data,'data');
		// _data = data
	// }
    
	const $_set = (obj) => {
        console.log('$_set');
		Object.keys(obj).map((key) => {
			_data_proxy[key] = obj[key]
		})
	}

	const $_watch = (key, cb, immediate = false) => {
		_callback = Object.assign({}, _callback, {
			[key]: _callback[key] || []
		})

		_callback[key].push(cb)

		_data_proxy = new Proxy(_data, {
			get (target, name, receiver) {
				return Reflect.get(target, name, receiver)
			},
			set (target, name, value, receiver) {
				if (Array.isArray(_callback[name])) {
					_callback[name].map((func) => func(value, _data[name]))
				}
				return Reflect.set(target, name, value, receiver)
			}
		})
        // 初始化时触发监听
        if (immediate) {
            $_set(_data_proxy)
        }
	}

	const $_getData = () => {
		return _data
	}
    if (_self) {
        (_self as any).$_set = $_set;
        (_self as any).$_watch = $_watch;
        (_self as any).$_getData = $_getData
    } 
	return {
		$_set,
        $_watch,
        $_getData
	}
}
export default moon