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
},
{
    timestamps: true
})

const keuzeSchema = new Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: User,
    // },
    locatie: String,
    niveau: String,
    onderwerp: [String]
});

const User = mongoose.model('User', userSchema)
const Keuze = mongoose.model('Keuze', keuzeSchema)

module.exports = User
module.exports = Keuze
