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
app.set('views', './views')

// routes //
app.get('/', (req, res) => {
    res.render('index', {text: "Hello world"})
})
  
app.get('/keuzes', (req, res) => {
    res.render('keuzes')
})

// er wordt uit het formulier een keuze gehaald en opgeslagen in de database
// dit kan later ook opgeslagen worden met een sessie ipv opslaan in de db
app.post('/keuzes', upload.single(), (req, res) => {
  db.collection('voorkeuren').insertOne({locatie: req.body.locatie, niveau: req.body.niveau, onderwerp: req.body.onderwerp})
  res.redirect('matches')
})

// alle scholen die voldoen aan de voorkeuren worden opgehaald uit de database
app.get('/matches', async (req, res) => {
  const keuze = await db.collection('voorkeuren').findOne() //keuze document ophalen uit de db
  
  //filter en sorteer opties
  const queryLocatie = {locatie: keuze.locatie};
  const queryNiveau = {niveau: keuze.niveau};
  //const queryOnderwerp = {onderwerp: keuze.onderwerp}; //werkt nog niet
  const query = {...queryLocatie, ...queryNiveau};
  const options = {sort: {name: 1}};
  
  const scholen = await db.collection('scholen').find(query, options).toArray();
  const title  = (scholen.length == 0) ? "Er zijn geen matches gevonden" : "Dit zijn je matches!"; //error handling
  res.render('matches', {title: title, scholen: scholen})
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