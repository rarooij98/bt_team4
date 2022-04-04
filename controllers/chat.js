// renders home view
const User = require('../models/user');
let session;

// renders home view
const chatroom = async (req, res) => {
    session = req.session;

    User.findOne({email: session.email}).lean().then(user => {
        res.render('chatroom', {
            user:user,
        })

    })
};

const chat = async (req, res) => {
    session = req.session;

     User.findOne({email: session.email}).lean().then(user => {
        res.render('chat', {
            user:user,
        })

    })
};

// exports home function
module.exports = {
	chat: chat,
    chatroom: chatroom
};