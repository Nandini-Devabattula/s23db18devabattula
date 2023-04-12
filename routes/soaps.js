var express = require('express');
const soaps_controllers= require('../controllers/soaps');
var router = express.Router();

/* GET home page. */
/* GET costumes */
router.get('/', soaps_controllers.soaps_view_all_Page );
module.exports = router;

