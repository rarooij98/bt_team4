const express = require('express')
const routes = require('./routes')
const app = express()
const {engine} = require('express-handlebars')
require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.port || 8000
connectDB();
const bodyParser = require('body-parser')

// HBS setup
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`)
})