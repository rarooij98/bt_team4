// require mongoose for model implementation
const mongoose = require('mongoose');

// connect met het database, en gooit een error als het failed
const connectDB  = () => {
    try {
        // hier wordt er verbinding gemaakt met het database door middel van een connection string die uit het .env bestand gehaald wordt
        mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        // console log voor als het gelukt is
        console.log('DATABASE CONNECTION SUCCESFUL~!')
    } catch (err) {
        // comsole log voor de error als het niet gelukt is
        console.log('error occurred while try to connect to db:', err)
        throw err;
    }
};

// exporteerd de connectDB functie, zodat het aangeroepen kan worden in een ander bestand
module.exports = connectDB;