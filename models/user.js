const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    gebruikersnaam: {
        type: String,
        required: true,
        unique: true
    },
    wachtwoord: {
        type: String,
        required: true
    }
})

const keuzeSchema = new Schema({
    locatie: String,
    niveau: String,
    onderwerp: [String]
});

const User = mongoose.model('User', userSchema)
const Keuze = mongoose.model('Keuze', keuzeSchema)

module.exports = User
module.exports = Keuze
