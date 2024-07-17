// first name: Adi, last name: Levi, id: 315901900
// first name: Jeki, last name: Skif, id: 318973898
const express = require('express');
const router = express.Router();
const User = require('../models/users')


/* GET users listing. */
router.get('/:id', async function(req, res, next) {

  //Find data user with id and send the response in json to the URL
  try {
    const dataId = req.params.id
    const user = await User.find({"id": dataId});
    if(user.length === 0){
      // res.render('index', { title: "User not found" });
      res.json({ message: "User not found" });
    }else{
      res.json(user)
    }
  } catch (err) {
    res.render('index', { title: "User not found" });
  }
});

module.exports = router;
