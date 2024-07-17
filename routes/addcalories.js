// first name: Adi, last name: Levi, id: 315901900
// first name: Jeki, last name: Skif, id: 318973898
const express = require('express');
const router = express.Router();
const Calories = require('../models/calories')

/* GET home page. */
router.post('/', async (req, res) => {
    //send new data calories to mongo
    try{
        const {user_id ,year, month, day, description, category, amount} = req.body;
        const newCalorie = new Calories({ user_id,year, month, day,id: new Date().getTime(), description, category, amount});
        await newCalorie.save().then(() => console.log('Data saved'));
        res.status(201).send('Calorie consumption item added');
    } catch (err){
        console.log(err);
        res.status(400).send(err.message);
    }
});

module.exports = router;
