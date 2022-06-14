//including the mongoose library
const mongoose = require('mongoose');

//creating the user database schema
const userSchema = new mongoose.Schema({
    name :{ 
        type: String,
        required: true
    },
    email :{ 
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    },
    type :{
        type: String,
        required: true
    }
});

//naming the collection
const user = mongoose.model('user',userSchema);

//exporting the user collection
module.exports = user;