
// first name: Adi, last name: Levi, id: 315901900
// first name: Jeki, last name: Skif, id: 318973898
const express = require('express');
const router = express.Router();
const Users = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'the Calorie Tracker API' });
  // const kitty = new Users({ id: '315901900',first_name:'adi',last_name:'levi',birthday:'05/05/2020' });
  // kitty.save().then(() => console.log('meow'));
});

module.exports = router;
