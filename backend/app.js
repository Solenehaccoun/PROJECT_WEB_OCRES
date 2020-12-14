var express = require("express");
const bodyParser = require('body-parser');
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require('dotenv').config();
const cors = require('cors');

const mongoose = require('mongoose');


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var musicRouter = require("./routes/music");

var app = express();

mongoose.connect(`mongodb+srv://so:${process.env.MONGO_PASS}@cluster0.swbfn.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/music", musicRouter);

module.exports = app;
