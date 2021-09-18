// import io from 'socket.io-client';
// let socket = io('http://localhost:30001');
const socket = require('socket.io-client')('http://localhost:30001');
socket.on('connect', function () {
    console.log('connect!');
    socket.emit('events',{name:'success'})
    socket.emit('identity',{name:'success'})
    // 发射
    // socket.emit('events', {name: 'push'});
    // socket.emit('identity', {name:'success'}, (response) => console.log('Identity:', response));
});

// 监听
socket.on('events', (data) => {
    console.log(data);
});
// 监听
socket.on('identity', (data) => {
    console.log(data);
});
export default socket