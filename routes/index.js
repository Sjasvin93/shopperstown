//Including the express library
const express = require('express');

//Iniiating the express router
const router = express.Router();

//Including the home controller
const homeController = require('../controllers/home_controller');

//Routing to the home page
router.get('/', homeController.home);

//Routing to the users controller
router.use('/users', require('./users'));

//Exporting the router
module.exports = router;