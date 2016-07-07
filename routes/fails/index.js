const express = require('express');
const router = express.Router();
const Fail = require('../../models/fail');


router.get('/new', (req, res) => {

    res.render('fails/new')
})


router.post('/', (req, res) => {

    let image = req.body.image;
    let description = req.body.description;
   	var user = {
    	id:req.user._id,
    	fullname: req.user.fullname
    }
    let newFail = {
        image: image,
        description: description,
        user: user
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



router.get('/:userId' , (req,res) => {

    var userId = req.params.userId;

    Fail.find({'user.id' : userId})
        .then( userFails => {
            res.render('fails/index', { fails: userFails })
        })
        .catch( err => {
            console.log(err)
        });


})


router.delete('/:failId', (req,res) => {

    let failId = req.params.failId;

    Fail.findByIdAndRemove(failId)
        .then(res.redirect('/'))
        .catch(err => console.log(err))

})

module.exports = router;
