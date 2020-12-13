var express = require("express");
var router = express.Router();
const Music = require("../models/Music"); 

/* GET home page. */
router.post("/", async function(req, res, next) {

  
const music = new Music({
  titre :req.body.titre,
  artiste: req.body.artiste,
  album: req.body.album,
  genre: req.body.genre,
  date: req.body.date,
  pictureUrl: req.body.pictureUrl,
})
  const response= await music.save();
  
  res.json(response);

});

module.exports = router;
