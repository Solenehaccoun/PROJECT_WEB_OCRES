const mongoose = require('mongoose');

const musicSchema = mongoose.Schema({

    titre : { type: String, required: true },
    artiste: { type: String, required: true }, 
    album: { type: String, required: true }, 
    genre: { type: String, required: true },
    date: { type: Date, required: true },
    pictureUrl: { type: String, required: true },
    nombreecoute: { type: Number, required: true },
    continent : { type: String, required: true }

});

module.exports = mongoose.model('Music', musicSchema);