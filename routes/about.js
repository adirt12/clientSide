// first name: Adi, last name: Levi, id: 315901900
// first name: Jeki, last name: Skif, id: 318973898

const express = require('express');
const router = express.Router();
const Developers = require('../models/developers');

/* GET users listing. */
router.get('/', async function(req, res, next) {
    //Get the developer detail from mongo
    try {
        const developers = await Developers.find({}, { _id: 0 });
        res.json(developers);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;