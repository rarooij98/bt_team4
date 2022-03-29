const express = require('express')
const app = express()
const {engine} = require('express-handlebars')
require('dotenv').config()
const connectDB = require('./config/db')
const mongoose = require('mongoose')
const User = require("./models/user")
const req = require('express/lib/request')

const reglog = require('./controllers/reglog');

const port = process.env.port || 8000

require('dotenv').config()

//router();

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
    res.render('home')
   })


app.use("/", require('./controllers/reglog'));



app.listen(port, () => {
    console.log(`Example app listening on localhost:${port}`)
  })
  
  
  