var shoe = require('../models/shoe');
// List of all shoe
// List of all Costumes
exports.shoe_list = async function (req, res) {
    try {
        theshoe = await shoe.find();
        res.send(theshoe);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.shoe_view_all_Page = async function (req, res) {
    try {
        theshoe = await shoe.find();
        res.render('shoe', { title: 'shoe Search Results', results: theshoe });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific shoe.
exports.shoe_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: shoe detail: ' + req.params.id);
};
// Handle shoe create on POST.
// Handle Costume create on POST.
exports.shoe_create_post = async function(req, res) {
console.log(req.body)
let document = new shoe();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.shoe_brand = req.body.shoe_brand;
document.shoe_type = req.body.shoe_type;
document.cost = req.body.cost;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle shoe delete from on DELETE.
exports.shoe_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: shoe delete DELETE ' + req.params.id);
};
// Handle shoe update form on PUT.
exports.shoe_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: shoe update PUT' + req.params.id);
};
