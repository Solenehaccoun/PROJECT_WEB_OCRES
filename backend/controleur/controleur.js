const musicmodel = require("../models/Music");

const getAllMusics = (req,res) => {
    musicmodel.find((err,music)=>{
        res.status(200).json(music);
    });
}

const getOneMusic =(req,res) => {
    const id = req.params.id;
	console.log(id);
	musicmodel.findById(id,(err,test)=>
	{res.status(200).json(test);
	});
}

const getGenre =(req,res)=>{
    const genre = req.params.genre;
		console.log(genre);
		musicmodel.find({genre},(err,music)=>
		{
			res.status(200).json(music);
		});
}



const getArtiste =(req,res)=>{
    const artiste = req.params.artiste;
	console.log(artiste);
	musicmodel.find({artiste},(err,music)=>
	{
		res.status(200).json(music);
	});
}

const getTitle =(req,res)=>{
    const title = req.params.title;
	console.log(title);
	musicmodel.find({title},(err,music)=>
	{
		res.status(200).json(music);
	});
}

const getContinent =(req,res)=>{
    const continent = req.params.title;
	console.log(continent);
	musicmodel.find({continent},(err,music)=>
	{
		res.status(200).json(music);
	});
}


const getGenCont = (req,res) =>{
	const genre = req.params.genre;
	 const continent= req.params.continent;
	 console.log(genre);
	 console.log(continent);
 	musicmodel.find({genre,continent},(err,test)=>
 	{res.status(200).json(test);
 	});
}

const deleteOneMusic =(req,res)=>{
	const id = req.params.id;
	console.log(id);
	musicmodel.findByIdAndRemove(id,(err,test)=>
	{res.status(200).json(test);
	});
}


module.exports = {getAllMusics, getOneMusic, getArtiste, getTitle, getContinent, getGenre, getGenCont, deleteOneMusic}