//mongoose library
const mongoose = require('mongoose');

//connect to the ecommerce shoppers town database
mongoose.connect('mongodb://localhost/shoppers_town_db');

//acquire the connection to check if its successful or not
const db = mongoose.connection;

// to check for error
db.on('error', console.error.bind(console, 'error connection to db'));

//after successful connection
db.once('open', function(){
    console.log('DB is connected successfully');
});

//exporting the database
module.exports = db;