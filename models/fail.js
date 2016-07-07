'use strict';
var mongoose = require("mongoose");

var failSchema = new mongoose.Schema({
	
	image: String,
	description : String,
	user: {
		id:{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		fullname: String

	}
	
});

module.exports = mongoose.model("Fail",failSchema);
