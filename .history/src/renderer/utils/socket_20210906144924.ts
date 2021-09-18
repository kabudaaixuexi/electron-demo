import io from 'socket.io-client';
let socket = io('ws://localhost:30002');
socket.connected = true
console.log(socket);
socket.emit('identity',{name:'success'})
socket.on('connect', function () {
    socket.emit('events',{name:'success'})
    socket.emit('identity',{name:'success'})
    // 发射
    // socket.emit('events', {name: 'push'});
    // socket.emit('identity', {name:'success'}, (response) => console.log('Identity:', response));
});

// 监听
socket.on('events', (data) => {
    // console.log(data);
});
// 监听
socket.on('identity', (data) => {
    console.log(data);
});
export default socket