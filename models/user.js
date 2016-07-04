'use strict';
var config = require('../config');


var Mongoose = require('mongoose').connect(config.dbURI);

Mongoose.connection.on('error', function(error) {
    console.log("Oups" + error);
})
var User = new Mongoose.Schema({
    profileId: String,
    fullname: String,
    profilePic: String,
    
  
});

var userModel = Mongoose.model('User', User);


module.exports = {
    Mongoose,
    userModel
};


