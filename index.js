// Express setup
const express = require('express')
const app = express()
const req = require('express/lib/request')
const res = require('express/lib/response')
require('dotenv').config()

// Middleware
const multer = require('multer')
const upload = multer({dest: 'static/uploads/'})
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));
app.use(express.json());

// HBS setup
const {engine} = require('express-handlebars')
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Routes
const routes = require('./routes')
app.use('/', routes);

// Connectie database
const port = process.env.port || 8000
let db = null
const connectDB = require('./config/db')
connectDB();

app.listen(port, () => {
  console.log(`Example app listening on localhost:${port}`)
})