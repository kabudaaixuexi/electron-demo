let socket = io('http://localhost:3008');
let response
socket.__proto__.response = []
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
   socket.__proto__.response.push(data)
});
export default socket