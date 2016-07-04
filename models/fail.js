var mongoose = require("mongoose");

var failSchema = new mongoose.Schema({
	
	image: String,
	description : String,
	
});

module.exports = mongoose.model("Fail",failSchema);
