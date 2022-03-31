const Keuze = require("../models/user")

const form = async (req, res) => {
    res.render('form')
};

// er wordt uit het formulier een keuze gehaald en opgeslagen in de collectie Keuzes
const keuze = async (req, res) => {
  const keuzes = new Keuze({
    locatie: req.body.locatie,
    niveau: req.body.niveau,
    onderwerp: req.body.onderwerp
  });
  keuzes.save()
  res.redirect('matches')
};

module.exports = {
	form: form,
	keuze: keuze
};