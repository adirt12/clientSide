// first name: Adi, last name: Levi, id: 315901900
// first name: Jeki, last name: Skif, id: 318973898
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    id:{
        type: Number
    },
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    birthday:{
        type: Date
    },
});

const Users = mongoose.model('users',usersSchema)

module.exports = Users