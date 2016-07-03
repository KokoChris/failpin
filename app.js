'use strict';

const express = require('express');
const app  = express();
const flash = require('connect-flash');

const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
const passport = require('passport');
const methodOverride = require("method-override");
const session = require('./session');
const config = require('./config');




app.use(express.static('public'));
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());





app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


mongoose.connect(config.dbURI);


app.set('view engine' , 'ejs');
app.use(function (req,res,next) {
	
	res.locals.currentUser = req.user;
	next();
});



app.get('/' , (req, res ) => {
    
      res.send('hey');
});


app.listen(port , () => {
    console.log("Server running on port " + port);
});
