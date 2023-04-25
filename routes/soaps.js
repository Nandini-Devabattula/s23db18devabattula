var express = require('express');
const soaps_controllers= require('../controllers/soaps');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
  }  
//GET request for one soaps.
router.get('/', soaps_controllers.soaps_view_all_Page);
router.get('/detail', soaps_controllers.soaps_view_one_Page);
router.get('/create', soaps_controllers.soaps_create_Page);
router.get('/update', soaps_controllers.soaps_update_Page);
router.get('/delete', soaps_controllers.soaps_delete_Page);
/* GET update soaps page */
//router.get('/update', soaps_controllers.soaps_update_Page);
/* GET update costume page */
router.get('/update', secured,soaps_controllers.soaps_update_Page);




module.exports = router;

