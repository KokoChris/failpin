'use strict';

const express = require('express');
const app  = express();


const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
// var mongoose = require('mongoose');
const passport = require('passport');
const methodOverride = require("method-override");
const authRoutes = require('./routes/auth');
const failRoutes = require('./routes/fails');

const session = require('./session');
const config = require('./config');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

require('./auth')();
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

app.use(methodOverride("_method"));

// mongoose.connect(config.dbURI);

app.set('view engine' , 'ejs');
app.use(function (req,res,next) {
	
	res.locals.currentUser = req.user;
	next();
});

app.use('/auth', authRoutes);
app.use('/fails', failRoutes);

app.get('/' , (req, res ) => {
    
      res.redirect('/fails');
});


app.listen(port , () => {
    console.log("Server running on port " + port);
});

