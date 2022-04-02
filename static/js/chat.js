const socket = io('http://localhost:3000');

socket.on('message', message => {
    console.log('message');
});