var express = require("express");
var router = express.Router();
const Thing = require("../models/Thing"); 

/* GET home page. */
router.post("/", async function(req, res, next) {

  
const thing = new Thing({
  description :req.body.description,
  title: req.body.title,
  imageUrl: req.body.imageUrl,
  userId: req.body.userId,
  price: req.body.price,
})
  const response= await thing.save();
  
  res.json(response);

});

module.exports = router;
