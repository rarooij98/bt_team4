// require MongoDB
const mongoose = require('mongoose')

// connect to MongoDB
const connectDB = () => {
  try {
    mongoose.connect (process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB - connected')
  } catch (err) {
    console.log ('error occured while trying to connect to db',)
  }
 }
 module.exports = connectDB

<<<<<<< HEAD
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
  
  
  
=======
>>>>>>> a322f40f343c10681a498f88f8b54eaba770a017
