//mongoose library
const mongoose = require('mongoose');

//connect to the ecommerce shoppers town database
mongoose.connect('mongodb+srv://sjasvin9493:5yds7PgLvhP5pT3w@cluster0.un1pw.mongodb.net/shoppers_town_db?retryWrites=true&w=majority');

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