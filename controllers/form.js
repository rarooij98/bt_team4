const { Keuze } = require('../models')

const form = async (req, res) => {
    res.render('form')
};

const keuze = async (req, res) => {
  const result = await new Keuze({
    locatie: req.body.locatie,
    niveau: req.body.niveau,
    onderwerp: req.body.onderwerp
  });
  result.save(),
  res.redirect('matches')
}

module.exports = {
	form: form,
	keuze: keuze
};