const chatForm = document.querySelector('#chat-form');
const chatMessages = document.querySelector('.chat-messages');

const socket = io('http://localhost:3000');


// message from server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);

    // scholl down
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

// message submit 
chatForm.addEventListener('submit', e => {
    e.preventDefault();

    // get message text
    const msg = e.target.elements.msg.value;

    // emit message to server
    socket.emit('chatMessage', msg);
})

// output message to dom
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="text">${message}</p>`;
    document.querySelector('.chat-messages').appendChild(div);
}