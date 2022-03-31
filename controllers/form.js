const { Keuze } = require('../models')

const form = async (req, res) => {
    res.render('form')
};

const keuze = async (req, res) => {
  const locatie = req.body.locatie
  const niveau = req.body.niveau
  const onderwerp = req.body.onderwerp
  try {
       const result = await Keuze.create({
          locatie: locatie,
          niveau: niveau,
          onderwerp: onderwerp
        })
      return result,
       res.redirect('matches')
  } catch {
    console.log('Niet gelukt om je keuzes op te slaan')
      res.redirect('form')
  }
}

module.exports = {
	form: form,
	keuze: keuze
};