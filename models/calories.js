// first name: Adi, last name: Levi, id: 315901900
// first name: Jeki, last name: Skif, id: 318973898
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const caloriesSchema = new Schema({
    user_id:{
        type: Number
    },
    year:{
        type: Number
    },
    month:{
        type: Number
    },
    day:{
        type: Number
    },
    id:{
        type: Number
    },
    description:{
        type: String
    },
    category:{
        type: String
    },
    amount:{
        type: Number
    }
});

const Calories = mongoose.model('calories',caloriesSchema)

module.exports = Calories