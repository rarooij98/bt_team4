const express = require('express');
const routes = require('./routes')
const app = express()
const {engine} = require('express-handlebars')
const connectDB = require('./config/db')
const port = process.env.port || 8000
const bodyParser = require('body-parser');
const session = require('express-session');

require('dotenv').config()
connectDB();

// session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

// handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true}));
// static folder
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true}));

// routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`Example app listening on localhost:${port}`)
  })