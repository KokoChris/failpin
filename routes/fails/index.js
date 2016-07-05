const express = require('express');
const router = express.Router();
const Fail = require('../../models/fail');





router.get('/new', (req, res) => {

    res.render('fails/new')
})


router.post('/', (req, res) => {

    let image = req.body.image;
    let description = req.body.description;
    let newFail = {
        image: image,
        description: description
    }

    Fail.create(newFail)
        .then(fail => res.redirect('/fails'))
        .catch(err => console.log(err));
})


router.get('/', (req, res) => {


    Fail.find()
        .then(fails => {
            res.render('fails/index', { fails: fails })
        })
        .catch(err => {
        	console.log(err);
        })

})


module.exports = router;
