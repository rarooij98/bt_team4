// fixing the redirect
require('https').globalAgent.options.rejectUnauthorized = false

const express = require('express')
const session = require('express-session');
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')

// google token
require('./auth');

function IsLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

const passport = require('passport');
const app = express()
app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());

const router = express.Router()


const port = process.env.port || 8000

require('dotenv').config()

// db
const connectDB = require('./config/db')
const res = require('express/lib/response')
connectDB();

// hbs
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// bodyparser
app.use(bodyParser.urlencoded({ extended: true   }));
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true}));


app.get('/', (req, res) => {
  res.render('home');
});

// google 
app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

// routes when using google
app.get('/google/callback',
  passport.authenticate('google', {
    // route when logged in
    successRedirect: '/protected',
    // route when failed to login
    failureRedirect: '/auth/failure',
  })  
)

// route failed to login
app.get('/auth/failure', (req, res) => {
  res.send('Something went wrong');
})

// route when logged in
// app.get('/protected', IsLoggedIn, (req, res) => {
//   res.send(`Hello ${req.user.displayName}`);
// });

app.get('/protected', IsLoggedIn, (req, res) => {
  res.render('protected');
});


// end session
app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('goodbye');
})

app.listen(port, () => {
    console.log(`Example app listening on localhost:${port}`)
  });
  
  
  