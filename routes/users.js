//Including the express library
const express = require('express');

//Iniiating the express router
const router = express.Router();

//Including the home controller
const usersController = require('../controllers/users_controller');

//Routing to the signup page
router.get('/sign-up', usersController.signUp);

//Routing to the signin page
router.get('/sign-in', usersController.signIn);

//Exporting the router
module.exports = router;