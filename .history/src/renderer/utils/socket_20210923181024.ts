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

const socket = require('socket.io-client')('http://localhost:30001');
socket.on('connect', function () {
    socket.emit('hut1', {name:'anticipate'}, (response) => console.log('hut1:', response))
    socket.emit('hut2', {name:'anticipate'}, (response) => console.log('hut2:', response));
});

// 监听
socket.on('hut1', (data) => {
    console.log(data);
});
// 监听
socket.on('hut2', (data) => {
    console.log(data);
});
export default socket


