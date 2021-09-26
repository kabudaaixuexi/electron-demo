// const socket = require('socket.io-client')('http://localhost:30001');
// socket.on('connect', function () {
//     // console.clear();
//     socket.emit('events', {name:'success'}, (response) => console.log('events:', response))
//     socket.emit('identity', {name:'success'}, (response) => console.log('identity:', response));
// });

// // 监听
// socket.on('events', (data) => {
//     console.log(data);
// });
// // 监听
// socket.on('identity', (data) => {
//     console.log(data);
// });
// export default socket

const socket = require('socket.io-client')('http://192.168.5.85:30001');
socket.on('connect', function () {
    // socket.emit('config', {name:'save??'}, (response) => console.log('hut2:', response));
});
export default socket


