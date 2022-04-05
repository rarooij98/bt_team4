require('https').globalAgent.options.rejectUnauthorized = false;
const express = require('express');
const routes = require('./routes');
const app = express();
const { engine } = require('express-handlebars');
const connectDB = require('./config/db');
const port = process.env.PORT || 8000
const bodyParser = require('body-parser');
const socketio = require('socket.io');
// socket.io
const http = require('http').Server(app);
const io = socketio(http);
require('dotenv').config();
connectDB();

// session
const session = require('express-session');
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false

}));

// handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: true }));
// static folder
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// ---------------------------------------------------------------------
// From here is the google login + passport
// ---------------------------------------------------------------------

require('https').globalAgent.options.rejectUnauthorized = false;
require('./config/google');

const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

function IsLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get('/google/callback',
  passport.authenticate('google', {
    // route when logged in
    successRedirect: '/profielgoogle',
    // route when failed to login
    failureRedirect: '/auth/failure',
  })  
)

app.get('/auth/failure', (req, res) => {
  res.send('Something went wrong');
})

app.get('/profielgoogle', IsLoggedIn, (req, res) => {
  res.render('profielgoogle');
  console.log('logged in')

});

app.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
  console.log('logged out')
})

// routes
app.use('/', routes);

// more socket
io.on('connection', socket => {
  console.log('New WS Connection');

  socket.emit('message', 'Welcome to chatroom!');

  // wanneer een user connects
  socket.broadcast.emit('message', 'A user has joined the chat');

  // wanneer een user disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });

  // listen for chatMessage
  socket.on('chatMessage', (msg) => {
    console.log(msg);
    io.emit('message', msg)
  })
}); 

http.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`);
});

//export voor mocha/chai
module.exports = app;