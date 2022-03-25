const express = require('express')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
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
    res.render('home')
   })


// functie om te connecten naar db //



app.listen(port, () => {
    console.log(`Example app listening on localhost:${port}`)
  })
  
  
  