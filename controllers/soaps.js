var soaps = require('../models/soaps');
// List of all Costumes
exports.soaps_list = async function(req, res) {

 try{
    thesoaps = await soaps.find();
    res.send(thesoaps);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// for a specific Costume.
exports.soaps_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: soaps detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.soaps_create_post = async function(req, res) {
    console.log(req.body)
    let document = new soaps();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Soap_Name = req.body.Soap_Name;
    document.Soap_cost = req.body.Soap_cost;
    document.Soap_Color = req.body.Soap_Color;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


// Handle Costume delete form on DELETE.
exports.soaps_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: soaps delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.soaps_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: soaps update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.soaps_view_all_Page = async function(req, res) {
    try{
    thesoaps = await soaps.find();
    res.render('soaps', { title: 'soaps Search Results', results: thesoaps });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };