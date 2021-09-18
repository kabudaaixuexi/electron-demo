// const socket = require('socket.io-client')('http://localhost:30001');
// socket.on('connect', function () {
//     console.clear();
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

export default (socketUrl: string = 'http://localhost:30001') => {
    const socket = require('socket.io-client')(socketUrl)
    socket.on('connect', function (data: any) {
        console.log(data)
        // console.clear()
        // socket.emit('events', { name: 'success' }, (response: any) => console.log('events:', response))
        // socket.emit('identity', { name: 'success' }, (response: any) => console.log('identity:', response))
    })
    // 监听
    socket.on('events', (data: any) => {
        console.log(data)
    })
    // 监听
    socket.on('identity', (data: any) => {
        console.log(data)
    })
    return socket
}