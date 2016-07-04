'use strict';
const router = require('express').Router();
const db = require('../models/user');

let findOne = profileId => {
    return db.userModel.findOne({
        'profileId': profileId
    })
}

let createNewUser = (profile,accessToken) => {
    console.log(profile)
    return new Promise((resolve, reject) => {
        let newChatUser = new db.userModel({

            profileId: profile.id,
            fullname: profile.displayName,
            profilePic: profile.photos[0].value,
            token: accessToken
        });

        newChatUser.save(error => {
            if (error) {
                console.log('Create New User Error');
                reject(error);
            } else {
                resolve(newChatUser);
            }
        });
    });
}

let findById = id => {
    return new Promise((resolve, reject) => {
        db.userModel.findById(id, (error, user) => {
            if (error) {
                reject(error);
            } else {
                resolve(user);
            }
        });
    });
}



module.exports = {
    findOne,
    createNewUser,
    findById,

}
