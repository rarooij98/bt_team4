const express = require('express')
const session = require('express-session');
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')

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

const connectDB = require('./config/db')
const res = require('express/lib/response')
connectDB();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true   }));

app.use(express.static(__dirname + '/static'));

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/failure',
  })  
)

app.get('/auth/failure', (req, res) => {
  res.send('went wrong');
})

app.get('/protected', IsLoggedIn, (req, res) => {
  res.send('hello');
});

// functie om te connecten naar db //



app.listen(port, () => {
    console.log(`Example app listening on localhost:${port}`)
  });
  
  
  