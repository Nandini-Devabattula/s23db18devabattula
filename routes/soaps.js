var express = require('express');
const soaps_controllers= require('../controllers/soaps');
var router = express.Router();

/* GET home page. */
/* GET soapss */
//GET request for one soaps.
router.get('/soaps/:id', soaps_controllers.soaps_detail);
module.exports = router;

