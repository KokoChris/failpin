const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
})

router.get('/twitter',
    passport.authenticate('twitter'),  function(req, res) {});

router.get('/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/' }),
    (req, res) => {

       
        res.redirect('/');

    })

module.exports = router;
