var express = require('express');
const shoe_controlers= require('../controllers/shoe');
var router = express.Router();
/* GET costumes */
router.get('/', shoe_controlers.shoe_view_all_Page );
router.get('/detail', shoe_controlers.shoe_view_one_Page);
router.get('/create', shoe_controlers.shoe_create_Page);
router.get('/update', shoe_controlers.shoe_update_Page);
router.get('/delete', shoe_controlers.shoe_delete_Page);
module.exports = router;