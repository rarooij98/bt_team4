const chatForm = document.querySelector('#chat-form');

const socket = io('http://localhost:3000');

socket.on('message', message => {
    console.log(message);
});

// message submit 
chatForm.addEventListener('submit', e => {
    e.preventDefault();

    // get message text
    const msg = e.target.elements.msg.value;

    // emit message to server
    socket.emit('chatMessage', msg);
})