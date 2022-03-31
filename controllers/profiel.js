// renders home view
const profiel = async (req, res) => {
    res.render('profiel')
};

// exports home function
module.exports = {
	profiel: profiel
};