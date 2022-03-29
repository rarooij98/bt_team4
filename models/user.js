const mongoose = require('mongoose')
const Schema = mongoose.Schema

const keuzeSchema = new Schema({
    locatie: String,
    niveau: String,
    onderwerp: Array 
});

const Keuze = mongoose.model('Keuze', keuzeSchema)
module.exports = Keuze