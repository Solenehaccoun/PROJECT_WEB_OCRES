var express = require("express");
var router = express.Router();
const Music = require("../models/Music"); 

/* GET home page. */
router.post("/", async function(req, res, next) {

console.log(req)

const music = new Music({
  titre :req.body.titre,
  artiste: req.body.artiste,
 // album: req.body.album,
  genre: req.body.genre,
  date: req.body.date,
  pictureUrl: req.body.pictureUrl,
  nombreecoute: req.body.nombreecoute,
  continent : req.body.continent,

})
  const response= await music.save();
  
  res.json(response);

});

router.get ("/music", async function(req, res, next) {
    const trouver = await Music.find()
    res.json(trouver);
    
    });
    


module.exports = router;
