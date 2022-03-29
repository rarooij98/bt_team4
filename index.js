const express = require('express')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const User = require('./models/user')
const sessions = require('express-session');
const app = express()
const router = express.Router()


const reglog = require('./controllers/reglog');

const port = process.env.port || 8000

require('dotenv').config()


const connectDB = require('./config/db')
const res = require('express/lib/response')
connectDB();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true   }));

//Hierdoor blijft de gebruiker ingelogt ookal herlaad de pagina.
app.use(sessions({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());

app.use(express.static(__dirname + '/static'));

app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());


app.get('/', (req, res) => {
    res.render('home')
   })



// functie om te connecten naar db //



app.listen(port, () => {
    console.log(`Example app listening on localhost:${port}`)
  })
  
  
  