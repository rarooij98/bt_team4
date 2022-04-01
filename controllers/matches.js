const { Keuze } = require('../models')
const mongoose = require('mongoose')

// alle scholen die voldoen aan de voorkeuren worden opgehaald uit de database
const filteren = async (req, res) => {

    // queries opzetten
    const keuze = await Keuze.findOne();
    const queryLocatie = {locatie: keuze.locatie};
    const queryNiveau = {niveau: keuze.niveau};
    const queryOnderwerp = {onderwerpen:{$in: keuze.onderwerp}};
    const query = {...queryLocatie, ...queryNiveau, ...queryOnderwerp};
    const options = {sort: {name: 1}};
    
    // schema specificeren voor DB collectie 'scholen'
    const Schema = mongoose.Schema;  
    const scholen = mongoose.model('scholen', new Schema({
      name: String,
      locatie: String,
      niveau: String,
      onderwerpen: Array
    }), 'scholen');
    
    const filtered = await scholen.find(query, null, options).lean();
    const title = (scholen.length == 0) ? "Er zijn geen matches gevonden" : "Matches:";
    res.render('matches', {title: title, scholen: filtered});
  };

module.exports = {
	//matches: matches,
	filteren: filteren
};