const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    age: String
})

module.exports = new mongoose.model('Client', clientSchema)