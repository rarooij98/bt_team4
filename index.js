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