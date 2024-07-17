// first name: Adi, last name: Levi, id: 315901900
// first name: Jeki, last name: Skif, id: 318973898
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const developersSchema = new Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    id:{
        type: Number
    },
    email:{
        type: String
    },
});

const Developers = mongoose.model('developers',developersSchema)

module.exports = Developers