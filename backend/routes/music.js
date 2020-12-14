var express = require('express');
var router = express.Router();
const Music = require("../models/Music");
const MusicControl = require("../controleur/controleur");



//Route pour gets différentes info utiles au Dashboard
router.get("/",MusicControl.getAllMusics);
router.get("/:id",MusicControl.getOneMusic);
router.get("/artiste/:artiste",MusicControl.getArtiste);
router.get("/titre/:titre",MusicControl.getTitle);
router.get("/genre/:genre",MusicControl.getGenre);
router.get("/continent/:continent",MusicControl.getContinent);
router.get("/genre/:genre/:continent",MusicControl.getGenCont);

//Delete avec ID
router.delete("/:id",MusicControl.deleteOneMusic);

//POST grace au form
router.post("/", async function(req, res, next) {

  
    const music = new Music({
      titre :req.body.titre,
      artiste: req.body.artiste,
      album: req.body.album,
      genre: req.body.genre,
      date: req.body.date,
      pictureUrl: req.body.pictureUrl,
      nombreecoute: req.body.nombreecoute,
      continent : req.body.continent,
    
    })
      const response= await music.save();
      
      res.json(response);
    
    });


module.exports = router;