const error = async (req, res) => {
    res.send('404 Not Found')
};

module.exports = {
	error: error
};