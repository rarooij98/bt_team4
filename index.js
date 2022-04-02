const express = require('express');
const routes = require('./routes');
const app = express();
const { engine } = require('express-handlebars');
const connectDB = require('./config/db');
const port = process.env.port || 8000
const ioPort = process.env.ioPort || 3000
const bodyParser = require('body-parser');
const socketio = require('socket.io');
require('dotenv').config();
connectDB();

// session
const session = require('express-session');
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// socket.io
const http = require('http');
const server = http.createServer(app);
const io = socketio(server);

// handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
// static folder
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', routes);

// more socket
io.on('connection', socket => {
  console.log('New WS Connection');
  socket.emin('message', 'Welcome to chatroom!');

  // wanneer een user connects
  socket.broadcast.emit('message', 'A user has joined the chat');

  // wanneer een user disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  })
}); 

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`);
});

server.listen(ioPort, () => {
  console.log(`Example app listening on localhost:${ioPort}`);
});
