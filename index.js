require('https').globalAgent.options.rejectUnauthorized = false;
const express = require('express')
const routes = require('./routes')
const app = express()
const session = require('express-session');
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
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

// ---------------------------------------------------------------------
// From here is the google login + passport
// ---------------------------------------------------------------------

require('https').globalAgent.options.rejectUnauthorized = false;
require('./config/google');

const passport = require('passport');
app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());

function IsLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.get('/', (req, res) => {
  res.render('home');
});

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

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`)
});