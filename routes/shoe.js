var express = require('express');
var passport = require('passport');
const shoe_controlers= require('../controllers/shoe');
var router = express.Router();
/* GET costumes */
router.get('/', shoe_controlers.shoe_view_all_Page );
router.get('/detail', shoe_controlers.shoe_view_one_Page);
//router.get('/create', shoe_controlers.shoe_create_Page);
//router.get('/update', shoe_controlers.shoe_update_Page);
//router.get('/delete', shoe_controlers.shoe_delete_Page);
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
router.get('/create',secured, shoe_controlers.shoe_create_Page);
router.get('/update',secured, shoe_controlers.shoe_update_Page);
router.get('/delete',secured, shoe_controlers.shoe_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    }); 
module.exports = router;