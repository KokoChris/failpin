'use strict';
if (process.env.NODE_ENV) {
	module.exports = {
    host:process.env.host || "",
    dbURI: process.env.dbURI,
    sessionSecret: process.env.sessionSecret,
    twitter:{
    	consumerKey: process.env.consumerKey,
    	consumerSecret: process.env.consumerSecret,
    	callbackUrl: process.env.callbackUrl,
    	profileFields:["id","displayName", "photos"]
    }
  }


} else {
	module.exports = require("./development.json")
}
