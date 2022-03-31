// require mongoose
const mongoose = require('mongoose')

// connect to MongoDB
const connectDB = () => {
  try {
    // connect with CONNECTION_STRING in .env file
    mongoose.connect (process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB - connected')
  } catch (err) {
    console.log ('error occured while trying to connect to db',)
  }
 }

// export connectDB function 
module.exports = connectDB
