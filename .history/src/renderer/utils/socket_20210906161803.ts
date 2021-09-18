const socket = require('socket.io-client')('http://localhost:30001');
socket.on('connect', function () {
    console.clear();
    socket.emit('events', {name:'success'}, (response) => console.log('events:', response))
    socket.emit('identity', {name:'success'}, (response) => console.log('identity:', response));
});
// 重写emit
socket.$emit = function(){
    const selfargs = arguments
    return new Promise((resolve, reject) => {
        console.log(111);
        
        resolve(socket.emit(selfargs))
    })
}
// 监听
socket.on('events', (data) => {
    console.log(data);
});
// 监听
socket.on('identity', (data) => {
    console.log(data);
});
export default socket