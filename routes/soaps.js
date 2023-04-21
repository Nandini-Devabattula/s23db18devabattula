var express = require('express');
const soaps_controllers= require('../controllers/soaps');
var router = express.Router();

/* GET home page. */
/* GET soapss */
//GET request for one soaps.
router.get('/', soaps_controllers.soaps_view_all_Page);
router.get('/detail', soaps_controllers.soaps_view_one_Page);
router.get('/create', soaps_controllers.soaps_create_Page);
router.get('/update', soaps_controllers.soaps_update_Page);
router.get('/delete', soaps_controllers.soaps_delete_Page);


module.exports = router;

