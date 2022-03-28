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

const User = mongoose.model('User', userSchema)

module.exports = User

// module.exports = mongoose.model('login', userSchema)

