// renders home view
const chat = async (req, res) => {
    res.render('chat')
};

// exports home function
module.exports = {
	chat: chat
};