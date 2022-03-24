const express = require('express')
const app = express()
const req = require('express/lib/request')
const res = require('express/lib/response')
const {redirect} = require('express/lib/response')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({dest: 'static/uploads/'})
const {MongoClient} = require('mongodb')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 3000
let db = null

// middleware //
app.use(express.static('static'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

// set view engine //
const {engine} = require('express-handlebars')
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'views')

// routes //
app.get('/', (req, res) => {
    res.render('index')
})
  
app.get('/keuzes', (req, res) => {
    res.render('keuzes')
})

app.get('/matches', (req, res) => {
    res.render('matches')
}) 
  
// 404  //
app.get('*', (req, res) => {
    res.send('404 Not Found')
})

// connectie naar db //
async function connectDB() {
  const uri = process.env.CONNECTION_STRING
  const options = {useUnifiedTopology: true, useNewUrlParser: true}
  const client = new MongoClient(uri, options)
  await client.connect()
  db = client.db(process.env.DB_NAME)
}

// start de server //
app.listen(port, () => {
  console.log(`Listening on port 3000...`)
  connectDB()
    .then(() => {
      console.log('We have a connection to mongo!')
    })
    .catch((error) => {
      console.log(error)
    })
})