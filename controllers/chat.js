// renders home view
const User = require('../models/user');
let session;

// renders home view
const chatroom = async (req, res) => {
    res.render('chatroom')
};

const chat = async (req, res) => {
    session = req.session;

    console.log(session.email);

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