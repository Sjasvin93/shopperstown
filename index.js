//including the express library
const express = require('express');

//initializing the express
const app = express();

//setting the port number
const port = 8000;

//making the app listener for the server
app.listen(port , function(err){
    if(err){
        console.log(`Error in starting the server: ${err}`);
    }
    console.log(`Server is up and running on port: ${port}`);
});